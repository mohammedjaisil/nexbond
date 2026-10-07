import Image from "next/image";
import { CheckIcon, XMarkIcon } from "./icons";

/** The tape measurements are the clearest illustration of the promise. */
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

/** The same standard, stated in each range's own units. */
const STANDARDS = [
  { range: "Safety", spec: "EN ISO 20471 Class 2/3 reflective — not look-alike fabric" },
  { range: "Signage", spec: "High-intensity prismatic sheeting on rust-proof aluminium" },
  { range: "Road Marking", spec: "Full-yield thermoplastic with drop-on glass beads" },
  { range: "Infrastructure", spec: "Hot-dip galvanized, high-tensile 8.8 / 10.9 grades" },
];

export function WhyNexbond() {
  return (
    <section
      id="why-nexbond"
      className="overflow-hidden bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="section-label">Why NEXBOND</p>
          <h2 className="headline mt-3 text-3xl text-ink sm:text-4xl lg:text-5xl">
            What Others Print vs.{" "}
            <span className="text-gold">What We Deliver.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-warmgrey sm:text-base">
            Masking tape is where it is easiest to see — the numbers are printed
            right on the roll. The same standard runs through every range we
            supply.
          </p>

          {/* --- Comparison: cards on phones, table from sm up --- */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <div className="hidden grid-cols-3 bg-ink px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/70 sm:grid sm:text-xs">
              <span>What&apos;s Printed</span>
              <span>What Others Deliver</span>
              <span className="text-gold">What NEXBOND Delivers</span>
            </div>
            {ROWS.map((r, i) => (
              <div
                key={r.printed}
                className={`px-5 py-5 sm:grid sm:grid-cols-3 sm:items-center ${
                  i > 0 ? "border-t border-ink/8" : "border-t border-ink/8 sm:border-t-0"
                }`}
              >
                <p className="headline text-2xl text-ink sm:text-xl lg:text-2xl">
                  <span className="mr-2 align-middle text-[0.65rem] font-bold uppercase tracking-[0.15em] text-warmgrey sm:hidden">
                    Printed
                  </span>
                  {r.printed}
                </p>
                <p className="mt-3 flex items-start gap-2 pr-3 text-sm text-warmgrey sm:mt-0">
                  <XMarkIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.15em] text-warmgrey/70 sm:hidden">
                      Others deliver
                    </span>
                    {r.others}
                  </span>
                </p>
                <p className="mt-2.5 flex items-start gap-2 text-sm font-semibold text-ink sm:mt-0">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold sm:hidden">
                      NEXBOND delivers
                    </span>
                    {r.nexbond}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* --- Same promise, stated per range --- */}
          <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-5 sm:p-6">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
              Same Standard, Every Range
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {STANDARDS.map((s) => (
                <li key={s.range} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-sm leading-snug text-warmgrey">
                    <span className="font-semibold text-ink">{s.range}:</span>{" "}
                    {s.spec}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className="headline mt-8 text-lg text-ink sm:text-xl">
            No Short Length. No Less Width. No Downgraded Materials.{" "}
            <span className="text-gold">Only Honest Quality.</span>
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="group overflow-hidden rounded-2xl">
            <Image
              src="/images/why-measure.webp"
              alt="A NEXBOND masking tape roll being measured — every product is supplied at its stated specification"
              width={1400}
              height={1980}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[26rem] lg:h-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
