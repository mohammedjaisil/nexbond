import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexbondinfra.com"),
  title: "NEXBOND — Premium Masking Tape | Strength in Every Bond",
  description:
    "NEXBOND Industrial Solutions LLC, Sharjah UAE. Premium masking tape with guaranteed true size — full 36 yards length, full 50mm width. Industrial, safety & infrastructure solutions. What we promise, we deliver.",
  keywords: [
    "masking tape UAE",
    "industrial tape Sharjah",
    "premium masking tape",
    "NEXBOND",
    "road safety solutions UAE",
    "industrial adhesives",
  ],
  openGraph: {
    title: "NEXBOND — Premium Masking Tape | True Size. True Trust.",
    description:
      "Guaranteed true size masking tape from NEXBOND Industrial Solutions LLC, Sharjah UAE. Full length. Full width. No compromise.",
    url: "https://nexbondinfra.com",
    siteName: "NEXBOND",
    images: [{ url: "/images/hero-tape.png", width: 1600, height: 2263 }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXBOND — Premium Masking Tape | True Size. True Trust.",
    description:
      "Guaranteed true size masking tape. Full 36 yards. Full 50mm. What we promise, we deliver.",
    images: ["/images/hero-tape.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NEXBOND Industrial Solutions LLC",
  description:
    "Industrial tapes, safety products and infrastructure solutions. Premium masking tape with guaranteed true size.",
  url: "https://nexbondinfra.com",
  email: "info@nexbondinfra.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  slogan: "Strength in Every Bond",
  founder: { "@type": "Person", name: "Rahul Kumar", jobTitle: "Managing Director" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject
          attributes into <body> before React hydrates, causing false-positive
          hydration warnings in dev. Only suppresses attribute-level diffs. */}
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
