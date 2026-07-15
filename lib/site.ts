// Single source of truth for site-wide identity, used by metadata, the sitemap,
// robots, the llms.txt manifests, JSON-LD structured data, and the OG image.
// Change it here once and everything downstream stays in sync.

export const SITE_URL = "https://www.harishbarathi.in";
export const SITE_NAME = "Harish Barathi S";
export const SITE_TITLE = "Harish Barathi S - Software Engineer";
export const SITE_DESCRIPTION =
  "I build products, the systems behind them, and take things apart to understand them — usually over-engineering somewhere along the way.";

export const AUTHOR = {
  name: "Harish Barathi S",
  jobTitle: "Software Engineer",
  worksFor: "Dell Technologies",
  location: "Chennai, India",
  email: "harishbarathi.tech@gmail.com",
  // Profiles that let a crawler/agent link this identity across the web.
  sameAs: [
    "https://github.com/HarishbarathiS",
    "https://www.linkedin.com/in/harishbarathisivasubramanian/",
    "https://youtube.com/@harishbarathi",
  ],
};
