import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#2D2D2D",
        chalk: "#EAE0D2",
        sand: "#A68763",
        stone: "#8A8078",
        charcoal: "#1C1C1C",
        "warm-gray": "#A68763",
        "light-stone": "#D7C9AE",
        "akaroa": "#D7C9AE",
        "barley": "#A68763",
        "white-rock": "#EAE0D2",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Montserrat", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Montserrat", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 10vw, 10rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(3rem, 7vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "body-xl": ["1.125rem", { lineHeight: "1.7", letterSpacing: "0.01em" }],
        "body-lg": ["1rem", { lineHeight: "1.7", letterSpacing: "0.01em" }],
        "label": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.2em" }],
        "label-lg": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.25em" }],
      },
      spacing: {
        "section": "8rem",
        "section-lg": "12rem",
        "gutter": "2.5rem",
        "gutter-lg": "5rem",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "reveal": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      animation: {
        "fade-up": "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "scale-in": "scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "line-grow": "lineGrow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        lineGrow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      aspectRatio: {
        "editorial": "3 / 4",
        "editorial-wide": "4 / 3",
        "portrait": "2 / 3",
        "hero": "16 / 9",
      },
      gridTemplateColumns: {
        "editorial": "1fr 2fr",
        "editorial-rev": "2fr 1fr",
        "product": "1.2fr 0.8fr",
      },
    },
  },
  plugins: [],
};

export default config;
