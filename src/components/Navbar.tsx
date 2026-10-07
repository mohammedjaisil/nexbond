"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { getCategories } from "@/lib/products";
import {
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  CartIcon,
  WhatsAppIcon,
} from "./icons";

const LINKS = [
  { label: "All Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Why NEXBOND", href: "/why-nexbond" },
  { label: "Contact", href: "/contact" },
];

const PHONE = "+971501234567";
const WHATSAPP = "971501234567";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const categories = getCategories();

  // Mirror ?q= back into the field after mount. Read from location rather than
  // useSearchParams so pages stay statically prerenderable.
  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get("q") ?? "");
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // GET form → /products?q=… so search works without JS too.
  const searchField = (autoId: string, placeholder = "Search products…") => (
    <form action="/products" role="search" className="relative w-full">
      <label htmlFor={autoId} className="sr-only">
        Search products
      </label>
      <input
        id={autoId}
        type="search"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
    </form>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      {/* ---------- Utility bar ---------- */}
      <div className="hidden border-b border-white/10 bg-coal/60 lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-[0.7rem] text-white/50 sm:px-8">
          <p className="font-medium uppercase tracking-[0.15em]">
            Industrial · Safety · Infrastructure supply — Sharjah, UAE
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-1.5 py-1 transition-colors hover:text-gold"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1 transition-colors hover:text-gold"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <a
              href="mailto:info@nexbondinfra.com"
              className="inline-flex items-center gap-1.5 py-1 transition-colors hover:text-gold"
            >
              <MailIcon className="h-3.5 w-3.5" />
              info@nexbondinfra.com
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Main bar: logo · search · actions ---------- */}
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="NEXBOND — home" className="shrink-0 py-2 text-white">
          <Logo />
        </Link>

        <div className="hidden flex-1 md:block">
          {searchField(
            "site-search",
            "Search tapes, signage, safety gear, road marking, hardware…"
          )}
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="/contact"
            className="btn-sweep hidden items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-ink [--sweep-color:#fff] sm:inline-flex"
          >
            <CartIcon className="h-4 w-4" />
            Request a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-white lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile search row ---------- */}
      <div className="border-t border-white/10 px-5 py-3 md:hidden">
        {searchField("mobile-search")}
      </div>

      {/* ---------- Category nav ---------- */}
      <nav
        aria-label="Main navigation"
        className="hidden border-t border-white/10 lg:block"
      >
        <ul className="mx-auto flex h-11 max-w-7xl items-center gap-6 px-5 text-xs font-semibold sm:px-8">
          {LINKS.slice(0, 1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className={`uppercase tracking-wider transition-colors hover:text-gold ${
                  isActive(pathname, l.href) ? "text-gold" : "text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li aria-hidden className="h-4 w-px bg-white/15" />
          {categories.map((c) => (
            <li key={c.id}>
              <Link
                href={`/products#${c.id}`}
                className="whitespace-nowrap text-white/60 transition-colors hover:text-gold"
              >
                {c.name}
              </Link>
            </li>
          ))}
          <li className="ml-auto flex items-center gap-6">
            {LINKS.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className={`whitespace-nowrap uppercase tracking-wider transition-colors hover:text-gold ${
                  isActive(pathname, l.href) ? "text-gold" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </li>
        </ul>
      </nav>

      {/* ---------- Mobile drawer ---------- */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <div className="absolute inset-y-0 right-0 flex w-80 max-w-[85vw] flex-col overflow-y-auto bg-ink p-7">
            <div className="flex items-center justify-between text-white">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6">{searchField("drawer-search")}</div>

            <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/35">
              Shop by Category
            </p>
            <ul className="mt-4 space-y-3.5">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/products#${c.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-sm font-semibold text-white transition-colors hover:text-gold"
                  >
                    {c.name}
                    <span className="text-xs text-white/35">{c.count}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/35">
              Menu
            </p>
            <ul className="mt-4 space-y-3.5">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`text-sm font-semibold transition-colors hover:text-gold ${
                    pathname === "/" ? "text-gold" : "text-white"
                  }`}
                >
                  Home
                </Link>
              </li>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-semibold transition-colors hover:text-gold ${
                      isActive(pathname, l.href) ? "text-gold" : "text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink"
            >
              <CartIcon className="h-4 w-4" />
              Request a Quote
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
