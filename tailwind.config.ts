import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1280px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "640px" },
    },
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        border: {
          primary: "var(--border-primary)",
        },
        hover: {
          primary: "var(--hover-primary)",
        },
        text: {
          heading: "var(--text-heading)",
          primary: "var(--text-primary)",
          placeholder: "var(--text-placeholder)",
        },
      },
      fontFamily: {
        heading: "var(--font-inter)",
        body: "var(--font-inter)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 150ms ease-in-out forwards",
        "fade-out": "fade-out 150ms ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
