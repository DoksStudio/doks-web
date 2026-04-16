"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Preloader() {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">("enter");

  useEffect(() => {
    // Check sessionStorage — only show once per session
    if (sessionStorage.getItem("doks_preloaded")) {
      setPhase("done");
      return;
    }

    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("doks_preloaded", "1");
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] bg-obsidian flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo mark */}
      <div
        className={`flex flex-col items-center transition-all duration-700 ${
          phase === "enter" ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <span
          className="font-sans text-chalk font-medium tracking-[0.3em] uppercase block"
          style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}
        >
          ДОКС СТУДИО
        </span>

        {/* Animated line */}
        <div className="relative mt-8 h-px w-32 bg-chalk/10 overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full bg-sand transition-all duration-[1400ms] ease-out ${
              phase === "enter" ? "w-0" : "w-full"
            }`}
          />
        </div>

        <p
          className={`tracking-editorial text-chalk/30 text-[0.55rem] font-sans mt-4 transition-all duration-700 delay-300 ${
            phase === "enter" ? "opacity-0" : "opacity-100"
          }`}
        >
          {t.preloader.tagline}
        </p>
      </div>
    </div>
  );
}
