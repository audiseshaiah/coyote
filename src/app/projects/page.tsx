import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Developments | COYOTE Group",
  description: "Explore COYOTE Group's infrastructure developments across refrigeration, housing, agriculture, garage, childcare, food services, and renewable energy.",
};

const projects = [
  {
    title: "Refrigerated Cold Storage Facility",
    icon: "❄️",
    description: "A modern refrigerated logistics facility designed to support cold chain operations, agricultural storage, food distribution, and emergency food supply systems.",
    features: [
      "Climate-controlled storage",
      "Cross-docking operations",
      "Trailer staging support",
      "24/7 monitored access",
      "Workforce logistics training",
      "FEMA-ready food storage systems",
    ],
  },
  {
    title: "Climate-Controlled Specialty Storage",
    icon: "🌡️",
    description: "Specialized environmental storage infrastructure designed for temperature-sensitive products, agricultural goods, and commercial logistics support.",
    features: [
      "Controlled temperature systems",
      "High-security storage",
      "Specialty product handling",
      "Scalable logistics support",
      "Emergency operational readiness",
    ],
  },
  {
    title: "Workforce Housing Community",
    icon: "🏘️",
    description: "A workforce-focused housing ecosystem designed to provide affordable accommodations for employees, trainees, agricultural workers, and long-term residents.",
    features: [
      "Workforce trailers",
      "Modular housing systems",
      "Rent-to-own opportunities",
      "Community-focused environment",
      "FEMA emergency housing integration",
    ],
  },
  {
    title: "Model Homes Development",
    icon: "🏠",
    description: "Modern modular homes designed to support sustainable living, workforce family housing, and future residential expansion.",
    features: [
      "Energy-efficient layouts",
      "Smart infrastructure systems",
      "Family-focused housing",
      "Long-term community development",
      "Scalable expansion planning",
    ],
  },
  {
    title: "Garage & Motor Pool Facility",
    icon: "🔧",
    description: "A commercial mechanical and infrastructure support center designed for fleet servicing, workforce mechanical training, and emergency systems maintenance.",
    features: [
      "Multi-bay garage systems",
      "Fleet maintenance operations",
      "Generator servicing",
      "Workforce mechanical training",
      "Emergency infrastructure support",
    ],
  },
  {
    title: "COYOTE Little Paws Bilingual Institute Center",
    icon: "👶",
    description: "A bilingual daycare and early education center focused on supporting workforce families, child development, and community growth.",
    features: [
      "Infant and toddler programs",
      "Bilingual learning systems",
      "Secure childcare environment",
      "Workforce family support",
      "Educational development programs",
    ],
  },
  {
    title: "Food Truck & Community Delivery System",
    icon: "🚚",
    description: "A mobile food and internal delivery ecosystem designed to support workforce residents, operational teams, and community food accessibility.",
    features: [
      "Mobile food truck operations",
      "Workforce meal programs",
      "Community food delivery",
      "Emergency feeding capabilities",
      "Online ordering integration",
    ],
  },
  {
    title: "Agriculture & Greenhouse Operations",
    icon: "🌱",
    description: "A large-scale agricultural development designed for sustainable farming, greenhouse production, organic crops, and workforce agriculture training.",
    features: [
      "150-acre agricultural property",
      "5-acre greenhouse systems",
      "Organic fruit and vegetable production",
      "Sustainable irrigation infrastructure",
      "Agricultural workforce training",
    ],
  },
  {
    title: "Renewable Energy & Microgrid Infrastructure",
    icon: "⚡",
    description: "Future-ready energy systems designed to support operational sustainability, emergency preparedness, and renewable energy integration.",
    features: [
      "Solar-ready infrastructure",
      "Backup generator systems",
      "Battery-ready energy planning",
      "Sustainable power systems",
      "Emergency operational continuity",
    ],
  },
  {
    title: "Environmental & Water Systems",
    icon: "💧",
    description: "Environmental infrastructure designed to support water management, sustainability, testing systems, and regulatory compliance.",
    features: [
      "Water testing systems",
      "Irrigation infrastructure",
      "Environmental monitoring",
      "Sustainable water management",
      "Agricultural water support",
    ],
  },
];

const principles = [
  { title: "Revenue Generation", desc: "Creating sustainable operational income streams." },
  { title: "Workforce Development", desc: "Supporting training, education, and long-term employment opportunities." },
  { title: "FEMA Readiness", desc: "Ensuring infrastructure supports emergency preparedness and disaster response." },
  { title: "Sustainability", desc: "Implementing environmentally responsible infrastructure and operational systems." },
  { title: "Community Growth", desc: "Building a connected ecosystem that supports residents, workers, and future expansion." },
];

const futureExpansions = [
  "Expanded greenhouse operations",
  "Additional workforce housing",
  "Renewable energy systems",
  "Smart campus technologies",
  "Advanced logistics infrastructure",
  "Expanded agricultural production",
  "Community commercial services",
  "Emergency response infrastructure",
];

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        title="Projects & Developments"
        subtitle="Explore the infrastructure developments that make up the COYOTE integrated campus ecosystem."
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services"
      />

      <SectionWrapper id="projects" title="Current Developments" subtitle="Each COYOTE development is designed to generate revenue, support workforce growth, and strengthen community resilience.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{p.icon}</div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-3">{p.description}</p>
                  <div className="space-y-1">
                    {p.features.map((f) => (
                      <span key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-light)]">
                        <svg className="w-3 h-3 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="philosophy" title="Development Philosophy" subtitle="Every COYOTE development is designed around five core principles." alt>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {principles.map((p) => (
            <div key={p.title} className="bg-white border border-[var(--color-border)] rounded-xl p-5 text-center">
              <h4 className="font-bold text-[var(--color-primary)] mb-2 text-sm">{p.title}</h4>
              <p className="text-xs text-[var(--color-text-light)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="future" title="Future Expansion Plans" subtitle="COYOTE continues to plan future infrastructure developments to support long-term community and operational growth.">
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {futureExpansions.map((f) => (
            <span key={f} className="flex items-center gap-2 text-[var(--color-text-light)]">
              <svg className="w-4 h-4 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </span>
          ))}
        </div>
        <p className="text-center text-[var(--color-text-light)] mt-8 max-w-2xl mx-auto">
          The long-term vision is to create a scalable, self-sustaining infrastructure ecosystem capable of supporting workforce growth, operational resilience, and community development for years to come.
        </p>
      </SectionWrapper>

      <section className="bg-[var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Partner with COYOTE</h2>
          <p className="mt-4 text-gray-300">Interested in our developments or investment opportunities? Get in touch with our team.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              Contact Us
            </Link>
            <Link href="/property" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              View Property
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
