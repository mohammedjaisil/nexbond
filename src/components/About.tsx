import Image from "next/image";
import Link from "next/link";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./icons";

const STATS = [
  { value: 100, suffix: "%", label: "True Measurements" },
  { value: 36, suffix: " Yards", label: "Full Length, Every Roll" },
  { value: 50, suffix: "mm", label: "Full Width Guaranteed" },
];

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="group overflow-hidden rounded-2xl">
            <Image
              src="/images/about-rolls.png"
              alt="NEXBOND masking tape rolls on a clean surface"
              width={1400}
              height={1980}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-150 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Floating accent card breaking the grid */}
          <div className="absolute -bottom-6 -right-4 rounded-xl bg-ink px-6 py-4 shadow-xl sm:-right-8">
            <p className="headline text-3xl text-gold">Made in UAE</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
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
              NEXBOND Industrial Solutions LLC is a UAE-based provider of
              industrial, safety and infrastructure solutions. We started with a
              simple conviction: trust is built into the details. That&apos;s why
              we deliver exactly what we promise — in every roll, every product,
              every time. No short lengths. No narrow widths. No fine print.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 grid grid-cols-3 divide-x divide-ink/10">
              {STATS.map((s) => (
                <div key={s.label} className="px-4 first:pl-0">
                  <p className="headline text-3xl text-ink sm:text-4xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-warmgrey">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              href="/why-nexbond"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:text-gold"
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
