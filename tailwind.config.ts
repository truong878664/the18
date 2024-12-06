import { screenBreakpoints } from "./src/app/constants";
import type { Config } from "tailwindcss";

export default {
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
        dark: "#151515",
        gray: "#F0F0F0",
      },
      fontFamily: {
        neue: ["var(--font-neue-machina)"],
      },
    },
    screens: screenBreakpoints,
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        "2xl": "5.625rem",
        "4xl": "0.75rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
