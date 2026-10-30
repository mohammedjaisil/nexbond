import { Reveal } from "./Reveal";
import { ArrowRightIcon, PinIcon } from "./icons";

const QUERY = "Middle East Infra Contracting LLC";
const EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.561392212662!2d55.33952687511647!3d25.251693877675905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d586b83ac85%3A0x6e4a5135cf6fab99!2sMiddle%20East%20Infra%20Contracting%20LLC!5e0!3m2!1sen!2sae!4v1793003205480!5m2!1sen!2sae";
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
              Visit Our Office in <span className="text-gold">Dubai.</span>
            </h2>
            <p className="mt-5 flex items-center gap-2 text-white/60">
              <PinIcon className="h-5 w-5 shrink-0 text-gold" />
              First Floor, 119, Al Garhoud Star Building, Al Garhoud, Dubai, United Arab Emirates
            </p>
          </div>
          <a
            href={DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 py-2 text-sm font-bold uppercase tracking-wider text-gold"
          >
            Get Directions
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <iframe
              title="NEXBOND office location on Google Maps"
              src={EMBED}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-[380px] w-full border-0 grayscale-[0.3] contrast-110 sm:h-[460px]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
