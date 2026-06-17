import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Property Overview",
  description: "Explore the COYOTE Campus — a next-generation infrastructure ecosystem combining workforce development, logistics, agriculture, housing, and emergency preparedness.",
};

export default function PropertyPage() {
  return (
    <>
      <HeroSection
        title="Building the Future of Integrated Infrastructure"
        subtitle="The COYOTE Campus is a next-generation infrastructure ecosystem designed to combine workforce development, logistics, agriculture, housing, emergency preparedness, and sustainable operations into one connected environment."
        ctaText="View Interactive Map"
        ctaHref="/campus-map"
      />

      {/* Overview */}
      <SectionWrapper id="overview" title="Campus Overview">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
              Strategically developed as a self-sustaining operational campus, the property integrates industrial infrastructure, community support systems, workforce housing, agriculture, and smart development technologies to support long-term economic growth and operational resilience.
            </p>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
              Every component within the property is engineered to support revenue generation, workforce development, emergency response readiness, community sustainability, and future infrastructure expansion.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Total Acreage", value: "150+ Acres" },
                { label: "Greenhouse Area", value: "5 Acres" },
                { label: "Housing Units", value: "120+" },
                { label: "Cold Storage", value: "500+ Pallets" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[var(--color-bg-alt)] rounded-lg p-4">
                  <div className="text-sm text-[var(--color-text-light)]">{stat.label}</div>
                  <div className="text-xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--color-bg-alt)] rounded-xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-[var(--color-text-light)]">Campus Location Map</p>
              <Link href="/campus-map" className="mt-3 inline-block text-sm font-semibold text-[var(--color-primary)] hover:underline">
                Open Interactive Map →
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Highlights */}
      <SectionWrapper id="highlights" title="Key Property Highlights" alt>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Integrated Infrastructure Ecosystem", desc: "A fully connected campus combining logistics, workforce housing, agriculture, mechanical systems, and community services.", icon: "🔗" },
            { title: "Refrigerated & Climate-Controlled Storage", desc: "Advanced cold storage infrastructure designed for food logistics, supply chain operations, and emergency food systems.", icon: "❄️" },
            { title: "Workforce Housing Community", desc: "Trailer and modular housing systems designed to support workforce residents, trainees, veterans, and long-term community growth.", icon: "🏠" },
            { title: "150-Acre Agriculture Operations", desc: "Large-scale agricultural land designed for farming, greenhouse production, organic crops, and sustainable food systems.", icon: "🌾" },
            { title: "Greenhouse Development", desc: "5-acre greenhouse infrastructure supporting year-round organic vegetable and specialty crop production.", icon: "🌱" },
            { title: "Garage & Mechanical Infrastructure", desc: "Commercial garage and motor pool facilities supporting fleet maintenance, mechanical workforce training, and emergency infrastructure systems.", icon: "🔧" },
            { title: "Food Truck & Community Delivery", desc: "Mobile food infrastructure designed to support workforce productivity, community meal access, and emergency feeding readiness.", icon: "🚚" },
            { title: "FEMA & Emergency Readiness", desc: "Infrastructure designed to support emergency housing, disaster food supply systems, backup power systems, and community resilience operations.", icon: "🚨" },
            { title: "Sustainable Development", desc: "Future-focused infrastructure planning with renewable energy integration, greenhouse systems, water efficiency, and scalable development capabilities.", icon: "♻️" },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl border border-[var(--color-border)]">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-3 font-semibold text-[var(--color-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Location Advantages */}
      <SectionWrapper id="location" title="Location Advantages">
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { title: "Strategic Accessibility", desc: "The COYOTE campus is positioned to support transportation, logistics, agriculture, and workforce accessibility with efficient operational connectivity." },
            { title: "Logistics & Transportation Support", desc: "Designed to accommodate truck access, trailer staging, cold chain logistics, and large-scale operational movement." },
            { title: "Workforce-Centered Environment", desc: "Integrated housing, childcare, food services, and training systems create a complete workforce-support ecosystem." },
            { title: "Agricultural Expansion Potential", desc: "Large-scale land availability provides opportunities for future greenhouse expansion, organic farming, and sustainable agricultural development." },
            { title: "Emergency Response Readiness", desc: "The campus infrastructure supports rapid deployment, emergency logistics, temporary housing, and disaster-response operations." },
            { title: "Scalable Future Development", desc: "The property is designed with future expansion capabilities for additional infrastructure, renewable energy systems, workforce housing, and operational growth." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 bg-[var(--color-bg-alt)] rounded-lg items-start">
              <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--color-text-main)]">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Campus Vision */}
      <SectionWrapper id="vision" title="Campus Vision" alt>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
            COYOTE is more than a property — it is a scalable infrastructure model designed to support modern workforce communities, food sustainability, logistics operations, and resilient emergency systems. The campus combines operational efficiency with community-focused development, creating an ecosystem where infrastructure, workforce, housing, and sustainability work together in one integrated environment.
          </p>
          <div className="mt-8">
            <Link href="/campus-map" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
              Explore the Campus Map
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
