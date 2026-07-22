import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use — NEXBOND",
  description: "Terms of use for the NEXBOND Industrial Solutions LLC website.",
  robots: { index: false },
};

const SECTIONS = [
  {
    h: "Acceptance of Terms",
    p: "By accessing and using this website, you accept these Terms of Use. If you do not agree with any part of these terms, please do not use the website.",
  },
  {
    h: "Use of Content",
    p: "All content on this website — text, images, logos and product information — is the property of NEXBOND Industrial Solutions LLC. It may not be reproduced, distributed or used commercially without our prior written consent.",
  },
  {
    h: "Product Information",
    p: "Product specifications shown on this website are provided in good faith and represent our guaranteed delivered measurements. Specifications for future product lines are indicative and may change before launch.",
  },
  {
    h: "Quotations & Orders",
    p: "Quotation requests submitted through this website are not binding orders. All sales are subject to our standard commercial terms agreed at the time of order confirmation.",
  },
  {
    h: "Limitation of Liability",
    p: "NEXBOND Industrial Solutions LLC accepts no liability for indirect or consequential loss arising from the use of this website. Nothing in these terms limits liability that cannot be limited under UAE law.",
  },
  {
    h: "Governing Law",
    p: "These terms are governed by the laws of the United Arab Emirates. Any disputes fall under the jurisdiction of the courts of Sharjah, UAE.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Terms of"
          accent="Use."
          subtitle="Last updated: July 2026"
          watermark="TERMS"
        />
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.h} delay={i * 0.05}>
                <h2 className="headline text-2xl text-ink">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-warmgrey">{s.p}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
