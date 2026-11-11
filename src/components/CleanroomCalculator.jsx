import React, { useState, useMemo } from 'react'
import {
  Calculator,
  Wind,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react'

export const cleanroomStandards = [
  {
    id: 'iso5',
    name: 'ISO 5 / Class 100 (Sterile Core & Aseptic Filling)',
    acph: 300,
    minAcph: 240,
    maxAcph: 360,
    filter: 'Pre-Filter (10μ) + Microvee (5μ) + Terminal H14 HEPA (99.997% @ 0.3μ)',
    pressure: '+15 Pa to +20 Pa Positive Pressure',
    panelRec: '80mm / 100mm PUF/PIR Modular Wall Panels with Walk-on Ceiling',
    category: 'Pharma Sterile'
  },
  {
    id: 'iso6',
    name: 'ISO 6 / Class 1,000 (Sterile Prep & Optics)',
    acph: 180,
    minAcph: 150,
    maxAcph: 240,
    filter: 'Pre-Filter (10μ) + Microvee (5μ) + Terminal H14 HEPA (99.997% @ 0.3μ)',
    pressure: '+12 Pa to +15 Pa Positive Pressure',
    panelRec: '50mm / 80mm PUF Modular Wall Panels with Flush View Panels',
    category: 'Pharma / High-Tech'
  },
  {
    id: 'iso7',
    name: 'ISO 7 / Class 10,000 (Pharma Formulation & Medical Devices)',
    acph: 60,
    minAcph: 45,
    maxAcph: 90,
    filter: 'Pre-Filter (10μ) + Microvee (5μ) + Terminal H13 HEPA (99.95%)',
    pressure: '+10 Pa to +15 Pa Positive Pressure',
    panelRec: '50mm PUF Insulated Modular Wall & Ceiling Panels',
    category: 'Pharma Production'
  },
  {
    id: 'iso8',
    name: 'ISO 8 / Class 100,000 (Packaging, Storage & Component Wash)',
    acph: 25,
    minAcph: 20,
    maxAcph: 35,
    filter: 'Pre-Filter (G4 10μ) + Fine Microvee Filter (F7 5μ)',
    pressure: '+5 Pa to +10 Pa Positive Pressure',
    panelRec: '50mm PPGI PUF Panels with Flush Double Glazed Windows',
    category: 'Pharma Secondary'
  },
  {
    id: 'ot',
    name: 'Modular Hospital OT (NABH / Super-Specialty Surgery)',
    acph: 28,
    minAcph: 25,
    maxAcph: 32,
    filter: 'Pre-Filter + Microvee + Central Laminar Air Flow Ceiling Plenum (HEPA H14)',
    pressure: '+15 Pa to +25 Pa Positive Pressure',
    panelRec: 'Antimicrobial Powder-Coated SS 304 / HPL with Lead Shielding Option',
    category: 'Healthcare'
  },
  {
    id: 'industrial',
    name: 'Industrial Controlled Space / Comfort Cooling',
    acph: 10,
    minAcph: 8,
    maxAcph: 15,
    filter: 'Washable Pre-Filter (10μ) + High-Efficiency Cooling Coil',
    pressure: 'Neutral / Slight Positive',
    panelRec: '50mm Insulated Sandwich Panels or Standard Industrial Partitioning',
    category: 'Industrial / Commercial'
  }
]

export default function CleanroomCalculator({ onOpenQuote }) {
  const [length, setLength] = useState(25)
  const [width, setWidth] = useState(20)
  const [height, setHeight] = useState(10)
  const [selectedStandardId, setSelectedStandardId] = useState('iso7')
  const [occupancy, setOccupancy] = useState(4)
  const [equipmentHeat, setEquipmentHeat] = useState('medium') // low, medium, high

  const currentStandard = cleanroomStandards.find(s => s.id === selectedStandardId) || cleanroomStandards[2]

  const calculation = useMemo(() => {
    const l = Math.max(1, Number(length) || 1)
    const w = Math.max(1, Number(width) || 1)
    const h = Math.max(1, Number(height) || 1)

    const area = l * w
    const volume = area * h
    const acph = currentStandard.acph

    // CFM = Volume * ACPH / 60
    const cfm = Math.round((volume * acph) / 60)

    // Heat Load Estimation in BTU/hr
    // 1. Room transmission & envelope load: ~35 BTU/sqft
    const envelopeLoad = area * 35

    // 2. Fresh Air load (~15% of CFM treated from ambient 105°F to room 72°F)
    const freshAirCfm = cfm * 0.15
    const freshAirLoad = freshAirCfm * 1.08 * (105 - 72)

    // 3. Occupants (sensible + latent: ~450 BTU/person)
    const peopleLoad = Math.max(1, Number(occupancy) || 1) * 450

    // 4. Equipment load
    const equipLoadMap = { low: 4000, medium: 12000, high: 28000 }
    const equipmentLoad = equipLoadMap[equipmentHeat] || 12000

    const totalBtu = envelopeLoad + freshAirLoad + peopleLoad + equipmentLoad
    const estimatedTr = Math.max(1.5, Math.round((totalBtu / 12000) * 10) / 10)

    // Recommended AHU Sizing
    let recommendedAhu = ''
    if (cfm <= 2500) {
      recommendedAhu = 'Double Skin 25mm/50mm PUF AHU (Ceiling Suspended or Floor Mounted)'
    } else if (cfm <= 10000) {
      recommendedAhu = 'Double Skin 50mm PUF Floor-Mounted AHU with High-Static Plug Fan'
    } else {
      recommendedAhu = 'Heavy-Duty Double Skin Modular AHU (Split Deck / Multi-Fan Array)'
    }

    return {
      area,
      volume,
      cfm,
      estimatedTr,
      recommendedAhu,
      acph
    }
  }, [length, width, height, currentStandard, occupancy, equipmentHeat])

  const whatsappMessage = useMemo(() => {
    return encodeURIComponent(
      `Hello Encore Cooling Systems,\n\nI used your Cleanroom & HVAC Estimator on your website for my facility:\n` +
      `• Room Dimensions: ${length}ft (L) x ${width}ft (W) x ${height}ft (H)\n` +
      `• Floor Area: ${calculation.area} sq. ft. | Volume: ${calculation.volume} cu. ft.\n` +
      `• Cleanroom Standard: ${currentStandard.name}\n` +
      `• Target Air Changes: ${calculation.acph} ACPH\n` +
      `• Calculated Airflow: ${calculation.cfm.toLocaleString()} CFM\n` +
      `• Estimated Cooling Load: ${calculation.estimatedTr} TR\n` +
      `• Recommended AHU: ${calculation.recommendedAhu}\n` +
      `• Filtration: ${currentStandard.filter}\n\n` +
      `Please provide an official quotation and equipment sizing proposal for this setup.`
    )
  }, [length, width, height, currentStandard, calculation])

  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote({
        requirement: 'Turnkey HVAC & Cleanroom Project',
        details: `Cleanroom Sizing Estimate:\n• Size: ${length}ft x ${width}ft x ${height}ft (${calculation.area} sqft, ${calculation.volume} cuft)\n• Classification: ${currentStandard.name}\n• Airflow: ${calculation.cfm.toLocaleString()} CFM (${calculation.acph} ACPH)\n• Estimated Tonnage: ${calculation.estimatedTr} TR\n• Suggested AHU: ${calculation.recommendedAhu}\n• Filtration: ${currentStandard.filter}`
      })
    }
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-tag">
          <Calculator size={15} />
          <span>Interactive Engineering Tool</span>
        </div>
        <h3>Cleanroom & HVAC Sizing Estimator</h3>
        <p>
          Instantly calculate design airflow (CFM), required air changes per hour (ACPH), 
          estimated cooling tonnage (TR), and filtration stages compliant with WHO cGMP & ISO standards.
        </p>
      </div>

      <div className="calc-grid">
        {/* Left Input Column */}
        <div className="calc-inputs">
          <div className="calc-section-title">
            <span>1</span> Room Dimensions (Feet)
          </div>
          <div className="calc-dim-row">
            <label>
              <span>Length (ft)</span>
              <input
                type="number"
                min="5"
                max="300"
                value={length}
                onChange={e => setLength(e.target.value)}
              />
            </label>
            <label>
              <span>Width (ft)</span>
              <input
                type="number"
                min="5"
                max="300"
                value={width}
                onChange={e => setWidth(e.target.value)}
              />
            </label>
            <label>
              <span>Height (ft)</span>
              <input
                type="number"
                min="7"
                max="40"
                value={height}
                onChange={e => setHeight(e.target.value)}
              />
            </label>
          </div>

          <div className="calc-meta-bar">
            <div>
              <small>Floor Area</small>
              <b>{calculation.area} sq. ft.</b>
            </div>
            <div>
              <small>Total Volume</small>
              <b>{calculation.volume.toLocaleString()} cu. ft.</b>
            </div>
          </div>

          <div className="calc-section-title" style={{ marginTop: '20px' }}>
            <span>2</span> Cleanliness Class & Standard
          </div>
          <div className="calc-standards-list">
            {cleanroomStandards.map(std => {
              const active = std.id === selectedStandardId
              return (
                <button
                  type="button"
                  key={std.id}
                  className={`calc-std-btn ${active ? 'active' : ''}`}
                  onClick={() => setSelectedStandardId(std.id)}
                >
                  <div className="calc-std-info">
                    <span className="calc-std-cat">{std.category}</span>
                    <strong className="calc-std-name">{std.name}</strong>
                  </div>
                  <div className="calc-std-tag">
                    {std.acph} ACPH
                  </div>
                </button>
              )
            })}
          </div>

          <div className="calc-section-title" style={{ marginTop: '20px' }}>
            <span>3</span> Room Occupancy & Process Heat
          </div>
          <div className="calc-occupancy-row">
            <label>
              <span>Personnel (Occupants)</span>
              <input
                type="number"
                min="1"
                max="100"
                value={occupancy}
                onChange={e => setOccupancy(e.target.value)}
              />
            </label>
            <label>
              <span>Process Equipment Heat</span>
              <select
                value={equipmentHeat}
                onChange={e => setEquipmentHeat(e.target.value)}
              >
                <option value="low">Low (Electronics, Storage, Packing)</option>
                <option value="medium">Medium (Formulation, Lab Equipment)</option>
                <option value="high">High (Reactors, Molding, Autoclaves)</option>
              </select>
            </label>
          </div>
        </div>

        {/* Right Output Column */}
        <div className="calc-results-box">
          <div className="calc-res-badge">
            <Sparkles size={14} />
            <span>Recommended Engineering Sizing</span>
          </div>

          <div className="calc-highlight-metric">
            <div className="calc-kpi">
              <span className="kpi-icon"><Wind size={22} /></span>
              <div>
                <small>DESIGN AIRFLOW</small>
                <strong>{calculation.cfm.toLocaleString()} <abbr>CFM</abbr></strong>
                <span>Calculated at {calculation.acph} Air Changes / Hour</span>
              </div>
            </div>

            <div className="calc-kpi">
              <span className="kpi-icon cold"><Snowflake size={22} /></span>
              <div>
                <small>ESTIMATED COOLING LOAD</small>
                <strong>~{calculation.estimatedTr} <abbr>TR</abbr></strong>
                <span>Tons of Refrigeration (Sensible + Latent)</span>
              </div>
            </div>
          </div>

          <div className="calc-specs-checklist">
            <div className="calc-spec-item">
              <CheckCircle2 size={16} />
              <div>
                <b>Recommended Air Handling Unit</b>
                <p>{calculation.recommendedAhu}</p>
              </div>
            </div>

            <div className="calc-spec-item">
              <CheckCircle2 size={16} />
              <div>
                <b>Multi-Stage Filtration Configuration</b>
                <p>{currentStandard.filter}</p>
              </div>
            </div>

            <div className="calc-spec-item">
              <CheckCircle2 size={16} />
              <div>
                <b>Pressure Cascade & Zoning</b>
                <p>{currentStandard.pressure}</p>
              </div>
            </div>

            <div className="calc-spec-item">
              <CheckCircle2 size={16} />
              <div>
                <b>Partition & Ceiling Architecture</b>
                <p>{currentStandard.panelRec}</p>
              </div>
            </div>
          </div>

          <div className="calc-actions">
            <a
              href={`https://wa.me/919105075050?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="calc-wa-btn"
            >
              <MessageSquare size={17} />
              <span>Share Setup via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleQuoteClick}
              className="calc-quote-btn"
            >
              <span>Get Turnkey Proposal</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="calc-footnote">
            <Info size={13} />
            <span>
              Values calculated follow standard ISHRAE / ASHRAE 170 / ISO 14644-1 engineering practices. 
              Final HVAC coil sizing and CFM are confirmed during detailed heat-load simulation by Encore engineers.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
