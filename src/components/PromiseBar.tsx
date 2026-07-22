import { CheckIcon } from "./icons";
import { Stagger, StaggerItem } from "./Reveal";

const PROMISES = ["True Width", "True Length", "True Value", "Complete Trust"];

export function PromiseBar() {
  return (
    <section id="promise" aria-label="Our promise" className="bg-cream py-14">
      <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {PROMISES.map((p) => (
          <StaggerItem key={p} className="flex items-center justify-center gap-3">
            <CheckIcon className="h-7 w-7 shrink-0 text-gold" />
            <span className="headline text-xl text-ink">{p}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
