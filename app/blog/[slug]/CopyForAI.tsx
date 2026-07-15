"use client";

import { useState } from "react";

// Copies a clean markdown version of the post (with image descriptions) to the
// clipboard, ready to paste into any chatbot. The markdown is generated on the
// server from posts.ts and passed in, so it matches /blog/llms.txt exactly.
export default function CopyForAI({ markdown }: { markdown: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — no-op; the /blog/llms.txt link is the fallback.
    }
  };

  return (
    <button
      onClick={copy}
      className="text-xs uppercase tracking-widest underline underline-offset-4 hover:text-gray-400 transition-colors"
    >
      {copied ? "Copied ✓" : "Copy for AI"}
    </button>
  );
}
