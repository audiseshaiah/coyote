"use client";
import { useState, useCallback } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

// ── Types ────────────────────────────────────────────────────────────────────
export interface MapComplex {
  id: string;
  name: string;
  subtitle: string;
  type: "brooder" | "warehouse" | "office" | "residential" | "maintenance" | "storage";
  description: string;
  details: Record<string, string>;
  cx: number;
  cy: number;
  visibleTo: ("admin" | "staff" | "visitor")[];
}

// ── Property Data ─────────────────────────────────────────────────────────────
const complexes: MapComplex[] = [
  {
    id: "complex-1-12",
    name: "Complex #1–12",
    subtitle: "Brooder Complex · Tax Map 079-01",
    type: "brooder",
    description:
      "12 brooder barns (50′×500′, 300,000 SF total) attached to a 35,000 SF warehouse with 8 loading docks. Paved private road access ~1,500 ft from Plains Road. Includes 4,200 SF 1-story professional office building with paved parking.",
    details: {
      Barns: "12 × 50′×500′",
      "Total Barn SF": "300,000 SF",
      Warehouse: "35,000 SF",
      "Loading Docks": "8",
      Office: "4,200 SF (paved pkg)",
      "Tax Map": "079-01",
    },
    cx: 935, cy: 262,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "complex-20s",
    name: "The 20's",
    subtitle: "Plains Road · Tax Map 067-004",
    type: "brooder",
    description:
      "87 acres with 1,539 ft of public road frontage on Plains Road. Ten (10) brooder barns (50′×500′, 250,000 SF), 11,000 SF refrigerated warehouse with 3 loading docks. Interior cage infrastructure removed. Zoned Agriculture/Industrial.",
    details: {
      Acreage: "87 acres",
      "Road Frontage": "1,539 ft (Plains Rd)",
      Barns: "10 × 50′×500′",
      Warehouse: "11,000 SF (refrigerated)",
      "Loading Docks": "3",
      Zoning: "Agriculture/Industrial",
      "Tax Map": "067-004",
    },
    cx: 97, cy: 555,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "complex-30s",
    name: "The 30's",
    subtitle: "Merrill Mills Rd · Tax Map 73-01",
    type: "warehouse",
    description:
      "Last used in 2024. 100,000 SF+/− warehouse facility with multiple overhead doors and refrigeration. Seven (7) brooder barns (58′×600′). Large circular irrigated field adjacent.",
    details: {
      Warehouse: "~100,000 SF",
      Refrigeration: "Yes, multiple overhead doors",
      Barns: "7 × 58′×600′",
      "Last Used": "2024",
      "Tax Map": "073-01",
    },
    cx: 195, cy: 383,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "complex-40s",
    name: "The 40's",
    subtitle: "Tax Map 079-01",
    type: "brooder",
    description:
      "25,000 SF warehouse with two 10-ft loading docks. Connected to eight (8) brooder barns 50′×400′. Located along the western stream property line, accessed via private road.",
    details: {
      Barns: "8 × 50′×400′ (size TBD)",
      Warehouse: "25,000 SF",
      "Loading Docks": "2 × 10-ft",
      Access: "Private road",
      "Tax Map": "079-01",
    },
    cx: 550, cy: 148,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "complex-50s",
    name: "The 50's",
    subtitle: "West Property Line · Tax Map 079-01",
    type: "brooder",
    description:
      "Located on private road along west side property line. Twelve (12) brooder barns. Two warehouses: 3,000 SF with loading dock and one connected 10,000 SF structure.",
    details: {
      Barns: "12 (50′×100′ TBD)",
      "Warehouse 1": "3,000 SF w/ loading dock",
      "Warehouse 2": "10,000 SF connected",
      Access: "Private road (west side)",
      "Tax Map": "079-01",
    },
    cx: 248, cy: 97,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "complex-70s",
    name: "The 70's",
    subtitle: "Merrill Mills Rd · Tax Map 73-02",
    type: "brooder",
    description:
      "40 acres with 1,331 ft of public road frontage on Plains Road and Merrills Mills Road. 24,000 SF refrigerated warehouse with 3 overhead doors. Ten (10) brooder barns 50′×500′ (250,000 SF). Interior cage infrastructure in place. Zoned Agriculture/Industrial.",
    details: {
      Acreage: "40 acres",
      "Road Frontage": "1,331 ft",
      Barns: "10 × 50′×500′",
      Warehouse: "24,000 SF (refrigerated)",
      "Overhead Doors": "3",
      "Cage Infra": "In place",
      "Tax Map": "073-02",
    },
    cx: 620, cy: 598,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "complex-80s",
    name: "The 80's",
    subtitle: "Central Complex",
    type: "brooder",
    description:
      "Central brooder complex with multiple barns and four agricultural water management lagoons for environmental management.",
    details: {
      Barns: "Multiple",
      Lagoons: "4 water management ponds",
      Location: "Central property",
    },
    cx: 400, cy: 510,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "admin-office",
    name: "Admin / Daycare",
    subtitle: "Office Building",
    type: "office",
    description:
      "1-story 4,200 SF professional office building with paved parking. Central administrative hub serving the entire property. 3-phase power available.",
    details: {
      Size: "4,200 SF",
      Floors: "1",
      Parking: "Paved",
      Power: "3-phase available",
    },
    cx: 758, cy: 275,
    visibleTo: ["admin", "staff", "visitor"],
  },
  {
    id: "garage",
    name: "CPS / Garages / Maint.",
    subtitle: "Maintenance Building",
    type: "maintenance",
    description:
      "Two garages and central maintenance building. Operational hub with 3-phase power access, wells and some septic. On-site roads provide access.",
    details: {
      Garages: "2",
      Type: "CPS + Maintenance",
      Power: "3-phase",
      Wells: "On-site",
    },
    cx: 558, cy: 422,
    visibleTo: ["admin", "staff"],
  },
  {
    id: "owner-house",
    name: "Owner's House",
    subtitle: "2 Plains Road",
    type: "residential",
    description:
      "Owner's residence at 2 Plains Road. Located at the southern entrance of the property near the main road.",
    details: {
      Address: "2 Plains Rd, Turner, ME",
      Type: "Residential",
      Location: "South entrance",
    },
    cx: 82, cy: 440,
    visibleTo: ["admin"],
  },
  {
    id: "refrig-storage",
    name: "Refrigerated Storage",
    subtitle: "Large Cold Storage Facility",
    type: "storage",
    description:
      "Large refrigerated storage building near the southern property boundary with access from Plains Road.",
    details: {
      Type: "Refrigerated storage",
      Location: "South boundary",
      Access: "Plains Road",
    },
    cx: 148, cy: 648,
    visibleTo: ["admin", "staff", "visitor"],
  },
];

