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
    <section
      id="categories"
      aria-label="Shop by category"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Shop by Category</p>
            <h2 className="headline mt-3 text-3xl text-ink sm:text-4xl">
              Six Ranges.{" "}
              <span className="text-gold">One Honest Standard.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-warmgrey">
            From masking tape to crash barriers — every line stocked in Sharjah
            and supplied in bulk.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const Icon = ICONS[c.name] ?? TapeIcon;
            return (
              <Link
                key={c.id}
                href={`/products#${c.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_16px_40px_rgba(26,26,26,0.12)]"
              >
                <div className="relative aspect-square overflow-hidden bg-[#f1efea]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {c.count} {c.count === 1 ? "Item" : "Items"}
                    <ArrowRightIcon className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="headline mt-2.5 text-base leading-tight text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-warmgrey">
                    {c.blurb}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
