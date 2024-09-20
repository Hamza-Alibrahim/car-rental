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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      lineHeight: {
        normal: "normal",
      },
      boxShadow: {
        link: "0 10px 15px 0 rgba(255,83,48,.35)",
        "link-hover": "0 10px 15px 0 rgba(255,83,48,.5)",
      },
    },
  },
  plugins: [],
};
export default config;
