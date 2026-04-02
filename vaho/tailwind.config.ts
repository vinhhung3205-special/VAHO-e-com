import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cinnabar: "#E34234",
        terracotta: "#E2725B",
        agedgold: "#D4AF37",
        charcoal: "#333333",
        ivory: "#FEFDFC",
        do_paper: "#F4F1EA",
      },
      fontFamily: {
        serif: ["var(--font-prata)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderWidth: {
        '0.5': '0.5px',
      }
    },
  },
  plugins: [],
};
export default config;
