"use client";

import Link from "next/link";
import { usePersonalization } from "@/lib/personalization";
import { SERVICES, BUSINESS, type ServiceData } from "@/lib/data";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { Breadcrumb, breadcrumbSchema } from "@/components/Breadcrumb";
import { Trees, Scissors, CircleDot, Zap, LandPlot, Link2 } from "lucide-react";

const serviceIcons = [Trees, Scissors, CircleDot, Zap, LandPlot, Link2];

export function ServicePageClient({ service }: { service: ServiceData }) {
  const biz = usePersonalization();
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const crumbs = [
    { label: "Services", href: "/services" },
    { label: service.name, href: `/services/${service.slug}` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription,
    serviceType: service.shortName,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#localbusiness`,
      name: biz.name,
      telephone: biz.phone,
      url: BUSINESS.url,
    },
    areaServed: {
      "@type": "City",
      name: biz.city,
      containedInPlace: { "@type": "State", name: biz.state },
    },
    url: `${BUSINESS.url}/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = breadcrumbSchema(crumbs);

  return (
    <main id="main-content" className="bg-dark min-h-screen">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── Compact header ── */}
      <section className="bg-warm-gray pt-28 pb-10 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={crumbs} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1] tracking-[-0.02em] mb-3">
            <span className="text-stone">{service.name}</span>{" "}
            <span className="text-accent italic">in {biz.city}</span>
          </h1>
          <p className="font-sans text-stone-dim text-base sm:text-lg leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* ── Horizontal service nav ── */}
      <div className="bg-dark border-b border-black/[0.06] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-1 overflow-x-auto hide-scrollbar py-3">
            {SERVICES.map((s, i) => {
              const Icon = serviceIcons[i] || Trees;
              const isActive = s.slug === service.slug;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-stone-dim hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {s.shortName}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main content: sidebar layout ── */}
      <section className="px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl text-stone mb-6">
                About This Service
              </h2>
              <div className="font-sans text-stone-dim text-base sm:text-lg leading-[1.7] space-y-4">
                <p>
                  {service.longDescription}{" "}
                  <Link href="/about" className="text-accent hover:text-accent-light transition-colors">
                    Learn about our crew
                  </Link> and why {biz.city} trusts us to get the job done right.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/locations"
                  className="font-sans text-accent text-sm hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  View all service areas &rarr;
                </Link>
                <Link
                  href="/reviews"
                  className="font-sans text-accent text-sm hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  Read customer reviews &rarr;
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone mb-8">
                {service.shortName} FAQ
              </h2>
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>

          {/* Right: sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Quote form */}
              <div>
                <h3 className="font-serif text-xl text-stone mb-4">
                  Get Your Quote
                </h3>
                <QuoteForm compact />
              </div>

              {/* Quick stats */}
              <div className="bg-warm-gray rounded-2xl p-6 border border-black/[0.06]">
                <h4 className="font-sans text-stone-dim text-xs uppercase tracking-[0.15em] mb-4">Why Highland</h4>
                <div className="space-y-4">
                  {[
                    { value: biz.jobsCompleted, label: "Jobs Completed" },
                    { value: `${biz.rating} Stars`, label: `${biz.reviewCount} Google Reviews` },
                    { value: "14 Years", label: "Serving Contra Costa County" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-baseline justify-between">
                      <span className="font-serif text-accent text-lg">{stat.value}</span>
                      <span className="font-sans text-stone-dim/50 text-xs">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="bg-warm-gray px-6 lg:px-10 py-16 lg:py-24 border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-stone mb-10">
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => {
              const svcIndex = SERVICES.findIndex((svc) => svc.slug === s.slug);
              const Icon = serviceIcons[svcIndex] || Trees;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-dark rounded-xl p-6 border border-black/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-stone text-lg group-hover:text-accent transition-colors duration-300">
                      {s.name}
                    </h3>
                  </div>
                  <p className="font-sans text-stone-dim/60 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
