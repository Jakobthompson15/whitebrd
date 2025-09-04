export type Industry = {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  keyServices: string[];
  cta: string;
  // Optional richer content (used to deepen /industries pages)
  metaTitle?: string;
  metaDescription?: string;
  heroImage?: string;
  heroImagePrompt?: string;
  seoContent?: {
    title: string;
    description: string;
    benefits: string[];
  };
  designContent?: {
    title: string;
    description: string;
    features: string[];
  };
  useCases?: { title: string; description: string }[];
  painPoints?: string[];
  process?: string[];
  faqs?: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    heroTitle: "HVAC Marketing That Heats Up Demand",
    heroSubtitle: "Own peak season and stay booked in shoulder months",
    description:
      "Your HVAC business operates in a hyper-competitive market where emergency searches spike unpredictably and seasonal demand creates feast-or-famine cycles. We understand that you're not just competing with other HVAC companies – you're battling weather patterns, seasonal trends, and customers who only think of you when something breaks. Our comprehensive digital strategy transforms your online presence from a simple business card into a 24/7 lead generation machine that captures emergency searches at 2 AM, nurtures maintenance plan subscribers, and builds brand equity that keeps you top-of-mind before the crisis hits.",
    keyServices: [
      "Local SEO + GBP optimization",
      "High‑intent service pages",
      "Seasonal offers + landing pages",
      "Review generation + reputation",
    ],
    cta: "Request your HVAC growth audit",
    metaTitle: "HVAC Digital Marketing Agency | SEO & Web Design for Heating & Cooling",
    metaDescription: "Specialized HVAC marketing that captures emergency searches, builds maintenance plans, and dominates local SEO. Get found when furnaces fail and ACs break.",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112d4e5190?w=1600&q=80",
    heroImagePrompt: "Professional HVAC technician in uniform servicing a modern residential air conditioning unit on a sunny day, tool bag visible, clean and professional appearance",
    seoContent: {
      title: "HVAC SEO That Captures Crisis & Comfort Searches",
      description: "In HVAC, timing is everything. When a furnace fails at midnight in January or an AC dies during a heatwave, you need to be the first result customers see. Our HVAC-specific SEO strategy goes beyond basic local optimization to capture the full spectrum of search intent – from emergency repairs to preventive maintenance, system replacements to indoor air quality solutions.",
      benefits: [
        "Emergency Search Dominance: Rank #1 for 'furnace repair near me' and 'emergency AC repair' with pages optimized for crisis-mode searches, featuring clear emergency contact info, 24/7 availability, and response time promises",
        "Seasonal Keyword Targeting: Capitalize on predictable seasonal patterns with content that ranks before demand spikes – tune-up content in spring/fall, efficiency tips in peak seasons, and replacement guides during shoulder months",
        "Service Area Expansion: Build location-specific pages for every city, neighborhood, and zip code you serve, each optimized with local landmarks, weather patterns, and community-specific HVAC challenges",
        "Equipment Brand Pages: Create authoritative content for every brand you service (Carrier, Trane, Lennox, etc.) capturing 'brand + repair' searches and establishing expertise across all major manufacturers",
        "Problem-Solution Content: Develop comprehensive guides for common issues ('why is my furnace making noise', 'AC not cooling'), positioning you as the expert who understands the problem before offering the solution",
        "Commercial vs Residential SEO: Separate strategies for different market segments, with commercial pages focusing on maintenance contracts, compliance, and minimal downtime",
        "Voice Search Optimization: Capture 'Hey Google, find HVAC repair near me' queries with conversational content and FAQ schemas that match how people speak in emergencies"
      ]
    },
    designContent: {
      title: "HVAC Web Design That Converts Panic Into Customers",
      description: "Your website needs to work as hard as your technicians. When someone lands on your site with a broken AC in 95-degree heat, every second counts. Our HVAC-focused design approach prioritizes speed, clarity, and conversion – making it effortless for stressed customers to get help fast while building trust with those researching preventive maintenance.",
      features: [
        "Emergency-First Design: Prominent emergency CTAs that float and follow scroll, click-to-call buttons that work instantly on mobile, and emergency form submissions that promise rapid response",
        "Service Cost Calculators: Interactive tools that provide ballpark estimates for common repairs and replacements, reducing price anxiety while qualifying leads before they call",
        "Maintenance Plan Showcases: Dedicated sections that clearly communicate plan benefits, pricing tiers, and included services, with easy online enrollment to capture recurring revenue",
        "Seasonal Offer Banners: Dynamic homepage elements that automatically update based on season and weather, promoting relevant services when demand is highest",
        "System Diagnostic Tools: Interactive troubleshooting guides that help customers identify issues while subtly demonstrating your expertise and encouraging professional service",
        "Financing Calculators: Built-in payment calculators and financing application forms that help overcome price objections for system replacements",
        "Technician Profiles: Build trust with real faces and certifications, showing customers who might enter their home and highlighting expertise and professionalism",
        "Live Chat Integration: 24/7 chat capabilities that can handle emergency requests, schedule service, and answer common questions even when office is closed"
      ]
    },
    useCases: [
      {
        title: "Emergency Repair Capture",
        description: "When a system fails at 2 AM, be the company that appears first, loads fast, and makes it dead simple to request emergency service with prominent CTAs and clear emergency protocols."
      },
      {
        title: "Maintenance Plan Growth",
        description: "Convert one-time repair customers into recurring revenue with compelling plan presentations, easy enrollment, and member-exclusive benefits clearly communicated."
      },
      {
        title: "Replacement Sales",
        description: "Guide customers through the complex decision of system replacement with comparison tools, efficiency calculators, and financing options that make upgrading accessible."
      },
      {
        title: "Seasonal Preparation",
        description: "Capture tune-up and preparation services before peak seasons with targeted campaigns that educate about preventive maintenance benefits and early-bird specials."
      },
      {
        title: "Commercial Contracts",
        description: "Win lucrative commercial maintenance contracts with content that speaks to facility managers about uptime, compliance, and total cost of ownership."
      }
    ],
    painPoints: [
      "Seasonal demand fluctuations creating cash flow challenges",
      "Price-shopping customers comparing multiple quotes",
      "Emergency calls outside business hours",
      "Competition from national chains and franchises",
      "Technician recruitment and retention challenges",
      "Rising advertising costs on Google and Facebook"
    ],
    process: [
      "HVAC Market Analysis: Evaluate local competition, seasonal patterns, service area opportunities, and untapped commercial segments",
      "Technical Foundation: Set up call tracking, form analytics, heatmapping, and CRM integration to measure every interaction",
      "Local Domination: Optimize Google Business Profile, build location pages, generate reviews, and establish local citations",
      "Content Architecture: Create service pages, equipment guides, problem-solution content, and seasonal campaigns",
      "Conversion Optimization: A/B test CTAs, forms, and page layouts to maximize emergency conversions and maintenance sign-ups",
      "Reputation Building: Implement review generation systems, manage responses, and showcase social proof throughout site",
      "Ongoing Growth: Monitor rankings, expand service areas, launch seasonal campaigns, and continuously improve conversion rates"
    ],
    faqs: [
      {
        q: "How quickly will we see more emergency calls?",
        a: "Emergency search rankings can improve within 4-6 weeks with proper optimization. We'll also implement PPC campaigns for immediate visibility while organic rankings build."
      },
      {
        q: "Can you help us compete with big franchise brands?",
        a: "Absolutely. Local, family-owned shops have advantages in trust and community connection. We'll emphasize your local expertise, faster response times, and personalized service that franchises can't match."
      },
      {
        q: "Do you understand the HVAC industry specifically?",
        a: "Yes. We know the difference between a heat pump and a furnace, understand SEER ratings, and speak the language your customers use when searching for help."
      },
      {
        q: "How do you handle our multiple service areas?",
        a: "We create location-specific pages for each area you serve, ensuring you appear in local searches without creating duplicate content that could hurt rankings."
      }
    ]
  },
  {
    slug: "excursions",
    name: "Excursions",
    heroTitle: "Tour & Excursion Marketing that Books Out Calendars",
    heroSubtitle: "Kayaking, Jeep/ATV, boat tours, zipline, snorkeling, and more",
    description:
      "Drive direct bookings and reduce OTA dependence with local SEO, conversion‑first pages, time‑slot friendly flows, and review engines built for tours and activities.",
    keyServices: [
      "Local SEO for attractions",
      "Direct booking funnels",
      "Time‑slot + capacity UX",
      "Review generation + waivers",
    ],
    cta: "Get my excursion growth plan",
    metaTitle: "Excursions & Tour Marketing Agency | Drive Direct Bookings",
    metaDescription:
      "Marketing for excursions and tours: kayaking, Jeep/ATV, boat & whale tours, zipline, snorkeling/diving, guided hikes. Win local search and fill time slots.",
    heroImage:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=1600&q=80",
    useCases: [
      {
        title: "Kayaking & Paddle Tours",
        description:
          "Rank for ‘kayak tours near me’ and convert visitors with clear routes, durations, skill levels, and what’s included. Mobile‑first booking with time slots.",
      },
      {
        title: "Jeep & ATV Adventures",
        description:
          "Showcase terrain, difficulty, safety checkpoints, and guide expertise. Promote packages and upsells like photo bundles and sunset departures.",
      },
      {
        title: "Boat & Whale Watching",
        description:
          "Capacity‑aware booking, dynamic weather messaging, and seasonal content for migrations and best‑time windows to maximize conversions.",
      },
      {
        title: "Zipline Parks",
        description:
          "Clear height/weight/age requirements, waiver handling, and group bookings with real‑time availability and easy rescheduling.",
      },
      {
        title: "Snorkeling & Diving",
        description:
          "Operator credibility, equipment details, certifications, and safety content that turn browsers into confident, high‑value bookings.",
      },
      {
        title: "Guided Hikes & Nature Tours",
        description:
          "Itinerary clarity, photos from the trail, difficulty ratings, and logistics (parking, meet‑up points) to minimize friction and no‑shows.",
      },
    ],
    painPoints: [
      "Seasonality and weather cancellations",
      "OTA dependence (Viator/GetYourGuide) reducing margins",
      "Capacity, time‑slots, and group bookings",
      "Waivers and safety communication",
      "Multi‑location logistics and reviews",
    ],
    process: [
      "Discovery: goals, demand, seasonality, booking stack",
      "Foundations: tracking, reviews, local profiles, waivers",
      "Build: high‑intent pages and booking funnels",
      "Launch: content, citations, partnerships, PR",
      "Optimize: CRO, new routes, packages, pricing",
    ],
    faqs: [
      {
        q: "Can you reduce my OTA dependence?",
        a: "Yes. We build direct‑booking funnels, rank high‑intent queries, and use offer hooks + reviews to shift traffic from marketplaces to your site.",
      },
      {
        q: "Do you work with time‑slot/waiver systems?",
        a: "We align your flows with common booking + waiver tools and design pages that clearly convey slots, requirements, and what to expect.",
      },
      {
        q: "How fast will we see bookings?",
        a: "Local SEO momentum builds within weeks; CRO improvements and packages can lift conversion immediately, especially during in‑season demand.",
      },
      {
        q: "Multi‑location capable?",
        a: "Yes. We structure location hubs, reviews, and Google profiles to avoid cannibalization and grow each site’s local footprint.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    heroTitle: "Plumbing Marketing That Keeps the Phones Ringing",
    heroSubtitle: "Capture emergency searches and build long‑term brand equity",
    description:
      "Plumbing problems don't wait for business hours. When water is flooding a basement at midnight or a toilet won't flush before a dinner party, you need to be the first plumber customers find and trust. Our plumbing-specific digital marketing strategy positions you as the go-to emergency responder while building a sustainable pipeline of routine maintenance, renovations, and commercial contracts. We understand the unique challenges of plumbing marketing – from competing with DIY content to managing seasonal demand shifts – and craft solutions that turn urgent problems into loyal customer relationships.",
    keyServices: [
      "Emergency + intent landing pages",
      "Maps pack dominance",
      "Structured data + reviews",
      "Website speed + tracking",
    ],
    cta: "Get a free plumbing audit",
    metaTitle: "Plumbing Marketing Agency | SEO & Web Design for Plumbers",
    metaDescription: "Dominate emergency plumbing searches, build trust with homeowners, and grow commercial contracts. Specialized digital marketing for plumbing businesses.",
    heroImage: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&q=80",
    heroImagePrompt: "Professional plumber in clean uniform working under a modern kitchen sink with organized tools, bright lighting, demonstrating expertise and professionalism",
    seoContent: {
      title: "Plumbing SEO That Dominates Emergency & Everyday Searches",
      description: "In plumbing, being second place means losing the job. Our SEO strategy ensures you're the first call when pipes burst, drains clog, or water heaters fail. We go beyond basic local SEO to capture the entire customer journey – from emergency fixes to bathroom remodels, targeting the specific ways people search for plumbing help at every stage of need.",
      benefits: [
        "24/7 Emergency Rankings: Own searches like 'emergency plumber near me', 'burst pipe repair now', and '24 hour plumber' with pages that load instantly and clearly communicate availability",
        "Fixture-Specific Authority: Create comprehensive pages for every fixture and issue – toilets, faucets, water heaters, sump pumps – each optimized for repair, replacement, and maintenance searches",
        "DIY to Professional Pipeline: Capture DIY researchers with helpful content, then guide them to professional services when they realize the job's complexity, converting browsers into buyers",
        "Commercial Plumbing SEO: Separate strategies for commercial clients, targeting property managers, contractors, and facility maintenance teams with compliance, prevention, and rapid response messaging",
        "Location Saturation: Build presence in every neighborhood with location pages that mention local landmarks, water quality issues, and common area-specific plumbing challenges",
        "Seasonal Opportunity Capture: Rank for seasonal issues like frozen pipes, sump pump failures, and outdoor faucet winterization before weather events drive demand",
        "Brand-Specific Service Pages: Create content for every brand you service (Kohler, Delta, Moen, American Standard) to capture brand-loyal customers needing repairs or replacements",
        "Cost and Pricing Transparency: Develop pricing guide content that ranks for 'plumber cost' searches while building trust and pre-qualifying leads before they call"
      ]
    },
    designContent: {
      title: "Plumbing Web Design That Builds Trust in Crisis",
      description: "When someone's home is flooding, your website has seconds to prove you're the solution. Our plumbing-focused design prioritizes immediate action while building credibility for non-emergency decisions. Every element is crafted to convert panic into calls and research into scheduled appointments, with special attention to mobile users calling from their bathroom floor.",
      features: [
        "Crisis-Mode Interface: Floating emergency buttons, tap-to-call functionality, and emergency forms that skip unnecessary fields to get help dispatched immediately",
        "Trust Signal Abundance: Licenses, insurance, certifications, and awards prominently displayed, with real-time review feeds showing recent 5-star experiences",
        "Before/After Galleries: Visual proof of your work quality, organized by project type, showing transformations that justify premium pricing",
        "Service Area Maps: Interactive maps clearly showing coverage areas with estimated response times, helping customers know you'll actually come to them",
        "Problem Diagnostic Tools: Interactive guides helping customers identify issues and understand severity, demonstrating expertise while encouraging professional help",
        "Transparent Pricing Structure: Clear pricing ranges for common services, explanation of factors affecting cost, and upfront disclosure that builds trust",
        "Online Scheduling System: Allow non-emergency appointments to be booked 24/7, showing real-time availability and sending automatic confirmations",
        "Video Testimonials: Real customers sharing their experiences, especially emergency situations where you saved the day, building emotional connection",
        "Mobile-First Speed: Sub-2-second load times on mobile devices, with instant access to call buttons and forms without scrolling or searching"
      ]
    },
    useCases: [
      {
        title: "Burst Pipe Emergency",
        description: "When water is actively flooding, customers need immediate help. Your site must load instantly, show emergency availability, and make contact effortless with one-tap calling."
      },
      {
        title: "Water Heater Replacement",
        description: "Guide customers through selection with comparison tools, efficiency explanations, and financing options that make upgrading accessible and logical."
      },
      {
        title: "Bathroom Renovation",
        description: "Showcase high-end remodel work with galleries, design consultation offers, and partnership with contractors to capture lucrative renovation projects."
      },
      {
        title: "Commercial Maintenance",
        description: "Appeal to property managers with preventive maintenance programs, compliance documentation, and 24/7 support that minimizes tenant disruption."
      },
      {
        title: "Drain Cleaning Services",
        description: "Convert recurring drain issues into maintenance contracts with clear explanations of causes, prevention tips, and membership benefits."
      }
    ],
    painPoints: [
      "Competition from national franchises and aggressive advertisers",
      "DIY culture reducing call volume for simple repairs",
      "Price sensitivity and shopping around for quotes",
      "Difficulty communicating value vs. cheaper competitors",
      "Managing after-hours emergency calls efficiently",
      "Seasonal fluctuations in demand and cash flow"
    ],
    process: [
      "Plumbing Market Research: Analyze local competition, emergency search volume, commercial opportunities, and underserved neighborhoods",
      "Technical Setup: Implement call tracking, chat systems, form analytics, and integrate with dispatch software for seamless operations",
      "Local SEO Foundation: Optimize Google Business Profile for emergency searches, build citations, and establish review generation systems",
      "Content Development: Create service pages, problem guides, cost calculators, and area-specific content that captures all search intent",
      "Conversion Optimization: Test emergency CTAs, form fields, trust signals, and page layouts to maximize both emergency and standard conversions",
      "Reputation Management: Automate review requests, respond to all feedback, and showcase testimonials throughout the customer journey",
      "Continuous Improvement: Monitor competitor moves, expand content depth, test new conversion elements, and adapt to algorithm changes"
    ],
    faqs: [
      {
        q: "How fast can you get us ranking for emergency searches?",
        a: "We typically see improvements in 3-4 weeks for emergency terms, especially with proper Google Business Profile optimization. We'll also launch Google Ads for immediate visibility while building organic rankings."
      },
      {
        q: "Can you help us compete with Roto-Rooter and Mr. Rooter?",
        a: "Yes. We emphasize your local ownership, personalized service, and community connections that franchises can't match. Plus, we'll target specific services and areas they may overlook."
      },
      {
        q: "Do you understand plumbing terminology and services?",
        a: "Absolutely. We know the difference between PEX and copper, understand drain scopes vs. snaking, and use the exact terms your customers search for."
      },
      {
        q: "How do you handle negative reviews?",
        a: "We implement reputation management strategies including rapid response protocols, service recovery workflows, and review generation systems that ensure positive experiences outnumber negative ones."
      }
    ]
  },
  {
    slug: "roofing",
    name: "Roofing",
    heroTitle: "Roofing Marketing Built for Big Tickets",
    heroSubtitle: "Organic demand for residential and commercial jobs",
    description:
      "Roofing is a high-stakes, high-value business where trust makes or breaks the sale. Your customers are making one of their biggest home investments, often under stressful circumstances like storm damage or insurance claims. We specialize in roofing digital marketing that positions you as the trusted authority, captures storm-chaser opportunities, and builds a consistent pipeline of profitable replacement projects. From emergency tarping to complete commercial re-roofs, we understand the full spectrum of roofing services and how to market each for maximum ROI.",
    keyServices: [
      "Service area hubs",
      "Before/after galleries",
      "Lead capture + nurturing",
      "Multi‑location SEO",
    ],
    cta: "See your roofing opportunities",
    metaTitle: "Roofing Marketing Agency | Storm Damage to Full Replacements",
    metaDescription: "Digital marketing for roofing contractors. Dominate storm damage searches, win insurance claims, and build trust for high-ticket roof replacements.",
    heroImage: "https://images.unsplash.com/photo-1562113530-57ba467cea38?w=1600&q=80",
    heroImagePrompt: "Aerial view of professional roofers installing new architectural shingles on a residential home, safety equipment visible, clear blue sky background",
    seoContent: {
      title: "Roofing SEO That Captures Storms & Steady Replacements",
      description: "In roofing, timing and trust are everything. Our SEO strategy positions you to capture immediate storm damage searches while building long-term authority for planned replacements. We understand that roofing customers research extensively before committing to a five-figure investment, and we create content that guides them from initial damage assessment through insurance navigation to final contractor selection – with you as the obvious choice.",
      benefits: [
        "Storm Damage Domination: Rank instantly for 'hail damage roof repair', 'emergency roof tarp', and 'storm damage contractor' with pages that update dynamically based on weather events",
        "Insurance Claim Authority: Create comprehensive guides for insurance processes, covering deductibles, claim filing, supplementing, and working with adjusters – positioning you as the expert navigator",
        "Material Comparison Pages: Detailed content comparing asphalt shingles, metal, tile, slate, and flat roofing options with costs, lifespans, and climate considerations that educate and convert",
        "Neighborhood Targeting: Build location pages for every subdivision and area, mentioning HOA requirements, common roof ages, and recent storm impacts to capture hyper-local searches",
        "Commercial Roofing SEO: Separate strategy for commercial projects, targeting property managers and facilities teams with content about minimal disruption, warranty programs, and preventive maintenance",
        "Seasonal Content Strategy: Rank for pre-storm preparation, post-storm inspection, and seasonal maintenance searches that keep you visible year-round, not just after disasters",
        "Certification and Warranty Pages: Showcase manufacturer certifications (GAF Master Elite, CertainTeed SELECT ShingleMaster) that justify premium pricing and build trust",
        "Financing and Cost Content: Comprehensive pricing guides and financing explanations that address the #1 concern while positioning value over lowest price"
      ]
    },
    designContent: {
      title: "Roofing Web Design That Builds Trust for Big Decisions",
      description: "A roof replacement is often a homeowner's second-biggest investment after the house itself. Your website must immediately establish credibility, showcase quality, and guide visitors through complex decisions about materials, insurance, and financing. Our roofing-specific design approach combines visual proof of excellence with clear pathways that convert researchers into high-value projects.",
      features: [
        "Storm Response Center: Dedicated storm damage section with emergency contacts, claim guides, and rapid response promises that activate during severe weather events",
        "Interactive Roof Visualizers: Tools allowing homeowners to see different materials and colors on homes similar to theirs, making the abstract decision tangible and engaging",
        "Before/After Galleries on Steroids: Extensive photo galleries organized by material type, project scope, and neighborhood, with zoom functionality to showcase detail and quality",
        "Insurance Navigation Hub: Clear explanations of the claims process, what's covered, how to document damage, and how you work with adjusters to maximize coverage",
        "Trust Badge Abundance: Prominent display of licenses, insurance, manufacturer certifications, BBB ratings, and industry associations that justify premium positioning",
        "Drone Inspection Offers: Promote free drone inspections with instant booking, showcasing technology adoption while generating leads with wow-factor service",
        "Financing Calculators: Built-in payment estimators and financing applications that make large projects feel accessible, with multiple lender options for various credit profiles",
        "Project Timeline Tools: Clear visualization of project phases from inspection through completion, setting proper expectations and demonstrating professionalism",
        "Weather Integration: Real-time weather alerts and storm tracking that position your site as a resource, driving repeat visits and top-of-mind awareness"
      ]
    },
    useCases: [
      {
        title: "Post-Storm Response",
        description: "After hail or wind damage, homeowners need immediate help with tarping, inspection, and insurance guidance. Your site must load fast with clear emergency response protocols."
      },
      {
        title: "Planned Replacement",
        description: "For aging roofs, provide detailed material comparisons, warranty information, and financing options that help homeowners make confident decisions about this major investment."
      },
      {
        title: "Insurance Claim Navigation",
        description: "Guide customers through the complex insurance process with step-by-step content, adjuster meeting tips, and supplementing strategies that maximize their coverage."
      },
      {
        title: "Commercial Re-Roofing",
        description: "Appeal to commercial clients with case studies of minimal business disruption, long-term warranty programs, and preventive maintenance contracts that protect their investment."
      },
      {
        title: "Real Estate Transactions",
        description: "Capture inspection-driven repairs and pre-sale replacements with fast turnaround promises and detailed documentation that satisfies buyers, sellers, and agents."
      }
    ],
    painPoints: [
      "Seasonal feast-or-famine cycles dependent on storms",
      "Competition from storm chasers and out-of-state contractors",
      "Long sales cycles with multiple decision makers",
      "Price sensitivity and sticker shock for replacements",
      "Insurance claim complexity and adjuster relationships",
      "Lead quality issues from generic marketing"
    ],
    process: [
      "Roofing Market Analysis: Evaluate storm patterns, insurance claim volume, competitor strategies, and untapped commercial opportunities in your market",
      "Technical Infrastructure: Set up CRM integration, lead scoring, automated follow-up sequences, and tracking for multi-touch attribution",
      "Local SEO Dominance: Optimize Google Business Profile, build location pages for every service area, and implement aggressive review generation",
      "Content Architecture: Create material pages, insurance guides, storm response content, and neighborhood-specific landing pages",
      "Lead Capture Optimization: Design and test inspection offers, financing calculators, insurance claim assistance forms that convert visitors into qualified leads",
      "Visual Proof Building: Develop extensive galleries, drone footage libraries, and video testimonials that overcome trust barriers",
      "Nurture Sequence Development: Create email and SMS campaigns for long sales cycles, keeping you top-of-mind until ready to buy"
    ],
    faqs: [
      {
        q: "How do we compete with storm chasers after severe weather?",
        a: "We position you as the trusted local contractor versus fly-by-night operations, emphasizing your permanent presence, local references, and ability to honor warranties long-term."
      },
      {
        q: "Can you help us get more commercial roofing projects?",
        a: "Yes. We create separate commercial-focused content targeting facility managers and property owners, emphasizing your capabilities, certifications, and minimal disruption processes."
      },
      {
        q: "How long before we see quality roofing leads?",
        a: "Initial leads can come within weeks through PPC and storm response content. Organic rankings for competitive terms typically improve within 2-3 months with consistent effort."
      },
      {
        q: "Do you understand insurance claim processes?",
        a: "Absolutely. We know how to create content that helps homeowners navigate claims while positioning you as their advocate with adjusters, including supplementing and depreciation recovery."
      }
    ]
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
