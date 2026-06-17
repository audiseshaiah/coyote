import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import VoiceAssistant from "@/components/accessibility/VoiceAssistant";

export const metadata: Metadata = {
  title: {
    default: "COYOTE | Interactive Campus Platform",
    template: "%s | COYOTE",
  },
  description:
    "A modern, accessible, and interactive campus web platform. Explore buildings, parking areas, and road networks through an engaging interface.",
  keywords: ["campus", "interactive map", "accessibility", "COYOTE"],
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
