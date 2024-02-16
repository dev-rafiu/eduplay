import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        foreground: "rgba(var(--foreground), <alpha-value>)",
        background: "rgba(var(--background), <alpha-value>)",
        yellow: "rgba(var(--yellow), <alpha-value>)",
        red: "rgba(var(--red), <alpha-value>)",
        violet: "rgba(var(--violet), <alpha-value>)",
        green: "rgba(var(--green), <alpha-value>)",
        "gray-50": "rgba(var(--gray-50), <alpha-value>)",
        "gray-100": "rgba(var(--gray-100), <alpha-value>)",
        "gray-200": "rgba(var(--gray-200), <alpha-value>)",
        "gray-300": "rgba(var(--gray-300), <alpha-value>)",
        "gray-400": "rgba(var(--gray-400), <alpha-value>)",
        "sea-blue": "rgba(var(--sea-blue), <alpha-value>)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
