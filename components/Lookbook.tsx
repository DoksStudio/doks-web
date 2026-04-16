"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const lookbookImages = [
  "/Web Photos/Photo12.jpg",
  "/Web Photos/Photo9.jpg",
];
const lookbookHrefs = ["/collection/suits", "/collection/smart-casual"];

export default function Lookbook() {
  const { t } = useLanguage();
  const sections = [t.lookbook.section1, t.lookbook.section2];

  return (
    <section>
      {/* Bar */}
      <div className="bg-chalk px-6 md:px-10 lg:px-16 py-4 border-t border-light-stone flex items-center gap-5">
        <div className="w-5 h-px bg-stone flex-shrink-0" />
        <span className="tracking-editorial text-stone text-[0.6rem] font-sans">{t.lookbook.sectionLabel}</span>
        <div className="flex-1 h-px bg-light-stone" />
        <Link href="/lookbook" className="tracking-editorial text-[0.6rem] text-obsidian font-sans hover:text-stone transition-colors duration-300 flex-shrink-0">
          {t.lookbook.viewAll}
        </Link>
      </div>

      {sections.map((section, i) => {
        const isEven = i % 2 === 0;
        return (
          <EditorialSection
            key={i}
            section={section}
            index={i}
            image={lookbookImages[i]}
            href={lookbookHrefs[i]}
            isEven={isEven}
          />
        );
      })}
    </section>
  );
}

function EditorialSection({
  section,
  index,
  image,
  href,
  isEven,
}: {
  section: { season: string; title: string; body: string; cta: string };
  index: number;
  image: string;
  href: string;
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal-text, .reveal-image").forEach((n) => n.classList.add("in-view"));
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bg = isEven ? "bg-chalk" : "bg-obsidian";
  const fg = isEven ? "text-obsidian" : "text-chalk";
  const fgSub = isEven ? "text-stone" : "text-chalk/50";
  const accentLine = isEven ? "bg-stone" : "bg-sand/60";
  const eyebrowColor = isEven ? "text-stone" : "text-sand/60";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 ${bg}`}
      style={{ minHeight: "min(90vh, 800px)" }}
    >
      {/* Text */}
      <div
        className={`flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-28 ${
          isEven ? "order-1" : "order-1 lg:order-2"
        }`}
      >
        <div className="reveal-text mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-6 h-px ${accentLine}`} />
            <span className={`tracking-editorial text-[0.6rem] font-sans ${eyebrowColor}`}>
              {section.season}
            </span>
          </div>
        </div>

        <h2
          className={`reveal-text font-serif font-light leading-[0.88] mb-8 whitespace-pre-line ${fg}`}
          style={{
            fontSize: "clamp(3rem, 6vw, 7rem)",
            letterSpacing: "-0.03em",
            transitionDelay: "80ms",
          }}
        >
          {section.title}
        </h2>

        <p
          className={`reveal-text font-sans text-sm leading-[1.9] font-light max-w-sm mb-10 ${fgSub}`}
          style={{ transitionDelay: "160ms" }}
        >
          {section.body}
        </p>

        <div className="reveal-text" style={{ transitionDelay: "240ms" }}>
          <Link href={href} className={isEven ? "btn-primary" : "btn-outline"}>
            {section.cta}
          </Link>
        </div>

        {/* Decorative index */}
        <div
          aria-hidden="true"
          className={`mt-auto pt-14 ${isEven ? "text-obsidian/4" : "text-chalk/4"} select-none pointer-events-none`}
        >
          <span
            className="font-serif font-light leading-[0.8] block"
            style={{ fontSize: "clamp(6rem, 15vw, 16rem)", letterSpacing: "-0.05em" }}
          >
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Image */}
      <div
        className={`relative h-[65vw] md:h-[500px] lg:h-auto overflow-hidden ${
          isEven ? "order-2" : "order-2 lg:order-1"
        }`}
      >
        <div className="reveal-image h-full w-full" style={{ transitionDelay: "100ms" }}>
          <Image
            src={image}
            alt={section.title.replace(/\n/g, " ")}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div
            className={`absolute inset-0 opacity-25 ${
              isEven
                ? "bg-gradient-to-t from-chalk to-transparent"
                : "bg-gradient-to-t from-obsidian to-transparent"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
