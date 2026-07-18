"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Work", href: "/#work" },
  { label: "Exp", href: "/#experience" },
  { label: "Lab", href: "/lab" },
  { label: "Now", href: "/#now" },
  { label: "Contact", href: "/#contact" },
];

type SiteNavProps = {
  /** Which nav item is the current page (highlighted, not hoverable). */
  active?: string;
  /** "home" shows the HBS wordmark; "back" shows a ← link. */
  variant?: "home" | "back";
  /** Where the "back" arrow links to. Defaults to home. */
  backHref?: string;
};

export default function SiteNav({
  active,
  variant = "back",
  backHref = "/",
}: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const left =
    variant === "home" ? (
      <span className="text-sm uppercase tracking-widest">HBS</span>
    ) : (
      <Link
        href={backHref}
        aria-label="Back"
        className="group flex items-center justify-center w-8 h-8 -ml-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        {left}

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-gray-500 uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                active === link.label
                  ? "text-white transition-colors"
                  : "hover:text-white transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden relative w-8 h-8 -mr-2"
        >
          <span
            className={`absolute left-1 right-1 top-[15px] h-px bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute left-1 right-1 top-[15px] h-px bg-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-1 right-1 top-[15px] h-px bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-[6px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        className={`md:hidden overflow-hidden border-t border-white/40 bg-transparent transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto px-6 py-2 flex flex-col text-xs text-gray-400 uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 border-b border-white/10 last:border-0 transition-colors ${
                active === link.label ? "text-white" : "hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
