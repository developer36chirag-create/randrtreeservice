// Header.jsx | R&R Tree Service
// Olive green navbar + orange CTA matching live site color scheme
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const NAV = [
  { label: 'Home', href: '#home' },
  {
    label: 'Services', href: '#services',
    sub: [
      { label: 'Tree Trimming', href: '#services' },
      { label: 'Tree Removal', href: '#services' },
      { label: 'Land Clearing', href: '#services' },
      { label: 'Stump Grinding', href: '#services' },
      { label: 'Crane Tree Service', href: '#services' },
      { label: 'Firewood Delivery', href: '#services' },
      { label: 'Mulch Delivery', href: '#services' },
      { label: 'Retention Pond Maintenance', href: '#services' },
    ],
  },
  {
    label: 'Areas We Serve', href: '#areas',
    sub: [
      { label: 'Alpharetta', href: '#areas' }, { label: 'Atlanta', href: '#areas' },
      { label: 'Buford', href: '#areas' }, { label: 'Cumming', href: '#areas' },
      { label: 'Duluth', href: '#areas' }, { label: 'Gainesville', href: '#areas' },
      { label: 'Lawrenceville', href: '#areas' }, { label: 'Roswell', href: '#areas' },
      { label: 'Suwanee', href: '#areas' },
    ],
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const close = () => { setMenuOpen(false); setOpenSub(null); };
  const nav = (href) => { close(); scrollTo(href); };

  return (
    <>
      {/* Top utility bar */}
      <div className="header__topbar" style={{ position: 'relative', zIndex: 1001 }}>
        <div className="container">
          <div className="header__topbar-inner">
            <div className="header__topbar-left">
              <a href="tel:678-482-9994" className="header__topbar-item">
                <span className="header__topbar-icon">📞</span>
                678-482-9994
              </a>
              <a href="tel:678-482-9996" className="header__topbar-item">
                <span className="header__topbar-icon">📠</span>
                Fax: 678-482-9996
              </a>
              <a href="mailto:sally@randrtreeservice.com" className="header__topbar-item">
                <span className="header__topbar-icon">✉</span>
                sally@randrtreeservice.com
              </a>
            </div>
            <div className="header__topbar-right">
              <a href="https://www.facebook.com/R-R-Tree-Service-136691577377"
                 target="_blank" rel="noopener noreferrer"
                 className="header__social-link" aria-label="Facebook">f</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__main">
          <div className="container">
            <div className="header__inner">

              {/* Logo */}
              <a href="#home" className="header__logo"
                 onClick={e => { e.preventDefault(); nav('#home'); }}>
                <div className="header__logo-text-wrap">
                  <span className="header__logo-name">R&amp;R Tree Service</span>
                  <span className="header__logo-tag">Buford, GA · Est. 1986</span>
                </div>
              </a>

              {/* Desktop nav */}
              <nav className="header__nav" aria-label="Main">
                {NAV.map(item => (
                  <div key={item.label} className="header__nav-item">
                    <a href={item.href} className="header__nav-link"
                       onClick={e => { e.preventDefault(); nav(item.href); }}>
                      {item.label}{item.sub ? ' ▾' : ''}
                    </a>
                    {item.sub && (
                      <div className="header__dropdown" role="menu">
                        {item.sub.map(s => (
                          <a key={s.label} href={s.href} className="header__dropdown-link"
                             role="menuitem"
                             onClick={e => { e.preventDefault(); nav(s.href); }}>
                            {s.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA */}
              <div className="header__cta-wrap">
                <a href="tel:678-482-9994" className="header__phone-link">
                  <span className="header__phone-icon">📞</span>
                  <span>678-482-9994</span>
                </a>
                <a href="#contact" className="btn btn-orange"
                   style={{ padding: '10px 22px', fontSize: '0.78rem' }}
                   onClick={e => { e.preventDefault(); nav('#contact'); }}>
                  Free Quote
                </a>
              </div>

              {/* Hamburger */}
              <button className={`header__hamburger ${menuOpen ? 'open' : ''}`}
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
                <span /><span /><span />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="header__mobile"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25,0.46,0.45,0.94] }}
            role="dialog" aria-modal="true">

            <nav className="header__mobile-nav">
              {NAV.map(item => (
                <div key={item.label}>
                  <a href={item.href} className="header__mobile-link"
                     onClick={e => {
                       e.preventDefault();
                       if (item.sub) setOpenSub(openSub === item.label ? null : item.label);
                       else nav(item.href);
                     }}>
                    {item.label}
                    {item.sub && <span style={{ fontSize: '0.8rem', color: 'var(--orange-primary)' }}>
                      {openSub === item.label ? '−' : '+'}
                    </span>}
                  </a>
                  <AnimatePresence>
                    {item.sub && openSub === item.label && (
                      <motion.div initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}>
                        {item.sub.map(s => (
                          <a key={s.label} href={s.href} className="header__mobile-sub-link"
                             onClick={e => { e.preventDefault(); nav(s.href); }}>
                            → {s.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="header__mobile-actions">
              <a href="tel:678-482-9994" className="btn btn-green" onClick={close}>
                📞 678-482-9994
              </a>
              <a href="#contact" className="btn btn-orange"
                 onClick={e => { e.preventDefault(); nav('#contact'); }}>
                Get a Free Quote
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}