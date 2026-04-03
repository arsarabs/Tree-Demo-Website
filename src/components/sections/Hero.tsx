"use client";

import { usePersonalization } from "@/lib/personalization";

const LEAF_COUNT = 10;
const leaves = Array.from({ length: LEAF_COUNT }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: 10 + Math.random() * 8,
  rotation: Math.floor(Math.random() * 360),
  drift: Math.random() > 0.5 ? 1 : -1,
}));

export function Hero() {
  const biz = usePersonalization();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F4EE] to-dark">
      {/* Falling leaves */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="falling-leaf absolute -top-6"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
              ["--drift" as string]: `${leaf.drift * (30 + Math.random() * 40)}px`,
            }}
          >
            <svg
              width={leaf.size}
              height={leaf.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: `rotate(${leaf.rotation}deg)` }}
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.8 2.5 6.5C7 16 9.5 14 12 14s5 2 7.5 4.5C21 16.8 22 14.5 22 12c0-5.5-4.5-10-10-10z"
                fill="currentColor"
                className="text-accent/[0.06]"
              />
              <path d="M12 2v12" stroke="currentColor" strokeWidth="0.5" className="text-accent/[0.10]" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 lg:pt-48">
        {/* Centered text — HOOK */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Social proof badge */}
          <div
            className="inline-flex items-center gap-3 rounded-full border border-black/[0.08] bg-white/60 backdrop-blur-sm px-5 py-2 mb-10 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 20 20" fill="#1A5C4B" aria-hidden="true">
                  <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13.01l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
                </svg>
              ))}
            </div>
            <span className="w-px h-4 bg-black/10" />
            <span className="font-sans text-stone-dim text-xs font-medium tracking-wide">
              {biz.rating} rating · {biz.reviewCount} reviews
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-balance font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.02em] mb-6 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-stone">{biz.city}&apos;s Most Trusted</span>
            <br />
            <span className="text-accent italic">Tree Service</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-stone-dim text-lg leading-[1.7] animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Family-owned since 2011. ISA Certified Arborist. {biz.jobsCompleted} jobs completed
            across Contra Costa County. No subcontractors — ever.
          </p>

          {/* CTA */}
          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#quote"
              className="bg-accent text-white font-sans font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-xl hover:bg-accent-light transition-colors duration-300 text-center"
            >
              Get a Free Estimate
            </a>
            <a
              href={`tel:${biz.phoneRaw}`}
              className="border border-black/[0.1] text-stone font-sans font-medium text-sm uppercase tracking-[0.12em] px-10 py-4 rounded-xl hover:border-accent/30 hover:text-accent transition-all duration-300 text-center flex items-center justify-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              {biz.phone}
            </a>
          </div>
        </div>

        {/* 21st.dev-style overlapping card mockups */}
        <div
          aria-hidden
          className="relative mx-auto mt-24 max-w-2xl text-left animate-fadeInUp pb-16 lg:pb-0"
          style={{ animationDelay: "0.6s" }}
        >
          {/* Background radial glow */}
          <div className="bg-[radial-gradient(ellipse_at_center,_rgba(26,92,75,0.15)_0%,_transparent_60%)] absolute inset-0" />

          {/* Card 1 — behind, offset left */}
          <div className="absolute inset-0 mx-auto w-72 sm:w-80 -translate-x-3 -translate-y-8 sm:-translate-x-6 rounded-2xl border border-black/[0.08] bg-white p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)]">
            <div className="relative h-72 sm:h-80 overflow-hidden rounded-xl border border-black/[0.04] p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.03),rgba(0,0,0,0.03)_1px,transparent_1px,transparent_6px)]">
              {/* Placeholder content — tree icon */}
              <div className="flex items-center justify-center h-full opacity-30">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                  <path d="M12 2L7 9h3l-4 7h4l-5 8h14l-5-8h4l-4-7h3L12 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 — front, offset right */}
          <div className="mx-auto w-72 sm:w-80 translate-x-4 sm:translate-x-8 rounded-2xl border border-black/[0.08] bg-white/90 backdrop-blur-xl p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)]">
            <div className="bg-white space-y-3 overflow-hidden rounded-xl border border-black/[0.04] p-3 shadow-xl">
              {/* Mini stats card */}
              <div className="relative space-y-3 rounded-xl bg-accent/5 p-4">
                <div className="flex items-center gap-1.5 text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M12 2L7 9h3l-4 7h4l-5 8h14l-5-8h4l-4-7h3L12 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-medium font-sans">{biz.name}</span>
                </div>
                <div className="space-y-3">
                  <div className="border-b border-black/5 pb-3 text-sm font-medium font-sans text-stone">
                    Serving {biz.city} &amp; all of Contra Costa County since 2011
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <div className="space-x-1">
                        <span className="text-xl font-serif text-stone">{biz.jobsCompleted}</span>
                        <span className="text-xs font-sans text-stone-dim">Jobs completed</span>
                      </div>
                      <div className="flex h-5 items-center rounded-lg bg-gradient-to-r from-accent to-accent-light px-2 text-xs text-white font-sans">
                        2024
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="space-x-1">
                        <span className="text-xl font-serif text-stone">{biz.rating}</span>
                        <span className="text-xs font-sans text-stone-dim">Google Rating</span>
                      </div>
                      <div className="flex h-5 w-4/5 items-center rounded-lg bg-accent/10 px-2 text-xs font-sans text-stone">
                        {biz.reviewCount} reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder for photo */}
              <div className="rounded-xl bg-accent/5 p-4 pb-16 relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.02),rgba(0,0,0,0.02)_1px,transparent_1px,transparent_6px)] before:rounded-xl">
                <span className="text-[10px] font-sans text-stone-dim/40 uppercase tracking-wider">Photo placeholder</span>
              </div>
            </div>
          </div>

          {/* Dot grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
