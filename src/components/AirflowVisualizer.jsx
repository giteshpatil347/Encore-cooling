import React, { useState } from 'react'
import {
  Wind,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  ArrowRight,
  Info
} from 'lucide-react'

const airflowHotspots = [
  {
    id: 'ahu',
    title: 'Double Skin AHU & Pre-Filtration',
    stage: '01 • Air Conditioning & Intake',
    desc: 'Fresh air and return air are blended, filtered through G4 (10μ) and F9 (5μ) filters, then cooled or dehumidified across DX or chilled water coils with low air resistance.',
    specs: '50mm PUF thermal-break casing, IE3/IE4 plug fan, 1,000–50,000 CFM capacity',
    x: '14%',
    y: '32%'
  },
  {
    id: 'duct',
    title: 'Airtight Insulated Supply Ducting',
    stage: '02 • Thermal & Pressure Distribution',
    desc: 'Heavy-gauge galvanized steel ducting sealed with fire-retardant neoprene gaskets and nitril-rubber thermal insulation to eliminate leakage and thermal losses.',
    specs: 'SMACNA Class C air leakage integrity, low noise aerodynamic acoustic attenuation',
    x: '42%',
    y: '18%'
  },
  {
    id: 'hepa',
    title: 'Terminal Mini-Pleat HEPA Filters (H14)',
    stage: '03 • 99.997% Sterile Filtration',
    desc: 'Ceiling-mounted mini-pleat HEPA filters generate uniform laminar downflow air, removing sub-micron particulates down to 0.3 microns before entering the clean zone.',
    specs: 'ISO 14644-1 Class 5 compliance, factory PAO/DOP aerosol leak tested',
    x: '64%',
    y: '26%'
  },
  {
    id: 'pressure',
    title: 'Positive Pressure Gradient (+15 Pa)',
    stage: '04 • Contamination Barrier',
    desc: 'Cleanrooms operate at positive pressure relative to surrounding corridors (+15 Pa to +25 Pa), preventing airborne dust or microbial ingress whenever doors are opened.',
    specs: 'Cascading pressure zoning, magnehelic differential monitoring gauges',
    x: '68%',
    y: '58%'
  },
  {
    id: 'riser',
    title: 'Low-Level Return Air Risers (RAR)',
    stage: '05 • Low-Level Air Sweep',
    desc: 'Return air risers installed at skirting level continuously draw heavier airborne particles downwards away from personnel and products, circulating air back to the AHU.',
    specs: 'SS 304 / GI powder coated, integrated removable pre-filter cassette',
    x: '86%',
    y: '72%'
  },
  {
    id: 'passbox',
    title: 'Interlocked Dynamic Pass Box',
    stage: '06 • Material Aseptic Transfer',
    desc: 'Electromagnetically interlocked pass box equipped with internal HEPA air shower and UV sterilizing lamp for safe transfer of ingredients and tools without breaking room seal.',
    specs: 'SS 304 interior, 0.3μ HEPA filtration, interlock LED indicators',
    x: '38%',
    y: '75%'
  }
]

