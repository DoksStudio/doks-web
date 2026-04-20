"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, products, formatPrice } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Plus, Minus, ZoomIn } from "lucide-react";

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-light-stone">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left"
        aria-expanded={open}
      >
        <span className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium">{title}</span>
        {open ? (
          <Minus size={11} strokeWidth={1.5} className="text-stone flex-shrink-0" />
        ) : (
          <Plus size={11} strokeWidth={1.5} className="text-stone flex-shrink-0" />
        )}
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="pb-6">{children}</div>
      </div>
    </div>
  );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params as { slug: string };
  const { t } = useLanguage();
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  if (!product) {
    return (
      <div className="min-h-screen bg-chalk flex items-center justify-center">
        <div className="text-center">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-4">404</p>
          <h1 className="font-serif text-obsidian text-4xl font-light mb-6">Продуктът не е намерен</h1>
          <Link href="/collection" className="btn-primary">
            Към колекцията
          </Link>
        </div>
      </div>
    );
  }

  const related = [
    ...products.filter((p) => p.id !== product.id && p.category === product.category),
    ...products.filter((p) => p.id !== product.id),
  ].filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i).slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); setTimeout(() => setSizeError(false), 2500); return; }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const acc = t.product.accordion;
  const sc = acc.shippingContent;

  return (
    <div className="bg-chalk min-h-screen">

      {/* Breadcrumb */}
      <div className="px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-6">
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { label: t.product.breadcrumb.home, href: "/" },
            { label: t.product.breadcrumb.collection, href: "/collection" },
            { label: product.category, href: `/collection/${product.category.toLowerCase().replace(/ /g, "-")}` },
            { label: product.name, href: null },
          ].map((crumb, i, arr) => (
            <span key={i} className="flex items-center gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className="tracking-editorial text-[0.55rem] text-stone font-sans hover:text-obsidian transition-colors duration-200">
                  {crumb.label}
                </Link>
              ) : (
                <span className="tracking-editorial text-[0.55rem] text-obsidian font-sans">{crumb.label}</span>
              )}
              {i < arr.length - 1 && <span className="text-stone text-[0.55rem]">/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Product Layout */}
      <div className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 xl:gap-24">

          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">

            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2.5 md:w-[70px] overflow-x-auto md:overflow-visible">
              {product.images.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative shrink-0 w-14 h-[70px] md:w-full md:h-[88px] overflow-hidden transition-all duration-300 ${
                    activeImage === i ? "ring-1 ring-obsidian" : "ring-1 ring-transparent opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${i + 1}`} fill sizes="70px" className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1">
              <div
                className="relative overflow-hidden bg-light-stone"
                style={{ aspectRatio: "3/4", cursor: zoomed ? "zoom-out" : "zoom-in" }}
                onMouseEnter={() => setZoomed(true)}
                onMouseLeave={() => setZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={product.images.gallery[activeImage]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={`object-cover object-center transition-transform duration-200 ${zoomed ? "scale-[1.5]" : "scale-100"}`}
                  style={zoomed ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : undefined}
                />
                {!zoomed && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-chalk/80 backdrop-blur-sm px-2.5 py-1.5 flex items-center gap-1.5">
                      <ZoomIn size={9} strokeWidth={1.5} className="text-stone" />
                      <span className="tracking-editorial text-[0.45rem] text-stone font-sans">{t.product.zoomHint}</span>
                    </div>
                  </div>
                )}
                {product.tags.includes("new") && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-obsidian text-chalk tracking-editorial text-[0.5rem] font-sans px-3 py-1.5">
                      {t.products.new}
                    </span>
                  </div>
                )}
                {product.images.gallery.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-1.5">
                    <button onClick={() => setActiveImage(i => Math.max(0, i - 1))} disabled={activeImage === 0}
                      className="w-8 h-8 bg-chalk/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-30 hover:bg-chalk transition-colors duration-200">
                      <ChevronDown size={11} strokeWidth={1.5} className="rotate-90 text-obsidian" />
                    </button>
                    <button onClick={() => setActiveImage(i => Math.min(product.images.gallery.length - 1, i + 1))} disabled={activeImage === product.images.gallery.length - 1}
                      className="w-8 h-8 bg-chalk/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-30 hover:bg-chalk transition-colors duration-200">
                      <ChevronDown size={11} strokeWidth={1.5} className="-rotate-90 text-obsidian" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info — sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start">

            {/* Name & price */}
            <div className="mb-6">
              <p className="tracking-editorial text-[0.575rem] text-stone font-sans mb-2">{product.category}</p>
              <h1
                className="font-serif font-light text-obsidian leading-none mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", letterSpacing: "-0.015em" }}
              >
                {product.name}
              </h1>
              <p className="font-serif font-light text-obsidian/80" style={{ fontSize: "1.5rem", letterSpacing: "-0.01em" }}>
                {formatPrice(product.price, product.currency)}
              </p>
            </div>

            <div className="w-10 h-px bg-light-stone mb-6" />

            <p className="font-sans text-warm-gray text-sm leading-[1.85] font-light mb-8">{product.description}</p>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="tracking-editorial text-[0.575rem] text-obsidian font-sans">{t.product.selectSize}</span>
                <Link href="/size-guide" className="tracking-editorial text-[0.575rem] text-stone font-sans underline underline-offset-2 hover:text-obsidian transition-colors duration-200">
                  {t.product.sizeGuide}
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => { if (!size.available) return; setSelectedSize(size.label); setSizeError(false); }}
                    className={`size-btn ${selectedSize === size.label ? "active" : ""} ${!size.available ? "unavailable" : ""}`}
                    disabled={!size.available}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="tracking-editorial text-[0.55rem] text-red-600 font-sans mt-2">
                  {t.product.sizeError}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="tracking-editorial text-[0.575rem] text-obsidian font-sans">{t.product.quantity}</span>
              <div className="flex items-center border border-light-stone">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors duration-200">
                  <Minus size={10} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors duration-200">
                  <Plus size={10} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 font-sans tracking-editorial text-[0.625rem] font-medium transition-all duration-400 ${
                  addedToCart
                    ? "bg-stone text-chalk border border-stone"
                    : "bg-obsidian text-chalk border border-obsidian hover:bg-transparent hover:text-obsidian"
                }`}
              >
                {addedToCart ? t.product.added : t.product.addToCart}
              </button>
              <button className="w-full py-4 bg-transparent border border-light-stone text-obsidian font-sans tracking-editorial text-[0.625rem] font-medium hover:border-obsidian transition-all duration-300">
                {t.product.bookFitting}
              </button>
            </div>

            {/* Quick facts */}
            <div className="py-4 border-t border-b border-light-stone mb-6 flex flex-wrap gap-x-5 gap-y-2">
              {[t.product.shipping1, t.product.shipping2, t.product.shipping3].map((fact) => (
                <div key={fact} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-sand flex-shrink-0" />
                  <span className="tracking-editorial text-[0.5rem] text-stone font-sans">{fact}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title={acc.details} defaultOpen>
                <ul className="space-y-2">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="text-sand mt-0.5 flex-shrink-0 text-xs">—</span>
                      <span className="font-sans text-warm-gray text-xs leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title={acc.fabric}>
                <p className="font-sans text-warm-gray text-xs leading-[1.9]">{product.fabric}</p>
              </Accordion>
              <Accordion title={acc.fit}>
                <p className="font-sans text-warm-gray text-xs leading-[1.9]">{product.fit}</p>
              </Accordion>
              <Accordion title={acc.shipping}>
                <div className="space-y-3">
                  {[
                    { label: sc.deliveryLabel, text: sc.deliveryText },
                    { label: sc.returnsLabel, text: sc.returnsText },
                    { label: sc.alterationsLabel, text: sc.alterationsText },
                  ].map((item) => (
                    <p key={item.label} className="font-sans text-warm-gray text-xs leading-relaxed">
                      <strong className="text-obsidian font-medium">{item.label}</strong> {item.text}
                    </p>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-light-stone px-6 md:px-10 lg:px-16 py-20 md:py-28 bg-chalk">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-2">{t.product.related.eyebrow}</p>
              <h2 className="font-serif font-light text-obsidian"
                style={{ fontSize: "clamp(1.75rem, 3vw, 3.25rem)", letterSpacing: "-0.02em", lineHeight: "1.05" }}
              >
                {t.product.related.title}
              </h2>
            </div>
            <Link href="/collection" className="tracking-editorial text-[0.575rem] text-stone font-sans hover:text-obsidian transition-colors duration-200 underline underline-offset-2 hidden md:block">
              {t.product.related.viewAll}
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      )}
    </div>
  );
}
