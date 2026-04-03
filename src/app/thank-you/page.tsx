import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import ThankYouClient from "./ThankYouClient";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `Thank You | ${biz.name}`;
  const description = `Thanks for reaching out to ${biz.name}. We'll get back to you within 15 minutes.`;

  return {
    title,
    description,
    robots: { index: false, follow: false },
    alternates: { canonical: `${siteUrl}/thank-you` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/thank-you`,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function ThankYouPage() {
  return <ThankYouClient />;
}
