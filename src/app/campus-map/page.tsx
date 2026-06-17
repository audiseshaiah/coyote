import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CampusMapSVG from "@/components/map/CampusMapSVG";

export const metadata: Metadata = {
  title: "Interactive Property Map — Plains Road, Turner ME",
  description: "Explore the Plains Road Land & Buildings property in Turner, Maine. Click each complex for details on barns, warehouses, acreage and more.",
};

export default function CampusMapPage() {
  return (
    <>
      {/* Full-width map — no hero, the map IS the hero */}
      <section className="px-4 py-6 sm:px-6 lg:px-8 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-primary)]">Plains Road Property Map</h1>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                Turner, Maine &bull; 1,733+/− acres &bull; Click any complex for details &bull; Switch view roles to change visibility &bull; Use <kbd className="px-1 py-0.5 bg-white border border-gray-300 rounded text-[10px] font-mono">Tab</kbd> for keyboard navigation
              </p>
            </div>
          </div>

          <CampusMapSVG />
        </div>
      </section>

      {/* Map Features Info */}
      <SectionWrapper id="map-features" title="Property Highlights">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "7 Warehouse Buildings", desc: "Multiple refrigerated warehouses with a combined 14+ loading docks across the property.", icon: "🏭" },
            { title: "Dozens of Brooder Barns", desc: "Large-scale brooder barn complexes (The 20's through 80's) totaling hundreds of thousands of square feet.", icon: "🐔" },
            { title: "1,733+/− Acres", desc: "21 tax maps spanning Agricultural, Industrial, Rural I, and Resource Protection zones.", icon: "🌾" },
            { title: "3-Phase Power Available", desc: "Multiple access points to 3-phase power, wells, and some septic across the property.", icon: "⚡" },
            { title: "28,180+ ft Public Frontage", desc: "Extensive public street frontage on Plains Road and Merrills Mills Road.", icon: "🛣️" },
            { title: "1hr from Portland, ME", desc: "Minutes from State Road 4, one hour from Portland, Maine and 2.5 hours from Boston.", icon: "📍" },
          ].map((feature) => (
            <div key={feature.title} className="flex gap-4 p-4 bg-white rounded-lg border border-[var(--color-border)]">
              <span className="text-2xl shrink-0">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-[var(--color-primary)]">{feature.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Accessibility Note */}
      <SectionWrapper id="property-contact" alt>
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 border border-[var(--color-border)] shadow-sm">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">Listed by Spectrum Real Estate</h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
            The Plains Road Land and Buildings Package is listed for <strong>$5 Million</strong>. This former agricultural facility includes 3-phase power, office buildings, warehouses with loading docks, manufacturing buildings, wells, and good level soils with on-site roads. Potential re-purposing for industrial, manufacturing, warehousing, or agricultural use.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-light)]">
            <div><strong className="text-[var(--color-primary)]">Tony Donovan</strong><br />207.329.6732<br />metodrealtor@gmail.com</div>
            <div><strong className="text-[var(--color-primary)]">Jessie Demers</strong><br />720.320.1391<br />jessiedemersrealtor@gmail.com</div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
