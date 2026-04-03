"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { BIZ } from "@/config/biz";

export function Process() {
  return (
    <SectionWrapper reveal="up" stagger className="bg-warm-gray py-16 sm:py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-[-0.02em] text-stone mb-12 lg:mb-16">
          How it <span className="text-accent italic">works.</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-accent/15" aria-hidden />

          <div className="space-y-10">
            {BIZ.process.map((step) => (
              <div key={step.num} className="relative flex gap-6">
                {/* Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <span className="font-sans text-white text-xs font-bold">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pt-1.5 pb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-stone mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-stone-dim text-base leading-[1.7]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
