"use client";

import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";

export function QuoteSection() {
  const biz = usePersonalization();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    setSubmitted(true);
    router.push("/thank-you");
  };

  return (
    <SectionWrapper id="quote" reveal="up" className="bg-[#133D2E] py-16 sm:py-20 lg:py-28 px-6 lg:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ═══ HOOK ═══ */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.88] tracking-[-0.03em] mb-8 text-white">
                Ready?
              </h2>
              <p className="font-sans text-white/60 text-base leading-relaxed mb-10 max-w-sm">
                Fill out the form or just call. We usually have same-week openings.
              </p>
            </div>

            <div>
              <a
                href={`tel:${biz.phoneRaw}`}
                className="block font-serif text-white text-[clamp(2rem,7vw,4.5rem)] leading-none tracking-tight hover:text-white/80 transition-colors duration-500 mb-6"
              >
                {biz.phone}
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
                <p className="font-sans text-xs uppercase tracking-[0.1em]">
                  {BIZ.hours}
                </p>
              </div>
            </div>
          </div>

          {/* ═══ BODY ═══ */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white border border-black/[0.06] rounded-2xl p-8 lg:p-12"
              >
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="hp-website">Website</label>
                  <input
                    id="hp-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    ref={honeypotRef}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="quote-name" className="font-sans text-stone-dim/70 text-[11px] uppercase tracking-[0.15em] block mb-2">
                      Your Name
                    </label>
                    <input id="quote-name" name="name" type="text" autoComplete="name" placeholder="John Smith" required className="form-input min-h-[48px]" />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="font-sans text-stone-dim/70 text-[11px] uppercase tracking-[0.15em] block mb-2">
                      Phone Number
                    </label>
                    <input id="quote-phone" name="phone" type="tel" autoComplete="tel" placeholder="(503) 555-1234" required className="form-input min-h-[48px]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="quote-email" className="font-sans text-stone-dim/70 text-[11px] uppercase tracking-[0.15em] block mb-2">
                      Email (Optional)
                    </label>
                    <input id="quote-email" name="email" type="email" autoComplete="email" placeholder="john@email.com" className="form-input min-h-[48px]" />
                  </div>
                  <div>
                    <label htmlFor="quote-service" className="font-sans text-stone-dim/70 text-[11px] uppercase tracking-[0.15em] block mb-2">
                      Service Type
                    </label>
                    <select id="quote-service" name="service" className="form-input min-h-[48px]" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option>Tree Removal</option>
                      <option>Tree Trimming &amp; Pruning</option>
                      <option>Stump Grinding</option>
                      <option>Emergency Storm Damage</option>
                      <option>Lot Clearing</option>
                      <option>Cabling &amp; Bracing</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="quote-message" className="font-sans text-stone-dim/70 text-[11px] uppercase tracking-[0.15em] block mb-2">
                    Tell Us About Your Job
                  </label>
                  <textarea id="quote-message" name="message" placeholder="What kind of tree work do you need? Size, species, location — any details help us quote faster." rows={4} className="form-input resize-none" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 mb-6 py-4 border-y border-black/[0.06]">
                  {["Licensed & Insured", "No Obligation", "Response in 15 min"].map((badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      <span className="font-sans text-stone-dim/60 text-[11px] uppercase tracking-[0.1em]">{badge}</span>
                    </div>
                  ))}
                </div>

                {/* ═══ CTA ═══ */}
                <button
                  type="submit"
                  className="w-full bg-accent rounded-lg px-8 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white cursor-pointer hover:bg-accent-light transition-colors duration-300 font-sans min-h-[56px]"
                >
                  Get My Free Quote
                </button>

                <p className="font-sans text-stone-dim/60 text-xs text-center mt-5">
                  No spam. We typically respond within 15 minutes.
                </p>
              </form>
            ) : (
              <div className="bg-white/10 border border-white/20 rounded-2xl p-12 lg:p-16 text-center animate-fadeInUp">
                <div className="w-16 h-16 rounded-xl border border-white/30 flex items-center justify-center mx-auto mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-white text-3xl mb-4">Quote Requested</h3>
                <p className="font-sans text-white/60 text-lg mb-8 max-w-sm mx-auto">
                  We&apos;ll be in touch within 15 minutes during business hours.
                </p>
                <a href={`tel:${biz.phoneRaw}`} className="font-sans text-white/50 text-sm hover:text-white transition-colors">
                  Can&apos;t wait? Call {biz.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
