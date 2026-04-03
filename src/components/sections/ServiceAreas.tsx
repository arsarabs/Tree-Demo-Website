"use client";

import { Marquee } from "@/components/ui/marquee";
import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";

const defaultAreas = BIZ.serviceAreas;

export function ServiceAreas() {
  const biz = usePersonalization();
  const areas = biz.city === BIZ.city
    ? defaultAreas
    : [`${biz.city}`, `North ${biz.city}`, `South ${biz.city}`, `East ${biz.city}`, `West ${biz.city}`, `Downtown ${biz.city}`, `Greater ${biz.city}`, `${biz.city} Metro`];
  return (
    <section className="bg-dark border-b border-black/[0.06]">
      <div className="marquee-fade">
        <Marquee className="py-5">
          {areas.map((area) => (
            <span
              key={area}
              className="font-satoshi font-medium text-stone-dim/60 uppercase tracking-[0.3em] text-[10px] flex items-center gap-10 whitespace-nowrap"
            >
              {area}
              <span className="text-accent/30 text-[5px]">●</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
