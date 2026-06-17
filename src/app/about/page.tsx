import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "About Us | COYOTE Group",
  description: "COYOTE Group is a multi-sector infrastructure and workforce development organization focused on building sustainable systems.",
};

const coreValues = [
  { title: "Accessibility First", icon: "♿", desc: "Designing systems and environments that prioritize access for all individuals." },
  { title: "Workforce Empowerment", icon: "💪", desc: "Creating training, employment, and growth opportunities across every division." },
  { title: "Sustainability", icon: "♻️", desc: "Implementing environmentally responsible infrastructure and operational systems." },
  { title: "FEMA Preparedness", icon: "🚨", desc: "Ensuring infrastructure supports emergency preparedness and disaster response." },
  { title: "Community Development", icon: "🏘️", desc: "Building connected ecosystems that support residents, workers, and future expansion." },
  { title: "Infrastructure Innovation", icon: "⚙️", desc: "Leveraging smart technology and digital twin systems to modernize operations." },
  { title: "Operational Transparency", icon: "🔍", desc: "Maintaining open, accountable systems across all programs and initiatives." },
  { title: "Long-Term Impact", icon: "🎯", desc: "Planning and building for lasting community, economic, and environmental outcomes." },
];

const integratedPurposes = [
  "Business operations",
  "Workforce education",
  "Disaster response preparation",
  "Grant and funding qualification",
  "Community support services",
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About COYOTE Group"
        subtitle="A multi-sector infrastructure and workforce development organization building sustainable systems that combine revenue generation, emergency readiness, training, and community support."
        ctaText="Our Divisions"
        ctaHref="/services"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      <SectionWrapper id="overview" title="Company Overview">
        <div className="max-w-3xl mx-auto space-y-4 text-[var(--color-text-light)] text-lg leading-relaxed">
          <p>
            COYOTE Group is a multi-sector infrastructure and workforce development organization focused on building sustainable systems that combine revenue generation, emergency readiness, training, and community support.
          </p>
          <p>The organization develops integrated environments where infrastructure assets serve multiple purposes simultaneously:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {integratedPurposes.map((p) => (
              <li key={p} className="text-base">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="mission-vision" alt>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border border-[var(--color-border)] rounded-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Mission Statement</h3>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              To create sustainable infrastructure ecosystems that empower workforce development, strengthen emergency preparedness, improve accessibility, and support long-term economic growth.
            </p>
          </div>
          <div className="bg-white border border-[var(--color-border)] rounded-xl p-8">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Vision Statement</h3>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              To become a national model for self-sustaining infrastructure systems that integrate technology, workforce development, environmental responsibility, and emergency readiness.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="values" title="Core Values" subtitle="The principles that guide everything we build, operate, and develop at COYOTE Group.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v) => (
            <div key={v.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-[var(--color-text-main)] mb-2">{v.title}</h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-[var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Join the COYOTE Ecosystem</h2>
          <p className="mt-4 text-gray-300">
            Learn more about our divisions, explore career opportunities, or get in touch to partner with COYOTE Group.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/careers" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              View Careers
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
