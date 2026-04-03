"use client";

import { useEffect } from "react";
import { usePersonalization } from "@/lib/personalization";

export function DynamicHead() {
  const biz = usePersonalization();

  useEffect(() => {
    if (biz.isDemo) {
      document.title = `${biz.name} | ${biz.city}, ${biz.state} — Free Estimates`;
    }
  }, [biz]);

  if (!biz.isDemo) return null;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: biz.name,
    description: `${biz.city}'s trusted local service crew. Same-day service, upfront pricing, and ${biz.jobsCompleted} jobs completed.`,
    telephone: biz.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: biz.city,
      addressRegion: biz.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: biz.city,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: biz.rating,
      reviewCount: biz.reviewCount,
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
