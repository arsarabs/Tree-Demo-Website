"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { BIZ } from "@/config/biz";

export function Process() {
  return (
    <SectionWrapper reveal="up" stagger className="bg-warm-gray py-14 sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ═══ HOOK ═══ */}
        {/* No label — content speaks for itself */}

        {/* ═══ BODY ═══ */}
        <div className="space-y-0">
          {BIZ.process.map((step) => (
            <div
              key={step.num}
              className="group grid grid-cols-12 items-baseline border-b border-white/[0.08] last:border-b-0 py-8 lg:py-10"
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-clash font-bold text-accent/[0.12] text-[4rem] sm:text-[5rem] leading-none group-hover:text-accent/[0.25] transition-colors duration-700">
                  {step.num}
                </span>
              </div>
              <div className="col-span-10 sm:col-span-4 lg:col-span-3">
                <h2 className="font-clash font-bold text-stone text-xl sm:text-2xl group-hover:text-accent transition-colors duration-300 group-hover:translate-x-2 transform">
                  {step.title}
                </h2>
              </div>
              <div className="hidden sm:block sm:col-span-7 lg:col-span-8">
                <p className="font-satoshi text-stone-dim/70 text-sm sm:text-base leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
