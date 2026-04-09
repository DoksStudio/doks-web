import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "block",
  preload: true,
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "block",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "DOKS STUDIO — Безвременно Мъжко Облекло",
    template: "%s — DOKS STUDIO",
  },
  description:
    "31 години мъжка мода от България. Премиум костюми, официално и смарт-кежуъл облекло за съвременния мъж.",
  keywords: ["мъжки костюми", "мъжко облекло", "България", "луксозно облекло", "мъжка мода", "Sofia"],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    siteName: "DOKS STUDIO",
    title: "DOKS STUDIO — Безвременно Мъжко Облекло",
    description: "31 години мъжка мода от България. Премиум костюми и официално облекло.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-chalk text-obsidian antialiased cursor-none">
        <LanguageProvider>
          <Preloader />
          <CustomCursor />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
