import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { PromiseBar } from "@/components/PromiseBar";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { PromoBanners } from "@/components/PromoBanners";
import { About } from "@/components/About";
import { WhyNexbond } from "@/components/WhyNexbond";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <PromiseBar />
        <Categories />
        <Products
          featured
          limit={4}
          label="Best Sellers"
          title="What Sites Order"
          accent="Again and Again."
          tone="cream"
        />
        <PromoBanners />
        <Products
          omitFeatured
          limit={4}
          id="more-products"
          label="More From the Range"
          title="Tapes, Marking, Signage"
          accent="& Site Hardware."
          tone="white"
        />
        <About />
        <WhyNexbond />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
