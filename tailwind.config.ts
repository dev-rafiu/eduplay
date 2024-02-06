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
        foreground: "rgba(var(--foreground),<alpha-value>)",
        background: "rgba(var(--background),<alpha-value>)",
        yellow: "rgba(var(--yellow),<alpha-value>)",
        red: "rgba(var(--red),<alpha-value>)",
        violet: "rgba(var(--violet),<alpha-value>)",
        green: "rgba(var(--green),<alpha-value>)",
        "gray-50": "rgba(var(--gray-50),<alpha-value>)",
        "gray-100": "rgba(var(--gray-100),<alpha-value>)",
        "gray-200": "rgba(var(--gray-200),<alpha-value>)",
        "gray-300": "rgba(var(--gray-300),<alpha-value>)",
        "gray-400": "rgba(var(--gray-400),<alpha-value>)",
        "sea-blue": "rgba(var(--sea-blue),<alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
