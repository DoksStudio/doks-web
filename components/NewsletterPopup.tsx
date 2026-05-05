"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsletterPopup() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("popup_seen")) return;
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setVisible(false);
    sessionStorage.setItem("popup_seen", "1");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setError(true); return; }
    setError(false);
    setSubmitted(true);
    sessionStorage.setItem("popup_seen", "1");
  }

  if (!visible) return null;

  const texts = {
    bg: {
      eyebrow: "СПЕЦИАЛНА ОФЕРТА",
      title: "-20% отстъпка",
      subtitle: "Въведете имейла си и получете ваучер за 20% отстъпка от следващата поръчка.",
      placeholder: "Вашият имейл адрес",
      cta: "Получи ваучера",
      fine: "Без спам. Можете да се отпишете по всяко време.",
      successTitle: "Вашият ваучер е готов",
      successCode: "ДОКС20",
      successMsg: "Копирайте кода и го използвайте при следващата поръчка.",
      errorMsg: "Моля въведете валиден имейл.",
    },
    en: {
      eyebrow: "SPECIAL OFFER",
      title: "20% off",
      subtitle: "Enter your email and receive a voucher for 20% off your next order.",
      placeholder: "Your email address",
      cta: "Get the voucher",
      fine: "No spam. Unsubscribe anytime.",
      successTitle: "Your voucher is ready",
      successCode: "DOKS20",
      successMsg: "Copy the code and use it on your next order.",
      errorMsg: "Please enter a valid email.",
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
          20
        </div>

        <div className="px-8 py-10 relative z-10">
          {!submitted ? (
            <>
              {/* Eyebrow */}
              <p className="tracking-editorial text-sand text-[0.575rem] font-sans mb-4">
                {t.eyebrow}
              </p>

              {/* Title */}
              <h2
                className="font-sans font-medium text-chalk leading-none mb-3"
                style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                {t.title}
              </h2>

              {/* Subtitle */}
              <p className="font-sans text-chalk/50 text-sm leading-relaxed mb-8 max-w-[300px]">
                {t.subtitle}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(false); }}
                  placeholder={t.placeholder}
                  className="w-full bg-chalk/5 border border-chalk/15 text-chalk placeholder:text-chalk/25 font-sans text-sm px-4 py-3 outline-none focus:border-sand/60 transition-colors duration-200"
                />
                {error && (
                  <p className="text-red-400 text-xs font-sans">{t.errorMsg}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-sand text-obsidian font-sans font-medium text-[0.7rem] tracking-editorial py-3.5 hover:bg-light-stone transition-colors duration-300"
                >
                  {t.cta}
                </button>
              </form>

              <p className="font-sans text-chalk/20 text-[0.55rem] tracking-wide mt-4">
                {t.fine}
              </p>
            </>
          ) : (
            <>
              {/* Success state */}
              <p className="tracking-editorial text-sand text-[0.575rem] font-sans mb-6">
                {t.eyebrow}
              </p>
              <h2
                className="font-sans font-medium text-chalk leading-none mb-4"
                style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}
              >
                {t.successTitle}
              </h2>

              {/* Voucher code */}
              <div className="border border-sand/40 bg-sand/5 px-6 py-5 mb-4 text-center">
                <p className="font-sans font-medium text-sand tracking-[0.3em] text-2xl">
                  {t.successCode}
                </p>
              </div>

              <p className="font-sans text-chalk/40 text-xs leading-relaxed">
                {t.successMsg}
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
