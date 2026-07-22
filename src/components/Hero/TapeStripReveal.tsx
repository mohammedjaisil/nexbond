"use client";

/**
 * The 2D tape strip that "unrolls" across the hero, revealing the brand name.
 * Rendered as SVG strokes with `pathLength=1` so GSAP can animate
 * stroke-dashoffset 1 → 0 without measuring path lengths.
 *
 * Desktop: horizontal curve with a gentle sag (right → left, matching the
 * roll moving right). Mobile: vertical curve (top → bottom).
 */
export function TapeStripReveal() {
  return (
    <>
      {/* Desktop / tablet strip */}
      <svg
        aria-hidden
        role="presentation"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="strip-svg strip-h pointer-events-none absolute inset-0 z-20 hidden h-full w-full md:block"
      >
        <path
          className="tape-path"
          d="M 1920 380 Q 960 480 0 400"
          stroke="rgba(200, 168, 78, 0.35)"
          strokeWidth="120"
          fill="none"
          strokeLinecap="round"
          pathLength={1}
          style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
        />
      </svg>

      {/* Mobile strip (vertical) */}
      <svg
        aria-hidden
        role="presentation"
        viewBox="0 0 390 844"
        preserveAspectRatio="none"
        className="strip-svg strip-v pointer-events-none absolute inset-0 z-20 h-full w-full md:hidden"
      >
        <path
          className="tape-path"
          d="M 210 0 Q 150 422 200 844"
          stroke="rgba(200, 168, 78, 0.35)"
          strokeWidth="90"
          fill="none"
          strokeLinecap="round"
          pathLength={1}
          style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
        />
      </svg>
    </>
  );
}
