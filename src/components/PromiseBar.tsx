import { BoxIcon, HeadsetIcon, RulerIcon, TruckIcon } from "./icons";

const SERVICES = [
  {
    icon: TruckIcon,
    title: "UAE-Wide Delivery",
    text: "Stocked in Sharjah, dispatched across the Emirates.",
  },
  {
    icon: BoxIcon,
    title: "Bulk & Trade Supply",
    text: "Single units, cartons, pallets or full site orders.",
  },
  {
    icon: RulerIcon,
    title: "True Size Guarantee",
    text: "Every item exactly as specified on the label.",
  },
  {
    icon: HeadsetIcon,
    title: "Quote in 1 Working Day",
    text: "Talk to the team by phone, WhatsApp or email.",
  },
];

export function PromiseBar() {
  return (
    <section
      id="promise"
      aria-label="Why buy from NEXBOND"
      className="border-y border-ink/8 bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-ink/8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="flex items-start gap-3.5 bg-white px-5 py-7 transition-colors hover:bg-cream"
          >
            <s.icon className="mt-0.5 h-7 w-7 shrink-0 text-gold" />
            <div>
              <p className="headline text-base text-ink">{s.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-warmgrey">
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
