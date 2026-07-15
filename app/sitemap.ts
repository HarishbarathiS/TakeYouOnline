import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

// The canonical origin. Keep in sync with metadataBase in app/layout.tsx.
const SITE_URL = "https://harishbarathi.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/lab", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
