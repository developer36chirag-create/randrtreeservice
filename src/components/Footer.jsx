// Footer.jsx | R&R Tree Service
import './Footer.css';

const SERVICES = [
  'Tree Trimming','Tree Removal','Land Clearing','Stump Grinding',
  'Crane Tree Service','Firewood Delivery','Mulch Delivery','Retention Pond Maintenance',
];
const AREAS = [
  'Alpharetta','Atlanta','Avondale Estates','Buford','Cumming','Decatur',
  'Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville',
  'Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee',
];

export default function Footer() {
  return (
    <footer className="footer" id="contact-info">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* Brand */}
            <div>
              <div className="footer__brand-name">R&amp;R Tree Service</div>
              <div className="footer__brand-tag">Est. 1986 · Buford, Georgia</div>
              <p className="footer__brand-desc">
                North Georgia's trusted tree care specialists for over 39 years.
                Licensed, bonded &amp; insured — serving Atlanta and surrounding
                communities with ISA-certified arborist expertise.
              </p>
              <div className="footer__badges">
                <span className="footer__badge">✓ ISA Certified</span>
                <span className="footer__badge">✓ Licensed &amp; Insured</span>
                <span className="footer__badge">✓ 39 Yrs Experience</span>
              </div>
              <div className="footer__social">
                <a href="https://www.facebook.com/R-R-Tree-Service-136691577377"
                   target="_blank" rel="noopener noreferrer"
                   className="footer__soc-btn" aria-label="Facebook">f</a>
              </div>
            </div>

            {/* Services */}
            <div>
              <span className="footer__col-head">Our Services</span>
              <ul className="footer__links">
                {SERVICES.map(s => (
                  <li key={s}>
                    <a href="#services" className="footer__link"
                       onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <span className="footer__col-head">Service Areas</span>
              <ul className="footer__links">
                {AREAS.map(a => (
                  <li key={a}>
                    <a href="#areas" className="footer__link"
                       onClick={e => { e.preventDefault(); document.querySelector('#areas')?.scrollIntoView({ behavior: 'smooth' }); }}>
                      {a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <span className="footer__col-head">Contact Us</span>
              <div className="footer__contact-list">
                <a href="tel:678-482-9994" className="footer__contact-row">
                  <div className="footer__contact-icon">📞</div>
                  <div>
                    <div className="footer__contact-label">Phone</div>
                    <div className="footer__contact-value">678-482-9994</div>
                  </div>
                </a>
                <a href="tel:678-482-9996" className="footer__contact-row">
                  <div className="footer__contact-icon">📠</div>
                  <div>
                    <div className="footer__contact-label">Fax</div>
                    <div className="footer__contact-value">678-482-9996</div>
                  </div>
                </a>
                <a href="mailto:sally@randrtreeservice.com" className="footer__contact-row">
                  <div className="footer__contact-icon">✉</div>
                  <div>
                    <div className="footer__contact-label">Email</div>
                    <div className="footer__contact-value">sally@randrtreeservice.com</div>
                  </div>
                </a>
                <div className="footer__contact-row" style={{ cursor: 'default' }}>
                  <div className="footer__contact-icon">📍</div>
                  <div>
                    <div className="footer__contact-label">Address</div>
                    <div className="footer__contact-value">1381 Buford Hwy, Buford GA 30518</div>
                  </div>
                </div>
                <div className="footer__contact-row" style={{ cursor: 'default' }}>
                  <div className="footer__contact-icon">⏰</div>
                  <div>
                    <div className="footer__contact-label">Emergency</div>
                    <div className="footer__contact-value">24/7 Available</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 'var(--sp-lg)' }}>
                <a href="#contact" className="btn btn-orange"
                   style={{ width: '100%', justifyContent: 'center' }}
                   onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Get a Free Quote
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              © {new Date().getFullYear()} R&amp;R Tree Service. All rights reserved.
              Serving North Georgia since 1986.
            </p>
            <div className="footer__bottom-links">
              <a href="/privacy-policy" className="footer__bottom-link">Privacy Policy</a>
              <a href="/terms-and-conditions" className="footer__bottom-link">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}