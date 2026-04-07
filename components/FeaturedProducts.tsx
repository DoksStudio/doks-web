"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FeaturedProducts() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  const products = getFeaturedProducts();

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal-text").forEach((n) => n.classList.add("in-view"));
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-chalk py-20 md:py-32">
      <div className="px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16">
          <div>
            <p className="reveal-text tracking-editorial text-stone text-[0.625rem] font-sans mb-3">
              {t.products.eyebrow}
            </p>
            <h2
              className="reveal-text font-serif font-light text-obsidian leading-none"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 4.75rem)",
                letterSpacing: "-0.025em",
                transitionDelay: "80ms",
              }}
            >
              {t.products.title1}
              <br />
              <span className="italic">{t.products.title2}</span>
            </h2>
          </div>

          <Link
            href="/collection"
            className="reveal-text group flex items-center gap-3 tracking-editorial text-[0.625rem] text-obsidian font-sans font-medium"
            style={{ transitionDelay: "160ms" }}
          >
            <span className="group-hover:opacity-50 transition-opacity duration-300">{t.products.viewAll}</span>
            <div className="w-6 h-px bg-obsidian group-hover:w-10 transition-all duration-500 ease-reveal" />
            <ArrowRight size={11} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
