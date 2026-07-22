import Image from "next/image";
import { Reveal } from "./Reveal";
import { CheckIcon, XMarkIcon } from "./icons";

const ROWS = [
  {
    printed: "36 Yards",
    others: "Less than 30 yards",
    nexbond: "36 Yards — full length",
  },
  {
    printed: "50 MM",
    others: "Less than 45 mm",
    nexbond: "50 MM — full width",
  },
];

export function WhyNexbond() {
  return (
    <section id="why-nexbond" className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="section-label">Why NEXBOND</p>
            <h2 className="headline mt-4 text-4xl text-ink sm:text-5xl">
              What Others Print vs.{" "}
              <span className="text-gold">What We Deliver.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
              <div className="grid grid-cols-3 bg-ink px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/70 sm:text-xs">
                <span>What&apos;s Printed</span>
                <span>What Others Deliver</span>
                <span className="text-gold">What NEXBOND Delivers</span>
              </div>
              {ROWS.map((r) => (
                <div
                  key={r.printed}
                  className="grid grid-cols-3 items-center border-t border-ink/5 px-5 py-5"
                >
                  <span className="headline text-2xl text-ink">{r.printed}</span>
                  <span className="flex items-center gap-2 pr-3 text-sm text-warmgrey">
                    <XMarkIcon className="h-5 w-5 shrink-0 text-red-500" />
                    {r.others}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <CheckIcon className="h-5 w-5 shrink-0 text-gold" />
                    {r.nexbond}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="headline mt-8 text-xl text-ink">
              No Short Length. No Less Width. No Compromise.{" "}
              <span className="text-gold">Only Honest Quality.</span>
            </p>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="group overflow-hidden rounded-2xl">
            <Image
              src="/images/why-measure.png"
              alt="NEXBOND masking tape roll measured with a measuring tape — true size guaranteed"
              width={1400}
              height={1980}
              className="h-150 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
