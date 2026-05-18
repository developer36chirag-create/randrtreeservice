// Areas.jsx | R&R Tree Service
// Areas We Serve — 18 North Georgia Communities
// Content from: https://randrtreeservice.com/areas-we-serve/
// Design: #D92227 red + #000000 black

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Areas.css';

/* ── Shared animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
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

/* ── Contact form ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const ch = k => e => setForm({ ...form, [k]: e.target.value });
  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      style={{ textAlign: 'center', padding: 'var(--sp-3xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-md)' }}>
      <div style={{ fontSize: '3rem' }}>✅</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--white)' }}>Message Sent!</h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
        We'll be in touch within 24 hours. Urgent? Call{' '}
        <a href="tel:678-482-9994" style={{ color: 'var(--red-light)' }}>678-482-9994</a>.
      </p>
    </motion.div>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} noValidate>
      <h3 className="form-title">Contact Us</h3>
      <p className="form-sub">We can't wait to make your property dreams a reality!</p>
      <div className="form-group">
        <label className="form-label" htmlFor="ar-name">Name *</label>
        <input id="ar-name" type="text" className="form-input" placeholder="Your name" required value={form.name} onChange={ch('name')} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="ar-email">Email *</label>
          <input id="ar-email" type="email" className="form-input" placeholder="you@example.com" required value={form.email} onChange={ch('email')} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="ar-phone">Phone</label>
          <input id="ar-phone" type="tel" className="form-input" placeholder="(678) 000-0000" value={form.phone} onChange={ch('phone')} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="ar-msg">Tell us about your tree project *</label>
        <textarea id="ar-msg" className="form-textarea" placeholder="Describe your project, location, urgency…" required value={form.message} onChange={ch('message')} />
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
   DATA
   ════════════════════════════════════════ */

