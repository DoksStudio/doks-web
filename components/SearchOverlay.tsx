"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/lib/products";

const suggestions = [
  { label: "Костюми", href: "/collection/suits" },
  { label: "Сака", href: "/collection/jackets" },
  { label: "Смарт Кежуъл", href: "/collection/smart-casual" },
  { label: "Аксесоари", href: "/collection/accessories" },
  { label: "Sale", href: "/collection/sale" },
];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const categoryBg: Record<string, string> = {
    suits: "костюми",
    jackets: "сака",
    "smart-casual": "смарт кежуъл",
    accessories: "аксесоари",
    sale: "намалени",
    new: "новости",
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return products.filter((p) => {
      const slug = p.category.toLowerCase().replace(/ /g, "-");
      const bgCategory = categoryBg[slug] ?? "";
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        bgCategory.includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }).slice(0, 5);
  }, [query]);

  const hasQuery = query.trim().length >= 2;

  return (
    <div
      className={`fixed inset-0 z-[70] bg-obsidian transition-all duration-700 ease-reveal flex flex-col ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-chalk p-1 hover:opacity-50 transition-opacity z-10"
        aria-label="Затвори"
      >
        <X size={20} strokeWidth={1.5} />
      </button>

      <div className="flex flex-col items-center h-full px-6 md:px-16 pt-24 pb-12 overflow-y-auto">

        {/* Label */}
        <p className={`tracking-editorial text-chalk/30 text-[0.6rem] font-sans mb-8 transition-all duration-500 delay-150 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          {lang === "bg" ? "ТЪРСЕНЕ" : "SEARCH"}
        </p>

        {/* Input */}
        <div className={`w-full max-w-2xl transition-all duration-600 delay-200 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <div className="relative flex items-center border-b border-chalk/20 pb-4 focus-within:border-chalk/60 transition-colors duration-300">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === "bg" ? "Търсете продукт..." : "Search products..."}
              className="flex-1 bg-transparent text-chalk font-serif font-light outline-none placeholder:text-chalk/20 caret-sand"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
            />
            <Search size={18} strokeWidth={1.5} className="text-chalk/30 ml-4 flex-shrink-0" />
          </div>
        </div>

        {/* Results */}
        {hasQuery ? (
          <div className={`mt-10 w-full max-w-2xl transition-all duration-500 delay-100 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {results.length > 0 ? (
              <>
                <p className="tracking-editorial text-chalk/30 text-[0.55rem] font-sans mb-5">
                  {results.length} {lang === "bg" ? "резултата" : "results"}
                </p>
                <div className="flex flex-col divide-y divide-chalk/8">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/collection/${product.category.toLowerCase().replace(/ /g, "-")}/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-5 py-4 group hover:opacity-70 transition-opacity duration-200"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-12 h-14 flex-shrink-0 overflow-hidden bg-charcoal">
                        <Image
                          src={product.images.primary}
                          alt={product.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-serif font-light text-chalk leading-tight truncate"
                          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                          {product.name}
                        </p>
                        <p className="tracking-editorial text-chalk/30 text-[0.55rem] font-sans mt-1">
                          {product.category}
                        </p>
                      </div>
                      {/* Price */}
                      <p className="font-sans text-chalk/60 text-sm flex-shrink-0">
                        {product.price.toLocaleString()} {product.currency}
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <p className="font-serif text-chalk/30 mt-4" style={{ fontSize: "1.1rem" }}>
                {lang === "bg" ? "Няма намерени резултати." : "No results found."}
              </p>
            )}
          </div>
        ) : (
          /* Suggested categories */
          <div className={`mt-14 flex flex-wrap justify-center gap-3 transition-all duration-600 delay-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <p className="w-full text-center tracking-editorial text-chalk/20 text-[0.55rem] font-sans mb-2">
              {lang === "bg" ? "РАЗГЛЕДАЙТЕ" : "BROWSE"}
            </p>
            {suggestions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={onClose}
                className="border border-chalk/15 text-chalk/50 hover:border-chalk/50 hover:text-chalk tracking-editorial text-[0.6rem] font-sans px-5 py-2.5 transition-all duration-300"
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
