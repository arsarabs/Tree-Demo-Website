import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import ReviewsClient from "./ReviewsClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `Reviews | ${biz.name} — ${biz.rating} Stars, ${biz.jobsCompleted} Jobs`;
  const description = `See what ${biz.city} customers say about ${biz.name}. ${biz.rating}-star rating from ${biz.reviewCount}+ completed jobs. Real reviews from real customers.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/reviews` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/reviews`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function ReviewsPage() {
  return <ReviewsClient />;
}
