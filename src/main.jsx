import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  BadgeCheck,
  Factory,
  Sparkles,
  Wind,
  Snowflake,
  Building2,
  HeartPulse,
  Wrench,
  Download,
  Calculator,
  MessageSquare,
  ChevronRight
} from 'lucide-react'

import './styles.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SmartWhatsApp from './components/SmartWhatsApp.jsx'
import QuoteModal from './components/QuoteModal.jsx'
import { clientList } from './productCatalog.js'

const homeSolutions = [
  {
    title: 'HVAC Engineering & AHUs',
    kicker: '1,000 TO 50,000 CFM',
    image: '/images/pharma-lab.png',
    icon: Wind,
    text: 'Double & single skin air handling units, air washers, cooling coils, and air treatment systems engineered for pharma & industrial facilities.',
    link: '/products.html'
  },
  {
    title: 'Modular Cleanroom Systems',
    kicker: 'WHO cGMP & USFDA',
    image: '/images/modular-cleanroom.png',
    icon: Building2,
    text: 'Pre-fabricated 50–100mm PUF/PIR insulated partition panels, walk-on ceilings, flush view panels, and antibacterial cove systems.',
    link: '/products.html'
  },
  {
    title: 'Cleanroom Equipment',
    kicker: 'CONTAMINATION MITIGATION',
    image: '/images/air-shower.png',
    icon: ShieldCheck,
    text: 'High-speed air showers (20–25 m/s), dynamic & static pass boxes with electromagnetic interlocks, and laminar airflow stations.',
    link: '/products.html'
  },
  {
    title: 'Industrial Chillers & VRV',
    kicker: 'DAIKIN CHANNEL PARTNER',
    image: '/images/water-cooled-screw-chiller.png',
    icon: Snowflake,
    text: 'Semi-hermetic screw & scroll chillers from 10 to 500 TR, plus authorized Daikin VRV multi-split inverter cooling systems.',
    link: '/products.html'
  },
  {
    title: 'Healthcare & Modular OT',
    kicker: 'NABH HOSPITAL SUITES',
    image: '/images/operation-theatre.png',
    icon: HeartPulse,
    text: 'Seamless modular operating theatres, microprocessor surgeon touch panels, HEPA laminar ceiling plenums, and hermetic sliding doors.',
    link: '/products.html'
  },
  {
    title: 'Turnkey Contracting',
    kicker: 'DESIGN TO VALIDATION',
    image: '/images/cleanroom-corridor.png',
    icon: Wrench,
    text: 'End-to-end design, in-house fabrication, site erection, duct balancing, and DQ/IQ/OQ aerosol validation with particle counts.',
    link: '/about.html'
  }
]

