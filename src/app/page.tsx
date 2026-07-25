import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromiseBar } from "@/components/PromiseBar";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Categories } from "@/components/Categories";
import { WhyNexbond } from "@/components/WhyNexbond";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromiseBar />
        <About />
        <Products
          featured
          label="Featured Products"
          title="Our Best-Sellers."
          accent="Ready to Ship."
        />
        <WhyNexbond />
        <Features />
        <Categories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
