import { BIZ } from "@/config/biz";

export const BUSINESS = {
  name: BIZ.name,
  phone: BIZ.phone,
  phoneRaw: BIZ.phoneRaw,
  street: BIZ.street,
  city: BIZ.city,
  state: BIZ.state,
  zip: BIZ.zip,
  url: BIZ.url,
  hours: BIZ.hours,
  rating: BIZ.rating,
  reviewCount: BIZ.reviewCount,
  jobsCompleted: BIZ.jobsCompleted,
  yearsServing: BIZ.yearsInBusiness,
};

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    shortName: "Tree Removal",
    description: "Dead trees, hazard trees, trees too close to the house — removed safe and clean.",
    longDescription:
      "Some trees need to come down. Maybe it's dead and dropping limbs on your roof. Maybe it's leaning toward your neighbor's fence. Maybe the roots are cracking your foundation. Whatever the reason, our crew handles tree removal across Contra Costa County every single day. We remove trees of all sizes — from small ornamental trees to 80-foot valley oaks wedged between a house and a power line. We use rigging, sectional dismantling, and crane-assisted removal depending on what the job calls for. Every cut is planned. Every drop zone is cleared. Our ground crew handles cleanup as we go — branches chipped, trunk sections cut to manageable rounds, and the whole area raked clean when we're done. We're fully insured with $2M general liability and workers' comp, and we carry proof on every job. Derek has over 25 years of hands-on experience and personally oversees every complex removal. If the tree is near a structure, a fence, or utility lines, we've done hundreds of jobs just like it. We don't rush, we don't cut corners, and we don't leave a mess. Stump grinding is available as an add-on — most homeowners bundle it with the removal to get the yard fully cleared in one visit.",
    faqs: [
      { q: "How much does tree removal cost in Walnut Creek?", a: "Small trees (under 25 feet) typically run $350–$800. Medium trees are $800–$2,500. Large oaks or eucalyptus near structures can be $2,500–$5,000+. We give free on-site estimates so there's no guesswork." },
      { q: "Can you remove a tree close to my house?", a: "Yes — that's what we specialize in. We use ropes, rigging, and sectional cuts to bring trees down piece by piece in tight spaces. No damage to the house, the fence, or the landscaping." },
      { q: "Do you remove the stump too?", a: "Stump grinding is a separate service but we can do it the same day. Most homeowners bundle removal + grinding to get everything done in one visit." },
      { q: "How long does a tree removal take?", a: "Most single-tree removals take 2–6 hours depending on size and access. Very large trees or crane jobs may take a full day. We'll give you a time estimate with your quote." },
      { q: "Do I need a permit to remove a tree in Walnut Creek?", a: "Walnut Creek has a tree preservation ordinance that protects certain trees. We know the local rules and can help you figure out if you need a permit before we start work." },
    ],
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming & Pruning",
    shortName: "Tree Trimming",
    description: "Crown thinning, deadwood removal, clearance cuts — keeps trees healthy and safe.",
    longDescription:
      "Trimming isn't just cosmetic. It's how you keep trees healthy, keep limbs off your roof, and keep your yard safe during winter storm season. Derek is an ISA Certified Arborist and oversees every trimming job to make sure we're cutting for the right reasons — not just hacking branches. We do crown thinning to let light and air through the canopy. We do crown raising to clear rooflines, driveways, and sidewalks. We remove deadwood before it falls on someone. And we do structural pruning on younger trees so they grow strong instead of splitting apart in ten years. We trim all species common to the East Bay — valley oak, coast live oak, bay laurel, redwood, eucalyptus, Monterey pine, and more. We follow ANSI A300 pruning standards. No topping. No lion-tailing. No flush cuts. Just clean, proper cuts that heal fast and keep the tree in good shape for years. Our crew handles all debris — branches chipped on-site, leaves raked, driveway swept. You won't find a single twig left behind. Regular trimming every 2–3 years is the best thing you can do for your trees.",
    faqs: [
      { q: "How much does tree trimming cost?", a: "Most single-tree trimming jobs run $175–$1,000 depending on size and access. A full property with multiple trees might run $1,000–$2,500. We quote on-site — no guessing." },
      { q: "When is the best time to trim trees in the East Bay?", a: "For most species, late fall through early spring (dormant season) is ideal. Some species have specific timing requirements — we'll advise you on the best window for your trees." },
      { q: "What's the difference between trimming and pruning?", a: "Trimming usually refers to shaping and clearance work. Pruning is more targeted — removing specific branches for health or structure. We do both, and Derek decides the right approach for each tree." },
      { q: "Will trimming hurt my tree?", a: "Not when it's done right. We never remove more than 25% of the canopy in a single session. We use proper cuts at the branch collar so the tree heals quickly. No topping, ever." },
      { q: "Do you handle trees near power lines?", a: "Yes, with proper clearance protocols. For trees directly on utility lines, we coordinate with PG&E when required. Derek will assess on-site and explain the plan clearly before any work begins." },
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    shortName: "Stump Grinding",
    description: "Old stumps ground below grade in about an hour. Yard looks brand new.",
    longDescription:
      "That stump in your yard isn't going anywhere on its own. It'll sit there for a decade, sprouting suckers, attracting termites, and ruining your mowing line. Our stump grinder chews it down 8–12 inches below grade in about an hour. We grind the stump, the surface roots, and the root flare — everything that's visible gets pulverized into wood chips. Those chips fill the hole and decompose naturally over time. You can plant grass seed right over the top. Most residential stumps take 30–60 minutes. Bigger stumps from large oaks or eucalyptus might take a couple hours. We can grind multiple stumps in a single visit — and we give a per-stump discount when you bundle. Our grinder fits through a standard 36-inch gate, so backyard stumps are no problem. We handle everything from small ornamental stumps to massive valley oak stumps that are 4 feet across. After grinding, we rake the chips level and leave the area clean. If you want the chips hauled away instead, we can do that too.",
    faqs: [
      { q: "How much does stump grinding cost?", a: "Most stumps cost $125–$400 depending on diameter and root spread. Large stumps (3+ feet) can run $400–$600. We discount multiple stumps on the same property." },
      { q: "How deep do you grind?", a: "We grind 8–12 inches below grade. That's deep enough to plant grass, lay sod, or install landscaping. If you need deeper for a construction project, just let us know." },
      { q: "What happens to the wood chips?", a: "We leave them in the hole to decompose naturally. They make good mulch. If you'd rather we haul them away, we can do that for a small additional fee." },
      { q: "Can you grind a stump in my backyard?", a: "Yes — our grinder fits through a standard 36-inch gate. If access is tighter than that, we have smaller equipment that can get into almost any space." },
      { q: "Will stump grinding kill the roots?", a: "Grinding removes the stump and surface roots. The underground roots will decompose naturally over 2–5 years. They won't regrow once the stump is gone." },
    ],
  },
  {
    slug: "emergency-storm-damage",
    name: "Emergency Storm Damage",
    shortName: "Storm Damage",
    description: "Tree on your roof? Blocking the road? Tangled in wires? We respond 24/7.",
    longDescription:
      "East Bay storms don't wait for business hours. When a tree falls on your house at 2am, you need a crew that picks up the phone and shows up fast. We provide 24/7 emergency tree service across Contra Costa County. Fallen trees on roofs, split trunks blocking driveways, hanging limbs tangled in power lines — we've handled all of it hundreds of times. Our emergency crew arrives with chainsaws, rigging gear, and the experience to work safely around damaged structures and live wires. We stabilize the situation first — get the tree off your roof, clear the driveway, secure any hanging sections. Then we come back to finish removal and cleanup once conditions are safe. We work directly with insurance companies and provide the documentation they need — photos, written estimates, and scope-of-work summaries. Most homeowner's insurance covers storm damage tree removal. We'll help you file the claim. Winter storm season in the East Bay brings atmospheric rivers, heavy rain, and high winds that snap limbs and uproot trees with no warning. If you've got a dead tree or a tree with a bad lean, getting it handled before storm season is the smartest move. But when the storm hits first, we're the crew to call.",
    faqs: [
      { q: "Do you respond to emergencies at night?", a: "Yes — we take emergency calls 24/7, including nights, weekends, and holidays. If a tree is on your roof or blocking your way out, call us and we'll dispatch a crew." },
      { q: "How fast can you get to an emergency?", a: "For true emergencies (tree on structure, blocking road, near power lines), we aim to be on-site within 2–4 hours. During major storms, demand is high — but active dangers take priority." },
      { q: "Does insurance cover storm damage tree removal?", a: "In most cases, yes — if the tree damaged a structure or is blocking access. We provide photos, written estimates, and detailed documentation to help with your claim." },
      { q: "What should I do if a tree falls on my house?", a: "Get everyone out of the affected area. Don't try to remove it yourself. Call us at (925) 847-3091, then call your insurance company. We'll handle the tree and help you through the insurance process." },
      { q: "Is emergency service more expensive?", a: "Emergency rates are higher than scheduled work due to the urgency and after-hours response. But we still quote before we start, and we never gouge. Most emergency removals run $1,000–$4,000 depending on severity." },
    ],
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    shortName: "Lot Clearing",
    description: "New construction, fire clearance, or overgrowth — full lot clearing with debris removal.",
    longDescription:
      "Got a property that's overgrown with eucalyptus, scrub oak, dead timber, and brush? We clear lots across Contra Costa County for homeowners, builders, and developers. Whether it's a quarter-acre backyard that's turned into a jungle or a multi-acre parcel that needs prepping for construction, our crew handles it. We cut, stack, chip, and haul. Eucalyptus is the big one out here. It grows fast, drops bark and limbs constantly, and is a serious fire hazard. We clear eucalyptus selectively or take it all — whatever you need. We also handle dead oaks, invasive acacias, and any other trees that have taken over. For larger properties, we bring in skid steers and forestry mulchers to chew through brush at ground level. For smaller residential lots, our crew works with chainsaws and a chipper. Either way, you get a clean, usable lot when we're done. We can preserve specific trees you want to keep — just mark them and we'll work around them. We haul all debris off-site unless you want the chips left for mulch. Lot clearing is also smart fire mitigation — creating defensible space around structures reduces wildfire risk, a growing concern in the East Bay hills.",
    faqs: [
      { q: "How much does lot clearing cost?", a: "Residential lots (under half acre) typically run $1,500–$5,000 depending on density. Larger parcels are quoted per acre. We give free on-site estimates." },
      { q: "Can you clear just the eucalyptus and leave the oaks?", a: "Absolutely. Selective clearing is one of our most common requests. We'll remove the eucalyptus or whatever you want gone, and leave the trees you want to keep untouched." },
      { q: "Do you do forestry mulching?", a: "Yes — for larger properties, forestry mulching is the fastest, most cost-effective method. The mulcher grinds trees, brush, and stumps at ground level and leaves a layer of natural mulch behind." },
      { q: "How long does lot clearing take?", a: "A typical residential lot takes 1–2 days. Larger parcels with heavy brush can take a week or more. We'll give you a timeline with your estimate." },
      { q: "Can you clear a lot for new construction?", a: "Yes — we work with builders and general contractors regularly. We clear to your specs and can coordinate with your surveyor and site prep team." },
    ],
  },
  {
    slug: "cabling-bracing",
    name: "Cabling & Bracing",
    shortName: "Cabling & Bracing",
    description: "Structural support for split or leaning trees you want to save.",
    longDescription:
      "Not every tree with a structural problem needs to come down. Cabling and bracing can extend the life of valuable trees by decades — if it's done right. Derek is an ISA Certified Arborist with 25 years of experience, and he assesses every candidate tree personally. Cabling uses high-strength steel cables installed in the upper canopy to reduce strain on weak branch unions. Bracing uses threaded steel rods through split or co-dominant trunks to hold them together. We often use both systems together on the same tree. This is specialty work. It requires understanding tree biomechanics, load dynamics, and species-specific growth patterns. We follow the ANSI A300 Part 3 standard for supplemental support systems. Common candidates include mature oaks with heavy lateral limbs, co-dominant trunks with included bark, and storm-damaged trees that are otherwise healthy. If the tree has significant decay, pest damage, or root compromise, cabling won't solve the problem — we'll be honest about that. The goal is preserving trees that are worth preserving, not propping up trees that should come down. Cabling and bracing should be inspected every 2–3 years. We keep records and can set up a recurring inspection schedule.",
    faqs: [
      { q: "How much does cabling and bracing cost?", a: "Most residential cabling jobs run $400–$1,500 depending on the number of cables and complexity. Bracing adds $200–$600 per rod. We'll assess your tree and quote the work on-site." },
      { q: "Will cabling save my tree?", a: "In many cases, yes — cabling can extend the life of a structurally compromised tree by decades. But it's not a fix for everything. If the tree has significant decay or root problems, removal may be the safer option. We'll be honest with you." },
      { q: "How long does cabling last?", a: "Properly installed cables last 10–15 years before needing replacement. We use non-invasive hardware that doesn't damage the tree. Inspections every 2–3 years ensure everything stays in good shape." },
      { q: "Can you cable a tree that's already splitting?", a: "It depends on how far the split has progressed. If the wood is still connected and the tree is otherwise healthy, bracing with threaded rods can often hold the split together. Derek will assess it in person." },
      { q: "Do you handle heritage or protected trees?", a: "Yes — cabling and bracing is often the preferred method for preserving heritage oaks and other protected trees. We have experience working within local tree preservation ordinances." },
    ],
  },
];

