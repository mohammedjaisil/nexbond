"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRightIcon, SearchIcon } from "./icons";
import { searchProducts } from "@/lib/products";

const MAX_RESULTS = 6;

export function SearchBox({
  placeholder = "Search products…",
}: {
  placeholder?: string;
}) {
  const id = useId();
  const listId = `${id}-results`;
  const pathname = usePathname();
  const router = useRouter();
  const rootRef = useRef<HTMLFormElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  // Mirror ?q= back into the field after mount. Read from location rather than
  // useSearchParams so pages stay statically prerenderable.
  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get("q") ?? "");
    setOpen(false);
    setActive(-1);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const q = query.trim();
  const matches = useMemo(() => (q ? searchProducts(q) : []), [q]);
  const results = matches.slice(0, MAX_RESULTS);
  const showPanel = open && q.length > 0;

  const close = () => {
    setOpen(false);
    setActive(-1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      // Search inputs clear themselves on Escape; only do that once the panel is shut.
      if (showPanel) e.preventDefault();
      close();
    } else if (showPanel && results.length > 0 && e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (showPanel && results.length > 0 && e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter" && showPanel && active >= 0) {
      e.preventDefault();
      close();
      router.push(`/products/${results[active].slug}`);
    }
  };

  // GET form → /products?q=… so search works without JS too.
  return (
    <form
      ref={rootRef}
      action="/products"
      role="search"
      className="relative w-full"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) close();
      }}
    >
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <input
        id={id}
        type="search"
        name="q"
        role="combobox"
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={showPanel}
        aria-controls={listId}
        aria-activedescendant={
          showPanel && active >= 0 ? `${listId}-${active}` : undefined
        }
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/15 bg-white/[0.06] py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-gold/70 focus:bg-white/10"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full p-2.5 text-white/60 transition-colors hover:text-gold"
      >
        <SearchIcon className="h-4 w-4" />
      </button>

      {showPanel && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 max-h-[min(65svh,28rem)] overflow-y-auto rounded-2xl border border-white/15 bg-ink shadow-2xl shadow-black/50">
          {results.length > 0 ? (
            <>
              <ul id={listId} role="listbox" aria-label="Matching products" className="p-2">
                {results.map((p, i) => (
                  <li
                    key={p.slug}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={i === active}
                  >
                    <Link
                      href={`/products/${p.slug}`}
                      tabIndex={-1}
                      onClick={close}
                      onMouseEnter={() => setActive(i)}
                      className={`flex items-center gap-3 rounded-xl p-2 transition-colors ${
                        i === active ? "bg-white/10" : ""
                      }`}
                    >
                      <Image
                        src={p.image}
                        alt=""
                        width={48}
                        height={48}
                        sizes="48px"
                        className="h-12 w-12 shrink-0 rounded-lg object-cover"
                      />
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-white">
                          {p.name}
                        </span>
                        <span className="block truncate text-xs text-white/50">
                          {p.category}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/products?q=${encodeURIComponent(q)}`}
                tabIndex={-1}
                onClick={close}
                className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-gold transition-colors hover:bg-white/5"
              >
                View {matches.length === 1 ? "result" : `all ${matches.length} results`}
                <ArrowRightIcon className="h-4 w-4 shrink-0" />
              </Link>
            </>
          ) : (
            <div id={listId} className="p-5 text-sm text-white/60" role="status">
              No products match &ldquo;{q}&rdquo;. Try &ldquo;tape&rdquo;,
              &ldquo;cones&rdquo;, &ldquo;signs&rdquo; or &ldquo;paint&rdquo;.
            </div>
          )}
        </div>
      )}
    </form>
  );
}
