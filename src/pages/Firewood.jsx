// TreeTrimming.jsx | R&R Tree Service
// Tree Trimming & Pruning in Atlanta, GA
// Exact content from: https://randrtreeservice.com/tree-trimming-in-atlanta/
// Design system: #D92227 red + #000000 black

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Treetrimming.css';

/* ── Shared animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
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

/* ── FAQ Item ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        <span className={`faq-arrow ${open ? 'faq-arrow--open' : ''}`}>▼</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}>
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════
   DATA
   ════════════════════════════════════════ */

const SERVICE_TYPES = [
  {
    num: '01',
    title: 'Comprehensive Tree Removal Services',
    desc: 'We handle trees of all sizes, providing safe and complete removal to protect your property and enhance your landscape. Our team will clean up the site thoroughly, leaving your yard pristine.',
    img: '/Comprehensive-Tree-Removal-Services.webp',
  },
  {
    num: '02',
    title: 'Emergency Tree Removal',
    desc: 'When storms or accidents leave you with a dangerous tree, we offer fast, 24/7 response to secure your property. Our experts take care of fallen trees and hazardous limbs, minimizing further damage.',
    img: '/Emergency-Tree-Removal.webp',
  },
  {
    num: '03',
    title: 'Stump Grinding and Removal',
    desc: 'Don’t let unsightly stumps mar your yard. We’ll grind them down below ground level, creating space for new landscaping or a smooth, trip-free lawn.',
    img: '/Stump-Grinding-and-Removal.webp',
  },
  {
    num: '04',
    title: 'Lot Clearing and Brush Removal',
    desc: 'Preparing for construction or taming overgrown land? We’ll efficiently clear trees, brush, and debris,',
    img: '/Lot-Clearing-and-Brush-Removal.webp',
  },
  {
    num: '05',
    title: 'Hazardous Tree Assessment and Removal',
    desc: 'Our experienced team of crew members identify trees with structural weaknesses or disease, offering expert assessments and safe solutions. From proactive pruning to full removal, we’ll protect your safety and property.',
    img: '/Hazardous-Tree-Assessment-and-Removal.webp',
  },
];

const WHY_POINTS = [
  {
    title: 'Save on delivery costs',
    desc: 'by picking up firewood directly from us.',
  },
  {
    title: 'Flexible pickup times',
    desc: 'available throughout the week (call ahead for hours).',
  },
  {
    title: 'Choose your own quantity',
    desc: "from small bundles to full cords.",
  },
  {
    title: 'Inspect your firewood in person',
    desc: "before taking it home.",
  },
];

const SIGNS = [
  {
    title: 'Hardwoods (oak, hickory, maple)',
    desc: "Burns longer and produces high heat — perfect for home heating and long-lasting fires.",
  },
  {
    title: 'Softwoods (pine, cedar)',
    desc: "Ideal for kindling and quick, aromatic fires.",
  },
  {
    title: 'Mixed wood bundles',
    desc: "Convenient and cost-effective for everyday use and outdoor gatherings.",
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Seasoned Firewood',
    desc: 'All wood is air-dried and ready to burn, reducing smoke and sparks.',
  },
  {
    num: '02',
    title: 'Flexible Delivery & Pickup Options',
    desc: "Choose home delivery or pickup from our yard at your convenience.",
  },
  {
    num: '03',
    title: 'Professional Service',
    desc: 'Trained teams ensure safe delivery, stacking, and customer satisfaction.',
  },
  {
    num: '04',
    title: 'Local Sourcing',
    desc: 'All our firewood comes from tree removal and land clearing projects — responsibly sourced and sustainably repurposed.',
  },
];

const ARBORIST_POINTS = [
  { title: 'Order Placement', desc: 'Call or fill out our online form with your preferred wood type, quantity, and delivery address.' },
  { title: 'Preparation', desc: 'We cut, season, and bundle your wood for easy stacking.' },
  { title: 'Delivery', desc: 'Our team brings it to your home or business and places it in your preferred spot.' },
  { title: 'Optional  Stacking', desc: "We offer optional stacking services for a neat, organized setup." },
];

