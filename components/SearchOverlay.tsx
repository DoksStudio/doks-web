"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <div
      className={`fixed inset-0 z-[70] bg-obsidian transition-all duration-700 ease-reveal ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-chalk p-1 hover:opacity-50 transition-opacity"
        aria-label="Затвори"
      >
        <X size={20} strokeWidth={1.5} />
      </button>

      <div className="flex flex-col items-center justify-center h-full px-6 md:px-16">

        {/* Label */}
        <p
          className={`tracking-editorial text-chalk/30 text-[0.6rem] font-sans mb-10 transition-all duration-500 delay-150 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {lang === "bg" ? "ТЪРСЕНЕ" : "SEARCH"}
        </p>

        {/* Input */}
        <div
          className={`w-full max-w-2xl transition-all duration-600 delay-200 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative flex items-center border-b border-chalk/20 pb-4 group focus-within:border-chalk/60 transition-colors duration-300">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === "bg" ? "Търсете продукт..." : "Search products..."}
              className="flex-1 bg-transparent text-chalk font-serif font-light italic outline-none placeholder:text-chalk/20 caret-sand"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
            />
            {query && (
              <button className="text-chalk hover:text-sand transition-colors duration-300 ml-4">
                <ArrowRight size={24} strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>

        {/* Suggested categories */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-3 transition-all duration-600 delay-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
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

      </div>
    </div>
  );
}
