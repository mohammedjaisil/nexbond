# NEXBOND — Website

E-commerce-style catalogue site for **NEXBOND Industrial Solutions LLC** (Sharjah, UAE).

Six ranges, one standard — *"What the label says is what you get."*

| Range | Examples |
| --- | --- |
| Masking Tape | General purpose, premium, heavy duty crepe tapes |
| Safety | Hi-vis vests, hard hats, traffic cones |
| Signage | Reflective traffic signs, directional & wayfinding signs |
| Road Marking | Thermoplastic compound, cold-applied paint, glass beads |
| Road Safety | Reflective road studs, delineators, speed bumps, wheel stops |
| Infrastructure | Galvanized hardware, W-beam guardrails & crash barriers |

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- No animation libraries — the hero is a CSS-transform banner slider, and
  sections render statically. `Reveal`/`Stagger`/`CountUp` are passthrough
  wrappers kept for call-site compatibility.
- `next/font` — Barlow Condensed (display) + DM Sans (body)
- `next/image` — WebP optimization, lazy loading

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

- `src/app/layout.tsx` — metadata, Open Graph, LocalBusiness JSON-LD, fonts
- `src/app/page.tsx` — home page assembly
- `src/app/products/` — catalogue (`?q=` search) and product detail pages
- `src/lib/products.ts` — the catalogue, category helpers, `priceLabel()`,
  `searchProducts()`
- `src/components/` — one component per section (Navbar, HeroSlider,
  PromiseBar, Categories, Products, PromoBanners, About, WhyNexbond,
  Features, Contact, Footer)
- `public/images/` — AI-generated product photography (via Canva), WebP

## Notes

- **Pricing is quote-based.** `Product` carries optional
  `price` / `compareAtPrice` / `unit` / `moq` / `badge` / `inStock` fields;
  `priceLabel()` shows "Price on Request" until real prices are filled in.
  Cards, the PDP and the quote flow all work without prices.
- Adding a product to `PRODUCTS` is enough — category tiles, the footer, the
  nav, search, the sitemap and the counts shown on the home page all derive
  from it.
- Placeholder contact details (phone `+971 50 123 4567`, P.O. Box `123456`)
  are used in `Contact.tsx`, `Navbar.tsx`, `Footer.tsx` and the product pages —
  replace with real ones before going live.
