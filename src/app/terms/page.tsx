import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <HeroSection title="Terms & Conditions" subtitle="Please review our terms of service before using the COYOTE campus platform." />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-sm text-gray-500">Last updated: March 23, 2026</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">1. Acceptance of Terms</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">By accessing and using the COYOTE Interactive Campus Platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform.</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">2. Use of Platform</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">The platform is provided for informational and interactive purposes related to the COYOTE campus. You agree to use the platform only for lawful purposes and in accordance with these terms. You must not misuse the platform by knowingly introducing viruses, trojans, or other harmful material.</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">3. Intellectual Property</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">All content on this platform, including but not limited to text, graphics, logos, images, interactive maps, and software, is the property of COYOTE and is protected by applicable intellectual property laws.</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">4. User Accounts</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">Certain features of the platform may require user registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">5. Privacy</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">Your use of the platform is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect and use your information.</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">6. Limitation of Liability</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">COYOTE shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. This includes but is not limited to loss of data, revenue, or anticipated profits.</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">7. Changes to Terms</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the platform after changes constitutes acceptance of the revised terms.</p>

          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">8. Contact</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed">For questions about these terms, please contact us at <strong>legal@coyote-campus.com</strong>.</p>
        </div>
      </SectionWrapper>
    </>
  );
}
