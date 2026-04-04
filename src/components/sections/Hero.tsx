"use client";

import { usePersonalization } from "@/lib/personalization";

export function Hero() {
  const biz = usePersonalization();
  return (
    <section className="relative overflow-hidden bg-grove">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,92,75,0.3)_0%,_transparent_60%)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,120,40,0.08)_0%,_transparent_50%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/our-junk-removal-team.webp"
                srcSet="/our-junk-removal-team-mobile.webp 800w, /our-junk-removal-team.webp 1200w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Highland Tree Service crew at work in Walnut Creek CA"
                width={1200}
                height={800}
                className="w-full h-[300px] sm:h-[400px] lg:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grove/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 right-2 sm:right-6 bg-white rounded-xl p-3 sm:p-4 shadow-2xl shadow-black/20 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="#1A5C4B" aria-hidden="true">
                    <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13.01l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
                  </svg>
                </div>
                <div>
                  <span className="font-sans text-stone font-bold text-sm block">{biz.rating} Stars</span>
                  <span className="font-sans text-stone-dim text-xs">{biz.reviewCount} Google Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            {/* Emergency badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-full bg-ember/15 border border-ember/25 px-4 py-1.5 mb-8 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
              </span>
              <span className="font-sans text-ember text-xs font-semibold tracking-wide uppercase">
                24/7 Emergency Response
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.92] tracking-[-0.03em] mb-6 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white/90">{biz.city}&apos;s</span>
              <br />
              <span className="text-white italic">Trusted</span>{" "}
              <span className="text-ember italic">Tree Crew</span>
            </h1>

            {/* Description */}
            <p
              className="font-sans text-white/60 text-lg leading-[1.7] max-w-lg mb-10 animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              We remove, trim, and grind so you don&apos;t have to worry about it.
              Family-owned since 2011. No subcontractors. Ever.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#quote"
                className="bg-ember text-white font-sans font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-lg hover:bg-ember-light transition-colors duration-300 text-center"
              >
                Get a Free Estimate
              </a>
              <a
                href={`tel:${biz.phoneRaw}`}
                className="border border-white/20 text-white/80 font-sans font-medium text-sm uppercase tracking-[0.12em] px-8 py-4 rounded-lg hover:border-white/40 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {biz.phone}
              </a>
            </div>

            {/* Trust row */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-3 mt-8 pt-6 border-t border-white/10 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              {["ISA Certified", "Licensed & Insured", "$2M Coverage"].map((item) => (
                <span key={item} className="font-sans text-white/35 text-xs uppercase tracking-[0.12em] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
