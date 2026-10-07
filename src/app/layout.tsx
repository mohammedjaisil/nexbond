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
  title:
    "NEXBOND — Industrial, Safety & Infrastructure Supplies | Sharjah, UAE",
  description:
    "NEXBOND Industrial Solutions LLC, Sharjah UAE. Masking tapes, hi-vis safety gear, reflective traffic signage, road marking materials, traffic calming and infrastructure hardware — supplied in bulk across the UAE from Sharjah. What the label says is what you get.",
  keywords: [
    "industrial supplies UAE",
    "safety equipment Sharjah",
    "reflective traffic signs UAE",
    "road marking paint UAE",
    "thermoplastic road marking",
    "road studs and delineators UAE",
    "speed bumps UAE",
    "guardrail and crash barriers UAE",
    "galvanized infrastructure hardware",
    "hi-vis safety gear Sharjah",
    "masking tape UAE",
    "NEXBOND",
  ],
  openGraph: {
    title: "NEXBOND — Industrial, Safety & Infrastructure Supplies",
    description:
      "Six ranges from one UAE supplier: masking tape, safety gear, signage, road marking, traffic calming and infrastructure hardware. True to spec, every order.",
    url: "https://nexbondinfra.com",
    siteName: "NEXBOND",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXBOND — Industrial, Safety & Infrastructure Supplies",
    description:
      "Tapes, safety gear, signage, road marking, traffic calming and infrastructure hardware — supplied in bulk across the UAE.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NEXBOND Industrial Solutions LLC",
  description:
    "Supplier of industrial tapes, high-visibility safety gear, reflective traffic signage, road marking materials, traffic calming products and infrastructure hardware in Sharjah, UAE.",
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
