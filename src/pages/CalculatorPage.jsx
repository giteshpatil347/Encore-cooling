import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Calculator, Sparkles, Zap, Wind, Download, MessageSquare } from 'lucide-react'

import '../styles.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SmartWhatsApp from '../components/SmartWhatsApp.jsx'
import QuoteModal from '../components/QuoteModal.jsx'
import CleanroomCalculator from '../components/CleanroomCalculator.jsx'
import AirflowVisualizer from '../components/AirflowVisualizer.jsx'
import EnergySavingsCalculator from '../components/EnergySavingsCalculator.jsx'

function CalculatorPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [prefilledData, setPrefilledData] = useState(null)

  const handleOpenQuote = data => {
    setPrefilledData(data)
    setQuoteModalOpen(true)
  }

  return (
    <div className="site-wrapper">
      <Navbar activePage="calculators" onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* PAGE HEADER */}
        <div style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)', padding: '60px 0 40px', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <span className="section-label">INTERACTIVE ENGINEERING SUITE</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 800, color: 'var(--ink)', margin: '8px 0 14px' }}>
              Cleanroom & HVAC <span>Calculation Tools.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '17px', maxWidth: '750px', lineHeight: 1.6 }}>
              Design your cleanroom capacity, simulate required airflow CFM and cooling tonnage, 
              explore closed-loop airflow circulation, and evaluate annual electrical power savings.
            </p>
          </div>
        </div>

        {/* 1. CAPACITY ESTIMATOR */}
        <section className="section subtle">
          <div className="wrap">
            <CleanroomCalculator onOpenQuote={handleOpenQuote} />
          </div>
        </section>

        {/* 2. AIRFLOW ARCHITECTURE SCHEMATIC */}
        <section className="section">
          <div className="wrap">
            <AirflowVisualizer />
          </div>
        </section>

        {/* 3. ENERGY SAVINGS CALCULATOR */}
        <section className="section subtle">
          <div className="wrap">
            <EnergySavingsCalculator onOpenQuote={handleOpenQuote} />
          </div>
        </section>
      </main>

      <Footer />
      <SmartWhatsApp />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={prefilledData}
      />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<CalculatorPage />)
