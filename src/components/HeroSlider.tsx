"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TagIcon,
} from "./icons";
import { PRODUCTS, getCategories } from "@/lib/products";

type Slide = {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  cta: { label: string; href: string };
  note: string;
};

const SLIDES: Slide[] = [
  {
    id: "all-ranges",
    image: "/images/guardrails.webp",
    eyebrow: "Six Ranges · One Supplier",
    title: "Everything the Site Needs.",
    accent: "Honestly Measured.",
    copy: "Masking tapes, hi-vis safety gear, reflective signage, road marking, traffic calming and infrastructure hardware — stocked in Sharjah and supplied in bulk.",
    cta: { label: "Shop All Products", href: "/products" },
    note: "",  // filled from the live catalogue count
  },
  {
    id: "safety",
    image: "/images/safety-gear.webp",
    eyebrow: "Safety & Hi-Vis",
    title: "Kit Out the Crew.",
    accent: "Site Ready.",
    copy: "Reflective vests, impact-rated hard hats and weighted traffic cones built for UAE heat and dust — single units or full site orders.",
    cta: { label: "Shop Safety Gear", href: "/products#safety" },
    note: "EN ISO 20471 · In stock",
  },
  {
    id: "signage",
    image: "/images/traffic-signs.webp",
    eyebrow: "Traffic & Wayfinding Signage",
    title: "Seen Day",
    accent: "and Night.",
    copy: "High-intensity prismatic signs on rust-proof aluminium — standard layouts or custom-printed to GCC standards, with posts and fixings.",
    cta: { label: "Shop Signage", href: "/products#signage" },
    note: "Custom printing · Complete kits",
  },
  {
    id: "road-marking",
    image: "/images/road-marking-paint.webp",
    eyebrow: "Road Marking",
    title: "Lines That",
    accent: "Last Longer.",
    copy: "Thermoplastic compound, cold-applied paint and drop-on glass beads for markings that survive heavy traffic and relentless sun.",
    cta: { label: "Shop Road Marking", href: "/products#road-marking" },
    note: "Glass-bead reflective · High yield",
  },
  {
    id: "road-safety",
    image: "/images/road-studs.webp",
    eyebrow: "Road Safety & Traffic Calming",
    title: "Guide It.",
    accent: "Slow It Down.",
    copy: "Reflective road studs, rebounding delineator posts, rubber speed bumps and wheel stops — impact-rated and ready to bolt down.",
    cta: { label: "Shop Road Safety", href: "/products#road-safety" },
    note: "Solar-LED options · Heavy-vehicle rated",
  },
  {
    id: "infrastructure",
    image: "/images/infrastructure-hardware.webp",
    eyebrow: "Infrastructure Hardware",
    title: "Built to Hold",
    accent: "for Decades.",
    copy: "Hot-dip galvanized brackets, high-tensile bolts, guardrail fittings and crash barrier systems — corrosion-protected for the long run.",
    cta: { label: "Shop Infrastructure", href: "/products#infrastructure" },
    note: "Grade 8.8 / 10.9 · Boxed or bulk",
  },
  {
    id: "masking-tape",
    image: "/images/tape-premium.webp",
    eyebrow: "Masking Tape",
    title: "True Size.",
    accent: "True Trust.",
    copy: "Full 50mm width. Full 36 yards. The range that started NEXBOND — general purpose, premium and heavy duty crepe tapes.",
    cta: { label: "Shop Masking Tape", href: "/products#masking-tape" },
    note: "Full printed size · Bulk cartons",
  },
];

const INTERVAL = 6000;

export function HeroSlider() {
  const categories = getCategories();
  const rangeNote = `${PRODUCTS.length} products · ${categories.length} categories · Bulk supply`;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback(
    (next: number) => setIndex((next + SLIDES.length) % SLIDES.length),
    []
  );

  // Auto-advance; held while hovered/focused and off entirely for reduced motion.
  useEffect(() => {
    if (paused || reduced) return;
    const t = window.setInterval(() => go(index + 1), INTERVAL);
    return () => window.clearInterval(t);
  }, [index, paused, reduced, go]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <section aria-label="Featured ranges" className="bg-ink">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured product ranges"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative overflow-hidden focus-visible:outline-none"
      >
        {/* ---------- Slide track ---------- */}
        <div
          className={`flex ${reduced ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className="relative flex w-full shrink-0"
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}: ${s.eyebrow}`}
            >
              <div className="relative flex w-full min-h-[520px] flex-col justify-center pb-24 pt-44 sm:min-h-[580px] sm:pb-28 sm:pt-44 lg:min-h-[620px] lg:pt-48">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  priority={i === 0}
                  loading={i === 0 ? undefined : i === 1 ? "eager" : "lazy"}
                  sizes="100vw"
                  className="object-cover object-center"
                />
                {/* Readability scrim: heavier on the copy side */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35 sm:to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60"
                />

                <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start px-5 sm:px-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                    <TagIcon className="h-3.5 w-3.5" />
                    {s.eyebrow}
                  </span>

                  <h1 className="headline mt-6 max-w-2xl text-[clamp(2.5rem,9vw,4.5rem)] text-white lg:text-[clamp(3.5rem,6vw,5.5rem)]">
                    {s.title}{" "}
                    <span className="text-gold">{s.accent}</span>
                  </h1>

                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                    {s.copy}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      href={s.cta.href}
                      tabIndex={i === index ? 0 : -1}
                      className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ink [--sweep-color:#fff]"
                    >
                      {s.cta.label}
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      tabIndex={i === index ? 0 : -1}
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
                    >
                      Request a Quote
                    </Link>
                  </div>

                  <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {s.note || rangeNote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Arrows ---------- */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-ink/50 p-3 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:block"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-ink/50 p-3 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:block"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        {/* ---------- Dots ---------- */}
        <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center gap-2.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${s.eyebrow} slide`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-9 bg-gold" : "w-4 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ---------- Category quick-links under the banner ---------- */}
      <div className="border-y border-white/10 bg-coal/40">
        <div className="mx-auto flex max-w-7xl gap-2.5 overflow-x-auto px-5 py-4 sm:px-8 no-scrollbar">
          <span className="hidden shrink-0 items-center pr-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 sm:flex">
            Shop by
          </span>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/products#${c.id}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-white/12 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              {c.name}
              <span className="ml-1.5 text-white/35">{c.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
