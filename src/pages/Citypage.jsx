// CityPage.jsx | R&R Tree Service
// Reusable city-level service page component
// Used by: Alpharetta, Atlanta, Buford, Suwanee, and all 18 area pages
// Design: #D92227 red + #000000 black

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Citypage.css';

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

function InView({ children, className = '', id = '' }) {
  const ref = useRef(null);
  const vis = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section id={id} ref={ref} className={className}
      variants={stagger} initial="hidden" animate={vis ? 'visible' : 'hidden'}>
      {children}
    </motion.section>
  );
}

/* ── Contact Form ── */
function CityContactForm({ city }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const ch = k => e => setForm({ ...form, [k]: e.target.value });
  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      style={{ textAlign: 'center', padding: 'var(--sp-3xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-md)' }}>
      <div style={{ fontSize: '3rem' }}>✅</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--white)' }}>
        Message Sent!
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
        We'll be in touch within 24 hours. Need us faster?{' '}
        <a href="tel:678-482-9994" style={{ color: 'var(--red-light)' }}>678-482-9994</a>.
      </p>
    </motion.div>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} noValidate>
      <h3 className="form-title">Contact Us</h3>
      <p className="form-sub">We can't wait to make your property dreams a reality!</p>
      <div className="form-group">
        <label className="form-label" htmlFor="cy-name">Name *</label>
        <input id="cy-name" type="text" className="form-input" placeholder="Your name" required value={form.name} onChange={ch('name')} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="cy-email">Email *</label>
          <input id="cy-email" type="email" className="form-input" placeholder="you@example.com" required value={form.email} onChange={ch('email')} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cy-phone">Phone</label>
          <input id="cy-phone" type="tel" className="form-input" placeholder="(678) 000-0000" value={form.phone} onChange={ch('phone')} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="cy-msg">Tell us about your tree project *</label>
        <textarea id="cy-msg" className="form-textarea"
          placeholder={`Describe your tree project in ${city}, location on property, urgency…`}
          required value={form.message} onChange={ch('message')} />
      </div>
      <motion.button type="submit" className="btn btn-red form-submit"
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        Send Message →
      </motion.button>
      <p className="form-note">No spam, ever. We'll respond within 24 hours.</p>
    </form>
  );
}

/* ════════════════════════════════════════
   MAIN CITY PAGE COMPONENT
   Props:
     data: CityPageData object (see ALPHARETTA_DATA below for shape)
   ════════════════════════════════════════ */