const AREAS = [
  {
    city: 'Alpharetta',
    county: 'Fulton County',
    href: 'https://randrtreeservice.com/alpharetta/',
    img: '/Alpharetta.webp',
    desc: 'We help Alpharetta residents and businesses maintain healthy, beautiful landscapes with expert tree services designed to protect your property and enhance curb appeal.',
  },
  {
    city: 'Atlanta',
    county: 'Fulton County',
    href: 'https://randrtreeservice.com/atlanta/',
    img: '/Atlanta.webp',
    desc: "From downtown to the suburbs, our team is equipped to handle the unique tree care needs of Atlanta's urban canopy and historic neighborhoods.",
  },
  {
    city: 'Avondale Estates',
    county: 'DeKalb County',
    href: 'https://randrtreeservice.com/avondale-estates/',
    img: '/Avondale-Estates.webp',
    desc: 'Home and property owners in charming Avondale Estates trust us for safe tree removal, precise trimming, and professional advice on tree health.',
  },
  {
    city: 'Buford',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/buford/',
    img: '/Buford.webp',
    desc: 'In Buford, we deliver dependable tree care services to keep your property looking its best — while protecting against storm damage and disease.',
  },
  {
    city: 'Cumming',
    county: 'Forsyth County',
    href: 'https://randrtreeservice.com/cumming/',
    img: '/Cumming.webp',
    desc: 'R&R Tree Service keeps Cumming homes and commercial properties safe and attractive with comprehensive tree care and maintenance services.',
  },
  {
    city: 'Decatur',
    county: 'DeKalb County',
    href: 'https://randrtreeservice.com/decatur/',
    img: '/Decatur.webp',
    desc: "Our team provides expert tree trimming, removal, and emergency services to protect Decatur's beautiful trees and historic character.",
  },
  {
    city: 'Duluth',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/duluth/',
    img: '/Duluth.webp',
    desc: "Duluth residents can rely on us for quality tree care that enhances property value and helps preserve the area's natural beauty.",
  },
  {
    city: 'Flowery Branch',
    county: 'Hall County',
    href: 'https://randrtreeservice.com/flowery-branch/',
    img: '/Flowery-Branch.webp',
    desc: 'We help Flowery Branch homeowners and businesses manage their trees with confidence, offering everything from pruning to full tree removal.',
  },
  {
    city: 'Gainesville',
    county: 'Hall County',
    href: 'https://randrtreeservice.com/gainesville/',
    img: '/Gainesville.webp',
    desc: 'Our tree care experts serve Gainesville with a full range of services to keep your yard or commercial landscape healthy and hazard-free.',
  },
  {
    city: 'Grayson',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/grayson/',
    img: '/Grayson.webp',
    desc: 'Residents in Grayson turn to R&R Tree Service for prompt, professional tree removal, trimming, and emergency storm cleanup.',
  },
  {
    city: 'Lawrenceville',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/lawrenceville/',
    img: '/Lawrenceville.webp',
    desc: "In Lawrenceville, we're the trusted choice for tree services that protect your property and enhance the appeal of your outdoor spaces.",
  },
  {
    city: 'Lilburn',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/lilburn/',
    img: '/Lilburn.webp',
    desc: 'Lilburn property owners choose us for safe, effective tree services performed with care and respect for your home and surroundings.',
  },
  {
    city: 'Norcross',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/norcross/',
    img: '/Norcross.webp',
    desc: 'From tree pruning to stump grinding, Norcross homeowners and businesses rely on our skilled team for all their tree care needs.',
  },
  {
    city: 'Roswell',
    county: 'Fulton County',
    href: 'https://randrtreeservice.com/roswell/',
    img: '/Roswell.webp',
    desc: "We proudly serve Roswell with expert tree services that help preserve the city's lush canopy while keeping your property safe and beautiful.",
  },
  {
    city: 'Snellville',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/snellville/',
    img: '/Snellville.webp',
    desc: 'Snellville residents can count on us for dependable tree care solutions tailored to meet the needs of their property and budget.',
  },
  {
    city: 'Stone Mountain',
    county: 'DeKalb County',
    href: 'https://randrtreeservice.com/stone-mountain/',
    img: '/Stone-Mountain.webp',
    desc: 'We offer a full range of tree services in Stone Mountain, including storm damage cleanup, to keep your property safe and attractive year-round.',
  },
  {
    city: 'Sugar Hill',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/sugar-hill/',
    img: '/Sugar-Hill.webp',
    desc: 'Sugar Hill property owners trust R&R Tree Service for quality work, excellent customer service, and affordable rates.',
  },
  {
    city: 'Suwanee',
    county: 'Gwinnett County',
    href: 'https://randrtreeservice.com/suwanee/',
    img: '/Suwanee.webp',
    desc: "Our team serves Suwanee with professional tree care designed to improve your property's safety, health, and beauty.",
  },
];

const WHY_CARDS = [
  { icon: '🌳', title: 'Local Experts', desc: 'We know North Georgia — its soil, tree species, climate challenges, and community character.' },
  { icon: '🛡️', title: 'Licensed & Insured', desc: 'Full liability coverage on every job. Your property and our crew are protected.' },
  { icon: '🏗️', title: 'Full Equipment', desc: 'From hand tools to full cranes — we own our machinery and never outsource.' },
  { icon: '⭐', title: '40 Years', desc: 'Trusted by North Georgia homeowners since 1986. Our reputation is our greatest asset.' },
];

const SERVICES_LIST = [
  { icon: '✂️', name: 'Tree Trimming' },
  { icon: '🪓', name: 'Tree Removal' },
  { icon: '🌿', name: 'Land Clearing' },
  { icon: '🪨', name: 'Stump Grinding' },
  { icon: '🏗️', name: 'Crane Service' },
  { icon: '🪵', name: 'Firewood Delivery' },
  { icon: '🌱', name: 'Mulch Delivery' },
  { icon: '💧', name: 'Pond Maintenance' },
];