// ── Type Config ────────────────────────────────────────────────────────────────
const typeConfig: Record<
  string,
  { barnFill: string; barnStroke: string; roofFill: string; icon: string; label: string }
> = {
  brooder:     { barnFill: "#c5cfd8", barnStroke: "#8299ab", roofFill: "#8299ab", icon: "🐔", label: "Brooder Complex" },
  warehouse:   { barnFill: "#b5a8c8", barnStroke: "#7a6598", roofFill: "#7a6598", icon: "🏭", label: "Warehouse Facility" },
  office:      { barnFill: "#f0d080", barnStroke: "#b09030", roofFill: "#b09030", icon: "🏢", label: "Office / Admin" },
  residential: { barnFill: "#e8a070", barnStroke: "#a05030", roofFill: "#a05030", icon: "🏠", label: "Residential" },
  maintenance: { barnFill: "#90b890", barnStroke: "#507050", roofFill: "#507050", icon: "🔧", label: "Maintenance / Garage" },
  storage:     { barnFill: "#80c8d8", barnStroke: "#308898", roofFill: "#308898", icon: "❄️", label: "Cold Storage" },
};

// ── Visual Helpers ─────────────────────────────────────────────────────────────

// Vertical barns (N-S) – arranged left-to-right
function VBarns({
  x, y, count, bw, bh, gap, fill, stroke,
}: { x: number; y: number; count: number; bw: number; bh: number; gap: number; fill: string; stroke: string }) {
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => (
        <g key={i}>
          <rect x={x + i * (bw + gap)} y={y} width={bw} height={bh}
            fill={fill} stroke={stroke} strokeWidth={0.7} rx={1} />
          <line
            x1={x + i * (bw + gap) + bw / 2} y1={y + 2}
            x2={x + i * (bw + gap) + bw / 2} y2={y + bh - 2}
            stroke={stroke} strokeWidth={0.6} opacity={0.45}
          />
        </g>
      ))}
    </g>
  );
}

// Horizontal barns (E-W) – stacked top-to-bottom
function HBarns({
  x, y, count, bw, bh, gap, fill, stroke,
}: { x: number; y: number; count: number; bw: number; bh: number; gap: number; fill: string; stroke: string }) {
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => (
        <g key={i}>
          <rect x={x} y={y + i * (bh + gap)} width={bw} height={bh}
            fill={fill} stroke={stroke} strokeWidth={0.7} rx={1} />
          <line
            x1={x + 2} y1={y + i * (bh + gap) + bh / 2}
            x2={x + bw - 2} y2={y + i * (bh + gap) + bh / 2}
            stroke={stroke} strokeWidth={0.6} opacity={0.45}
          />
        </g>
      ))}
    </g>
  );
}

