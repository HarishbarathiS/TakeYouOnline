import { postsByDate, postToMarkdown } from "@/app/blog/posts";

// GET /blog/llms.txt
// The AI-readable layer: a self-authored, machine-friendly description of the
// whole blog, following the llms.txt convention (https://llmstxt.org).
// Generated from posts.ts at request time, so it never drifts from the site.
export async function GET() {
  const parts: string[] = [];

  parts.push("# Harish Barathi S — Blog");
  parts.push("");
  parts.push(
    "> Essays on building software, self-hosting, reverse-engineering, and owning your own data. Written by Harish Barathi S, a software engineer based in Chennai, India."
  );
  parts.push("");
  parts.push(
    "This file is a machine-readable description of the blog, authored by hand so that AI tools understand each post the way the author intended — including a text description of every image. It is generated from the same source as the human-facing pages."
  );
  parts.push("");
  parts.push("## Posts");
  parts.push("");
  for (const post of postsByDate) {
    parts.push(
      `- [${post.title}](/blog/${post.slug}) — ${post.summary} (${post.date}, ${post.readingTime} read)`
    );
  }
  parts.push("");
  parts.push("## Full contents");
  parts.push("");
  for (const post of postsByDate) {
    parts.push(postToMarkdown(post));
    parts.push("");
    parts.push("---");
    parts.push("");
  }

  const body = parts.join("\n").trim() + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
