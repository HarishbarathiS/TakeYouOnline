import { NextResponse } from "next/server";
import { getPost } from "@/app/blog/posts";
import { getViews, recordView } from "@/lib/views";

// GET  /api/views/:slug  -> current count (does not increment)
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!getPost(slug)) {
    return NextResponse.json({ error: "Unknown post" }, { status: 404 });
  }
  const views = await getViews(slug);
  return NextResponse.json({ slug, views });
}

// POST /api/views/:slug  -> record a read (deduped per visitor per day),
// return the current total. Called once when a post opens.
export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!getPost(slug)) {
    return NextResponse.json({ error: "Unknown post" }, { status: 404 });
  }
  // First hop in x-forwarded-for is the real client on Vercel; fall back safely.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  const views = await recordView(slug, ip, userAgent);
  return NextResponse.json({ slug, views });
}