const EQUIPMENT_POINTS = [
  { title: 'Call Ahead', desc: 'Let us know your preferred pickup time and quantity.' },
  { title: 'Drive Up', desc: 'Arrive at our yard during business hours.' },
  { title: 'Load Up', desc: 'Our staff helps load your truck or trailer safely and efficiently.' },
  { title: 'Drive Home Happy', desc: 'Enjoy your firewood the same day!' },
];

const PRICING_POINTS = [
  { icon: '/exam.png', title: 'Keep firewood off the ground using pallets or racks.', desc: '' },
  { icon: '/phone-call.png', title: 'Cover the top to protect from rain, but allow airflow on the sides.', desc: '' },
  { icon: '/phone-call.png', title: 'Store wood away from your home or structure to prevent pests.', desc: '' },
  { icon: '/phone-call.png', title: 'Avoid burning treated or painted wood, which can release toxins.', desc: '' },
];

const REVIEWS = [
  {
    text: "We have used R&R Tree company twice in the past couple of years to remove trees from our property. They have done a fantastic job from start to finish. Communication throughout the entire process was very good and the tree removal process was quick. Their crew did an amazing job with the cleanup. Thank you!",
    name: 'William C.',
    loc: 'North Georgia',
  },
];

const FAQS = [
  { q: 'What types of firewood do you offer?', a: 'We offer seasoned hardwoods like oak, hickory, and maple for long, hot burns, as well as softwoods like pine for easy-start fires.' },
  { q: 'Can I pick up firewood instead of having it delivered?', a: 'Absolutely! Customers are welcome to pick up firewood directly from R & R Tree Service. Simply call ahead to schedule your pickup time and quantity.' },
  { q: 'How much firewood can I order or pick up?', a: 'Orders and pickups are available by half cord, full cord, or smaller quantities — ideal for fire pits, fireplaces, or events.' },
  { q: 'Can you stack the firewood for me?', a: 'Yes, optional stacking services are available for delivery customers.' },
  { q: 'How fast is delivery?', a: 'Most deliveries are completed within 48 hours, depending on location and order size.' },
  { q: 'Is your firewood seasoned?', a: 'Yes, all our wood is air-dried, seasoned, and ready to burn.' },
  { q: 'Do you serve commercial clients?', a: 'Yes, we supply both residential and commercial customers, including restaurants, event venues, and campsites.' },
  { q: 'Where does your firewood come from?', a: 'Our wood is sourced locally from tree removal and land clearing projects, promoting sustainability.' },
  { q: 'What are your pickup hours?', a: 'Pickup is available Monday through Saturday during normal business hours — call ahead to confirm availability.' },
  { q: 'How can I place an order or schedule pickup?', a: 'Simply call 678-482-9994 or fill out our online contact form to request delivery or pickup.' },
];

