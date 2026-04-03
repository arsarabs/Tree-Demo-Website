"use client";

import { usePersonalization } from "@/lib/personalization";

export function Hero() {
  const biz = usePersonalization();
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
                className="w-full h-[400px] lg:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            {/* Social proof badge */}
            <div
              className="inline-flex items-center gap-3 rounded-full border border-black/[0.08] bg-black/[0.03] px-5 py-2 mb-8 animate-fadeInUp"
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
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-[-0.02em] mb-6 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-stone">{biz.city}&apos;s</span>
              <br />
              <span className="text-accent italic">Trusted Tree Crew</span>
            </h1>

            {/* Description */}
            <p
              className="font-sans text-stone-dim text-lg leading-[1.7] max-w-lg mb-8 animate-fadeInUp"
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
                className="bg-accent text-white font-sans font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-lg hover:bg-accent-light transition-colors duration-300 text-center"
              >
                Get a Free Estimate
              </a>
              <a
                href={`tel:${biz.phoneRaw}`}
                className="border border-black/[0.1] text-stone font-sans font-medium text-sm uppercase tracking-[0.12em] px-8 py-4 rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-300 text-center flex items-center justify-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                {biz.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
