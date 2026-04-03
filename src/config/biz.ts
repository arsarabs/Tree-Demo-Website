/**
 * ═══════════════════════════════════════════════════════════════
 * BIZ CONFIG — Single source of truth for this client site.
 * Highland Tree Service · Walnut Creek, CA
 * ═══════════════════════════════════════════════════════════════
 */

export const BIZ = {
  // ─── Identity ───
  name: "Highland Tree Service",
  tagline: "Your Neighborhood Tree Guys",
  founder: "Derek",
  founderTitle: "Co-founder & ISA Certified Arborist",
  cofounder: "Rosa",
  cofounderTitle: "Co-founder & Operations",
  yearsInBusiness: "14",

  // ─── Contact ───
  phone: "(925) 847-3091",
  phoneRaw: "+19258473091",
  street: "2814 Ygnacio Valley Rd, Suite 110",
  city: "Walnut Creek",
  state: "CA",
  zip: "94598",
  url: "https://highlandtreeservice.com",
  email: "hello@highlandtreeservice.com",
  hours: "Mon–Sat · 7am–6pm",
  license: "CA Contractor Lic. #1084732",

  // ─── Social Proof ───
  rating: "4.9",
  reviewCount: "187",
  jobsCompleted: "2,800+",

  // ─── Brand ───
  accent: "#1A5C4B",
  accentLight: "#227A63",

  // ─── Service Areas (marquee) ───
  serviceAreas: [
    "Walnut Creek", "Concord", "Pleasant Hill", "Danville", "San Ramon",
    "Lafayette", "Moraga", "Orinda", "Martinez", "Clayton",
  ],

  // ─── Testimonials ───
  testimonials: [
    {
      quote: "Derek and his crew took down a massive Valley Oak in our backyard that had been worrying us for years. On time, incredibly professional, and cleaned up so thoroughly you'd never know a 60-foot tree had been there.",
      name: "Karen L.",
      detail: "Valley Oak Removal",
    },
    {
      quote: "Called at 7am after a storm knocked a branch onto my fence. Rosa picked up immediately and had a crew out by 10. I was expecting a mess and a huge bill — it was neither.",
      name: "Marcus T.",
      detail: "Emergency Storm Response",
    },
    {
      quote: "I got 4 quotes for my eucalyptus removal. Highland was the only one who explained exactly what the job involved and why. Job done in one day, zero mess.",
      name: "Sandra P.",
      detail: "Eucalyptus Removal",
    },
  ],

  // ─── Process Steps ───
  process: [
    { num: "01", title: "Call or Text", desc: "Tell us what's going on. Dead limb, storm damage, overgrown lot — send us a photo if you can." },
    { num: "02", title: "Free Estimate", desc: "We come out, look at the tree, and give you an honest number. No pressure, no obligation." },
    { num: "03", title: "We Do the Work", desc: "Our crew shows up on time with the right equipment. Most jobs done in a day." },
    { num: "04", title: "Clean Property", desc: "Every branch, every chip, every leaf — hauled off. You'd never know we were there." },
  ],

  // ─── Before/After Photos ───
  beforeAfter: [
    { src: "/before-after-1.webp", alt: "Before and after tree removal — dead oak over driveway in Walnut Creek", detail: "Dead oak removal · Walnut Creek" },
    { src: "/before-after-2.webp", alt: "Before and after lot clearing — overgrown eucalyptus grove", detail: "Eucalyptus clearing · Danville · 1/3 acre" },
  ],

  // ─── Homepage Services (display order, first is featured) ───
  homepageServices: [
    { num: "01", name: "Tree Removal", desc: "Dead trees, hazard trees, trees too close to the house. We take them down safe.", anchor: false },
    { num: "02", name: "Tree Trimming", desc: "Crown thinning, deadwood removal, clearance cuts. Keeps your trees healthy.", anchor: false },
    { num: "03", name: "Stump Grinding", desc: "That old stump in the yard? Gone in an hour. Ground below grade, filled with chips.", anchor: false },
    { num: "04", name: "Emergency Storm Damage", desc: "Tree on your roof, blocking your driveway, tangled in power lines. We respond 24/7.", anchor: true },
    { num: "05", name: "Lot Clearing", desc: "New construction, fire clearance, or overgrowth. We clear the whole property.", anchor: false },
    { num: "06", name: "Cabling & Bracing", desc: "Structural support for split or leaning trees you want to save.", anchor: true },
  ],

  // ─── Homepage FAQs ───
  faqs: [
    { q: "Do you offer free estimates?", a: "Yes — all estimates are free, on-site, and come with no obligation. We typically schedule within 24–48 hours." },
    { q: "Are you licensed and insured?", a: "Yes. We hold California Contractor License #1084732 (C-61/D-49), carry $2 million in general liability insurance, and have full workers' comp coverage for every crew member." },
    { q: "Do you use subcontractors?", a: "Never. Every job is done by our own trained crew. You'll see the same faces every time you work with us." },
    { q: "How soon can you get out to my property?", a: "Most non-emergency jobs are scheduled within 3–7 days. Emergency storm response is available 24/7 — call (925) 847-3091 any time." },
    { q: "Do you clean up after the job?", a: "Always. We haul away all debris, branches, and wood chips unless you'd like them left. Stump grinding chips can be left as mulch at no extra charge." },
    { q: "What areas do you serve?", a: "We serve all of Contra Costa County including Walnut Creek, Concord, Pleasant Hill, Danville, San Ramon, Lafayette, Moraga, Orinda, Martinez, and Clayton." },
  ],

  // ─── Social Proof Toast ───
  toastServices: [
    "tree removal", "stump grinding", "a free estimate",
    "emergency storm service", "tree trimming", "lot clearing",
  ],
} as const;

export type BizConfig = typeof BIZ;
