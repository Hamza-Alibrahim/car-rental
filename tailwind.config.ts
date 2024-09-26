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
      boxShadow: {
        link: "0 10px 15px 0 rgba(255,83,48,.35)",
        "link-hover": "0 10px 15px 0 rgba(255,83,48,.5)",
        "xlink-hover": "0 10px 15px 0 rgba(255,83,48,.6)",
        book: "0 10px 20px 0 rgba(0,0,0,.1)",
        experiences: "0 20px 40px 0 rgba(0,0,0,.08)",
      },
      screens: {
        xsm: "567px",
        sm: "650px",
        md: "830px",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        rubik: "Rubik, sans-serif",
      },
    },
    keyframes: {
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
export default config;
