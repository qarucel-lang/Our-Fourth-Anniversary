import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-serif)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        lilac: "var(--color-lilac)",
        "lilac-light": "var(--color-lilac-light)",
        beige: "var(--color-beige)",
        cream: "var(--color-cream)",
        wine: "var(--color-wine)",
        "wine-light": "var(--color-wine-light)",
        rose: "var(--color-rose)",
        "brown-light": "var(--color-brown-light)",
        paper: "var(--color-paper)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
