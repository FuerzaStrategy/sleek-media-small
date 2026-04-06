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
        navy: {
          DEFAULT: "#001f60",
          light: "#0a2e80",
        },
        teal: {
          DEFAULT: "#008aab",
          dark: "#006f8a",
        },
        charcoal: "#24272a",
        "light-blue": "#b9dbe5",
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-5px) rotate(-1deg)" },
          "30%": { transform: "translateX(5px) rotate(1deg)" },
          "45%": { transform: "translateX(-4px) rotate(-1deg)" },
          "60%": { transform: "translateX(4px) rotate(1deg)" },
          "75%": { transform: "translateX(-2px)" },
          "90%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        shake: "shake 0.55s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
