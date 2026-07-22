import {
  ConeIcon,
  PaintIcon,
  RoadIcon,
  RoadStudIcon,
  SignIcon,
  TapeIcon,
} from "./icons";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const CATEGORIES = [
  { icon: TapeIcon, name: "Industrial Tapes & Adhesives", available: true },
  { icon: ConeIcon, name: "Safety Products", available: false },
  { icon: SignIcon, name: "Traffic Signs", available: false },
  { icon: PaintIcon, name: "Road Marking Paints & Materials", available: false },
  { icon: RoadStudIcon, name: "Road Safety Solutions", available: false },
  { icon: RoadIcon, name: "Infrastructure Support", available: false },
];

export function ComingSoon() {
  return (
    <section aria-label="Product categories" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">One Brand. Complete Solutions.</p>
          <h2 className="headline mt-4 text-4xl text-white sm:text-5xl">
            Complete Solutions for Safer Roads &amp;{" "}
            <span className="text-gold">Stronger Infrastructure.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.name}>
              <div className="relative flex h-full flex-col items-center gap-4 rounded-2xl border border-white/5 bg-coal/60 px-4 py-8 text-center transition-colors duration-300 hover:border-gold/40">
                {!c.available && (
                  <span className="absolute right-3 top-3 rounded-full border border-gold/40 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-gold">
                    Coming Soon
                  </span>
                )}
                <c.icon className="h-10 w-10 text-gold" />
                <span className="text-sm font-medium text-white/80">
                  {c.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
