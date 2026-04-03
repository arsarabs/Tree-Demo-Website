"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { BIZ } from "@/config/biz";

function CompareSlider({ beforeSrc, afterSrc, alt, detail }: { beforeSrc: string; afterSrc: string; alt: string; detail: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = useCallback(() => setIsDragging(true), []);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="rounded-2xl overflow-hidden border border-black/[0.10]">
      <div
        ref={containerRef}
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] cursor-col-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onTouchMove={(e) => handleTouchMove(e.nativeEvent)}
        onClick={(e) => updatePosition(e.clientX)}
      >
        {/* After image (full width, behind) */}
        <Image
          src={afterSrc}
          alt={`After — ${alt}`}
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          style={{ objectFit: "cover" }}
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={`Before — ${alt}`}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            style={{ objectFit: "cover" }}
            draggable={false}
          />
          {/* Dark tint on before side */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-0.5 h-full bg-white shadow-lg" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A5C4B" strokeWidth="2.5" strokeLinecap="round">
              <path d="M8 6l-4 6 4 6" />
              <path d="M16 6l4 6-4 6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 z-20">
          <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-white/80">Before</span>
        </div>
        <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm rounded-lg px-3 py-1 z-20">
          <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-white">After</span>
        </div>
      </div>

      <div className="bg-warm-gray px-5 py-3">
        <p className="font-sans text-stone-dim/60 text-[11px] uppercase tracking-[0.15em]">
          {detail}
        </p>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <SectionWrapper id="work" reveal="clip" className="bg-dark py-14 sm:py-20 lg:py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl leading-[0.95] tracking-[-0.02em] text-stone">
            Before. <span className="text-accent italic">After.</span>
          </h2>
          <span className="font-sans text-stone-dim/60 text-xs uppercase tracking-[0.15em] hidden sm:inline">
            Drag to compare
          </span>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {BIZ.beforeAfter.map((photo) => (
            <CompareSlider
              key={photo.src}
              beforeSrc={photo.src}
              afterSrc={photo.src}
              alt={photo.alt}
              detail={photo.detail}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
