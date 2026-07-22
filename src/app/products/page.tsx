import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Products } from "@/components/Products";
import { PromiseBar } from "@/components/PromiseBar";
import { ComingSoon } from "@/components/ComingSoon";
import { CtaStrip } from "@/components/CtaStrip";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products — NEXBOND Masking Tapes | True Size Guaranteed",
  description:
    "NEXBOND masking tapes: General Purpose, Premium and Heavy Duty. Full 36 yards length, full 50mm width — guaranteed true size on every roll.",
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
          subtitle="Every NEXBOND roll delivers the full printed size — full length, full width, no compromise. Explore the range."
          watermark="PRODUCTS"
        />
        <Products heading={false} />
        <PromiseBar />
        <ComingSoon />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
