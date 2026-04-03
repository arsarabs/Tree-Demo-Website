import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import ServicesClient from "./ServicesClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `Our Services | ${biz.name} — ${biz.city} ${biz.state}`;
  const description = `Full-service solutions in ${biz.city}, ${biz.state}. Same-day service, upfront pricing. Free quotes from ${biz.name}.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/services` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/services`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function ServicesPage() {
  return <ServicesClient />;
}
