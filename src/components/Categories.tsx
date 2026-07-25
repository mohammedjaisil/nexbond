import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { getCategories } from "@/lib/products";
import {
  ConeIcon,
  PaintIcon,
  RoadIcon,
  RoadStudIcon,
  SignIcon,
  TapeIcon,
  ArrowRightIcon,
} from "./icons";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "Masking Tape": TapeIcon,
  Safety: ConeIcon,
  Signage: SignIcon,
  "Road Marking": PaintIcon,
  "Road Safety": RoadStudIcon,
  Infrastructure: RoadIcon,
};

export function Categories() {
  const categories = getCategories();

  return (
    <section aria-label="Product categories" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">One Brand. Complete Solutions.</p>
          <h2 className="headline mt-4 text-4xl text-white sm:text-5xl">
            Complete Solutions for Safer Roads &amp;{" "}
            <span className="text-gold">Stronger Infrastructure.</span>
          </h2>
          <p className="mt-5 text-white/50">
            Explore the full range by category — every line available now.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {categories.map((c) => {
            const Icon = ICONS[c.name] ?? TapeIcon;
            return (
              <StaggerItem key={c.id}>
                <Link
                  href={`/products#${c.id}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/8 bg-coal transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(212,165,32,0.12)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent"
                    />
                    <span className="absolute right-3 top-3 rounded-full border border-gold/40 bg-ink/60 px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
                      Available Now
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <Icon className="h-8 w-8 text-gold" />
                      <h3 className="headline mt-3 text-lg leading-tight text-white">
                        {c.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                        {c.blurb}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                        {c.count} {c.count === 1 ? "Product" : "Products"}
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
