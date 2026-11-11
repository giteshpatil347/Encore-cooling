import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  Send,
  CheckCircle2,
  Download,
  Clock,
  Building2,
  ShieldCheck
} from 'lucide-react'

import '../styles.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SmartWhatsApp from '../components/SmartWhatsApp.jsx'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: 'Turnkey HVAC & Cleanroom Project',
    message: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website Engineering Contact: ${formData.requirement}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Requirement: ${formData.requirement}\n\n` +
      `Project Details / Message:\n${formData.message}`
    )

    window.location.href = `mailto:encorecooling@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="site-wrapper">
      <Navbar activePage="contact" />

      <main>
        {/* PAGE HEADER */}
        <div style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)', padding: '60px 0 40px', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <span className="section-label">GET IN TOUCH</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 800, color: 'var(--ink)', margin: '8px 0 14px' }}>
              Contact Our <span>Engineering Team.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '17px', maxWidth: '750px', lineHeight: 1.6 }}>
              Discuss your upcoming cleanroom project, schedule an on-site survey, 
              request equipment sizing, or arrange a visit to our Vadodara manufacturing plant.
            </p>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <section className="section">
          <div className="wrap contact-section-grid">
            {/* Info Cards */}
            <div className="contact-info-col">
              <div className="section-label">HEAD OFFICE & FACTORY</div>
              <h2 className="section-title">
                We are based in <span>Manjusar GIDC, Vadodara.</span>
              </h2>
              <p>
                Encore Cooling Systems operates a fully equipped manufacturing facility in Vadodara, Gujarat. 
                Our technical sales engineers are available to review room drawings, URS documents, 
                and heat-load specifications.
              </p>

              <div className="contact-cards-list">
                <div className="contact-card-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <small>DIRECT TELEPHONE & WHATSAPP</small>
                    <a href="tel:+919105075050">+91 91050 75050 (Primary Sales / WhatsApp)</a>
                    <a href="tel:+919714368199">+91 97143 68199 (Projects & Engineering)</a>
                    <a href="tel:+919033444552">+91 90334 44552 (Operations & Service)</a>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <small>EMAIL ENQUIRIES</small>
                    <a href="mailto:encorecooling@gmail.com">encorecooling@gmail.com</a>
                    <a href="mailto:yashanand.patil@gmail.com">yashanand.patil@gmail.com</a>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <small>FACTORY & REGISTERED OFFICE</small>
                    <strong>
                      Plot No. 10, 633/A, Champabaa Estate, Lamdapura Road, Moje Gam-Manjusar, 
                      Manjusar, Vadodara – 391775, Gujarat, India.
                    </strong>
                    <a
                      href="https://maps.google.com/?q=Champabaa+Industrial+Estate+Manjusar+Vadodara+Gujarat+391775"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-map-link"
                    >
                      <span>Open Directions in Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                <div className="contact-card-item" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                  <div className="contact-icon-box" style={{ background: '#dcfce7', color: '#16a34a' }}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <small style={{ color: '#15803d' }}>INSTANT WHATSAPP CHAT</small>
                    <a
                      href="https://wa.me/919105075050?text=Hello%20Encore%20Cooling%20Systems"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#16a34a', fontWeight: 800 }}
                    >
                      Click here to start chat with sales engineering →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lead-form-card">
              <h3>Submit Project Requirement</h3>
              <p>Share your requirement details and our engineers will respond with a quote.</p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} />
                  <h4>Thank you for your enquiry!</h4>
                  <p>
                    Your email application has opened with your requirements addressed to 
                    <b> encorecooling@gmail.com</b>. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <div className="lead-row">
                    <label>
                      <span>Your Name *</span>
                      <input
                        type="text"
                        required
                        placeholder="Mr. / Ms. Full Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </label>
                    <label>
                      <span>Company / Facility</span>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                      />
                    </label>
                  </div>

                  <div className="lead-row">
                    <label>
                      <span>Phone / WhatsApp *</span>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </label>
                    <label>
                      <span>Email Address *</span>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </label>
                  </div>

                  <label>
                    <span>Requirement Category</span>
                    <select
                      value={formData.requirement}
                      onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option>Turnkey HVAC & Cleanroom Project</option>
                      <option>Air Handling Units (AHU) 1,000–50,000 CFM</option>
                      <option>Modular Cleanroom Wall & Ceiling Panels</option>
                      <option>Cleanroom Doors & Flush View Panels</option>
                      <option>Cleanroom Equipment (Air Showers, Pass Boxes, LAF)</option>
                      <option>Industrial Chillers & Daikin VRV Multi-Split</option>
                      <option>Modular Operation Theatre (OT) Suites</option>
                      <option>Laboratory Systems & Fume Hoods</option>
                      <option>HVAC AMC, Filter Replacement & Duct Balancing</option>
                    </select>
                  </label>

                  <label>
                    <span>Project Scope / Sizing Notes</span>
                    <textarea
                      rows={4}
                      placeholder="Please mention room dimensions, target cleanroom class (ISO 5-8), estimated CFM, or specific equipment required..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </label>

                  <button type="submit" className="lead-btn-submit">
                    <span>Send Enquiry to Encore</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SmartWhatsApp />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<ContactPage />)
