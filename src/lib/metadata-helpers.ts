import { BIZ } from "@/config/biz";

// Same city→state map used by client-side personalization, duplicated here for server-side metadata
const CITY_STATE_MAP: Record<string, string> = {
  "portland": "OR", "beaverton": "OR", "gresham": "OR", "lake oswego": "OR",
  "tigard": "OR", "hillsboro": "OR", "tualatin": "OR", "milwaukie": "OR",
  "oregon city": "OR", "salem": "OR", "eugene": "OR", "bend": "OR",
  "vancouver": "WA", "seattle": "WA", "tacoma": "WA", "spokane": "WA",
  "dallas": "TX", "houston": "TX", "austin": "TX", "san antonio": "TX",
  "fort worth": "TX", "arlington": "TX", "plano": "TX", "irving": "TX",
  "frisco": "TX", "mckinney": "TX", "el paso": "TX", "corpus christi": "TX",
  "memphis": "TN", "nashville": "TN", "knoxville": "TN", "chattanooga": "TN",
  "los angeles": "CA", "san francisco": "CA", "san diego": "CA", "sacramento": "CA",
  "san jose": "CA", "fresno": "CA", "oakland": "CA", "long beach": "CA",
  "walnut creek": "CA", "concord": "CA", "pleasanton": "CA", "livermore": "CA",
  "danville": "CA", "lafayette": "CA", "martinez": "CA", "antioch": "CA",
  "berkeley": "CA", "fremont": "CA", "hayward": "CA", "sunnyvale": "CA",
  "santa clara": "CA", "palo alto": "CA", "redwood city": "CA", "san mateo": "CA",
  "daly city": "CA", "burlingame": "CA", "mountain view": "CA", "cupertino": "CA",
  "santa rosa": "CA", "napa": "CA", "vallejo": "CA",
  "bakersfield": "CA", "stockton": "CA", "modesto": "CA", "riverside": "CA",
  "anaheim": "CA", "irvine": "CA", "santa ana": "CA", "huntington beach": "CA",
  "pasadena": "CA", "torrance": "CA", "glendale": "CA", "pomona": "CA",
  "escondido": "CA", "carlsbad": "CA", "temecula": "CA", "murrieta": "CA",
  "visalia": "CA", "roseville": "CA", "elk grove": "CA", "folsom": "CA",
  "miami": "FL", "orlando": "FL", "tampa": "FL", "jacksonville": "FL",
  "fort lauderdale": "FL", "st. petersburg": "FL",
  "atlanta": "GA", "savannah": "GA", "augusta": "GA",
  "charlotte": "NC", "raleigh": "NC", "durham": "NC", "greensboro": "NC",
  "phoenix": "AZ", "tucson": "AZ", "scottsdale": "AZ", "mesa": "AZ",
  "denver": "CO", "colorado springs": "CO", "aurora": "CO",
  "chicago": "IL",
  "new york": "NY", "buffalo": "NY", "rochester": "NY",
  "philadelphia": "PA", "pittsburgh": "PA",
  "columbus": "OH", "cleveland": "OH", "cincinnati": "OH",
  "detroit": "MI", "grand rapids": "MI",
  "indianapolis": "IN",
  "kansas city": "MO", "st. louis": "MO",
  "minneapolis": "MN", "st. paul": "MN",
  "new orleans": "LA", "baton rouge": "LA",
  "birmingham": "AL", "huntsville": "AL",
  "charleston": "SC", "columbia": "SC",
  "las vegas": "NV", "reno": "NV",
  "salt lake city": "UT",
  "oklahoma city": "OK", "tulsa": "OK",
  "louisville": "KY", "lexington": "KY",
  "baltimore": "MD",
  "richmond": "VA", "virginia beach": "VA",
  "boston": "MA",
  "milwaukee": "WI", "madison": "WI",
};

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "");
  if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  return raw;
}

export interface MetaBiz {
  name: string;
  city: string;
  state: string;
  phone: string;
  rating: string;
  reviewCount: string;
  jobsCompleted: string;
  isDemo: boolean;
}

export function getMetaBiz(searchParams?: Record<string, string | string[] | undefined>): MetaBiz {
  const sp = searchParams || {};
  const name = (sp.name as string) || (sp.business as string) || "";
  const city = (sp.city as string) || "";
  const stateParam = (sp.state as string) || "";
  const phone = (sp.phone as string) || "";
  const rating = (sp.rating as string) || "";
  const reviews = (sp.reviews as string) || "";
  const jobs = (sp.jobs as string) || "";

  const inferredState = city ? CITY_STATE_MAP[city.toLowerCase()] || "" : "";
  const resolvedState = stateParam || inferredState || BIZ.state;

  return {
    name: name || BIZ.name,
    city: city || BIZ.city,
    state: resolvedState,
    phone: phone ? formatPhone(phone) : BIZ.phone,
    rating: rating || BIZ.rating,
    reviewCount: reviews || BIZ.reviewCount,
    jobsCompleted: jobs || BIZ.jobsCompleted,
    isDemo: !!(name || city),
  };
}
