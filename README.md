# NEXBOND — Website

Single-page marketing site for **NEXBOND Industrial Solutions LLC** (Sharjah, UAE).
Launch product: premium masking tape — *"True Size. True Trust."*

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** — scroll-triggered reveals, parallax hero, count-up stats
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
- `src/app/page.tsx` — section assembly
- `src/components/` — one component per section (Navbar, Hero, PromiseBar, About, Products, WhyNexbond, Features, ComingSoon, Contact, Footer)
- `public/images/` — AI-generated product photography (via Canva)

## Notes for future expansion

- `Products.tsx` — the `PRODUCTS` array + card layout are reusable for new
  product categories (safety, traffic signs, road marking, etc.).
- `ComingSoon.tsx` — flip `available: true` per category as lines launch.
- Placeholder contact details (phone `+971 50 123 4567`, P.O. Box `123456`)
  are used in `Contact.tsx` and `Footer.tsx` — replace with real ones before
  going live.
