"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SERVICES } from "@/lib/data";
import { BIZ } from "@/config/biz";
import { Trees, Scissors, CircleDot, Zap, LandPlot, Link2 } from "lucide-react";

const serviceIcons = [Trees, Scissors, CircleDot, Zap, LandPlot, Link2];

export function Services() {
  const items = BIZ.homepageServices;

  return (
    <SectionWrapper id="services" reveal="blur" className="bg-warm-gray py-20 sm:py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[0.92] tracking-[-0.03em] text-stone">
            What we<br />
            <span className="text-accent italic">do best.</span>
          </h2>
          <p className="font-sans text-stone-dim/70 text-sm max-w-xs leading-relaxed lg:text-right">
            One dead limb or a whole lot. Here&apos;s what we do most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((service, i) => {
            const serviceData = SERVICES[i];
            const Icon = serviceIcons[i] || Trees;
            const isEmergency = service.name === "Emergency Storm Damage";
            return (
              <Link
                href={`/services/${serviceData?.slug ?? ""}`}
                key={service.num}
                className={`group card-lift rounded-xl p-8 lg:p-10 border block ${
                  isEmergency
                    ? "bg-grove border-ember/20 sm:col-span-2 lg:col-span-1"
                    : "bg-dark border-black/[0.06]"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isEmergency
                    ? "bg-ember/15 group-hover:bg-ember/25"
                    : "bg-accent/8 group-hover:bg-accent/15"
                }`}>
                  <Icon className={`w-5 h-5 ${isEmergency ? "text-ember" : "text-accent"}`} strokeWidth={1.5} />
                </div>
                <h3 className={`font-serif text-xl lg:text-2xl mb-3 transition-colors duration-300 ${
                  isEmergency
                    ? "text-white group-hover:text-ember"
                    : "text-stone group-hover:text-accent"
                }`}>
                  {service.name}
                </h3>
                <p className={`font-sans text-sm leading-relaxed ${
                  isEmergency ? "text-white/50" : "text-stone-dim/70"
                }`}>
                  {service.desc}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block font-sans font-bold text-accent text-sm uppercase tracking-[0.15em] hover:text-accent-light transition-colors duration-300"
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
