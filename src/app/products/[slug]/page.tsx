import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaStrip } from "@/components/CtaStrip";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { PRODUCTS, getProduct } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

const WHATSAPP = "971501234567";
const PHONE = "+971501234567";

const TRUST = [
  { icon: ShieldIcon, label: "Made in UAE" },
  { icon: CheckIcon, label: "In Stock" },
  { icon: CheckIcon, label: "Bulk Supply" },
];

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — NEXBOND | Request a Quote`,
    description: product.longDescription,
    openGraph: {
      title: `${product.name} — NEXBOND`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 3);
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hi NEXBOND, I'd like a quote for the ${product.name}. Please share pricing and availability.`
  )}`;

  return (
    <>
      <Navbar />
      <main>
        {/* ---------- PDP top: gallery + buy box ---------- */}
        <section className="bg-ink pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav
              aria-label="Breadcrumb"
              className="text-xs uppercase tracking-wider text-white/40"
            >
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/products" className="transition-colors hover:text-gold">
                Products
              </Link>{" "}
              / <span className="text-white/70">{product.name}</span>
            </nav>

            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Image panel */}
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#242424] to-[#131313] p-5 sm:p-6">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#141414]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute right-8 top-8 rounded-full bg-gold/95 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-ink shadow-lg">
                    ✓ True Size Guaranteed
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {TRUST.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-coal/60 px-3 py-3 text-center"
                    >
                      <t.icon className="h-4 w-4 shrink-0 text-gold" />
                      <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/70">
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Buy box */}
              <div>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-gold/40 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-gold">
                      {product.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Available Now
                    </span>
                  </div>

                  <p className="section-label mt-5">{product.tagline}</p>
                  <h1 className="headline mt-3 text-4xl text-white sm:text-5xl">
                    {product.name}
                  </h1>
                  <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                    {product.longDescription}
                  </p>

                  {/* Spec highlights */}
                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {product.specs.slice(0, 3).map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-white/8 bg-coal/60 px-4 py-3"
                      >
                        <p className="text-[0.6rem] font-bold uppercase tracking-wider text-white/40">
                          {s.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-snug text-white">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quote box */}
                  <div className="mt-8 rounded-2xl border border-gold/25 bg-coal/50 p-6">
                    <p className="text-sm text-white/60">
                      Pricing is tailored to your quantity and delivery location.
                    </p>
                    <p className="headline mt-1 text-2xl text-white">
                      Request a Custom Quote
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={quoteHref}
                        className="btn-sweep group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink [--sweep-color:#fff]"
                      >
                        Get a Quote
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#062e15] transition-transform hover:scale-[1.02]"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </div>
                    <a
                      href={`tel:${PHONE}`}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-gold"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Or call {PHONE}
                    </a>
                    <p className="mt-4 text-xs text-white/40">
                      Typical response within one business day.
                    </p>
                  </div>

                  {/* Feature checklist */}
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span className="text-sm text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Full specifications + applications ---------- */}
        <section className="bg-cream py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="section-label">Specifications</p>
              <h2 className="headline mt-4 text-3xl text-ink sm:text-4xl">
                Every Number on the Label{" "}
                <span className="text-gold">Is Real.</span>
              </h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
                {product.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`grid grid-cols-[8rem_1fr] gap-4 px-6 py-4 sm:grid-cols-[10rem_1fr] ${
                      i > 0 ? "border-t border-ink/5" : ""
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-warmgrey">
                      {s.label}
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={0.1}>
                <p className="section-label">Applications</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.applications.map((a) => (
                    <li
                      key={a}
                      className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm font-medium text-ink"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="rounded-2xl bg-ink p-8">
                  <p className="section-label">The NEXBOND Promise</p>
                  <p className="mt-4 leading-relaxed text-white/70">
                    Whatever the category, the standard never changes: honest
                    measurements, dependable quality, and exactly what the label
                    says. No short measure, no fine print.
                  </p>
                  <Link
                    href={quoteHref}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold"
                  >
                    Request pricing
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Related products ---------- */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="section-label">More From NEXBOND</p>
              <h2 className="headline mt-4 text-3xl text-ink sm:text-4xl">
                You May Also Need.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="headline text-lg text-ink">{p.name}</h3>
                      <p className="mt-1 text-sm text-warmgrey">
                        {p.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                        View Details
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
