"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[700px] w-full overflow-hidden bg-obsidian">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Web Photos/Photo4.jpeg"
          alt="Doks Studio"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[20%_center] md:object-[30%_center] transition-opacity duration-[1200ms] ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
        {/* Layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/50 to-obsidian/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/40" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.5)_100%)]" />
      </div>

      {/* Oversized background text — decorative */}
      <div
        aria-hidden="true"
        className={`absolute bottom-16 right-0 pointer-events-none select-none transition-all duration-[1800ms] ease-out ${
          loaded ? "opacity-[0.12] translate-x-0" : "opacity-0 translate-x-12"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <span
          className="font-serif text-chalk font-light leading-[0.8] block"
          style={{ fontSize: "clamp(6rem, 17vw, 20rem)", letterSpacing: "-0.04em" }}
        >
          ДОКС
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[900px]">

          {/* Eyebrow */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-1000 ease-reveal ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-10 h-px bg-sand/70" />
            <span className="tracking-editorial text-sand/80 text-[0.6rem] font-sans">
              {t.hero.eyebrow}
            </span>
          </div>

          {/* Headline — line 2 */}
          <div className="overflow-hidden mb-10 md:mb-14">
            <h1
              className={`font-serif font-light leading-[0.87] transition-all duration-[1300ms] ease-reveal ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{
                fontSize: "clamp(3.8rem, 10vw, 10.5rem)",
                letterSpacing: "-0.03em",
                transitionDelay: "600ms",
                WebkitTextStroke: "1px rgba(201,185,154,0.5)",
                color: "transparent",
                backgroundImage: "linear-gradient(135deg, #C9B99A 0%, #F5F3EE 50%, #C9B99A 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {t.hero.line2}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`font-sans text-chalk/50 text-sm md:text-[0.9375rem] font-light leading-[1.8] max-w-[380px] mb-10 md:mb-14 transition-all duration-1000 ease-reveal ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "850ms" }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-6 transition-all duration-1000 ease-reveal ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "1050ms" }}
          >
            <Link href="/collection" className="btn-outline group">
              <span>{t.hero.cta}</span>
              <ArrowDownRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
            <Link
              href="/about"
              className="tracking-editorial text-[0.6rem] text-chalk/40 font-sans hover:text-chalk/80 transition-colors duration-300 underline underline-offset-4 decoration-chalk/15"
            >
              {t.hero.story}
            </Link>
          </div>
        </div>

        {/* Bottom-right: scroll indicator */}
        <div
          className={`absolute bottom-8 right-6 md:right-10 lg:right-16 flex items-end gap-6 transition-all duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1300ms" }}
        >
          {/* Category quick links */}
          <div className="hidden md:flex flex-col gap-2 items-end">
            {["Костюми", "Сака", "Casual"].map((cat) => (
              <span key={cat} className="tracking-editorial text-[0.5rem] text-chalk/25 font-sans">
                {cat}
              </span>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2">
            <span className="tracking-editorial text-[0.5rem] text-chalk/30 font-sans [writing-mode:vertical-rl] rotate-180">
              {t.hero.scroll}
            </span>
            <div className="w-px h-10 bg-chalk/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-sand/60 animate-[scrollPulse_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlap for seamless next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-chalk to-transparent z-10 pointer-events-none" />

      <style jsx>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
