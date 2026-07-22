import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./icons";

export function CtaStrip() {
  return (
    <section className="bg-gold py-16">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 sm:px-8 lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="headline text-3xl text-ink sm:text-4xl">
            Ready to Build Stronger Bonds?
          </h2>
          <p className="mt-2 text-ink/70">
            Bulk orders, product samples, or partnership inquiries — we respond
            within one business day.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-sweep group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wider text-white [--sweep-color:#2d2d2d]"
        >
          Request a Quote
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
