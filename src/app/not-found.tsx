import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: `Page Not Found | ${BUSINESS.name}`,
  description: `The page you're looking for doesn't exist. Contact ${BUSINESS.name} for tree service in ${BUSINESS.city} ${BUSINESS.state}.`,
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-dark">
      <div className="max-w-lg text-center">
        <p className="font-sans text-sm uppercase tracking-[0.25em] text-accent/60 mb-4">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-stone-dim leading-relaxed mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <p className="font-sans text-stone-dim/60 text-sm mb-10">
          Need tree work done? Call us at{" "}
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="text-accent hover:text-accent-light transition-colors font-medium"
          >
            {BUSINESS.phone}
          </a>
        </p>
        <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="font-sans text-sm px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-light transition-colors min-h-[44px] flex items-center"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="font-sans text-sm px-6 py-3 border border-accent/20 text-accent hover:border-accent/50 transition-colors min-h-[44px] flex items-center"
          >
            Services
          </Link>
          <Link
            href="/locations"
            className="font-sans text-sm px-6 py-3 border border-accent/20 text-accent hover:border-accent/50 transition-colors min-h-[44px] flex items-center"
          >
            Locations
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sm px-6 py-3 border border-accent/20 text-accent hover:border-accent/50 transition-colors min-h-[44px] flex items-center"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </main>
  );
}
