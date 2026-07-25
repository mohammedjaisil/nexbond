import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { ArrowRightIcon } from "./icons";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-coal transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_24px_60px_rgba(212,165,32,0.14)]">
      <Link
        href={`/products/${p.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#141414]"
        aria-label={`${p.name} details`}
      >
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent opacity-70"
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink/60 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
          {p.category}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-gold px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-ink">
          {p.cardSpecs[0]}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
          {p.tagline}
        </p>
        <h3 className="headline mt-2 text-xl text-white">
          <Link href={`/products/${p.slug}`} className="hover:text-gold">
            {p.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/50">
          {p.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {p.cardSpecs.slice(1).map((s) => (
            <li key={s} className="flex items-center gap-2 text-sm text-white/70">
              <span className="h-1 w-3 shrink-0 bg-gold" aria-hidden />
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
          <Link
            href={`/products/${p.slug}`}
            className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold"
          >
            View Details
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
          <Link
            href={`/contact?product=${encodeURIComponent(p.name)}`}
            className="text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-white"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
