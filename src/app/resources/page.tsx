import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Resources & Information | COYOTE Group",
  description: "Access valuable resources and insights to better understand our platform and services.",
};

const resourceCategories = [
  {
    title: "Refrigeration & Cold Storage",
    icon: "❄️",
    desc: "Guides and information about cold storage operations, cross-docking, trailer staging, and FEMA logistics readiness.",
  },
  {
    title: "Workforce Housing",
    icon: "🏠",
    desc: "Information on workforce trailer accommodations, model homes, and rent-to-own program details.",
  },
  {
    title: "Daycare & Education",
    icon: "👶",
    desc: "Program information for the COYOTE Little Paws Bilingual Institute Center — infant, toddler, and Pre-K enrollment.",
  },
  {
    title: "Agriculture & Greenhouse",
    icon: "🌱",
    desc: "Land lease opportunities, greenhouse rental, organic farming partnerships, and crop storage support.",
  },
  {
    title: "FEMA & Emergency Preparedness",
    icon: "🚨",
    desc: "Overview of how COYOTE infrastructure supports emergency housing, disaster food supply, and community resilience.",
  },
  {
    title: "Food Truck & Community Delivery",
    icon: "🚚",
    desc: "Meal offerings, workforce meal package options, community delivery coverage, and catering information.",
  },
  {
    title: "Garage & Motor Pool",
    icon: "🔧",
    desc: "Fleet maintenance services, mechanical training programs, generator systems, and infrastructure repair support.",
  },
  {
    title: "Workforce Training Programs",
    icon: "📚",
    desc: "Training programs across refrigeration, agriculture, mechanics, food services, childcare, and emergency operations.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="Resources & Information"
        subtitle="Access valuable resources and insights to better understand our platform and services."
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText="View Divisions"
        secondaryCtaHref="/services"
      />

      <SectionWrapper id="resources-intro">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
            The COYOTE Resource Center provides articles, guides, and downloadable information across all divisions. Contact our team to request specific guides, program details, or operational overviews.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="resources-list" title="Resource Categories" subtitle="Program information and operational details across all COYOTE divisions." alt>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceCategories.map((resource) => (
            <div key={resource.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
              <div className="text-3xl mb-3">{resource.icon}</div>
              <h3 className="text-base font-bold text-[var(--color-text-main)] mb-2">{resource.title}</h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed flex-1">{resource.desc}</p>
              <Link href="/contact" className="mt-4 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors">
                Request Info →
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-[var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Need More Information?</h2>
          <p className="mt-4 text-gray-300">Our team is available to answer questions about any COYOTE division, program, or service.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              Submit an Inquiry
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
