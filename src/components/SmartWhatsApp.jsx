import React, { useState } from 'react'
import { MessageSquare, X, ChevronRight } from 'lucide-react'

export default function SmartWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="floating-actions-bar">
      {open && (
        <div className="smart-wa-menu">
          <div className="smart-wa-header">
            <div>
              <h5>Encore Sales & Engineering</h5>
              <small>Typically replies in under 15 minutes</small>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: '#fff' }}>
              <X size={18} />
            </button>
          </div>

          <div className="smart-wa-options">
            <a
              href={`https://wa.me/919105075050?text=${encodeURIComponent(
                'Hello Encore Cooling Systems, I would like to request an official quotation for an upcoming Cleanroom / HVAC project.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="smart-wa-option-btn"
            >
              <span>Request Project Quotation</span>
              <ChevronRight size={14} />
            </a>

            <a
              href={`https://wa.me/919105075050?text=${encodeURIComponent(
                'Hello Encore Cooling Systems, I need assistance with AHU / Cleanroom sizing for my facility.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="smart-wa-option-btn"
            >
              <span>Sizing & Engineering Help</span>
              <ChevronRight size={14} />
            </a>

            <a
              href={`https://wa.me/919105075050?text=${encodeURIComponent(
                'Hello Encore Cooling Systems, I am interested in Daikin VRV / Industrial Chiller cooling systems.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="smart-wa-option-btn"
            >
              <span>Daikin VRV & Chillers</span>
              <ChevronRight size={14} />
            </a>

            <a
              href={`https://wa.me/919105075050?text=${encodeURIComponent(
                'Hello Mr. Yashanand Patil, I would like to schedule a visit to your Manjusar, Vadodara manufacturing plant.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="smart-wa-option-btn"
            >
              <span>Schedule Factory Visit</span>
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      )}

      <button
        className="wa-float-btn"
        onClick={() => setOpen(!open)}
        aria-label="Encore WhatsApp Assistant"
      >
        <div className="wa-pulse-ring"></div>
        <MessageSquare size={28} />
      </button>
    </div>
  )
}
