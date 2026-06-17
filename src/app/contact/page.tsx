import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Contact Us | COYOTE Group",
  description: "Get in touch with us to learn more about our services or to schedule a consultation.",
};

const contactDetails = [
  { label: "Address", value: "COYOTE Campus — Contact us for address details", icon: "📍" },
  { label: "Phone", value: "Contact us for phone number", icon: "📞" },
  { label: "Email", value: "info@coyotegroup.com", icon: "✉️" },
  { label: "Hours", value: "Monday – Friday, 8:00 AM – 5:00 PM", icon: "🕐" },
];

const divisions = [
  { name: "Refrigeration & Cold Storage", icon: "❄️" },
  { name: "Daycare & Workforce Family Support", icon: "👶" },
  { name: "Garage & Motor Pool", icon: "🔧" },
  { name: "Workforce Housing & Model Homes", icon: "🏠" },
  { name: "Food Truck & Community Delivery", icon: "🚚" },
  { name: "Agriculture & Greenhouse", icon: "🌱" },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us to learn more about our services or to schedule a consultation."
        ctaText="View Services"
        ctaHref="/services"
        secondaryCtaText="View Careers"
        secondaryCtaHref="/careers"
      />

      <SectionWrapper id="contact-info" title="Get In Touch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-[var(--color-text-light)] uppercase tracking-wide">{c.label}</div>
                    <div className="text-[var(--color-text-main)] font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">Our Divisions</h3>
            <div className="space-y-2">
              {divisions.map((d) => (
                <div key={d.name} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                  <span>{d.icon}</span>
                  <span>{d.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">Service Inquiry Form</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-main)] mb-1" htmlFor="name">Full Name</label>
                <input id="name" type="text" className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-main)] mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-main)] mb-1" htmlFor="phone">Phone</label>
                <input id="phone" type="tel" className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30" placeholder="(000) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-main)] mb-1" htmlFor="service">Service Interested In</label>
                <select id="service" className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 bg-white">
                  <option value="">Select a division...</option>
                  {divisions.map((d) => (
                    <option key={d.name} value={d.name}>{d.icon} {d.name}</option>
                  ))}
                  <option value="General">General Inquiry</option>
                  <option value="Campus Tour">Campus Tour Request</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-main)] mb-1" htmlFor="message">Message</label>
                <textarea id="message" rows={4} className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Placeholder */}
      <SectionWrapper id="location" title="Our Location" alt>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)]">
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-[var(--color-text-light)] font-medium">COYOTE Campus Location</p>
              <p className="text-sm text-[var(--color-text-light)] mt-1">Google Map integration available upon address confirmation</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
