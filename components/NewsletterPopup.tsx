"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsletterPopup() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("popup_seen")) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setVisible(false);
    sessionStorage.setItem("popup_seen", "1");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(lang === "bg" ? "Моля въведете валиден имейл." : "Please enter a valid email.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
      sessionStorage.setItem("popup_seen", "1");
    } catch {
      setError(lang === "bg" ? "Нещо се обърка. Опитайте отново." : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  const texts = {
    bg: {
      eyebrow: "СПЕЦИАЛНА ОФЕРТА",
      title: "-10% отстъпка",
      subtitle: "Въведете имейла си и получете ваучер за 10% отстъпка от следващата поръчка.",
      placeholder: "Вашият имейл адрес",
      cta: "Получи ваучера",
      ctaLoading: "Изпращане...",
      fine: "Без спам. Можете да се отпишете по всяко време.",
      successTitle: "Проверете имейла си",
      successMsg: "Изпратихме ви уникален ваучер за 10% отстъпка. Проверете входящата си поща.",
      successFine: "Ако не намерите имейла, проверете папка Спам.",
    },
    en: {
      eyebrow: "SPECIAL OFFER",
      title: "10% off",
      subtitle: "Enter your email and receive a voucher for 10% off your next order.",
      placeholder: "Your email address",
      cta: "Get the voucher",
      ctaLoading: "Sending...",
      fine: "No spam. Unsubscribe anytime.",
      successTitle: "Check your email",
      successMsg: "We've sent you a unique 10% off voucher. Please check your inbox.",
      successFine: "Can't find it? Check your spam folder.",
    },
  };

  const t = lang === "bg" ? texts.bg : texts.en;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-obsidian/70 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative bg-obsidian border border-chalk/10 w-full max-w-md overflow-hidden z-10" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={(e) => { e.stopPropagation(); close(); }}
          className="absolute top-4 right-4 text-chalk/40 hover:text-chalk transition-colors duration-200 p-1 z-20"
          aria-label="Close"
        >
          <X size={16} strokeWidth={1.5} />
        </button>

        {/* Decorative number */}
        <div
          aria-hidden
          className="absolute top-0 right-0 font-sans font-medium text-chalk/[0.04] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(6rem, 20vw, 10rem)", lineHeight: 1 }}
        >
          10
        </div>

        <div className="px-8 py-10 relative z-10">
          {!submitted ? (
            <>
              <p className="tracking-editorial text-sand text-[0.575rem] font-sans mb-4">
                {t.eyebrow}
              </p>

              <h2
                className="font-sans font-medium text-chalk leading-none mb-3"
                style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                {t.title}
              </h2>

              <p className="font-sans text-chalk/50 text-sm leading-relaxed mb-8 max-w-[300px]">
                {t.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  placeholder={t.placeholder}
                  disabled={loading}
                  className="w-full bg-chalk/5 border border-chalk/15 text-chalk placeholder:text-chalk/25 font-sans text-sm px-4 py-3 outline-none focus:border-sand/60 transition-colors duration-200 disabled:opacity-50"
                />
                {error && (
                  <p className="text-red-400 text-xs font-sans">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-sand text-obsidian font-sans font-medium text-[0.7rem] tracking-editorial py-3.5 hover:bg-light-stone transition-colors duration-300 disabled:opacity-60"
                >
                  {loading ? t.ctaLoading : t.cta}
                </button>
              </form>

              <p className="font-sans text-chalk/20 text-[0.55rem] tracking-wide mt-4">
                {t.fine}
              </p>
            </>
          ) : (
            <>
              <p className="tracking-editorial text-sand text-[0.575rem] font-sans mb-6">
                {t.eyebrow}
              </p>

              {/* Email icon */}
              <div className="w-12 h-12 border border-sand/30 flex items-center justify-center mb-6">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="19" height="15" rx="0.5" stroke="#C9A96E" strokeOpacity="0.6"/>
                  <path d="M1 1L10 9L19 1" stroke="#C9A96E" strokeOpacity="0.6" strokeWidth="1"/>
                </svg>
              </div>

              <h2
                className="font-sans font-medium text-chalk leading-none mb-4"
                style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}
              >
                {t.successTitle}
              </h2>

              <p className="font-sans text-chalk/50 text-sm leading-relaxed mb-3">
                {t.successMsg}
              </p>

              <p className="font-sans text-chalk/25 text-xs leading-relaxed">
                {t.successFine}
              </p>
            </>
          )}
        </div>

        {/* Bottom sand line */}
        <div className="h-px bg-gradient-to-r from-transparent via-sand/40 to-transparent" />
      </div>
    </div>
  );
}
