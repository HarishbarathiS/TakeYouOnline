import type { MetadataRoute } from "next";

// Keep in sync with metadataBase in app/layout.tsx.
const SITE_URL = "https://harishbarathi.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
