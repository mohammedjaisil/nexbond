# Image credits

## Product images (NEXBOND's own)

Every product card and product page image in `public/images/` is an
AI-generated studio shot that NEXBOND produced from the prompts in
`IMAGE-PROMPTS.md`: square, on a `#F1EFEA` background, with no third-party
licence. The full-size PNG originals are kept in `assets/product-originals/`
(not served by the site). They were converted to webp at 1200 × 1200, q82.

The same applies to `hero-tapes.webp`, `about-rolls.webp` and `why-measure.webp`
(converted at full size).

## Banner photos (`scene-*.webp`)

The home-page hero slides and promo banners use these full-bleed photographs
behind dark text overlays. Studio cut-outs don't work there.

| File | Source |
| --- | --- |
| `scene-tape-premium.webp` | https://www.pexels.com/photo/5691615/ |
| `scene-safety-gear.webp` | https://www.pexels.com/photo/34442873/ |
| `scene-directional-signage.webp` | https://commons.wikimedia.org/wiki/File:Directional_road_sign_of_the_Dubai_Gold_Souk.jpg (public domain) |
| `scene-road-marking-paint.webp` | https://commons.wikimedia.org/wiki/File:Abu_Dhabi_Roads.jpg (AdnanDekedek, CC BY-SA 4.0; **credited on /image-credits**) |
| `scene-road-studs.webp` | https://www.pexels.com/photo/28606757/ |
| `scene-speed-bumps.webp` | https://www.pexels.com/photo/220203/ |
| `scene-infrastructure-hardware.webp` | https://www.pexels.com/photo/30496227/ |
| `og-image.jpg` | https://www.pexels.com/photo/11054546/ |

If a photo needs attribution, give it an `imageCredit` on the product in
`src/lib/products.ts`, or list it by hand in `src/app/image-credits/page.tsx` if
it isn't a product photo.
