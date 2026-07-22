import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { WhyNexbond } from "@/components/WhyNexbond";
import { PromiseBar } from "@/components/PromiseBar";
import { Features } from "@/components/Features";
import { CtaStrip } from "@/components/CtaStrip";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why NEXBOND — Honest by Choice, Trusted for Life",
  description:
    "What others print vs. what NEXBOND delivers: full 36 yards length and full 50mm width on every roll. No short length. No less width. No compromise.",
};

export default function WhyNexbondPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Why NEXBOND"
          title="Honest by Choice."
          accent="Trusted for Life."
          subtitle="We stand for honesty — you get true value. Here's the difference between what others print and what we deliver."
          watermark="HONESTY"
        />
        <WhyNexbond />
        <PromiseBar />
        <Features />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
