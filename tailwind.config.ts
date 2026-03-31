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
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        whiteish: "var(--color-white)",
        brandBlue: "var(--color-blue)",
        brandViolet: "var(--color-violet)",
        brandTeal: "var(--color-teal)",
        borderGlass: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
export default config;
