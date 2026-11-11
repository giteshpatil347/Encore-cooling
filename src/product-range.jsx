import React, { useMemo, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ArrowRight,
  ChevronRight,
  Download,
  MessageSquare,
  CheckCircle2,
  X,
  ChevronDown,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Fan
} from 'lucide-react'

import {
  productData,
  productCategories,
  productDescriptions
} from './productCatalog.js'
import './styles.css'
import './product-range.css'

function ProductRange() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quoteProduct, setQuoteProduct] = useState(null)

  const categories = useMemo(() => {
    return productCategories
  }, [])

  const filtered = useMemo(() => {
    return productData.filter(item => {
      const matchCat = category === 'All' || item.cat === category
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q) ||
        item.spec.toLowerCase().includes(q) ||
        (item.application && item.application.toLowerCase().includes(q))
      return matchCat && matchQuery
    })
  }, [category, query])

  const categoryCount = cat => {
    if (cat === 'All') return productData.length
    return productData.filter(item => item.cat === cat).length
  }

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setSelectedProduct(null)
        setQuoteProduct(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="catalog-page-container">
      {/* Top Header */}
      <header className="catalog-header">
        <div className="wrap catalog-header-in">
          <a href="/" className="brand-logo">
            <img src="/images/logo.png" alt="Encore Cooling Systems" />
          </a>

          <nav className="catalog-nav-links">
            <a href="/">Home</a>
            <a href="/#about">About Us</a>
            <a href="/#solutions">Solutions</a>
            <a href="/#estimator">Cleanroom Estimator</a>
            <a href="/#contact">Contact</a>
          </nav>

          <div className="catalog-nav-actions">
            <a
              href="/brochure/encore-company-brochure.pdf"
              download="Encore_Cooling_Systems_Brochure.pdf"
              className="btn-brochure"
            >
              <Download size={14} />
              <span>Brochure</span>
            </a>

            <a
              href="https://wa.me/919105075050?text=Hello%20Encore%20Cooling%20Systems,%20I%20am%20browsing%20your%20product%20catalog."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-hero"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              <MessageSquare size={15} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Catalog Layout */}
      <div className="wrap catalog-body-layout">
        {/* Left Filter Sidebar */}
        <aside className="catalog-sidebar-pane">
          <div className="catalog-search-widget">
            <Search size={18} color="#64748b" />
            <input
              type="text"
              placeholder="Search equipment & specs..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search catalog"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Clear Search">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="catalog-category-widget">
            <h4>Equipment Categories</h4>
            <div className="catalog-cat-buttons">
              {categories.map(cat => {
                const count = categoryCount(cat)
                const isActive = category === cat
                return (
                  <button
                    key={cat}
                    className={`catalog-cat-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setCategory(cat)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <span>{cat}</span>
                    <span className="cat-count-badge">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="catalog-sidebar-box">
            <div className="box-icon">
              <ShieldCheck size={24} />
            </div>
            <h5>Turnkey HVAC Contracting</h5>
            <p>
              Custom manufacturing, pressure cascade balancing, and on-site testing 
              meeting USFDA & WHO cGMP guidelines.
            </p>
            <a href="/#contact" className="box-link">
              <span>Request Site Survey</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </aside>

        {/* Right Main Grid */}
        <main className="catalog-products-main">
          <div className="catalog-results-header">
            <div>
              <span className="section-label">ENCORE COOLING SYSTEMS</span>
              <h2>{category === 'All' ? 'Complete Engineering Product Range' : category}</h2>
              <p>
                {productDescriptions[category] ||
                  'Manufactured in Vadodara, Gujarat. Built to international cleanroom and HVAC engineering specifications.'}
              </p>
            </div>

            <div className="catalog-counter-tag">
              Showing <b>{filtered.length}</b> Products
            </div>
          </div>

          <div className="catalog-cards-grid">
            {filtered.length > 0 ? (
              filtered.map(prod => {
                const Icon = prod.icon || Fan
                const waUrl = `https://wa.me/919105075050?text=${encodeURIComponent(
                  `Hello Encore Cooling Systems,\n\nI am enquiring about ${prod.name} (${prod.spec}). Please provide technical specifications and quotation.`
                )}`

                return (
                  <article className="catalog-product-item" key={prod.id}>
                    <div className="catalog-item-thumb">
                      {prod.img ? (
                        <img src={prod.img} alt={prod.name} loading="lazy" />
                      ) : (
                        <div className="product-placeholder-icon">
                          <Icon size={44} strokeWidth={1.4} />
                        </div>
                      )}
                      {prod.popular && <span className="product-popular-badge">POPULAR</span>}
                    </div>

                    <div className="catalog-item-body">
                      <span className="catalog-item-cat">{prod.cat}</span>
                      <h3>{prod.name}</h3>
                      <div className="catalog-item-spec">{prod.spec}</div>

                      {prod.application && (
                        <p className="catalog-item-app">{prod.application}</p>
                      )}

                      <div className="catalog-item-actions">
                        <button
                          className="btn-view-specs"
                          onClick={() => setSelectedProduct(prod)}
                        >
                          Tech Specs
                        </button>

                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-item-wa"
                          title="Instant WhatsApp Enquiry"
                        >
                          <MessageSquare size={16} />
                        </a>

                        <button
                          className="btn-item-quote"
                          onClick={() => setQuoteProduct(prod)}
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })
            ) : (
              <div className="catalog-empty-view">
                <Search size={36} color="#94a3b8" />
                <h3>No equipment matching "{query}"</h3>
                <p>Try searching with another keyword or reset the category filter.</p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setCategory('All')
                    setQuery('')
                  }}
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: '70px' }}>
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Encore Cooling Systems" />
            <p>
              Manufacturer of Cleanroom Partitions, Air Handling Units, Cleanroom Doors, 
              Air Showers, Pass Boxes, and Industrial Cooling Systems. Authorized Daikin Channel Partner.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-col-links">
              <a href="/">Home</a>
              <a href="/#about">About Company</a>
              <a href="/#solutions">Solutions</a>
              <a href="/#estimator">Cleanroom Estimator</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Head Office & Factory</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
              Plot No. 10, 633/A, Champabaa Estate, Lamdapura Road, Moje Gam-Manjusar, 
              Manjusar, Vadodara – 391775, Gujarat, India.
            </p>
          </div>

          <div className="footer-col">
            <h4>Direct Lines</h4>
            <div className="footer-col-links">
              <a href="tel:+919105075050">+91 91050 75050</a>
              <a href="tel:+919714368199">+91 97143 68199</a>
              <a href="mailto:encorecooling@gmail.com">encorecooling@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Encore Cooling Systems. All rights reserved.</span>
          <span>Vadodara, Gujarat • Cleanroom & HVAC Engineering</span>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>

            <div className="modal-header-tag">{selectedProduct.cat}</div>
            <h3 className="modal-title">{selectedProduct.name}</h3>

            <div className="product-modal-layout">
              <div className="product-modal-image-box">
                {selectedProduct.img ? (
                  <img src={selectedProduct.img} alt={selectedProduct.name} />
                ) : (
                  <selectedProduct.icon size={64} strokeWidth={1.3} color="#0a3d78" />
                )}
              </div>

              <div className="product-modal-info">
                <div className="product-modal-spec">
                  Specification: {selectedProduct.spec}
                </div>

                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                  {productDescriptions[selectedProduct.cat] || selectedProduct.application}
                </p>

                {selectedProduct.features && (
                  <>
                    <h5 style={{ fontSize: '13px', fontWeight: 800, marginTop: '16px', color: '#0f172a' }}>
                      KEY TECHNICAL FEATURES:
                    </h5>
                    <ul className="product-modal-features">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {selectedProduct.application && (
                  <div className="product-modal-app">
                    <b>Typical Applications:</b> {selectedProduct.application}
                  </div>
                )}

                <div className="product-modal-actions">
                  <a
                    href={`https://wa.me/919105075050?text=${encodeURIComponent(
                      `Hello Encore Cooling Systems,\n\nI am interested in your ${selectedProduct.name} (${selectedProduct.spec}). Please share pricing and specifications.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="calc-wa-btn"
                    style={{ flex: 1 }}
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Quote</span>
                  </a>

                  <button
                    className="btn-primary"
                    style={{ flex: 1 }}
                    onClick={() => {
                      const prod = selectedProduct
                      setSelectedProduct(null)
                      setQuoteProduct(prod)
                    }}
                  >
                    <span>Request Quotation</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Request Modal */}
      {quoteProduct && (
        <div className="modal-backdrop" onClick={() => setQuoteProduct(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setQuoteProduct(null)}>
              <X size={20} />
            </button>
            <div className="modal-header-tag">ENQUIRY</div>
            <h3 className="modal-title">Enquire About {quoteProduct.name}</h3>
            <CatalogQuoteForm product={quoteProduct} onClose={() => setQuoteProduct(null)} />
          </div>
        </div>
      )}
    </div>
  )
}

function CatalogQuoteForm({ product, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    qty: '1 unit',
    notes: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Product Quotation Request: ${product.name}`)
    const body = encodeURIComponent(
      `Product: ${product.name}\n` +
      `Category: ${product.cat}\n` +
      `Specification: ${product.spec}\n` +
      `Estimated Quantity: ${form.qty}\n\n` +
      `Contact Details:\n` +
      `Name: ${form.name}\n` +
      `Company: ${form.company}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n\n` +
      `Additional Notes / Requirements:\n${form.notes}`
    )

    window.location.href = `mailto:encorecooling@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => {
      if (onClose) onClose()
    }, 2500)
  }

  if (submitted) {
    return (
      <div className="form-success-box">
        <CheckCircle2 size={48} />
        <h4>Enquiry draft prepared!</h4>
        <p>
          Your email application has been opened with your quotation request for <b>{product.name}</b>.
        </p>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="lead-row">
        <label>
          <span>Your Name *</span>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label>
          <span>Company / Facility</span>
          <input
            type="text"
            placeholder="Company name"
            value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })}
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
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </label>
        <label>
          <span>Email Address *</span>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </label>
      </div>

      <div className="lead-row">
        <label>
          <span>Estimated Quantity / Scope</span>
          <input
            type="text"
            placeholder="e.g. 2 units, 500 sq meters, etc."
            value={form.qty}
            onChange={e => setForm({ ...form, qty: e.target.value })}
          />
        </label>
        <label>
          <span>Target Delivery / Site Location</span>
          <input
            type="text"
            placeholder="e.g. Vadodara, Ahmedabad, Vapi..."
          />
        </label>
      </div>

      <label>
        <span>Custom Specification / Application Notes</span>
        <textarea
          rows={3}
          placeholder="Please describe CFM requirements, dimensions, cleanroom class, or specific questions..."
          value={form.notes}
          onChange={e => setForm({ ...form, notes: e.target.value })}
        ></textarea>
      </label>

      <button type="submit" className="lead-btn-submit">
        <span>Submit Quotation Request</span>
        <ArrowRight size={16} />
      </button>
    </form>
  )
}

createRoot(document.getElementById('root')).render(<ProductRange />)
