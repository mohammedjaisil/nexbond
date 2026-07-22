import Link from "next/link";
import { Logo } from "./Logo";
import { PRODUCTS } from "@/lib/products";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./icons";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why NEXBOND", href: "/why-nexbond" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "WhatsApp", href: "https://wa.me/971501234567", Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <div className="text-white">
            <Logo tagline />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Industrial, safety and infrastructure solutions from Sharjah, UAE.
            What we promise, we deliver.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="headline text-lg text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Products">
          <h3 className="headline text-lg text-white">Products</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="transition-colors hover:text-gold"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="transition-colors hover:text-gold">
                All Products &amp; Coming Soon
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="headline text-lg text-white">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+971501234567" className="transition-colors hover:text-gold">
                +971 50 123 4567
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href="mailto:info@nexbondinfra.com"
                className="transition-colors hover:text-gold"
              >
                info@nexbondinfra.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                P.O. Box 123456, Sharjah,
                <br />
                United Arab Emirates
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} NEXBOND Industrial Solutions LLC. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms of Use
            </Link>
            <p className="rounded-full border border-gold/40 px-4 py-1.5 font-bold uppercase tracking-[0.2em] text-gold">
              Made in UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
