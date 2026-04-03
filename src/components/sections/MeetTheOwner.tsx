"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FlowButton } from "@/components/ui/flow-button";
import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";

export function MeetTheOwner() {
  const biz = usePersonalization();
  return (
    <SectionWrapper id="about" reveal="up" className="bg-warm-gray py-20 sm:py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ═══ HOOK ═══ */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder-mobile.webp"
                srcSet="/founder-mobile.webp 600w, /founder.webp 1200w"
                sizes="(max-width: 1024px) 100vw, 42vw"
                alt={`${biz.isDemo ? "Founder" : BIZ.founder}, founder of ${biz.name}`}
                width={1200}
                height={675}
                className="absolute inset-0 w-full h-full object-cover object-[center_top]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-gray via-transparent to-transparent" />
            </div>
            <div className="relative -mt-16 pl-6">
              <p className="font-serif font-bold text-accent text-2xl">{biz.isDemo ? "The Owner" : BIZ.founder}</p>
              <p className="font-sans text-stone-dim/70 text-sm">{biz.isDemo ? "Owner" : BIZ.founderTitle}, {biz.name}</p>
            </div>
          </div>

          {/* ═══ BODY ═══ */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[0.88] tracking-[-0.03em] mb-10 text-stone">
              One truck. One bet.
            </h2>

            <div className="space-y-5 mb-10">
              <p className="font-sans text-stone-dim text-lg leading-[1.8]">
                {biz.isDemo ? "The owners" : "Derek and Rosa"} started {biz.name} in 2011 after a rough windstorm
                ripped through the Ygnacio Valley corridor and left homeowners waiting weeks for help.
                They bet on themselves — one truck, a used chipper, and a list of 40 neighbors Rosa had personally called.
              </p>
              <p className="font-sans text-stone-dim/80 text-base leading-[1.8]">
                {BIZ.yearsInBusiness} years and {biz.jobsCompleted} jobs later, it&apos;s still {biz.isDemo ? "the owners" : "Derek"}
                and {biz.isDemo ? "the" : "his"} crew doing every job. No subcontractors, no call center, no middleman.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mb-10">
              {["CA Licensed #1084732", "ISA Certified Arborist", "$2M Insured"].map((item) => (
                <span
                  key={item}
                  className="font-sans text-stone-dim/60 text-xs uppercase tracking-[0.12em] flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  {item}
                </span>
              ))}
            </div>

            {/* ═══ CTA ═══ */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <FlowButton text="Get a Free Quote" href="#quote" />
              <Link
                href="/about"
                className="link-underline font-sans font-bold text-accent text-sm uppercase tracking-[0.15em] py-4 hover:text-accent-light transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
