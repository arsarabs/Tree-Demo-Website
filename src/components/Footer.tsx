"use client";

import Link from "next/link";
import { SERVICES, LOCATIONS } from "@/lib/data";
import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";

export function Footer() {
  const biz = usePersonalization();
  const initials = biz.name.split(" ").filter(w => !["the","a","an"].includes(w.toLowerCase())).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return (
    <footer className="bg-grove py-12 pb-24 lg:pb-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-lg border border-white/20 flex items-center justify-center">
                <span className="font-serif font-bold text-white/50 text-[8px]">{initials}</span>
              </div>
              <span className="font-serif font-bold text-white/35 text-sm tracking-tight">
                {biz.name.toUpperCase()}
              </span>
            </div>
            <p className="font-sans text-white/35 text-xs mb-4">
              {biz.city}&apos;s trusted tree service crew.
            </p>
            <address className="not-italic">
              <p className="font-sans text-white/20 text-xs">
                {biz.name}
              </p>
              <p className="font-sans text-white/35 text-xs leading-relaxed">
                {biz.city}, {biz.state} &middot; Serving Contra Costa County
              </p>
              <a
                href={`tel:${biz.phoneRaw}`}
                className="font-sans text-white/50 text-xs hover:text-white/70 transition-colors"
              >
                {biz.phone}
              </a>
            </address>
          </div>

          {/* Services Links */}
          <div>
            <p className="font-sans text-white/50 text-[11px] uppercase tracking-[0.15em] mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-sans text-white/35 text-xs hover:text-white/70 transition-colors duration-200"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links */}
          <div>
            <p className="font-sans text-white/50 text-[11px] uppercase tracking-[0.15em] mb-4">
              {biz.isDemo ? "Service Area" : "Locations"}
            </p>
            <ul className="space-y-2">
              {biz.isDemo ? (
                [`${biz.city} Metro`, `North ${biz.city}`, `South ${biz.city}`, `East ${biz.city}`, `West ${biz.city}`].map((area) => (
                  <li key={area}>
                    <span className="font-sans text-white/35 text-xs">{area}</span>
                  </li>
                ))
              ) : (
                LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="font-sans text-white/35 text-xs hover:text-white/70 transition-colors duration-200"
                    >
                      {l.city}, {l.state}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Quick Links + Hours */}
          <div>
            <p className="font-sans text-white/50 text-[11px] uppercase tracking-[0.15em] mb-4">
              Company
            </p>
            <ul className="space-y-2 mb-6">
              {[
                { label: "About Us", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-white/35 text-xs hover:text-white/70 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-sans text-white/35 text-xs">
              {BIZ.hours}
            </p>
          </div>
        </div>

        {/* SEO keyword paragraph */}
        <p className="font-sans text-white/25 text-xs leading-relaxed mb-6 max-w-3xl">
          {biz.name} is a family-owned tree service company in {biz.city}, {biz.state} offering tree removal,
          tree trimming, stump grinding, and emergency storm damage response.
          ISA Certified Arborist. Licensed and insured. Serving all of Contra Costa County.
        </p>

        <div className="h-px bg-white/[0.08] mb-6" />

        {/* Legal row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-white/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} {biz.name} &middot; {biz.city}, {biz.state}
          </span>
          <span className="font-sans text-white/25 text-xs tracking-wide">
            Built by{" "}
            <span className="text-white/15 hover:text-white/40 transition-colors cursor-pointer">
              LaunchedOps
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
