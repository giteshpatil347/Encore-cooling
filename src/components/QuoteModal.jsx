import React, { useState, useEffect } from 'react'
import { X, CheckCircle2, Send } from 'lucide-react'

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: initialData?.requirement || 'Air Handling Units (AHU)',
    message: initialData?.details || ''
  })

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        requirement: initialData.requirement || prev.requirement,
        message: initialData.details || prev.message
      }))
    }
  }, [initialData])

  if (!isOpen) return null

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website Engineering Enquiry: ${formData.requirement}`)
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
    setTimeout(() => {
      onClose()
      setSubmitted(false)
    }, 2800)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-header-tag">ENCORE COOLING SYSTEMS</div>
        <h3 className="modal-title">Request Quotation & Engineering Proposal</h3>

        {submitted ? (
          <div className="form-success-box">
            <CheckCircle2 size={48} />
            <h4>Thank you for your enquiry!</h4>
            <p>
              Your email application has been prepared with your requirement details addressed to 
              <b> encorecooling@gmail.com</b>. Our team will review your specifications and contact you shortly.
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
                <span>Company / Facility Name</span>
                <input
                  type="text"
                  placeholder="e.g. Pharma Laboratories Ltd."
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                />
              </label>
            </div>

            <div className="lead-row">
              <label>
                <span>Phone / WhatsApp Number *</span>
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
                <option>Air Handling Units (AHU)</option>
                <option>Cleanroom Modular Wall & Ceiling Panels</option>
                <option>Cleanroom Doors & View Panels</option>
                <option>Cleanroom Equipment (Air Shower, Pass Box, LAF)</option>
                <option>Industrial Chillers & Daikin VRV</option>
                <option>Modular Operation Theatre (OT)</option>
                <option>Laboratory Systems & Fume Hoods</option>
                <option>Turnkey HVAC & Cleanroom Project</option>
                <option>HVAC Maintenance & Ducting Service</option>
              </select>
            </label>

            <label>
              <span>Project Details / Sizing Notes</span>
              <textarea
                rows={4}
                placeholder="Please describe room dimensions, cleanroom class, CFM requirement, or equipment specs..."
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
  )
}
