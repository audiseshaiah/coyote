import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Services Overview | COYOTE Group",
  description: "Our platform offers interactive campus mapping, accessibility-driven design, and smart navigation systems tailored for modern infrastructure.",
};

const divisions = [
  {
    slug: "refrigeration-cold-storage",
    title: "1. Refrigeration & Cold Storage Division",
    icon: "❄️",
    desc: "COYOTE Refrigeration provides advanced cold storage and climate-controlled logistics solutions for food distributors, agricultural suppliers, transportation companies, and regional supply chains.",
    features: [
      "Refrigerated pallet storage",
      "Cross-docking operations",
      "Logistics staging",
      "Trailer switching",
      "Climate-controlled specialty storage",
      "Emergency food supply infrastructure",
      "FEMA logistics readiness",
    ],
  },
  {
    slug: "daycare-workforce-support",
    title: "2. Daycare & Workforce Family Support Division",
    icon: "👶",
    desc: "Bilingual childcare, early education, workforce family assistance, and community development services.",
    features: [
      "Infant care programs",
      "Toddler interactive learning",
      "Pre-K bilingual education",
      "Workforce family support",
      "Nutritional meal programs",
      "Secure check-in systems",
    ],
  },
  {
    slug: "garage-motor-pool",
    title: "3. Garage & Motor Pool Division",
    icon: "🔧",
    desc: "Commercial garage bays, fleet maintenance, generator systems, vehicle diagnostics, mechanical training, and infrastructure support.",
    features: [
      "Commercial fleet servicing",
      "Trailer maintenance",
      "Mechanical training programs",
      "Generator readiness systems",
      "Infrastructure repair support",
      "Emergency deployment readiness",
    ],
  },
  {
    slug: "workforce-housing",
    title: "4. Workforce Housing & Model Homes Division",
    icon: "🏠",
    desc: "Trailer-based workforce housing, rent-to-own housing programs, modular housing systems, disaster-ready temporary housing, and workforce accommodation.",
    features: [
      "Workforce trailer communities",
      "Modular housing systems",
      "Rent-to-own housing opportunities",
      "Temporary workforce accommodations",
      "FEMA emergency housing readiness",
      "Community infrastructure development",
    ],
  },
  {
    slug: "food-truck-delivery",
    title: "5. Food Truck & Community Food Delivery Division",
    icon: "🚚",
    desc: "Mobile food services, internal community delivery systems, workforce meal programs, emergency feeding systems, and catering support.",
    features: [
      "Mobile food truck operations",
      "Internal community delivery",
      "Workforce meal programs",
      "Healthy meal planning",
      "Catering support",
      "Emergency feeding readiness",
    ],
  },
  {
    slug: "agriculture-greenhouse",
    title: "6. Agriculture & Greenhouse Division",
    icon: "🌱",
    desc: "Large-scale agricultural land leasing, greenhouse production, organic farming, fruit cultivation, sustainable agriculture training, and food sustainability programs.",
    features: [
      "150 acres of agricultural land",
      "5-acre greenhouse infrastructure",
      "Organic vegetable production",
      "Organic fruit cultivation",
      "Workforce agriculture programs",
      "Sustainable irrigation systems",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Services Overview"
        subtitle="Our platform offers interactive campus mapping, accessibility-driven design, and smart navigation systems tailored for modern infrastructure."
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText="View Projects"
        secondaryCtaHref="/projects"
      />

      <SectionWrapper id="divisions" title="Our Six Divisions" subtitle="Comprehensive infrastructure and workforce development solutions across six integrated operational areas.">
        <div className="space-y-8">
          {divisions.map((d, i) => (
            <div key={d.slug} className={`rounded-xl border border-[var(--color-border)] p-6 sm:p-8 ${i % 2 === 1 ? "bg-[var(--color-bg-alt)]" : "bg-white"}`}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="text-4xl">{d.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{d.title}</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed mb-4">{d.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                    {d.features.map((f) => (
                      <span key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                        <svg className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${d.slug}`} className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-[var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Learn More?</h2>
          <p className="mt-4 text-gray-300">Contact our team to discuss your needs across any COYOTE division.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              Contact Us
            </Link>
            <Link href="/careers" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
