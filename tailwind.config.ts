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
    bg: "#f4f9fc",
    primary: "#0f1b61",
    secondary: "#aadcec",
    lining: "#7f00e0",
  },
  work: {
    bg: "#fff7f7",
    primary: "#021963",
    secondary: "#FCC5D3",
    lining: "#7E66C7",
  },
  about: {
    bg: "#f7f8f9",
    primary: "#1c494c",
    secondary: "#9bdabe",
    lining: "#5269bd",
  },
  writing: {
    bg: "#fdfbf9",
    primary: "#47280b",
    secondary: "#ffdaa5;",
    lining: "#ff5708",
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
