import Link from "next/link";
import { PRODUCTS, getCategories, searchProducts } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const GRID = "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4";

export function Catalog({ query }: { query?: string }) {
  const q = query?.trim();

  // ---------- Search results view ----------
  if (q) {
    const results = searchProducts(q);
    return (
      <section id="products" className="bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 border-b border-ink/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Search Results</p>
              <h2 className="headline mt-2 text-2xl text-ink sm:text-3xl">
                {results.length} {results.length === 1 ? "product" : "products"}{" "}
                for <span className="text-gold">&ldquo;{q}&rdquo;</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="shrink-0 self-start rounded-full border border-ink/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-gold hover:text-gold sm:self-auto"
            >
              Clear search
            </Link>
          </div>

          {results.length > 0 ? (
            <div className={`mt-7 ${GRID}`}>
              {results.map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-10 text-center">
              <p className="headline text-xl text-ink">No matches found</p>
              <p className="mx-auto mt-2 max-w-md text-sm text-warmgrey">
                Try a broader term — &ldquo;tape&rdquo;, &ldquo;cones&rdquo;,
                &ldquo;signs&rdquo;, &ldquo;paint&rdquo;, &ldquo;studs&rdquo; or
                &ldquo;guardrail&rdquo; — or browse the full range below.
              </p>
              <Link
                href="/products"
                className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
              >
                Browse all {PRODUCTS.length} products
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  // ---------- Full catalogue, grouped by category ----------
  const categories = getCategories();

  return (
    <section id="products" className="bg-cream py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Category jump bar */}
        <nav
          aria-label="Jump to category"
          className="flex gap-2 overflow-x-auto pb-6 no-scrollbar"
        >
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-ink/12 bg-white px-4 py-2 text-xs font-semibold text-ink/70 transition-colors hover:border-gold hover:text-gold"
            >
              {c.name}
              <span className="ml-1.5 text-ink/35">{c.count}</span>
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          {categories.map((cat) => {
            const items = PRODUCTS.filter((p) => p.category === cat.name);
            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-44">
                <div className="flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
                  <div>
                    <p className="section-label">{cat.name}</p>
                    <h2 className="headline mt-1.5 text-2xl text-ink sm:text-3xl">
                      {cat.blurb}
                    </h2>
                  </div>
                  <span className="hidden shrink-0 text-xs font-bold uppercase tracking-wider text-warmgrey sm:block">
                    {items.length} {items.length === 1 ? "Product" : "Products"}
                  </span>
                </div>

                <div className={`mt-6 ${GRID}`}>
                  {items.map((p) => (
                    <ProductCard key={p.slug} p={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
