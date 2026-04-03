"use client";

export function CrewPhoto() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/our-junk-removal-team-mobile.webp"
        srcSet="/our-junk-removal-team-mobile.webp 800w, /our-junk-removal-team.webp 1200w"
        sizes="100vw"
        alt="Highland Tree Service crew with truck in Walnut Creek CA"
        width={1200}
        height={800}
        className="w-full h-auto block"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        {/* ═══ HOOK ═══ */}
        <span className="font-satoshi text-xs font-medium tracking-widest uppercase mb-4 text-accent">
          The Team
        </span>
        <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-bold leading-none text-white">
          Our crew. Your trees.
        </h2>
        {/* ═══ BODY ═══ */}
        <p className="font-satoshi mt-4 text-lg max-w-lg text-white/70">
          We never use subcontractors. The people on this page are the
          same people who show up at your property.
        </p>
      </div>
    </section>
  );
}
