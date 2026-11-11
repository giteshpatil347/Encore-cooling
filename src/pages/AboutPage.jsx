import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  BadgeCheck,
  Factory,
  Sparkles,
  Download,
  ChevronDown,
  Building2,
  Clock,
  Layers,
  FileCheck
} from 'lucide-react'

import '../styles.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SmartWhatsApp from '../components/SmartWhatsApp.jsx'
import QuoteModal from '../components/QuoteModal.jsx'
import { complianceStandards } from '../productCatalog.js'

const caseStudiesData = [
  {
    client: 'Sterile Injectable Facility',
    title: '35,000 sq ft Sterile Cleanroom & Central Chilled Water Plant',
    desc: 'Turnkey cleanroom execution across ISO 5 filling lines and ISO 7 formulation suites with automated pressure balancing and 180 TR central chilled water cooling.',
    metrics: [
      { val: '45,000 CFM', label: 'Airflow Volume' },
      { val: '180 TR', label: 'Chilled Water Plant' },
      { val: 'ISO 5 & 7', label: 'Cleanliness Rating' },
      { val: 'USFDA & cGMP', label: 'Audit Clearance' }
    ],
    result: 'Zero non-conformances during USFDA audit & 28% electrical power reduction.'
  },
  {
    client: 'Super-Specialty Hospital',
    title: '4-Suite Modular Operation Theatre (OT) Surgical Complex',
    desc: 'Turnkey engineering of seamless antimicrobial modular walls, microprocessor surgeon touch panels, HEPA laminar ceiling plenums, and positive pressure cascades.',
    metrics: [
      { val: '4 OTs', label: 'Modular Suites' },
      { val: '<42 dBA', label: 'Acoustic Sound Level' },
      { val: '28 ACPH', label: 'Design Air Changes' },
      { val: 'NABH', label: 'Accredited Standard' }
    ],
    result: '100% sterile laminar airflow field with full NABH hospital accreditation.'
  },
  {
    client: 'Chemical & API Processing',
    title: 'High-Potency Active Ingredient (API) Powder Containment Suite',
    desc: 'Reverse Laminar Airflow (RLAF) powder dispensing booths, dynamic pass boxes with HEPA filtration, and flameproof exhaust ventilation.',
    metrics: [
      { val: '<1 µg/m³', label: 'Operator Exposure (OEL)' },
      { val: '8 Units', label: 'Dynamic Pass Boxes' },
      { val: 'H14 HEPA', label: 'Filter Class' },
      { val: 'FLPm Motors', label: 'Flameproof Electricals' }
    ],
    result: 'Operator containment certified with automated electromagnetic door interlocks.'
  }
]

