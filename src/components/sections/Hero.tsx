"use client";

import { usePersonalization } from "@/lib/personalization";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    },
  },
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1.5 },
    },
  },
};

export function Hero() {
  const biz = usePersonalization();
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Radial gradient accents — no images needed */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none isolate"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,79,0,0.08)_0%,rgba(255,79,0,0.02)_50%,transparent_80%)]" />
        <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,79,0,0.05)_0%,transparent_100%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,rgba(255,79,0,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedGroup variants={transitionVariants}>
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 mb-10 backdrop-blur-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 20 20" fill="#FF4F00" aria-hidden="true">
                    <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13.01l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
                  </svg>
                ))}
              </div>
              <span className="w-px h-4 bg-white/10" />
              <span className="font-satoshi text-stone-dim text-xs font-medium tracking-wide">
                {biz.rating} rating · {biz.jobsCompleted} jobs completed
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-balance font-clash font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
              <span className="text-accent">Your junk.</span>{" "}
              <span className="text-stone">Gone today.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-xl text-pretty font-satoshi text-stone-dim text-lg leading-relaxed">
              Same-day junk removal in {biz.city}. We tell you the price before
              we start, and that&apos;s what you pay. No hidden fees, no surprises.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#quote"
                className="btn-magnetic border-draw bg-accent text-white font-satoshi font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 hover:bg-accent-light transition-colors duration-300 text-center"
              >
                Get My Free Quote
              </a>
              <a
                href={`tel:${biz.phoneRaw}`}
                className="group border border-white/[0.1] text-stone font-satoshi font-medium text-sm uppercase tracking-[0.12em] px-10 py-4 hover:border-accent/30 hover:text-accent transition-all duration-500 text-center flex items-center justify-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                {biz.phone}
              </a>
            </div>
          </AnimatedGroup>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
    </section>
  );
}
