"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), index * 80);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="reveal-text group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="product-card-image-wrap bg-light-stone mb-4 overflow-hidden">
          <div className="aspect-[3/4] relative">
            <Image
              src={product.images.primary}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="img-primary img-cover"
            />
            <Image
              src={product.images.secondary}
              alt={`${product.name} — alternate`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="img-secondary img-cover"
            />
          </div>

          {product.tags.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
              {product.tags.includes("new") && (
                <span className="bg-obsidian text-chalk tracking-editorial text-[0.475rem] font-sans px-2.5 py-1.5">
                  {t.products.new}
                </span>
              )}
              {product.tags.includes("bestseller") && (
                <span className="bg-sand text-obsidian tracking-editorial text-[0.475rem] font-sans px-2.5 py-1.5">
                  {t.products.bestseller}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="tracking-editorial text-[0.525rem] text-stone font-sans mb-1.5">
              {product.category}
            </p>
            <h3 className="font-sans text-obsidian text-sm font-light tracking-wide leading-snug group-hover:opacity-50 transition-opacity duration-400">
              {product.name}
            </h3>
          </div>
          <div className="text-right mt-3 shrink-0">
            <span className="font-serif text-obsidian text-base font-light">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
