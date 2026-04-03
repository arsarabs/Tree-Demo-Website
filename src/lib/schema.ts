import { BUSINESS, LOCATIONS, SERVICES } from "./data";
import { BIZ } from "@/config/biz";

const SERVICE_AREAS = LOCATIONS.map((loc) => loc.city);

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#localbusiness`,
    name: BUSINESS.name,
    description:
      `Family-owned tree removal, trimming & stump grinding in ${BUSINESS.city}, ${BUSINESS.state}. Licensed, insured, ISA Certified Arborist. Free estimates. ${BUSINESS.rating}★ on Google. Serving all of Contra Costa County.`,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9101,
      longitude: -122.0652,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    image: "/our-junk-removal-team.jpg",
    sameAs: [],
    foundingDate: "2011",
    knowsLanguage: ["en", "es"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Karen L." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          `Derek and his crew took down a massive Valley Oak in our backyard that had been worrying us for years. They were on time, incredibly professional, and cleaned up so thoroughly that you'd never know a 60-foot tree had been there. Pricing was fair and exactly what they quoted.`,
        datePublished: "2026-03-10",
        locationCreated: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: "Walnut Creek", addressRegion: "CA" },
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Marcus T." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          `Called at 7am after a storm knocked a branch onto my fence. Rosa picked up immediately and had a crew out by 10. I was expecting a mess and a huge bill — it was neither. Seriously impressive.`,
        datePublished: "2026-02-15",
        locationCreated: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: "Concord", addressRegion: "CA" },
        },
      },
    ],
  };
}

export function getServiceSchemas() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.shortName,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#localbusiness`,
      name: BUSINESS.name,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  }));
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BIZ.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BUSINESS.url,
      },
    ],
  };
}

export function getAllSchemas() {
  return [
    getLocalBusinessSchema(),
    ...getServiceSchemas(),
    getFAQSchema(),
    getBreadcrumbSchema(),
  ];
}
