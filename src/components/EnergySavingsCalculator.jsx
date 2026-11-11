import React, { useState, useMemo } from 'react'
import {
  Zap,
  TrendingUp,
  Leaf,
  ArrowRight,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  HelpCircle
} from 'lucide-react'

export default function EnergySavingsCalculator({ onOpenQuote }) {
  const [tonnage, setTonnage] = useState(100) // Total TR
  const [operatingHours, setOperatingHours] = useState(24) // 24x7 for pharma
  const [tariff, setTariff] = useState(8.5) // ₹ per kWh in India

  const savings = useMemo(() => {
    const tr = Math.max(10, Number(tonnage) || 10)
    const hrs = Math.max(1, Math.min(24, Number(operatingHours) || 1))
    const rate = Math.max(1, Number(tariff) || 1)
    const annualDays = 330 // approx 330 days operating per year

    // Benchmark power consumption:
    // Conventional fixed-speed system: ~1.05 kW / TR
    // Encore High-Efficiency System (IE4 EC Plug Fan + VFD + Inverter / Screw): ~0.72 kW / TR
    const convKwPerTr = 1.05
    const encoreKwPerTr = 0.72
    const kwSavedPerTr = convKwPerTr - encoreKwPerTr // 0.33 kW / TR (~31.4% savings)

    const annualTotalHours = hrs * annualDays
    const annualConvKwh = Math.round(tr * convKwPerTr * annualTotalHours)
    const annualEncoreKwh = Math.round(tr * encoreKwPerTr * annualTotalHours)
    const annualKwhSaved = annualConvKwh - annualEncoreKwh

    const annualCostConv = Math.round(annualConvKwh * rate)
    const annualCostEncore = Math.round(annualEncoreKwh * rate)
    const annualCostSaved = annualCostConv - annualCostEncore

    // In Lakhs (1 Lakh = 100,000 INR)
    const savingsInLakhs = (annualCostSaved / 100000).toFixed(2)

    // CO2 footprint reduction (approx 0.82 kg CO2 per kWh on Indian grid)
    const co2TonnesAvoided = Math.round((annualKwhSaved * 0.82) / 1000)

    return {
      annualKwhSaved,
      annualCostSaved,
      savingsInLakhs,
      co2TonnesAvoided,
      percentSaved: 31.4
    }
  }, [tonnage, operatingHours, tariff])

  const waMessage = useMemo(() => {
    return encodeURIComponent(
      `Hello Encore Cooling Systems,\n\nI evaluated energy savings on your website calculator for a ${tonnage} TR plant (${operatingHours} hrs/day):\n` +
      `• Estimated Annual Savings: ₹${savings.savingsInLakhs} Lakhs / year\n` +
      `• Annual Energy Saved: ${savings.annualKwhSaved.toLocaleString()} kWh\n` +
      `• Carbon Offset: ${savings.co2TonnesAvoided} metric tons CO2 / year\n\n` +
      `Please provide an energy-audit and high-efficiency AHU/VRV proposal for our facility.`
    )
  }, [tonnage, operatingHours, savings])

  return (
    <div className="energy-calc-card">
      <div className="energy-calc-header">
        <div className="energy-badge">
          <Zap size={14} />
          <span>Sustainability & Opex Optimization</span>
        </div>
        <h3>HVAC Energy & Operating Cost Savings Estimator</h3>
        <p>
          Compare conventional belt-driven AHUs against Encore's IE3/IE4 EC Plug Fans 
          and Daikin inverter VRV / Variable Speed Screw Chillers.
        </p>
      </div>

      <div className="energy-calc-grid">
        {/* Controls */}
        <div className="energy-controls-col">
          <div className="energy-input-group">
            <div className="energy-label-row">
              <span>Total Plant Cooling Capacity (TR)</span>
              <b>{tonnage} TR</b>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={tonnage}
              onChange={e => setTonnage(Number(e.target.value))}
              className="energy-range-slider"
            />
            <div className="slider-ticks">
              <span>10 TR</span>
              <span>100 TR</span>
              <span>250 TR</span>
              <span>500 TR</span>
            </div>
          </div>

          <div className="energy-input-group">
            <div className="energy-label-row">
              <span>Daily Operating Schedule</span>
              <b>{operatingHours} Hours / Day</b>
            </div>
            <input
              type="range"
              min="8"
              max="24"
              step="2"
              value={operatingHours}
              onChange={e => setOperatingHours(Number(e.target.value))}
              className="energy-range-slider"
            />
            <div className="slider-ticks">
              <span>8 hrs (Commercial)</span>
              <span>16 hrs (2 Shifts)</span>
              <span>24 hrs (Continuous Pharma)</span>
            </div>
          </div>

          <div className="energy-input-group">
            <div className="energy-label-row">
              <span>Electricity Cost (₹ per kWh / Unit)</span>
              <b>₹{tariff} / kWh</b>
            </div>
            <div className="tariff-pills">
              {[7.5, 8.5, 9.5, 11.0].map(val => (
                <button
                  type="button"
                  key={val}
                  className={`tariff-pill ${tariff === val ? 'active' : ''}`}
                  onClick={() => setTariff(val)}
                >
                  ₹{val}
                </button>
              ))}
            </div>
          </div>

          <div className="energy-benefits-list">
            <div className="benefit-item">
              <CheckCircle2 size={16} />
              <span>Direct-drive EC plug fans eliminate 8-12% belt slip losses.</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={16} />
              <span>Inverter VRV & VFD chillers optimize low part-load efficiency.</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={16} />
              <span>Typical project payback period achieved in 14 to 22 months.</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="energy-results-col">
          <div className="savings-highlight-card">
            <small>ESTIMATED ANNUAL ELECTRICAL SAVINGS</small>
            <div className="savings-amount">
              <b>₹{savings.savingsInLakhs}</b>
              <span>Lakhs / Year</span>
            </div>
            <div className="savings-percent-tag">
              <TrendingUp size={14} />
              <span>Up to {savings.percentSaved}% Energy Reduction</span>
            </div>
          </div>

          <div className="energy-kpi-subgrid">
            <div className="energy-kpi-box">
              <Zap size={20} color="#38bdf8" />
              <div>
                <small>POWER SAVED ANNUALLY</small>
                <strong>{savings.annualKwhSaved.toLocaleString()} <abbr>kWh</abbr></strong>
              </div>
            </div>

            <div className="energy-kpi-box green">
              <Leaf size={20} color="#22c55e" />
              <div>
                <small>CO₂ EMISSIONS AVOIDED</small>
                <strong>{savings.co2TonnesAvoided} <abbr>Tonnes</abbr></strong>
              </div>
            </div>
          </div>

          <div className="energy-actions">
            <a
              href={`https://wa.me/919105075050?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="calc-wa-btn"
            >
              <MessageSquare size={16} />
              <span>Request Energy Audit on WhatsApp</span>
            </a>

            <button
              type="button"
              className="calc-quote-btn"
              onClick={() => {
                if (onOpenQuote) {
                  onOpenQuote({
                    requirement: 'Energy Efficient HVAC Retrofit / Sizing',
                    details: `Energy Savings Evaluation for ${tonnage} TR plant (${operatingHours} hrs/day, ₹${tariff}/kWh).\nProjected Savings: ₹${savings.savingsInLakhs} Lakhs/yr (${savings.annualKwhSaved.toLocaleString()} kWh/yr).`
                  })
                }
              }}
            >
              <span>Get Detailed Retrofit Proposal</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
