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
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        /* ── Surfaces ── */
        dark: "#FAFAF7",
        "warm-gray": "#F0EDE6",
        elevated: "#E8E5DD",
        grove: "#0F2F24",

        /* ── Text ── */
        stone: "#1A1A18",
        "stone-dim": "#5A5A52",

        /* ── Primary: Forest Green ── */
        accent: "#1A5C4B",
        "accent-light": "#227A63",
        "accent-dim": "rgba(26, 92, 75, 0.08)",
        "accent-muted": "rgba(26, 92, 75, 0.25)",
        "accent-subtle": "rgba(26, 92, 75, 0.12)",

        /* ── Secondary: Warm Amber ── */
        ember: "#C47828",
        "ember-light": "#D4923E",
        "ember-dim": "rgba(196, 120, 40, 0.10)",
        "ember-subtle": "rgba(196, 120, 40, 0.15)",

        slate: "#64748B",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "clip-reveal": "clipReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "blur-in": "blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-up": "scaleUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-left": "slideLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
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
        slideLeft: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
