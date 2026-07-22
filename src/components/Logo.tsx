export function Logo({
  className = "",
  tagline = false,
}: {
  className?: string;
  tagline?: boolean;
}) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="headline text-2xl tracking-wide">
        NE<span className="italic text-gold">X</span>BOND
      </span>
      {tagline && (
        <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.25em] text-warmgrey">
          Strength in Every Bond.
        </span>
      )}
    </span>
  );
}
