import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import ContactClient from "./ContactClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `Contact Us | ${biz.name} — Get a Free Quote`;
  const description = `Get a free quote from ${biz.name}. Call ${biz.phone} or fill out our form. Same-day service available in ${biz.city}, ${biz.state} and surrounding areas.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/contact` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/contact`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