const technicalFaqs = [
  {
    q: 'What cleanroom classifications does Encore design and manufacture?',
    a: 'Encore Cooling Systems manufactures modular cleanrooms from ISO 5 (Class 100) down to ISO 8 (Class 100,000), fully compliant with WHO cGMP, USFDA, and Schedule M standards. We provide partition panels, walk-on ceilings, cleanroom doors, air showers, pass boxes, and coordinated HVAC equipment.'
  },
  {
    q: 'What are the technical advantages of Encore Double Skin AHUs?',
    a: 'Our double-skin AHUs feature thermal-break extruded aluminium profiles and 25mm or 50mm injected high-density PUF insulation (40±2 kg/m³). This completely eliminates thermal bridging, condensation, and microbial growth. They are equipped with DIDW or high-efficiency EC plug fans (IE3/IE4 motors) with multi-stage filtration.'
  },
  {
    q: 'Does Encore provide complete validation dossiers (DQ, IQ, OQ)?',
    a: 'Yes. Every turnkey HVAC and cleanroom project includes comprehensive Design Qualification (DQ), Installation Qualification (IQ), and Operational Qualification (OQ) validation documentation. We also execute on-site aerosol PAO/DOP HEPA filter integrity leak tests, particle count audits, and airflow velocity balancing.'
  },
  {
    q: 'Is Encore an official authorized channel partner for Daikin?',
    a: 'Yes. Encore Cooling Systems is an official Authorized Channel Partner of Daikin Air Conditioning India Pvt. Ltd. We supply, engineer, and commission genuine Daikin VRV/VRF multi-split inverter systems and central chillers with OEM manufacturer warranty and spare parts backup.'
  },
  {
    q: 'Can cleanroom panels and equipment dimensions be customized?',
    a: 'Yes. All modular wall panels (50mm, 80mm, 100mm), ceilings, cleanroom doors, air showers, and pass boxes are custom-fabricated to your facility layouts at our Manjusar, Vadodara manufacturing plant.'
  },
  {
    q: 'What is the typical execution timeline for a turnkey cleanroom facility?',
    a: 'Standard cleanroom suites (1,000 to 5,000 sq. ft) are manufactured and erected within 4 to 8 weeks, covering panel installation, HVAC ducting, AHU erection, and pre-commissioning balancing. Larger greenfield projects are scheduled according to civil readiness.'
  },
  {
    q: 'Do you offer Annual Maintenance Contracts (AMC) and filter replacement?',
    a: 'Yes. We offer preventive AMC contracts, emergency breakdown support, AHU coil cleaning/retubing, and certified replacement of G4 pre-filters, F9 microvee filters, and H14 terminal HEPA filters across Gujarat and nationwide.'
  },
  {
    q: 'Can we visit the Encore manufacturing plant in Vadodara before ordering?',
    a: 'We warmly welcome plant directors, engineering heads, and procurement teams to visit our facility at Plot No. 10, Champabaa Estate, Lamdapura Road, Manjusar GIDC, Vadodara to inspect our manufacturing standards, raw materials, and machinery.'
  }
]

