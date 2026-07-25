import { Reveal, Stagger, StaggerItem } from "./Reveal";

type Member = {
  name: string;
  role: string;
  bio: string;
};

const TEAM: Member[] = [
  {
    name: "Rahul Kumar",
    role: "Managing Director",
    bio: "Sets the standard NEXBOND is built on — honest measurements and quality that earns trust.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    bio: "Keeps supply, stock and delivery running so every order arrives complete and on time.",
  },
  {
    name: "Ahmed Al-Farsi",
    role: "Sales Director",
    bio: "Partners with contractors and distributors across the UAE to match the right product to the job.",
  },
  {
    name: "Sara Khan",
    role: "Quality Lead",
    bio: "Checks every batch against the label — full length, full width, no compromise.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function Team() {
  return (
    <section aria-label="Our team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-label">Our Team</p>
          <h2 className="headline mt-4 text-4xl text-ink sm:text-5xl">
            The People Behind{" "}
            <span className="text-gold">Every Bond.</span>
          </h2>
          <p className="mt-6 text-warmgrey">
            A focused team that treats your requirements as their own — from the
            first quote to the final delivery.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-cream p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(212,165,32,0.12)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#b8860b] text-2xl font-bold text-ink shadow-inner">
                  {initials(m.name)}
                </div>
                <h3 className="headline mt-5 text-xl text-ink">{m.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gold">
                  {m.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-warmgrey">
                  {m.bio}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