export default function CityPage({ data }) {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  const {
    city, county, state = 'GA', heroImg, introImg, whyImg, processImg,
    heroTitle, heroSubtitle, introText1, introText2,
    services, localPoints, neighborhoods, whyPoints, processSteps,
    reviews, nearbyAreas,
  } = data;

  return (
    <main>

      {/* ── HERO ── */}
      <section className="city-hero" aria-label={`Tree Service in ${city} hero`}>
        <div className="city-hero__bg" aria-hidden="true">
          <img src={heroImg} alt={`Tree service in ${city}, ${state}`} loading="eager" fetchpriority="high" />
          <div className="city-hero__overlay" />
        </div> 
        {/* <div className="city-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="city-hero__grid">
            {/* Left */}
            <div>
              <motion.div className="city-hero__breadcrumb"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <a href="/">Home</a>
                <span className="city-hero__breadcrumb-sep">›</span>
                <a href="/areas">Areas We Serve</a>
                <span className="city-hero__breadcrumb-sep">›</span>
                <span className="city-hero__breadcrumb-cur">{city}</span>
              </motion.div>

              <motion.div className="city-hero__eyebrow"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <span className="city-hero__eyebrow-line" />
                {county} · {state} · Est. 1986
              </motion.div>

              <motion.h1 className="city-hero__title"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35 }}>
                {heroTitle || `Tree Service in`}
                <span>{city}, {state}</span>
              </motion.h1>

              <motion.p className="city-hero__subtitle"
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}>
                {heroSubtitle}
              </motion.p>

              <motion.div className="city-hero__ctas"
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}>
                <motion.a href="#city-contact" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#city-contact'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote →
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
              </motion.div>

              <motion.div className="city-hero__trust"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                {['Licensed & Insured', '40 Yrs Exp.', 'Free Estimates'].map(t => (
                  <div key={t} className="city-hero__trust-item">
                    <span className="city-hero__trust-dot">✓</span>{t}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section>
        <div className="stats-bar">
          <div className="container">
            <motion.div className="stats-bar__grid stats-bar__grid-3"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              {[['40','Years Experience'],['100%','Owner Operated'],['24/7','Emergency Service']].map(([n, l]) => (
                <motion.div key={l} className="stats-bar__item" variants={fadeUp}>
                  <span className="stats-bar__num">{n}</span>
                  <span className="stats-bar__lbl">{l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <InView className="city-intro" id="city-intro">
        <div className="container">
          <div className="city-intro__grid">
            <div className="city-intro__text">
              <motion.span className="eyebrow" variants={fadeUp}>
                Serving {city}, {state}
              </motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Why Choose R&amp;R Tree Service in {city}?
              </motion.h2>
              <span className="red-bar" />

              <motion.p className="city-intro__lead" variants={fadeUp}>{introText1}</motion.p>
              {introText2 && <motion.p className="city-intro__lead" variants={fadeUp}>{introText2}</motion.p>}

              <motion.div className="city-intro__locals" variants={stagger}>
                {localPoints.map(p => (
                  <motion.div key={p} className="city-intro__local-item" variants={fadeUp}>
                    <span className="city-intro__local-check">✓</span>
                    {p}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="city-intro__ctas" variants={fadeUp}>
                <motion.a href="#city-contact" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#city-contact'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-black"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                   Call Today
                </motion.a>
              </motion.div>
            </div>

            <motion.div className="city-intro__img-wrap" variants={fadeUp} custom={0.2}>
              <img src={introImg} alt={`Arborist providing tree service in ${city}`} loading="lazy" />
              <div className="city-intro__img-overlay" />
              <div className="city-intro__img-badge">Serving {city} Since 1986</div>
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── SERVICES ── */}
      <InView className="city-services" id="city-services">
        <div className="container">
          <motion.div className="city-services__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>
              What We Offer in {city}
            </motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Our Tree Services in {city}
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p className="city-services__sub" variants={fadeUp}>
              R&amp;R Tree Service offers licensed, bonded, and insured tree removal, trimming,
              stump grinding, mulching, and more throughout {city}, {state}.
            </motion.p>
          </motion.div>

          <motion.div className="city-svc-grid" variants={stagger}>
            {services.map((svc, i) => (
              <motion.article
                key={svc.title}
                className={`city-svc-card ${svc.wide ? 'city-svc-card--wide' : ''}`}
                variants={fadeUp}>
                <div className="city-svc-card__img-wrap">
                  <img className="city-svc-card__img" src={svc.img} alt={svc.title} loading="lazy" />
                  <div className="city-svc-card__img-overlay" />
                  {svc.badge && <span className="city-svc-card__badge">{svc.badge}</span>}
                  {/* <div className="city-svc-card__icon-wrap">{svc.icon}</div> */}
                </div>
                <div className="city-svc-card__body">
                  <h3 className="city-svc-card__title">{svc.title}</h3>
                  <p className="city-svc-card__desc">{svc.desc}</p>
                  <a href="/contact" className="city-svc-card__link">
                    Get a Quote →
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── QUOTE BANNER ── */}
      <section>
        <div className="city-quote-banner">
          <div className="container">
            <motion.div className="city-quote-banner__inner"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <div>
                <div className="city-quote-banner__text">
                  Get Your Free Estimate in {city} Today
                </div>
                <div className="city-quote-banner__sub">
                  Quality work · Competitive rates · Licensed &amp; insured
                </div>
              </div>
              <motion.a href="tel:678-482-9994" className="btn btn-black"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                Call 678-482-9994
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ── */}
      {neighborhoods && neighborhoods.length > 0 && (
        <InView className="city-hoods" id="city-neighborhoods">
          <div className="container">
            <motion.div className="city-hoods__header" variants={stagger}>
              <motion.span className="eyebrow" variants={fadeUp}>Local Coverage</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Serving All of {city}
              </motion.h2>
              <span className="red-bar red-bar--center" />
              <motion.p variants={fadeUp}
                style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
                We serve residential and commercial clients throughout {city}, including these neighborhoods and surrounding areas.
              </motion.p>
            </motion.div>

            <motion.div className="city-hoods__grid" variants={stagger}>
              {neighborhoods.map(hood => (
                <motion.div key={hood.name} className="city-hood-card" variants={fadeUp}>
                  <img className="city-hood-card__img" src={hood.img} alt={hood.name} loading="lazy" />
                  <div className="city-hood-card__overlay" />
                  <div className="city-hood-card__content">
                    {/* <span className="city-hood-card__pin">📍</span> */}
                    <h3 className="city-hood-card__name">{hood.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="city-hoods__tagline"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              Wherever you are in {city} — we're just a phone call away.
            </motion.div>
          </div>
        </InView>
      )}

      {/* ── WHY CHOOSE US ── */}
      <InView className="city-why" id="city-why">
        <div className="container">
          <div className="city-why__grid">
            <motion.div className="city-why__img-wrap" variants={fadeUp}>
              <img src={whyImg} alt={`Expert tree service in ${city}`} loading="lazy" />
              <div className="city-why__img-overlay" />
              <div className="city-why__img-label">
                Trusted Tree Care in {city} Since 1986
              </div>
            </motion.div>
            <div>
              <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
                Our Advantage
              </motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
                Your Trusted Local Experts in {city}
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp}
                style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                We understand the unique tree care needs in {city}'s neighborhoods and take pride
                in protecting your home or business while enhancing the natural beauty of your landscape.
              </motion.p>
              <motion.div className="city-why__points" variants={stagger}>
                {whyPoints.map(p => (
                  <motion.div key={p.title} className="city-why__point" variants={fadeUp}>
                    {/* <div className="city-why__point-icon">{p.icon}</div> */}
                    <div>
                      <div className="city-why__point-title">{p.title}</div>
                      <div className="city-why__point-desc">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="city-why__ctas" variants={fadeUp}>
                <motion.a href="#city-contact" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#city-contact'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Call Today
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </InView>

      {/* ── PROCESS ── */}
      <InView className="city-process" id="city-process">
        <div className="container">
          <motion.div className="city-process__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>How It Works</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Our Simple Process in {city}
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp}
              style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              From first call to final cleanup — we make professional tree care easy for {city} homeowners.
            </motion.p>
          </motion.div>
          <motion.div className="city-process__steps" variants={stagger}>
            {processSteps.map(step => (
              <motion.div key={step.num} className="city-process__step" variants={fadeUp}>
                <div className="city-process__step-num" style={{ position: 'relative' }}>
                  {step.num}
                  <span className="city-process__step-icon">{step.icon}</span>
                </div>
                <h3 className="city-process__step-title">{step.title}</h3>
                <p className="city-process__step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: 'center', marginTop: 'var(--sp-2xl)' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <a href="tel:678-482-9994" className="btn btn-red">
              <img alt="" className='phone-icon' src="/phone-call.png" /> Start with a Free Estimate
            </a>
          </motion.div>
        </div>
      </InView>

      {/* ── REVIEWS ── */}
      <InView className="city-reviews" id="city-reviews">
        <div className="container">
          <motion.div className="city-reviews__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
              What Clients Say
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
              Trusted by {city} Homeowners
            </motion.h2>
            <span className="red-bar red-bar--center" />
          </motion.div>
          <motion.div className="city-reviews__grid" variants={stagger}>
            {reviews.map(r => (
              <motion.div key={r.name}
                className={`city-rev-card ${r.wide ? 'city-rev-card--wide' : ''}`}
                variants={fadeUp}>
                <div className="city-rev-card__quote">"</div>
                <div className="city-rev-card__stars">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <blockquote className="city-rev-card__text">"{r.text}"</blockquote>
                <div className="city-rev-card__author">
                  <div className="city-rev-card__avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="city-rev-card__name">{r.name}</div>
                    <div className="city-rev-card__loc">📍 {r.loc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── NEARBY AREAS ── */}
      {nearbyAreas && nearbyAreas.length > 0 && (
        <InView className="city-nearby" id="city-nearby">
          <div className="container">
            <motion.div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }} variants={stagger}>
              <motion.span className="eyebrow" variants={fadeUp}>Also Serving</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Other Nearby Areas We Serve
              </motion.h2>
              <span className="red-bar red-bar--center" />
            </motion.div>
            <motion.div className="city-nearby__tags"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true }}>
              {nearbyAreas.map(a => (
                <motion.a key={a.name} href={a.href} className="city-nearby__tag" variants={fadeUp}>
                  <span className="city-nearby__tag-dot" />{a.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </InView>
      )}

      {/* ── CONTACT ── */}
      <InView className="city-contact" id="city-contact">
        <div className="container">
          <div className="city-contact__grid">
            <div>
              <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
                Get In Touch
              </motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Get Your Free Estimate in {city} Today
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="city-contact__desc" variants={fadeUp}>
                When you need trusted tree service in {city}, {state},
                turn to the professionals at R&amp;R Tree Service. We deliver quality work, excellent
                customer service, and affordable rates every time.
              </motion.p>
              <motion.div className="city-contact__info" variants={stagger}>
                {[
                  { img:'/phone-call.png', lbl: 'Phone', val: '678-482-9994', href: 'tel:678-482-9994' },
                  { img:'/mail.png', lbl: 'Email', val: 'sally@randrtreeservice.com', href: 'mailto:sally@randrtreeservice.com' },
                  { img:'/location-pin.png', lbl: 'Address', val: '1381 Buford Hwy, Buford GA 30518', href: null },
                  { img:'/time.png', lbl: 'Emergency', val: '24/7 Available', href: null },
                ].map(c => (
                  <motion.a key={c.lbl} href={c.href || '#'} className="city-contact__row" variants={fadeUp}
                    style={!c.href ? { cursor: 'default', pointerEvents: 'none' } : {}}
                    onClick={c.href ? undefined : e => e.preventDefault()}>
                    <div className="city-contact__icon">
                        <img src={c.img} alt={c.label} />
                    </div>
                    <div>
                      <div className="city-contact__lbl">{c.lbl}</div>
                      <div className="city-contact__val">{c.val}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <motion.div className="city-contact__form-box"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <CityContactForm city={city} />
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── FINAL CTA ── */}
      <section>
        <div className="city-cta">
          <div className="container">
            <motion.div className="city-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="city-cta__heading" variants={fadeUp}>
                  Ready for Expert Tree Care<br />in {city}?
                </motion.h2>
                <motion.p className="city-cta__sub" variants={fadeUp}>
                  Licensed · Insured · ISA Certified · Serving {city} Since 1986
                </motion.p>
              </div>
              <motion.div className="city-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a href="#city-contact" className="btn btn-outline-white"
                  onClick={e => { e.preventDefault(); goto('#city-contact'); }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}