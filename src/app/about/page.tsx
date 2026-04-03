import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import AboutClient from "./AboutClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `About Us | ${biz.name} — ${biz.city} ${biz.state}`;
  const description = `Meet the crew behind ${biz.name}. Locally owned and operated in ${biz.city}, ${biz.state}. Licensed, insured, and trusted.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/about` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/about`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}
