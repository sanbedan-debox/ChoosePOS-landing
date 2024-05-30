import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#162CF1",
        secondary: "#3b82f6",
        accent: "#8b5cf6",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      spacing: {
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "24": "6rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "28": "7rem",
        "29": "7.25rem",
        "30": "7.5rem",
        "31": "7.75rem",
        "32": "8rem",
        "33": "8.25rem",
        "34": "8.5rem",
        "35": "8.75rem",
      },
      screens: {
        xl: "1280px", // Default Tailwind `xl` breakpoint
        "2xl": "1536px",
        "3xl": "1792px",
        "4xl": "2048px",
        "5xl": "2304px",
        "6xl": "2560px",
        "7xl": "2816px",
        "8xl": "3072px",
        "9xl": "3328px",
        "10xl": "3584px",
      },
    },
  },
  plugins: [],
};
export default config;
