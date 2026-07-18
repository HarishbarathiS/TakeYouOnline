import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, postToMarkdown, posts, type Block } from "../posts";
import ViewCounter from "./ViewCounter";
import CopyForAI from "./CopyForAI";
import SiteNav from "@/components/SiteNav";
import { SITE_URL, SITE_NAME, AUTHOR } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: `${post.title} — ${SITE_NAME}`,
    description: post.summary,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url,
      siteName: SITE_NAME,
      publishedTime: post.date,
      authors: [AUTHOR.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Hand-drawn figure: Bluetooth is the "doorbell" (a tiny leftward control
// command), Wi-Fi Direct is the "data pipe" (a fat rightward transfer). Pure
// inline SVG so it needs no image file and inherits the site's mono font.
function TwoTransportDiagram() {
  return (
    <svg
      viewBox="0 0 720 220"
      role="img"
      aria-label="Bluetooth is a tiny control command that triggers the glasses; Wi-Fi Direct is the data pipe that carries full-resolution files to the phone."
      className="w-full h-auto min-w-[520px]"
      style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
    >
      <defs>
        <marker
          id="ah-gray"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#9ca3af" />
        </marker>
        <marker
          id="ah-blue"
          markerWidth="9"
          markerHeight="9"
          refX="7"
          refY="3.5"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#60a5fa" />
        </marker>
      </defs>

      {/* Nodes */}
      <rect
        x="20"
        y="70"
        width="200"
        height="90"
        rx="8"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.15)"
      />
      <text x="120" y="110" textAnchor="middle" fill="#ffffff" fontSize="14">
        Smart Glasses
      </text>
      <text x="120" y="132" textAnchor="middle" fill="#8b93a1" fontSize="11">
        runs an HTTP server
      </text>

      <rect
        x="500"
        y="70"
        width="200"
        height="90"
        rx="8"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.15)"
      />
      <text x="600" y="110" textAnchor="middle" fill="#ffffff" fontSize="14">
        Phone
      </text>
      <text x="600" y="132" textAnchor="middle" fill="#8b93a1" fontSize="11">
        my app
      </text>

      {/* Bluetooth — the doorbell (tiny leftward trigger) */}
      <text
        x="360"
        y="40"
        textAnchor="middle"
        fill="#9ca3af"
        fontSize="11"
        letterSpacing="1.5"
      >
        Bluetooth kickstarts the transfer
      </text>
      <line
        x1="494"
        y1="60"
        x2="226"
        y2="60"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd="url(#ah-gray)"
      />
      <text x="360" y="78" textAnchor="middle" fill="#6b7280" fontSize="12">
        [ 02 01 04 01 ]
      </text>

      {/* Wi-Fi Direct — the data pipe (fat rightward transfer) */}
      <line
        x1="226"
        y1="150"
        x2="494"
        y2="150"
        stroke="#60a5fa"
        strokeWidth="3"
        markerEnd="url(#ah-blue)"
      />
      <text
        x="360"
        y="180"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="11"
        letterSpacing="1.5"
      >
        WI-FI DIRECT — THE DATA PIPE
      </text>
      <text x="360" y="198" textAnchor="middle" fill="#6b7280" fontSize="11">
        full-resolution files
      </text>
    </svg>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="text-lg text-white mt-10 mb-4">{block.text}</h2>;
    case "p":
      return <p className="text-gray-400 leading-relaxed mb-5">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="border-l-2 border-blue-400/50 pl-4 my-8 text-white italic">
          {block.text}
        </blockquote>
      );
    case "code":
      return (
        <figure className="my-6">
          <pre className="bg-white/5 border border-white/10 rounded p-4 overflow-x-auto text-xs leading-relaxed text-gray-300">
            <code>{block.code}</code>
          </pre>
          {block.caption && (
            <figcaption className="text-xs text-gray-500 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "stats":
      return (
        <div className="my-8 flex flex-wrap gap-x-10 gap-y-6">
          {block.items.map((item, i) => (
            <div key={i} className="min-w-[7rem] flex-1">
              <div className="text-3xl md:text-4xl font-normal text-blue-400 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs text-gray-500 leading-relaxed mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      );
    case "image":
      // No file yet → labelled placeholder so the layout reads right and you
      // know exactly what to drop in. With a src → the real image.
      if (!block.src) {
        return (
          <figure className="my-8 border border-dashed border-white/20 rounded p-6 text-center">
            <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
              Image
            </div>
            <div className="text-xs text-gray-500 leading-relaxed max-w-md mx-auto">
              {block.description}
            </div>
          </figure>
        );
      }
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded border border-white/10"
          />
          <figcaption className="text-xs text-gray-500 mt-2">
            {block.description}
          </figcaption>
        </figure>
      );
    case "diagram":
      return (
        <figure className="my-8">
          <div className="bg-white/5 border border-white/10 rounded p-4 md:p-6 overflow-x-auto">
            {block.variant === "two-transport" && <TwoTransportDiagram />}
          </div>
          {block.caption && (
            <figcaption className="text-xs text-gray-500 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "note":
      return (
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-gray-500 leading-relaxed">
          {block.text}
          {block.href && (
            <>
              {" "}
              <a
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors"
              >
                {block.linkText ?? "link"} ↗
              </a>
            </>
          )}
        </div>
      );
    case "deflist":
      return (
        <dl className="my-6 space-y-3">
          {block.items.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="text-white shrink-0 sm:w-32">{item.term}</dt>
              <dd className="text-gray-400 leading-relaxed">{item.desc}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const markdown = postToMarkdown(post);

  // Schema.org BlogPosting — structured facts (headline, date, author) that
  // crawlers and agents can read directly, no HTML parsing required.
  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen text-white text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      {/* Nav */}
      <SiteNav active="Blog" backHref="/blog" />

      <main className="max-w-3xl mx-auto px-6">
        <article className="py-24 md:py-28">
          <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest mb-4">
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime} read</span>
            <ViewCounter slug={post.slug} />
          </div>
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl mb-6">
            {post.summary}
          </p>

          {/* The unique feature, per-post: hand any AI a clean copy. */}
          <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-white/10">
            <CopyForAI markdown={markdown} />
          </div>

          <div className="max-w-xl">
            {post.content.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>
        </article>

        {/* Key points — human-readable version of what the AI layer carries. */}
        <section className="py-16 section-divide">
          <h2 className="font-serif text-2xl md:text-3xl text-blue-400 inline-block pb-3 mb-6 border-b-2 border-white/40">
            In short
          </h2>
          <ul className="space-y-3 max-w-xl">
            {post.keyPoints.map((point, i) => (
              <li key={i} className="text-gray-400 leading-relaxed flex gap-3">
                <span className="text-blue-400">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="section-divide py-8">
        <div className="max-w-3xl mx-auto px-6 flex justify-between text-xs text-gray-500 uppercase tracking-widest">
          <span>© 2026 Harish Barathi S</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            All posts
          </Link>
        </div>
      </footer>
    </div>
  );
}
