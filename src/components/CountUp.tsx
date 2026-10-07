/** Static stat value — the count-up animation was dropped in the restyle. */
export function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  /** Kept for call-site compatibility; no longer used. */
  duration?: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {value}
      {suffix}
    </span>
  );
}
