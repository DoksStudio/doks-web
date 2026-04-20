"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [t.trust.pillar1, t.trust.pillar2, t.trust.pillar3, t.trust.pillar4];

  const marqueeItems = [
    "31 " + (t === (null as never) ? "" : t.trust.pillar1.title),
    "100 000+ " + t.trust.pillar2.title,
    "Sofia, Bulgaria — 1993",
    t.trust.pillar3.title,
    t.trust.pillar4.title,
    "Граф Игнатиев · Иван Шишман · Христо Белчев · Бул. Мадрид",
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal-text").forEach((n) => n.classList.add("in-view"));
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-chalk">
      {/* Marquee */}
      <div className="bg-obsidian py-4 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="tracking-editorial text-[0.575rem] text-chalk/40 font-sans whitespace-nowrap px-8">
                {item}
              </span>
              <span className="text-sand/30 text-xs flex-shrink-0">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28">

        {/* Title */}
        <div className="mb-14 md:mb-20">
          <p className="reveal-text tracking-editorial text-stone text-[0.625rem] font-sans mb-3">
            {t.trust.eyebrow}
          </p>
          <h2
            className="reveal-text font-serif font-light text-obsidian leading-none"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 5rem)",
              letterSpacing: "-0.025em",
              transitionDelay: "80ms",
            }}
          >
            {t.trust.title1}
            <br />
            <span className="italic text-warm-gray">{t.trust.title2}</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-light-stone">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="reveal-text bg-chalk px-8 py-10 md:py-14 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className="font-serif font-light text-sand leading-none block mb-5 transition-colors duration-300 group-hover:text-obsidian"
                style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
              >
                {pillar.num}
              </span>
              <h3 className="font-sans text-obsidian text-sm font-medium tracking-wide mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-sans text-stone text-sm leading-relaxed font-light">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className="reveal-text mt-16 md:mt-20 flex flex-col items-start gap-4"
          style={{ transitionDelay: "360ms" }}
        >
          <div className="w-10 h-px bg-sand" />
          <blockquote>
            <p className="font-serif font-light text-obsidian leading-snug"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)", letterSpacing: "-0.01em" }}
            >
              {t.trust.quote}
            </p>
            <footer className="tracking-editorial text-[0.575rem] text-stone font-sans mt-4">
              {t.trust.quoteAuthor}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
