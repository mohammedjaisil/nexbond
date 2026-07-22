export function ScrollIndicator() {
  return (
    <a
      href="#promise"
      aria-label="Scroll to next section"
      className="hero-item absolute bottom-6 left-1/2 z-30 -translate-x-1/2 opacity-50 transition-opacity hover:opacity-100"
    >
      <span className="scroll-line flex flex-col items-center gap-1">
        <span className="block h-10 w-px bg-gold" />
        <svg
          viewBox="0 0 12 8"
          className="h-2 w-3 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="m1 1 5 5 5-5" />
        </svg>
      </span>
    </a>
  );
}