function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [prefilledData, setPrefilledData] = useState(null)

  const handleOpenQuote = (data = null) => {
    setPrefilledData(data)
    setQuoteModalOpen(true)
  }

  return (
    <div className="site-wrapper">
      <Navbar activePage="home" onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
          <div className="wrap hero-in">
            <div className="hero-text-col">
              <div className="hero-overline">
                <span></span>
                PRECISION HVAC • MODULAR CLEANROOM • TURNKEY SOLUTIONS
              </div>

              <h1>
                Engineering <strong>cleaner, cooler</strong> & controlled environments.
              </h1>

              <p className="hero-desc">
                Encore Cooling Systems manufactures custom Air Handling Units (AHUs), 
                modular cleanroom partition systems, cleanroom equipment, and industrial cooling solutions 
                compliant with WHO cGMP and USFDA standards.
              </p>

              <div className="hero-actions">
                <a href="/products.html" className="btn-primary">
                  Explore Products
                  <ArrowRight size={17} />
                </a>

                <a href="/calculator.html" className="btn-secondary">
                  <Calculator size={16} />
                  <span>Cleanroom Estimator</span>
                </a>

                <a
                  href="https://wa.me/919105075050?text=Hello%20Encore%20Cooling%20Systems,%20I%20would%20like%20to%20enquire%20about%20your%20HVAC%20and%20Cleanroom%20engineering%20solutions."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-hero"
                >
                  <MessageSquare size={17} />
                  WhatsApp
                </a>
              </div>

              <div className="hero-metrics">
                <div className="metric-item">
                  <b>50k</b>
                  <span>Max CFM AHUs</span>
                </div>
                <div className="metric-item">
                  <b>ISO 5-8</b>
                  <span>Cleanroom Classes</span>
                </div>
                <div className="metric-item">
                  <b>100+</b>
                  <span>Turnkey Projects</span>
                </div>
                <div className="metric-item">
                  <b>2019</b>
                  <span>Est. Vadodara Hub</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-main-img-card">
                <img
                  src="/images/hero-corridor.png"
                  alt="Encore Cleanroom & HVAC Engineering Project"
                />
                <div className="hero-card-overlay"></div>

                <div className="hero-stamp-badge">
                  <small>MANUFACTURING EXCELLENCE</small>
                  <strong>WHO cGMP & USFDA</strong>
                  <span style={{ fontSize: '11px', color: '#cbd5e1' }}>Class 100 to 100,000</span>
                </div>
              </div>

              <div className="hero-floating-card">
                <div className="hero-floating-icon">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <b>Engineered for Cleanliness</b>
                  <span>Airflow, temperature, RH & differential pressure control</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip">
          <div className="wrap trust-grid">
            <div className="trust-item">
              <Award size={24} />
              <div>
                <b>Turnkey Contractor</b>
                <span>Concept to Commissioning</span>
              </div>
            </div>
            <div className="trust-item">
              <Factory size={24} />
              <div>
                <b>In-House Manufacturing</b>
                <span>Manjusar GIDC, Vadodara</span>
              </div>
            </div>
            <div className="trust-item">
              <BadgeCheck size={24} />
              <div>
                <b>Daikin Partner</b>
                <span>Authorized Channel Partner</span>
              </div>
            </div>
            <div className="trust-item">
              <ShieldCheck size={24} />
              <div>
                <b>Regulatory Compliance</b>
                <span>WHO cGMP, USFDA, ISO, TGA</span>
              </div>
            </div>
            <div className="trust-item">
              <Sparkles size={24} />
              <div>
                <b>Validation & DQ/IQ/OQ</b>
                <span>DOP, PAO & Particle Counts</span>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY BRIEF SECTION */}
        <section className="section">
          <div className="wrap company-grid">
            <div className="company-images">
              <img
                src="/images/pharma-lab.png"
                alt="Encore Cleanroom Project Installation"
                className="company-main-img"
              />
              <img
                src="/images/cleanroom-corridor.png"
                alt="Pharmaceutical Corridor Partition"
                className="company-sub-img"
              />
              <div className="company-experience-badge">
                <small>MANUFACTURING PARTNER</small>
                <b>Since 2019</b>
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>

            <div className="company-content">
              <div className="section-label">ABOUT ENCORE COOLING SYSTEMS</div>
              <h2 className="section-title">
                Your engineering partner for <span>critical clean environments.</span>
              </h2>
              <p>
                Established in 2019 at Vadodara (Gujarat, India), <strong>Encore Cooling Systems</strong> is a 
                premier manufacturer and turnkey contractor delivering cleanroom infrastructure and HVAC solutions. 
                Under the leadership of <strong>Mr. Yashanand Patil (CEO)</strong>, our products serve pharmaceutical, 
                healthcare, biotechnology, and chemical industries nationwide.
              </p>

              <div className="company-checklist">
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>Integrated HVAC & Cleanroom Engineering</span>
                </div>
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>Authorized Daikin VRV/VRF Channel Partner</span>
                </div>
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>In-House Panel & Equipment Fabrication</span>
                </div>
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>Comprehensive DQ / IQ / OQ Documentation</span>
                </div>
              </div>

              <div className="company-actions-bar">
                <a href="/about.html" className="btn-primary">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/brochure/encore-company-brochure.pdf"
                  download="Encore_Cooling_Systems_Brochure.pdf"
                  className="btn-brochure"
                >
                  <Download size={15} />
                  Company Brochure (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SOLUTIONS PREVIEW */}
        <section className="section dark">
          <div className="wrap">
            <div className="section-head split">
              <div>
                <div className="section-label">ENGINEERING CAPABILITIES</div>
                <h2 className="section-title">
                  One partner. <span>Complete environment control.</span>
                </h2>
              </div>
              <div>
                <a href="/products.html" className="btn-brochure" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'transparent' }}>
                  <span>View All 30+ Products</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="solutions-grid">
              {homeSolutions.map((sol, index) => {
                return (
                  <a
                    href={sol.link}
                    className="solution-card"
                    key={sol.title}
                  >
                    <div className="solution-card-img">
                      <img src={sol.image} alt={sol.title} loading="lazy" />
                      <span className="solution-card-no">0{index + 1}</span>
                    </div>

                    <div className="solution-card-body">
                      <div className="solution-kicker">{sol.kicker}</div>
                      <h3>{sol.title}</h3>
                      <p>{sol.text}</p>

                      <div className="solution-explore-btn">
                        <span>View Details</span>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE TOOLS HIGHLIGHT BANNER */}
        <section className="section subtle">
          <div className="wrap">
            <div className="calc-card" style={{ background: 'linear-gradient(135deg, #061a33 0%, #0a3d78 100%)', color: '#fff', border: 'none' }}>
              <div style={{ maxWidth: '850px' }}>
                <div className="vis-badge" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8' }}>
                  <Calculator size={14} />
                  <span>Interactive Engineering Portal</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, margin: '10px 0 14px', color: '#fff' }}>
                  Sizing Estimator, Airflow Schematic & Energy Calculator
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
                  Need to calculate required room CFM, target Air Changes per Hour (ACPH), 
                  cooling tonnage, or projected electrical savings for an upcoming facility? 
                  Explore our dedicated calculation and visualization suite.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a href="/calculator.html" className="btn-primary" style={{ background: '#38bdf8', color: '#061a33' }}>
                    <span>Open Engineering Tools</span>
                    <ArrowRight size={16} />
                  </a>
                  <button
                    type="button"
                    className="btn-secondary"
                    style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
                    onClick={() => handleOpenQuote()}
                  >
                    <span>Request Quotation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTELE MARQUEE */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <div className="section-label">TRUSTED CLIENTELE</div>
              <h2 className="section-title">
                Trusted by <span>leading manufacturers.</span>
              </h2>
              <p className="section-desc">
                Encore cooling, cleanroom, and HVAC systems are installed across major pharmaceutical, 
                chemical, and industrial campuses across India.
              </p>
            </div>

            <div className="clients-grid">
              {clientList.slice(0, 12).map(c => (
                <div className="client-item-card" key={c.name}>
                  <strong>{c.name}</strong>
                  <span>{c.location}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK CONTACT CTA */}
        <section className="section subtle" style={{ padding: '60px 0' }}>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: '780px' }}>
            <span className="section-label">START A CONVERSATION</span>
            <h2 className="section-title" style={{ fontSize: '32px' }}>
              Planning a new facility or upgrading HVAC?
            </h2>
            <p className="section-desc" style={{ margin: '0 auto 28px' }}>
              Our team in Vadodara provides on-site surveys, heat-load audits, equipment sizing, 
              and turnkey proposal estimates.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a href="/contact.html" className="btn-primary">
                Contact Our Team
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/919105075050?text=Hello%20Encore%20Cooling%20Systems"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-hero"
              >
                <MessageSquare size={16} />
                WhatsApp +91 91050 75050
              </a>
            </div>
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

createRoot(document.getElementById('root')).render(<App />)
