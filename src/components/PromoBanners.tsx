import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

type Promo = {
  href: string;
  image: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
};

const FEATURE: Promo = {
  href: "/products#road-safety",
  image: "/images/speed-bumps.webp",
  eyebrow: "Road Safety & Traffic Calming",
  title: "Slow Traffic Down. Keep People Safe.",
  copy: "Reflective studs, rebounding delineators, rubber speed bumps and wheel stops — impact-rated and ready to bolt down.",
  cta: "Shop Road Safety",
};

const SIDE: Promo[] = [
  {
    href: "/products#signage",
    image: "/images/directional-signage.webp",
    eyebrow: "Signage",
    title: "Custom Signs, Made to Order",
    copy: "Any size, colour or legend on reflective aluminium.",
    cta: "Shop Signage",
  },
  {
    href: "/products#infrastructure",
    image: "/images/infrastructure-hardware.webp",
    eyebrow: "Infrastructure",
    title: "Galvanized Hardware & Barriers",
    copy: "High-tensile fixings and W-beam guardrail systems.",
    cta: "Shop Infrastructure",
  },
];

export function PromoBanners() {
  return (
    <section aria-label="Featured ranges" className="bg-cream pb-16 sm:pb-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-2">
        {/* ---------- Large promo ---------- */}
        <Link
          href={FEATURE.href}
          className="group relative flex min-h-[340px] overflow-hidden rounded-2xl bg-ink lg:min-h-[420px]"
        >
          <Image
            src={FEATURE.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-55 transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20"
          />
          <div className="relative mt-auto p-7 sm:p-9">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold">
              {FEATURE.eyebrow}
            </p>
            <h3 className="headline mt-3 max-w-md text-3xl text-white sm:text-4xl">
              {FEATURE.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
              {FEATURE.copy}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink">
              {FEATURE.cta}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* ---------- Two stacked promos ---------- */}
        <div className="grid gap-5">
          {SIDE.map((promo) => (
            <Link
              key={promo.href}
              href={promo.href}
              className="group relative flex min-h-[190px] overflow-hidden rounded-2xl bg-coal lg:min-h-[200px]"
            >
              <Image
                src={promo.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-45 transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25"
              />
              <div className="relative flex w-full items-center justify-between gap-4 p-7">
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold">
                    {promo.eyebrow}
                  </p>
                  <h3 className="headline mt-2 max-w-xs text-xl text-white sm:text-2xl">
                    {promo.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/60">
                    {promo.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                    {promo.cta}
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
