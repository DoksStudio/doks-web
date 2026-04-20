"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryMeta: Record<string, {
  bg: string; en: string;
  desc_bg: string; desc_en: string;
  image: string;
  num: string;
}> = {
  suits: {
    bg: "Костюми",
    en: "Suits",
    desc_bg: "Изцяло конструирани костюми от премиум италиански тъкани. Всяко парче е ушито на ръка.",
    desc_en: "Fully canvassed suits in premium Italian fabrics. Every piece cut and sewn by hand.",
    image: "/Web Photos/Photo3.jpg",
    num: "01",
  },
  jackets: {
    bg: "Сака",
    en: "Jackets",
    desc_bg: "Спортни сака, блейзъри и палта — за всеки повод от офиса до вечерта.",
    desc_en: "Sport coats, blazers, and overcoats — from the office to the evening.",
    image: "/Web Photos/Photo2.jpg",
    num: "02",
  },
  "smart-casual": {
    bg: "Смарт Кежуъл",
    en: "Smart Casual",
    desc_bg: "Изискана лекота. Панталони, пуловери и ризи за съвременния мъж.",
    desc_en: "Refined ease. Trousers, knitwear, and shirts for the modern man.",
    image: "/Web Photos/Photo6.jpg",
    num: "03",
  },
  accessories: {
    bg: "Аксесоари",
    en: "Accessories",
    desc_bg: "Детайлите, които завършват визията. Вратовръзки, кърпички, колани.",
    desc_en: "The details that complete the look. Ties, pocket squares, belts.",
    image: "/Web Photos/Photo7.jpg",
    num: "04",
  },
  sale: {
    bg: "Намалени артикули",
    en: "Sale",
    desc_bg: "Избрани парчета на специални цени. Ограничени количества.",
    desc_en: "Selected pieces at special prices. Limited quantities.",
    image: "/Web Photos/Photo8.jpg",
    num: "05",
  },
  new: {
    bg: "Новости",
    en: "New Arrivals",
    desc_bg: "Последните постъпления в Докс Студио.",
    desc_en: "The latest arrivals at Doks Studio.",
    image: "/Web Photos/Photo4.jpg",
    num: "06",
  },
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const { lang } = useLanguage();

  const meta = categoryMeta[category];

  const filtered = products.filter((p) => {
    const slug = p.category.toLowerCase().replace(/ /g, "-");
    if (category === "new") return p.tags.includes("new");
    return slug === category;
  });

  const title = meta ? (lang === "bg" ? meta.bg : meta.en) : category;
  const desc = meta ? (lang === "bg" ? meta.desc_bg : meta.desc_en) : "";

  return (
    <div className="bg-chalk min-h-screen">

      {/* Editorial Hero */}
      <div className="relative w-full h-[55vh] min-h-[380px] bg-obsidian overflow-hidden">
        {meta?.image && (
          <Image
            src={meta.image}
            alt={title}
            fill
            priority
            sizes="100vw"
            placeholder="empty"
            className="object-cover opacity-50 transition-opacity duration-700"
          />
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-obsidian/30" />

        {/* Big background number */}
        <span
          className="absolute right-8 top-1/2 -translate-y-1/2 font-serif font-light text-chalk/5 leading-none select-none pointer-events-none hidden lg:block"
          style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        >
          {meta?.num ?? "—"}
        </span>

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-24 px-6 md:px-10 lg:px-16 flex items-center gap-2">
          <Link
            href="/collection"
            className="tracking-editorial text-[0.575rem] text-chalk/50 font-sans hover:text-chalk transition-colors duration-200"
          >
            {lang === "bg" ? "Колекция" : "Collection"}
          </Link>
          <span className="text-chalk/30 text-[0.575rem]">/</span>
          <span className="tracking-editorial text-[0.575rem] text-chalk/80 font-sans">{title}</span>
        </div>

        {/* Title block — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-10 flex items-end justify-between">
          <div>
            <h1
              className="font-serif font-light text-chalk leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.025em" }}
            >
              {title}
            </h1>
            {desc && (
              <p className="font-sans text-chalk/50 text-sm font-light max-w-sm leading-relaxed mt-3 hidden md:block">
                {desc}
              </p>
            )}
          </div>

          {/* Item count — bottom right */}
          <div className="text-right hidden md:block">
            <p className="font-serif font-light text-chalk/20 leading-none" style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
              {filtered.length.toString().padStart(2, "0")}
            </p>
            <p className="tracking-editorial text-chalk/30 text-[0.55rem] font-sans mt-1">
              {lang === "bg" ? "АРТИКУЛА" : "ITEMS"}
            </p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="px-6 md:px-10 lg:px-16 py-4 border-b border-obsidian/8 flex items-center justify-between">
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
            <p className="font-serif text-warm-gray text-2xl mb-6">
              {lang === "bg" ? "Скоро предстои..." : "Coming soon..."}
            </p>
            <p className="font-sans text-stone text-sm mb-10">
              {lang === "bg" ? "Тази категория се попълва в момента." : "This category is being updated."}
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
