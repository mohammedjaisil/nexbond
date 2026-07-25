export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  longDescription: string;
  cardSpecs: string[];
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "general-purpose-masking-tape",
    name: "General Purpose Masking Tape",
    category: "Masking Tape",
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
    category: "Masking Tape",
    image: "/images/tape-premium.png",
    tagline: "Professional-Grade Finish",
    featured: true,
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
    category: "Masking Tape",
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
  {
    slug: "high-visibility-safety-gear",
    name: "High-Visibility Safety Gear",
    category: "Safety",
    image: "/images/safety-gear.webp",
    tagline: "See and Be Seen",
    featured: true,
    description:
      "Hi-vis vests, cones and hard hats that keep crews visible on site.",
    longDescription:
      "NEXBOND High-Visibility Safety Gear keeps your crew seen in every condition. From reflective vests to impact-rated hard hats and weighted traffic cones, each item is built to endure UAE heat, dust and long shifts — so on-site safety is never an afterthought.",
    cardSpecs: ["EN ISO 20471 reflective", "UV & heat resistant", "Bulk supply"],
    specs: [
      { label: "Range", value: "Vests, cones & hard hats" },
      { label: "Reflectivity", value: "EN ISO 20471 Class 2/3" },
      { label: "Material", value: "Breathable polyester / ABS" },
      { label: "Colours", value: "Fluorescent orange & yellow" },
      { label: "Temperature", value: "Rated for harsh site heat" },
      { label: "Supply", value: "Single units or bulk cartons" },
    ],
    features: [
      "High-contrast fabric with reflective tape",
      "Lightweight and breathable for long shifts",
      "Impact-resistant hard hats",
      "Stackable, weighted-base traffic cones",
    ],
    applications: [
      "Road works & traffic management",
      "Construction & industrial sites",
      "Warehousing & logistics",
      "Events & crowd safety",
    ],
  },
  {
    slug: "traffic-safety-cones",
    name: "Traffic Safety Cones",
    category: "Safety",
    image: "/images/safety-cones.webp",
    tagline: "Mark It. Guard It.",
    description:
      "Weighted, high-visibility traffic cones for lane control and work zones.",
    longDescription:
      "NEXBOND Traffic Safety Cones bring instant, high-visibility control to any work zone. Moulded from tough, UV-stable PVC in fluorescent orange with a reflective collar, each cone has a weighted base that stays put in wind and wash — and stacks flat for easy transport and storage.",
    cardSpecs: ["Fluorescent PVC", "Reflective collar", "Weighted base"],
    specs: [
      { label: "Heights", value: "300 / 500 / 750mm" },
      { label: "Material", value: "UV-stable PVC" },
      { label: "Colour", value: "Fluorescent orange" },
      { label: "Reflectivity", value: "Reflective sleeve collar" },
      { label: "Base", value: "Weighted, non-tip" },
      { label: "Storage", value: "Stackable" },
    ],
    features: [
      "Bright fluorescent, high-visibility finish",
      "Reflective collar for night use",
      "Weighted base resists wind and wash",
      "Stacks flat for transport and storage",
    ],
    applications: [
      "Lane closures & traffic control",
      "Work zones & car parks",
      "Events & crowd channelling",
      "Hazard and spill marking",
    ],
  },
  {
    slug: "reflective-traffic-signs",
    name: "Reflective Traffic Signs",
    category: "Signage",
    image: "/images/traffic-signs.webp",
    tagline: "Clear at Every Distance",
    featured: true,
    description:
      "High-intensity reflective road and warning signage, built to standard.",
    longDescription:
      "NEXBOND Reflective Traffic Signs are manufactured on rust-proof aluminium with high-intensity prismatic sheeting, staying legible day and night. Supplied blank or custom-printed to GCC standards and mounted on galvanized posts for a long service life in demanding outdoor conditions.",
    cardSpecs: ["Aluminium substrate", "High-intensity prismatic", "Custom printed"],
    specs: [
      { label: "Substrate", value: "Rust-proof aluminium" },
      { label: "Sheeting", value: "High-intensity prismatic" },
      { label: "Sizes", value: "600 / 750 / 900mm & custom" },
      { label: "Mounting", value: "Galvanized posts & clamps" },
      { label: "Compliance", value: "GCC / MUTCD layouts" },
      { label: "Finish", value: "Weather & UV resistant" },
    ],
    features: [
      "Retro-reflective for night visibility",
      "Corrosion-proof aluminium panels",
      "Custom shapes, symbols and text",
      "Complete post & fixing kits available",
    ],
    applications: [
      "Highways & municipal roads",
      "Construction & diversion zones",
      "Car parks & private estates",
      "Industrial facility wayfinding",
    ],
  },
  {
    slug: "directional-wayfinding-signs",
    name: "Directional & Wayfinding Signs",
    category: "Signage",
    image: "/images/directional-signage.webp",
    tagline: "Point the Way",
    description:
      "Custom directional and wayfinding signage on reflective aluminium.",
    longDescription:
      "NEXBOND Directional & Wayfinding Signs guide traffic and visitors with clarity. Printed on rust-proof aluminium with reflective sheeting and mounted on galvanized posts, they're made to any size, colour or legend — from highway guide signs to car-park and facility wayfinding.",
    cardSpecs: ["Reflective aluminium", "Fully custom", "Post & fixings"],
    specs: [
      { label: "Substrate", value: "Rust-proof aluminium" },
      { label: "Sheeting", value: "Reflective (EG / HI)" },
      { label: "Sizes", value: "Made to order" },
      { label: "Colours", value: "Blue, green & custom" },
      { label: "Mounting", value: "Galvanized posts & clamps" },
      { label: "Legend", value: "Custom text, arrows & symbols" },
    ],
    features: [
      "Custom legends, arrows and symbols",
      "Reflective faces for night visibility",
      "Corrosion-proof aluminium panels",
      "Complete post and fixing kits",
    ],
    applications: [
      "Highway & municipal guide signs",
      "Car parks & multi-storey wayfinding",
      "Industrial & campus navigation",
      "Retail and facility directories",
    ],
  },
  {
    slug: "road-marking-paint",
    name: "Road Marking Paint",
    category: "Road Marking",
    image: "/images/road-marking-paint.webp",
    tagline: "Lines That Last",
    featured: true,
    description:
      "Durable thermoplastic and cold-applied paints for crisp road lines.",
    longDescription:
      "NEXBOND Road Marking Paint delivers bright, hard-wearing lines that survive heavy traffic and relentless sun. Available as hot-applied thermoplastic and fast-drying cold paint, with optional glass-bead retro-reflectivity for lane markings that stay visible in headlights, rain and dust.",
    cardSpecs: ["Thermoplastic & cold paint", "Glass-bead reflective", "Fast drying"],
    specs: [
      { label: "Types", value: "Thermoplastic & cold-applied" },
      { label: "Colours", value: "White, yellow & custom" },
      { label: "Reflectivity", value: "Glass-bead option" },
      { label: "Drying", value: "Fast cure, low downtime" },
      { label: "Coverage", value: "High yield per kg / litre" },
      { label: "Durability", value: "Abrasion & UV resistant" },
    ],
    features: [
      "Bright, high-opacity pigments",
      "Retro-reflective glass-bead option",
      "Strong adhesion to asphalt & concrete",
      "Resists cracking, fading and wear",
    ],
    applications: [
      "Lane & centre-line marking",
      "Car parks & loading bays",
      "Pedestrian crossings & symbols",
      "Warehouse floor demarcation",
    ],
  },
  {
    slug: "thermoplastic-marking-materials",
    name: "Thermoplastic Marking Materials",
    category: "Road Marking",
    image: "/images/thermoplastic-marking.webp",
    tagline: "Melt. Mark. Last.",
    description:
      "Hot-applied thermoplastic compound and glass beads for durable lines.",
    longDescription:
      "NEXBOND Thermoplastic Marking Materials fuse to the road surface for lines that outlast paint. Supplied as pre-mixed hot-applied compound with drop-on glass beads for retro-reflectivity, they deliver bright, hard-wearing markings that stand up to heavy traffic and harsh sun.",
    cardSpecs: ["Hot-applied compound", "Drop-on glass beads", "Long service life"],
    specs: [
      { label: "Type", value: "Hot-applied thermoplastic" },
      { label: "Colours", value: "White, yellow & custom" },
      { label: "Reflectivity", value: "Drop-on glass beads" },
      { label: "Form", value: "Granular / pellet" },
      { label: "Coverage", value: "High yield per kg" },
      { label: "Durability", value: "Abrasion & UV resistant" },
    ],
    features: [
      "Fuses to asphalt for a lasting bond",
      "Retro-reflective glass-bead finish",
      "Bright, high-opacity colour",
      "Withstands heavy traffic and heat",
    ],
    applications: [
      "Highway lane & edge lines",
      "Zebra crossings & symbols",
      "Car park & bay marking",
      "Warehouse floor lines",
    ],
  },
  {
    slug: "reflective-road-studs",
    name: "Reflective Road Studs & Delineators",
    category: "Road Safety",
    image: "/images/road-studs.webp",
    tagline: "Guiding Every Lane",
    featured: true,
    description:
      "Reflective road studs and flexible delineators for safe guidance.",
    longDescription:
      "NEXBOND road studs and delineator posts guide traffic through lanes, bends and work zones — day or night. Built with impact-resistant housings and high-reflectivity lenses (with solar-LED options), they rebound from vehicle strikes and keep drivers on line in low light and poor weather.",
    cardSpecs: ["Impact-resistant body", "Reflective / solar lenses", "Flexible posts"],
    specs: [
      { label: "Products", value: "Road studs & delineator posts" },
      { label: "Body", value: "Aluminium / polycarbonate" },
      { label: "Lenses", value: "Reflective, solar-LED option" },
      { label: "Colours", value: "White, red & amber" },
      { label: "Load", value: "Heavy-vehicle resistant" },
      { label: "Fixing", value: "Adhesive or bolt-down" },
    ],
    features: [
      "High-visibility reflective lenses",
      "Solar-powered LED versions available",
      "Rebounding flexible delineator posts",
      "Withstands repeated vehicle impact",
    ],
    applications: [
      "Lane dividers & road edges",
      "Roundabouts & sharp bends",
      "Work-zone channelling",
      "Car park & access-road guidance",
    ],
  },
  {
    slug: "speed-bumps-wheel-stops",
    name: "Speed Bumps & Wheel Stops",
    category: "Road Safety",
    image: "/images/speed-bumps.webp",
    tagline: "Slow It Down",
    description:
      "Heavy-duty rubber speed bumps and wheel stops for traffic calming.",
    longDescription:
      "NEXBOND Speed Bumps and wheel stops calm traffic and protect people and property. Moulded from tough recycled rubber with high-visibility yellow inserts and reflective panels, the modular sections bolt straight to asphalt or concrete and shrug off constant vehicle loads.",
    cardSpecs: ["Recycled rubber", "Reflective inserts", "Modular bolt-down"],
    specs: [
      { label: "Products", value: "Speed bumps & wheel stops" },
      { label: "Material", value: "Heavy-duty recycled rubber" },
      { label: "Colour", value: "Black with yellow inserts" },
      { label: "Reflectivity", value: "Reflective panels" },
      { label: "Install", value: "Bolt-down, modular" },
      { label: "Load", value: "Heavy-vehicle rated" },
    ],
    features: [
      "Tough recycled-rubber construction",
      "High-visibility yellow & reflective inserts",
      "Modular sections for any width",
      "Simple bolt-down installation",
    ],
    applications: [
      "Car parks & access roads",
      "Residential & community streets",
      "Loading yards & depots",
      "School & pedestrian zones",
    ],
  },
  {
    slug: "infrastructure-hardware",
    name: "Infrastructure Hardware",
    category: "Infrastructure",
    image: "/images/infrastructure-hardware.webp",
    tagline: "Built to Hold",
    featured: true,
    description:
      "Heavy-duty galvanized brackets, bolts and structural fixings.",
    longDescription:
      "NEXBOND Infrastructure Hardware covers the structural essentials — hot-dip galvanized brackets, high-tensile bolts, guardrail fittings and fixings engineered to hold under load and weather. Every component is corrosion-protected for a long, maintenance-free service life on roads and job sites.",
    cardSpecs: ["Hot-dip galvanized", "High-tensile grade", "Corrosion resistant"],
    specs: [
      { label: "Range", value: "Brackets, bolts & fittings" },
      { label: "Material", value: "Galvanized & stainless steel" },
      { label: "Grade", value: "High-tensile (8.8 / 10.9)" },
      { label: "Finish", value: "Hot-dip galvanized" },
      { label: "Standards", value: "ISO metric threads" },
      { label: "Supply", value: "Boxed or bulk" },
    ],
    features: [
      "Hot-dip galvanized corrosion protection",
      "High-tensile load ratings",
      "Precision ISO-standard threads",
      "Guardrail and structural fittings",
    ],
    applications: [
      "Guardrail & barrier assembly",
      "Structural steel connections",
      "Road & bridge furniture",
      "General heavy construction",
    ],
  },
  {
    slug: "guardrails-crash-barriers",
    name: "Guardrails & Crash Barriers",
    category: "Infrastructure",
    image: "/images/guardrails.webp",
    tagline: "Hold the Line",
    description:
      "Galvanized W-beam guardrail and crash barrier systems.",
    longDescription:
      "NEXBOND Guardrails & Crash Barriers absorb and redirect impacts to keep roads safe. Hot-dip galvanized W-beam rails, posts and fittings meet highway standards and resist corrosion for decades — supplied as complete systems ready to install on roads, bridges and job sites.",
    cardSpecs: ["Hot-dip galvanized", "W-beam profile", "Complete system"],
    specs: [
      { label: "Range", value: "Rails, posts & fittings" },
      { label: "Profile", value: "W-beam (corrugated)" },
      { label: "Material", value: "Hot-dip galvanized steel" },
      { label: "Standards", value: "Highway crash-barrier specs" },
      { label: "Finish", value: "Corrosion resistant" },
      { label: "Supply", value: "Complete systems" },
    ],
    features: [
      "Absorbs and redirects vehicle impact",
      "Hot-dip galvanized for decades of service",
      "Standards-compliant W-beam profile",
      "Complete rail, post and fixing kits",
    ],
    applications: [
      "Highways & bridge edges",
      "Roadside & median barriers",
      "Car parks & loading docks",
      "Industrial site perimeters",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** URL-safe anchor id for a category, e.g. "Road Marking" -> "road-marking". */
export function catId(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export type Category = {
  id: string;
  name: string;
  image: string;
  blurb: string;
  count: number;
};

/** Categories in first-seen order, with a representative image + product count. */
export function getCategories(): Category[] {
  const blurbs: Record<string, string> = {
    "Masking Tape": "Crepe-paper tapes with guaranteed true size.",
    Safety: "Hi-vis gear, cones and barriers for every site.",
    Signage: "Reflective road, warning and directional signs.",
    "Road Marking": "Paints and materials for lines that last.",
    "Road Safety": "Studs, delineators and traffic-calming gear.",
    Infrastructure: "Heavy-duty structural hardware and fixings.",
  };
  const order: string[] = [];
  const byCat = new Map<string, Product[]>();
  for (const p of PRODUCTS) {
    if (!byCat.has(p.category)) {
      byCat.set(p.category, []);
      order.push(p.category);
    }
    byCat.get(p.category)!.push(p);
  }
  return order.map((name) => {
    const items = byCat.get(name)!;
    return {
      id: catId(name),
      name,
      image: items[0].image,
      blurb: blurbs[name] ?? "",
      count: items.length,
    };
  });
}
