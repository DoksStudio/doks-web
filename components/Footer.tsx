"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, lang, toggleLang } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  const footerLinkHrefs = {
    collection: ["/collection", "/collection/suits", "/collection/jackets", "/collection/smart-casual", "/collection/accessories", "/collection/new"],
    services: ["/made-to-measure", "/alterations", "/consultation", "/gift-cards"],
    company: ["/about", "/craftsmanship", "/lookbook", "/journal", "/careers"],
    support: ["/size-guide", "/care", "/shipping", "/contact", "/faq"],
  };

  return (
    <footer className="bg-obsidian text-chalk">

      {/* Newsletter */}
      <div className="border-b border-chalk/10 px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <div>
            <p className="tracking-editorial text-sand/60 text-[0.6rem] font-sans mb-5">
              The Doks Studio Edit
            </p>
            <h3
              className="font-serif font-light text-chalk leading-none"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4.5rem)", letterSpacing: "-0.025em" }}
            >
              {t.footer.tagline1}
              <br />
              <span className="italic text-chalk/40">{t.footer.tagline2}</span>
            </h3>
          </div>
          <div>
            <p className="font-sans text-chalk/35 text-sm leading-relaxed mb-6 max-w-[320px]">
              {t.footer.newsletterDesc}
            </p>
            {submitted ? (
              <p className="tracking-editorial text-sand/60 text-[0.6rem] font-sans py-4 border-b border-chalk/15">
                {t.footer.thanks}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  required
                  className="input-minimal flex-1 text-xs"
                />
                <button
                  type="submit"
                  className="shrink-0 px-6 py-3 bg-transparent border-b border-chalk/15 tracking-editorial text-[0.6rem] text-chalk/50 font-sans hover:text-chalk hover:border-chalk transition-all duration-300"
                >
                  {t.footer.join}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-sans text-chalk font-medium tracking-[0.22em] uppercase block text-lg">ДОКС СТУДИО</span>
            </Link>
            <p className="font-sans text-chalk/35 text-xs leading-relaxed mb-6 max-w-[170px]">
              {t.footer.brandDesc}
            </p>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="text-chalk/25 hover:text-chalk transition-colors duration-300">
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 group"
            >
              <span className={`tracking-editorial text-[0.575rem] font-sans transition-colors duration-300 ${lang === "bg" ? "text-chalk/60" : "text-chalk/25"}`}>БГ</span>
              <span className="text-chalk/15 text-xs">/</span>
              <span className={`tracking-editorial text-[0.575rem] font-sans transition-colors duration-300 ${lang === "en" ? "text-chalk/60" : "text-chalk/25"}`}>EN</span>
            </button>
          </div>

          {/* Link columns */}
          {(["collection", "services", "company", "support"] as const).map((col) => (
            <div key={col}>
              <p className="tracking-editorial text-[0.575rem] text-chalk/35 font-sans mb-5">
                {t.footer.cols[col]}
              </p>
              <ul className="space-y-3">
                {t.footer.links[col].map((label: string, i: number) => (
                  <li key={label}>
                    <Link
                      href={footerLinkHrefs[col][i] ?? "#"}
                      className="font-sans text-[0.7rem] text-chalk/40 hover:text-chalk/80 transition-colors duration-300 leading-none"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stores */}
          <div>
            <p className="tracking-editorial text-[0.575rem] text-chalk/35 font-sans mb-5">
              {t.footer.storeTitle}
            </p>
            <ul className="space-y-4">
              {t.footer.stores.map((store) => (
                <li key={store.name}>
                  <p className="font-sans text-[0.7rem] text-chalk/60 leading-snug">{store.name}</p>
                  {store.desc && (
                    <p className="tracking-editorial text-[0.5rem] text-chalk/25 font-sans mt-0.5">{store.desc}</p>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/stores"
              className="inline-block mt-6 tracking-editorial text-[0.575rem] text-chalk/35 font-sans hover:text-chalk/70 transition-colors duration-300 underline underline-offset-2"
            >
              {lang === "bg" ? "Намери магазин →" : "Find a store →"}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-chalk/8 px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="tracking-editorial text-[0.525rem] text-chalk/20 font-sans">
          {t.footer.copyright}
        </p>
        <div className="flex items-center gap-5">
          {t.footer.legal.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="tracking-editorial text-[0.525rem] text-chalk/20 font-sans hover:text-chalk/50 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
