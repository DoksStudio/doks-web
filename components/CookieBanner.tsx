"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[80] bg-obsidian border-t border-chalk/10 px-6 md:px-10 lg:px-16 py-5">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-chalk/60 text-xs leading-relaxed font-light max-w-2xl">
          {lang === "bg"
            ? <>Използваме бисквитки, за да подобрим вашето изживяване. Като продължите да използвате сайта, се съгласявате с нашата{" "}<Link href="/cookies" className="text-chalk/80 underline underline-offset-2 hover:text-chalk transition-colors duration-200">Политика за бисквитки</Link>.</>
            : <>We use cookies to improve your experience. By continuing to use this site, you agree to our{" "}<Link href="/cookies" className="text-chalk/80 underline underline-offset-2 hover:text-chalk transition-colors duration-200">Cookie Policy</Link>.</>
          }
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="tracking-editorial text-[0.575rem] font-sans text-chalk/30 hover:text-chalk/60 transition-colors duration-200"
          >
            {lang === "bg" ? "Отказвам" : "Decline"}
          </button>
          <button
            onClick={accept}
            className="tracking-editorial text-[0.575rem] font-sans font-medium bg-chalk text-obsidian px-6 py-2.5 hover:bg-sand transition-colors duration-300"
          >
            {lang === "bg" ? "Приемам" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
