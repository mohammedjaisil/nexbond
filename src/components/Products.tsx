import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { ArrowRightIcon } from "./icons";

export function Products({ heading = true }: { heading?: boolean }) {
  return (
    <section id="products" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {heading && (
          <Reveal className="max-w-2xl">
            <p className="section-label">Our Products</p>
            <h2 className="headline mt-4 text-4xl text-white sm:text-5xl">
              Engineered for Performance.{" "}
              <span className="text-gold">Built for Trust.</span>
            </h2>
          </Reveal>
        )}

        <Stagger className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${heading ? "mt-14" : ""}`}>
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.slug}>
              <article className="group h-full overflow-hidden rounded-2xl border border-white/5 bg-coal transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_20px_50px_rgba(212,165,32,0.12)]">
                <Link href={`/products/${p.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-7">
                  <h3 className="headline text-2xl text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/50">{p.description}</p>
                  <ul className="mt-5 space-y-1.5">
                    {p.cardSpecs.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <span className="h-1 w-3 shrink-0 bg-gold" aria-hidden />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold"
                  >
                    View Details
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
