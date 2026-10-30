import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/nexbond-logo.webp"
      alt="NEXBOND — Strength in Every Bond"
      width={1643}
      height={387}
      quality={90}
      priority
      sizes="280px"
      className={`h-12 w-auto sm:h-14 ${className}`}
    />
  );
}
