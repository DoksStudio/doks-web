"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryImages = {
  suits: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",
  jackets: "/cat-jackets.jpg",
  smartCasual: "/cat-smart-casual.jpg",
  accessories: "/cat-accessories.jpg",
};

export default function CategoryGrid() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    { id: "suits", ...t.categories.suits, href: "/collection/suits", image: categoryImages.suits, col: "lg:col-span-1 lg:row-span-2" },
    { id: "jackets", ...t.categories.jackets, href: "/collection/jackets", image: categoryImages.jackets, col: "lg:col-span-1" },
    { id: "smartCasual", ...t.categories.smartCasual, href: "/collection/smart-casual", image: categoryImages.smartCasual, col: "lg:col-span-1" },
    { id: "accessories", ...t.categories.accessories, href: "/collection/accessories", image: categoryImages.accessories, col: "lg:col-span-1" },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal-text, .reveal-image").forEach((n) => n.classList.add("in-view"));
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="categories" className="bg-chalk pt-0 pb-20 md:pb-32">

      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 mb-10 md:mb-14 pt-16 md:pt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="reveal-text tracking-editorial text-stone text-[0.625rem] font-sans mb-3">
            {t.categories.eyebrow}
          </p>
          <h2
            className="reveal-text font-serif font-light text-obsidian leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)", letterSpacing: "-0.025em", transitionDelay: "100ms" }}
          >
            {t.categories.title1}
            <br />
            <span className="italic text-warm-gray">{t.categories.title2}</span>
          </h2>
        </div>
        <p
          className="reveal-text font-sans text-stone text-sm max-w-xs leading-relaxed font-light"
          style={{ transitionDelay: "200ms" }}
        >
          {t.categories.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 md:gap-4" style={{ minHeight: "680px" }}>
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`category-card block overflow-hidden bg-charcoal ${cat.col} ${
                cat.id === "suits" ? "aspect-[3/4] md:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <div
                className="reveal-image relative w-full h-full min-h-[240px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="card-image img-cover"
                />
                <div className="card-overlay" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                  {/* Number */}
                  <div className="self-end">
                    <span className="font-serif text-chalk/20 font-light text-5xl leading-none">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="tracking-editorial text-sand/70 text-[0.55rem] font-sans mb-2 card-label">
                        {cat.sub}
                      </p>
                      <h3
                        className="font-serif text-chalk font-light italic leading-none mb-1.5 card-label"
                        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                      >
                        {cat.label}
                      </h3>
                      <p className="tracking-editorial text-chalk/40 text-[0.5rem] font-sans card-label">
                        {cat.desc}
                      </p>
                    </div>
                    <div className="card-arrow flex-shrink-0 mb-1">
                      <div className="w-9 h-9 border border-chalk/25 flex items-center justify-center rounded-full hover:border-chalk/60 transition-colors duration-300">
                        <ArrowUpRight size={13} strokeWidth={1.5} className="text-chalk" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
