"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Shield, Award, Calendar, Globe, BadgeCheck } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "ISA Certified Arborist" },
  { icon: Award, label: "BBB A+ Rating" },
  { icon: Calendar, label: "14 Years in Business" },
  { icon: Globe, label: "Se Habla Español" },
  { icon: Shield, label: "$2M Insured" },
];

export function TrustBadges() {
  return (
    <SectionWrapper reveal="up" className="bg-warm-gray py-12 sm:py-14 border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/8 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <span className="font-sans text-stone-dim text-xs font-medium uppercase tracking-wider">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
