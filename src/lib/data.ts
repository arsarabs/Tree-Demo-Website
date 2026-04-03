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
      "Some trees need to come down. Maybe it's dead and dropping limbs on your roof. Maybe it's leaning toward your neighbor's fence. Maybe the roots are cracking your foundation. Whatever the reason, our crew handles tree removal across the Austin metro every single day. We remove trees of all sizes — from small ornamental trees to 80-foot live oaks wedged between a house and a power line. We use rigging, sectional dismantling, and crane-assisted removal depending on what the job calls for. Every cut is planned. Every drop zone is cleared. Our ground crew handles cleanup as we go — branches chipped, trunk sections cut to manageable rounds, and the whole area raked clean when we're done. We're fully insured with general liability and workers' comp, and we carry proof on every job. If the tree is near a structure, a fence, or utility lines, we've done hundreds of jobs just like it. We don't rush, we don't cut corners, and we don't leave a mess. Stump grinding is available as an add-on — most homeowners bundle it with the removal to get the yard fully cleared in one visit.",
    faqs: [
      { q: "How much does tree removal cost in Austin?", a: "Small trees (under 25 feet) typically run $300–$800. Medium trees are $800–$2,000. Large oaks or pecans near structures can be $2,000–$5,000. We give free on-site estimates so there's no guesswork." },
      { q: "Can you remove a tree close to my house?", a: "Yes — that's what we specialize in. We use ropes, rigging, and sectional cuts to bring trees down piece by piece in tight spaces. No damage to the house, the fence, or the landscaping." },
      { q: "Do you remove the stump too?", a: "Stump grinding is a separate service but we can do it the same day. Most homeowners bundle removal + grinding to get everything done in one visit." },
      { q: "How long does a tree removal take?", a: "Most single-tree removals take 2–6 hours depending on size and access. Very large trees or crane jobs may take a full day. We'll give you a time estimate with your quote." },
      { q: "Do I need a permit to remove a tree in Austin?", a: "Austin has tree ordinances that protect certain species and sizes. We know the local rules and can help you figure out if you need a permit before we start work." },
    ],
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming & Pruning",
    shortName: "Tree Trimming",
    description: "Crown thinning, deadwood removal, clearance cuts — keeps trees healthy and safe.",
    longDescription:
      "Trimming isn't just cosmetic. It's how you keep trees healthy, keep limbs off your roof, and keep your yard safe during Texas storm season. Our ISA certified arborist oversees every trimming job to make sure we're cutting for the right reasons — not just hacking branches. We do crown thinning to let light and air through the canopy. We do crown raising to clear rooflines, driveways, and sidewalks. We remove deadwood before it falls on someone. And we do structural pruning on younger trees so they grow strong instead of splitting apart in ten years. We trim all species common to Central Texas — live oak, red oak, pecan, cedar elm, bald cypress, crape myrtle, mountain laurel, and more. We follow ANSI A300 pruning standards. No topping. No lion-tailing. No flush cuts. Just clean, proper cuts that heal fast and keep the tree in good shape for years. Our crew handles all debris — branches chipped on-site, leaves raked, driveway swept. You won't find a single twig left behind. Regular trimming every 2–3 years is the best thing you can do for your trees. It prevents storm damage, keeps limbs off your house, and makes the whole property look sharp.",
    faqs: [
      { q: "How much does tree trimming cost?", a: "Most single-tree trimming jobs run $250–$1,000 depending on size and access. A full property with multiple trees might run $1,000–$2,500. We quote on-site — no guessing." },
      { q: "When is the best time to trim trees in Austin?", a: "For most species, late winter (January–March) is ideal. Live oaks should be trimmed in July–January to avoid oak wilt season. We'll advise you on timing for your specific trees." },
      { q: "What's the difference between trimming and pruning?", a: "Trimming usually refers to shaping and clearance work. Pruning is more targeted — removing specific branches for health or structure. We do both, and our arborist decides the right approach for each tree." },
      { q: "Will trimming hurt my tree?", a: "Not when it's done right. We never remove more than 25% of the canopy in a single session. We use proper cuts at the branch collar so the tree heals quickly. No topping, ever." },
      { q: "Do you trim palm trees?", a: "Yes — we trim all palm species in the Austin area. We remove dead fronds, seed pods, and any growth that's hanging over walkways or structures." },
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    shortName: "Stump Grinding",
    description: "Old stumps ground below grade in about an hour. Yard looks brand new.",
    longDescription:
      "That stump in your yard isn't going anywhere on its own. It'll sit there for a decade, sprouting suckers, attracting termites, and ruining your mowing line. Our stump grinder chews it down 6–12 inches below grade in about an hour. We grind the stump, the surface roots, and the root flare — everything that's visible gets pulverized into wood chips. Those chips fill the hole and decompose naturally over time. You can plant grass seed right over the top. Most residential stumps take 30–60 minutes. Bigger stumps from large oaks or pecans might take a couple hours. We can grind multiple stumps in a single visit — and we give a per-stump discount when you bundle. Our grinder fits through a standard 36-inch gate, so backyard stumps are no problem. We handle everything from small crape myrtle stumps to massive live oak stumps that are 4 feet across. After grinding, we rake the chips level and leave the area clean. If you want the chips hauled away instead, we can do that too. Stump grinding is the fastest, cleanest way to reclaim your yard. No digging, no chemicals, no waiting for nature to do its thing. One visit and it's done.",
    faqs: [
      { q: "How much does stump grinding cost?", a: "Most stumps cost $150–$400 depending on diameter and root spread. Large stumps (3+ feet) can run $400–$600. We discount multiple stumps on the same property — usually $100–$175 each after the first." },
      { q: "How deep do you grind?", a: "We grind 6–12 inches below grade. That's deep enough to plant grass, lay sod, or install landscaping. If you need deeper for a construction project, just let us know." },
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
      "Austin storms don't wait for business hours. When a tree falls on your house at 2am, you need a crew that picks up the phone and shows up fast. We provide 24/7 emergency tree service across the Austin metro. Fallen trees on roofs, split trunks blocking driveways, hanging limbs tangled in power lines — we've handled all of it hundreds of times. Our emergency crew arrives with chainsaws, rigging gear, and the experience to work safely around damaged structures and live wires. We stabilize the situation first — get the tree off your roof, clear the driveway, secure any hanging sections. Then we come back to finish removal and cleanup once conditions are safe. We work directly with insurance companies and provide the documentation they need — photos, written estimates, and scope-of-work summaries. Most homeowner's insurance covers storm damage tree removal. We'll help you file the claim. Texas storm season runs roughly April through October. Hail, straight-line winds, and microbursts can snap limbs and uproot trees with no warning. If you've got a dead tree or a tree with a bad lean, getting it handled before storm season is the smartest move. But when the storm hits first, we're the crew to call.",
    faqs: [
      { q: "Do you respond to emergencies at night?", a: "Yes — we take emergency calls 24/7, including nights, weekends, and holidays. If a tree is on your roof or blocking your way out, call us and we'll dispatch a crew." },
      { q: "How fast can you get to an emergency?", a: "For true emergencies (tree on structure, blocking road, near power lines), we aim to be on-site within 2–4 hours. During major storms, demand is high — but active dangers take priority." },
      { q: "Does insurance cover storm damage tree removal?", a: "In most cases, yes — if the tree damaged a structure or is blocking access. We provide photos, written estimates, and detailed documentation to help with your claim." },
      { q: "What should I do if a tree falls on my house?", a: "Get everyone out of the affected area. Don't try to remove it yourself. Call us, then call your insurance company. We'll handle the tree and help you through the insurance process." },
      { q: "Is emergency service more expensive?", a: "Emergency rates are higher than scheduled work due to the urgency and after-hours response. But we still quote before we start, and we never gouge. Most emergency removals run $1,000–$4,000 depending on severity." },
    ],
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    shortName: "Lot Clearing",
    description: "Brush, cedar, mesquite, dead timber — we clear the whole property.",
    longDescription:
      "Got a property that's overgrown with cedar, mesquite, brush, and dead timber? We clear lots across the Austin metro for homeowners, builders, ranchers, and developers. Whether it's a quarter-acre backyard that's turned into a jungle or a multi-acre parcel that needs prepping for construction, our crew handles it. We cut, stack, chip, and haul. Cedar is the big one out here. It grows fast, drinks up water, and crowds out native hardwoods. We clear cedar selectively or take it all — whatever you need. We also handle mesquite, hackberry, chinaberry, and any other junk trees that have taken over. For larger properties, we bring in skid steers and forestry mulchers to chew through brush at ground level. For smaller residential lots, our crew works with chainsaws and a chipper. Either way, you get a clean, usable lot when we're done. We can preserve specific trees you want to keep — just mark them and we'll work around them. We haul all debris off-site unless you want the chips left for mulch. Lot clearing is also smart fire mitigation. Creating defensible space around structures reduces wildfire risk — a growing concern in the Hill Country west of Austin.",
    faqs: [
      { q: "How much does lot clearing cost?", a: "Residential lots (under half acre) typically run $1,500–$5,000 depending on density. Larger parcels are quoted per acre — usually $2,000–$4,000/acre for moderate brush. We give free on-site estimates." },
      { q: "Can you clear just the cedar and leave the oaks?", a: "Absolutely. Selective clearing is one of our most common requests. We'll remove the cedar, mesquite, or whatever you want gone, and leave the trees you want to keep untouched." },
      { q: "Do you do forestry mulching?", a: "Yes — for larger properties, forestry mulching is the fastest, most cost-effective method. The mulcher grinds trees, brush, and stumps at ground level and leaves a layer of natural mulch behind." },
      { q: "How long does lot clearing take?", a: "A typical residential lot takes 1–2 days. Larger parcels with heavy brush can take a week or more. We'll give you a timeline with your estimate." },
      { q: "Can you clear a lot for new construction?", a: "Yes — we work with builders and general contractors regularly. We clear to your specs and can coordinate with your surveyor and site prep team." },
    ],
  },
  {
    slug: "hedge-trimming",
    name: "Hedge Trimming & Shaping",
    shortName: "Hedge Trimming",
    description: "Overgrown hedges shaped up and looking sharp. Regular service available.",
    longDescription:
      "Hedges grow fast in Central Texas. Without regular trimming, they get leggy, patchy, and start swallowing your walkways and fence lines. Our crew trims and shapes hedges across the Austin area — from small boxwood borders to 12-foot tall photinia screens. We use a mix of gas-powered hedge trimmers and hand shears depending on the species and the look you're after. Formal hedges get crisp, squared lines. Natural hedges get shaped to their growth pattern. Either way, we leave them looking clean and dense. We trim all common Austin hedge species — wax myrtle, yaupon holly, Japanese ligustrum, boxwood, photinia, privet, loropetalum, and more. We also handle ornamental grasses and small ornamental trees that need annual shaping. Regular trimming keeps hedges thick from the base up. If you let them go too long, you end up with bare bottoms and all the growth on top — which is much harder to fix. We recommend trimming 2–3 times per year for most species. Our crew handles all the clippings. We rake, blow, and haul everything off-site. Your property looks better the minute we pull out of the driveway. We offer one-time service or recurring maintenance plans — whatever works for your schedule and budget.",
    faqs: [
      { q: "How much does hedge trimming cost?", a: "Most residential hedge jobs run $150–$500 depending on the length, height, and number of hedges. Large properties with extensive hedging may run $500–$1,200. We quote on-site." },
      { q: "How often should hedges be trimmed in Austin?", a: "Most hedges need trimming 2–3 times per year. Fast-growing species like ligustrum or photinia may need 3–4 trims. We can set up a recurring schedule so you never have to think about it." },
      { q: "Can you reshape overgrown hedges?", a: "In most cases, yes. If the hedge has been neglected, we can do a hard rejuvenation prune to bring it back to a manageable size. Some species respond better than others — we'll advise you on what's realistic." },
      { q: "Do you trim ornamental grasses too?", a: "Yes — we cut back ornamental grasses like muhly, fountain grass, and lindheimer muhly in late winter before new growth starts. We handle the clippings and haul everything away." },
      { q: "Do you offer recurring hedge maintenance?", a: "Yes — we offer quarterly, bi-annual, and custom schedules. Recurring clients get priority scheduling and consistent pricing." },
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
    slug: "austin",
    city: "Austin",
    state: "TX",
    lat: 30.2672,
    lng: -97.7431,
    description:
      "We're Austin's go-to tree service crew. From South Austin bungalows with post oaks crowding the roof to North Austin subdivisions where dead limbs hang over driveways, we've handled it all. Our crew knows Austin's tree ordinances, the oak wilt quarantine windows, and which neighborhoods have the biggest pecan trees. We serve every part of Austin — downtown, East Austin, West Lake Hills, Circle C, Mueller, and everywhere in between. Over 2,500 jobs completed and counting.",
    neighborhoods: "Downtown, South Austin, East Austin, North Austin, West Lake Hills, Circle C, Mueller, Barton Hills, Zilker, Hyde Park",
    faqs: [
      { q: "How fast can you get to Austin jobs?", a: "We're based in Austin — most estimates are scheduled within 1-2 days. Emergency storm calls get a same-day response." },
      { q: "Do you serve all Austin neighborhoods?", a: "Yes — every Austin neighborhood from downtown to the suburbs. If it's in Austin city limits, we're there." },
      { q: "Do I need a permit to remove a tree in Austin?", a: "Austin protects trees 19 inches in diameter and above on most residential properties. We know the rules and can help you navigate the permitting process if needed." },
      { q: "What trees are most common in Austin?", a: "Live oak, red oak, pecan, cedar elm, bald cypress, and Ashe juniper (cedar). We work on all of them regularly." },
      { q: "Do you handle oak wilt treatment?", a: "We follow all oak wilt prevention protocols — proper pruning windows, wound sealant on all oak cuts, and tool sanitation between trees. We can also refer you to specialists for fungicide treatment." },
    ],
  },
  {
    slug: "round-rock",
    city: "Round Rock",
    state: "TX",
    lat: 30.5083,
    lng: -97.6789,
    description:
      "Round Rock homeowners trust us for tree removal, trimming, and stump grinding throughout the city. From the older neighborhoods near downtown Round Rock with mature pecan trees to newer developments in Teravista and Paloma Lake, we know Round Rock's trees. Storm damage is common here — straight-line winds snap limbs and uproot trees every spring. When it happens, we respond fast.",
    neighborhoods: "Downtown Round Rock, Teravista, Paloma Lake, Forest Creek, Cat Hollow",
    faqs: [
      { q: "How quickly can you get to Round Rock?", a: "Round Rock is one of our core service areas — most estimates within 1-2 days. Emergency calls get priority." },
      { q: "Do you serve the Teravista area?", a: "Yes — Teravista, Forest Creek, Paloma Lake, Cat Hollow, and all Round Rock neighborhoods." },
      { q: "Is pricing different for Round Rock?", a: "No — same pricing as Austin. No travel surcharge for Round Rock." },
      { q: "What tree problems are common in Round Rock?", a: "Dead limbs from drought stress, storm damage, and overgrown cedars in older lots. We handle all of it." },
      { q: "Do you do commercial tree work in Round Rock?", a: "Yes — HOA common areas, apartment complexes, retail centers, and office parks. We schedule around your tenants and customers." },
    ],
  },
  {
    slug: "cedar-park",
    city: "Cedar Park",
    state: "TX",
    lat: 30.5052,
    lng: -97.8203,
    description:
      "Cedar Park sits right at the edge of the Hill Country, which means a mix of live oaks, cedars, and elms that need regular attention. We provide tree removal, trimming, stump grinding, and lot clearing throughout Cedar Park. From the established neighborhoods near Buttercup Creek to newer areas around Crystal Falls and Twin Creeks, our crew handles it all. Cedar Park's rocky limestone soil makes root systems unpredictable — we've got the experience to work safely in these conditions.",
    neighborhoods: "Buttercup Creek, Crystal Falls, Twin Creeks, Anderson Mill West, Ranch at Brushy Creek",
    faqs: [
      { q: "Do you serve Cedar Park?", a: "Yes — Cedar Park is a core part of our service area. We're out there multiple times a week." },
      { q: "How fast can you get to Cedar Park?", a: "Most Cedar Park estimates are scheduled within 1-2 days. Storm emergencies get same-day response." },
      { q: "Is there a lot of cedar removal work in Cedar Park?", a: "Plenty. Despite the name, most Cedar Park homeowners want cedar removed to make room for native hardwoods. We clear cedar selectively or take it all." },
      { q: "Do you work with Cedar Park HOAs?", a: "Yes — we work with several Cedar Park HOAs on common area tree maintenance and dead tree removal." },
      { q: "What about rocky soil in Cedar Park?", a: "Hill Country limestone means shallow root systems and rocky terrain. Our crew is experienced with these conditions and adjusts equipment accordingly." },
    ],
  },
  {
    slug: "georgetown",
    city: "Georgetown",
    state: "TX",
    lat: 30.6333,
    lng: -97.6780,
    description:
      "Georgetown is one of the fastest-growing cities in Texas, and its tree canopy needs attention. We serve Georgetown homeowners, businesses, and HOAs with professional tree removal, trimming, stump grinding, and storm damage cleanup. From the historic downtown square to Sun City's sprawling community and the newer neighborhoods in Berry Creek and Cimarron Hills, we cover all of Georgetown. Pecan trees and live oaks dominate here, and both need regular professional care.",
    neighborhoods: "Downtown Georgetown, Sun City, Berry Creek, Cimarron Hills, Serenada",
    faqs: [
      { q: "Do you serve Georgetown?", a: "Yes — Georgetown is within our full service area. We're up there regularly." },
      { q: "Do you work in Sun City?", a: "Absolutely. We handle tree trimming and removal throughout Sun City. We're familiar with the community's guidelines and access requirements." },
      { q: "How fast can you get to Georgetown?", a: "Most Georgetown jobs are scheduled within 2-3 days. Emergency storm calls get same-day priority." },
      { q: "What trees are common in Georgetown?", a: "Live oaks, pecans, red oaks, cedar elms, and Ashe juniper. We work on all of them." },
      { q: "Is pricing different for Georgetown?", a: "No — same pricing as our Austin-area service zone. No distance surcharge." },
    ],
  },
  {
    slug: "pflugerville",
    city: "Pflugerville",
    state: "TX",
    lat: 30.4394,
    lng: -97.6200,
    description:
      "Pflugerville's rapid growth means new neighborhoods with young trees that need structural pruning and older areas with mature trees that need trimming, deadwood removal, or full removal. We serve all of Pflugerville — from Blackhawk and Falcon Pointe to the older neighborhoods near downtown. Our crew handles everything from single-tree trimming to full lot clearing for new construction. Storm damage response available 24/7.",
    neighborhoods: "Blackhawk, Falcon Pointe, Meadows of Blackhawk, Wells Branch, Windermere",
    faqs: [
      { q: "How quickly can you get to Pflugerville?", a: "Pflugerville is right in our core service area. Most estimates scheduled within 1-2 days." },
      { q: "Do you serve the Blackhawk area?", a: "Yes — Blackhawk, Falcon Pointe, Wells Branch, and all Pflugerville neighborhoods." },
      { q: "Is pricing the same as Austin?", a: "Yes — no travel surcharge for Pflugerville." },
      { q: "Do you trim young trees?", a: "Structural pruning on young trees is one of the smartest investments you can make. We shape them early so they grow strong and resist storm damage later." },
      { q: "Can you handle Pflugerville HOA tree requirements?", a: "Yes — we work with multiple Pflugerville HOAs and know what they typically require for dead tree removal and height clearance." },
    ],
  },
  {
    slug: "lakeway",
    city: "Lakeway",
    state: "TX",
    lat: 30.3633,
    lng: -97.9795,
    description:
      "Lakeway sits in the heart of the Hill Country with steep terrain, rocky soil, and a mix of live oaks, cedars, and native hardwoods. We provide tree service throughout Lakeway — from the lakefront properties along Lake Travis to the hillside homes in Rough Hollow and Flintrock Falls. Access can be tricky in Lakeway. Steep driveways, narrow lots, and trees growing out of limestone ledges. We've got the equipment and the experience to handle it.",
    neighborhoods: "Rough Hollow, Flintrock Falls, Lakeway Highlands, The Hills, Lake Travis waterfront",
    faqs: [
      { q: "Do you serve Lakeway?", a: "Yes — Lakeway is one of our regular service areas. We're out there every week." },
      { q: "Can you work on steep hillside lots?", a: "That's half our Lakeway work. We're experienced with Hill Country terrain — steep grades, rocky soil, and limited access. We bring the right equipment for the conditions." },
      { q: "Do Lakeway properties need permits for tree removal?", a: "Lakeway has its own tree ordinance separate from Austin. We're familiar with the local requirements and can advise you on what's needed." },
      { q: "What about cedar clearing in Lakeway?", a: "Cedar removal is a huge part of our Lakeway work. Most homeowners want cedar thinned to reduce fire risk, improve views, and give native oaks more room to grow." },
      { q: "Is emergency service available in Lakeway?", a: "Yes — 24/7 storm damage response covers all of Lakeway and the Lake Travis area." },
    ],
  },
  {
    slug: "bee-cave",
    city: "Bee Cave",
    state: "TX",
    lat: 30.3085,
    lng: -97.9389,
    description:
      "Bee Cave and the surrounding Hill Country communities have some of the most beautiful — and most challenging — tree work in the Austin metro. Dense cedar thickets, massive live oaks on limestone outcrops, and steep lots that require careful planning. We serve all of Bee Cave including Falconhead, Spanish Oaks, and the neighborhoods along Bee Cave Road. Our crew is experienced with the terrain and the tree species specific to this part of the Hill Country.",
    neighborhoods: "Falconhead, Spanish Oaks, Lake Pointe, Homestead, Bee Cave Village",
    faqs: [
      { q: "Do you serve Bee Cave?", a: "Yes — Bee Cave is within our standard service area. No extra travel fees." },
      { q: "How do you handle large oak removals in Bee Cave?", a: "Many Bee Cave oaks are huge and sit on rocky hillsides. We use rigging and crane-assisted removal to bring them down safely in sections. We plan every cut." },
      { q: "Can you clear cedar on my Bee Cave property?", a: "Yes — cedar clearing is one of our most requested services in Bee Cave. We clear selectively or take it all, and we can mulch the debris on-site." },
      { q: "Is Bee Cave pricing the same as Austin?", a: "Yes — same rates, no surcharge for Bee Cave." },
      { q: "Do you handle wildfire defensible space in Bee Cave?", a: "Yes. Creating defensible space by clearing cedar and brush within 30 feet of structures is smart fire mitigation. We do this work throughout the Hill Country." },
    ],
  },
  {
    slug: "dripping-springs",
    city: "Dripping Springs",
    state: "TX",
    lat: 30.1902,
    lng: -98.0867,
    description:
      "Dripping Springs is growing fast, and the tree work is growing with it. New builds need lot clearing. Existing properties need dead tree removal and storm cleanup. Ranch owners need cedar management on acreage. We serve all of Dripping Springs and the surrounding Highway 290 corridor. Our forestry mulcher handles large-scale cedar clearing, and our climbing crew handles precision work in tight residential lots. Whatever the job, we leave the property clean and the trees handled right.",
    neighborhoods: "Belterra, Headwaters, Caliterra, Founders Ridge, Downtown Dripping Springs",
    faqs: [
      { q: "Do you come all the way out to Dripping Springs?", a: "Yes — Dripping Springs is a regular part of our service area. We're out there multiple times a week." },
      { q: "Can you clear multiple acres of cedar?", a: "Yes — we do multi-acre cedar clearing with forestry mulchers for Dripping Springs ranches and development sites. We quote by the acre." },
      { q: "Is there extra cost for Dripping Springs?", a: "No — same pricing as our full service area. No mileage surcharge." },
      { q: "Do you handle new construction lot clearing in Dripping Springs?", a: "Yes — we work with builders and GCs on lot prep throughout the Dripping Springs area. We clear to spec and coordinate with your site team." },
      { q: "What about the live oaks in Dripping Springs?", a: "Live oaks are protected by many Dripping Springs developments. We're careful to preserve them during clearing work and can prune them for health and clearance." },
    ],
  },
  {
    slug: "kyle",
    city: "Kyle",
    state: "TX",
    lat: 29.9889,
    lng: -97.8772,
    description:
      "Kyle has boomed over the last decade, and that growth means tree work. New subdivisions in Plum Creek and Waterleaf have young trees that need structural pruning. Older properties closer to downtown Kyle have mature oaks and pecans that need trimming or removal. We serve all of Kyle with the same fast, professional tree service we're known for across the Austin metro. Storm damage response available 24/7.",
    neighborhoods: "Plum Creek, Waterleaf, Steeplechase, Hometown Kyle, Post Oak",
    faqs: [
      { q: "Do you serve Kyle?", a: "Yes — Kyle is within our standard service area. No extra fees." },
      { q: "How fast can you get to Kyle?", a: "Most Kyle estimates are scheduled within 2-3 days. Storm emergencies are same-day." },
      { q: "Is pricing the same as Austin for Kyle jobs?", a: "Yes — same rates, no distance surcharge." },
      { q: "What kind of tree work is most common in Kyle?", a: "Dead tree removal, storm damage cleanup, stump grinding, and structural pruning on younger trees in newer subdivisions." },
      { q: "Do you work with Kyle HOAs?", a: "Yes — we handle dead tree removal and maintenance trimming for several Kyle HOAs. We know what they typically require." },
    ],
  },
  {
    slug: "san-marcos",
    city: "San Marcos",
    state: "TX",
    lat: 29.8833,
    lng: -97.9414,
    description:
      "San Marcos sits at the southern edge of our service area, and we're there regularly. The mix of Hill Country terrain and river-bottom land means a wide variety of trees — bald cypress along the San Marcos River, live oaks on the hillsides, and pecans in the floodplain. We serve San Marcos homeowners, rental property owners, and businesses with tree removal, trimming, stump grinding, and storm cleanup. Texas State University landlords and property managers are some of our repeat customers.",
    neighborhoods: "Downtown San Marcos, Blanco Vista, Kissing Tree, Spring Lake Hills, Hunter's Hill",
    faqs: [
      { q: "Do you really serve San Marcos?", a: "Yes — San Marcos is at the edge of our service area but we're down there regularly. Same quality, same pricing." },
      { q: "Is there a travel fee for San Marcos?", a: "No — same pricing as our full service zone. No mileage surcharge." },
      { q: "Do you work with rental property owners in San Marcos?", a: "Yes — we handle dead tree removal and storm cleanup for rental properties near Texas State regularly." },
      { q: "How fast can you get to San Marcos?", a: "Most San Marcos jobs are scheduled within 2-3 days. Emergency storm calls are same-day." },
      { q: "What trees are common in San Marcos?", a: "Bald cypress near the river, live oaks and red oaks on higher ground, pecans in the floodplain, and plenty of cedar on the hillsides." },
    ],
  },
];

export const HOMEPAGE_FAQS = [
  {
    q: "How much does tree removal cost?",
    a: "It depends on the size, species, and location of the tree. Small trees run $300–$800. Large oaks near structures can be $1,500–$5,000. We give free on-site estimates — no guesswork, no hidden fees.",
  },
  {
    q: "Do you handle emergency storm calls?",
    a: "Yes — 24/7. Fallen trees on roofs, split trunks blocking driveways, hanging limbs over power lines. We respond fast and work with your insurance company on documentation.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Fully insured with general liability and workers' comp. Our owner is an ISA Certified Arborist. We carry proof of insurance on every job site.",
  },
  {
    q: "What happens to the wood and debris?",
    a: "Branches get chipped on-site. Trunk sections are cut to rounds and hauled off. We rake, blow, and sweep the area clean. You can keep the wood for firewood if you want — just let us know.",
  },
  {
    q: "Do I need to be home during the work?",
    a: "Not necessarily. As long as we have access to the tree and you've approved the estimate, we can do the work. We'll send you photos when the job is done.",
  },
  {
    q: "How do I get a free estimate?",
    a: "Call, text, or fill out the form on this page. We'll schedule a time to come out, look at the tree, and give you a number on the spot. No obligation.",
  },
];
