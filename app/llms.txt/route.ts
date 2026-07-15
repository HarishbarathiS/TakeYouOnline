import { postsByDate } from "@/app/blog/posts";
import { SITE_URL, AUTHOR, SITE_DESCRIPTION } from "@/lib/site";

// GET /llms.txt
// The site-root AI-readable layer, following the llms.txt convention
// (https://llmstxt.org). A hand-authored, machine-friendly map of the whole
// site so an agent understands who this is and what's here — then points at
// /blog/llms.txt for the full text of every post.
export async function GET() {
  const parts: string[] = [];

  parts.push(`# ${AUTHOR.name}`);
  parts.push("");
  parts.push(`> ${SITE_DESCRIPTION}`);
  parts.push("");
  parts.push(
    `${AUTHOR.name} is a ${AUTHOR.jobTitle} at ${AUTHOR.worksFor}, based in ${AUTHOR.location}. This site is a portfolio, a self-hosting home lab, and a blog.`
  );
  parts.push("");

  parts.push("## Site");
  parts.push("");
  parts.push(`- [Portfolio / work](${SITE_URL}/) — projects, experience, and about.`);
  parts.push(`- [Home Lab](${SITE_URL}/lab) — self-hosted infrastructure and services.`);
  parts.push(`- [Blog](${SITE_URL}/blog) — essays on building software, self-hosting, reverse-engineering, and owning your data.`);
  parts.push("");

  parts.push("## Blog posts");
  parts.push("");
  for (const post of postsByDate) {
    parts.push(
      `- [${post.title}](${SITE_URL}/blog/${post.slug}) — ${post.summary} (${post.date}, ${post.readingTime} read)`
    );
  }
  parts.push("");
  parts.push(
    `The full text of every post, including a description of every image, is available at [${SITE_URL}/blog/llms.txt](${SITE_URL}/blog/llms.txt).`
  );
  parts.push("");

  parts.push("## Links");
  parts.push("");
  for (const url of AUTHOR.sameAs) parts.push(`- ${url}`);
  parts.push(`- mailto:${AUTHOR.email}`);

  const body = parts.join("\n").trim() + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
