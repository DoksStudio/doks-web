"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function DeliveryBanner() {
  const { lang } = useLanguage();
  const text = lang === "bg"
    ? "БЕЗПЛАТНА ДОСТАВКА ЗА ПОРЪЧКИ НАД 99.99 € / 195.56 лв."
    : "FREE DELIVERY ON ORDERS OVER 99.99 € / 195.56 BGN";

  return (
    <div className="bg-obsidian py-3.5 overflow-hidden">
      <div className="marquee-track">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="tracking-editorial text-[0.575rem] text-chalk/70 font-sans whitespace-nowrap px-10">
              {text}
            </span>
            <span className="text-sand/40 text-xs flex-shrink-0">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
