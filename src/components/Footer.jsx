import React from 'react'
import { MapPin, Phone, Mail, MessageSquare, Download } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Encore Cooling Systems" />
          <p>
            Manufacturer of Cleanroom Partitions, Air Handling Units, Cleanroom Doors, 
            Air Showers, Pass Boxes, and Industrial Cooling Systems. Authorized Daikin Channel Partner.
          </p>
          <p style={{ fontSize: '12px', color: '#cbd5e1' }}>
            Plot No. 10, 633/A, Champabaa Estate, Lamdapura Road, Manjusar, Vadodara – 391775, Gujarat.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <div className="footer-col-links">
            <a href="/">Home</a>
            <a href="/about.html">About & Facility</a>
            <a href="/products.html">Product Catalog</a>
            <a href="/calculator.html">Calculators & Tools</a>
            <a href="/contact.html">Contact Us</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Core Solutions</h4>
          <div className="footer-col-links">
            <a href="/products.html">Air Handling Units (AHU)</a>
            <a href="/products.html">Modular Cleanrooms</a>
            <a href="/products.html">Air Showers & Pass Boxes</a>
            <a href="/products.html">Industrial Chillers & VRV</a>
            <a href="/products.html">Modular Operation Theatres</a>
            <a href="/products.html">Laboratory Systems</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Direct Contact</h4>
          <div className="footer-col-links">
            <a href="tel:+919105075050">+91 91050 75050</a>
            <a href="tel:+919714368199">+91 97143 68199</a>
            <a href="mailto:encorecooling@gmail.com">encorecooling@gmail.com</a>
            <a
              href="https://wa.me/919105075050?text=Hello%20Encore%20Cooling%20Systems"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#25d366', fontWeight: 700 }}
            >
              Chat on WhatsApp →
            </a>
            <a
              href="/brochure/encore-company-brochure.pdf"
              download="Encore_Cooling_Systems_Brochure.pdf"
              style={{ color: '#38bdf8', marginTop: '6px' }}
            >
              Download Company Brochure (PDF)
            </a>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Encore Cooling Systems. All rights reserved.</span>
        <span>Vadodara, Gujarat • Cleanroom & HVAC Engineering</span>
      </div>
    </footer>
  )
}
