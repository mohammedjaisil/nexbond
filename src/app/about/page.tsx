import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { ComingSoon } from "@/components/ComingSoon";
import { CtaStrip } from "@/components/CtaStrip";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — NEXBOND | Strength in Every Bond",
  description:
    "NEXBOND Industrial Solutions LLC is a UAE-based provider of industrial, safety and infrastructure solutions built on one conviction: what we promise, we deliver.",
};

const VALUES = [
  {
    title: "Honesty",
    text: "Every measurement on the label is a measurement in the box. We built the brand on that promise.",
  },
  {
    title: "Quality",
    text: "Better raw materials and advanced production technology, tested for durability in tough conditions.",
  },
  {
    title: "Reliability",
    text: "Consistent performance roll after roll, order after order — so your projects never wait.",
  },
  {
    title: "Trust",
    text: "Contractors, consultants and government projects across the UAE & GCC choose us for a reason.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Who We Are"
          title="Building Stronger Connections"
          accent="For a Safer Tomorrow."
          subtitle="NEXBOND Industrial Solutions LLC — industrial, safety and infrastructure solutions from Sharjah, United Arab Emirates."
        />
        <About />
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="section-label">Our Values</p>
              <h2 className="headline mt-4 text-4xl text-ink sm:text-5xl">
                What We Stand <span className="text-gold">For.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-ink/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
                    <span className="headline text-4xl text-gold/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="headline mt-3 text-2xl text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm text-warmgrey">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Features />
        <ComingSoon />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
