"use client";

import { useEffect, useRef, useState } from "react";
import { BIZ } from "@/config/biz";

export function Process() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-grove py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(26,92,75,0.2)_0%,_transparent_50%)]" aria-hidden />
      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
        <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-[-0.03em] text-white mb-14 lg:mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          How it <span className="text-ember italic">works.</span>
        </h2>

        <div className="relative">
          {/* Drawing timeline line */}
          <div
            className={`absolute left-5 top-0 bottom-0 w-px bg-accent/40 timeline-line ${visible ? "visible" : ""}`}
            aria-hidden
          />

          <div className="space-y-12">
            {BIZ.process.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                {/* Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <span className="font-sans text-white text-xs font-bold">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pt-1.5 pb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-white/50 text-base leading-[1.7]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
