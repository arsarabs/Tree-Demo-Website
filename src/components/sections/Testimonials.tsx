"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";

const allTestimonials = [
  ...BIZ.testimonials,
  {
    quote: "These guys are the real deal. Came out for a free estimate same day I called. No pressure, no upsell. Just told me exactly what needed to happen and what it would cost.",
    name: "James R.",
    detail: "Oak Trimming",
  },
  {
    quote: "Third time using Highland and they just keep getting better. This time it was 3 pine trees along our property line — done in half a day. I've referred them to 4 neighbors.",
    name: "Brian K.",
    detail: "Pine Removal",
  },
  {
    quote: "Spoke with Rosa in Spanish and it was amazing to work with someone who truly understands what you need. Team arrived on time, worked fast, and the yard was spotless.",
    name: "Alicia V.",
    detail: "Tree Trimming",
  },
];

export function Testimonials() {
  const biz = usePersonalization();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / allTestimonials.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionWrapper reveal="up" className="bg-elevated py-20 sm:py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.02em] text-stone">
            What {biz.city}<br />
            <span className="text-accent italic">says about us.</span>
          </h2>
          <p className="font-sans text-stone-dim/70 text-sm max-w-xs leading-relaxed lg:text-right">
            Real reviews from real customers across Contra Costa County.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
        >
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-16px)] bg-dark rounded-2xl p-8 border border-black/[0.06] flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 20 20" fill="#1A5C4B" aria-hidden="true">
                      <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13.01l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans text-stone text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-serif text-accent text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <span className="font-sans text-stone text-sm font-medium block">{t.name}</span>
                  <span className="font-sans text-stone-dim/50 text-xs">{biz.city} · {t.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {allTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-accent w-6" : "bg-black/15 w-2"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-block font-sans font-bold text-accent text-sm uppercase tracking-[0.15em] hover:text-accent-light transition-colors duration-300"
          >
            Read All Reviews &rarr;
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
