import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Image Credits — NEXBOND",
  description: "Credits for third-party photographs used on the NEXBOND website.",
  robots: { index: false },
};

// Built from the catalogue (any product photo whose licence requires
// attribution), plus the home-page banner photos listed by hand.
const CREDITS = [
  ...PRODUCTS.filter((p) => p.imageCredit).map((p) => ({
    name: p.name,
    ...p.imageCredit!,
  })),
  // Home-page banner photos that are not product images.
  {
    name: "Road Marking (home page banner)",
    text: "Photo: AdnanDekedek, CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Abu_Dhabi_Roads.jpg",
  },
];

export default function ImageCreditsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Image"
          accent="Credits."
          subtitle="Some photographs on this site are used under Creative Commons licences. They are credited below."
          watermark="CREDITS"
        />
        <section className="bg-cream section-y">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <ul className="divide-y divide-ink/10 rounded-2xl border border-ink/5 bg-white">
              {CREDITS.map((c) => (
                <li
                  key={c.href}
                  className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-semibold text-ink">{c.name}</span>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warmgrey underline-offset-2 hover:text-gold hover:underline"
                  >
                    {c.text.replace(/^Photo: /, "")}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-warmgrey">
              Product images belong to NEXBOND. Other photographs are licensed from{" "}
              <a
                href="https://www.pexels.com/license/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-gold"
              >
                Pexels
              </a>{" "}
              or are in the public domain. Licence details are linked from each
              credit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
