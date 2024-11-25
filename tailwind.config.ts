import type { Config } from "tailwindcss";

const generateSafelist = (
  colors: Record<string, Record<string, string> | string>
) => {
  const safelist: string[] = [];
  for (const [colorName, shades] of Object.entries(colors)) {
    if (typeof shades === "object") {
      for (const shade in shades) {
        safelist.push(`bg-${colorName}-${shade}`);
        safelist.push(`text-${colorName}-${shade}`);
        safelist.push(`border-${colorName}-${shade}`);
      }
    } else {
      safelist.push(`bg-${colorName}`);
      safelist.push(`text-${colorName}`);
      safelist.push(`border-${colorName}`);
    }
  }
  return safelist;
};

const extendedColors = {
  home: {
    bg: "#e0eff6",
    primary: "#0f1b61",
    secondary: "#aadcec",
    lining: "#7f00e0",
  },
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: extendedColors,
      fontFamily: {
        bitter: ["var(--font-bitter)", "serif"],
        bitter_italics: ["var(--font-bitter-italics)", "serif"],
      },
    },
  },
  safelist: generateSafelist(extendedColors),
  plugins: [],
} satisfies Config;
