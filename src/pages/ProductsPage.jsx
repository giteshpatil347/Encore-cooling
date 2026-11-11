import React, { useState, useMemo, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Search,
  X,
  MessageSquare,
  ChevronRight,
  ArrowRight,
  Download,
  CheckCircle2,
  Fan,
  Phone,
  ShieldCheck,
  Layers,
  Sparkles
} from 'lucide-react'

import '../styles.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SmartWhatsApp from '../components/SmartWhatsApp.jsx'
import QuoteModal from '../components/QuoteModal.jsx'
import {
  productData,
  productCategories,
  productDescriptions
} from '../productCatalog.js'

function ProductsPage() {
  const [productCategory, setProductCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [prefilledData, setPrefilledData] = useState(null)

  const filteredProducts = useMemo(() => {
    return productData.filter(item => {
      const matchesCat = productCategory === 'All' || item.cat === productCategory
      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.cat.toLowerCase().includes(query) ||
        item.spec.toLowerCase().includes(query) ||
        (item.application && item.application.toLowerCase().includes(query)) ||
        (item.description && item.description.toLowerCase().includes(query))
      return matchesCat && matchesSearch
    })
  }, [productCategory, searchQuery])

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setSelectedProduct(null)
        setQuoteModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleOpenQuote = (data = null) => {
    setPrefilledData(data)
    setQuoteModalOpen(true)
  }

  const categoryCount = cat => {
    if (cat === 'All') return productData.length
    return productData.filter(p => p.cat === cat).length
  }

  return (
    <div className="site-wrapper">
      <Navbar activePage="products" onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* PAGE HEADER */}
        <div style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)', padding: '50px 0 35px', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <span className="section-label">PRODUCTS & SERVICES CATALOGUE</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', fontWeight: 800, color: 'var(--ink)', margin: '6px 0 10px' }}>
              Cleanroom & HVAC <span>Product Catalogue.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '820px', lineHeight: 1.6 }}>
              Manufactured in Vadodara (Gujarat). Explore complete technical specifications, 
              images, and engineering details for Air Handling Units, Cleanroom Panels, Doors, 
              Equipment, and Industrial Chillers.
            </p>
          </div>
        </div>

        {/* 2-COLUMN CATALOG LAYOUT: LEFT SIDEBAR + RIGHT DETAILED CARDS */}
        <section className="section" style={{ paddingTop: '40px' }}>
          <div className="wrap products-layout-2col">
            {/* LEFT SIDEBAR: PRODUCT NAVIGATION */}
            <aside className="products-left-sidebar">
              {/* Search Widget */}
              <div className="sidebar-search-box">
                <Search size={18} color="#64748b" />
                <input
                  type="text"
                  placeholder="Search products or specs..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  aria-label="Search product catalogue"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} aria-label="Clear Search">
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Category Navigation Panel */}
              <div className="sidebar-nav-panel">
                <h4>Product Categories</h4>
                <div className="sidebar-cat-list">
                  {productCategories.map(cat => {
                    const isActive = productCategory === cat
                    const count = categoryCount(cat)
                    return (
                      <button
                        key={cat}
                        className={`sidebar-cat-item-btn ${isActive ? 'active' : ''}`}
                        onClick={() => {
                          setProductCategory(cat)
                          window.scrollTo({ top: 180, behavior: 'smooth' })
                        }}
                      >
                        <span>{cat}</span>
                        <span className="sidebar-count-badge">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Technical Support Box */}
              <div className="sidebar-support-widget">
                <h5>Need Engineering Advice?</h5>
                <p>
                  Speak directly with our technical engineers in Vadodara to select 
                  optimum AHU CFM, cleanroom panel thickness, or chiller capacity.
                </p>
                <div className="sidebar-support-phone">
                  <Phone size={15} />
                  <a href="tel:+919105075050" style={{ color: '#38bdf8' }}>+91 91050 75050</a>
                </div>
                <a
                  href="https://wa.me/919105075050?text=Hello%20Encore%20Cooling%20Systems,%20I%20need%20product%20guidance."
                  target="_blank"
                  rel="noreferrer"
                  className="sidebar-support-wa"
                >
                  <MessageSquare size={14} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </aside>

            {/* RIGHT MAIN CONTENT: DETAILED PRODUCT CARDS */}
            <div className="products-right-main">
              {/* Category Active Header Banner */}
              <div className="products-cat-active-banner">
                <h2>{productCategory === 'All' ? 'All Products & Services' : productCategory}</h2>
                <p>
                  {productDescriptions[productCategory] ||
                    'Manufactured in Vadodara, Gujarat. Designed to meet USFDA, WHO cGMP, and ISO 14644-1 cleanroom standards.'}
                </p>
                <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--primary)', fontWeight: 700 }}>
                  Showing {filteredProducts.length} of {productData.length} items
                </div>
              </div>

              {/* Detailed Cards List */}
              <div className="detailed-products-list">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(prod => {
                    const Icon = prod.icon || Fan
                    const waUrl = `https://wa.me/919105075050?text=${encodeURIComponent(
                      `Hello Encore Cooling Systems,\n\nI am interested in your ${prod.name} (${prod.spec}). Please share pricing and technical datasheet.`
                    )}`

                    return (
                      <article className="product-detail-card" key={prod.id}>
                        {/* Product Image */}
                        <div className="product-detail-media">
                          {prod.img ? (
                            <img src={prod.img} alt={prod.name} loading="lazy" />
                          ) : (
                            <div className="product-placeholder-icon" style={{ width: '120px', height: '120px' }}>
                              <Icon size={56} strokeWidth={1.3} />
                            </div>
                          )}
                          {prod.popular && <span className="product-popular-badge">POPULAR</span>}
                        </div>

                        {/* Product Details & Specs Table */}
                        <div className="product-detail-content">
                          <div className="product-detail-head">
                            <span className="product-cat-kicker">{prod.cat}</span>
                            <h3>{prod.name}</h3>
                            <div className="product-spec-badge">{prod.spec}</div>
                          </div>

                          <p className="product-detail-desc">{prod.description}</p>

                          {/* Technical Specification Table */}
                          {prod.tableSpecs && (
                            <table className="product-spec-table">
                              <tbody>
                                {Object.entries(prod.tableSpecs).map(([key, val]) => (
                                  <tr key={key}>
                                    <th>{key}</th>
                                    <td>{val}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}

                          {/* Key Features Checklist */}
                          {prod.features && (
                            <ul className="product-detail-features-list">
                              {prod.features.slice(0, 3).map((feat, idx) => (
                                <li key={idx}>
                                  <CheckCircle2 size={16} />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* CTAs */}
                          <div className="product-detail-actions">
                            <button
                              className="btn-primary"
                              onClick={() =>
                                handleOpenQuote({
                                  requirement: prod.cat,
                                  details: `Product: ${prod.name}\nSpecification: ${prod.spec}`
                                })
                              }
                            >
                              <span>Get Best Quote</span>
                              <ArrowRight size={15} />
                            </button>

                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-whatsapp-hero"
                              style={{ padding: '12px 20px', fontSize: '13px' }}
                            >
                              <MessageSquare size={16} />
                              <span>Enquire on WhatsApp</span>
                            </a>

                            <button
                              className="btn-secondary"
                              onClick={() => setSelectedProduct(prod)}
                              style={{ padding: '12px 18px', fontSize: '13px' }}
                            >
                              <span>Full Specs Modal</span>
                              <ChevronRight size={14} />
                            </button>
                          </div>
                        </div>
                      </article>
                    )
                  })
                ) : (
                  <div className="catalog-empty-view">
                    <Search size={36} color="#94a3b8" />
                    <h3>No products match "{searchQuery}"</h3>
                    <p>Try searching with another keyword or select "All" categories on the left.</p>
                    <button
                      className="btn-secondary"
                      onClick={() => {
                        setProductCategory('All')
                        setSearchQuery('')
                      }}
                    >
                      View All Products
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SmartWhatsApp />

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
                  {selectedProduct.description || productDescriptions[selectedProduct.cat]}
                </p>

                {selectedProduct.tableSpecs && (
                  <table className="product-spec-table" style={{ margin: '14px 0' }}>
                    <tbody>
                      {Object.entries(selectedProduct.tableSpecs).map(([key, val]) => (
                        <tr key={key}>
                          <th>{key}</th>
                          <td>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

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
                      `Hello Encore Cooling Systems,\n\nI am interested in your ${selectedProduct.name} (${selectedProduct.spec}). Please provide price and technical datasheet.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="calc-wa-btn"
                    style={{ flex: 1 }}
                  >
                    <MessageSquare size={16} />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <button
                    className="btn-primary"
                    style={{ flex: 1 }}
                    onClick={() => {
                      const prod = selectedProduct
                      setSelectedProduct(null)
                      handleOpenQuote({
                        requirement: prod.cat,
                        details: `Product: ${prod.name}\nSpecification: ${prod.spec}`
                      })
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

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={prefilledData}
      />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<ProductsPage />)
