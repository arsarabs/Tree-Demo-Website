"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { usePersonalization } from "@/lib/personalization";

export function Stats() {
  const biz = usePersonalization();
  return (
    <SectionWrapper reveal="up" className="relative bg-[#0F2F24] py-20 sm:py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-10 lg:gap-0">
          <div className="lg:pr-20">
            <p className="font-sans text-white/40 text-[11px] uppercase tracking-[0.25em] mb-4">
              Jobs Completed
            </p>
            <div className="font-serif text-white text-[4.5rem] sm:text-[8rem] lg:text-[12rem] leading-[0.8] tracking-tight whitespace-nowrap">
              <NumberTicker value={2800} /><span className="text-white/30">+</span>
            </div>
          </div>

          <div className="lg:pl-20 lg:border-l lg:border-white/[0.10] flex flex-col justify-end">
            <p className="font-sans text-white/40 text-[11px] uppercase tracking-[0.25em] mb-4">
              Google Rating
            </p>
            <div className="font-serif text-white text-[3.5rem] sm:text-[6rem] lg:text-[8rem] leading-[0.8] tracking-tight">
              <NumberTicker value={4.9} decimalPlaces={1} delay={0.2} />
            </div>
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#4ADE80" aria-hidden="true">
                  <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13.01l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z"/>
                </svg>
              ))}
              <span className="font-sans text-white/50 text-xs ml-2 self-center">
                {biz.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
