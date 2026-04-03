"use client";

import { usePersonalization } from "@/lib/personalization";
import Link from "next/link";

export default function ThankYouClient() {
  const biz = usePersonalization();

  return (
    <div id="main-content" className="bg-dark px-6 lg:px-10 py-24 lg:py-36">
      <div className="max-w-2xl mx-auto text-center">
        {/* Checkmark */}
        <div className="w-16 h-16 border-2 border-accent/40 flex items-center justify-center mx-auto mb-8">
          <span className="text-accent text-2xl font-bold">&#10003;</span>
        </div>

        <h1 className="font-clash font-bold text-3xl sm:text-4xl lg:text-5xl text-stone tracking-tight mb-6">
          We Got Your Request!
        </h1>

        <p className="font-satoshi text-stone-dim text-lg sm:text-xl leading-relaxed mb-4">
          We&apos;ll call you back within 15 minutes during business hours.
        </p>

        <p className="font-satoshi text-stone-dim/60 text-base mb-10">
          Need to talk to someone right now? Give us a ring:
        </p>

        <a
          href={`tel:${biz.phoneRaw}`}
          className="inline-block bg-accent text-white font-satoshi font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 hover:bg-accent-light transition-colors duration-300 mb-6"
        >
          Call {biz.phone}
        </a>

        <div className="mt-10">
          <Link
            href="/"
            className="text-accent hover:text-accent-light transition-colors font-satoshi text-sm"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
