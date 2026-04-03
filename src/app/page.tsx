import type { Metadata } from "next";
import { BIZ } from "@/config/biz";
import { getMetaBiz } from "@/lib/metadata-helpers";
import { Hero } from "@/components/sections/Hero";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Stats } from "@/components/sections/Stats";
import { CrewPhoto } from "@/components/sections/CrewPhoto";
import { MeetTheOwner } from "@/components/sections/MeetTheOwner";
import { Testimonials } from "@/components/sections/Testimonials";
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
      <ServiceAreas />
      <Process />
      <Services />
      <BeforeAfter />
      <Stats />
      <CrewPhoto />
      <MeetTheOwner />
      <Testimonials />
      <FAQ />
      <QuoteSection />
    </main>
  );
}
