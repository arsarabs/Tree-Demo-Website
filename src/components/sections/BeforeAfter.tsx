"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { BIZ } from "@/config/biz";

export function BeforeAfter() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <SectionWrapper id="work" reveal="scale" className="bg-warm-gray py-14 sm:py-18 lg:py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* ═══ HOOK ═══ */}
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-clash font-bold text-3xl sm:text-4xl leading-[0.9] tracking-tight text-stone">
              Before. <span className="text-accent">After.</span>
            </h2>
            <span className="font-satoshi text-stone-dim/60 text-xs uppercase tracking-[0.15em] hidden sm:inline">
              Tap to enlarge
            </span>
          </div>

          {/* ═══ BODY ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
            {BIZ.beforeAfter.map((photo, i) => (
              <div
                key={photo.src}
                className={`overflow-hidden border border-black/[0.10] group hover:border-accent/20 transition-colors duration-500 cursor-pointer ${
                  i === 0 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
                onClick={() => setLightboxSrc(photo.src)}
              >
                <div className={`relative w-full overflow-hidden ${
                  i === 0 ? "h-[300px] sm:h-[400px] lg:h-[460px]" : "h-[300px] sm:h-[400px] lg:h-[420px]"
                }`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 42vw"}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="group-hover:scale-[1.02] transition-transform duration-700 ease-out-expo"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-black/70 backdrop-blur-sm px-3 py-1">
                      <span className="font-satoshi text-[10px] font-medium tracking-widest uppercase text-white/70">Before</span>
                    </div>
                    <div className="bg-black/70 backdrop-blur-sm px-3 py-1">
                      <span className="font-satoshi text-[10px] font-medium tracking-widest uppercase text-accent">After</span>
                    </div>
                  </div>
                </div>
                <div className="bg-dark/50 px-5 py-3">
                  <p className="font-satoshi text-stone-dim/60 text-[11px] uppercase tracking-[0.15em]">
                    {photo.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Fullscreen lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 z-10 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-satoshi text-white/30 text-xs uppercase tracking-[0.15em]">
            Tap anywhere to close
          </p>
          <div
            className="max-w-[95vw] max-h-[90vh] overflow-auto hide-scrollbar cursor-default animate-zoomFadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt="Before and after — full size"
              className="w-auto h-auto max-w-none max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
