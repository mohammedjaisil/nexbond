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

type Props = { searchParams: Promise<{ q?: string }> };

export default async function ProductsPage({ searchParams }: Props) {
  const { q } = await searchParams;
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Products"
          title="Engineered for Performance."
          accent="Built for Trust."
          subtitle="Masking tapes, hi-vis safety gear, reflective signage, road marking materials, traffic calming and infrastructure hardware — six ranges, every item held to the same honest standard."
          watermark="PRODUCTS"
        />
        <Catalog query={q} />
        <PromiseBar />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
