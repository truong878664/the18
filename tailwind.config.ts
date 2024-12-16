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
      spacing: {
        "var-default": "var(--default)",
        "var-md": "var(--md, var(--default))",
        "var-lg": "var(--lg, var(--md, var(--default)))",
        "var-xl": "var(--xl, var(--lg, var(--md, var(--default))))",
        "var-2xl":
          "var(--2xl, var(--xl, var(--lg, var(--md, var(--default)))))",
        "var-3xl":
          "var(--3xl,var(--2xl, var(--xl, var(--lg, var(--md, var(--default))))))",

        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "6": "1.5rem",
        "11": "2.75rem",
        "12.5": "3.125rem",
        "13": "3.25rem",
        "14.5": "3.625rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "25.5": "6.375rem",
        50: "12.5rem",
      },
    },
    letterSpacing: {
      tiny: "-0.005em",
    },
    screens: {
      xs: "360px",
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
