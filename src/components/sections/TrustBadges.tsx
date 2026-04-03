"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Award, Calendar, Globe, BadgeCheck } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "ISA Certified Arborist" },
  { icon: Award, label: "BBB A+ Rating" },
  { icon: Calendar, label: "14 Years in Business" },
  { icon: Globe, label: "Se Habla Español" },
  { icon: Shield, label: "$2M Insured" },
];

export function TrustBadges() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark py-12 sm:py-14 border-y border-accent/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex flex-col items-center gap-3 text-center">
                <div
                  className={`trust-badge-icon w-14 h-14 rounded-xl bg-accent/8 flex items-center justify-center ${visible ? "visible" : ""}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <span
                  className={`font-sans text-stone-dim text-xs font-medium uppercase tracking-wider transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${i * 120 + 300}ms` }}
                >
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
