import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import LocationsClient from "./LocationsClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `Service Areas | ${biz.name} — ${biz.city} ${biz.state} Metro`;
  const description = `${biz.name} serves ${biz.city}, ${biz.state} and the surrounding metro area. Same-day service, upfront pricing.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/locations` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/locations`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function LocationsPage() {
  return <LocationsClient />;
}
