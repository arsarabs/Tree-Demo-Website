import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { MeetTheOwner } from "@/components/sections/MeetTheOwner";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Process } from "@/components/sections/Process";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FAQ } from "@/components/sections/FAQ";
import { QuoteSection } from "@/components/sections/QuoteSection";

const siteUrl = BIZ.url;

export function generateMetadata(): Metadata {
  const biz = getMetaBiz();
  const title = `${biz.name} | ${biz.city}, ${biz.state} — Free Estimates`;
  const description = `${biz.city}'s top-rated crew. Same-day service, upfront pricing, and ${biz.jobsCompleted} jobs completed. Serving ${biz.city} and surrounding areas. Get a free quote in minutes.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: biz.name,
      type: "website",
      images: [{ url: `${siteUrl}/our-junk-removal-team.jpg`, width: 1600, height: 1067, alt: `${biz.name} crew — ${biz.city} ${biz.state}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/our-junk-removal-team.jpg`] },
  };
}

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Stats />
      <Services />
      <MeetTheOwner />
      <BeforeAfter />
      <Process />
      <TrustBadges />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <QuoteSection />
    </main>
  );
}
