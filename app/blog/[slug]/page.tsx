import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, postToMarkdown, posts, type Block } from "../posts";
import ViewCounter from "./ViewCounter";
import CopyForAI from "./CopyForAI";

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
  return { title: `${post.title} — Harish Barathi S`, description: post.summary };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-lg text-white mt-10 mb-4">{block.text}</h2>
      );
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

  return (
    <div className="min-h-screen text-white text-sm">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-transparent">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-widest hover:text-gray-400 transition-colors"
          >
            ← Blog
          </Link>
          <nav className="flex items-center gap-6 text-xs text-gray-500 uppercase tracking-widest">
            <Link href="/blog" className="text-white transition-colors">
              Blog
            </Link>
            <Link href="/#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link
              href="/#experience"
              className="hover:text-white transition-colors"
            >
              Exp
            </Link>
            <Link href="/lab" className="hover:text-white transition-colors">
              Lab
            </Link>
            <Link href="/#now" className="hover:text-white transition-colors">
              Now
            </Link>
          </nav>
        </div>
      </header>

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
            <a
              href="/blog/llms.txt"
              className="text-xs uppercase tracking-widest underline underline-offset-4 hover:text-gray-400 transition-colors"
            >
              AI-readable ↗
            </a>
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
