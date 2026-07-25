import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Catalog } from "@/components/Catalog";
import { PromiseBar } from "@/components/PromiseBar";
import { CtaStrip } from "@/components/CtaStrip";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products — NEXBOND | Tapes, Safety, Signage & Infrastructure",
  description:
    "The complete NEXBOND range: masking tapes, high-visibility safety gear, reflective traffic signs, road marking paint, road studs and infrastructure hardware — request a quote on any product.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Products"
          title="Engineered for Performance."
          accent="Built for Trust."
          subtitle="From masking tapes to safety, signage and infrastructure — a complete range, every item held to the same honest standard. Explore the full catalogue."
          watermark="PRODUCTS"
        />
        <Catalog />
        <PromiseBar />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
