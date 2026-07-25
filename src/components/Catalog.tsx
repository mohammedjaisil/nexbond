import { PRODUCTS, getCategories } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export function Catalog() {
  const categories = getCategories();

  return (
    <section id="products" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-8">
        {categories.map((cat) => {
          const items = PRODUCTS.filter((p) => p.category === cat.name);
          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <Reveal className="flex items-end justify-between gap-4 border-b border-white/8 pb-5">
                <div>
                  <p className="section-label">{cat.name}</p>
                  <h2 className="headline mt-2 text-3xl text-white sm:text-4xl">
                    {cat.blurb}
                  </h2>
                </div>
                <span className="hidden shrink-0 text-sm font-semibold uppercase tracking-wider text-white/40 sm:block">
                  {items.length} {items.length === 1 ? "Product" : "Products"}
                </span>
              </Reveal>

              <Stagger className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <StaggerItem key={p.slug}>
                    <ProductCard p={p} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          );
        })}
      </div>
    </section>
  );
}
