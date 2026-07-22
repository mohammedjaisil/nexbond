import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromiseBar } from "@/components/PromiseBar";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { WhyNexbond } from "@/components/WhyNexbond";
import { Features } from "@/components/Features";
import { ComingSoon } from "@/components/ComingSoon";
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
        <Products />
        <WhyNexbond />
        <Features />
        <ComingSoon />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
