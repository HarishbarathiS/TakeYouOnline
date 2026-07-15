import { ImageResponse } from "next/og";
import { SITE_NAME, AUTHOR } from "@/lib/site";

// A branded social-share image (1200x630) generated at build time, so links to
// the site render a real preview card instead of a blank thumbnail.
export const alt = `${SITE_NAME} — ${AUTHOR.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8b93a1",
          }}
        >
          {AUTHOR.jobTitle}
        </div>
        <div style={{ fontSize: 88, fontWeight: 600, marginTop: 24 }}>
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.4,
            color: "#cbd5e1",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          I build products, the systems behind them, and take things apart to
          understand them.
        </div>
        <div style={{ display: "flex", flexGrow: 1 }} />
        <div style={{ fontSize: 26, letterSpacing: 2, color: "#60a5fa" }}>
          harishbarathi.in
        </div>
      </div>
    ),
    { ...size }
  );
}
