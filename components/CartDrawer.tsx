"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, formattedTotal, checkout, checkingOut } = useCart();
  const { lang } = useLanguage();

  const t = {
    title: lang === "bg" ? "Количка" : "Cart",
    empty: lang === "bg" ? "Количката е празна" : "Your cart is empty",
    emptySub: lang === "bg" ? "Разгледайте нашата колекция" : "Explore our collection",
    browse: lang === "bg" ? "Към колекцията" : "Browse Collection",
    size: lang === "bg" ? "Размер" : "Size",
    total: lang === "bg" ? "Общо" : "Total",
    checkout: lang === "bg" ? "Поръчай" : "Checkout",
    processing: lang === "bg" ? "Зареждане..." : "Loading...",
    shipping: lang === "bg" ? "Доставката се изчислява при поръчка" : "Shipping calculated at checkout",
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-obsidian/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-[420px] bg-chalk flex flex-col transition-transform duration-500 ease-luxury ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light-stone">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={14} strokeWidth={1.5} className="text-obsidian" />
            <span className="tracking-editorial text-[0.625rem] font-sans font-medium text-obsidian">
              {t.title}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1 text-stone hover:text-obsidian transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <ShoppingBag size={32} strokeWidth={1} className="text-light-stone mb-4" />
              <p className="font-serif font-light text-obsidian text-xl mb-2">{t.empty}</p>
              <p className="tracking-editorial text-[0.575rem] text-stone font-sans mb-8">{t.emptySub}</p>
              <Link
                href="/collection"
                onClick={closeCart}
                className="tracking-editorial text-[0.6rem] font-sans font-medium text-obsidian border border-obsidian px-6 py-3 hover:bg-obsidian hover:text-chalk transition-all duration-300"
              >
                {t.browse}
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-light-stone">
              {items.map((item) => (
                <li key={item.variantId} className="flex gap-4 px-6 py-5">
                  {/* Image */}
                  <Link href={`/products/${item.slug}`} onClick={closeCart} className="shrink-0">
                    <div className="relative w-[72px] h-[90px] bg-light-stone overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="72px"
                        className="object-cover object-center"
                      />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={closeCart}
                          className="font-sans text-obsidian text-sm font-light leading-snug hover:opacity-50 transition-opacity duration-200"
                        >
                          {item.name}
                        </Link>
                        <p className="tracking-editorial text-[0.525rem] text-stone font-sans mt-1">
                          {t.size}: {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="text-stone hover:text-obsidian transition-colors duration-200 shrink-0 mt-0.5"
                        aria-label="Remove item"
                      >
                        <X size={11} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-light-stone">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                        >
                          <Minus size={9} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center font-sans text-xs text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                        >
                          <Plus size={9} strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-serif font-light text-obsidian text-base">
                        {new Intl.NumberFormat("bg-BG", { style: "currency", currency: item.currency }).format(
                          item.price * item.quantity
                        )}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-light-stone px-6 py-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="tracking-editorial text-[0.6rem] font-sans text-obsidian">{t.total}</span>
              <span className="font-serif font-light text-obsidian text-lg">{formattedTotal}</span>
            </div>
            <p className="tracking-editorial text-[0.5rem] text-stone font-sans mb-5">{t.shipping}</p>
            <button
              onClick={checkout}
              disabled={checkingOut}
              className="w-full py-4 bg-obsidian text-chalk font-sans tracking-editorial text-[0.625rem] font-medium hover:bg-obsidian/80 disabled:opacity-50 transition-all duration-300"
            >
              {checkingOut ? t.processing : t.checkout}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
