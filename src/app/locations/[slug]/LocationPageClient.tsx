"use client";

import Link from "next/link";
import { usePersonalization } from "@/lib/personalization";
import { SERVICES, BUSINESS, type LocationData } from "@/lib/data";
import { Breadcrumb, breadcrumbSchema } from "@/components/Breadcrumb";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { Trees, Scissors, CircleDot, Zap, LandPlot, Link2 } from "lucide-react";
import { MapPin } from "lucide-react";

const serviceIcons = [Trees, Scissors, CircleDot, Zap, LandPlot, Link2];

function localBusinessSchema(
  location: LocationData,
  biz: { name: string; phone: string; rating: string; reviewCount: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: biz.name,
    description: `Professional tree service in ${location.city}, ${location.state}. Family-owned tree removal, trimming, and stump grinding.`,
    url: `${BUSINESS.url}/locations/${location.slug}`,
    telephone: biz.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: BUSINESS.zip,
      addressCountry: "US",
    },
    image: `${BUSINESS.url}/our-junk-removal-team.jpg`,
    geo: { "@type": "GeoCoordinates", latitude: location.lat, longitude: location.lng },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    }],
    priceRange: "$$",
    areaServed: { "@type": "Place", name: `${location.city}, ${location.state}` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: biz.rating,
      reviewCount: biz.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function LocationPageClient({ location }: { location: LocationData }) {
  const biz = usePersonalization();

  const crumbs = [
    { label: "Locations", href: "/locations" },
    { label: location.city, href: `/locations/${location.slug}` },
  ];

  const schemas = [
    localBusinessSchema(location, biz),
    faqPageSchema(location.faqs),
    breadcrumbSchema(crumbs),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ── Compact header with location accent ── */}
      <section className="bg-warm-gray pt-28 pb-10 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={crumbs} />
          <div className="flex items-start gap-4 mb-3">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1] tracking-[-0.02em]">
                <span className="text-stone">Tree Service in </span>
                <span className="text-accent italic">{location.city}</span>
              </h1>
              <p className="font-sans text-stone-dim text-base sm:text-lg leading-relaxed mt-3 max-w-2xl">
                Professional tree care for homes and businesses across {location.city}. Free estimates. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content: sidebar layout ── */}
      <section id="main-content" className="px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column: content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Description */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone mb-6">
                {biz.name} Serves {location.city}
              </h2>
              <p className="font-sans text-stone-dim text-base sm:text-lg leading-[1.7]">
                {location.description}
              </p>
            </div>

            {/* Neighborhoods */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-stone mb-6">
                Neighborhoods We Serve
              </h2>
              <div className="flex flex-wrap gap-2">
                {location.neighborhoods.split(", ").map((hood) => (
                  <span
                    key={hood}
                    className="font-sans text-stone-dim text-sm bg-warm-gray rounded-full border border-black/[0.06] px-4 py-2"
                  >
                    {hood}
                  </span>
                ))}
              </div>
            </div>

            {/* Services grid */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-stone mb-6">
                Services in {location.city}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((service, i) => {
                  const Icon = serviceIcons[i] || Trees;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-3 bg-warm-gray rounded-xl p-4 border border-black/[0.06] hover:border-accent/20 transition-colors duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors shrink-0">
                        <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="font-sans text-stone text-sm font-medium group-hover:text-accent transition-colors duration-300">
                        {service.shortName}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-stone mb-8">
                {location.city} FAQ
              </h2>
              <FAQAccordion faqs={location.faqs} />
            </div>
          </div>

          {/* Right column: sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div>
                <h3 className="font-serif text-xl text-stone mb-4">
                  Free Quote in {location.city}
                </h3>
                <p className="font-sans text-stone-dim text-sm mb-6">
                  Tell us about your tree and we&apos;ll get back to you fast.
                </p>
                <QuoteForm compact />
              </div>

              {/* Quick links */}
              <div className="bg-warm-gray rounded-2xl p-6 border border-black/[0.06]">
                <h4 className="font-sans text-stone-dim text-xs uppercase tracking-[0.15em] mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <Link href="/" className="font-sans text-accent text-sm hover:text-accent-light transition-colors block">
                    &larr; Back to Home
                  </Link>
                  <Link href="/locations" className="font-sans text-accent text-sm hover:text-accent-light transition-colors block">
                    All Locations
                  </Link>
                  <Link href="/about" className="font-sans text-accent text-sm hover:text-accent-light transition-colors block">
                    Meet the Team
                  </Link>
                  <Link href="/reviews" className="font-sans text-accent text-sm hover:text-accent-light transition-colors block">
                    Customer Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
