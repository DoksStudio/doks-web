"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryMeta: Record<string, { bg: string; en: string; desc_bg: string; desc_en: string }> = {
  suits: {
    bg: "Костюми",
    en: "Suits",
    desc_bg: "Изцяло конструирани костюми от премиум италиански тъкани. Всяко парче е ушито на ръка.",
    desc_en: "Fully canvassed suits in premium Italian fabrics. Every piece cut and sewn by hand.",
  },
  jackets: {
    bg: "Сака",
    en: "Jackets",
    desc_bg: "Спортни сака, блейзъри и палта — за всеки повод от офиса до вечерта.",
    desc_en: "Sport coats, blazers, and overcoats — from the office to the evening.",
  },
  "smart-casual": {
    bg: "Смарт Кежуъл",
    en: "Smart Casual",
    desc_bg: "Изискана лекота. Панталони, пуловери и ризи за съвременния мъж.",
    desc_en: "Refined ease. Trousers, knitwear, and shirts for the modern man.",
  },
  accessories: {
    bg: "Аксесоари",
    en: "Accessories",
    desc_bg: "Детайлите, които завършват визията. Вратовръзки, кърпички, колани.",
    desc_en: "The details that complete the look. Ties, pocket squares, belts.",
  },
  new: {
    bg: "Новости",
    en: "New Arrivals",
    desc_bg: "Последните постъпления в Докс Студио.",
    desc_en: "The latest arrivals at Doks Studio.",
  },
};

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const { lang } = useLanguage();

  const meta = categoryMeta[category];

  // Match products to this category slug
  const filtered = products.filter((p) => {
    const slug = p.category.toLowerCase().replace(/ /g, "-");
    if (category === "new") return p.tags.includes("new");
    return slug === category;
  });

  const title = meta ? (lang === "bg" ? meta.bg : meta.en) : category;
  const desc = meta ? (lang === "bg" ? meta.desc_bg : meta.desc_en) : "";

  return (
    <div className="bg-chalk min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-12 md:pb-16 border-b border-light-stone">
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/collection"
            className="tracking-editorial text-[0.575rem] text-stone font-sans hover:text-obsidian transition-colors duration-200"
          >
            {lang === "bg" ? "Колекция" : "Collection"}
          </Link>
          <span className="text-stone text-[0.575rem]">/</span>
          <span className="tracking-editorial text-[0.575rem] text-obsidian font-sans">{title}</span>
        </div>

        <h1
          className="font-serif font-light text-obsidian leading-none mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "-0.025em" }}
        >
          {title}
        </h1>
        {desc && (
          <p className="font-sans text-stone text-sm font-light max-w-md leading-relaxed mt-4">
            {desc}
          </p>
        )}
      </div>

      {/* Count */}
      <div className="px-6 md:px-10 lg:px-16 py-5 border-b border-light-stone flex items-center justify-between">
        <span className="tracking-editorial text-[0.575rem] text-stone font-sans">
          {filtered.length} {lang === "bg" ? "артикула" : "items"}
        </span>
        <Link
          href="/collection"
          className="tracking-editorial text-[0.575rem] text-stone font-sans hover:text-obsidian transition-colors duration-200"
        >
          ← {lang === "bg" ? "Всички категории" : "All categories"}
        </Link>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="font-serif italic text-warm-gray text-2xl mb-6">
              {lang === "bg" ? "Скоро предстои..." : "Coming soon..."}
            </p>
            <p className="font-sans text-stone text-sm mb-10">
              {lang === "bg"
                ? "Тази категория се попълва в момента."
                : "This category is being updated."}
            </p>
            <Link href="/collection" className="btn-primary">
              {lang === "bg" ? "Виж всички" : "View all"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
