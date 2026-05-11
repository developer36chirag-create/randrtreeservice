// Header.jsx | R&R Tree Service
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const NAV = [
  { label: 'Home', href: '/' },

  {
    label: 'Services',
    href: '/services',
    sub: [
      { label: 'Tree Trimming', href: '/services' },
      { label: 'Tree Removal', href: '/services' },
      { label: 'Land Clearing', href: '/services' },
      { label: 'Stump Grinding', href: '/services' },
      { label: 'Crane Tree Removal', href: '/services' },
      { label: 'Firewood Delivery', href: '/services' },
      { label: 'Mulch Delivery', href: '/services' },
      { label: 'Retention Pond Maintenance', href: '/services' },
    ],
  },

  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [topbarHidden, setTopbarHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  function goto(href) {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setTopbarHidden(y > 60);
    };

    window.addEventListener('scroll', fn, { passive: true });

    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const close = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  const nav = (href) => {
    close();
    goto(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`header__topbar ${
          topbarHidden ? 'header__topbar--hidden' : ''
        }`}
      >
        <div className="container">
          <div className="header__topbar-inner">

            <div className="header__topbar-left">
              <a href="tel:678-482-9994" className="header__topbar-item">
                <span className="header__topbar-icon">
                  <img src="/phone-call.png" alt="" />
                </span>
                678-482-9994
              </a>

              <a href="tel:678-482-9996" className="header__topbar-item">
                <span className="header__topbar-icon">
                  <img src="/printer.png" alt="" />
                </span>
                Fax: 678-482-9996
              </a>

              <a
                href="mailto:sally@randrtreeservice.com"
                className="header__topbar-item"
              >
                <span className="header__topbar-icon">
                  <img src="/mail.png" alt="" />
                </span>
                sally@randrtreeservice.com
              </a>
            </div>

            <div className="header__topbar-right">
              <a
                href="https://www.facebook.com/R-R-Tree-Service-136691577377"
                target="_blank"
                rel="noopener noreferrer"
                className="header__social-link"
              >
                f
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__main">
          <div className="container">
            <div className="header__inner">

              {/* Logo */}
              <Link to="/" className="header__logo">
                <img src="/randr-logo.png" alt="R&R Tree Service" />
              </Link>

              {/* Desktop Nav */}
              <nav className="header__nav">

                {NAV.map((item) => (
                  <div key={item.label} className="header__nav-item">

                    <a
                      href={item.href}
                      className="header__nav-link"
                      onClick={(e) => {
                        e.preventDefault();

                        if (item.href.startsWith('/')) {
                          navigate(item.href);
                          window.scrollTo(0, 0);
                        } else {
                          nav(item.href);
                        }
                      }}
                    >
                      {item.label}
                      {item.sub ? ' ▾' : ''}
                    </a>

                    {item.sub && (
                      <div className="header__dropdown">

                        {item.sub.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            className="header__dropdown-link"
                            onClick={(e) => {
                              e.preventDefault();

                              if (s.href.startsWith('/')) {
                                navigate(s.href);
                                window.scrollTo(0, 0);
                              } else {
                                nav(s.href);
                              }
                            }}
                          >
                            {s.label}
                          </a>
                        ))}

                      </div>
                    )}

                  </div>
                ))}

              </nav>

              {/* Actions */}
              <div className="header__actions">

                <a href="tel:678-482-9994" className="header__phone">
                  <span className="header__phone-icon">
                    <img src="/phone-call.png" alt="" />
                  </span>

                  <span>678-482-9994</span>
                </a>

                <a
                  href="#contact"
                  className="btn btn-red"
                  style={{ padding: '10px 20px', fontSize: '0.76rem' }}
                  onClick={(e) => {
                    e.preventDefault();
                    nav('#contact');
                  }}
                >
                  Free Quote
                </a>

              </div>

              {/* Hamburger */}
              <button
                className={`header__hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span />
                <span />
                <span />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            className="header__mobile"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'tween',
              duration: 0.28,
            }}
          >

            <nav className="header__mobile-nav">

              {NAV.map((item) => (
                <div key={item.label}>

                  <a
                    href={item.href}
                    className="header__mobile-link"
                    onClick={(e) => {
                      e.preventDefault();

                      if (item.sub) {
                        setOpenSub(
                          openSub === item.label ? null : item.label
                        );
                      } else {
                        nav(item.href);
                      }
                    }}
                  >
                    {item.label}

                    {item.sub && (
                      <span>
                        {openSub === item.label ? '−' : '+'}
                      </span>
                    )}
                  </a>

                  <AnimatePresence>

                    {item.sub && openSub === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >

                        {item.sub.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            className="header__mobile-sub-link"
                            onClick={(e) => {
                              e.preventDefault();

                              if (s.href.startsWith('/')) {
                                navigate(s.href);
                                close();
                                window.scrollTo(0, 0);
                              } else {
                                nav(s.href);
                              }
                            }}
                          >
                            → {s.label}
                          </a>
                        ))}

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              ))}

            </nav>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}