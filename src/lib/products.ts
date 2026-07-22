export type Product = {
  slug: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  longDescription: string;
  cardSpecs: string[];
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "general-purpose-masking-tape",
    name: "General Purpose Masking Tape",
    image: "/images/tape-general.png",
    tagline: "Reliable Everyday Performance",
    description:
      "Reliable everyday masking for painting, bundling and labelling.",
    longDescription:
      "Our General Purpose Masking Tape is the dependable workhorse for everyday site and workshop tasks. Built on quality crepe paper with a natural rubber adhesive, it sticks firmly, tears cleanly by hand, and removes without residue — roll after roll, at the full printed size.",
    cardSpecs: ["48mm × 36 Yards", "Natural rubber adhesive", "Clean removal"],
    specs: [
      { label: "Width", value: "48mm — full width guaranteed" },
      { label: "Length", value: "36 Yards — full length guaranteed" },
      { label: "Backing", value: "Crepe paper" },
      { label: "Adhesive", value: "Natural rubber" },
      { label: "Removal", value: "Clean, residue-free" },
      { label: "Tear", value: "Easy hand tear" },
    ],
    features: [
      "True-to-label size — every roll",
      "Consistent adhesion across the full length",
      "Clean removal with no residue",
      "Easy hand tear for fast application",
    ],
    applications: [
      "General painting & decorating",
      "Bundling and packaging",
      "Labelling and colour coding",
      "Light-duty surface protection",
    ],
  },
  {
    slug: "premium-masking-tape",
    name: "Premium Masking Tape",
    image: "/images/tape-premium.png",
    tagline: "Professional-Grade Finish",
    description:
      "Professional-grade crepe paper tape for demanding finishes.",
    longDescription:
      "Premium Masking Tape is engineered for professionals who can't afford fuzzy lines or lifted edges. A higher-tack adhesive and conformable crepe backing deliver sharp paint lines on both smooth and lightly textured surfaces — with the full 50mm width and 36 yards you paid for.",
    cardSpecs: ["50mm × 36 Yards", "High-tack adhesive", "Sharp paint lines"],
    specs: [
      { label: "Width", value: "50mm — full width guaranteed" },
      { label: "Length", value: "36 Yards — full length guaranteed" },
      { label: "Backing", value: "Premium crepe paper" },
      { label: "Adhesive", value: "High-tack rubber blend" },
      { label: "Finish", value: "Sharp, clean paint lines" },
      { label: "Conformability", value: "Excellent on curves & edges" },
    ],
    features: [
      "Sharp, bleed-resistant paint lines",
      "High-tack hold on demanding surfaces",
      "Conforms to curves and profiles",
      "Full printed size — no compromise",
    ],
    applications: [
      "Professional painting & finishing",
      "Automotive masking",
      "Spray booth work",
      "Detail and trim work",
    ],
  },
  {
    slug: "heavy-duty-masking-tape",
    name: "Heavy Duty Masking Tape",
    image: "/images/tape-heavy-duty.png",
    tagline: "Built for Tough Conditions",
    description:
      "Built for tough industrial surfaces and harsh site conditions.",
    longDescription:
      "When the job site is hot, dusty and unforgiving, Heavy Duty Masking Tape holds on. Extra-strong adhesion and a temperature-resistant construction keep it in place on rough industrial surfaces — and like every NEXBOND roll, it delivers the full printed length and width.",
    cardSpecs: ["50mm × 36 Yards", "Extra-strong adhesion", "High temp resistance"],
    specs: [
      { label: "Width", value: "50mm — full width guaranteed" },
      { label: "Length", value: "36 Yards — full length guaranteed" },
      { label: "Backing", value: "Reinforced crepe paper" },
      { label: "Adhesive", value: "Extra-strong industrial grade" },
      { label: "Temperature", value: "High temperature resistance" },
      { label: "Surfaces", value: "Rough & industrial substrates" },
    ],
    features: [
      "Extra-strong grip on rough surfaces",
      "Withstands high site temperatures",
      "Durable under dust and humidity",
      "Honest measurements, guaranteed",
    ],
    applications: [
      "Industrial & construction sites",
      "High-temperature environments",
      "Heavy bundling and sealing",
      "Outdoor surface masking",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
