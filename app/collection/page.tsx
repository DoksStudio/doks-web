"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryKeys = ["suits", "jackets", "smart-casual", "accessories"] as const;

export default function CollectionPage() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<string>("all");

  const categoryLabels: Record<string, string> = {
    all: lang === "bg" ? "Всички" : "All",
    suits: t.categories.suits.label,
    jackets: t.categories.jackets.label,
    "smart-casual": t.categories.smartCasual.label,
    accessories: t.categories.accessories.label,
  };

  const filtered =
    active === "all"
      ? products
      : products.filter((p) =>
          p.category.toLowerCase().replace(/ /g, "-") === active ||
          p.category === categoryLabels[active]
        );

  return (
    <div className="bg-chalk min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-12 md:pb-16 border-b border-light-stone">
        <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-3">
          {lang === "bg" ? "Докс Студио" : "Doks Studio"}
        </p>
        <h1
          className="font-serif font-light text-obsidian leading-none"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "-0.025em" }}
        >
          {lang === "bg" ? "Колекцията" : "The Collection"}
        </h1>
      </div>

      {/* Filter bar */}
      <div className="px-6 md:px-10 lg:px-16 py-6 border-b border-light-stone flex items-center gap-6 overflow-x-auto">
        {["all", ...categoryKeys].map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`tracking-editorial text-[0.6rem] font-sans whitespace-nowrap transition-all duration-300 pb-1 ${
              active === key
                ? "text-obsidian border-b border-obsidian"
                : "text-stone hover:text-obsidian border-b border-transparent"
            }`}
          >
            {categoryLabels[key]}
          </button>
        ))}
        <div className="flex-1" />
        <span className="tracking-editorial text-[0.575rem] text-stone font-sans whitespace-nowrap">
          {filtered.length} {lang === "bg" ? "артикула" : "items"}
        </span>
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
            <p className="font-serif text-warm-gray text-xl">
              {lang === "bg" ? "Няма намерени продукти." : "No products found."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
