import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

type ServiceSection = {
  heading: string;
  items: string[];
};

type PricingRow = { service: string; price: string; extra?: string };

type ServiceData = {
  title: string;
  icon: string;
  intro: string;
  overview: string;
  sections: ServiceSection[];
  features: string[];
  facilityFeatures?: string[];
  pricingTitle?: string;
  pricingHeaders?: [string, string, string];
  pricing?: PricingRow[];
  extraSections?: ServiceSection[];
};

const serviceData: Record<string, ServiceData> = {
  "refrigeration-cold-storage": {
    title: "Refrigeration & Cold Storage Division",
    icon: "❄️",
    intro: "Advanced cold storage and climate-controlled logistics solutions for food distributors, agricultural suppliers, transportation companies, and regional supply chains.",
    overview:
      "COYOTE Refrigeration provides advanced cold storage and climate-controlled logistics solutions for food distributors, agricultural suppliers, transportation companies, and regional supply chains. The facility is designed to support modern logistics needs while maintaining FEMA emergency readiness.",
    sections: [
      {
        heading: "The facility is designed to support:",
        items: [
          "Refrigerated pallet storage",
          "Cross-docking operations",
          "Logistics staging",
          "Trailer switching",
          "Climate-controlled specialty storage",
          "Emergency food supply infrastructure",
          "FEMA logistics readiness",
        ],
      },
    ],
    features: [
      "Refrigerated Storage — Secure refrigerated pallet storage with scalable volume pricing.",
      "Climate-Controlled Specialty Storage — Temperature-sensitive storage solutions for specialty products and agricultural goods.",
      "Cross Dock Operations — Fast same-day and overnight logistics transfer systems.",
      "Trailer Staging — Truck and logistics support for regional transportation operations.",
      "Emergency Logistics Support — Disaster-response cold storage and emergency supply chain support.",
    ],
    facilityFeatures: [
      "Camera-monitored security",
      "Controlled access systems",
      "Driver-friendly facilities",
      "24/7 appointment-based access",
      "Logistics support infrastructure",
      "Workforce training integration",
      "FEMA-ready operations",
    ],
    pricingTitle: "Refrigeration Pricing",
    pricing: [
      { service: "New Account Setup", price: "$30 one-time" },
      { service: "Standard Cold Storage", price: "$25 per pallet/month" },
      { service: "21–50 Pallets", price: "$23 per pallet" },
      { service: "51–100 Pallets", price: "$21 per pallet" },
      { service: "101+ Pallets", price: "$19 per pallet" },
      { service: "Handling", price: "$20 per pallet" },
      { service: "Cross Dock Same Day", price: "$20 per pallet" },
      { service: "Cross Dock Overnight", price: "$25 per pallet" },
      { service: "Trailer Flat Rate", price: "$450 per truck" },
    ],
  },
  "daycare-workforce-support": {
    title: "Daycare & Workforce Family Support Division",
    icon: "👶",
    intro: "The COYOTE Little Paws Bilingual Institute Center — a workforce-support childcare and early education facility designed to support families, workforce participation, and child development.",
    overview:
      "The COYOTE Little Paws Bilingual Institute Center is a workforce-support childcare and early education facility designed to support families, workforce participation, and child development.",
    sections: [
      {
        heading: "The center focuses on:",
        items: [
          "Bilingual learning",
          "Early childhood education",
          "Workforce family support",
          "Safe childcare systems",
          "Nutrition and wellness",
          "Community development",
        ],
      },
    ],
    features: [
      "Infant Program — Structured infant care and developmental support.",
      "Toddler Program — Interactive learning and early social development.",
      "Pre-K Learning — School readiness and bilingual educational preparation.",
      "Workforce Family Support — Flexible childcare support for working families.",
    ],
    facilityFeatures: [
      "Secure check-in systems",
      "Emergency response planning",
      "Child-safe learning spaces",
      "Bilingual learning support",
      "Workforce-aligned scheduling",
      "Nutritional meal programs",
    ],
    pricingTitle: "Daycare Pricing",
    pricingHeaders: ["Program", "Weekly Pricing", "Monthly Estimate"],
    pricing: [
      { service: "Infant Care", price: "$325/week", extra: "~$1,300/month" },
      { service: "Toddler Program", price: "$300/week", extra: "~$1,200/month" },
      { service: "Pre-K Program", price: "$275/week", extra: "~$1,100/month" },
      { service: "Workforce Family Support", price: "Flexible", extra: "Contact for Pricing" },
    ],
  },
  "garage-motor-pool": {
    title: "Garage & Motor Pool Division",
    icon: "🔧",
    intro: "Commercial garage bays, fleet maintenance, generator systems, vehicle diagnostics, mechanical training, and infrastructure support.",
    overview:
      "The COYOTE Garage & Motor Pool Division supports fleet maintenance, workforce mechanical training, emergency generator systems, and infrastructure repair services.",
    sections: [
      {
        heading: "This division is designed to support:",
        items: [
          "Commercial fleet servicing",
          "Trailer maintenance",
          "Mechanical training programs",
          "Generator readiness systems",
          "Infrastructure repair support",
          "Emergency deployment readiness",
        ],
      },
    ],
    features: [
      "Vehicle Maintenance — Fleet servicing and preventive maintenance.",
      "Mechanical Diagnostics — Commercial vehicle and equipment diagnostics.",
      "Generator & Emergency Systems — Backup power and emergency infrastructure support.",
      "Workforce Mechanical Training — Hands-on mechanical education and workforce skill development.",
    ],
    facilityFeatures: [
      "Multi-bay garage systems",
      "Fleet maintenance operations",
      "Generator servicing",
      "Workforce mechanical training",
      "Emergency infrastructure support",
    ],
  },
  "workforce-housing": {
    title: "Workforce Housing & Model Homes Division",
    icon: "🏠",
    intro: "Affordable, safe, and community-driven housing solutions for workforce members, trainees, veterans, emergency support teams, and long-term residents.",
    overview:
      "The COYOTE Workforce Housing & Model Homes Division is designed to provide affordable, safe, and community-driven housing solutions for workforce members, trainees, veterans, emergency support teams, and long-term residents. The goal is to create a sustainable live-work ecosystem where residents have access to employment opportunities, food services, childcare, transportation support, and workforce development programs.",
    sections: [
      {
        heading: "The housing ecosystem combines:",
        items: [
          "Workforce trailer communities",
          "Modular housing systems",
          "Rent-to-own housing opportunities",
          "Temporary workforce accommodations",
          "FEMA emergency housing readiness",
          "Community infrastructure development",
        ],
      },
    ],
    features: [
      "Workforce Trailer Housing — Modern trailer-based accommodations designed for workers, trainees, logistics operators, seasonal agricultural teams, and temporary workforce members.",
      "Model Homes Program — Modern modular homes designed for families, workforce professionals, and long-term residents.",
      "Rent-to-Own Program — Helps qualified residents transition from renting into property ownership with affordable monthly payments.",
      "FEMA Emergency Housing Support — Housing systems designed to support emergency deployment and temporary disaster-response accommodations.",
    ],
    facilityFeatures: [
      "Internal food delivery access",
      "Daycare support nearby",
      "Workforce transportation support",
      "Emergency response integration",
      "Maintenance and repair services",
      "Green spaces and agriculture integration",
    ],
    pricingTitle: "Workforce Housing Pricing",
    pricing: [
      { service: "Workforce Trailer Basic", price: "$700/month" },
      { service: "Workforce Trailer Premium", price: "$900/month" },
      { service: "Daily Stay", price: "$35/day" },
      { service: "Weekly Stay", price: "$200/week" },
      { service: "2 Bedroom Model Home", price: "$1,850/month" },
      { service: "3 Bedroom Model Home", price: "$2,250/month" },
      { service: "Rent-to-Own Program", price: "Custom Qualification Based" },
    ],
    extraSections: [
      {
        heading: "Target Residents:",
        items: [
          "Workforce employees",
          "Agricultural workers",
          "Veterans",
          "Emergency support staff",
          "Students and trainees",
          "Seasonal workforce teams",
          "Families transitioning into home ownership",
        ],
      },
    ],
  },
  "food-truck-delivery": {
    title: "Food Truck & Community Food Delivery Division",
    icon: "🚚",
    intro: "A mobile food and meal delivery ecosystem designed to support workforce residents, operational staff, trainees, visitors, and emergency support operations.",
    overview:
      "The COYOTE Food Truck & Community Delivery Division is a mobile food and meal delivery ecosystem designed to support workforce residents, operational staff, trainees, visitors, and emergency support operations within the COYOTE campus community. The system is designed to create a reliable food infrastructure that supports both daily operations and emergency response situations.",
    sections: [
      {
        heading: "The service combines:",
        items: [
          "Mobile food truck operations",
          "Internal community delivery",
          "Workforce meal programs",
          "Healthy meal planning",
          "Catering support",
          "Emergency feeding readiness",
        ],
      },
    ],
    features: [
      "Mobile Food Truck Operations — Freshly prepared meals, beverages, snacks, smoothies, and healthy food options across the property.",
      "Community Food Delivery — Internal delivery services for residents and workforce members including trailer and housing delivery.",
      "Workforce Meal Programs — Affordable meal systems designed for workers, trainees, and residents with low-cost packages and subscriptions.",
      "Emergency Feeding Systems — Mobile food deployment and emergency meal distribution supporting FEMA readiness.",
    ],
    facilityFeatures: [
      "Supports workforce productivity",
      "Creates local food accessibility",
      "Generates recurring revenue",
      "Supports emergency preparedness",
      "Encourages community engagement",
      "Integrates with agricultural operations",
    ],
    pricingTitle: "Food Service Pricing",
    pricing: [
      { service: "Meals", price: "$9–$12" },
      { service: "Smoothies", price: "$6–$8" },
      { service: "Snacks", price: "$3–$6" },
      { service: "Workforce Meal Packages", price: "Custom Pricing" },
      { service: "Catering Services", price: "Custom Pricing" },
      { service: "Internal Community Delivery", price: "Included / Distance Based" },
    ],
    extraSections: [
      {
        heading: "Food Truck Offerings Include:",
        items: [
          "Breakfast meals",
          "Lunch and dinner service",
          "Fresh smoothies and beverages",
          "Grab-and-go snacks",
          "Workforce meal packages",
          "Seasonal menu items",
        ],
      },
    ],
  },
  "agriculture-greenhouse": {
    title: "Agriculture & Greenhouse Division",
    icon: "🌱",
    intro: "A large-scale agricultural ecosystem designed to support sustainable farming, food production, workforce development, greenhouse operations, and agricultural land leasing.",
    overview:
      "The COYOTE Agriculture & Greenhouse Division is a large-scale agricultural ecosystem designed to support sustainable farming, food production, workforce development, greenhouse operations, and agricultural land leasing. This division is designed to support both commercial agricultural operations and long-term food sustainability initiatives.",
    sections: [
      {
        heading: "The property includes:",
        items: [
          "150 acres of agricultural land",
          "5-acre greenhouse infrastructure",
          "Organic vegetable production",
          "Organic fruit cultivation",
          "Workforce agriculture programs",
          "Sustainable irrigation systems",
          "Farm-to-community food integration",
        ],
      },
    ],
    features: [
      "Agricultural Land Leasing — Land available for lease to farmers, growers, agricultural operators, and sustainability programs.",
      "Greenhouse Operations — 5-acre greenhouse system supporting year-round controlled farming with climate-controlled growing systems.",
      "Organic Fruit & Vegetable Production — Healthy, sustainable, and community-focused food production including leafy greens, tomatoes, peppers, berries, and seasonal fruits.",
      "Workforce Agriculture Training — Hands-on agricultural education including organic farming, greenhouse management, irrigation systems, and sustainable agriculture.",
    ],
    facilityFeatures: [
      "Organic farming systems",
      "Water-efficient irrigation",
      "Greenhouse climate control",
      "Farm sustainability planning",
      "Renewable energy integration",
      "Local food ecosystem support",
    ],
    pricingTitle: "Agriculture Pricing",
    pricing: [
      { service: "Agricultural Land Lease", price: "$75–$150 per acre/month" },
      { service: "Greenhouse Rental", price: "Custom Pricing" },
      { service: "Organic Farming Partnerships", price: "Revenue Share / Lease Model" },
      { service: "Crop Storage Support", price: "Custom Pricing" },
      { service: "Agriculture Workforce Training", price: "Program Based" },
    ],
    extraSections: [
      {
        heading: "Agriculture Revenue Opportunities:",
        items: [
          "Agricultural land rental income",
          "Greenhouse production revenue",
          "Organic produce sales",
          "Community food supply systems",
          "Farm-to-food-truck integration",
          "Local produce distribution",
          "Sustainability partnerships",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | COYOTE Group`,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) notFound();

  return (
    <>
      <HeroSection
        title={`${service.icon} ${service.title}`}
        subtitle={service.intro}
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText="All Divisions"
        secondaryCtaHref="/services"
      />

      {/* Overview */}
      <SectionWrapper id="overview" title="Overview">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">{service.overview}</p>
          {service.sections.map((s) => (
            <div key={s.heading} className="mb-4">
              <p className="font-semibold text-[var(--color-text-main)] mb-3">{s.heading}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[var(--color-text-light)]">
                    <svg className="w-4 h-4 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Core Services / Programs */}
      <SectionWrapper id="services" title="Programs & Services" alt>
        <div className="max-w-4xl mx-auto space-y-4">
          {service.features.map((f) => {
            const [name, ...rest] = f.split(" — ");
            return (
              <div key={name} className="bg-white border border-[var(--color-border)] rounded-xl p-5">
                <h4 className="font-bold text-[var(--color-primary)] mb-1">{name}</h4>
                {rest.length > 0 && <p className="text-sm text-[var(--color-text-light)]">{rest.join(" — ")}</p>}
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Facility Features */}
      {service.facilityFeatures && (
        <SectionWrapper id="facility" title="Facility Features">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.facilityFeatures.map((f) => (
              <span key={f} className="flex items-center gap-2 text-[var(--color-text-light)]">
                <svg className="w-4 h-4 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </span>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Pricing Table */}
      {service.pricing && (
        <SectionWrapper id="pricing" title={service.pricingTitle ?? "Pricing"} alt>
          <div className="max-w-2xl mx-auto overflow-hidden rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="text-left px-5 py-3 font-semibold uppercase tracking-wide">
                    {service.pricingHeaders?.[0] ?? "Service"}
                  </th>
                  <th className="text-left px-5 py-3 font-semibold uppercase tracking-wide">
                    {service.pricingHeaders?.[1] ?? "Pricing"}
                  </th>
                  {service.pricingHeaders?.[2] && (
                    <th className="text-left px-5 py-3 font-semibold uppercase tracking-wide">
                      {service.pricingHeaders[2]}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {service.pricing.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-bg-alt)]"}>
                    <td className="px-5 py-3 font-semibold text-[var(--color-text-main)]">{row.service}</td>
                    <td className="px-5 py-3 text-[var(--color-text-light)]">{row.price}</td>
                    {service.pricingHeaders?.[2] && (
                      <td className="px-5 py-3 text-[var(--color-text-light)]">{row.extra ?? ""}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionWrapper>
      )}

      {/* Extra Sections */}
      {service.extraSections?.map((s) => (
        <SectionWrapper key={s.heading} id="extra" alt>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-4">{s.heading}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {s.items.map((item) => (
                <span key={item} className="flex items-center gap-2 text-[var(--color-text-light)]">
                  <svg className="w-4 h-4 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <section className="bg-[var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Interested in {service.title}?</h2>
          <p className="mt-4 text-gray-300">Contact our team to learn more or schedule a consultation.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              Contact Us
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              All Divisions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
