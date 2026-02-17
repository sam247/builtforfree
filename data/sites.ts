export interface Site {
  name: string;
  url: string;
  industry: string;
  builtInDays: number;
  description: string;
  slug: string;
  seoUpgradeAvailable?: boolean;
}

export const sites: Site[] = [
  {
    name: "Peony and Magnolia",
    url: "https://peonyandmagnolia.com",
    industry: "Florist",
    builtInDays: 5,
    description: "Beautiful floral design website showcasing arrangements and services.",
    slug: "peony-and-magnolia",
  },
  {
    name: "NitNot",
    url: "https://nitnot.com",
    industry: "Technology",
    builtInDays: 7,
    description: "Modern technology company website with clean design and clear messaging.",
    slug: "nitnot",
  },
  {
    name: "SEO Hertfordshire",
    url: "https://seohertfordshire.com",
    industry: "SEO Services",
    builtInDays: 6,
    description: "Professional SEO services website focused on local business growth.",
    slug: "seo-hertfordshire",
  },
  {
    name: "Fareham Kitchens",
    url: "https://farehamkitchens.co.uk",
    industry: "Kitchen Design",
    builtInDays: 5,
    description: "Kitchen design and installation showcase website for local customers.",
    slug: "fareham-kitchens",
  },
  {
    name: "The Grapes Boxmoor",
    url: "https://thegrapesboxmoor.com",
    industry: "Restaurant",
    builtInDays: 6,
    description: "Restaurant website featuring menu, bookings, and venue information.",
    slug: "the-grapes-boxmoor",
  },
  {
    name: "NitNot Clinic",
    url: "https://nitnotclinic.com",
    industry: "Healthcare",
    builtInDays: 7,
    description: "Healthcare clinic website with appointment booking and service information.",
    slug: "nitnot-clinic",
  },
];
