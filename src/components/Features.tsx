import { GemIcon, RulerIcon, ShieldIcon, UsersIcon } from "./icons";
import { Stagger, StaggerItem } from "./Reveal";

const FEATURES = [
  {
    icon: ShieldIcon,
    title: "Honest By Choice",
    text: "We believe in transparency.",
  },
  {
    icon: RulerIcon,
    title: "True Measurements Guaranteed",
    text: "You get what you pay for.",
  },
  {
    icon: UsersIcon,
    title: "Trusted By Professionals",
    text: "Contractors choose us for a reason.",
  },
  {
    icon: GemIcon,
    title: "Premium Quality Materials",
    text: "Better materials, better performance.",
  },
];

export function Features() {
  return (
    <section aria-label="Why choose NEXBOND" className="bg-white py-24">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 sm:px-8 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <StaggerItem key={f.title}>
            <div className="h-full rounded-2xl border border-ink/5 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
              <f.icon className="h-9 w-9 text-gold" />
              <h3 className="headline mt-5 text-xl text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-warmgrey">{f.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