const AREAS = ['Alpharetta','Atlanta','Avondale Estates','Buford','Cumming','Decatur','Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville','Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee', 'Oakwood'];

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */
export default function TreeTrimming() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>

      {/* ── HERO ── */}
      <section className="tt-hero" aria-label="Tree Trimming hero">
        <div className="tt-hero__bg" aria-hidden="true">
          <img
            src="/Firewood-Delivery-bg.jpg"
            alt="Professional arborist trimming trees in North Georgia"
            loading="eager" fetchpriority="high"
          />
          <div className="tt-hero__overlay" />
        </div>
        {/* <div className="tt-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="tt-hero__content">
            <motion.div className="tt-hero__breadcrumb"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <a href="/">Home</a>
              <span className="tt-hero__breadcrumb-sep">›</span>
              <a href="/services">Services</a>
              <span className="tt-hero__breadcrumb-sep">›</span>
              <span className="tt-hero__breadcrumb-cur">Firewood Delivery</span>
            </motion.div>

            <motion.div className="tt-hero__eyebrow"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="tt-hero__eyebrow-line" />
              Buford, GA · Serving North Georgia Since 1986
            </motion.div>

            <motion.h1 className="tt-hero__title"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}>
              Kiln-Dried Firewood Delivery in{' '}
              <span className="tt-hero__title-red">North Georgia</span>
            </motion.h1>

            <motion.p className="tt-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              R & R Tree Service is your trusted firewood delivery service and firewood supplier in North Georgia. Whether you are looking for firewood for your home fireplace, outdoor fire pit, or commercial use, we provide high-quality, seasoned firewood delivered right to your doorstep — or available for pickup directly from our location.
            </motion.p>

            <motion.div className="tt-hero__ctas"
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}>
              <motion.a href="#contact" className="btn btn-red"
                onClick={e => { e.preventDefault(); goto('#tt-cta'); }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Get a Free Quote →
              </motion.a>
              <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
              </motion.a>
            </motion.div>
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
              {[
                ['40', 'Years Experience'],
                // ['ISA', 'Certified Arborists'],
                ['100%', 'Owner Operated'],
                ['24/7', 'Emergency Service'],
              ].map(([n, l]) => (
                <motion.div key={l} className="stats-bar__item" variants={fadeUp}>
                  <span className="stats-bar__num">{n}</span>
                  <span className="stats-bar__lbl">{l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <InView className="tt-intro" id="tt-intro">
        <div className="container">
          <div className="tt-intro__grid">
            <div className="tt-intro__text">
              <motion.span className="eyebrow" variants={fadeUp}>Reliable Firewood Delivery Service</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Why choose our delivery service?
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Our firewood delivery service is tailored for convenience and efficiency. We take the hassle out of transporting and storing wood so you can focus on enjoying your fire safely and comfortably.
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                • Direct delivery to your home or business in North Georgia and surrounding areas.
                <br /><br />
                • Customizable orders: choose the type of wood, log size, and quantity.
                <br /><br />
                • Prompt scheduling — receive your firewood when you need it.
                <br /><br />
                • No cutting, chopping, or stacking required; we handle all the heavy lifting.
              </motion.p>

              <motion.p className="tt-intro__lead" variants={fadeUp}>
                As a dedicated firewood company in North Georgia, we ensure every delivery meets the highest standards. Our seasoned hardwood burns efficiently, producing more heat and less smoke than unseasoned wood. This makes it ideal for fireplaces, wood stoves, and outdoor fire pits.
              </motion.p>
              <motion.div className="tt-intro__ctas" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Call for Free Quote
                </motion.a>
                <motion.a href="#tt-services" className="btn btn-outline-black"
                  onClick={e => { e.preventDefault(); goto('#tt-services'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  View Our Services
                </motion.a>
              </motion.div>
            </div>

            <motion.div className="tt-intro__img-wrap" variants={fadeUp} custom={0.2}>
              <img
                src="/Expert-Firewood-Delivery.jpg"
                alt="Certified arborist trimming trees"
                loading="lazy"
              />
              {/* <div className="tt-intro__img-badge">ISA Certified Arborists</div> */}
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── SERVICE TYPES GRID ── */}
      <InView className="tt-services" id="tt-services">
        <div className="container">

          {/* Mid-section CTA */}
          <motion.div className="tt-services__cta tt-services__cta-mb"
            style={{ marginTop: '0', textAlign: 'center', padding: 'var(--sp-2xl)', background: 'var(--black)', borderRadius: 'var(--r-lg)', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--red)' }} />
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--white)', marginBottom: 'var(--sp-lg)' }}>
              Why Choose R & R Tree Service{' '}
              <span style={{ color: 'var(--red)' }}>as Your Firewood Supplier</span>{' '}
            </p>
            <motion.a href="tel:678-482-9994" className="btn btn-red"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              Get Your Free Quote Today
            </motion.a>
          </motion.div>
        </div>
      </InView>

      {/* ── WHY TRIMMING MATTERS ── */}
      <InView className="tt-why" id="tt-why">
        <div className="container">
          <div className="tt-why__grid">
            {/* Image stack */}
            <motion.div className="tt-why__img-stack" variants={fadeUp}>
              <div className="tt-why__img-main">
                <img src="/Firewood-Delivery-Benefits1.jpg"
                     alt="Tree trimming work" loading="lazy" />
              </div>
              <div className="tt-why__img-sec">
                <img src="/Firewood-Delivery-Benefits2.jpg"
                     alt="Healthy trees" loading="lazy" />
              </div>
              <div className="tt-why__badge">
                <span className="tt-why__badge-num">40</span>
                <span className="tt-why__badge-lbl">Years of<br />Service</span>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Benefits</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Firewood Pickup Benefits
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                For customers who prefer to pick up their own firewood, R & R Tree Service now offers on-site firewood pickup at our North Georgia-area location.
              </motion.p>
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                Whether you need a small load for your weekend fire pit or a truckload to stock up for the winter, our pickup option gives you flexibility, affordability, and convenience — perfect for those who want to skip delivery fees or get wood on short notice.
              </motion.p>

              <motion.div className="tt-why__points" variants={stagger}>
                {WHY_POINTS.map(p => (
                  <motion.div key={p.title} className="tt-why__point" variants={fadeUp}>
                    {/* <div className="tt-why__point-icon">{p.icon}</div> */}
                    <div>
                      <div className="tt-why__point-title">{p.title}</div>
                      <div className="tt-why__point-desc">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                Ideal for last-minute needs or for those nearby our service area.
                </motion.p>

              <motion.div className="tt-why__ctas" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Free Quote
                </motion.a>
                <motion.a href="#tt-process" className="btn btn-outline-black"
                  onClick={e => { e.preventDefault(); goto('#tt-process'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Learn More
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </InView>

      {/* ── SIGNS YOUR TREES NEED TRIMMING ── */}
      <InView className="tt-signs" id="tt-signs">
        <div className="container">
          <div className="tt-signs__grid">
            <div className="tt-signs__content">
              <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
                Quality Firewood
              </motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
                Firewood Types & Packages
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-signs__intro" variants={fadeUp}>
                We provide a range of firewood types to suit your specific needs:
              </motion.p>
              
              <motion.div className="tt-signs__list" variants={stagger}>
                {SIGNS.map(s => (
                  <motion.div key={s.title} className="tt-signs__item" variants={fadeUp}>
                    {/* <div className="tt-signs__item-icon">{s.icon}</div> */}
                    <div>
                      <div className="tt-signs__item-title">{s.title}</div>
                      <div className="tt-signs__item-desc">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
                Available in standard units
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-signs__intro" variants={fadeUp}>
                • Half cord
                <br />
                • Full cord
                <br />
                • Loose bags for smaller fireplaces or fire pits
                <br /><br />
                Whether you need a one-time delivery, recurring supply, or on-site pickup, R & R Tree Service is the North Georgia firewood supplier you can trust.
              </motion.p>

              <motion.div className="tt-signs__ctas" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote
                </motion.a>
                <motion.a href="#tt-faq" className="btn btn-outline-white"
                  onClick={e => { e.preventDefault(); goto('#tt-faq'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Learn More
                </motion.a>
              </motion.div>
            </div>

            <motion.div className="tt-signs__img-wrap" variants={fadeUp} custom={0.2}>
              <img
                src="/Firewood-Delivery-Safety-Measures.jpg"
                alt="Tree needing trimming" loading="lazy"
              />
              <div className="tt-signs__img-overlay" />
              <div className="tt-signs__img-label">
                Spot the Signs Early — Call R&amp;R Today
              </div>
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── PROCESS ── */}
      <InView className="tt-process" id="tt-process">
        <div className="container">
          <motion.div className="tt-process__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>How We Work</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Our Firewood Delivery Process
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              Our stump grinding process is designed to be thorough, efficient, and tailored to your specific needs.
              <br /><br />
              As a trusted firewood supplier in North Georgia, R & R Tree Service goes beyond simply delivering wood. Our team ensures you get the best value and service with every order.
            </motion.p>
          </motion.div>

          <div className="tt-process__grid">
            <motion.div className="tt-process__steps"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true }}>
              {PROCESS_STEPS.map(step => (
                <motion.div key={step.num} className="tt-process__step" variants={fadeUp}>
                  <div className="tt-process__step-num">{step.num}</div>
                  <div>
                    <div className="tt-process__step-title">{step.title}</div>
                    <div className="tt-process__step-desc">{step.desc}</div>
                  </div>
                </motion.div>
              ))}


              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
                <br />
              We are proud to serve as a reliable firewood supplier for homes, commercial properties, and outdoor venues throughout the North Georgia metro area.
              </motion.p>



              <motion.div variants={fadeUp} style={{ display: 'flex', gap: 'var(--sp-sm)', flexWrap: 'wrap', marginTop: 'var(--sp-md)' }}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get Your Free Consultation
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div className="tt-process__img-wrap"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img
                src="/Firewood-Delivery-Process.jpg"
                alt="R&R Tree Service crew at work" loading="lazy"
              />
              <div className="tt-process__img-overlay" />
              <div className="tt-process__img-tag">
                {/* <span>Years of Experience</span> */}
              </div>
            </motion.div>
          </div>
        </div>
      </InView>

      

      {/* ── CERTIFIED ARBORISTS + EQUIPMENT ── */}
      <InView className="tt-experts tt-experts-gray" id="tt-experts">
        <div className="container">
          <motion.div className="tt-experts-heading" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto var(--sp-3xl)' }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Delivery Options</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Firewood Delivery & Pickup Process
            </motion.h2>
            <span className="red-bar red-bar--center" />
          </motion.div>

          <motion.div className="tt-experts__grid" variants={stagger}>
            {/* Arborists — dark */}
            <motion.div className="tt-experts__panel tt-experts__panel--dark" variants={fadeUp}>
              <h3 className="tt-experts__panel-title">Delivery</h3>
              <div className="tt-experts__panel-points">
                {ARBORIST_POINTS.map(p => (
                  <div key={p.title} className="tt-experts__panel-point">
                    <div className="tt-experts__check">✓</div>
                    <div>
                      <strong>{p.title}</strong>
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
              <motion.a href="tel:678-482-9994" className="btn btn-red"
                style={{ marginTop: 'var(--sp-lg)', alignSelf: 'flex-start' }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Contact Us Today
              </motion.a>
            </motion.div>

            {/* Equipment — light */}
            <motion.div className="tt-experts__panel tt-experts__panel--light" variants={fadeUp}>
              <h3 className="tt-experts__panel-title">Pickup</h3>
              <div className="tt-experts__panel-points">
                {EQUIPMENT_POINTS.map(p => (
                  <div key={p.title} className="tt-experts__panel-point">
                    <div className="tt-experts__check">✓</div>
                    <div>
                      <strong>{p.title}</strong>
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
              <motion.a href="/about" className="btn btn-black"
                style={{ marginTop: 'var(--sp-lg)', alignSelf: 'flex-start' }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                About Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </InView>

      {/* ── TRANSPARENT PRICING ── */}
      <InView className="tt-pricing" id="tt-pricing">
        <div className="container">
          <div className="tt-pricing__grid">
            <div className="tt-pricing__content">
              <motion.span className="eyebrow" variants={fadeUp} style={{ color: 'var(--red-light)' }}>
                Honest Pricing
              </motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
                Firewood Storage & Safety Tips
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-pricing__desc" variants={fadeUp}>
                <strong style={{ color: 'var(--white)' }}>To get the most out of your firewood, proper storage is essential:</strong>{' '}
              </motion.p>

              <motion.div className="tt-pricing__points" variants={stagger}>
                {PRICING_POINTS.map(p => (
                  <motion.div key={p.title} className="tt-pricing__point" variants={fadeUp}>
                    {/* <div className="tt-pricing__point-icon">
                        <img src={p.icon} alt={p.title} />
                    </div> */}
                    <div>
                      <div className="tt-pricing__point-title">{p.title}</div>
                      {/* <div className="tt-pricing__point-desc">{p.desc}</div> */}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p className="tt-pricing__desc" variants={fadeUp}>
                By following these simple tips, you’ll ensure your firewood stays dry, clean, and ready to burn all season long.
              </motion.p>

              <motion.div className="tt-pricing__ctas" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Get Your Free Estimate
                </motion.a>
                <motion.a href="mailto:sally@randrtreeservice.com" className="btn btn-outline-white"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/mail.png" /> Email Us
                </motion.a>
              </motion.div>
            </div>

            <motion.div className="tt-pricing__img-wrap"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img
                src="/Firewood-Delivery-Transparent.jpg"
                alt="Professional tree service" loading="lazy"
              />
              <div className="tt-pricing__img-overlay" />
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── FAQ ── */}
      <InView className="tt-faq" id="tt-faq">
        <div className="container">
          <motion.div className="tt-faq-heading" style={{ marginBottom: 'var(--sp-3xl)' }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Knowledge Base</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Your Firewood Delivery Questions, Answered
            </motion.h2>
            <span className="red-bar" />
          </motion.div>

          <div className="tt-faq__grid">
            <motion.div className="tt-faq__list"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="faq-wrap" style={{ borderTop: '2px solid var(--gray-light)' }}>
                {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
              </div>
              <div style={{ marginTop: 'var(--sp-xl)', display: 'flex', gap: 'var(--sp-sm)' }}>
                <a href="tel:678-482-9994" className="btn btn-red">
                  Ask a Question
                </a>
              </div>
            </motion.div>

            {/* Sticky sidebar */}
            <motion.div className="tt-faq__sidebar"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="tt-faq__sidebar-card">
                <div className="tt-faq__sidebar-title">Ready to Get Started?</div>
                <div className="tt-faq__sidebar-sub">Free estimates · No obligation · Same-day response</div>
                <a href="tel:678-482-9994" className="tt-faq__sidebar-phone">
                  <div className="tt-faq__sidebar-phone-icon"><img alt="" className='phone-icon' src="/phone-call.png" /></div>
                  <div>
                    <div className="tt-faq__sidebar-phone-label">Call Us Directly</div>
                    <div className="tt-faq__sidebar-phone-num">678-482-9994</div>
                  </div>
                </a>
                <a href="mailto:sally@randrtreeservice.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginTop: '8px', transition: 'var(--t)' }}>
                  <span>✉</span> sally@randrtreeservice.com
                </a>
                <div className="tt-faq__sidebar-divider" />
                <div className="tt-faq__sidebar-areas">
                  <strong>Service Areas</strong>
                  Alpharetta, Atlanta, Buford, Cumming, Duluth, Gainesville,
                  Lawrenceville, Roswell, Suwanee &amp; all of North Georgia
                </div>
                <div style={{ marginTop: 'var(--sp-lg)' }}>
                  <a href="#tt-cta" className="btn btn-red"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={e => { e.preventDefault(); goto('#tt-cta'); }}>
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── SERVICE AREAS ── */}
      <InView className="tt-areas" id="tt-areas">
        <div className="container">
          <motion.div className="tt-areas__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Where We Work</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Service Areas in North Georgia
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p className="tt-pricing__desc" variants={fadeUp}>
                <span style={{ color: 'var(--gray-text)' }}>Our firewood delivery and pickup services cover North Georgia and surrounding areas, including:</span>{' '}
              </motion.p>
          </motion.div>
          <motion.div className="tt-areas__tags"
            variants={stagger} initial="hidden"
            whileInView="visible" viewport={{ once: true }}>
            {AREAS.map(a => (
              <motion.span key={a} className="tt-areas__tag" variants={fadeUp}>
                <span className="tt-areas__tag-dot" />{a}
              </motion.span>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: 'center' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <a href="tel:678-482-9994" className="btn btn-red">
              Call to Confirm Your Area
            </a>
          </motion.div>
        </div>
      </InView>

      {/* ── FINAL CTA ── */}
      <section id="tt-cta">
        <div className="tt-cta">
          <div className="container">
            <motion.div className="tt-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="tt-cta__heading" variants={fadeUp}>
                 Contact R & R Tree Service for Firewood Delivery or Pickup
                </motion.h2>
                <motion.p className="tt-cta__sub" variants={fadeUp}>
                  <br />
                  Whether you need firewood delivered to your doorstep or prefer to pick it up yourself, R & R Tree Service is North Georgia trusted choice.
                  <br /><br />
                  Call us today at 678-482-9994 or fill out our online quote form to schedule your firewood delivery or pickup.
                  <br /><br />
                  Enjoy the warmth, convenience, and reliability of North Georgia premier firewood supplier — R & R Tree Service.
                </motion.p>
              </div>
              <motion.div className="tt-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a href="mailto:sally@randrtreeservice.com" className="btn btn-outline-white"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/mail.png" /> Email Us
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}