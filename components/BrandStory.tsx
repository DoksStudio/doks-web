"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function BrandStory() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="bg-obsidian text-chalk overflow-hidden relative">

      {/* Decorative huge background year */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.025]"
      >
        <span
          className="font-serif text-chalk font-light leading-none block"
          style={{ fontSize: "clamp(12rem, 30vw, 36rem)", letterSpacing: "-0.06em" }}
        >
          1993
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">

        {/* Image */}
        <div className="relative h-[65vw] md:h-[540px] lg:h-auto order-2 lg:order-1 overflow-hidden">
          <div className="reveal-image h-full w-full">
            <Image
              src="/Web Photos/Photo10.jpg"
              alt="Докс Студио — занаят"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </div>

          {/* Floating quote block */}
          <div className="absolute bottom-8 left-8 right-8 z-10 border border-chalk/15 p-6 backdrop-blur-sm bg-obsidian/40">
            <p className="font-serif text-chalk/80 italic text-base md:text-lg font-light leading-snug">
              {t.trust.quote}
            </p>
            <p className="tracking-editorial text-[0.55rem] text-chalk/30 font-sans mt-3">
              {t.trust.quoteAuthor}
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-28 relative z-10">

          <div className="reveal-text mb-6" style={{ transitionDelay: "0ms" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px bg-sand/60" />
              <span className="tracking-editorial text-sand/60 text-[0.6rem] font-sans">
                {t.story.eyebrow}
              </span>
            </div>
          </div>

          <h2
            className="reveal-text font-serif font-light text-chalk leading-[0.92] mb-10"
            style={{
              fontSize: "clamp(2.5rem, 4.5vw, 5rem)",
              letterSpacing: "-0.025em",
              transitionDelay: "100ms",
            }}
          >
            {t.story.line1}
            <br />
            <span className="italic text-sand">{t.story.line2}</span>
          </h2>

          <div className="max-w-[440px] space-y-5">
            {[t.story.p1, t.story.p2, t.story.p3].map((para, i) => (
              <p
                key={i}
                className="reveal-text font-sans text-chalk/55 text-sm leading-[1.9] font-light"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div
            className="reveal-text mt-12 pt-10 border-t border-chalk/10"
            style={{ transitionDelay: "550ms" }}
          >
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { target: 31, suffix: "+", label: t.story.stat1.label },
                { target: 100, suffix: "k+", label: t.story.stat2.label },
                { target: 4, suffix: "", label: t.story.stat3.label },
              ].map((stat, i) => (
                <div key={i}>
                  <span
                    className="font-serif text-chalk font-light leading-none block"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", letterSpacing: "-0.03em" }}
                  >
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="tracking-editorial text-[0.55rem] text-chalk/30 font-sans mt-1.5 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-outline text-[0.6rem]">
              {t.story.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
