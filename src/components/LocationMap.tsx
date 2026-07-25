import { Reveal } from "./Reveal";
import { ArrowRightIcon, PinIcon } from "./icons";

const QUERY = "Sharjah, United Arab Emirates";
const EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  QUERY
)}&z=11&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  QUERY
)}`;

export function LocationMap() {
  return (
    <section aria-label="Our location" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Find Us</p>
            <h2 className="headline mt-4 text-4xl text-white sm:text-5xl">
              Visit Our Office in <span className="text-gold">Sharjah.</span>
            </h2>
            <p className="mt-5 flex items-center gap-2 text-white/60">
              <PinIcon className="h-5 w-5 shrink-0 text-gold" />
              P.O. Box 123456, Sharjah, United Arab Emirates
            </p>
          </div>
          <a
            href={DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold"
          >
            Get Directions
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <iframe
              title="NEXBOND office location — Sharjah, United Arab Emirates"
              src={EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 grayscale-[0.3] contrast-110 sm:h-[460px]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
