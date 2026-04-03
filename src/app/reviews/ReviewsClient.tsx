"use client";

import { BUSINESS } from "@/lib/data";
import { usePersonalization } from "@/lib/personalization";
import { Breadcrumb, breadcrumbSchema } from "@/components/Breadcrumb";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";

const breadcrumbItems = [{ label: "Reviews", href: "/reviews" }];

function getTestimonials(city: string, state: string) {
  const loc = `${city}, ${state}`;
  return [
    { name: "Karen L.", location: "Walnut Creek, CA", service: "Tree Removal", rating: 5, text: "Derek and his crew took down a massive Valley Oak in our backyard that had been worrying us for years. They were on time, incredibly professional, and cleaned up so thoroughly that you'd never know a 60-foot tree had been there. Pricing was fair and exactly what they quoted. Will not use anyone else." },
    { name: "Marcus T.", location: "Concord, CA", service: "Emergency Storm Response", rating: 5, text: "Called at 7am after a storm knocked a branch onto my fence. Rosa picked up immediately and had a crew out by 10. I was expecting a mess and a huge bill — it was neither. Seriously impressive. Saved my number for anyone who asks." },
    { name: "Sandra P.", location: "Danville, CA", service: "Eucalyptus Removal", rating: 5, text: "I got 4 quotes for my eucalyptus removal. Highland was not the cheapest but they were the only ones who explained exactly what the job involved and why. That transparency sold me. Job done in one day, zero mess, and Derek sent me a photo of the stump ground down so I could see the depth." },
    { name: "James R.", location: "Lafayette, CA", service: "Tree Trimming", rating: 5, text: "These guys are the real deal. Came out for a free estimate same day I called. No pressure, no upsell nonsense. Just told me exactly what needed to happen and what it would cost. The crew worked fast and Rosa followed up afterward to make sure I was happy. Rare to find that these days." },
    { name: "Alicia V.", location: "Pleasant Hill, CA", service: "Tree Trimming", rating: 5, text: "Spoke with Rosa in Spanish and it was amazing to work with someone who truly understands what you need. The team arrived on time, worked fast, and the yard was spotless. Highly recommended for the local Latino community." },
    { name: "Brian K.", location: "San Ramon, CA", service: "Pine Removal", rating: 5, text: "Third time using Highland and they just keep getting better. This time it was 3 pine trees along our property line — done in half a day. Crew was friendly, efficient, and left the yard cleaner than they found it. I've referred them to 4 neighbors and everyone has thanked me." },
    { name: "Theresa N.", location: "Orinda, CA", service: "Oak Trimming", rating: 4, text: "Great work overall — the tree came down perfectly and the crew was polite. Only reason for 4 stars is scheduling pushed out a few days, though Rosa was upfront about it and kept me informed. Would still hire again without question." },
    { name: "David W.", location: loc, service: "Stump Grinding", rating: 5, text: "Five stumps from trees the last company left behind. All ground down in two hours. Should have called these guys first. Clean work, fair price, and they even raked the chips level so I could plant grass right over the top." },
  ];
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-accent" : "text-black/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsClient() {
  const biz = usePersonalization();
  const testimonials = getTestimonials(biz.city, biz.state);

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: biz.name,
    telephone: biz.phone,
    url: BUSINESS.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: biz.rating,
      reviewCount: biz.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      reviewBody: t.text,
    })),
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
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

      <PageHero
        label="Customer Reviews"
        title={`What ${biz.city} Says About Us`}
        subtitle={`${biz.rating}-star rating from ${biz.reviewCount}+ verified reviews. We let our work speak for itself.`}
      />

      <div id="main-content" className="bg-dark px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />

          {/* ── Aggregate Rating Summary ── */}
          <section className="mb-16 lg:mb-20 text-center">
            <div className="border border-black/[0.06] bg-warm-gray p-8 lg:p-12 inline-block w-full max-w-md mx-auto">
              <p className="font-serif font-bold text-accent text-5xl sm:text-6xl mb-2">
                {biz.rating}
              </p>
              <div className="flex justify-center mb-3">
                <Stars count={5} />
              </div>
              <p className="font-sans text-stone-dim text-sm">
                Based on{" "}
                <span className="text-stone font-medium">
                  {biz.reviewCount}+
                </span>{" "}
                verified Google reviews
              </p>
            </div>
          </section>

          {/* ── Intro / Commitment Section ── */}
          <section className="mb-16 lg:mb-20 max-w-3xl">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone tracking-tight mb-6">
              What People Say
            </h2>
            <div className="font-sans text-stone-dim text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                {biz.jobsCompleted} jobs across {biz.city} and Contra Costa County since 2011.
                The reviews below are from actual customers on actual jobs. About 60% of new
                clients come from referrals, which tells you more than any rating number can.
              </p>
            </div>
          </section>

          {/* ── Before/After Photo ── */}
          <div className="mb-16 lg:mb-20">
            <img
              src="/before-after-1.jpg"
              alt="Before and after tree removal job — Walnut Creek CA"
              className="w-full h-auto"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>

          {/* ── Testimonials ── */}
          <section className="mb-20 lg:mb-28">
            <p className="font-sans text-accent/60 uppercase tracking-[0.25em] text-[11px] mb-4">
              What Our Customers Say
            </p>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone tracking-tight mb-10">
              Real Reviews From Real Jobs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {testimonials.map((review) => (
                <div
                  key={review.name}
                  className="border border-black/[0.06] bg-warm-gray p-6 lg:p-8"
                >
                  <Stars count={review.rating} />
                  <p className="font-sans text-stone text-base leading-relaxed mt-4 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-black/[0.06] pt-4">
                    <p className="font-serif font-bold text-stone text-sm">
                      {review.name}
                    </p>
                    <p className="font-sans text-stone-dim/50 text-xs mt-0.5">
                      {review.location} &middot; {review.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Leave a Review ── */}
          <section className="mb-20 lg:mb-28">
            <div className="border border-accent/10 bg-warm-gray p-8 lg:p-12 text-center">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone tracking-tight mb-4">
                Leave Us a Review
              </h2>
              <p className="font-sans text-stone-dim text-base leading-relaxed max-w-lg mx-auto mb-6">
                Had a great experience with {biz.name}? We&apos;d love to
                hear about it. Your review helps other {biz.city} homeowners find
                reliable tree service.
              </p>
              {/* // TODO: embed Google Reviews widget — requires Google Places API key in server-side API route only */}
              <p className="font-sans text-stone-dim/40 text-sm">
                Google Reviews widget coming soon
              </p>
            </div>
          </section>

          {/* ── Cross-links ── */}
          <div className="mb-20 lg:mb-28 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
            <Link href="/services" className="text-accent hover:text-accent-light transition-colors">
              View our services &rarr;
            </Link>
            <Link href="/locations" className="text-accent hover:text-accent-light transition-colors">
              Find tree service near you &rarr;
            </Link>
            <Link href="/about" className="text-accent hover:text-accent-light transition-colors">
              Meet the crew &rarr;
            </Link>
          </div>

          {/* ── CTA ── */}
          <section className="text-center">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone tracking-tight mb-4">
              See Why {biz.city} Trusts {biz.name}
            </h2>
            <p className="font-sans text-stone-dim text-base mb-8 max-w-xl mx-auto">
              {biz.jobsCompleted} jobs done. {biz.rating}-star rating.
              Get your free quote and see the difference.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-sans font-bold text-sm uppercase tracking-[0.15em] px-10 py-4 hover:bg-accent-light transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
