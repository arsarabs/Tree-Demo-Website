"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { usePersonalization } from "@/lib/personalization";

export function ReviewRouting() {
  const biz = usePersonalization();
  return (
    <SectionWrapper reveal="scale" className="bg-dark py-14 sm:py-18 lg:py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-elevated border border-black/[0.10] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* ═══ HOOK ═══ */}
            <div className="lg:col-span-7">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight mb-6 text-stone">
                Get more 5-star reviews.
              </h2>
              {/* ═══ BODY ═══ */}
              <p className="font-sans text-stone-dim text-base leading-relaxed mb-6 max-w-lg">
                Every {biz.name} client gets a custom QR review card. Your crew
                hands it to the customer after a job, they scan it, and it takes them
                straight to your Google review page.
              </p>
              <div className="flex gap-8">
                {["Scan", "Review", "Rank"].map((step, i) => (
                  <div key={step} className="flex items-baseline gap-2">
                    <span className="font-serif font-bold text-accent/40 text-xl">{i + 1}</span>
                    <span className="font-serif font-bold text-stone text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-warm-gray border border-black/[0.10] p-8 text-center">
                <div className="w-36 h-36 bg-white mx-auto mb-4 flex items-center justify-center">
                  <div className="w-28 h-28 bg-stone/10 flex items-center justify-center">
                    <span className="font-sans text-stone/40 text-xs uppercase tracking-widest">QR Code</span>
                  </div>
                </div>
                <p className="font-sans text-stone-dim/60 text-xs">
                  Included free with every site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
