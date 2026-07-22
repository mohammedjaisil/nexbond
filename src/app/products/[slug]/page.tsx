import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaStrip } from "@/components/CtaStrip";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { PRODUCTS, getProduct } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — NEXBOND | True Size Guaranteed`,
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

  const others = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Product hero */}
        <section className="relative overflow-hidden bg-ink pb-24 pt-40 sm:pt-44">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-14 flex select-none justify-center"
          >
            <span className="headline whitespace-nowrap text-[clamp(4rem,14vw,12rem)] text-white/[0.05]">
              NEXBOND
            </span>
          </div>
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/40">
                <Link href="/products" className="transition-colors hover:text-gold">
                  Products
                </Link>{" "}
                / <span className="text-white/60">{product.name}</span>
              </nav>
              <p className="section-label mt-6">{product.tagline}</p>
              <h1 className="headline mt-4 text-4xl text-white sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                {product.longDescription}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink [--sweep-color:#fff]"
                >
                  Request a Quote
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
                >
                  All Products
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="mx-auto w-72 sm:w-96">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={1132}
                priority
                className="h-auto w-full rounded-2xl drop-shadow-[0_30px_60px_rgba(212,165,32,0.15)]"
              />
            </Reveal>
          </div>
        </section>

        {/* Specifications */}
        <section className="bg-cream py-24">
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
                    <span className="text-sm font-medium text-ink">{s.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={0.1}>
                <p className="section-label">Key Features</p>
                <ul className="mt-6 space-y-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span className="text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
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
            </div>
          </div>
        </section>

        {/* Other products */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="section-label">More From NEXBOND</p>
              <h2 className="headline mt-4 text-3xl text-ink sm:text-4xl">
                Other Masking Tapes.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex items-center gap-6 rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-ink">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="6rem"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="headline text-xl text-ink">{p.name}</h3>
                      <p className="mt-1 text-sm text-warmgrey">{p.description}</p>
                      <span className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
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
