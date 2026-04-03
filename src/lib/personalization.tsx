"use client";

import { createContext, useContext, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BIZ } from "@/config/biz";

interface PersonalizedBusiness {
  name: string;
  phone: string;
  phoneRaw: string;
  city: string;
  state: string;
  rating: string;
  reviewCount: string;
  jobsCompleted: string;
  isDemo: boolean;
}

const PersonalizationContext = createContext<PersonalizedBusiness>({
  name: BIZ.name,
  phone: BIZ.phone,
  phoneRaw: BIZ.phoneRaw,
  city: BIZ.city,
  state: BIZ.state,
  rating: BIZ.rating,
  reviewCount: BIZ.reviewCount,
  jobsCompleted: BIZ.jobsCompleted,
  isDemo: false,
});

const STORAGE_KEY = "launchedops_demo";

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "");
  if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  return raw;
}

function getStored(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Auto-detect state from city when no state param is provided
const CITY_STATE_MAP: Record<string, string> = {
  // Oregon
  "portland": "OR", "beaverton": "OR", "gresham": "OR", "lake oswego": "OR",
  "tigard": "OR", "hillsboro": "OR", "tualatin": "OR", "milwaukie": "OR",
  "oregon city": "OR", "salem": "OR", "eugene": "OR", "bend": "OR",
  // Washington
  "vancouver": "WA", "seattle": "WA", "tacoma": "WA", "spokane": "WA",
  // Texas
  "dallas": "TX", "houston": "TX", "austin": "TX", "san antonio": "TX",
  "fort worth": "TX", "arlington": "TX", "plano": "TX", "irving": "TX",
  "frisco": "TX", "mckinney": "TX", "el paso": "TX", "corpus christi": "TX",
  // Tennessee
  "memphis": "TN", "nashville": "TN", "knoxville": "TN", "chattanooga": "TN",
  // California
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
  // Florida
  "miami": "FL", "orlando": "FL", "tampa": "FL", "jacksonville": "FL",
  "fort lauderdale": "FL", "st. petersburg": "FL",
  // Georgia
  "atlanta": "GA", "savannah": "GA", "augusta": "GA",
  // North Carolina
  "charlotte": "NC", "raleigh": "NC", "durham": "NC", "greensboro": "NC",
  // Arizona
  "phoenix": "AZ", "tucson": "AZ", "scottsdale": "AZ", "mesa": "AZ",
  // Colorado
  "denver": "CO", "colorado springs": "CO", "aurora": "CO",
  // Illinois
  "chicago": "IL",
  // New York
  "new york": "NY", "buffalo": "NY", "rochester": "NY",
  // Pennsylvania
  "philadelphia": "PA", "pittsburgh": "PA",
  // Ohio
  "columbus": "OH", "cleveland": "OH", "cincinnati": "OH",
  // Michigan
  "detroit": "MI", "grand rapids": "MI",
  // Indiana
  "indianapolis": "IN",
  // Missouri
  "kansas city": "MO", "st. louis": "MO",
  // Minnesota
  "minneapolis": "MN", "st. paul": "MN",
  // Louisiana
  "new orleans": "LA", "baton rouge": "LA",
  // Alabama
  "birmingham": "AL", "huntsville": "AL",
  // South Carolina
  "charleston": "SC", "columbia": "SC",
  // Nevada
  "las vegas": "NV", "reno": "NV",
  // Utah
  "salt lake city": "UT",
  // Oklahoma
  "oklahoma city": "OK", "tulsa": "OK",
  // Kentucky
  "louisville": "KY", "lexington": "KY",
  // Maryland
  "baltimore": "MD",
  // Virginia
  "richmond": "VA", "virginia beach": "VA",
  // Massachusetts
  "boston": "MA",
  // Wisconsin
  "milwaukee": "WI", "madison": "WI",
};

function inferState(city: string): string | undefined {
  return CITY_STATE_MAP[city.toLowerCase()];
}

export function PersonalizationProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const value = useMemo(() => {
    // URL params take priority, then sessionStorage, then defaults
    const stored = getStored();

    const nameParam = searchParams.get("name") || searchParams.get("business") || stored.name;
    const cityParam = searchParams.get("city") || stored.city;
    const cityResolved = cityParam || "";
    // Explicit &state= wins, then infer from city, then stored, then default
    const stateParam = searchParams.get("state") || inferState(cityResolved) || stored.state;
    const phoneParam = searchParams.get("phone") || stored.phone;
    const ratingParam = searchParams.get("rating") || stored.rating;
    const reviewsParam = searchParams.get("reviews") || stored.reviews;
    const jobsParam = searchParams.get("jobs") || stored.jobs;

    const phoneRaw = phoneParam ? `+1${phoneParam.replace(/\D/g, "")}` : BIZ.phoneRaw;
    const phoneDisplay = phoneParam ? formatPhone(phoneParam) : BIZ.phone;
    const isDemo = !!(nameParam || cityParam || stored.name || stored.city);

    return {
      name: nameParam || BIZ.name,
      phone: phoneDisplay,
      phoneRaw,
      city: cityParam || BIZ.city,
      state: stateParam || BIZ.state,
      rating: ratingParam || BIZ.rating,
      reviewCount: reviewsParam || BIZ.reviewCount,
      jobsCompleted: jobsParam || BIZ.jobsCompleted,
      isDemo,
      // keep raw params for storage
      _raw: { name: nameParam, city: cityParam, state: stateParam, phone: phoneParam, rating: ratingParam, reviews: reviewsParam, jobs: jobsParam },
    };
  }, [searchParams]);

  // Persist to sessionStorage whenever URL params are present
  useEffect(() => {
    const raw = (value as PersonalizedBusiness & { _raw: Record<string, string | undefined> })._raw;
    const hasParams = Object.values(raw).some(Boolean);
    if (hasParams) {
      const toStore: Record<string, string> = {};
      for (const [k, v] of Object.entries(raw)) {
        if (v) toStore[k] = v as string;
      }
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    }
  }, [value]);

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  return useContext(PersonalizationContext);
}
