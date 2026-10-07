import Image from "next/image";
import Link from "next/link";
import { catId, priceLabel, productBadge, type Product } from "@/lib/products";
import { CartIcon, WhatsAppIcon } from "./icons";

const WHATSAPP = "971501234567";

export function ProductCard({ p }: { p: Product }) {
  const price = priceLabel(p);
  const badge = productBadge(p);
  const inStock = p.inStock ?? true;
  const href = `/products/${p.slug}`;
  const quoteHref = `/contact?product=${encodeURIComponent(p.name)}`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hi NEXBOND, I'd like pricing and availability for the ${p.name}.`
  )}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/8 bg-white transition-all duration-200 hover:border-gold/50 hover:shadow-[0_10px_28px_rgba(26,26,26,0.1)]">
      {/* ---------- Media ---------- */}
      <div className="relative aspect-square overflow-hidden bg-[#f1efea]">
        <Link href={href} aria-label={`${p.name} details`} className="block h-full">
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 48vw, (max-width: 1024px) 31vw, 23vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </Link>

        {badge && (
          <span className="absolute left-2 top-2 rounded bg-gold px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink">
            {badge}
          </span>
        )}

        <span className="absolute inset-x-0 bottom-0 truncate bg-ink/75 px-2.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {p.cardSpecs[0]}
        </span>
      </div>

      {/* ---------- Body ---------- */}
      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={`/products#${catId(p.category)}`}
            className="-my-1 truncate py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-warmgrey transition-colors hover:text-gold"
          >
            {p.category}
          </Link>
          <span
            className={`inline-flex shrink-0 items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wider ${
              inStock ? "text-emerald-600" : "text-ink/40"
            }`}
          >
            <span
              aria-hidden
              className={`h-1.5 w-1.5 rounded-full ${
                inStock ? "bg-emerald-500" : "bg-ink/30"
              }`}
            />
            <span className="sr-only min-[360px]:not-sr-only">
              {inStock ? "In Stock" : "On Order"}
            </span>
          </span>
        </div>

        <h3 className="headline mt-2 text-[0.95rem] leading-tight text-ink">
          <Link href={href} className="line-clamp-2 py-1 transition-colors hover:text-gold">
            {p.name}
          </Link>
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-warmgrey">
          {p.description}
        </p>

        {/* ---------- Price + actions ---------- */}
        <div className="mt-auto pt-3">
          <p
            className={`headline leading-none text-ink ${
              price.onRequest ? "text-[0.8rem]" : "text-lg"
            }`}
          >
            {price.value}
            {price.compareAt && (
              <span className="ml-1.5 align-middle text-xs font-normal text-warmgrey line-through">
                {price.compareAt}
              </span>
            )}
          </p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-warmgrey">
            {price.unit ?? p.unit ?? (p.moq ? `MOQ ${p.moq}` : "Bulk pricing")}
          </p>

          <div className="mt-2.5 flex gap-1.5">
            <Link
              href={quoteHref}
              className="btn-sweep inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-ink px-2 py-3 text-[0.65rem] font-bold uppercase tracking-wide text-white [--sweep-color:var(--color-gold)] hover:text-ink"
            >
              <CartIcon className="hidden h-4 w-4 shrink-0 min-[360px]:block" />
              {/* Short label keeps the button on one line in the 2-up phone grid */}
              <span className="lg:hidden">Quote</span>
              <span className="hidden lg:inline">Add to Quote</span>
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask about ${p.name} on WhatsApp`}
              className="inline-flex w-9 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink/55 transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white min-[360px]:w-11"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
