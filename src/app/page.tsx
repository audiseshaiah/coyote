import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const divisions = [
  {
    title: "Refrigeration & Cold Storage Division",
    description: "Industrial refrigerated logistics, climate-controlled storage, cross-docking, and supply chain infrastructure.",
    icon: "❄️",
    href: "/services/refrigeration-cold-storage",
  },
  {
    title: "Daycare & Workforce Family Support Division",
    description: "Bilingual childcare, early education, workforce family assistance, and community development services.",
    icon: "👶",
    href: "/services/daycare-workforce-support",
  },
  {
    title: "Garage & Motor Pool Division",
    description: "Commercial garage bays, fleet maintenance, generator systems, vehicle diagnostics, mechanical training, and infrastructure support.",
    icon: "🔧",
    href: "/services/garage-motor-pool",
  },
  {
    title: "Workforce Housing & Model Homes Division",
    description: "Trailer-based workforce housing, rent-to-own housing programs, modular housing systems, disaster-ready temporary housing, and workforce accommodation.",
    icon: "🏠",
    href: "/services/workforce-housing",
  },
  {
    title: "Food Truck & Community Food Delivery Division",
    description: "Mobile food services, internal community delivery systems, workforce meal programs, emergency feeding systems, and catering support.",
    icon: "🚚",
    href: "/services/food-truck-delivery",
  },
  {
    title: "Agriculture & Greenhouse Division",
    description: "Large-scale agricultural land leasing, greenhouse production, organic farming, fruit cultivation, sustainable agriculture training, and food sustainability programs.",
    icon: "🌱",
    href: "/services/agriculture-greenhouse",
  },
];

const aboutPoints = [
  "Business operations",
  "Workforce education",
  "Disaster response preparation",
  "Grant and funding qualification",
  "Community support services",
];

export default function Home() {
  return (
    <>
      <HeroSection
        title="Building a Self-Sustaining Infrastructure Ecosystem for Workforce, FEMA Readiness & Smart Development"
        subtitle="COYOTE Group combines digital twin technology, cold storage infrastructure, workforce development, grant intelligence, and emergency preparedness into one integrated platform."
        ctaText="Explore Campus Map"
        ctaHref="/campus-map"
        secondaryCtaText="Our Divisions"
        secondaryCtaHref="/services"
      />

      {/* About */}
      <SectionWrapper id="about-intro" alt>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-4">About COYOTE Group</h2>
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-4">
            Welcome to COYOTE – an innovative campus platform designed to provide seamless navigation and interactive exploration of modern infrastructure.
          </p>
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
            COYOTE Group is a multi-sector infrastructure and workforce development organization focused on building sustainable systems that combine revenue generation, emergency readiness, training, and community support.
          </p>
          <p className="text-base text-[var(--color-text-light)] mb-4">The organization develops integrated environments where infrastructure assets serve multiple purposes simultaneously:</p>
          <ul className="list-disc text-left inline-block space-y-1 mb-6 pl-5">
            {aboutPoints.map((p) => (
              <li key={p} className="text-base text-[var(--color-text-light)]">{p}</li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Divisions */}
      <SectionWrapper id="divisions" title="Services We Provide" subtitle="Comprehensive infrastructure and workforce development solutions designed to create sustainable, self-sufficient ecosystems.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division) => (
            <Card key={division.title} {...division} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-light)] transition-colors">
            View All Divisions
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </SectionWrapper>

      {/* Map Preview */}
      <SectionWrapper id="map-preview" title="Interactive Campus Map" subtitle="Navigate our integrated campus virtually. Explore buildings, infrastructure zones, parking, and access routes." alt>
        <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-primary)]/10 rounded-2xl p-8 sm:p-12 text-center">
          <div className="w-20 h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Explore the COYOTE Campus</h3>
          <p className="text-[var(--color-text-light)] mb-6 max-w-md mx-auto">
            Our interactive map features clickable infrastructure zones — cold storage, workforce housing, greenhouse, garage, daycare facilities — with full keyboard and screen-reader accessibility.
          </p>
          <Link href="/campus-map" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
            Open Interactive Map
          </Link>
        </div>
      </SectionWrapper>

      {/* Little Paws Spotlight */}
      <SectionWrapper id="daycare" title="COYOTE Little Paws Bilingual Institute Center" subtitle="Workforce-support childcare and early education facility designed to support families, workforce participation, and child development.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
              The center focuses on bilingual learning, early childhood education, workforce family support, safe childcare systems, nutrition and wellness, and community development.
            </p>
            <ul className="space-y-2 mb-6">
              {["Bilingual (English & Spanish) learning environment", "Structured infant, toddler, and Pre-K programs", "Workforce-aligned scheduling for working families", "Nutritional meal programs", "Secure, child-safe learning spaces"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                  <svg className="w-4 h-4 text-[var(--color-success)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/services/daycare-workforce-support" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
              Learn More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ label: "Infant Program", price: "$325/wk", icon: "👶" }, { label: "Toddler Program", price: "$300/wk", icon: "🧒" }, { label: "Pre-K Learning", price: "$275/wk", icon: "📚" }, { label: "Workforce Family Support", price: "Flexible", icon: "🤝" }].map((p) => (
              <div key={p.label} className="bg-white border border-[var(--color-border)] rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="font-semibold text-[var(--color-text-main)] text-sm">{p.label}</div>
                <div className="text-[var(--color-accent-dark)] font-bold mt-1">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Whether you&apos;re interested in cold storage, childcare, workforce housing, or partnering with COYOTE Group, we&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors">
              Contact Us
            </Link>
            <Link href="/careers" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
