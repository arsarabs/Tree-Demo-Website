/**
 * ═══════════════════════════════════════════════════════════════
 * BIZ CONFIG — Single source of truth for this client site.
 * Clone this file + update tailwind.config.ts accent color.
 * Everything else stays untouched.
 * ═══════════════════════════════════════════════════════════════
 */

export const BIZ = {
  // ─── Identity ───
  name: "Summit Tree Co.",
  tagline: "Austin's tree crew. Storm or sunshine.",
  founder: "Derek",
  founderTitle: "Owner & ISA Certified Arborist",
  yearsInBusiness: "9",

  // ─── Contact ───
  phone: "(512) 839-4722",
  phoneRaw: "+15128394722",
  street: "2901 S Lamar Blvd",
  city: "Austin",
  state: "TX",
  zip: "78704",
  url: "https://summittreeaustin.com",
  hours: "Mon–Sat · 7am–6pm",

  // ─── Social Proof ───
  rating: "4.8",
  reviewCount: "287",
  jobsCompleted: "3,200+",

  // ─── Brand ───
  accent: "#1B6B3A",       // Forest Green — update in tailwind.config.ts too
  accentLight: "#25884A",

  // ─── Service Areas (marquee) ───
  serviceAreas: [
    "Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville",
    "Lakeway", "Bee Cave", "Dripping Springs", "Kyle", "San Marcos",
  ],

  // ─── Testimonials ───
  testimonials: [
    {
      quote: "Big pecan in the backyard was dropping dead limbs every storm. They took it down in one morning. Not a scratch on the fence.",
      name: "Derek W.",
      detail: "Pecan Removal",
    },
    {
      quote: "Called at 6am after a storm split our live oak in half. Crew was here by 9. Saved the house.",
      name: "Maria L.",
      detail: "Emergency Storm Response",
    },
    {
      quote: "Five stumps from trees the last company left behind. All ground down in two hours. Should've called these guys first.",
      name: "Travis B.",
      detail: "Stump Grinding",
    },
  ],

  // ─── Process Steps ───
  process: [
    { num: "01", title: "Call or Text", desc: "Tell us what's going on. Dead limb, storm damage, overgrown lot — send us a photo." },
    { num: "02", title: "Free Estimate", desc: "We come out, look at the tree, and give you an honest number. No pressure." },
    { num: "03", title: "We Do the Work", desc: "Our crew shows up on time with the right equipment. Most jobs done in a day." },
    { num: "04", title: "Clean Yard", desc: "Every branch, every chip, every leaf — hauled off. You'd never know we were there." },
  ],

  // ─── Before/After Photos ───
  beforeAfter: [
    { src: "/before-after-1.webp", alt: "Before and after tree removal — dead pecan over driveway", detail: "Dead pecan removal · South Austin" },
    { src: "/before-after-2.webp", alt: "Before and after lot clearing — overgrown cedar thicket", detail: "Cedar clearing · Dripping Springs · 1/2 acre" },
  ],

  // ─── Homepage Services (display order, first is featured) ───
  homepageServices: [
    { num: "01", name: "Tree Removal", desc: "Dead trees, leaning trees, trees too close to the house. We take them down safe.", anchor: false },
    { num: "02", name: "Tree Trimming", desc: "Crown thinning, deadwood removal, clearance cuts. Keeps your trees healthy.", anchor: false },
    { num: "03", name: "Stump Grinding", desc: "That old stump in the yard? Gone in an hour. Ground below grade, filled with chips.", anchor: false },
    { num: "04", name: "Emergency Storm Damage", desc: "Tree on your roof, blocking your driveway, tangled in power lines. We respond 24/7.", anchor: true },
    { num: "05", name: "Lot Clearing", desc: "Brush, cedar, mesquite, dead timber. We clear the whole property.", anchor: false },
    { num: "06", name: "Hedge Trimming", desc: "Overgrown hedges shaped up and looking sharp. Regular maintenance available.", anchor: true },
  ],

  // ─── Homepage FAQs ───
  faqs: [
    { q: "How much does tree removal cost?", a: "Depends on the size, location, and complexity. A small tree runs $300–$800. A large oak near a structure can be $2,000–$5,000. We give free on-site estimates — no guessing." },
    { q: "Do you handle emergency calls?", a: "Yes. Storm damage, fallen trees, hanging limbs — we respond 24/7. If it's dangerous, call us and we'll be out as fast as we can." },
    { q: "Are you insured?", a: "Fully insured — general liability and workers' comp. Our owner is an ISA Certified Arborist. We carry proof on every job." },
    { q: "Do you own your own crane?", a: "Yes. For big trees in tight spaces, we bring our own crane. No subcontracting, no delays. If the job needs it, we have it." },
    { q: "Will you clean up after the job?", a: "Every time. Branches chipped, logs cut and hauled, site raked clean. We leave the yard better than we found it." },
    { q: "How do I get a free estimate?", a: "Call, text, or fill out the form on this page. We'll come look at the tree and give you a number on the spot. No obligation." },
  ],

  // ─── Social Proof Toast ───
  toastServices: [
    "tree removal", "stump grinding", "a free estimate",
    "emergency storm service", "tree trimming", "lot clearing",
  ],
} as const;

export type BizConfig = typeof BIZ;
