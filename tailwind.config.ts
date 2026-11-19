import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d10",
        panel: "#151519",
        panel2: "#1c1c22",
        line: "#2a2a33",
        brand: "#7c3aed",
        brand2: "#a855f7",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,58,237,.5), 0 12px 40px rgba(124,58,237,.25)",
        canvas: "0 40px 120px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.08)",
      },
      keyframes: {
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeup: "fadeup .22s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
