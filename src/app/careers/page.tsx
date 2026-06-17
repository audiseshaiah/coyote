import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Careers | COYOTE Group",
  description: "Join the COYOTE team. Opportunities across logistics, refrigeration, agriculture, housing, childcare, mechanical systems, sustainability, and emergency preparedness.",
};

const whyJoin = [
  { title: "Workforce Development", icon: "📈", desc: "Hands-on learning opportunities across multiple industries and operational systems." },
  { title: "Career Growth", icon: "🚀", desc: "Opportunities for long-term employment, certifications, and advancement." },
  { title: "Community-Focused Environment", icon: "🤝", desc: "Work in a collaborative ecosystem designed to support workforce families and community growth." },
  { title: "Multi-Industry Experience", icon: "🏭", desc: "Gain experience across logistics, agriculture, refrigeration, housing, food services, and infrastructure operations." },
  { title: "FEMA & Emergency Readiness Training", icon: "🚨", desc: "Participate in workforce programs supporting disaster readiness and emergency operations." },
];

const divisions = [
  {
    title: "Refrigeration & Logistics Division",
    icon: "❄️",
    positions: [
      "Refrigeration Technician",
      "Cold Storage Operator",
      "Warehouse Associate",
      "Forklift Operator",
      "Logistics Coordinator",
      "Shipping & Receiving Associate",
      "Cross Dock Operations Staff",
    ],
  },
  {
    title: "Garage & Motor Pool Division",
    icon: "🔧",
    positions: [
      "Diesel Mechanic",
      "Fleet Maintenance Technician",
      "Generator Technician",
      "Equipment Maintenance Operator",
      "Mechanical Assistant",
    ],
  },
  {
    title: "Workforce Housing & Property Division",
    icon: "🏠",
    positions: [
      "Property Maintenance Technician",
      "Workforce Housing Coordinator",
      "Grounds Maintenance Staff",
      "Utility Support Technician",
    ],
  },
  {
    title: "Daycare & Education Division",
    icon: "👶",
    positions: [
      "Childcare Provider",
      "Bilingual Teacher Assistant",
      "Infant Care Specialist",
      "Toddler Program Assistant",
      "Nutrition Assistant",
    ],
  },
  {
    title: "Food Truck & Community Delivery Division",
    icon: "🚚",
    positions: [
      "Food Truck Cook",
      "Kitchen Assistant",
      "Community Delivery Driver",
      "Catering Assistant",
      "Food Service Coordinator",
    ],
  },
  {
    title: "Agriculture & Greenhouse Division",
    icon: "🌱",
    positions: [
      "Farm Worker",
      "Greenhouse Technician",
      "Irrigation Assistant",
      "Organic Farming Specialist",
      "Produce Distribution Assistant",
    ],
  },
];

const applicationFields = [
  { group: "Personal Information", items: ["Full Name", "Address", "City / State / ZIP", "Phone Number", "Email Address"] },
  { group: "Employment Details", items: ["Position Desired", "Full-Time / Part-Time Preference", "Available Start Date", "Expected Pay"] },
  { group: "Education", items: ["High School Information", "College / Trade School", "Degree / Certifications"] },
  { group: "Work Experience", items: ["Previous Employers", "Responsibilities", "Employment Dates"] },
  { group: "Skills", items: ["Refrigeration", "Mechanical", "Electrical", "Logistics", "Customer Service", "Agriculture", "Childcare"] },
];

export default function CareersPage() {
  return (
    <>
      <HeroSection
        title="Join the COYOTE Team"
        subtitle="COYOTE Group is building a workforce-driven ecosystem focused on logistics, refrigeration, agriculture, housing, childcare, mechanical systems, sustainability, and emergency preparedness."
        ctaText="Apply Today"
        ctaHref="/contact"
        secondaryCtaText="View Openings"
        secondaryCtaHref="#openings"
      />

      {/* Intro */}
      <SectionWrapper id="intro">
        <div className="max-w-3xl mx-auto text-center text-[var(--color-text-light)] leading-relaxed space-y-4 text-lg">
          <p>
            We are looking for motivated individuals who want to grow with an organization focused on innovation, workforce development, and long-term community impact.
          </p>
          <p>
            Whether you are experienced in logistics, mechanical systems, childcare, food services, agriculture, or operations, COYOTE provides opportunities to build valuable skills and contribute to a future-focused infrastructure environment.
          </p>
        </div>
      </SectionWrapper>

      {/* Why Join */}
      <SectionWrapper id="why" title="Why Work With COYOTE?" alt>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyJoin.map((w) => (
            <div key={w.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6">
              <div className="text-3xl mb-3">{w.icon}</div>
              <h3 className="font-bold text-[var(--color-primary)] mb-2">{w.title}</h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Openings */}
      <SectionWrapper id="openings" title="Current Employment Opportunities" subtitle="Open positions across all COYOTE divisions.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div) => (
            <div key={div.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{div.icon}</span>
                <h3 className="font-bold text-[var(--color-primary)] text-sm leading-snug">{div.title}</h3>
              </div>
              <ul className="space-y-2">
                {div.positions.map((pos) => (
                  <li key={pos} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                    <svg className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {pos}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Application Info */}
      <SectionWrapper id="application" title="Employment Application" subtitle="Applicants can apply directly through the COYOTE online employment application system." alt>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {applicationFields.map((group) => (
            <div key={group.group} className="bg-white border border-[var(--color-border)] rounded-xl p-5">
              <h4 className="font-bold text-[var(--color-primary)] mb-3 text-sm">{group.group}</h4>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-xs text-[var(--color-text-light)] flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-[var(--color-border)] rounded-xl p-6 text-center">
          <h4 className="font-bold text-[var(--color-primary)] mb-2">Equal Opportunity Commitment</h4>
          <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-4">
            COYOTE Group is committed to building an inclusive workforce environment that supports veterans, workforce trainees, students, women, disabled workforce members, and community-based employment opportunities. We believe in creating long-term opportunities that support workforce growth, skill development, and sustainable careers.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
            Apply Today
          </a>
        </div>
      </SectionWrapper>

      <section className="bg-[var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Apply Today</h2>
          <p className="mt-4 text-gray-300">
            Join a growing infrastructure ecosystem focused on workforce development, operational excellence, sustainability, and future-ready community systems.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              Submit Application
            </a>
            <a href="/about" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Learn About Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
