"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">

        {/* Заглавие */}
        <div className="mb-14 md:mb-20">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">
            {a.eyebrow}
          </p>
          <h1
            className="font-serif font-light text-obsidian leading-[1.05]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", letterSpacing: "-0.025em" }}
          >
            {a.title1}
            <br />
            <span className="italic text-warm-gray">{a.title2}</span>
          </h1>
        </div>

        {/* Разделител */}
        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
          <span className="tracking-editorial text-stone text-[0.6rem] font-sans">
            {a.divider}
          </span>
        </div>

        {/* Текст */}
        <div className="space-y-8 font-sans text-obsidian/80 text-[1rem] md:text-[1.0625rem] leading-[1.9] font-light max-w-2xl">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p>{a.p3}</p>
          <p>{a.p4}</p>
          <p>{a.p5}</p>
        </div>

      </div>
    </div>
  );
}
