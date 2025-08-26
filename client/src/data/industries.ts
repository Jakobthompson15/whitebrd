export type Industry = {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  keyServices: string[];
  cta: string;
};

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    heroTitle: "HVAC Marketing That Heats Up Demand",
    heroSubtitle: "Own peak season and stay booked in shoulder months",
    description:
      "From emergency intent to maintenance plans, we build search, local, and website systems that turn calls into scheduled jobs and memberships.",
    keyServices: [
      "Local SEO + GBP optimization",
      "High‑intent service pages",
      "Seasonal offers + landing pages",
      "Review generation + reputation",
    ],
    cta: "Request your HVAC growth audit",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    heroTitle: "Plumbing Marketing That Keeps the Phones Ringing",
    heroSubtitle: "Capture emergency searches and build long‑term brand equity",
    description:
      "We combine local SEO, review velocity, and conversion‑first pages so burst‑pipe intent becomes revenue today and repeat business tomorrow.",
    keyServices: [
      "Emergency + intent landing pages",
      "Maps pack dominance",
      "Structured data + reviews",
      "Website speed + tracking",
    ],
    cta: "Get a free plumbing audit",
  },
  {
    slug: "roofing",
    name: "Roofing",
    heroTitle: "Roofing Marketing Built for Big Tickets",
    heroSubtitle: "Organic demand for residential and commercial jobs",
    description:
      "Drive storm, insurance, and replacement leads with location hubs, proof‑rich pages, and multi‑location SEO that compounds.",
    keyServices: [
      "Service area hubs",
      "Before/after galleries",
      "Lead capture + nurturing",
      "Multi‑location SEO",
    ],
    cta: "See your roofing opportunities",
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    heroTitle: "Pest Control Marketing that Squashes the Competition",
    heroSubtitle: "Recurring plans and urgent service, covered",
    description:
      "From urgent extermination to quarterly plans, we help you win the maps pack, convert price‑shopping visitors, and grow recurring revenue.",
    keyServices: [
      "GBP + local citations",
      "Pricing + plan pages",
      "Conversion‑focused UX",
      "Reviews + trust signals",
    ],
    cta: "Request a pest control audit",
  },
  {
    slug: "electrical",
    name: "Electrical",
    heroTitle: "Electrical Marketing to Power Your Pipeline",
    heroSubtitle: "Residential service and commercial bids",
    description:
      "Own residential search while showcasing commercial credibility. We pair local SEO with proof‑driven content and strong conversion paths.",
    keyServices: [
      "Local SEO + maps",
      "Project galleries + case studies",
      "Quote funnels",
      "Review strategy",
    ],
    cta: "Audit my electrical marketing",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    heroTitle: "Landscaping Marketing that Grows",
    heroSubtitle: "From design/build to maintenance",
    description:
      "Showcase work beautifully and capture seasonal demand with high‑intent pages, galleries, and local visibility that converts.",
    keyServices: ["Showcase galleries", "Local SEO", "Quote + booking flows", "Reviews"],
    cta: "Get my landscaping plan",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    heroTitle: "Cleaning Services That Clean Up Online",
    heroSubtitle: "Residential and commercial growth",
    description:
      "Build a steady pipeline with niche pages (move‑out, office, post‑construction), strong trust signals, and sticky repeat plans.",
    keyServices: ["Niche service pages", "Reputation growth", "Local SEO", "Booking flows"],
    cta: "See my cleaning opportunities",
  },
  {
    slug: "legal",
    name: "Legal",
    heroTitle: "Law Firm Marketing with Measurable ROI",
    heroSubtitle: "From local practices to multi‑office firms",
    description:
      "Attract qualified matters with practice area hubs, E‑E‑A‑T content, and conversion journeys compliant with your bar rules.",
    keyServices: [
      "Practice area SEO",
      "Attorney bio optimization",
      "Reviews + social proof",
      "Intake + tracking",
    ],
    cta: "Request a law firm audit",
  },
  {
    slug: "dental",
    name: "Dental",
    heroTitle: "Dental Marketing that Fills Chairs",
    heroSubtitle: "General, cosmetic, and specialty",
    description:
      "Win local search and convert browsers with insurance, financing, and smile galleries that reduce friction and build trust.",
    keyServices: ["Local SEO", "Financing + insurance UX", "Reviews", "Conversion tracking"],
    cta: "Get my dental growth plan",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    heroTitle: "Real Estate Marketing that Moves Deals",
    heroSubtitle: "Agents, teams, and brokerages",
    description:
      "Attract sellers and buyers with neighborhood hubs, inventory pages, and lead capture that feeds your CRM.",
    keyServices: ["Neighborhood SEO", "Listing pages", "Lead routing", "Email + nurture"],
    cta: "See my market opportunities",
  },
  {
    slug: "ecommerce",
    name: "E‑Commerce",
    heroTitle: "E‑Commerce Growth without Guesswork",
    heroSubtitle: "Compounding organic + CRO",
    description:
      "Scale non‑paid acquisition with technical SEO, product discoverability, CRO, and analytics that reveal what converts.",
    keyServices: ["Tech SEO", "Collection architecture", "PDP CRO", "Analytics"],
    cta: "Request an e‑commerce audit",
  },
  {
    slug: "saas",
    name: "SaaS",
    heroTitle: "SaaS Marketing that Compounds",
    heroSubtitle: "From problem → product → proof",
    description:
      "Win intent with problem‑solution pages, documentation SEO, and proof‑rich assets that drive trials and demos.",
    keyServices: ["Topic clusters", "Docs SEO", "Demo funnels", "Proof + case studies"],
    cta: "Get my SaaS growth audit",
  },
];

export const industryBySlug = Object.fromEntries(
  industries.map((i) => [i.slug, i])
);

