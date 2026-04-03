"use client";

import { BUSINESS, LOCATIONS } from "@/lib/data";
import { usePersonalization } from "@/lib/personalization";
import { Breadcrumb, breadcrumbSchema } from "@/components/Breadcrumb";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";

const breadcrumbItems = [{ label: "About", href: "/about" }];

export default function AboutClient() {
  const biz = usePersonalization();

  const founderName = biz.isDemo ? "The Owner" : "Derek";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founderName,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: biz.name,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: biz.name,
    url: BUSINESS.url,
    telephone: biz.phone,
    areaServed: biz.isDemo
      ? [{ "@type": "City", name: `${biz.city}, ${biz.state}` }]
      : LOCATIONS.map((loc) => ({
          "@type": "City",
          name: `${loc.city}, ${loc.state}`,
        })),
    founder: {
      "@type": "Person",
      name: founderName,
    },
    foundingDate: "2023",
    description:
      `${biz.city}'s trusted local tree service crew. Licensed, insured, and eco-friendly.`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: biz.rating,
      reviewCount: biz.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <PageHero
        label="About Us"
        title={`${biz.city}'s Local Tree Service Crew`}
        subtitle="Family-owned tree care serving Contra Costa County since 2011. Licensed, insured, ISA certified."
      />

      <div id="main-content" className="bg-dark px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />

          {/* ── Our Story ── */}
          <section className="mb-20 lg:mb-28">
            <p className="font-satoshi text-accent/60 uppercase tracking-[0.25em] text-[11px] mb-4">
              Our Story
            </p>
            <h2 className="font-clash font-bold text-3xl sm:text-4xl lg:text-5xl text-stone tracking-tight mb-8">
              Started With One Truck
            </h2>
            <div className="space-y-6 font-satoshi text-stone-dim text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                {biz.isDemo ? founderName : "Derek"} spent over a decade climbing trees for someone
                else&apos;s company. In 2011, after a rough windstorm ripped through the Ygnacio Valley
                corridor and left homeowners waiting weeks for help, {biz.isDemo ? "they" : "he and Rosa"}
                decided to bet on themselves.
              </p>
              <p>
                They started with one truck, a chipper they bought used off Craigslist, and a
                list of 40 neighbors Rosa had personally called. Their first year they did 94
                jobs. By year three, they had a full crew and more referrals than they could handle.
              </p>
              <p>
                {BUSINESS.yearsServing} years and {biz.jobsCompleted} jobs later, {biz.name} is
                the go-to crew for homeowners across Contra Costa County who want clean work, honest
                pricing, and a team that actually calls back.
              </p>
            </div>
            <div className="mt-10">
              <img
                src="/founder.jpg"
                alt={`Founder of ${biz.name} — local tree service crew`}
                className="w-full h-auto"
                width={1200}
                height={800}
                loading="lazy"
              />
            </div>
          </section>

          {/* ── Our Crew ── */}
          <section className="mb-20 lg:mb-28">
            <div className="border border-black/[0.06] bg-warm-gray p-8 lg:p-12">
              <p className="font-satoshi text-accent/60 uppercase tracking-[0.25em] text-[11px] mb-4">
                Our Crew
              </p>
              <h2 className="font-clash font-bold text-2xl sm:text-3xl text-stone tracking-tight mb-6">
                In-House Team. Never Subcontracted.
              </h2>
              <div className="space-y-5 font-satoshi text-stone-dim text-base leading-relaxed max-w-3xl">
                <p>
                  Every person who shows up at your property works for {biz.name}{" "}
                  directly. We don&apos;t subcontract, we don&apos;t use day
                  labor, and we don&apos;t send strangers to your home. Our crew
                  is trained by Derek personally and knows how to handle
                  everything from a dead limb over a power line to a full lot clearing.
                </p>
                <p>
                  We treat your property with respect — we protect your landscaping,
                  we don&apos;t tear up your lawn, and we rake and sweep when
                  the job is done. That&apos;s not a sales pitch. That&apos;s
                  just how we were raised.
                </p>
              </div>
              <div className="mt-8">
                <img
                  src="/our-junk-removal-team.jpg"
                  alt="Professional tree service crew ready for service"
                  className="w-full h-auto"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* ── Licensed & Insured ── */}
          <section className="mb-20 lg:mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-accent/30 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">
                      &#10003;
                    </span>
                  </div>
                  <h2 className="font-clash font-bold text-xl sm:text-2xl text-stone tracking-tight">
                    Licensed &amp; Insured
                  </h2>
                </div>
                <div className="space-y-4 font-satoshi text-stone-dim text-base leading-relaxed">
                  <p>
                    We hold California Contractor License #1084732 (C-61/D-49),
                    carry $2 million in general liability insurance, and have full
                    workers&apos; compensation coverage for every member of our crew.
                  </p>
                  <p>
                    Every job is covered. Every crew member is insured. No
                    exceptions.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-accent/30 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">
                      &#9830;
                    </span>
                  </div>
                  <h2 className="font-clash font-bold text-xl sm:text-2xl text-stone tracking-tight">
                    ISA Certified Arborist
                  </h2>
                </div>
                <div className="space-y-4 font-satoshi text-stone-dim text-base leading-relaxed">
                  <p>
                    Derek is an ISA Certified Arborist with over 25 years of
                    hands-on tree care experience. He personally assesses every
                    job and oversees every complex removal.
                  </p>
                  <p>
                    Proper pruning standards. No topping. No lion-tailing.
                    Just clean, correct cuts that protect your trees and your
                    property.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Stats Bar ── */}
          <section className="mb-20 lg:mb-28">
            <div className="border-y border-black/[0.06] py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: biz.jobsCompleted, label: "Jobs Completed" },
                { value: `${BUSINESS.yearsServing}+`, label: `Years in ${biz.city}` },
                { value: biz.rating, label: "Google Rating" },
                { value: `${biz.reviewCount}+`, label: "Customer Reviews" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-clash font-bold text-accent text-3xl sm:text-4xl mb-1">
                    {stat.value}
                  </p>
                  <p className="font-satoshi text-stone-dim/50 text-xs uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Cross-links ── */}
          <div className="mb-20 lg:mb-28 flex flex-wrap gap-x-6 gap-y-2 font-satoshi text-sm">
            <Link href="/locations" className="text-accent hover:text-accent-light transition-colors">
              See all the cities we serve &rarr;
            </Link>
            <Link href="/reviews" className="text-accent hover:text-accent-light transition-colors">
              Read what our customers say &rarr;
            </Link>
          </div>

          {/* ── CTA ── */}
          <section className="text-center">
            <h2 className="font-clash font-bold text-2xl sm:text-3xl text-stone tracking-tight mb-4">
              Ready to Take Care of Your Trees?
            </h2>
            <p className="font-satoshi text-stone-dim text-base mb-8 max-w-xl mx-auto">
              We serve {LOCATIONS.length} cities across the {biz.city} metro.
              Same-day service available for calls before noon.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-accent text-white font-satoshi font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 hover:bg-accent-light transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-block border border-black/[0.1] text-stone font-satoshi font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 hover:border-accent/30 hover:text-accent transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
