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
        clash: ['"Clash Display"', "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        dark: "#FAFAF7",
        "warm-gray": "#F0EDE6",
        elevated: "#E8E5DD",
        stone: "#1A1A18",
        "stone-dim": "#5A5A52",
        accent: "#1B6B3A",
        "accent-light": "#25884A",
        "accent-dim": "rgba(27, 107, 58, 0.08)",
        "accent-muted": "rgba(27, 107, 58, 0.25)",
        "accent-subtle": "rgba(27, 107, 58, 0.12)",
        slate: "#64748B",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "clip-reveal": "clipReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "blur-in": "blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-up": "scaleUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        clipReveal: {
          from: { clipPath: "inset(0 100% 0 0)" },
          to: { clipPath: "inset(0 0% 0 0)" },
        },
        blurIn: {
          from: { opacity: "0", filter: "blur(12px)" },
          to: { opacity: "1", filter: "blur(0)" },
        },
        scaleUp: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
