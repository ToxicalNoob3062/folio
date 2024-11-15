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
        home: {
          bg: "#f4f9fc",
          primary: "#0f1b61",
          secondary: "#aadcec",
          lining: "#7f00e0",
        },
      },
      fontFamily: {
        bitter: ["var(--font-bitter)", "serif"],
        bitter_italics: ["var(--font-bitter-italics)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
