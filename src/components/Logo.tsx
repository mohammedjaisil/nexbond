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
      sizes="170px"
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
  );
}
