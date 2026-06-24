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
  images: { primary: string; secondary: string; gallery: string[] };
  tags: string[];
  featured: boolean;
};

export function formatPrice(price: number, currency = "BGN"): string {
  return new Intl.NumberFormat("bg-BG", { style: "currency", currency }).format(price);
}

// Maps any collection handle or name to our category slugs
const COLLECTION_MAP: Record<string, string> = {
  // English
  suits: "suits",
  suit: "suits",
  костюми: "suits",
  костюм: "suits",
  jackets: "jackets",
  jacket: "jackets",
  blazers: "jackets",
  сака: "jackets",
  сако: "jackets",
  "smart-casual": "smart-casual",
  "smart casual": "smart-casual",
  smartcasual: "smart-casual",
  "смарт-кежуъл": "smart-casual",
  "смарт кежуъл": "smart-casual",
  accessories: "accessories",
  accessory: "accessories",
  аксесоари: "accessories",
  sale: "sale",
  намалени: "sale",
  "new-arrivals": "new",
  new: "new",
  новости: "new",
};

function resolveCategory(collections: string[]): string {
  for (const handle of collections) {
    const key = handle.toLowerCase().trim();
    if (COLLECTION_MAP[key]) return COLLECTION_MAP[key];
  }
  return "suits";
}

export function mapShopifyProduct(p: Record<string, unknown>): Product {
  const images = (p.images as { edges: { node: { url: string } }[] })?.edges?.map(
    (e) => e.node.url
  ) ?? [];

  const variants =
    (p.variants as { edges: { node: { id: string; title: string; availableForSale: boolean } }[] })?.edges?.map(
      (e) => ({ label: e.node.title, available: e.node.availableForSale })
    ) ?? [];

  const collections =
    (p.collections as { edges: { node: { handle: string; title: string } }[] })?.edges
      ?.filter((e) => e.node.handle !== "frontpage" && e.node.handle !== "home-page")
      .flatMap((e) => [e.node.handle, e.node.title]) ?? [];

  const tags = (p.tags as string[]) ?? [];

  const priceAmount = parseFloat(
    (p.priceRange as { minVariantPrice: { amount: string; currencyCode: string } })
      ?.minVariantPrice?.amount ?? "0"
  );
  const currency =
    (p.priceRange as { minVariantPrice: { amount: string; currencyCode: string } })
      ?.minVariantPrice?.currencyCode ?? "BGN";

  const category = resolveCategory([...collections, ...tags]);

  return {
    id: p.id as string,
    slug: p.handle as string,
    name: p.title as string,
    category,
    price: priceAmount,
    currency,
    description: (p.description as string) ?? "",
    details: [],
    fabric: "",
    fit: "",
    sizes: variants,
    images: {
      primary: images[0] ?? "/Web Photos/Photo3.jpg",
      secondary: images[1] ?? images[0] ?? "/Web Photos/Photo3.jpg",
      gallery: images.length > 0 ? images : ["/Web Photos/Photo3.jpg"],
    },
    tags,
    featured: tags.includes("featured"),
  };
}

export function getFeaturedProducts(products: Product[]): Product[] {
  return products.filter((p) => p.featured).slice(0, 6);
}

export function getProductBySlug(products: Product[], slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
