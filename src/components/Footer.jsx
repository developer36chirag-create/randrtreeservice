// Footer.jsx | R&R Tree Service
import './Footer.css';

const SERVICES = ['Tree Trimming','Tree Removal','Land Clearing','Stump Grinding','Crane Rental Services','Firewood Delivery','Mulch Delivery','Retention Pond Maintenance'];
const AREAS = ['Alpharetta','Atlanta','Avondale Estates','Buford','Cumming','Decatur','Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville','Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee'];
const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            <div>
              <div className="footer__brand-name">R&amp;R Tree Service</div>
              <div className="footer__brand-tag">Est. 1986 · Buford, Georgia</div>
              <p className="footer__brand-desc">
                North Georgia's trusted tree care specialists for over 40 years.
                Licensed, bonded &amp; insured — serving North Georgia and surrounding
                communities.
              </p>
              <div className="footer__badges">
                <span className="footer__badge">✓ Licensed &amp; Insured</span>
                <span className="footer__badge">✓ 40 Yrs</span>
              </div>
              <div className="footer__social">
                <a href="https://www.facebook.com/R-R-Tree-Service-136691577377"
                   target="_blank" rel="noopener noreferrer"
                   className="footer__soc-btn" aria-label="Facebook">f</a>
              </div>
            </div>

            <div>
              <span className="footer__col-head">Our Services</span>
              <ul className="footer__links">
                {SERVICES.map(s => (
                  <li key={s}>
                    <a href="#services" className="footer__link"
                       onClick={e => { e.preventDefault(); goto('#services'); }}>{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="footer__col-head">Service Areas</span>
              <ul className="footer__links">
                {AREAS.map(a => (
                  <li key={a}>
                    <a href="#areas" className="footer__link"
                       onClick={e => { e.preventDefault(); goto('#areas'); }}>{a}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="footer__col-head">Contact Us</span>
              <div className="footer__contact-list">
                {[
                  { img:'/phone-call.png', label: 'Phone', val: '678-482-9994', href: 'tel:678-482-9994' },
                  { img:'/printer.png', label: 'Fax', val: '678-482-9996', href: 'tel:678-482-9996' },
                  { img:'/mail.png', label: 'Email', val: 'sally@randrtreeservice.com', href: 'mailto:sally@randrtreeservice.com' },
                  { img:'/location-pin.png', label: 'Address', val: '1381 Buford Hwy, Buford GA 30518', href: null },
                  { img:'/time.png', label: 'Emergency', val: '24/7 Available', href: null },
                ].map(c => (
                  <a key={c.label} href={c.href || '#'} className="footer__contact-row"
                     style={!c.href ? { cursor: 'default', pointerEvents: 'none' } : {}}
                     onClick={c.href ? undefined : e => e.preventDefault()}>
                    <div className="footer__contact-icon">
                      <img src={c.img} alt={c.label} />
                    </div>
                    <div>
                      <div className="footer__contact-label">{c.label}</div>
                      <div className="footer__contact-value">{c.val}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 'var(--sp-lg)' }}>
                <a href="#contact" className="btn btn-red"
                   style={{ width: '100%', justifyContent: 'center' }}
                   onClick={e => { e.preventDefault(); goto('#contact'); }}>
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
              © {new Date().getFullYear()} R&amp;R Tree Service. All rights reserved. Serving North Georgia since 1986.
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