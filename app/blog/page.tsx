import Link from "next/link";
import type { Metadata } from "next";
import { postsByDate } from "./posts";
import { getManyViews } from "@/lib/views";
import BookIcon from "./BookIcon";

export const metadata: Metadata = {
  title: "Blog — Harish Barathi S",
  description:
    "Essays on building software, self-hosting, reverse-engineering, and owning your data.",
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function Blog() {
  const counts = await getManyViews(postsByDate.map((p) => p.slug));

  return (
    <div className="min-h-screen text-white text-sm">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-transparent">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            aria-label="Back to home"
            className="text-xs uppercase tracking-widest hover:text-gray-400 transition-colors"
          >
            ←
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
            <Link
              href="/#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-24 md:pt-28 pb-8">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
            Writing
          </p>
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">
            Blog
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl mb-6">
            Things I experiment with, break, and learn from — notes on building,
            hosting, and figuring things out.
          </p>
        </section>

        {/* Posts */}
        <section className="pt-10 pb-16 section-divide">
          <h2 className="font-serif text-2xl md:text-3xl text-white inline-block pb-3 mb-8 border-b-2 border-white/40">
            Posts
          </h2>
          <div className="space-y-12">
            {postsByDate.map((p) => {
              const views = counts[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block group"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-base group-hover:text-gray-400 transition-colors">
                      {p.title} →
                    </h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                      {formatDate(p.date)}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    {p.summary}
                  </p>
                  <div className="flex gap-4 text-xs text-gray-500 uppercase tracking-widest">
                    <span>{p.readingTime} read</span>
                    {views !== null && (
                      <span className="inline-flex items-center gap-1.5">
                        <BookIcon className="h-3.5 w-3.5" />
                        {views.toLocaleString()}{" "}
                        {views === 1 ? "read" : "reads"}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="section-divide py-8">
        <div className="max-w-3xl mx-auto px-6 flex justify-between text-xs text-gray-500 uppercase tracking-widest">
          <span>© 2026 Harish Barathi S</span>
          <Link href="/" className="hover:text-white transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
