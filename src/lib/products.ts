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
  /** Required credit line for images whose licence needs attribution. */
  imageCredit?: { text: string; href: string };

  /* ---- e-commerce fields (optional until the shop goes live) ---- */
  /** Listed price in AED. Omitted while the catalogue is quote-based. */
  price?: number;
  /** Price-was value in AED, shown struck through next to `price`. */
  compareAtPrice?: number;
  /** What the price applies to, e.g. "per roll", "per box of 24". */
  unit?: string;
  /** Minimum order quantity shown on the card, e.g. "1 carton". */
  moq?: string;
  /** Merchandising badge, e.g. "New". Falls back to "Best Seller" when featured. */
  badge?: string;
  /** Defaults to true; set false to show the card as out of stock. */
  inStock?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "general-purpose-masking-tape",
    unit: "per roll",
    name: "General Purpose Masking Tape",
    category: "Industrial Tapes",
    image: "/images/tape-general.webp",
    tagline: "Reliable Everyday Performance",
    description:
      "Reliable everyday masking for painting, bundling and labelling.",
    longDescription:
      "Our General Purpose Masking Tape is the dependable workhorse for everyday site and workshop tasks. Built on quality crepe paper with a natural rubber adhesive, it sticks firmly, tears cleanly by hand, and removes without residue — roll after roll, at the full printed size.",
    cardSpecs: ["48mm × 30 Yards", "Natural rubber adhesive", "Clean removal"],
    specs: [
      { label: "Width", value: "48mm — full width guaranteed" },
      { label: "Length", value: "30 Yards — full length guaranteed" },
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
    slug: "automotive-grade-masking-tape",
    unit: "per roll",
    name: "Automotive Grade Masking Tape",
    category: "Industrial Tapes",
    image: "/images/tape-premium.webp",
    tagline: "Automotive-Grade Finish",
    featured: true,
    description:
      "Automotive-grade crepe paper tape for demanding finishes.",
    longDescription:
      "Automotive Grade Masking Tape is engineered for professionals who can't afford fuzzy lines or lifted edges. A higher-tack adhesive and conformable crepe backing deliver sharp paint lines on both smooth and lightly textured surfaces — with the full 50mm width and 30 yards you paid for.",
    cardSpecs: ["50mm × 30 Yards", "High-tack adhesive", "Sharp paint lines"],
    specs: [
      { label: "Width", value: "50mm — full width guaranteed" },
      { label: "Length", value: "30 Yards — full length guaranteed" },
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
    slug: "filament-tape",
    unit: "per roll",
    name: "Filament Tape",
    category: "Industrial Tapes",
    image: "/images/filament-tape.webp",
    tagline: "Strapping Strength",
    description:
      "Fibreglass-reinforced strapping tape for heavy bundling and carton sealing.",
    longDescription:
      "Filament Tape, also called strapping tape, is a high-strength pressure-sensitive tape built on a polypropylene or polyester film backing reinforced with embedded fibreglass or polyester filaments. The strands run in one direction (mono-weave) or both (cross-weave), giving far higher tensile and tear resistance than standard packaging tape.",
    cardSpecs: ["Fibreglass reinforced", "High tensile strength", "Mono & cross-weave"],
    specs: [
      { label: "Backing", value: "Polypropylene or polyester film" },
      { label: "Reinforcement", value: "Embedded fibreglass / polyester filaments" },
      { label: "Weave", value: "Mono-weave or cross-weave" },
      { label: "Adhesive", value: "Pressure-sensitive" },
      { label: "Strength", value: "High tensile & tear resistance" },
      { label: "Supply", value: "Single rolls or bulk cartons" },
    ],
    features: [
      "Filament reinforcement resists splitting and tearing",
      "Far stronger than standard packaging tape",
      "Holds heavy, awkward and palletised loads",
      "Choice of mono-weave or cross-weave",
    ],
    applications: [
      "Heavy carton sealing & reinforcement",
      "Bundling pipes, profiles and rods",
      "Palletising and load securing",
      "Holding parts in place during transit",
    ],
  },
  {
    slug: "electrical-tape",
    unit: "per roll",
    name: "Electrical Tape",
    category: "Industrial Tapes",
    image: "/images/electrical-tape.webp",
    tagline: "Insulate. Protect. Seal.",
    description:
      "Non-conductive PVC insulating tape for wrapping wires and cable joints.",
    longDescription:
      "Electrical Tape is a pressure-sensitive, non-conductive insulating tape designed to wrap, protect and insulate electrical wires and cable joints. Made from stretchable PVC, it conforms tightly around splices, blocks electrical current, resists moisture and heat, and helps prevent short circuits.",
    cardSpecs: ["Non-conductive PVC", "Stretch & conform", "Moisture & heat resistant"],
    specs: [
      { label: "Material", value: "Stretchable PVC" },
      { label: "Property", value: "Non-conductive insulating" },
      { label: "Adhesive", value: "Pressure-sensitive" },
      { label: "Resistance", value: "Moisture & heat" },
      { label: "Use", value: "Wires, splices & cable joints" },
      { label: "Supply", value: "Single rolls or bulk cartons" },
    ],
    features: [
      "Insulates against electrical current",
      "Stretches to conform around joints",
      "Resists moisture and heat",
      "Helps prevent short circuits",
    ],
    applications: [
      "Insulating wire splices & joints",
      "Cable bundling and repair",
      "Electrical installation & maintenance",
      "Colour-coding and phase marking",
    ],
  },
  {
    slug: "warning-tape",
    unit: "per roll",
    name: "Warning Tape",
    category: "Industrial Tapes",
    image: "/images/warning-tape.webp",
    tagline: "Mark the Hazard",
    description:
      "High-visibility barrier tape to cordon off hazards and restricted areas.",
    longDescription:
      "Warning Tape makes hazards impossible to miss. Bold, high-contrast printed film cordons off excavations, wet floors, work zones and restricted areas — a fast, low-cost way to keep people clear of danger on site, on the road and in the warehouse.",
    cardSpecs: ["High-contrast print", "Tear-resistant film", "Bulk rolls"],
    specs: [
      { label: "Type", value: "Barrier / barricade warning tape" },
      { label: "Material", value: "Polyethylene film" },
      { label: "Colours", value: "Yellow/black & red/white" },
      { label: "Print", value: "Caution / danger warning text" },
      { label: "Use", value: "Indoor & outdoor" },
      { label: "Supply", value: "Single rolls or bulk cartons" },
    ],
    features: [
      "High-contrast colours seen from a distance",
      "Tear-resistant film for outdoor use",
      "Quick to deploy and remove",
      "Low-cost hazard cordoning",
    ],
    applications: [
      "Construction & excavation sites",
      "Road works and traffic management",
      "Warehouses & factory floors",
      "Emergency and restricted areas",
    ],
  },
  {
    slug: "electrical-warning-tape",
    unit: "per roll",
    name: "Electrical Warning Tape",
    category: "Industrial Tapes",
    image: "/images/electrical-warning-tape.webp",
    tagline: "Mark What Lies Below",
    description:
      "Colour-coded warning tape that marks live cables and buried utility lines.",
    longDescription:
      "Electrical Warning Tape is a high-visibility, colour-coded safety tape used to mark live electrical cables, hazardous areas and buried utility lines. Laid in the trench above underground services, its bold printed warning alerts excavators before they reach the cable — a simple, low-cost safeguard against strikes, outages and injury.",
    cardSpecs: ["Colour-coded print", "Buried cable marking", "Bulk rolls"],
    specs: [
      { label: "Type", value: "Underground / cable warning tape" },
      { label: "Material", value: "Polyethylene film" },
      { label: "Colours", value: "Red, yellow & orange (colour-coded)" },
      { label: "Print", value: "Danger / electrical cable warning text" },
      { label: "Use", value: "Trenches, cable routes & hazard zones" },
      { label: "Supply", value: "Single rolls or bulk cartons" },
    ],
    features: [
      "Bold, high-visibility warning print",
      "Colour-coded by utility type",
      "Durable film for burial in soil",
      "Early warning before excavators reach the cable",
    ],
    applications: [
      "Underground power cable routes",
      "Buried utility & service lines",
      "Substations and electrical rooms",
      "Excavation & trenching works",
    ],
  },
  {
    slug: "detectable-underground-warning-tape",
    unit: "per roll",
    name: "Detectable Underground Warning Tape",
    category: "Industrial Tapes",
    image: "/images/detectable-warning-tape.webp",
    tagline: "Find It Before You Hit It",
    description:
      "Tracer-wire warning tape that metal detectors can locate underground.",
    longDescription:
      "Detectable Underground Warning Tape combines a bold printed warning with an embedded stainless steel tracer wire. Buried above pipes and cables, it warns excavators of the service below — and because the wire is conductive, locators and metal detectors can trace the route of non-metallic lines such as plastic pipe, fibre and conduit before anyone digs.",
    cardSpecs: ["Stainless steel tracer wire", "Metal-detector locatable", "Colour-coded by utility"],
    specs: [
      { label: "Type", value: "Detectable underground marker tape" },
      { label: "Tracer", value: "Embedded stainless steel wire" },
      { label: "Material", value: "Polyethylene film" },
      { label: "Colours", value: "Red, yellow, green, blue, orange & more" },
      { label: "Print", value: "Service-specific warning text" },
      { label: "Supply", value: "Single rolls or bulk; custom print on request" },
    ],
    features: [
      "Locatable with metal detectors and cable locators",
      "Traces non-metallic pipes, fibre and conduit",
      "Colour-coded for power, gas, water, sewer and telecom",
      "Corrosion-resistant stainless steel tracer",
    ],
    applications: [
      "Electric cable routes",
      "Gas, water and sewer mains",
      "Telecom and fibre-optic lines",
      "Utility trenching & infrastructure projects",
    ],
  },
  {
    slug: "reflective-tape",
    unit: "per roll",
    name: "Reflective Tape",
    category: "Industrial Tapes",
    image: "/images/reflective-tape.webp",
    tagline: "Seen in the Dark",
    description:
      "Retro-reflective (radium) tape that makes vehicles and obstacles visible at night.",
    longDescription:
      "Reflective Tape, often called radium tape, uses microprisms or glass beads to bounce light straight back toward its source — so headlights turn vehicles, barriers, poles and equipment into clearly visible objects in low light and at night. Self-adhesive and weather resistant, it is a fast way to add conspicuity wherever visibility matters.",
    cardSpecs: ["Microprism / glass bead", "Self-adhesive", "Day & night visibility"],
    specs: [
      { label: "Technology", value: "Microprismatic or glass bead" },
      { label: "Function", value: "Retro-reflects light to its source" },
      { label: "Backing", value: "Self-adhesive" },
      { label: "Colours", value: "Red/white, red/yellow, yellow, white & more" },
      { label: "Use", value: "Indoor & outdoor" },
      { label: "Supply", value: "Single rolls or bulk cartons" },
    ],
    features: [
      "Bright return in headlights at night",
      "High-contrast colours visible by day",
      "Self-adhesive for quick application",
      "Weather and UV resistant",
    ],
    applications: [
      "Trucks, trailers & vehicle conspicuity",
      "Barriers, bollards & poles",
      "Loading docks & warehouse hazards",
      "Machinery, gates & obstacles",
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
    slug: "safety-jacket",
    name: "Safety Jacket",
    category: "Safety",
    image: "/images/safety-jacket.webp",
    tagline: "Visible in Any Weather",
    description:
      "Hi-vis reflective jacket with sleeves for cold, wet and night work.",
    longDescription:
      "The NEXBOND Safety Jacket gives full-sleeve high-visibility protection when a vest is not enough. Fluorescent fabric and retro-reflective bands keep the wearer seen by day and in headlights at night, while the shell keeps out wind, rain and site dust.",
    cardSpecs: ["Fluorescent + reflective", "Full sleeves", "Weather resistant"],
    specs: [
      { label: "Type", value: "Hi-vis jacket with sleeves" },
      { label: "Visibility", value: "Fluorescent fabric + reflective bands" },
      { label: "Colours", value: "Orange & yellow" },
      { label: "Closure", value: "Zip / press-stud front" },
      { label: "Sizes", value: "S to XXXL" },
      { label: "Supply", value: "Single units or bulk cartons" },
    ],
    features: [
      "360° reflective banding",
      "Wind and rain resistant shell",
      "Pockets for tools and radios",
      "Comfortable over workwear",
    ],
    applications: [
      "Road works & traffic management",
      "Night shifts and low light",
      "Ports, docks & logistics yards",
      "Outdoor construction",
    ],
  },
  {
    slug: "safety-vest",
    name: "Safety Vest",
    category: "Safety",
    image: "/images/safety-vest.webp",
    tagline: "See and Be Seen",
    description:
      "Lightweight hi-vis vest with reflective stripes for everyday site wear.",
    longDescription:
      "The NEXBOND Safety Vest is the simplest way to make every worker visible. Lightweight, breathable fluorescent fabric with retro-reflective stripes goes on over any clothing in seconds — ideal for crews, visitors and drivers in the UAE heat.",
    cardSpecs: ["Reflective stripes", "Breathable fabric", "Orange & yellow"],
    specs: [
      { label: "Type", value: "Hi-vis safety vest" },
      { label: "Visibility", value: "Fluorescent + reflective stripes" },
      { label: "Fabric", value: "Lightweight polyester / mesh" },
      { label: "Colours", value: "Orange & yellow" },
      { label: "Sizes", value: "Free size & S to XXXL" },
      { label: "Supply", value: "Single units or bulk cartons" },
    ],
    features: [
      "Bright fluorescent base colour",
      "Retro-reflective stripes for night",
      "Light and breathable for hot climates",
      "Custom logo printing on request",
    ],
    applications: [
      "Construction & industrial sites",
      "Road works and traffic control",
      "Warehouses & logistics",
      "Events and visitors",
    ],
  },
  {
    slug: "safety-barricade",
    name: "Safety Barricade",
    category: "Safety",
    image: "/images/safety-barricade.webp",
    tagline: "Close It Off. Keep Them Safe.",
    description:
      "Plastic and water-filled barricades to separate traffic, crowds and work zones.",
    longDescription:
      "NEXBOND Safety Barricades create clear, sturdy boundaries around excavations, road works and restricted areas. Interlocking red-and-white panels and water-fillable barriers line up quickly, stay put in wind and traffic, and can carry flashing lamps for night visibility.",
    cardSpecs: ["Red & white high-contrast", "Interlocking sections", "Lamp-ready"],
    specs: [
      { label: "Type", value: "Plastic panel & water-filled barriers" },
      { label: "Colours", value: "Red/white, orange/white" },
      { label: "Connection", value: "Interlocking sections" },
      { label: "Base", value: "Weighted / water or sand fillable" },
      { label: "Accessories", value: "Flashing lamp mounts" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "High-contrast striping",
      "Quick interlocking setup",
      "Stable in wind and traffic",
      "Stackable for storage and transport",
    ],
    applications: [
      "Road works & excavations",
      "Crowd and queue control",
      "Construction site perimeters",
      "Parking and restricted zones",
    ],
  },
  {
    slug: "bollard",
    name: "Bollards",
    category: "Safety",
    image: "/images/bollard.webp",
    tagline: "Guide the Traffic",
    description:
      "Flexible delineator and fixed bollards with reflective bands.",
    longDescription:
      "NEXBOND Bollards guide vehicles and protect pedestrians, kerbs and buildings. Flexible spring-back delineator posts bend on impact and return upright, while fixed bollards provide a solid barrier — both with reflective bands for night visibility.",
    cardSpecs: ["Reflective bands", "Flexible or fixed", "Bolt-down base"],
    specs: [
      { label: "Type", value: "Flexible delineator & fixed bollards" },
      { label: "Visibility", value: "Retro-reflective bands" },
      { label: "Material", value: "PU / PVC or steel" },
      { label: "Colours", value: "Red/white, yellow/black, orange" },
      { label: "Fixing", value: "Bolt-down base" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "Spring back after vehicle impact",
      "Reflective bands seen in headlights",
      "Simple bolt-down installation",
      "UV-stable for UAE sun",
    ],
    applications: [
      "Lane separation & delineation",
      "Car parks & loading bays",
      "Pedestrian protection",
      "Toll plazas and entrances",
    ],
  },
  {
    slug: "safety-shoes",
    name: "Safety Shoes",
    category: "Safety",
    image: "/images/safety-shoes.webp",
    tagline: "Protection From the Ground Up",
    description:
      "Steel or composite toe safety shoes and boots for site work.",
    longDescription:
      "NEXBOND Safety Shoes protect feet from falling objects, punctures and slips. Protective toe caps, slip-resistant soles and tough uppers handle construction sites, warehouses and workshops through long shifts.",
    cardSpecs: ["Protective toe cap", "Slip-resistant sole", "Shoes & boots"],
    specs: [
      { label: "Type", value: "Safety shoes & boots" },
      { label: "Toe cap", value: "Steel or composite" },
      { label: "Sole", value: "Slip & oil resistant" },
      { label: "Upper", value: "Leather / synthetic" },
      { label: "Sizes", value: "Full size range" },
      { label: "Supply", value: "Pairs or bulk cartons" },
    ],
    features: [
      "Toe protection against impact",
      "Puncture-resistant midsole options",
      "Slip-resistant outsole",
      "Comfortable for long shifts",
    ],
    applications: [
      "Construction sites",
      "Warehouses & logistics",
      "Factories & workshops",
      "Oil, gas & utilities",
    ],
  },
  {
    slug: "safety-helmet",
    name: "Safety Helmet",
    category: "Safety",
    image: "/images/safety-helmet.webp",
    tagline: "Head Protection First",
    description:
      "Impact-resistant hard hats with adjustable harness.",
    longDescription:
      "The NEXBOND Safety Helmet protects against falling objects and bumps on site. A tough shell, adjustable suspension and optional chin strap give a secure, comfortable fit, in colours that make roles easy to tell apart.",
    cardSpecs: ["Impact-resistant shell", "Adjustable harness", "Multiple colours"],
    specs: [
      { label: "Type", value: "Industrial safety helmet" },
      { label: "Shell", value: "HDPE / ABS" },
      { label: "Suspension", value: "Adjustable ratchet harness" },
      { label: "Colours", value: "White, yellow, blue, red, orange & green" },
      { label: "Options", value: "Chin strap, visor & ear-defender slots" },
      { label: "Supply", value: "Single units or bulk cartons" },
    ],
    features: [
      "Strong impact-resistant shell",
      "Ratchet harness for a secure fit",
      "Ventilated options for hot sites",
      "Colour coding by role",
    ],
    applications: [
      "Construction & civil works",
      "Factories and plants",
      "Warehouses & logistics",
      "Utilities and maintenance",
    ],
  },
  {
    slug: "coverall",
    name: "Coverall",
    category: "Safety",
    image: "/images/coverall.webp",
    tagline: "Head-to-Toe Workwear",
    description:
      "Durable one-piece coveralls for workshops, plants and sites.",
    longDescription:
      "NEXBOND Coveralls give full-body protection from dirt, oil and abrasion in one piece. Hard-wearing cotton and poly-cotton fabric, reinforced seams and practical pockets make them the everyday uniform for mechanics, technicians and plant crews — with reflective tape options for low light.",
    cardSpecs: ["One-piece", "Durable fabric", "Reflective options"],
    specs: [
      { label: "Type", value: "One-piece coverall / boiler suit" },
      { label: "Fabric", value: "Cotton or poly-cotton" },
      { label: "Options", value: "Reflective tape, flame-retardant" },
      { label: "Colours", value: "Navy, blue, orange & more" },
      { label: "Sizes", value: "S to XXXL" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "Full-body protection in one garment",
      "Reinforced seams for durability",
      "Multiple tool pockets",
      "Custom logo embroidery on request",
    ],
    applications: [
      "Workshops & garages",
      "Oil, gas & petrochemical",
      "Factories and plants",
      "Maintenance crews",
    ],
  },
  {
    slug: "safety-gloves",
    name: "Safety Gloves",
    category: "Safety",
    image: "/images/safety-gloves.webp",
    tagline: "Grip It Safely",
    description:
      "Work gloves for grip, cut and abrasion protection.",
    longDescription:
      "NEXBOND Safety Gloves protect hands from cuts, abrasion and chemicals while keeping a firm grip. Choose from general-purpose, coated, leather and cut-resistant gloves for everything from handling to fabrication.",
    cardSpecs: ["Cut & abrasion protection", "Coated or leather", "Firm grip"],
    specs: [
      { label: "Types", value: "Coated, leather, cotton & cut-resistant" },
      { label: "Grip", value: "Nitrile / latex / PU coatings" },
      { label: "Cuff", value: "Knit wrist or safety cuff" },
      { label: "Sizes", value: "S to XXL" },
      { label: "Use", value: "Dry, wet & oily handling" },
      { label: "Supply", value: "Pairs, dozens or cartons" },
    ],
    features: [
      "Strong grip on wet and oily parts",
      "Abrasion and cut resistance",
      "Comfortable for all-day wear",
      "Range for every task",
    ],
    applications: [
      "Material handling",
      "Construction & fabrication",
      "Warehouse & logistics",
      "Maintenance and repair",
    ],
  },
  {
    slug: "safety-goggles",
    name: "Safety Goggles",
    category: "Safety",
    image: "/images/safety-goggles.webp",
    tagline: "Protect Your Eyes",
    description:
      "Impact-resistant goggles and glasses against dust, debris and splash.",
    longDescription:
      "NEXBOND Safety Goggles shield eyes from flying debris, dust and splashes. Clear polycarbonate lenses, a snug seal and an adjustable strap keep vision protected and comfortable — and they fit over prescription glasses.",
    cardSpecs: ["Polycarbonate lens", "Anti-fog options", "Over-glasses fit"],
    specs: [
      { label: "Type", value: "Safety goggles & spectacles" },
      { label: "Lens", value: "Polycarbonate, clear or tinted" },
      { label: "Coatings", value: "Anti-fog & anti-scratch options" },
      { label: "Ventilation", value: "Direct / indirect vent" },
      { label: "Strap", value: "Adjustable elastic" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "Impact-resistant lenses",
      "Seals out dust and splashes",
      "Fits over prescription glasses",
      "Lightweight and comfortable",
    ],
    applications: [
      "Grinding, cutting & drilling",
      "Construction & demolition",
      "Chemical handling",
      "Laboratories and workshops",
    ],
  },
  {
    slug: "safety-mesh",
    name: "Safety Mesh",
    category: "Safety",
    image: "/images/safety-mesh.webp",
    tagline: "Fence the Hazard",
    description:
      "Orange plastic barrier mesh to fence off excavations and work zones.",
    longDescription:
      "NEXBOND Safety Mesh is a lightweight, high-visibility plastic barrier net that quickly fences off excavations, trenches and work areas. It rolls out fast, ties to posts or barriers, and its bright orange colour warns people away from hazards.",
    cardSpecs: ["High-vis orange", "Lightweight roll", "Reusable"],
    specs: [
      { label: "Type", value: "Plastic barrier / safety mesh" },
      { label: "Material", value: "HDPE" },
      { label: "Colour", value: "Fluorescent orange" },
      { label: "Format", value: "Rolls" },
      { label: "Fixing", value: "Ties to posts, pins or barriers" },
      { label: "Supply", value: "Single rolls or bulk" },
    ],
    features: [
      "Highly visible orange net",
      "Quick to roll out and fix",
      "UV-stabilised for outdoor use",
      "Reusable on multiple jobs",
    ],
    applications: [
      "Excavations and trenches",
      "Construction site perimeters",
      "Road works",
      "Event and crowd control",
    ],
  },
  {
    slug: "safety-flash",
    name: "Safety Flash Light",
    category: "Safety",
    image: "/images/safety-flash.webp",
    tagline: "Flash a Warning",
    description:
      "Battery-powered flashing lamps for barriers and cones.",
    longDescription:
      "The NEXBOND Safety Flash Light mounts on barricades and cones to make road works and hazards visible at night. A bright amber lens flashes or burns steady on battery power, with a light sensor that switches it on at dusk.",
    cardSpecs: ["Amber flashing lamp", "Battery powered", "Barrier & cone mount"],
    specs: [
      { label: "Type", value: "Barricade / cone flashing lamp" },
      { label: "Lens", value: "Amber" },
      { label: "Modes", value: "Flashing & steady" },
      { label: "Power", value: "Battery" },
      { label: "Control", value: "Dusk-to-dawn light sensor" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "Bright amber warning flash",
      "Automatic dusk-to-dawn operation",
      "Mounts on barriers and cones",
      "Long battery life",
    ],
    applications: [
      "Road works at night",
      "Excavations & trenches",
      "Barrier lines and diversions",
      "Breakdown and incident zones",
    ],
  },
  {
    slug: "safety-lights",
    name: "Safety Warning Lights",
    category: "Safety",
    image: "/images/safety-lights.webp",
    tagline: "Light Up the Hazard",
    description:
      "Warning and beacon lights for vehicles, machinery and road works.",
    longDescription:
      "NEXBOND Safety Warning Lights make vehicles, plant and hazards impossible to miss. Amber warning lamps and beacons, battery or vehicle powered, give a strong signal by day and night on roads, sites and industrial floors.",
    cardSpecs: ["Amber warning lights", "Beacon & lamp styles", "Day & night"],
    specs: [
      { label: "Type", value: "Warning lamps & beacons" },
      { label: "Colour", value: "Amber (others on request)" },
      { label: "Modes", value: "Rotating, flashing & steady" },
      { label: "Power", value: "Battery or 12/24V vehicle" },
      { label: "Mounting", value: "Magnetic, bolt or pole" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "High-intensity warning signal",
      "Several light modes",
      "Vehicle, machinery and road use",
      "Weather resistant housings",
    ],
    applications: [
      "Site vehicles & plant",
      "Road works and traffic management",
      "Warehouses & forklifts",
      "Gates and hazard points",
    ],
  },
  {
    slug: "safety-mask",
    name: "Safety Mask",
    category: "Safety",
    image: "/images/safety-mask.webp",
    tagline: "Breathe Protected",
    description:
      "Dust masks and respirators against dust, fumes and particles.",
    longDescription:
      "NEXBOND Safety Masks protect lungs from dust, fumes and airborne particles. From disposable dust masks to reusable half-face respirators with replaceable filters, there is a mask for cutting, grinding, spraying and demolition work.",
    cardSpecs: ["Disposable & reusable", "Particle filtration", "Comfortable seal"],
    specs: [
      { label: "Types", value: "Disposable masks & half-face respirators" },
      { label: "Protection", value: "Dust, particles & fumes" },
      { label: "Filters", value: "Replaceable cartridges (respirators)" },
      { label: "Valve", value: "Exhalation valve options" },
      { label: "Fit", value: "Adjustable straps & nose clip" },
      { label: "Supply", value: "Boxes or bulk cartons" },
    ],
    features: [
      "Filters dust and fine particles",
      "Comfortable, secure seal",
      "Valve options for hot environments",
      "Reusable respirator options",
    ],
    applications: [
      "Cutting, grinding & sanding",
      "Spray painting",
      "Demolition & construction",
      "Cement and dusty environments",
    ],
  },
  {
    slug: "traffic-baton",
    name: "Traffic Baton",
    category: "Safety",
    image: "/images/traffic-baton.webp",
    tagline: "Direct With Light",
    description:
      "LED light batons for directing traffic and marshalling vehicles.",
    longDescription:
      "The NEXBOND Traffic Baton turns hand signals into a bright, unmistakable light. Glowing LED wands in red or orange let flagmen, security staff and marshals direct vehicles clearly in the dark, in dust and at a distance.",
    cardSpecs: ["LED illuminated", "Steady & flashing", "Battery powered"],
    specs: [
      { label: "Type", value: "LED traffic baton / marshalling wand" },
      { label: "Colours", value: "Red, orange & more" },
      { label: "Modes", value: "Steady & flashing" },
      { label: "Power", value: "Battery" },
      { label: "Extras", value: "Whistle & wrist strap options" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "Bright glow visible at distance",
      "Steady and flashing modes",
      "Lightweight, easy to hold",
      "Durable housing",
    ],
    applications: [
      "Traffic control & flagmen",
      "Parking marshalling",
      "Security & events",
      "Airports and loading yards",
    ],
  },
  {
    slug: "safety-belt",
    name: "Safety Belt & Harness",
    category: "Safety",
    image: "/images/safety-belt.webp",
    tagline: "Secure at Height",
    description:
      "Full-body harnesses and safety belts for work at height.",
    longDescription:
      "NEXBOND Safety Belts and Harnesses keep workers secure when working at height. Full-body harnesses with adjustable straps and D-rings connect to lanyards and anchors, spreading the load if a fall happens — essential for scaffolding, roofing and steel erection.",
    cardSpecs: ["Full-body harness", "D-ring attachment", "Lanyard options"],
    specs: [
      { label: "Type", value: "Full-body harness & safety belt" },
      { label: "Attachment", value: "Dorsal & front D-rings" },
      { label: "Straps", value: "Adjustable polyester webbing" },
      { label: "Accessories", value: "Lanyards, shock absorbers & hooks" },
      { label: "Fit", value: "Universal adjustable" },
      { label: "Supply", value: "Single units or bulk" },
    ],
    features: [
      "Fall arrest attachment points",
      "Fully adjustable fit",
      "Strong polyester webbing",
      "Compatible lanyards and hooks",
    ],
    applications: [
      "Scaffolding & roofing",
      "Steel erection",
      "Towers, masts & poles",
      "Maintenance at height",
    ],
  },
  {
    slug: "speed-bumps-wheel-stops",
    name: "Speed Bumps & Wheel Stops",
    category: "Safety",
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
    slug: "reflective-road-studs",
    name: "Reflective Road Studs & Delineators",
    category: "Safety",
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
    slug: "reflective-traffic-signs",
    name: "Reflective Traffic Signs",
    category: "Signage & Guard Rail",
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
    category: "Signage & Guard Rail",
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
    slug: "guardrails-crash-barriers",
    name: "Guardrails & Crash Barriers",
    category: "Signage & Guard Rail",
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
  {
    slug: "ground-mounted-signs",
    name: "Ground Mounted Signs (GMS)",
    category: "Signage & Guard Rail",
    image: "/images/ground-mounted-signs.webp",
    tagline: "Big Signs. Clear Directions.",
    description:
      "Large post-mounted guide and direction signs for roads and highways.",
    longDescription:
      "NEXBOND Ground Mounted Signs (GMS) are large-format guide, direction and information signs installed on posts at the roadside. High-intensity reflective sheeting on aluminium panels keeps destinations and instructions readable at speed, by day and in headlights at night — supplied with posts, brackets and foundations to suit the sign size.",
    cardSpecs: ["Large-format panels", "Reflective sheeting", "Posts & brackets"],
    specs: [
      { label: "Type", value: "Ground mounted guide & direction signs" },
      { label: "Panel", value: "Aluminium / extruded aluminium" },
      { label: "Sheeting", value: "High-intensity reflective" },
      { label: "Mounting", value: "Single or twin posts with brackets" },
      { label: "Layout", value: "Bilingual Arabic / English to authority layout" },
      { label: "Supply", value: "Made to order" },
    ],
    features: [
      "Readable at highway speed",
      "Reflective for night visibility",
      "Durable in UAE heat and sun",
      "Custom layouts and sizes",
    ],
    applications: [
      "Highways & main roads",
      "Junctions and interchanges",
      "Industrial areas & free zones",
      "Developments and compounds",
    ],
  },
  {
    slug: "w-beam-guard-rail",
    name: "W-Beam Guard Rail",
    category: "Signage & Guard Rail",
    image: "/images/w-beam-guard-rail.webp",
    tagline: "The Standard Road Barrier",
    description:
      "Galvanised W-beam steel guard rail for roadsides and medians.",
    longDescription:
      "NEXBOND W-Beam Guard Rail is the most widely used steel road safety barrier. Its corrugated two-ridge profile absorbs and redirects errant vehicles, keeping them on the carriageway and away from drops, structures and oncoming traffic. Supplied hot-dip galvanised with posts, spacers, end terminals and fixings.",
    cardSpecs: ["W-profile steel", "Hot-dip galvanised", "Posts & terminals"],
    specs: [
      { label: "Profile", value: "W-beam (two-ridge)" },
      { label: "Material", value: "Steel, hot-dip galvanised" },
      { label: "Components", value: "Rails, posts, spacers & end terminals" },
      { label: "Fixings", value: "Galvanised bolts & nuts" },
      { label: "Finish", value: "Galvanised or powder-coated" },
      { label: "Supply", value: "Project quantities" },
    ],
    features: [
      "Absorbs and redirects impact",
      "Corrosion-resistant galvanising",
      "Modular, easy to install and repair",
      "Full system from one supplier",
    ],
    applications: [
      "Highways & road edges",
      "Medians and central reserves",
      "Bridges approaches & embankments",
      "Car parks and industrial roads",
    ],
  },
  {
    slug: "wire-rope-barrier",
    name: "Wire Rope Barrier",
    category: "Signage & Guard Rail",
    image: "/images/wire-rope-barrier.webp",
    tagline: "Flexible Protection",
    description:
      "Tensioned steel wire rope safety barrier for medians and verges.",
    longDescription:
      "NEXBOND Wire Rope Barrier uses tensioned steel cables on slim posts to catch and slow errant vehicles. The flexible system deflects on impact to reduce forces on occupants, needs little space, and is quick to repair — ideal for long median runs.",
    cardSpecs: ["Tensioned steel ropes", "Flexible system", "Low maintenance"],
    specs: [
      { label: "Type", value: "Wire rope / cable safety barrier" },
      { label: "Ropes", value: "Tensioned galvanised steel wire" },
      { label: "Posts", value: "Galvanised steel, socketed" },
      { label: "Anchors", value: "End anchors & tensioners" },
      { label: "Deflection", value: "Flexible, energy absorbing" },
      { label: "Supply", value: "Project quantities" },
    ],
    features: [
      "Gentler on vehicle occupants",
      "Narrow footprint for medians",
      "Fast post replacement after impact",
      "Long continuous runs",
    ],
    applications: [
      "Highway medians",
      "Road verges",
      "Rural and desert roads",
      "Long-distance carriageways",
    ],
  },
  {
    slug: "concrete-jersey-barrier",
    name: "Concrete Jersey Barrier",
    category: "Signage & Guard Rail",
    image: "/images/concrete-jersey-barrier.webp",
    tagline: "Solid Separation",
    description:
      "Precast concrete New Jersey barriers for traffic separation.",
    longDescription:
      "NEXBOND Concrete Jersey Barriers are precast New Jersey-profile blocks that separate traffic, protect work zones and secure perimeters. The sloped profile lifts and redirects vehicles, while the heavy concrete mass holds its line — permanent or temporary.",
    cardSpecs: ["Precast concrete", "New Jersey profile", "Permanent or temporary"],
    specs: [
      { label: "Type", value: "Precast concrete New Jersey barrier" },
      { label: "Profile", value: "Sloped New Jersey shape" },
      { label: "Connection", value: "Pin / loop joints" },
      { label: "Finish", value: "Plain or yellow/black painted" },
      { label: "Use", value: "Permanent or temporary works" },
      { label: "Supply", value: "Project quantities" },
    ],
    features: [
      "Heavy mass holds its position",
      "Redirects vehicles on impact",
      "Interlocking sections",
      "Reusable on temporary works",
    ],
    applications: [
      "Road works and diversions",
      "Highway medians",
      "Security perimeters",
      "Bridges and tunnels",
    ],
  },
  {
    slug: "pedestrian-guard-rail",
    name: "Pedestrian Guard Rail",
    category: "Signage & Guard Rail",
    image: "/images/pedestrian-guard-rail.webp",
    tagline: "Keep People Safe",
    description:
      "Steel railings that separate pedestrians from traffic.",
    longDescription:
      "NEXBOND Pedestrian Guard Rail keeps people on the footpath and away from moving traffic. Galvanised and powder-coated steel panels on posts guide pedestrians to safe crossing points outside schools, junctions, bridges and building entrances.",
    cardSpecs: ["Galvanised steel", "Powder-coated", "Panel & post system"],
    specs: [
      { label: "Type", value: "Pedestrian guard railing" },
      { label: "Material", value: "Steel, hot-dip galvanised" },
      { label: "Finish", value: "Powder-coated colours" },
      { label: "System", value: "Panels on posts" },
      { label: "Fixing", value: "Bolt-down or cast-in posts" },
      { label: "Supply", value: "Made to length" },
    ],
    features: [
      "Guides pedestrians to safe crossings",
      "Corrosion-resistant finish",
      "Colour to match the site",
      "Modular panels",
    ],
    applications: [
      "Footpaths and junctions",
      "Schools and hospitals",
      "Bridges & footbridges",
      "Building entrances and car parks",
    ],
  },
  {
    slug: "cold-road-marking-paint",
    name: "Cold Road Marking Paint",
    category: "Road Marking",
    image: "/images/road-marking-paint.webp",
    tagline: "Lines That Last",
    featured: true,
    description:
      "Fast-drying cold-applied paint for crisp, durable road lines.",
    longDescription:
      "NEXBOND Cold Road Marking Paint delivers bright, hard-wearing lines that survive heavy traffic and relentless sun. Applied cold by roller, brush or spray machine, it dries fast to reopen roads quickly, with optional glass-bead retro-reflectivity for lane markings that stay visible in headlights, rain and dust.",
    cardSpecs: ["Cold-applied paint", "Glass-bead reflective", "Fast drying"],
    specs: [
      { label: "Type", value: "Cold-applied road marking paint" },
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
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Card/PDP price line. Quote-based products return a "Price on Request" label. */
export function priceLabel(p: Product): {
  value: string;
  compareAt: string | null;
  unit: string | null;
  onRequest: boolean;
} {
  if (p.price == null) {
    return { value: "Price on Request", compareAt: null, unit: null, onRequest: true };
  }
  const fmt = (n: number) =>
    `AED ${n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return {
    value: fmt(p.price),
    compareAt: p.compareAtPrice != null ? fmt(p.compareAtPrice) : null,
    unit: p.unit ?? null,
    onRequest: false,
  };
}

/** Badge text for a product card, or null when it has none. */
export function productBadge(p: Product): string | null {
  return p.badge ?? (p.featured ? "Best Seller" : null);
}

/** Case-insensitive search across name, category, tagline and description. */
export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return PRODUCTS;
  const terms = q.split(/\s+/);
  return PRODUCTS.filter((p) => {
    const haystack = [p.name, p.category, p.tagline, p.description, ...p.cardSpecs]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
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
    "Industrial Tapes": "Masking, filament, electrical, warning, marker and reflective tapes.",
    Safety: "PPE, barriers, lights and traffic-calming gear for every site.",
    "Signage & Guard Rail": "Reflective signs, GMS and guard rail systems.",
    "Road Marking": "Paints and materials for lines that last.",
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
