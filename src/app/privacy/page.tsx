import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <HeroSection title="Privacy Policy" subtitle="Learn how COYOTE collects, uses, and protects your personal information." />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 mb-8">Last updated: March 23, 2026</p>

          {[
            { title: "1. Information We Collect", content: "We collect information you provide directly (name, email, phone number when submitting forms), automatically collected data (browser type, IP address, pages visited), and cookies and similar tracking technologies." },
            { title: "2. How We Use Your Information", content: "Your information is used to respond to inquiries and service requests, process career applications, improve our platform and services, send relevant communications (with your consent), and ensure platform security and prevent fraud." },
            { title: "3. Information Sharing", content: "We do not sell your personal information. We may share data with service providers who assist in platform operations, when required by law or legal process, and to protect our rights, privacy, safety, or property." },
            { title: "4. Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information, including encryption, access controls, and regular security assessments." },
            { title: "5. Your Rights", content: "Under applicable privacy laws (GDPR, CCPA), you have the right to access, correct, or delete your personal data, opt out of marketing communications, request data portability, and lodge complaints with supervisory authorities." },
            { title: "6. Data Retention", content: "We retain personal data only as long as necessary for the purposes described in this policy, or as required by law. Contact and inquiry data is retained for 2 years; career application data for 1 year." },
            { title: "7. Children's Privacy", content: "Our platform is not directed at children under 13. We do not knowingly collect personal information from children under 13." },
            { title: "8. Changes to This Policy", content: "We may update this policy periodically. Changes will be posted on this page with an updated date. We encourage you to review this policy regularly." },
            { title: "9. Contact Us", content: "For privacy inquiries, please email privacy@coyote-campus.com or write to: COYOTE Privacy Office, 100 COYOTE Campus Drive, Suite 200, Anytown, US 10001." },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">{section.title}</h2>
              <p className="text-[var(--color-text-light)] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
