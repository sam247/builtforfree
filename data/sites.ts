export interface Site {
  name: string;
  url: string;
  industry: string;
  builtInDays: number;
  shortDescription: string;
  slug: string;
  goal?: string;
  deliverables?: string[];
  outcome?: string;
  type?: string;
  seoUpgradeAvailable?: boolean;
}

export const sites: Site[] = [
  {
    name: "Peony and Magnolia",
    url: "https://peonyandmagnolia.com",
    industry: "Florist",
    builtInDays: 5,
    shortDescription: "Beautiful floral design website showcasing arrangements and services.",
    slug: "peony-and-magnolia",
  },
  {
    name: "NitNot",
    url: "https://nitnot.com",
    industry: "Technology",
    builtInDays: 7,
    shortDescription: "Modern technology company website with clean design and clear messaging.",
    slug: "nitnot",
  },
  {
    name: "Mind Power",
    url: "http://mind-power.co.uk",
    industry: "Therapy",
    builtInDays: 6,
    shortDescription: "Clean therapy website focused on credibility, clarity, and lead enquiries.",
    slug: "mind-power",
  },
  {
    name: "Fareham Kitchens",
    url: "https://farehamkitchens.co.uk",
    industry: "Kitchen Design",
    builtInDays: 5,
    shortDescription: "Kitchen design and installation showcase website for local customers.",
    slug: "fareham-kitchens",
  },
  {
    name: "The Grapes Boxmoor",
    url: "https://thegrapesboxmoor.com",
    industry: "Restaurant",
    builtInDays: 6,
    shortDescription: "Restaurant website featuring menu, bookings, and venue information.",
    slug: "the-grapes-boxmoor",
  },
  {
    name: "NitNot Clinic",
    url: "https://nitnotclinic.com",
    industry: "Healthcare",
    builtInDays: 7,
    shortDescription: "Healthcare clinic website with appointment booking and service information.",
    slug: "nitnot-clinic",
  },
  {
    name: "Greenhills Electric",
    url: "https://greenhillselectric.co.uk",
    industry: "Electrician",
    builtInDays: 6,
    shortDescription:
      "Conversion-focused electrician website built to increase local quote requests, emergency callouts, and trust with homeowners through clearer service pages, proof of work sections, and stronger local intent messaging across key entry pages.",
    slug: "greenhills-electric",
    goal: "Create a fast, mobile-friendly electrician website that ranks for local service searches, explains domestic and commercial electrical services clearly, and drives more qualified enquiries from homeowners and businesses needing reliable electrical work.",
    deliverables: [
      "Service-led page structure for core electrical jobs and emergency callouts",
      "Local SEO copy blocks to support area-based electrician searches",
      "Trust-focused sections with credentials, review messaging, and clear calls to action",
      "Lead capture flow optimized for calls and quote requests",
    ],
    outcome:
      "The site now gives visitors clear next steps, improves credibility at first glance, and supports stronger local search visibility for electrician terms, helping convert more traffic into phone calls and qualified quote enquiries.",
  },
  {
    name: "Strawberry Hair",
    url: "https://strawberryhair.co.uk",
    industry: "Hair Salon",
    builtInDays: 5,
    shortDescription:
      "Modern salon website designed to attract local bookings with clearer treatment pages, stronger stylist and trust positioning, and optimized conversion paths for appointment requests from new and returning hair clients.",
    slug: "strawberry-hair",
    goal: "Build a polished, mobile-first salon website that showcases services and results, improves local discoverability for hair-related searches, and makes it easy for potential clients to enquire or book with confidence.",
    deliverables: [
      "Service and treatment page layout for high-intent booking queries",
      "Improved page hierarchy for salon trust signals and visual proof",
      "Conversion-focused booking and enquiry calls to action",
      "SEO-aware local copy to support nearby salon search terms",
    ],
    outcome:
      "The finished website improves user clarity, highlights premium service quality, and creates a smoother path from first visit to booking enquiry, supporting better engagement and stronger lead quality for the salon.",
  },
  {
    name: "Peony Community",
    url: "https://peonycommunity.com",
    industry: "Community Organisation",
    builtInDays: 7,
    shortDescription:
      "Community website created to communicate programs, events, and membership benefits more clearly while improving discoverability and increasing sign-up and contact actions from local audiences and supporters.",
    slug: "peony-community",
    goal: "Design a clear and accessible community-focused website that helps visitors quickly understand services and events, improves trust with transparent messaging, and encourages more membership, volunteer, and partnership enquiries.",
    deliverables: [
      "Information architecture for events, initiatives, and community resources",
      "Accessible content layout for readability and mobile usability",
      "Conversion paths for contact, membership, and volunteer interest",
      "SEO-friendly structure to improve visibility for community-led queries",
    ],
    outcome:
      "The new site makes core information easier to find, strengthens trust with clearer communication, and supports higher engagement through improved pathways for joining, contacting, and participating in community initiatives.",
  },
];
