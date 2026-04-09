"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const { lang, toggleLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: t.nav.collection, href: "/collection" },
    { label: t.nav.suits, href: "/collection/suits" },
    { label: t.nav.jackets, href: "/collection/jackets" },
    { label: t.nav.smartCasual, href: "/collection/smart-casual" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.stores, href: "/stores" },
  ];

  const textColor = "text-obsidian";
  const navBg = "bg-chalk shadow-[0_1px_0_0_rgba(10,10,10,0.08)]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${navBg} translate-y-0`}
      >
        <nav className="flex items-center px-6 md:px-10 lg:px-16 h-16 md:h-20">

          {/* Desktop left links */}
          <div className="hidden lg:flex items-center gap-7 flex-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link tracking-editorial text-[0.6rem] font-sans font-medium transition-colors duration-300 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center — Logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center transition-colors duration-300 group ${textColor}`}
          >
            <span
              className="font-serif font-light tracking-[0.28em] uppercase leading-none"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
            >
              DOKS
            </span>
            <span
              className={`tracking-[0.5em] font-sans font-medium uppercase mt-[3px] transition-opacity duration-300 opacity-60 group-hover:opacity-100`}
              style={{ fontSize: "0.42rem", letterSpacing: "0.5em" }}
            >
              STUDIO
            </span>
          </Link>

          {/* Desktop right links + actions */}
          <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link tracking-editorial text-[0.6rem] font-sans font-medium transition-colors duration-300 ${textColor}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={`relative flex items-center gap-1 tracking-editorial text-[0.6rem] font-sans font-medium transition-colors duration-300 ${textColor} group`}
              aria-label="Toggle language"
            >
              <span className={lang === "bg" ? "opacity-100" : "opacity-40 group-hover:opacity-70"}>БГ</span>
              <span className="opacity-20">/</span>
              <span className={lang === "en" ? "opacity-100" : "opacity-40 group-hover:opacity-70"}>EN</span>
            </button>

            <button aria-label="Search" className={`p-1 hover:opacity-50 transition-opacity ${textColor}`}>
              <Search size={15} strokeWidth={1.5} />
            </button>
            <Link href="/cart" aria-label="Cart" className={`relative p-1 hover:opacity-50 transition-opacity ${textColor}`}>
              <ShoppingBag size={15} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Mobile: lang toggle + cart + hamburger */}
          <div className="flex lg:hidden items-center gap-3 ml-auto">
            <button
              onClick={toggleLang}
              className={`tracking-editorial text-[0.575rem] font-sans font-medium transition-colors duration-300 ${textColor}`}
            >
              {lang === "bg" ? "EN" : "БГ"}
            </button>
            <Link href="/cart" className={`p-1 ${textColor}`}>
              <ShoppingBag size={15} strokeWidth={1.5} />
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
              className={`p-1 ${textColor}`}
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-obsidian transition-all duration-700 ease-reveal ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-8 overflow-y-auto">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-14">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex flex-col">
              <span className="font-serif text-chalk text-xl tracking-[0.28em] uppercase font-light">DOKS</span>
              <span className="tracking-[0.5em] text-[0.42rem] font-sans font-medium uppercase text-chalk/40 mt-[3px]">STUDIO</span>
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-chalk p-1 hover:opacity-50 transition-opacity">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-chalk font-light italic py-3 border-b border-chalk/8 hover:opacity-50 transition-all duration-300"
                style={{
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  transitionDelay: menuOpen ? `${i * 60 + 150}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-1rem)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="pt-10 border-t border-chalk/10 flex justify-between items-end">
            <div>
              <p className="text-chalk/30 tracking-editorial text-[0.575rem] font-sans mb-1.5">София, България</p>
              <p className="text-chalk/30 tracking-editorial text-[0.575rem] font-sans">doks-studio.eu</p>
            </div>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 group"
            >
              <span className={`tracking-editorial text-[0.625rem] font-sans transition-colors duration-300 ${lang === "bg" ? "text-chalk" : "text-chalk/30"}`}>БГ</span>
              <span className="text-chalk/20 text-xs">/</span>
              <span className={`tracking-editorial text-[0.625rem] font-sans transition-colors duration-300 ${lang === "en" ? "text-chalk" : "text-chalk/30"}`}>EN</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
