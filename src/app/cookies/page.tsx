import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = { title: "Cookies Policy" };

export default function CookiesPage() {
  return (
    <>
      <HeroSection title="Cookies Policy" subtitle="Understand how COYOTE uses cookies and similar technologies on our platform." />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 mb-8">Last updated: March 23, 2026</p>

          {[
            { title: "1. What Are Cookies", content: "Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience." },
            { title: "2. How We Use Cookies", content: "We use cookies for essential functionality (session management, security), analytics (understanding how visitors use our platform), preferences (remembering your settings and choices), and performance (optimizing load times and platform responsiveness)." },
            { title: "3. Types of Cookies We Use", content: "Strictly Necessary Cookies: Required for the platform to function. Cannot be disabled. Functional Cookies: Remember your preferences and personalization choices. Analytics Cookies: Help us understand usage patterns and improve the platform. These collect anonymized data." },
            { title: "4. Managing Cookies", content: "You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that blocking essential cookies may affect platform functionality." },
            { title: "5. Third-Party Cookies", content: "We may use third-party analytics services that set their own cookies. These services are subject to their own privacy policies." },
            { title: "6. Cookie Consent", content: "When you first visit our platform, you will see a cookie consent banner. You can accept or decline non-essential cookies. Your choice is stored for the duration of your session." },
            { title: "7. Updates to This Policy", content: "We may update this cookies policy from time to time. Any changes will be posted on this page." },
            { title: "8. Contact", content: "For questions about our use of cookies, contact us at privacy@coyote-campus.com." },
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
