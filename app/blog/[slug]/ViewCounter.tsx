"use client";

import { useEffect, useState } from "react";
import BookIcon from "../BookIcon";

// Increments the read count once when a post opens, then shows the total.
// Renders nothing if no store is configured (count comes back null).
export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setViews(data.views ?? null);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (views === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 uppercase tracking-widest">
      <BookIcon className="h-3.5 w-3.5" />
      {views.toLocaleString()} {views === 1 ? "read" : "reads"}
    </span>
  );
}
