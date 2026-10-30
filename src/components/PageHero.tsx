import { Reveal } from "./Reveal";

export function PageHero({
  label,
  title,
  accent,
  subtitle,
  watermark,
}: {
  label: string;
  title: string;
  /** Portion of the heading rendered in gold, after `title`. */
  accent?: string;
  subtitle?: string;
  /** Oversized faint word behind the heading; defaults to NEXBOND. */
  watermark?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-10 pt-44 sm:pb-12 md:pt-28 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-32 flex select-none justify-center md:top-16 lg:top-40"
      >
        <span className="headline whitespace-nowrap text-[clamp(3rem,10vw,8rem)] text-white/[0.05]">
          {watermark ?? "NEXBOND"}
        </span>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">{label}</p>
          <h1 className="headline text-h1 mt-4 max-w-4xl text-white">
            {title}
            {accent && <span className="text-gold"> {accent}</span>}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-white/60">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
