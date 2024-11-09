import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      width: {
        'fill-available': '-webkit-fill-available',
      },
      boxShadow: {
        'custom-button': '4px 9px 0 rgba(0, 0, 0, 0.64)',
      },
    },
  },
  plugins: [],
};
export default config;
