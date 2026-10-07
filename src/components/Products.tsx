import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { ArrowRightIcon } from "./icons";

export function Products({
  heading = true,
  featured = false,
  omitFeatured = false,
  limit,
  label = "Our Products",
  title = "Everything for Industrial, Safety",
  accent = "& Infrastructure Work.",
  tone = "cream",
  id = "products",
}: {
  heading?: boolean;
  /** Show only featured products, with a "view all" link. */
  featured?: boolean;
  /** Skip featured products — pairs with a `featured` row above it. */
  omitFeatured?: boolean;
  /** Cap the number of cards shown. */
  limit?: number;
  label?: string;
  title?: string;
  accent?: string;
  /** Section background. */
  tone?: "cream" | "white";
  id?: string;
}) {
  let base = PRODUCTS;
  if (featured) base = base.filter((p) => p.featured);
  if (omitFeatured) base = base.filter((p) => !p.featured);
  const items = limit ? base.slice(0, limit) : base;

  return (
    <section
      id={id}
      className={tone === "white" ? "bg-white py-16 sm:py-20" : "bg-cream py-16 sm:py-20"}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {heading && (
          <div className="flex flex-col gap-5 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="section-label">{label}</p>
              <h2 className="headline mt-3 text-3xl text-ink sm:text-4xl">
                {title} <span className="text-gold">{accent}</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-gold hover:text-gold sm:self-auto"
            >
              Shop All {PRODUCTS.length} Products
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        <div
          className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 ${
            heading ? "mt-8" : ""
          }`}
        >
          {items.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
