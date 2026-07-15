import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const SITE_URL = "https://harishbarathi.in";
const SITE_TITLE = "Harish Barathi S - Software Engineer";
const SITE_DESCRIPTION =
  "Software engineer passionate about building scalable systems, elegant architectures, and tools that make a difference. Currently a Software Engineer at Dell Technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Harish Barathi S",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {/* Global background image + dark overlay for readability */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg_new_2.png')" }}
        />
        <div className="fixed inset-0 z-0 bg-black/60" />

        {/* All page content sits above the background */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
