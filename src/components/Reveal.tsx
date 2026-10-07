import type { ReactNode } from "react";

/**
 * Scroll reveals were removed in the e-commerce restyle — product pages read
 * better when content is simply there. These remain as zero-cost wrappers so
 * existing layouts (and their class names) keep working.
 */

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  /** Kept for call-site compatibility; no longer used. */
  delay?: number;
  y?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
