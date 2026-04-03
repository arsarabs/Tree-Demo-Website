"use client";

import { usePersonalization } from "@/lib/personalization";
import { BIZ } from "@/config/biz";

export function DynamicSchemas() {
  const biz = usePersonalization();

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: biz.name,
    description: `${biz.city}'s top-rated crew. Same-day service, upfront pricing, and ${biz.jobsCompleted} jobs completed.`,
    url: BIZ.url,
    telephone: biz.phone,
    image: `${BIZ.url}/our-junk-removal-team.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...(biz.isDemo ? {} : { streetAddress: BIZ.street }),
      addressLocality: biz.city,
      addressRegion: biz.state,
      ...(biz.isDemo ? {} : { postalCode: BIZ.zip }),
      addressCountry: "US",
    },
    areaServed: biz.isDemo
      ? { "@type": "City", name: biz.city }
      : BIZ.serviceAreas.map((a) => a),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: biz.rating,
      reviewCount: biz.reviewCount,
      bestRating: "5",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BIZ.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
          .replace(/the city/g, biz.city)
          .replace(/\(503\) 555-0100/g, biz.phone),
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BIZ.url },
    ],
  };

  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".hero-sub", ".faq-answer"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  );
}
