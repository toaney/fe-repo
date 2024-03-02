import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "barlow-condensed": "var(--font-barlow-condensed)",
        "nanum-pen-script": "var(--font-nanum-pen-script)",
        "inter-medium": "var(--font-inter)",
      },
    },

    
  },
  plugins: [],
};
export default config;
