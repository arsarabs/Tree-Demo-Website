import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import TermsClient from "./TermsClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `Terms of Service | ${biz.name}`;
  const description = `Terms of service for ${biz.name} services in ${biz.city}, ${biz.state}.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/terms` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/terms`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function TermsPage() {
  return <TermsClient />;
}
