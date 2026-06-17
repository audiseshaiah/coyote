import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/careers", label: "Careers" },
  ],
  Explore: [
    { href: "/property", label: "Property Overview" },
    { href: "/campus-map", label: "Campus Map" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact Us" },
  ],
  Legal: [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookies Policy" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-primary-dark)] text-white"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold flex items-center gap-2">
              <span className="text-[var(--color-accent)] text-2xl">&#9670;</span>
              COYOTE
            </Link>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              A modern, accessible, and interactive campus platform. Explore our
              facilities, services, and opportunities.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} COYOTE. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            WCAG 2.1 AA Compliant &bull; ADA Accessible
          </p>
        </div>
      </div>
    </footer>
  );
}
