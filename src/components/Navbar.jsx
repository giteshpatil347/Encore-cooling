import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Download,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about.html' },
  { name: 'Products', href: '/products.html' },
  { name: 'Calculators', href: '/calculator.html' },
  { name: 'Contact', href: '/contact.html' }
]

export default function Navbar({ activePage = 'home', onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="wrap top-bar-in">
          <div className="top-bar-left">
            <span className="daikin-badge">
              <Sparkles size={12} />
              Authorized Daikin Channel Partner
            </span>
            <span className="top-location">
              <MapPin size={12} />
              Manjusar GIDC, Vadodara, Gujarat
            </span>
          </div>

          <div className="top-bar-right">
            <a href="tel:+919105075050">
              <Phone size={12} />
              +91 91050 75050
            </a>
            <a href="mailto:encorecooling@gmail.com">
              <Mail size={12} />
              encorecooling@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="wrap header-in">
          <a href="/" className="brand-logo">
            <img src="/images/logo.png" alt="Encore Cooling Systems Logo" />
          </a>

          {/* Clean 5-link Nav */}
          <nav className="nav-links">
            {navItems.map(item => {
              const isActive = activePage === item.name.toLowerCase()
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          {/* Action Buttons */}
          <div className="nav-cta-group">
            <a
              href="/brochure/encore-company-brochure.pdf"
              download="Encore_Cooling_Systems_Brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-brochure"
              title="Download 14MB Official Company Brochure"
            >
              <Download size={14} />
              <span>Brochure</span>
            </a>

            <button
              className="btn-quote"
              onClick={() => onOpenQuote && onOpenQuote()}
            >
              <span>Get Quote</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-drawer-pane" onClick={e => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <img
              src="/images/logo.png"
              alt="Encore Cooling Systems"
              style={{ height: '42px' }}
            />
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={activePage === item.name.toLowerCase() ? 'active' : ''}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: activePage === item.name.toLowerCase() ? 'var(--primary)' : 'var(--ink)'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mobile-drawer-actions">
            <a
              href="/brochure/encore-company-brochure.pdf"
              download="Encore_Cooling_Systems_Brochure.pdf"
              className="btn-secondary"
              style={{ justifyContent: 'center' }}
            >
              <Download size={15} />
              Download Brochure (PDF)
            </a>

            <button
              className="btn-primary"
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenQuote) onOpenQuote()
              }}
            >
              Request Engineering Quote
            </button>

            <a
              href="https://wa.me/919105075050?text=Hi%20Encore%20Cooling%20Systems,%20I%20am%20interested%20in%20your%20HVAC%20and%20Cleanroom%20solutions."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-hero"
              style={{ justifyContent: 'center' }}
            >
              <MessageSquare size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
