export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  details: string[];
  fabric: string;
  fit: string;
  sizes: { label: string; available: boolean }[];
  images: {
    primary: string;
    secondary: string;
    gallery: string[];
  };
  tags: string[];
  featured: boolean;
};

export const products: Product[] = [
  {
    id: "001",
    slug: "meridian-two-piece-suit",
    name: "Meridian Two-Piece Suit",
    category: "Suits",
    price: 1290,
    currency: "BGN",
    description:
      "A masterwork of precision tailoring. The Meridian suit is cut from a super 130s wool blend — structured at the shoulder, tapered through the chest, and refined to a clean break at the trouser. Built for the man who understands that the right suit changes the way a room feels when he enters it.",
    details: [
      "Fully canvassed construction",
      "Surgeon cuff buttons — functional",
      "Pick stitching on lapels",
      "Interior ticket pocket",
      "Single vent jacket",
      "Flat front trousers with side adjusters",
    ],
    fabric: "Super 130s wool blend. Woven in Italy by Loro Piana mills. The fabric drapes with a natural weight — substantial without stiffness. A refined charcoal herringbone that reads as solid from a distance and reveals its texture up close.",
    fit: "Contemporary slim. Structured shoulder with a slight suppression at the waist. Trousers sit at the natural waist with a clean, modern break. Designed for men with an athletic to medium build.",
    sizes: [
      { label: "46", available: true },
      { label: "48", available: true },
      { label: "50", available: true },
      { label: "52", available: true },
      { label: "54", available: false },
      { label: "56", available: true },
    ],
    images: {
      primary:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
      secondary:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    tags: ["new", "bestseller"],
    featured: true,
  },
  {
    id: "002",
    slug: "atlas-sport-coat",
    name: "Atlas Sport Coat",
    category: "Jackets",
    price: 790,
    currency: "BGN",
    description:
      "Where tailoring meets ease. The Atlas sport coat is cut from a rich navy hopsack — a weave that breathes, resists creasing, and carries the light beautifully. Wear it over trousers or dark denim. It works both ways.",
    details: [
      "Half-canvas construction",
      "Patch pockets",
      "Contrast lining in burgundy silk-cotton",
      "Horn buttons",
      "Dual rear vents",
    ],
    fabric: "Italian hopsack weave in pure navy wool. Open weave structure provides natural breathability. Source: Vitale Barberis Canonico, Biella, Italy.",
    fit: "Classic contemporary. Relaxed through the chest with a soft shoulder. Sits slightly looser than the Meridian — built for movement and all-day wear.",
    sizes: [
      { label: "46", available: true },
      { label: "48", available: true },
      { label: "50", available: true },
      { label: "52", available: false },
      { label: "54", available: true },
      { label: "56", available: false },
    ],
    images: {
      primary:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80",
      secondary:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    tags: ["new"],
    featured: true,
  },
  {
    id: "003",
    slug: "cassia-trousers",
    name: "Cassia Trousers",
    category: "Smart Casual",
    price: 380,
    currency: "BGN",
    description:
      "Refined casual trousers in a warm taupe flannel. Pleated, wide-leg cut that nods to the great tailoring of mid-century European menswear. Comfortable enough to live in. Sharp enough to impress.",
    details: [
      "Double forward pleats",
      "Side adjusters",
      "French fly",
      "Cuffed hem",
      "Slash pockets + single welt back pocket",
    ],
    fabric: "Pure wool flannel in warm taupe. Milled in England by Fox Brothers & Co. Soft, brushed surface that improves with wear and pressing.",
    fit: "Wide-leg, high-rise. Sits at the natural waist with significant ease through the thigh. Intended to be worn with the cuffs hitting the top of the shoe.",
    sizes: [
      { label: "46", available: true },
      { label: "48", available: true },
      { label: "50", available: true },
      { label: "52", available: true },
      { label: "54", available: true },
      { label: "56", available: false },
    ],
    images: {
      primary:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
      secondary:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    tags: [],
    featured: true,
  },
  {
    id: "004",
    slug: "overcoat-volta",
    name: "Volta Overcoat",
    category: "Jackets",
    price: 1490,
    currency: "BGN",
    description:
      "A coat built for the long winter and the long career. The Volta is a full-length overcoat cut from a double-face wool cashmere in deep charcoal. No lining — the fabric is its own interior. Heavy, warm, impeccably draped.",
    details: [
      "Double-face construction — no lining required",
      "Large lapels — notch or peak by request",
      "Turn-back cuffs",
      "Deep slit pockets",
      "Single back vent",
    ],
    fabric: "Double-face wool-cashmere blend. 80% superfine wool, 20% cashmere. Italian origin. The double-face construction requires expert sewing — all seams are hand-stitched and folded inward.",
    fit: "Generous. Designed to layer over a suit jacket with ease. Falls to below the knee on most men. Structured shoulder.",
    sizes: [
      { label: "46", available: true },
      { label: "48", available: true },
      { label: "50", available: false },
      { label: "52", available: true },
      { label: "54", available: true },
      { label: "56", available: true },
    ],
    images: {
      primary:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
      secondary:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    tags: ["bestseller"],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatPrice(price: number, currency: string): string {
  return `${price.toLocaleString("bg-BG")} ${currency}`;
}