const REVIEWS = [
  {
    text: "For the past eight years, R and R Tree Service has meticulously tended to our landscape needs. From pine tree removal to diagnosing damaged or diseased trees, I fully and completely trust this honest and hard working crew. They estimate fairly and give competitive prices. It's reassuring to know they will 'take care of business'.",
    name: 'Lawanna B. St Clair', loc: 'Lilburn, Georgia', wide: true,
  },
  {
    text: 'We have used R and R Tree Service since we moved to the North Georgia area over 16 years ago. They are professional, dependable, and do an excellent job. Their crane service is a definite advantage — there is never any damage to surrounding trees.',
    name: 'John & Carol H.', loc: 'Alpharetta, GA', wide: false,
  },
  {
    text: 'Within 24-hours of being contacted, Randy and his team gave me a quote and removed two mature trees uprooted during Hurricane Helene. They arrived at the crack of dawn and finished before lunch. True pros.',
    name: 'Jane B.', loc: 'Georgia', wide: false,
  },
];

/* ════════════════════════════════════════
   AREA CARD COMPONENT
   ════════════════════════════════════════ */
function AreaCard({ area }) {
  return (
    <motion.a
      href={area.href}
      className="ar-card"
      variants={fadeUp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Tree service in ${area.city}, GA`}
    >
      <div className="ar-card__img-wrap">
        <img
          className="ar-card__img"
          src={area.img}
          alt={`${area.city}, Georgia tree service`}
          loading="lazy"
        />
        <div className="ar-card__img-overlay" />
        {/* <div className="ar-card__pin">📍</div> */}
        {/* <div className="ar-card__city-label">{area.city}</div> */}
      </div>
      <div className="ar-card__body">
        <h3 className="ar-card__title">{area.city}</h3>
        <p className="ar-card__desc">{area.desc}</p>
        <div className="ar-card__footer">
          <span className="ar-card__county">{area.county}</span>
          <span className="ar-card__link-arrow">Learn More →</span>
        </div>
      </div>
    </motion.a>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */
export default function Areas() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>

      {/* ── HERO ── */}
      <section className="ar-hero" aria-label="Areas We Serve hero">
        <div className="ar-hero__bg" aria-hidden="true">
          <img
            src="/areas-bg.jpg"
            alt="North Georgia tree service coverage area"
            loading="eager" fetchpriority="high"
          />
          <div className="ar-hero__overlay" />
        </div>
        {/* <div className="ar-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="ar-hero__content">
            <motion.div className="ar-hero__breadcrumb"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <a href="/">Home</a>
              <span className="ar-hero__breadcrumb-sep">›</span>
              <span className="ar-hero__breadcrumb-cur">Areas We Serve</span>
            </motion.div>

            <motion.div className="ar-hero__eyebrow"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="ar-hero__eyebrow-line" />
              18 Communities · North Georgia · Since 1986
            </motion.div>

            <motion.h1 className="ar-hero__title"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}>
              Areas We Serve |{' '}
              <span>R&amp;R Tree Service</span>
            </motion.h1>

            <motion.p className="ar-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              At R&amp;R Tree Service, we are proud to provide professional, reliable, and affordable
              tree care throughout North Georgia. Whether you need tree removal, stump grinding,
              pruning, emergency storm cleanup, or expert tree health care, our experienced team is
              here to help keep your property safe and beautiful.
            </motion.p>

            <motion.div className="ar-hero__ctas"
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}>
              <motion.a href="#ar-areas" className="btn btn-red"
                onClick={e => { e.preventDefault(); goto('#ar-areas'); }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                View Service Areas →
              </motion.a>
              <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
              </motion.a>
            </motion.div>

            <motion.div className="ar-hero__trust"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              {['18+ Cities Served', 'Gwinnett & Hall County', 'Licensed & Insured', 'Free Estimates'].map(t => (
                <div key={t} className="ar-hero__trust-item">
                  <span className="ar-hero__trust-dot">✓</span>{t}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section>
        <div className="stats-bar">
          <div className="container">
            <motion.div className="stats-bar__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              {[['18+','Communities Served'],['40','Years Serving GA'],['100%','Owner Operated'],['24/7','Emergency Service']].map(([n, l]) => (
                <motion.div key={l} className="stats-bar__item" variants={fadeUp}>
                  <span className="stats-bar__num">{n}</span>
                  <span className="stats-bar__lbl">{l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE STRIP ── */}
      <section>
        <div className="ar-coverage">
          <div className="container">
            <motion.div className="ar-coverage__inner"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <div className="ar-coverage__left">
                <span className="ar-coverage__icon">📍</span>
                <div>
                  <div className="ar-coverage__title">Proudly Serving North Georgia</div>
                  <div className="ar-coverage__sub">Gwinnett · Hall · Forsyth · Fulton · DeKalb counties</div>
                </div>
              </div>
              <div className="ar-coverage__tags">
                {['Gwinnett Co.', 'Hall Co.', 'Forsyth Co.', 'Fulton Co.', 'DeKalb Co.'].map(c => (
                  <span key={c} className="ar-coverage__tag">{c}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <InView className="ar-intro" id="ar-intro">
        <div className="container">
          <motion.h2 className="ar-intro__title" variants={fadeUp}>
            Our Service Areas — <span>North Georgia</span>
          </motion.h2>
          <span className="red-bar red-bar--center" />
          <motion.p className="ar-intro__desc" variants={fadeUp}>
            We proudly serve homeowners and businesses in the following communities across
            North Georgia and surrounding Georgia counties. Click any city to learn more
            about our services in that area.
          </motion.p>
        </div>
      </InView>

      {/* ── AREA CARDS GRID ── */}
      <InView className="ar-areas" id="ar-areas">
        <div className="container">
          <motion.div className="ar-grid" variants={stagger}>
            {AREAS.map(area => (
              <AreaCard key={area.city} area={area} />
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── NOT LISTED BANNER ── */}
      <section>
        <div className="ar-not-listed">
          <div className="container">
            <motion.div className="ar-not-listed__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                {/* <div className="ar-not-listed__icon">🗺️</div> */}
                <h2 className="ar-not-listed__title">
                  Don't See Your <span>City Listed?</span>
                </h2>
                <p className="ar-not-listed__desc">
                  Even if you don't see your location listed above, we may still be able to help!
                  Contact us today to discuss your tree care needs and find out if we service your area.
                  We regularly work beyond our listed coverage zones for larger or specialized projects.
                </p>
              </div>
              <div className="ar-not-listed__btns">
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Call 678-482-9994
                </motion.a>
                <motion.a href="#ar-contact" className="btn btn-outline-white"
                  onClick={e => { e.preventDefault(); goto('#ar-contact'); }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  Send a Message
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY R&R IN YOUR AREA ── */}
      <InView className="ar-why" id="ar-why">
        <div className="container">
          <motion.div className="ar-why__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
              Why Choose Us
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
              Trusted Tree Care Across North Georgia
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp}
              style={{ color: 'rgba(255,255,255,0.52)', fontSize: '1rem', lineHeight: '1.75' }}>
              No matter which community you call home, you get the same R&amp;R standard —
              certified expertise, owned equipment, and a crew that treats your property like their own.
            </motion.p>
          </motion.div>
          <motion.div className="ar-why__grid" variants={stagger}>
            {WHY_CARDS.map(c => (
              <motion.div key={c.title} className="ar-why-card" variants={fadeUp}>
                <div className="ar-why-card__icon">{c.icon}</div>
                <h3 className="ar-why-card__title">{c.title}</h3>
                <p className="ar-why-card__desc">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── SERVICES ACROSS ALL AREAS ── */}
      <InView className="ar-services" id="ar-services">
        <div className="container">
          <div className="ar-services__grid">
            <motion.div className="ar-services__img-wrap" variants={fadeUp}>
              <img
                src="/tree-removal-Benefits1.jpg"
                alt="R&R Tree Service crew working in North Georgia" loading="lazy"
              />
              <div className="ar-services__img-overlay" />
              <div className="ar-services__img-label">Expert Service · Every Community</div>
            </motion.div>
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>What We Offer</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Services Available Across All Areas
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp}
                style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-sm)' }}>
                Wherever you are in North Georgia, R&amp;R brings the same complete range of
                professional tree care services — performed by our own certified crew with
                our own equipment.
              </motion.p>
              <motion.div className="ar-services__list" variants={stagger}>
                {SERVICES_LIST.map(s => (
                  <motion.a key={s.name} href="/services" className="ar-services__item" variants={fadeUp}>
                    {/* <div className="ar-services__item-icon">{s.icon}</div> */}
                    <span className="ar-services__item-name">{s.name}</span>
                  </motion.a>
                ))}
              </motion.div>
              <motion.div className="ar-services__ctas" variants={fadeUp}>
                <motion.a href="/services" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  View All Services →
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-black"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Free Estimate
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </InView>

      {/* ── TESTIMONIALS ── */}
      <InView className="ar-reviews" id="ar-reviews">
        <div className="container">
          <motion.div className="ar-reviews__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
              Client Reviews
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
              Trusted Across North Georgia
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
              40 years of 5-star service — hear directly from homeowners across our service area.
            </motion.p>
          </motion.div>
          <motion.div className="ar-reviews__grid" variants={stagger}>
            {REVIEWS.map(r => (
              <motion.div key={r.name}
                className={`ar-rev-card ${r.wide ? 'ar-rev-card--wide' : ''}`}
                variants={fadeUp}>
                <div className="ar-rev-card__quote">"</div>
                <div className="ar-rev-card__stars">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <blockquote className="ar-rev-card__text">"{r.text}"</blockquote>
                <div className="ar-rev-card__author">
                  <div className="ar-rev-card__avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="ar-rev-card__name">{r.name}</div>
                    <div className="ar-rev-card__loc">📍 {r.loc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── CONTACT ── */}
      <InView className="ar-contact" id="ar-contact">
        <div className="container">
          <div className="ar-contact__grid">
            <div>
              <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
                Get In Touch
              </motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                We Can't Wait to Serve Your Community
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="ar-contact__desc" variants={fadeUp}>
                Ready to experience professional tree care in your area? Contact us today for a
                free, no-obligation estimate. We serve 18+ communities across North Georgia and
                respond to every inquiry within 24 hours.
              </motion.p>
              <motion.div className="ar-contact__info" variants={stagger}>
                {[
                  { img:'/location-pin.png', label: 'Address', val: '1381 Buford Highway, Buford, GA 30518', href: null },
                  { img:'/phone-call.png', label: 'Phone', val: '678-482-9994', href: 'tel:678-482-9994' },
                  { img:'/mail.png', label: 'Email', val: 'sally@randrtreeservice.com', href: 'mailto:sally@randrtreeservice.com' },
                  { img:'/printer.png', label: 'Fax', val: '678-482-9996', href: 'tel:678-482-9996' },
                ].map(c => (
                  <motion.a key={c.label} href={c.href || '#'} className="ar-contact__row" variants={fadeUp}
                    style={!c.href ? { cursor: 'default', pointerEvents: 'none' } : {}}
                    onClick={c.href ? undefined : e => e.preventDefault()}>
                    <div className="ar-contact__icon">
                        <img src={c.img} alt={c.label} />
                    </div>
                    <div>
                      <div className="ar-contact__label">{c.label}</div>
                      <div className="ar-contact__value">{c.val}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <motion.div className="ar-contact__form-box"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── FINAL CTA ── */}
      <section>
        <div className="ar-cta">
          <div className="container">
            <motion.div className="ar-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="ar-cta__heading" variants={fadeUp}>
                  Ready for Expert Tree Care<br />in Your Neighborhood?
                </motion.h2>
                <motion.p className="ar-cta__sub" variants={fadeUp}>
                  Licensed · Insured · Serving North Georgia Since 1986
                </motion.p>
              </div>
              <motion.div className="ar-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a href="#ar-contact" className="btn btn-outline-white"
                  onClick={e => { e.preventDefault(); goto('#ar-contact'); }}
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