// Simple building rectangle
function Building({ x, y, w, h, fill, stroke }: {
  x: number; y: number; w: number; h: number; fill: string; stroke: string;
}) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} stroke={stroke} strokeWidth={1} rx={2} />;
}

// Click overlay with selection ring
function ClickZone({ x, y, w, h, id, selected, onClick, onKeyDown }: {
  x: number; y: number; w: number; h: number; id: string;
  selected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}) {
  return (
    <g>
      {selected && (
        <rect
          x={x - 4} y={y - 4} width={w + 8} height={h + 8}
          fill="none" stroke="#f5c542" strokeWidth={2.5}
          strokeDasharray="8 4" rx={4}
        >
          <animate attributeName="stroke-dashoffset" from="0" to="24" dur="1s" repeatCount="indefinite" />
        </rect>
      )}
      <rect
        x={x} y={y} width={w} height={h}
        fill="transparent"
        stroke="none"
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={id}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
    </g>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────────
export default function CampusMapSVG() {
  const [selected, setSelected] = useState<MapComplex | null>(null);
  const [popup, setPopup] = useState<{ building: MapComplex; x: number; y: number } | null>(null);
  const [role, setRole] = useState<"admin" | "staff" | "visitor">("visitor");
  const [filter, setFilter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const handleClick = useCallback(
    (b: MapComplex, e: React.MouseEvent) => {
      if (!b.visibleTo.includes(role)) return;
      setSelected(b);
      const rect = (e.currentTarget as Element).closest("svg")?.getBoundingClientRect();
      if (rect) setPopup({ building: b, x: e.clientX - rect.left, y: e.clientY - rect.top });
      else setPopup({ building: b, x: b.cx, y: b.cy - 60 });
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance(`${b.name}. ${b.subtitle}`);
        u.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      }
    },
    [role]
  );

  const handleKey = useCallback(
    (e: React.KeyboardEvent, b: MapComplex) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setSelected(b);
        setPopup({ building: b, x: b.cx, y: b.cy - 60 });
      }
    },
    []
  );

  const close = () => { setPopup(null); setSelected(null); };

  const visible = complexes.filter(
    (b) => b.visibleTo.includes(role) && (!filter || b.type === filter)
  );

  const barnFill = (b: MapComplex) => typeConfig[b.type].barnFill;
  const barnStroke = (b: MapComplex) => typeConfig[b.type].barnStroke;

  // zone helper
  const zone = (b: MapComplex, x: number, y: number, w: number, h: number) =>
    visible.find((v) => v.id === b.id) ? (
      <ClickZone
        key={b.id + "-zone"}
        id={b.name}
        x={x} y={y} w={w} h={h}
        selected={selected?.id === b.id}
        onClick={(e) => handleClick(b, e)}
        onKeyDown={(e) => handleKey(e, b)}
      />
    ) : null;

  const C = (id: string) => complexes.find((c) => c.id === id)!;

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border-2 border-[#1a3a5c] shadow-2xl bg-[#1a3a5c]">
      {/* ── TOP BAR ── */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#1a3a5c] to-[#2a5a8c] text-white gap-3">
        <div>
          <h2 className="text-base font-bold tracking-wide">Plains Road Land &amp; Buildings</h2>
          <p className="text-[10px] text-blue-200">Turner, Maine · 1,733+/− acres · $5 Million</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-blue-200 mr-1">View as:</span>
          {(["visitor", "staff", "admin"] as const).map((r) => (
            <button
              key={r}
              onClick={() => { setRole(r); setPopup(null); setSelected(null); setFilter(null); }}
              className={`px-3 py-1 text-xs font-semibold rounded-md capitalize transition-all ${
                role === r ? "bg-white text-[#1a3a5c] shadow" : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
              aria-pressed={role === r}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="text-xs text-blue-200 hidden lg:block">
          Click any complex for details &nbsp;·&nbsp; Tab + Enter for keyboard nav
        </div>
      </div>

      {/* ── MAP AREA ── */}
      <div className="flex flex-1 relative">
        {/* Sidebar Legend */}
        <div className="hidden md:flex flex-col w-52 bg-white/96 border-r border-gray-200 py-4 px-3 gap-1 shrink-0 z-10">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Filter by Type</p>
          {Object.entries(typeConfig).map(([key, cfg]) => {
            const count = complexes.filter((b) => b.type === key && b.visibleTo.includes(role)).length;
            if (count === 0) return null;
            return (
              <button
                key={key}
                onClick={() => setFilter(filter === key ? null : key)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-left transition-all text-xs ${
                  filter === key ? "bg-blue-50 border border-blue-200 shadow-sm" : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-sm shrink-0"
                  style={{ background: cfg.barnFill, border: `1.5px solid ${cfg.barnStroke}` }}
                />
                <div>
                  <div className="font-semibold text-gray-800">{cfg.label}</div>
                  <div className="text-[10px] text-gray-400">{count} complex{count > 1 ? "es" : ""}</div>
                </div>
              </button>
            );
          })}
          {filter && (
            <button onClick={() => setFilter(null)} className="mt-2 text-[11px] text-blue-600 hover:text-blue-800 font-medium px-2">
              Clear filter ✕
            </button>
          )}

          <div className="mt-auto pt-4 border-t border-gray-100">
            <p className="text-[9px] text-gray-400 leading-relaxed px-1">
              Spectrum Real Estate<br />
              Tony Donovan · 207.329.6732<br />
              Jessie Demers · 720.320.1391
            </p>
          </div>
        </div>

        {/* SVG Map */}
        <div className="flex-1 relative overflow-hidden bg-[#3a6b2a]">
          <svg
            viewBox="0 0 1400 700"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive map of Plains Road Land and Buildings property in Turner, Maine"
          >
            <defs>
              <pattern id="field-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(35)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#b8a460" strokeWidth="0.5" opacity="0.4" />
              </pattern>
              <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" />
              </filter>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ── TERRAIN BASE ── */}
            {/* Forest background */}
            <rect width="1400" height="700" fill="#2d5a22" />

            {/* Main property open land */}
            <polygon
              points="30,680 30,400 60,350 75,290 80,180 110,100 160,60 260,35 380,30 500,35 620,30 720,35 820,40 950,45 1070,55 1160,65 1250,80 1320,120 1370,180 1390,260 1380,350 1350,430 1310,500 1250,560 1180,620 1080,660 900,680 700,685 500,685 300,685 150,685"
              fill="#c8b872"
            />
            {/* Field texture */}
            <polygon
              points="30,680 30,400 60,350 75,290 80,180 110,100 160,60 260,35 380,30 500,35 620,30 720,35 820,40 950,45 1070,55 1160,65 1250,80 1320,120 1370,180 1390,260 1380,350 1350,430 1310,500 1250,560 1180,620 1080,660 900,680 700,685 500,685 300,685 150,685"
              fill="url(#field-hatch)"
              opacity="0.6"
            />

            {/* Forest patches at edges */}
            {/* Left forest edge */}
            <ellipse cx="-10" cy="350" rx="80" ry="300" fill="#2d5a22" />
            <ellipse cx="20" cy="150" rx="60" ry="150" fill="#2d5a22" />
            {/* Right forest edge */}
            <ellipse cx="1410" cy="350" rx="100" ry="350" fill="#2d5a22" />
            <ellipse cx="1350" cy="100" rx="70" ry="100" fill="#2d5a22" />
            {/* Bottom forest */}
            <ellipse cx="700" cy="710" rx="300" ry="60" fill="#2d5a22" />
            {/* Interior forest patches */}
            <ellipse cx="660" cy="305" rx="55" ry="40" fill="#3a7030" opacity="0.7" />
            <ellipse cx="700" cy="430" rx="40" ry="30" fill="#3a7030" opacity="0.6" />
            <ellipse cx="1130" cy="390" rx="65" ry="50" fill="#3a7030" opacity="0.7" />
            <ellipse cx="1200" cy="480" rx="80" ry="60" fill="#3a7030" opacity="0.7" />
            <ellipse cx="870" cy="500" rx="50" ry="40" fill="#3a7030" opacity="0.6" />
            <ellipse cx="320" cy="200" rx="40" ry="35" fill="#3a7030" opacity="0.5" />
            <ellipse cx="760" cy="175" rx="45" ry="35" fill="#3a7030" opacity="0.5" />
            <ellipse cx="900" cy="140" rx="60" ry="40" fill="#3a7030" opacity="0.6" />
            <ellipse cx="1060" cy="160" rx="70" ry="50" fill="#3a7030" opacity="0.6" />
            <ellipse cx="1180" cy="230" rx="55" ry="45" fill="#3a7030" opacity="0.7" />

            {/* Circular irrigation fields */}
            <circle cx="308" cy="445" r="90" fill="none" stroke="#8a9860" strokeWidth="1" opacity="0.6" />
            <circle cx="308" cy="445" r="85" fill="#a8b870" opacity="0.25" />
            <circle cx="308" cy="445" r="60" fill="none" stroke="#8a9860" strokeWidth="0.5" opacity="0.4" />
            <circle cx="308" cy="445" r="30" fill="none" stroke="#8a9860" strokeWidth="0.5" opacity="0.4" />

            <circle cx="458" cy="200" r="68" fill="none" stroke="#8a9860" strokeWidth="1" opacity="0.5" />
            <circle cx="458" cy="200" r="63" fill="#a8b870" opacity="0.2" />
            <circle cx="458" cy="200" r="42" fill="none" stroke="#8a9860" strokeWidth="0.5" opacity="0.35" />

            <circle cx="418" cy="340" r="48" fill="none" stroke="#8a9860" strokeWidth="0.8" opacity="0.4" />
            <circle cx="418" cy="340" r="44" fill="#a8b870" opacity="0.18" />

            {/* Water/lagoons in 80's area */}
            <rect x="435" y="472" width="30" height="28" fill="#4a9aaa" stroke="#2a7a8a" strokeWidth={1} rx={3} opacity={0.85} />
            <rect x="470" y="472" width="30" height="28" fill="#4a9aaa" stroke="#2a7a8a" strokeWidth={1} rx={3} opacity={0.85} />
            <rect x="435" y="505" width="30" height="28" fill="#4a9aaa" stroke="#2a7a8a" strokeWidth={1} rx={3} opacity={0.85} />
            <rect x="470" y="505" width="30" height="28" fill="#4a9aaa" stroke="#2a7a8a" strokeWidth={1} rx={3} opacity={0.85} />
            <text x="452" y="547" textAnchor="middle" fill="#2a7a8a" fontSize="7" fontWeight="bold" opacity={0.8}>lagoons</text>

            {/* ── ROADS ── */}
            {/* Plains Road – main bottom road */}
            <rect x="0" y="666" width="1400" height="22" fill="#555" opacity="0.8" />
            <rect x="0" y="668" width="1400" height="18" fill="#6b6b6b" opacity="0.7" />
            <line x1="0" y1="677" x2="1400" y2="677" stroke="#e8c840" strokeWidth="1.5" strokeDasharray="20 12" opacity="0.7" />
            <text x="700" y="685" textAnchor="middle" fill="#e8c840" fontSize="9" fontWeight="bold" opacity={0.8}>PLAINS ROAD</text>

            {/* Merrill Mills Road – left diagonal */}
            <line x1="30" y1="666" x2="30" y2="300" stroke="#666" strokeWidth="14" opacity="0.7" />
            <line x1="30" y1="666" x2="30" y2="300" stroke="#777" strokeWidth="10" opacity="0.5" />
            <line x1="30" y1="666" x2="30" y2="300" stroke="#e8c840" strokeWidth="1" strokeDasharray="14 9" opacity="0.5" />

            {/* Internal road: main spine N-S */}
            <rect x="158" y="100" width="14" height="566" fill="#666" opacity="0.6" />
            <rect x="159" y="100" width="12" height="566" fill="#7a7a7a" opacity="0.4" />
            <line x1="165" y1="100" x2="165" y2="666" stroke="#e8c840" strokeWidth="1" strokeDasharray="12 8" opacity="0.45" />

            {/* Internal road: cross road to 40's/office/1-12 */}
            <rect x="159" y="285" width="685" height="12" fill="#666" opacity="0.55" />
            <line x1="159" y1="291" x2="844" y2="291" stroke="#e8c840" strokeWidth="1" strokeDasharray="12 8" opacity="0.4" />

            {/* Branch: up from 165,285 to 50's */}
            <rect x="158" y="100" width="12" height="190" fill="#666" opacity="0.5" />

            {/* Branch: up from cross road to 40's/50's (x≈400 north) */}
            <rect x="398" y="88" width="10" height="205" fill="#666" opacity="0.45" />
            <line x1="403" y1="88" x2="403" y2="293" stroke="#e8c840" strokeWidth="0.8" strokeDasharray="10 7" opacity="0.38" />

            {/* Branch: from cross road going right toward 1-12 */}
            <rect x="844" y="282" width="12" height="130" fill="#666" opacity="0.5" />

            {/* ── COMPLEX VISUALS ── */}

            {/* ─ 50's complex (upper left, vertical barns) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "complex-50s") ? 1 : 0.25}>
              {/* Top group: 4 long barns */}
              <VBarns x={170} y={42} count={4} bw={14} bh={135} gap={17}
                fill={barnFill(C("complex-50s"))} stroke={barnStroke(C("complex-50s"))} />
              {/* Bottom group: 4 medium barns */}
              <VBarns x={170} y={190} count={4} bw={14} bh={75} gap={17}
                fill={barnFill(C("complex-50s"))} stroke={barnStroke(C("complex-50s"))} />
              {/* Warehouses */}
              <Building x={170} y={178} w={76} h={14} fill={typeConfig.brooder.roofFill} stroke={barnStroke(C("complex-50s"))} />
              <Building x={170} y={270} w={52} h={18} fill={typeConfig.brooder.roofFill} stroke={barnStroke(C("complex-50s"))} />
              {/* Connection corridors */}
              <rect x={182} y={135} width={2} height={45} fill={barnStroke(C("complex-50s"))} opacity={0.5} />
              <rect x={199} y={135} width={2} height={45} fill={barnStroke(C("complex-50s"))} opacity={0.5} />
              <rect x={216} y={135} width={2} height={45} fill={barnStroke(C("complex-50s"))} opacity={0.5} />
              <rect x={233} y={135} width={2} height={45} fill={barnStroke(C("complex-50s"))} opacity={0.5} />
            </g>
            {zone(C("complex-50s"), 165, 38, 100, 255)}

            {/* ─ 40's complex (upper center, vertical barns) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "complex-40s") ? 1 : 0.25}>
              {/* 4 long vertical barns */}
              <VBarns x={487} y={52} count={4} bw={14} bh={158} gap={18}
                fill={barnFill(C("complex-40s"))} stroke={barnStroke(C("complex-40s"))} />
              {/* Warehouse block */}
              <Building x={487} y={215} w={86} h={32} fill={typeConfig.brooder.roofFill} stroke={barnStroke(C("complex-40s"))} />
              {/* Loading dock dots */}
              {[0, 1].map(i => (
                <rect key={i} x={494 + i * 16} y={247} width={10} height={5}
                  fill="#333" stroke="#555" strokeWidth={0.5} rx={1} />
              ))}
            </g>
            {zone(C("complex-40s"), 483, 48, 100, 210)}

            {/* ─ Admin/Office ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "admin-office") ? 1 : 0.25}>
              <Building x={718} y={255} w={82} h={45} fill={typeConfig.office.barnFill} stroke={typeConfig.office.barnStroke} />
              {/* Parking area */}
              <rect x={718} y={302} width={82} height={16} fill="#888" stroke="#666" strokeWidth={0.5} rx={1} opacity={0.7} />
              {[0,1,2,3].map(i => (
                <line key={i} x1={726 + i*18} y1={303} x2={726 + i*18} y2={317} stroke="#bbb" strokeWidth={0.8} />
              ))}
            </g>
            {zone(C("admin-office"), 714, 252, 90, 70)}

            {/* ─ 1-12 Complex (center-right, 12 vertical barns) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "complex-1-12") ? 1 : 0.25}>
              {/* Large warehouse */}
              <Building x={785} y={198} w={240} h={35} fill={typeConfig.brooder.roofFill} stroke={barnStroke(C("complex-1-12"))} />
              {/* 8 loading dock marks */}
              {Array.from({length: 8}).map((_, i) => (
                <rect key={i} x={789 + i*25} y={233} width={16} height={5}
                  fill="#333" stroke="#555" strokeWidth={0.5} rx={1} />
              ))}
              {/* 12 brooder barns */}
              <VBarns x={785} y={240} count={12} bw={13} bh={88} gap={7}
                fill={barnFill(C("complex-1-12"))} stroke={barnStroke(C("complex-1-12"))} />
            </g>
            {zone(C("complex-1-12"), 781, 194, 248, 140)}

            {/* ─ Extra barns (far right) ─ */}
            <g opacity={0.75}>
              <VBarns x={1170} y={250} count={4} bw={12} bh={70} gap={14}
                fill="#c0c8d0" stroke="#8090a0" />
              <text x={1190} y={245} textAnchor="middle" fill="#5a6a7a" fontSize="8" fontWeight="bold">barns</text>
            </g>

            {/* ─ 30's Complex (left-center, horizontal barns + large warehouse) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "complex-30s") ? 1 : 0.25}>
              {/* Large warehouse */}
              <Building x={78} y={318} w={130} h={52} fill={typeConfig.warehouse.barnFill} stroke={typeConfig.warehouse.barnStroke} />
              {/* Multiple overhead door marks */}
              {[0,1,2,3].map(i => (
                <rect key={i} x={80 + i*28} y={368} width={20} height={5}
                  fill="#444" stroke="#666" strokeWidth={0.5} rx={1} />
              ))}
              {/* 7 horizontal barns */}
              <HBarns x={78} y={376} count={7} bw={128} bh={12} gap={7}
                fill={barnFill(C("complex-30s"))} stroke={barnStroke(C("complex-30s"))} />
            </g>
            {zone(C("complex-30s"), 74, 314, 136, 200)}

            {/* ─ Owner's House (far left) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "owner-house") ? 1 : 0.25}>
              <Building x={42} y={400} w={44} h={34} fill={typeConfig.residential.barnFill} stroke={typeConfig.residential.barnStroke} />
              {/* Roof triangle */}
              <polygon points="42,400 86,400 64,386" fill={typeConfig.residential.roofFill} stroke={typeConfig.residential.barnStroke} strokeWidth={0.8} />
              {/* Driveway */}
              <rect x={62} y={434} width={6} height={30} fill="#888" opacity={0.5} />
            </g>
            {zone(C("owner-house"), 38, 384, 52, 82)}

            {/* ─ Garage / Maintenance (center) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "garage") ? 1 : 0.25}>
              <Building x={505} y={393} w={100} h={52} fill={typeConfig.maintenance.barnFill} stroke={typeConfig.maintenance.barnStroke} />
              {/* 2 garage doors */}
              <rect x={510} y={441} width={36} height={5} fill="#333" stroke="#555" strokeWidth={0.5} rx={1} />
              <rect x={558} y={441} width={36} height={5} fill="#333" stroke="#555" strokeWidth={0.5} rx={1} />
            </g>
            {zone(C("garage"), 501, 389, 108, 62)}

            {/* ─ 20's Complex (lower left, horizontal barns) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "complex-20s") ? 1 : 0.25}>
              {/* Refrigerated warehouse */}
              <Building x={38} y={488} w={95} h={28} fill={typeConfig.storage.barnFill} stroke={typeConfig.storage.barnStroke} />
              <text x={85} y={505} textAnchor="middle" fill="#2a6878" fontSize="7" fontWeight="bold">11,000 SF refrig.</text>
              {/* 3 loading docks */}
              {[0,1,2].map(i => (
                <rect key={i} x={42 + i*26} y={515} width={18} height={4}
                  fill="#333" stroke="#555" strokeWidth={0.5} rx={1} />
              ))}
              {/* 10 horizontal barns */}
              <HBarns x={38} y={521} count={10} bw={118} bh={12} gap={6}
                fill={barnFill(C("complex-20s"))} stroke={barnStroke(C("complex-20s"))} />
            </g>
            {zone(C("complex-20s"), 34, 484, 126, 195)}

            {/* ─ 80's Complex (lower center) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "complex-80s") ? 1 : 0.25}>
              {/* 5 horizontal barns */}
              <HBarns x={305} y={466} count={5} bw={120} bh={12} gap={7}
                fill={barnFill(C("complex-80s"))} stroke={barnStroke(C("complex-80s"))} />
            </g>
            {zone(C("complex-80s"), 301, 462, 130, 90)}

            {/* ─ 70's Complex (lower center-right, horizontal barns) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "complex-70s") ? 1 : 0.25}>
              {/* Refrigerated warehouse */}
              <Building x={504} y={543} w={135} h={30} fill={typeConfig.storage.barnFill} stroke={typeConfig.storage.barnStroke} />
              <text x={571} y={562} textAnchor="middle" fill="#2a6878" fontSize="7" fontWeight="bold">24,000 SF refrig.</text>
              {/* 3 overhead door marks */}
              {[0,1,2].map(i => (
                <rect key={i} x={508 + i*36} y={573} width={26} height={4}
                  fill="#333" stroke="#555" strokeWidth={0.5} rx={1} />
              ))}
              {/* 10 horizontal barns */}
              <HBarns x={504} y={579} count={10} bw={130} bh={12} gap={6}
                fill={barnFill(C("complex-70s"))} stroke={barnStroke(C("complex-70s"))} />
            </g>
            {zone(C("complex-70s"), 500, 539, 142, 195)}

            {/* ─ Refrigerated Storage (south, near owner house) ─ */}
            <g filter="url(#shadow)" opacity={visible.find(v => v.id === "refrig-storage") ? 1 : 0.25}>
              <Building x={84} y={628} w={95} h={32} fill={typeConfig.storage.barnFill} stroke={typeConfig.storage.barnStroke} />
              {[0,1,2].map(i => (
                <rect key={i} x={88 + i*24} y={658} width={16} height={4}
                  fill="#333" stroke="#555" strokeWidth={0.5} rx={1} />
              ))}
            </g>
            {zone(C("refrig-storage"), 80, 624, 103, 40)}

            {/* ── LABELS ── */}
            {visible.map((b) => {
              const labelY = b.cy + 14;
              return (
                <g key={b.id + "-lbl"} style={{ pointerEvents: "none" }}>
                  <rect x={b.cx - 42} y={labelY - 10} width={84} height={14} rx={3} fill="rgba(0,0,0,0.62)" />
                  <text x={b.cx} y={labelY + 1} textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">
                    {b.name}
                  </text>
                </g>
              );
            })}

            {/* ── COMPASS ── */}
            <g transform="translate(1360, 42)">
              <circle r="22" fill="rgba(255,255,255,0.88)" stroke="#bbb" strokeWidth="1" />
              <text x="0" y="-6" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a3a5c">N</text>
              <path d="M 0 -16 L 4 -5 L -4 -5 Z" fill="#1a3a5c" />
              <text x="0" y="14" textAnchor="middle" fontSize="8" fill="#999">S</text>
              <text x="-14" y="4" textAnchor="middle" fontSize="8" fill="#999">W</text>
              <text x="14" y="4" textAnchor="middle" fontSize="8" fill="#999">E</text>
            </g>

            {/* ── PROPERTY PIN ── */}
            <g transform="translate(148, 648)">
              <circle cy={-28} r={10} fill="#f5c542" stroke="#c09000" strokeWidth={1.5} />
              <path d="M 0 -18 L 0 0" stroke="#c09000" strokeWidth={1.5} />
              <text x={12} y={-24} fill="#1a3a5c" fontSize="8" fontWeight="bold">2 Plains Rd</text>
            </g>

            {/* ── SCALE BAR ── */}
            <g transform="translate(50, 40)">
              <rect x={0} y={0} width={80} height={6} fill="#888" rx={1} />
              <rect x={0} y={0} width={40} height={6} fill="#555" rx={1} />
              <text x={0} y={16} fontSize="7" fill="#ccc">0</text>
              <text x={36} y={16} fontSize="7" fill="#ccc">¼ mi</text>
              <text x={72} y={16} fontSize="7" fill="#ccc">½</text>
            </g>
          </svg>

          {/* ── POPUP ── */}
          {popup && (
            <div
              className="absolute z-20 bg-white rounded-xl shadow-2xl border border-gray-200 w-76 overflow-hidden"
              style={{
                left: Math.min(Math.max(popup.x - 140, 8), 700),
                top: Math.max(popup.y - 220, 8),
                width: 300,
              }}
              role="dialog"
              aria-label={`Details for ${popup.building.name}`}
            >
              <div
                className="px-4 py-3 flex items-start justify-between"
                style={{ background: `linear-gradient(135deg, ${typeConfig[popup.building.type].barnStroke}, ${typeConfig[popup.building.type].roofFill})` }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{typeConfig[popup.building.type].icon}</span>
                  <div>
                    <h3 className="font-bold text-sm text-white">{popup.building.name}</h3>
                    <p className="text-[10px] text-white/80">{popup.building.subtitle}</p>
                  </div>
                </div>
                <button onClick={close} className="text-white/70 hover:text-white text-lg leading-none ml-2 shrink-0" aria-label="Close">✕</button>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">{popup.building.description}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {Object.entries(popup.building.details).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-md px-2 py-1.5">
                      <div className="text-[9px] text-gray-400 font-semibold uppercase">{key}</div>
                      <div className="text-[11px] font-semibold text-gray-800">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex gap-2">
                <button
                  className="flex-1 px-3 py-1.5 text-white text-xs font-semibold rounded-md transition-colors"
                  style={{ background: typeConfig[popup.building.type].roofFill }}
                >
                  Request Info
                </button>
                <button onClick={close} className="px-3 py-1.5 border border-gray-300 text-gray-600 text-xs font-semibold rounded-md hover:bg-gray-100">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── BOTTOM TOOLBAR ── */}
      <div className="flex flex-wrap items-center justify-between gap-1 px-4 py-2 bg-gradient-to-r from-[#1a3a5c] to-[#2a5a8c] border-t border-white/10">
        <div className="flex gap-1">
          {[
            { id: "overview", icon: "🗺️", label: "Overview" },
            { id: "complexes", icon: "🐔", label: "Complexes" },
            { id: "access", icon: "🚗", label: "Access" },
            { id: "contact", icon: "📞", label: "Contact" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab.id ? "bg-white/20 text-white" : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="text-[10px] text-blue-200 hidden md:block">
          1,733+/− acres · 21 tax maps · 28,180+ ft public street frontage · Listed $5M
        </div>
      </div>
    </div>
  );
}
