import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { ArrowRightIcon } from "./icons";

export function Products({
  heading = true,
  featured = false,
  label = "Our Products",
  title = "Engineered for Performance.",
  accent = "Built for Trust.",
}: {
  heading?: boolean;
  /** Show only featured products, with a "view all" link. */
  featured?: boolean;
  label?: string;
  title?: string;
  accent?: string;
}) {
  const items = featured ? PRODUCTS.filter((p) => p.featured) : PRODUCTS;

  return (
    <section id="products" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {heading && (
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="section-label">{label}</p>
              <h2 className="headline mt-4 text-4xl text-white sm:text-5xl">
                {title} <span className="text-gold">{accent}</span>
              </h2>
            </div>
            {featured ? (
              <Link
                href="/products"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold"
              >
                View All Products
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <p className="max-w-xs text-sm leading-relaxed text-white/50">
                A complete range for industrial, safety and infrastructure work —
                every item held to the same honest standard.
              </p>
            )}
          </Reveal>
        )}

        <Stagger
          className={`grid gap-7 sm:grid-cols-2 lg:grid-cols-3 ${heading ? "mt-14" : ""}`}
        >
          {items.map((p) => (
            <StaggerItem key={p.slug}>
              <ProductCard p={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