export default function AirflowVisualizer() {
  const [activeSpot, setActiveSpot] = useState(airflowHotspots[2])

  return (
    <div className="airflow-vis-card">
      <div className="vis-header">
        <div className="vis-badge">
          <Sparkles size={14} />
          <span>Interactive Engineering Architecture</span>
        </div>
        <h3>How an Encore Cleanroom Environment Works</h3>
        <p>
          Click the interactive hotspots on the schematic diagram below to understand the 
          closed-loop HVAC filtration, pressure cascading, and contamination prevention stages.
        </p>
      </div>

      <div className="vis-layout">
        {/* Interactive Schematic Diagram */}
        <div className="vis-diagram-container">
          <svg className="vis-svg-bg" viewBox="0 0 900 520" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="ductGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="roomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="100%" stopColor="#e0f2fe" />
              </linearGradient>
              <linearGradient id="ahuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#061a33" />
                <stop offset="100%" stopColor="#0a3d78" />
              </linearGradient>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="900" height="520" fill="url(#grid)" />

            {/* Cleanroom Outer Envelope (Wall Panels) */}
            <rect x="420" y="110" width="450" height="370" rx="16" fill="url(#roomGrad)" stroke="#0a3d78" strokeWidth="4" />
            <rect x="430" y="120" width="430" height="24" rx="4" fill="#cbd5e1" opacity="0.6" />
            <text x="445" y="137" fill="#0f172a" fontSize="12" fontWeight="800" letterSpacing="0.08em">MODULAR WALK-ON CEILING GRID (50mm PPGI)</text>

            {/* Cleanroom Floor (Epoxy) */}
            <rect x="420" y="470" width="450" height="14" fill="#0284c7" opacity="0.8" />
            <text x="590" y="462" fill="#0369a1" fontSize="11" fontWeight="700">ANTI-STATIC EPOXY FLOORING (R50 COVED)</text>

            {/* Supply Duct from AHU to Cleanroom Ceiling */}
            <path
              d="M 220 180 L 370 90 L 730 90 L 730 120"
              fill="none"
              stroke="url(#ductGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Animated Airflow Dashes in Duct */}
            <path
              d="M 220 180 L 370 90 L 730 90 L 730 120"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeDasharray="12, 10"
              className="svg-airflow-path"
              strokeLinecap="round"
            />

            {/* Terminal HEPA Filter Box in Ceiling */}
            <rect x="580" y="115" width="130" height="32" rx="4" fill="#0369a1" stroke="#ffffff" strokeWidth="2" />
            <text x="592" y="136" fill="#ffffff" fontSize="11" fontWeight="800">HEPA H14 (0.3μ)</text>

            {/* Downward Clean Air Streams */}
            <g stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="8, 6" className="svg-airflow-down">
              <line x1="610" y1="150" x2="610" y2="440" />
              <line x1="645" y1="150" x2="645" y2="440" />
              <line x1="680" y1="150" x2="680" y2="440" />
            </g>

            {/* Return Air Riser at bottom right */}
            <rect x="830" y="320" width="30" height="150" rx="4" fill="#64748b" stroke="#0a3d78" strokeWidth="2" />
            <line x1="835" y1="360" x2="855" y2="360" stroke="#ffffff" strokeWidth="2" />
            <line x1="835" y1="390" x2="855" y2="390" stroke="#ffffff" strokeWidth="2" />
            <line x1="835" y1="420" x2="855" y2="420" stroke="#ffffff" strokeWidth="2" />
            <text x="834" y="310" fill="#0a3d78" fontSize="10" fontWeight="800">RETURN RISER</text>

            {/* Return Duct (Riser back to AHU) */}
            <path
              d="M 845 470 L 845 500 L 150 500 L 150 320"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="12"
              strokeLinejoin="round"
            />

            {/* Air Handling Unit (AHU) Cabinet */}
            <rect x="50" y="160" width="180" height="170" rx="10" fill="url(#ahuGrad)" stroke="#38bdf8" strokeWidth="3" />
            <text x="75" y="195" fill="#ffffff" fontSize="14" fontWeight="800">ENCORE AHU</text>
            <text x="75" y="215" fill="#38bdf8" fontSize="11" fontWeight="600">Double Skin 50mm PUF</text>
            
            {/* Filter banks inside AHU */}
            <rect x="65" y="230" width="22" height="80" rx="2" fill="#0284c7" />
            <text x="69" y="275" fill="#ffffff" fontSize="9" fontWeight="700" transform="rotate(-90 73 275)">PRE-FILTER</text>
            <rect x="95" y="230" width="22" height="80" rx="2" fill="#0369a1" />
            <text x="99" y="275" fill="#ffffff" fontSize="9" fontWeight="700" transform="rotate(-90 103 275)">MICROVEE</text>
            <rect x="125" y="230" width="26" height="80" rx="2" fill="#38bdf8" />
            <text x="130" y="275" fill="#0f172a" fontSize="9" fontWeight="700" transform="rotate(-90 135 275)">COOLING COIL</text>

            {/* Plug Fan Blower inside AHU */}
            <circle cx="185" cy="270" r="28" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 185 250 L 185 290 M 165 270 L 205 270" stroke="#38bdf8" strokeWidth="2" />

            {/* Pass Box in wall */}
            <rect x="400" y="320" width="40" height="80" rx="4" fill="#0a3d78" stroke="#38bdf8" strokeWidth="2" />
            <rect x="408" y="335" width="24" height="40" rx="2" fill="#f8fafc" opacity="0.8" />
            <text x="360" y="415" fill="#0a3d78" fontSize="11" fontWeight="800">PASS BOX</text>

            {/* Room Pressure Badge */}
            <g transform="translate(680, 260)">
              <rect width="105" height="40" rx="20" fill="#0a3d78" opacity="0.9" />
              <text x="52" y="18" fill="#38bdf8" fontSize="10" fontWeight="700" textAnchor="middle">ROOM PRESSURE</text>
              <text x="52" y="32" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">+15 Pa Positive</text>
            </g>
          </svg>

          {/* Clickable Hotspot Pins */}
          {airflowHotspots.map(spot => {
            const isSelected = activeSpot.id === spot.id
            return (
              <button
                key={spot.id}
                className={`vis-hotspot-pin ${isSelected ? 'active' : ''}`}
                style={{ left: spot.x, top: spot.y }}
                onClick={() => setActiveSpot(spot)}
                title={spot.title}
                aria-label={spot.title}
              >
                <span className="pin-pulse"></span>
                <span className="pin-dot"></span>
              </button>
            )
          })}
        </div>

        {/* Selected Hotspot Details Box */}
        <div className="vis-detail-card">
          <div className="vis-detail-stage">{activeSpot.stage}</div>
          <h4>{activeSpot.title}</h4>
          <p className="vis-detail-desc">{activeSpot.desc}</p>

          <div className="vis-detail-spec-box">
            <b>ENGINEERING SPECIFICATION:</b>
            <span>{activeSpot.specs}</span>
          </div>

          <div className="vis-hotspot-selector-pills">
            {airflowHotspots.map(spot => (
              <button
                key={spot.id}
                className={`vis-mini-pill ${activeSpot.id === spot.id ? 'active' : ''}`}
                onClick={() => setActiveSpot(spot)}
              >
                {spot.title.split(' ')[0]} {spot.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
