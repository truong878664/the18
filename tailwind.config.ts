import type { Config } from "tailwindcss";
import screens from "tailwindcss/defaultTheme";
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
    screens: {
      xs: "360",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1512px",
      "4xl": "1536px",
    },
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
