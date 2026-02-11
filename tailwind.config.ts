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
        primary: "var(--primary)",
        accent: "var(--accent)",
      },
      boxShadow: {
        "glow-cyan": "0 0 15px rgba(34, 211, 238, 0.4), 0 0 30px rgba(34, 211, 238, 0.15)",
        "glow-purple": "0 0 15px rgba(192, 132, 252, 0.4), 0 0 30px rgba(192, 132, 252, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
