import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import VoiceAssistant from "@/components/accessibility/VoiceAssistant";

export const metadata: Metadata = {
  title: {
    default: "COYOTE Group | Infrastructure & Workforce Development",
    template: "%s | COYOTE Group",
  },
  description:
    "COYOTE Group is a multi-sector infrastructure and workforce development organization combining cold storage, workforce housing, agriculture, daycare, food services, and emergency preparedness.",
  keywords: ["COYOTE Group", "cold storage", "workforce housing", "agriculture", "daycare", "FEMA", "infrastructure"],
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "COYOTE Group | Infrastructure & Workforce Development",
    description: "Building a self-sustaining infrastructure ecosystem for workforce, FEMA readiness, and smart development.",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <VoiceAssistant />
      </body>
    </html>
  );
}