function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <div className="site-wrapper">
      <Navbar activePage="about" onOpenQuote={() => setQuoteModalOpen(true)} />

      <main>
        {/* PAGE HEADER */}
        <div style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)', padding: '60px 0 40px', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <span className="section-label">MANUFACTURER & TURNKEY CONTRACTOR</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 800, color: 'var(--ink)', margin: '8px 0 14px' }}>
              Engineering controlled spaces with <span>uncompromising precision.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '17px', maxWidth: '750px', lineHeight: 1.6 }}>
              Established in 2019 at Vadodara (Gujarat), Encore Cooling Systems is a trusted engineering 
              powerhouse for modular cleanrooms, custom AHUs, and industrial cooling systems.
            </p>
          </div>
        </div>

        {/* COMPANY PROFILE & LEADERSHIP */}
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
                <small>ESTABLISHED IN</small>
                <b>2019</b>
                <span>Vadodara, Gujarat</span>
              </div>
            </div>

            <div className="company-content">
              <div className="section-label">OUR JOURNEY & LEADERSHIP</div>
              <h2 className="section-title">
                Building trust through <span>repeatable performance.</span>
              </h2>
              <p>
                Founded as a partnership firm in 2019 under the leadership of <strong>Mr. Yashanand Patil (CEO)</strong>, 
                Encore Cooling Systems was created to address a critical industry need: delivering integrated, 
                contamination-free cleanroom architecture coupled with high-efficiency HVAC equipment from a single source.
              </p>
              <p>
                Operating out of our manufacturing facility in <strong>Champabaa Industrial Estate, Manjusar GIDC (Vadodara)</strong>, 
                our engineering teams handle heat-load simulation, panel manufacturing, duct balancing, 
                aerosol PAO/DOP leak validation, and cleanroom commissioning.
              </p>

              <div className="company-checklist">
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>Authorized Daikin Channel Partner</span>
                </div>
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>10,000+ sq. ft. In-House Plant</span>
                </div>
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>ISO 5 to ISO 8 Cleanroom Classes</span>
                </div>
                <div className="company-check-item">
                  <CheckCircle2 size={18} />
                  <span>DQ, IQ, OQ Audit Dossiers Provided</span>
                </div>
              </div>

              <div className="company-actions-bar">
                <button
                  className="btn-primary"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Request Technical Proposal
                  <ArrowRight size={16} />
                </button>

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

        {/* REGULATORY STANDARDS */}
        <section className="section subtle">
          <div className="wrap">
            <div className="section-head center">
              <div className="section-label">REGULATORY AUDIT-READY</div>
              <h2 className="section-title">
                Certified to comply with <span>international standards.</span>
              </h2>
              <p className="section-desc">
                Encore engineering practices conform to strict pharmaceutical guidelines, 
                ensuring smooth regulatory approval during USFDA, MHRA, WHO, and Schedule M audits.
              </p>
            </div>

            <div className="standards-grid">
              {complianceStandards.map(std => (
                <div className="standard-card" key={std.code}>
                  <span className="standard-badge">{std.code}</span>
                  <h3>{std.title}</h3>
                  <p>{std.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-STEP PROCESS */}
        <section className="section">
          <div className="wrap">
            <div className="section-head split">
              <div>
                <div className="section-label">PROJECT METHODOLOGY</div>
                <h2 className="section-title">
                  From heat load design to <span>site validation.</span>
                </h2>
              </div>
              <p className="section-desc">
                Every turnkey cleanroom or industrial HVAC setup is executed via an accredited 
                four-stage engineering lifecycle.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-step-card">
                <div className="step-num">01</div>
                <h3>Audit & Sizing</h3>
                <p>
                  On-site survey, room dimension audits, heat load calculation (sensible & latent), 
                  and airflow CFM determination for required cleanliness class.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-num">02</div>
                <h3>Engineering Layouts</h3>
                <p>
                  Preparation of 2D/3D cleanroom layouts, pressure cascade zoning diagrams, 
                  ducting schematics, AHU piping, and electrical integration.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-num">03</div>
                <h3>Precision Manufacturing</h3>
                <p>
                  In-house fabrication of double-skin AHUs, PUF/PIR modular wall panels, 
                  cleanroom doors, air showers, pass boxes, and cooling coils in Vadodara.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-num">04</div>
                <h3>Erection & Validation</h3>
                <p>
                  Site assembly, silicone jointing, duct balancing, HEPA filter PAO/DOP leak testing, 
                  particle counts, and handover with complete DQ/IQ/OQ documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="section subtle">
          <div className="wrap">
            <div className="section-head split">
              <div>
                <div className="section-label">PROVEN RESULTS</div>
                <h2 className="section-title">
                  Turnkey projects. <span>Measurable impact.</span>
                </h2>
              </div>
              <p className="section-desc">
                Real industrial and healthcare environments engineered, commissioned, 
                and validated by Encore Cooling Systems across Gujarat and India.
              </p>
            </div>

            <div className="case-studies-grid">
              {caseStudiesData.map((cs, idx) => (
                <article className="case-study-card" key={idx}>
                  <div className="case-study-header">
                    <span className="case-client-badge">{cs.client}</span>
                    <h4>{cs.title}</h4>
                  </div>
                  <div className="case-study-body">
                    <p className="case-study-desc">{cs.desc}</p>
                    <div className="case-metrics-strip">
                      {cs.metrics.map((m, mIdx) => (
                        <div className="case-metric" key={mIdx}>
                          <b>{m.val}</b>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="case-result-pill">
                      <CheckCircle2 size={16} />
                      <span>{cs.result}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL FAQS */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <div className="section-label">FREQUENTLY ASKED QUESTIONS</div>
              <h2 className="section-title">
                Engineering & Commercial <span>Clarifications.</span>
              </h2>
              <p className="section-desc">
                Everything you need to know about cleanroom compliance, AHU specifications, 
                Daikin VRV warranties, and turnkey contracting terms.
              </p>
            </div>

            <div className="faq-grid">
              {technicalFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <div className={`faq-item-card ${isOpen ? 'open' : ''}`} key={idx}>
                    <button
                      className="faq-question-btn"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} className="faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-pane">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SmartWhatsApp />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={{ requirement: 'Turnkey HVAC & Cleanroom Project' }}
      />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<AboutPage />)
