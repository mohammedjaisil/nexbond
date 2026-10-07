import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, getCategories } from "@/lib/products";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./icons";

// Counts come from the catalogue so they can never drift out of date.
const STATS = [
  { value: getCategories().length, suffix: "", label: "Product Ranges" },
  { value: PRODUCTS.length, suffix: "", label: "Products In Stock" },
  { value: 100, suffix: "%", label: "True to Spec" },
];

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="group overflow-hidden rounded-2xl">
            <Image
              src="/images/about-rolls.webp"
              alt="NEXBOND masking tape rolls on a clean surface"
              width={1400}
              height={1980}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[26rem] lg:h-150"
            />
          </div>
          {/* Floating accent card breaking the grid */}
          <div className="absolute bottom-3 right-3 rounded-xl bg-ink px-5 py-3 shadow-xl sm:-bottom-6 sm:-right-4 sm:px-6 sm:py-4 lg:-right-8">
            <p className="headline text-2xl text-gold sm:text-3xl">Made in UAE</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
              Sharjah, United Arab Emirates
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-label">Who We Are</p>
            <h2 className="headline mt-4 text-4xl text-ink sm:text-5xl">
              We Believe in Honest Measurements and{" "}
              <span className="text-gold">Premium Quality.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl leading-relaxed text-warmgrey">
              NEXBOND Industrial Solutions LLC is a UAE-based supplier of
              industrial, safety and infrastructure products — masking tapes,
              hi-vis gear, reflective signage, road marking materials, traffic
              calming and structural hardware. We started with a simple
              conviction: trust is built into the details. So we deliver exactly
              what we promise — in every roll, every carton, every pallet. No
              short lengths. No downgraded materials. No fine print.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 grid grid-cols-3 divide-x divide-ink/10">
              {STATS.map((s) => (
                <div key={s.label} className="px-3 first:pl-0 sm:px-4">
                  <p className="headline text-2xl text-ink sm:text-4xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-wider text-warmgrey sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              href="/why-nexbond"
              className="group mt-8 inline-flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:text-gold"
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
