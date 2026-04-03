"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";

const allTestimonials = [
  ...BIZ.testimonials,
  {
    quote: "Called at 9am, they were here by noon. Two guys cleared my entire basement in about 90 minutes. Unreal.",
    name: "David R.",
    detail: "Basement Cleanout",
  },
  {
    quote: "We had an entire apartment full of stuff after a tenant left. They didn't blink. Priced it fair, got it done fast.",
    name: "Lisa M.",
    detail: "Rental Turnover",
  },
  {
    quote: "Honest pricing, showed up when they said they would, and swept the driveway after. That's all I ask.",
    name: "James P.",
    detail: "Garage Cleanout",
  },
  {
    quote: "I called three companies. Two never called back. These guys quoted me in 10 minutes and were at my place the next morning.",
    name: "Rachel T.",
    detail: "Furniture Removal",
  },
];

// Split into 3 columns
const col1 = [allTestimonials[0], allTestimonials[3], allTestimonials[1], allTestimonials[4]];
const col2 = [allTestimonials[2], allTestimonials[0], allTestimonials[5], allTestimonials[3]];
const col3 = [allTestimonials[1], allTestimonials[4], allTestimonials[2], allTestimonials[5]];

function TestimonialCard({ quote, name, detail, city, state }: { quote: string; name: string; detail: string; city: string; state: string }) {
  return (
    <div className="p-8 border border-black/[0.08] bg-elevated hover:border-accent/20 transition-colors duration-500 mb-4">
      <p className="font-satoshi text-stone text-base leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-accent/30" />
        <div>
          <span className="font-satoshi text-accent/80 text-sm font-medium block">{name}</span>
          <span className="font-satoshi text-stone-dim/50 text-xs">{city}, {state} · {detail}</span>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({ testimonials, duration, direction, city, state }: { testimonials: typeof allTestimonials; duration: number; direction: "up" | "down"; city: string; state: string }) {
  const y = direction === "up" ? "-50%" : "0%";
  const yInitial = direction === "up" ? "0%" : "-50%";

  return (
    <div className="overflow-hidden h-[600px] relative">
      {/* Top/bottom fade masks */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-elevated to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-elevated to-transparent z-10 pointer-events-none" />
      <motion.div
        animate={{ translateY: [yInitial, y] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col"
      >
        {/* Duplicate for seamless loop */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} quote={t.quote} name={t.name} detail={t.detail} city={city} state={state} />
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  const biz = usePersonalization();

  return (
    <SectionWrapper reveal="up" className="bg-elevated py-20 sm:py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* ═══ HOOK ═══ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="font-clash font-bold text-5xl sm:text-7xl lg:text-8xl leading-none tracking-[-0.03em] text-stone">
            Don&apos;t take<br />
            <span className="text-accent">our word.</span>
          </h2>
          <p className="font-satoshi text-stone-dim/70 text-sm max-w-xs leading-relaxed lg:text-right">
            Real reviews from real customers in {biz.city}.
          </p>
        </div>

        {/* ═══ BODY ═══ */}
        {/* Desktop: 3 scrolling columns */}
        <div className="hidden lg:grid grid-cols-3 gap-4">
          <ScrollColumn testimonials={col1} duration={25} direction="up" city={biz.city} state={biz.state} />
          <ScrollColumn testimonials={col2} duration={30} direction="down" city={biz.city} state={biz.state} />
          <ScrollColumn testimonials={col3} duration={22} direction="up" city={biz.city} state={biz.state} />
        </div>

        {/* Mobile: static cards */}
        <div className="lg:hidden space-y-4">
          {allTestimonials.slice(0, 4).map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} name={t.name} detail={t.detail} city={biz.city} state={biz.state} />
          ))}
        </div>

        {/* ═══ CTA ═══ */}
        <div className="mt-16 lg:mt-20 text-center">
          <Link
            href="/reviews"
            className="link-underline inline-block font-satoshi font-bold text-accent text-sm uppercase tracking-[0.15em] hover:text-accent-light transition-colors duration-300"
          >
            Read All Reviews
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
