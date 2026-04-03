"use client";

import { SERVICES } from "@/lib/data";
import { usePersonalization } from "@/lib/personalization";
import { Breadcrumb, breadcrumbSchema } from "@/components/Breadcrumb";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import Link from "next/link";

const breadcrumbItems = [{ label: "Services", href: "/services" }];

export default function ServicesClient() {
  const biz = usePersonalization();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What tree services does ${biz.name} offer?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${biz.name} offers six core services: Tree Removal, Tree Trimming & Pruning, Stump Grinding, Emergency Storm Damage, Lot Clearing, and Cabling & Bracing across ${biz.city} ${biz.state} and all of Contra Costa County.`,
        },
      },
      {
        "@type": "Question",
        name: `Does ${biz.name} offer emergency tree service?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We respond to emergency storm damage calls 24/7, including nights, weekends, and holidays. Call (925) 847-3091 any time.",
        },
      },
      {
        "@type": "Question",
        name: `How much does tree removal cost in ${biz.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on the size, species, and location of the tree. Small trees run $350-$800. Large oaks near structures can be $2,500-$5,000+. We provide a free on-site estimate before any work begins.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main id="main-content" className="bg-dark min-h-screen">
        <PageHero
          label="Our Services"
          title="What We Do"
          subtitle={`From a single dead limb to a full lot clearing — ${biz.name} handles it all across ${biz.city} and all of Contra Costa County.`}
        />

        {/* Intro Content */}
        <section className="bg-dark px-6 lg:px-10 py-16 lg:py-20 border-b border-black/[0.06]">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone tracking-tight mb-6">
              {biz.city}&rsquo;s Full-Service Tree Care Team
            </h2>
            <div className="font-sans text-stone-dim text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                {biz.name} provides professional tree care across {biz.city}, {biz.state}
                {" "}and all of Contra Costa County. Whether you need a single dead limb removed
                or an entire lot cleared, our experienced crew handles every
                job with precision, professionalism, and transparent pricing. We have completed over{" "}
                {biz.jobsCompleted} jobs and maintain a {biz.rating}-star rating from{" "}
                {biz.reviewCount}+ verified customer reviews.
              </p>
              <p>
                Contra Costa County homeowners trust {biz.name} because we do things
                differently. Every job starts with a free, on-site estimate so you know exactly what
                you will pay before we touch a single branch. There are no hidden fees, no surprise
                charges, and no bait-and-switch pricing. Our crew handles everything — climbing,
                rigging, cutting, chipping, and cleanup — so you do not have to worry about a thing.
              </p>
              <p>
                Derek is an ISA Certified Arborist with over 25 years of experience, and he
                personally oversees every complex job. We never use subcontractors — every crew member
                is trained in-house. From tree removal and trimming to stump grinding, storm damage,
                and lot clearing, {biz.name}{" "}
                is the only call you need to make. Available Monday through Saturday, 7am to 6pm.{" "}
                <Link href="/about" className="text-accent hover:text-accent-light transition-colors">
                  Meet the team behind every job
                </Link>.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
              <Link href="/reviews" className="text-accent hover:text-accent-light transition-colors">
                See what our customers say &rarr;
              </Link>
              <Link href="/locations" className="text-accent hover:text-accent-light transition-colors">
                View all service areas &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Crew Photo */}
        <div className="bg-dark px-6 lg:px-10 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <img
                src="/our-junk-removal-team.jpg"
                alt={`Professional tree service crew ready for service in ${biz.city} ${biz.state}`}
                className="w-full h-auto"
                width={1200}
                height={800}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="bg-warm-gray px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.02]">
              {SERVICES.map((service, i) => (
                <ServiceCard
                  key={service.slug}
                  num={String(i + 1).padStart(2, "0")}
                  name={service.name}
                  description={service.description}
                  slug={service.slug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-dark px-6 lg:px-10 py-20 lg:py-28 border-t border-black/[0.06]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-accent/60 uppercase tracking-[0.25em] text-[11px] mb-4">
              Ready to get started?
            </p>
            <h2 className="font-serif font-bold text-stone text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="font-sans text-stone-dim text-lg leading-relaxed mb-10">
              Call us at{" "}
              <a
                href={`tel:${biz.phoneRaw}`}
                className="text-accent hover:text-accent-light transition-colors"
              >
                {biz.phone}
              </a>{" "}
              or fill out our contact form for a fast, no-obligation estimate.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-white font-sans font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 hover:bg-accent-light transition-colors duration-300"
            >
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
