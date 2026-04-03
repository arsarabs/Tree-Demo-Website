import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import PrivacyClient from "./PrivacyClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `Privacy Policy | ${biz.name}`;
  const description = `Privacy policy for ${biz.name}. Learn how we collect, use, and protect your information.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/privacy` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/privacy`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function PrivacyPage() {
  return <PrivacyClient />;
}
