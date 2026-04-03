"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SERVICES } from "@/lib/data";
import { BIZ } from "@/config/biz";

export function Services() {
  // Reorder for bento: normals first 3, then anchor+normal, then normal+anchor
  const items = BIZ.homepageServices;

  return (
    <SectionWrapper id="services" reveal="up" className="bg-dark py-20 sm:py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* ═══ HOOK ═══ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="font-clash font-bold text-5xl sm:text-7xl lg:text-8xl leading-none tracking-[-0.03em] text-stone">
            We haul<br />
            <span className="text-accent">everything.</span>
          </h2>
          <p className="font-satoshi text-stone-dim/70 text-sm max-w-xs leading-relaxed lg:text-right">
            One couch or a whole house. Here&apos;s what we pick up most.
          </p>
        </div>

        {/* ═══ BODY ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {items.map((service, i) => {
            const serviceData = SERVICES[i];
            const isAnchor = service.anchor;
            return (
              <Link
                href={`/services/${serviceData?.slug ?? ""}`}
                key={service.num}
                className={`card-sweep bg-elevated group transition-all duration-500 block relative ${
                  isAnchor
                    ? "sm:col-span-2 p-10 lg:p-14"
                    : "p-8 lg:p-10"
                }`}
              >
                <div className="absolute top-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-700 ease-out-expo" />

                <div className="flex items-start justify-between mb-6 lg:mb-8">
                  <span className={`font-clash font-bold text-accent/[0.10] leading-none group-hover:text-accent/[0.25] transition-colors duration-500 ${
                    isAnchor ? "text-[100px] lg:text-[140px]" : "text-[60px] lg:text-[80px]"
                  }`}>
                    {service.num}
                  </span>
                </div>
                <h3 className={`font-clash font-bold text-stone mb-3 group-hover:text-accent group-hover:translate-x-2 transform transition-all duration-300 ${
                  isAnchor ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
                }`}>
                  {service.name}
                </h3>
                <p className={`font-satoshi text-stone-dim/70 leading-relaxed ${
                  isAnchor ? "text-base max-w-lg" : "text-sm"
                }`}>
                  {service.desc}
                </p>
              </Link>
            );
          })}
        </div>

        {/* ═══ CTA ═══ */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="link-underline inline-block font-satoshi font-bold text-accent text-sm uppercase tracking-[0.15em] hover:text-accent-light transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
