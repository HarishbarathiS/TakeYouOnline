// ─────────────────────────────────────────────────────────────────────────
// READ-COUNT STORE — the ONLY stateful part of the blog.
//
// Counting model (privacy-friendly "unique reads per day", the technique
// Plausible/Fathom use):
//   visitor_id = sha256( daily_salt + slug + ip + user_agent )
//   • The salt rotates every 24h, so the same reader produces a DIFFERENT
//     hash tomorrow — you get unique-per-day counts AND cannot track anyone
//     across days. No cookies, no personal data stored — just an opaque hash
//     with a TTL. A refresh or revisit within the day does NOT re-count.
//
// This is the single file to change when you move off Vercel/Upstash to your
// home lab. The rest of the app only calls recordView() / getViews() and never
// knows what's underneath.
//
// TODAY (Vercel + Upstash): talks to the Upstash Redis REST API with plain
//   fetch() — no npm dependency. Reads two env vars:
//     UPSTASH_REDIS_REST_URL
//     UPSTASH_REDIS_REST_TOKEN
//
// LATER (home lab): point command() at your own Redis. Easiest: run Upstash's
//   open-source SRH proxy in Docker next to your Redis and just change the env
//   URL/token. Or swap in `ioredis`. Nothing outside this file changes.
//
// If no store is configured, every function degrades gracefully to null so the
// site still builds and runs locally without one.
// ─────────────────────────────────────────────────────────────────────────

import { createHash, randomUUID } from "node:crypto";

const REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const isConfigured = !!REST_URL && !!REST_TOKEN;

const countKey = (slug: string) => `views:${slug}`;

// Run one Redis command via the Upstash REST API. e.g. ["INCR","views:foo"].
async function command(args: (string | number)[]): Promise<unknown> {
  const res = await fetch(REST_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Redis REST error ${res.status}`);
  const data = (await res.json()) as { result?: unknown; error?: string };
  if (data.error) throw new Error(data.error);
  return data.result;
}

// A random salt that lives for one UTC day. Because it rotates, yesterday's
// visitor hashes can never be reproduced — that's what makes this un-trackable.
async function getDailySalt(): Promise<string> {
  const dateKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
  const saltKey = `views:salt:${dateKey}`;
  // Set a fresh salt only if none exists yet today (NX); keep it 2 days.
  await command(["SET", saltKey, randomUUID(), "EX", 172800, "NX"]);
  return String(await command(["GET", saltKey]));
}

function secondsUntilUtcMidnight(): number {
  const now = new Date();
  const nextMidnight = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + 1
  );
  return Math.max(60, Math.floor((nextMidnight - now.getTime()) / 1000));
}

/**
 * Record a read: counts once per (visitor, post, day). Returns the current
 * total afterward — whether or not this particular hit incremented it.
 * Returns null if no store is configured.
 */
export async function recordView(
  slug: string,
  ip: string,
  userAgent: string
): Promise<number | null> {
  if (!isConfigured) return null;
  try {
    const salt = await getDailySalt();
    const visitorHash = createHash("sha256")
      .update(`${salt}:${slug}:${ip}:${userAgent}`)
      .digest("hex");
    const seenKey = `views:seen:${slug}:${visitorHash}`;

    // Atomically claim this visitor for the day. "OK" => first time today.
    const claimed = await command([
      "SET",
      seenKey,
      "1",
      "EX",
      secondsUntilUtcMidnight(),
      "NX",
    ]);

    if (claimed === "OK") {
      return Number(await command(["INCR", countKey(slug)]));
    }
    // Already counted today — return the existing total without incrementing.
    const current = await command(["GET", countKey(slug)]);
    return current == null ? 0 : Number(current);
  } catch {
    return null;
  }
}

/** Read a post's current count without incrementing (null if no store). */
export async function getViews(slug: string): Promise<number | null> {
  if (!isConfigured) return null;
  try {
    const result = await command(["GET", countKey(slug)]);
    return result == null ? 0 : Number(result);
  } catch {
    return null;
  }
}

/** Read many counts at once for the listing page. Missing counts come back 0. */
export async function getManyViews(
  slugs: string[]
): Promise<Record<string, number | null>> {
  if (!isConfigured || slugs.length === 0) {
    return Object.fromEntries(slugs.map((s) => [s, null]));
  }
  try {
    const result = (await command([
      "MGET",
      ...slugs.map(countKey),
    ])) as unknown[];
    return Object.fromEntries(
      slugs.map((s, i) => [s, result[i] == null ? 0 : Number(result[i])])
    );
  } catch {
    return Object.fromEntries(slugs.map((s) => [s, null]));
  }
}