export interface LocationData {
  slug: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  description: string;
  neighborhoods: string;
  faqs: { q: string; a: string }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "walnut-creek",
    city: "Walnut Creek",
    state: "CA",
    lat: 37.9101,
    lng: -122.0652,
    description:
      "We're based right here in Walnut Creek — it's our home turf. From the mature oaks in Rossmoor to the towering eucalyptus in the Ygnacio Valley corridor, we've handled thousands of tree jobs across every Walnut Creek neighborhood. Derek and Rosa grew up in the East Bay and started Highland in 2011 after a major windstorm left local homeowners waiting weeks for help. Today we're Walnut Creek's most trusted tree service with 2,800+ jobs completed.",
    neighborhoods: "Rossmoor, Northgate, Saranap, Ygnacio Valley, Walden, Tice Valley, Indian Valley",
    faqs: [
      { q: "How fast can you get to Walnut Creek jobs?", a: "We're based in Walnut Creek — most estimates are scheduled within 24–48 hours. Emergency storm calls get same-day response." },
      { q: "Do you serve all Walnut Creek neighborhoods?", a: "Every single one — from Rossmoor to Northgate to Tice Valley. If it's in Walnut Creek, we're there." },
      { q: "Do I need a permit to remove a tree in Walnut Creek?", a: "Walnut Creek has a tree preservation ordinance. We know the rules and can help you navigate the permitting process if needed." },
      { q: "What trees are most common in Walnut Creek?", a: "Valley oak, coast live oak, bay laurel, eucalyptus, Monterey pine, and redwood. We work on all of them regularly." },
      { q: "Do you work in Rossmoor?", a: "Yes — we handle tree trimming and removal throughout Rossmoor. We're familiar with the community's guidelines and access requirements." },
    ],
  },
  {
    slug: "concord",
    city: "Concord",
    state: "CA",
    lat: 37.9780,
    lng: -122.0311,
    description:
      "Concord is where Derek grew up, and it's one of our busiest service areas. From the older neighborhoods near downtown with mature oaks and walnuts to newer developments in the Concord hills, we know Concord's trees inside and out. Storm damage is common here — high winds funnel through the valley and snap limbs every winter. When it happens, we respond fast.",
    neighborhoods: "Downtown Concord, Todos Santos, Sun Terrace, Dana Estates, Pine Hollow, Lime Ridge",
    faqs: [
      { q: "How quickly can you get to Concord?", a: "Concord is one of our core service areas — most estimates within 24–48 hours. Emergency calls get priority." },
      { q: "Is pricing different for Concord?", a: "No — same pricing across all of Contra Costa County. No travel surcharge." },
      { q: "What tree problems are common in Concord?", a: "Dead limbs from drought stress, storm damage, aging eucalyptus, and overgrown backyard trees. We handle all of it." },
      { q: "Do you do commercial tree work in Concord?", a: "Yes — HOA common areas, apartment complexes, retail centers, and office parks. We schedule around your tenants and customers." },
      { q: "Do you speak Spanish?", a: "Sí — Rosa es bilingüe y puede ayudarle en español con estimados, programación, y cualquier pregunta." },
    ],
  },
  {
    slug: "pleasant-hill",
    city: "Pleasant Hill",
    state: "CA",
    lat: 37.9480,
    lng: -122.0608,
    description:
      "Pleasant Hill sits right between Walnut Creek and Concord, and we're there constantly. The mix of mature residential trees — oaks, pines, liquidambars — keeps us busy year-round. Trimming, removal, stump grinding, and storm damage cleanup across every Pleasant Hill neighborhood.",
    neighborhoods: "Grayson Creek, Gregory Gardens, Poet's Corner, Contra Costa Centre, Pleasant Oaks",
    faqs: [
      { q: "Do you serve Pleasant Hill?", a: "Yes — Pleasant Hill is right in our core service area. We're there multiple times a week." },
      { q: "How fast can you get to Pleasant Hill?", a: "Most Pleasant Hill estimates scheduled within 24–48 hours. Storm emergencies get same-day response." },
      { q: "Is there a lot of eucalyptus removal work in Pleasant Hill?", a: "Plenty. Aging eucalyptus is one of our most common calls in Pleasant Hill — they drop limbs, shed bark, and are a fire hazard." },
      { q: "Do you work with Pleasant Hill HOAs?", a: "Yes — we work with several Pleasant Hill HOAs on common area tree maintenance and dead tree removal." },
      { q: "Is pricing the same as Walnut Creek?", a: "Yes — same rates across all of Contra Costa County. No distance surcharge." },
    ],
  },
  {
    slug: "danville",
    city: "Danville",
    state: "CA",
    lat: 37.8216,
    lng: -121.9999,
    description:
      "Danville's large lots and mature tree canopy make it one of our favorite places to work. Valley oaks, coast live oaks, and towering redwoods — Danville has some of the biggest, most beautiful trees in Contra Costa County. We provide tree removal, trimming, stump grinding, and cabling throughout Danville. Our ISA Certified Arborist personally assesses every Danville job.",
    neighborhoods: "Downtown Danville, Blackhawk, Tassajara, Alamo Creek, Diablo Vista, Sycamore Valley",
    faqs: [
      { q: "Do you serve Danville and Blackhawk?", a: "Yes — Danville and Blackhawk are core service areas. We handle everything from trimming to full removals on large estate properties." },
      { q: "How do you handle large oak removals in Danville?", a: "Many Danville oaks are massive and sit near structures. We use rigging and crane-assisted removal to bring them down safely in sections. Derek plans every cut." },
      { q: "Does Danville have tree preservation rules?", a: "Yes — Danville (Town of Danville) has tree preservation ordinances. We know the local requirements and can advise you on permitting." },
      { q: "Do you do cabling on heritage oaks?", a: "Yes — cabling and bracing is often the preferred method for preserving Danville's heritage oaks. Derek assesses every candidate tree personally." },
      { q: "Is pricing the same as Walnut Creek?", a: "Same rates — no travel surcharge anywhere in Contra Costa County." },
    ],
  },
  {
    slug: "san-ramon",
    city: "San Ramon",
    state: "CA",
    lat: 37.7799,
    lng: -121.9780,
    description:
      "San Ramon is one of the fastest-growing cities in the East Bay, and its tree canopy needs attention. We serve San Ramon homeowners, businesses, and HOAs with tree removal, trimming, stump grinding, and storm damage cleanup. From the established neighborhoods near downtown to Bishop Ranch and the Dougherty Valley communities, we cover all of San Ramon.",
    neighborhoods: "Dougherty Valley, Bishop Ranch, Canyon Lakes, Gale Ranch, Windemere, Montevideo",
    faqs: [
      { q: "Do you serve San Ramon?", a: "Yes — San Ramon is within our full service area. We're there regularly." },
      { q: "Do you work in Dougherty Valley?", a: "Absolutely. We handle tree trimming and removal throughout Dougherty Valley and the surrounding communities." },
      { q: "How fast can you get to San Ramon?", a: "Most San Ramon jobs are scheduled within 2-3 days. Emergency storm calls get same-day priority." },
      { q: "What trees are common in San Ramon?", a: "Coast live oaks, valley oaks, liquidambars, Monterey pines, and various ornamentals in newer developments." },
      { q: "Is pricing different for San Ramon?", a: "No — same pricing across all of Contra Costa County. No distance surcharge." },
    ],
  },
  {
    slug: "lafayette",
    city: "Lafayette",
    state: "CA",
    lat: 37.8858,
    lng: -122.1180,
    description:
      "Lafayette's wooded hillsides and large residential lots make it one of the most tree-intensive cities in Contra Costa County. We provide tree service throughout Lafayette — from the downtown corridor to Happy Valley, Burton Valley, and the homes along the ridgelines. Steep terrain, mature oaks, and towering eucalyptus — we've got the equipment and experience to handle it.",
    neighborhoods: "Happy Valley, Burton Valley, Trail, Reliez Valley, Lafayette Hills, Springhill",
    faqs: [
      { q: "Do you serve Lafayette?", a: "Yes — Lafayette is one of our regular service areas. We're there every week." },
      { q: "Can you work on steep hillside lots?", a: "That's half our Lafayette work. We're experienced with East Bay terrain — steep grades, narrow access, and trees growing on hillsides." },
      { q: "Does Lafayette have tree ordinances?", a: "Yes — Lafayette has its own tree preservation ordinance. We're familiar with the local requirements and can advise you on what's needed." },
      { q: "What about eucalyptus removal in Lafayette?", a: "Eucalyptus removal is a big part of our Lafayette work. Most homeowners want them removed to reduce fire risk and make room for native oaks." },
      { q: "Is emergency service available in Lafayette?", a: "Yes — 24/7 storm damage response covers all of Lafayette and the surrounding hills." },
    ],
  },
  {
    slug: "moraga",
    city: "Moraga",
    state: "CA",
    lat: 37.8349,
    lng: -122.1297,
    description:
      "Moraga is tucked into the hills between Lafayette and Orinda with some of the most beautiful — and most challenging — tree work in the county. Dense canopy, steep terrain, and large mature trees that require careful planning. We serve all of Moraga including Moraga Country Club, Campolindo, and the neighborhoods along Canyon Road.",
    neighborhoods: "Moraga Country Club, Campolindo, Sanders Ranch, Rheem Valley, Moraga Ranch",
    faqs: [
      { q: "Do you serve Moraga?", a: "Yes — Moraga is within our standard service area. No extra travel fees." },
      { q: "How do you handle large tree removals in Moraga?", a: "Many Moraga trees are huge and sit on steep, wooded lots. We use rigging and crane-assisted removal to bring them down safely in sections." },
      { q: "Is Moraga pricing the same as Walnut Creek?", a: "Yes — same rates, no surcharge for Moraga." },
      { q: "Do you handle fire clearance in Moraga?", a: "Yes. Creating defensible space by clearing dead trees and brush is critical in the Moraga hills. We do this work throughout the East Bay hills." },
      { q: "Can you work around the narrow Moraga roads?", a: "We're familiar with the tight access in Moraga neighborhoods. We plan equipment and logistics accordingly." },
    ],
  },
  {
    slug: "orinda",
    city: "Orinda",
    state: "CA",
    lat: 37.8771,
    lng: -122.1797,
    description:
      "Orinda is known for its wooded, semi-rural character — and that means tree work. Large properties with mature oaks, redwoods, and eucalyptus that need regular care. We serve all of Orinda with tree removal, trimming, stump grinding, and fire clearance. Our crew handles the steep terrain and narrow access that defines so many Orinda properties.",
    neighborhoods: "Orinda Village, Glorietta, Sleepy Hollow, Orinda Downs, Orinda Country Club",
    faqs: [
      { q: "Do you serve Orinda?", a: "Yes — Orinda is a regular part of our service area. We're there multiple times a week." },
      { q: "Is there extra cost for Orinda?", a: "No — same pricing as our full service area. No mileage surcharge." },
      { q: "What about fire safety in the Orinda hills?", a: "Fire clearance and defensible space work is critical in Orinda. We handle eucalyptus removal, dead tree removal, and brush clearing to reduce wildfire risk." },
      { q: "Do you handle Orinda's heritage oaks?", a: "Yes — we specialize in preserving heritage trees through proper trimming, cabling, and bracing. Derek assesses each tree personally." },
      { q: "How fast can you get to Orinda?", a: "Most Orinda estimates within 1-2 days. Emergency storm calls are same-day." },
    ],
  },
  {
    slug: "martinez",
    city: "Martinez",
    state: "CA",
    lat: 38.0194,
    lng: -122.1341,
    description:
      "Martinez sits at the northern edge of Contra Costa County with a mix of waterfront properties, hillside homes, and established neighborhoods full of mature trees. We provide tree removal, trimming, stump grinding, and storm damage cleanup throughout Martinez. From downtown near the waterfront to the Alhambra Valley hillsides, our crew knows Martinez.",
    neighborhoods: "Downtown Martinez, Alhambra Valley, Hidden Lakes, Pine Meadow, Vine Hill",
    faqs: [
      { q: "Do you serve Martinez?", a: "Yes — Martinez is part of our standard service area. Same quality, same pricing." },
      { q: "Is there a travel fee for Martinez?", a: "No — same pricing across all of Contra Costa County. No mileage surcharge." },
      { q: "How fast can you get to Martinez?", a: "Most Martinez jobs are scheduled within 2-3 days. Emergency storm calls are same-day." },
      { q: "What trees are common in Martinez?", a: "Valley oaks, coast live oaks, bay laurel, eucalyptus, and Monterey pines. We work on all of them." },
      { q: "Do you handle hillside properties in Martinez?", a: "Yes — we're experienced with the steep terrain in the Alhambra Valley and surrounding hills." },
    ],
  },
  {
    slug: "clayton",
    city: "Clayton",
    state: "CA",
    lat: 37.9410,
    lng: -121.9358,
    description:
      "Clayton sits at the base of Mount Diablo with beautiful wooded properties and a strong community feel. We serve all of Clayton with tree removal, trimming, stump grinding, and lot clearing. The mix of native oaks, pines, and ornamentals in Clayton keeps us busy year-round. Clayton homeowners care about their trees — and we treat every property with the respect it deserves.",
    neighborhoods: "Downtown Clayton, Oakhurst, Stranahan, Diablo Estates, Keller Ridge",
    faqs: [
      { q: "Do you serve Clayton?", a: "Yes — Clayton is part of our service area. We're there regularly." },
      { q: "Do you work near Mount Diablo?", a: "Yes — we handle tree work on properties near the Mount Diablo foothills. We're familiar with the terrain, the species, and the fire clearance requirements." },
      { q: "Is pricing the same as Walnut Creek?", a: "Same rates — no travel surcharge anywhere in Contra Costa County." },
      { q: "What about fire clearance in Clayton?", a: "Defensible space is critical in Clayton, especially for homes near the foothills. We handle dead tree removal, brush clearing, and eucalyptus removal for fire mitigation." },
      { q: "How fast can you get to Clayton?", a: "Most Clayton jobs scheduled within 2-3 days. Emergency calls are same-day." },
    ],
  },
];

export const HOMEPAGE_FAQS = [
  {
    q: "Do you offer free estimates?",
    a: "Yes — all estimates are free, on-site, and come with no obligation. We typically schedule within 24–48 hours.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Fully licensed (CA Contractor Lic. #1084732), insured with $2M general liability and workers' comp. Derek is an ISA Certified Arborist. We carry proof of insurance on every job.",
  },
  {
    q: "Do you use subcontractors?",
    a: "Never. Every job is done by our own trained crew. You'll see the same faces every time you work with us.",
  },
  {
    q: "How soon can you get out to my property?",
    a: "Most non-emergency jobs are scheduled within 3–7 days. Emergency storm response is available 24/7 — call (925) 847-3091 any time.",
  },
  {
    q: "Do you clean up after the job?",
    a: "Always. We haul away all debris, branches, and wood chips unless you'd like them left. Stump grinding chips can be left as mulch at no extra charge.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Contra Costa County including Walnut Creek, Concord, Pleasant Hill, Danville, San Ramon, Lafayette, Moraga, Orinda, Martinez, and Clayton.",
  },
];
