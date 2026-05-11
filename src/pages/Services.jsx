// Services.jsx | R&R Tree Service
// Matches homepage design system: #D92227 red + #000000 black
// Content from: https://randrtreeservice.com/services/

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Services.css';

/* ── Animation helpers (same as Home.jsx) ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

/* ── Scroll-triggered section wrapper ── */
function InView({ children, className = '', id = '' }) {
  const ref = useRef(null);
  const vis = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      id={id} ref={ref} className={className}
      variants={stagger} initial="hidden" animate={vis ? 'visible' : 'hidden'}>
      {children}
    </motion.section>
  );
}

/* ── FAQ Item (reused from homepage) ── */
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

/* ═══════════════════════════════════════
   DATA
   ═══════════════════════════════════════ */

const QUICK_STRIPS = [
  { icon: '✂️', label: 'Tree Trimming' },
  { icon: '🪓', label: 'Tree Removal' },
  { icon: '🏗️', label: 'Crane Service' },
  { icon: '🪨', label: 'Stump Grinding' },
  { icon: '🚨', label: '24/7 Emergency' },
];

const SERVICES = [
  {
    id: 'tree-trimming',
    title: 'Tree Trimming & Pruning',
    tag: 'Residential & Commercial',
    badge: null,
    wide: false,
    img: '/Tree-Trimming.jpg',
    desc: 'Maintain healthy, beautiful, and safe trees with our professional trimming and pruning services.',
    bullets: [
      'Crown thinning and shaping to promote growth',
      'Removal of dead or hazardous limbs',
      'Seasonal pruning for ornamental and fruit-bearing trees',
      'Clearance around structures, walkways, and power lines',
    ],
    footer: 'Proper tree trimming prevents damage, promotes growth, and enhances the aesthetics of your property.',
    link: 'https://randrtreeservice.com/tree-trimming-in-atlanta/',
  },
  {
    id: 'tree-removal',
    title: 'Tree Removal Services',
    tag: 'All Sizes',
    badge: 'Most Requested',
    wide: false,
    img: '/Tree-Removal.jpg',
    desc: 'R&R Tree Service safely removes trees that are diseased, damaged, or obstructing your property.',
    bullets: [
      'Standard tree removal for small to large trees',
      'Emergency tree removal after storms or accidents',
      'Complete cleanup and debris removal',
      'Crane-assisted removal for large, hard-to-reach, or hazardous trees',
    ],
    footer: 'Our team ensures every removal is done efficiently while protecting your home, yard, and surrounding structures.',
    link: 'https://randrtreeservice.com/tree-removal-in-atlanta/',
  },
  {
    id: 'crane-service',
    title: 'Crane Tree Services (Removal & Rentals)',
    tag: 'Specialty Service',
    badge: 'Specialty',
    wide: true,
    img: '/Crane-Tree-Service.jpg',
    desc: 'For challenging projects, we offer crane-assisted tree services using specialized equipment operated by expert crews.',
    bullets: [
      'Crane tree removal for oversized or hazardous trees',
      'Crane rental services for other tree companies — large and small projects',
      'Expert operators to ensure safety and precision',
      'Perfect for properties with limited access or exceptionally tall trees',
    ],
    footer: 'Crane services are perfect for properties with limited access or for exceptionally tall or heavy trees.',
    link: 'https://randrtreeservice.com/crane-tree-removal/',
  },
  {
    id: 'land-clearing',
    title: 'Land Clearing',
    tag: 'Residential & Commercial',
    badge: null,
    wide: false,
    img: '/Land-Clearing.jpg',
    desc: 'Prepare your property for new construction, landscaping, or development with our land clearing solutions.',
    bullets: [
      'Brush and tree clearing',
      'Site preparation for residential or commercial projects',
      'Efficient debris removal and cleanup',
    ],
    footer: 'We make land clearing safe, fast, and hassle-free.',
    link: 'https://randrtreeservice.com/land-clearing/',
  },
  {
    id: 'stump-grinding',
    title: 'Tree Stump Grinding & Removal',
    tag: 'Full Cleanup Included',
    badge: null,
    wide: false,
    img: '/Stump-Grinding.jpg',
    desc: 'Eliminate unsightly or hazardous tree stumps with our professional stump grinding and removal services.',
    bullets: [
      'Stump grinding for a level, safe landscape',
      'Complete stump removal for construction or landscaping needs',
      'Removal of all debris after grinding',
    ],
    footer: 'Our team uses the latest equipment to remove stumps efficiently and cleanly.',
    link: 'https://randrtreeservice.com/stump-grinding/',
  },
  {
    id: 'firewood',
    title: 'Firewood Delivery',
    tag: 'Residential Use',
    badge: null,
    wide: true,
    img: '/Firewood-Delivery.jpg',
    desc: 'Keep your home warm and cozy with our premium kiln-dried firewood delivery services.',
    bullets: [
      'Cutting, splitting, and delivery of firewood',
      'Premium quality, seasoned wood',
      'Timely and reliable delivery for residential use',
    ],
    footer: "We provide firewood that's ready to burn and delivered right to your doorstep.",
    link: 'https://randrtreeservice.com/firewood-delivery/',
  },
  {
    id: 'mulch',
    title: 'Mulch Delivery',
    tag: 'Garden & Landscaping',
    badge: null,
    wide: false,
    img: '/Mulch-Delivery.jpg',
    desc: 'Enhance your landscaping with our mulch delivery and installation services.',
    bullets: [
      'Mulch spreading for gardens and flower beds',
      'Landscaping enhancement for soil protection and moisture retention',
      'Sustainable and high-quality mulch materials',
    ],
    footer: 'Mulch not only improves curb appeal but also protects plants and trees.',
    link: 'https://randrtreeservice.com/mulch-delivery/',
  },
  {
    id: 'retention-pond',
    title: 'Retention Pond Maintenance',
    tag: 'Residential & Commercial',
    badge: null,
    wide: false,
    img: '/Retention-Pond-Maintenance.jpg',
    desc: 'Ensure your retention ponds and water features are clean and fully functional year-round.',
    bullets: [
      'Debris removal and pond cleaning',
      'Vegetation management',
      'Ongoing maintenance programs for residential and commercial properties',
    ],
    footer: 'Our retention pond services help prevent flooding and keep your property safe.',
    link: 'https://randrtreeservice.com/retention-pond-maintenance/',
  },
];

const PROCESS_STEPS = [
  { num: '01',  title: 'Free Consultation', desc: 'Call or message us and describe your tree care needs. We respond promptly.' },
  { num: '02',  title: 'On-Site Estimate', desc: 'Our certified arborist visits your property to assess the job and provide a free quote.' },
  { num: '03',  title: 'Expert Execution', desc: 'Our fully insured crew arrives on time with the right equipment and completes the job safely.' },
  { num: '04',  title: 'Full Clean-Up', desc: "We remove all debris, clean your property, and ensure you're 100% satisfied before leaving." },
];

const WHY_POINTS = [
  { icon: '🏆', title: 'ISA Board-Certified Arborists', desc: 'Our certified arborists bring scientific expertise to every project for healthier trees and safer outcomes.' },
  { icon: '🛡️', title: 'Fully Licensed & Insured', desc: 'Complete peace of mind — we carry full liability insurance and all required licenses to protect you and your property.' },
  { icon: '🏗️', title: 'Crane-Assisted Removal', desc: 'Specialized crane equipment for large, difficult-to-reach, or hazardous trees that standard methods cannot safely handle.' },
  { icon: '🚫', title: 'No Subcontracting', desc: 'We never hire third parties. Our own trained crew handles your job from start to finish on every single project.' },
  { icon: '📋', title: 'Comprehensive Services', desc: 'From trimming to crane removal, stump grinding, firewood delivery, mulch, and retention pond maintenance — one call covers it all.' },
  { icon: '⭐', title: 'Customer Satisfaction', desc: 'Over 39 years of 5-star service in the Atlanta area with thousands of satisfied homeowners and businesses served.' },
];

const FAQS = [
  {
    q: 'What services do you offer?',
    a: 'We offer the following tree services and landscaping services in Atlanta, Georgia: Tree Trimming, Tree Removal, Land Clearing, Stump Grinding, Firewood, Mulch Delivery, Retention Pond Maintenance',
  },
  {
    q: 'What areas of Atlanta, Georgia do you serve?',
    a: 'Alpharetta, Atlanta, Avondale Estates, Buford, Cumming, Decatur, Duluth, Flowery Branch, Gainesville, Grayson, Lawrenceville, Lilburn, Norcross, Roswell, Snellville, Stone Mountain, Sugar Hill and Suwanee.',
  },
  {
    q: 'What safety protocols do the crews adhere to?',
    a: 'We develop, implement, and enforce a comprehensive health and safety program that includes written rules and safe work procedures for all tasks. We also provide safety training and instructions to employees that address the hazards associated with the tree work they perform.  This includes ensuring the proper use and maintenance of all safety equipment, personal protection equipment, machinery, and tools. Additionally, our team conducts an initial job site inspection and performs daily hazard assessments before the start of each workday to identify all existing hazards and other potentially dangerous conditions.',
  },
  {
    q: 'Can you provide references and/or previous customer reviews?',
    a: 'R&R Tree Service has been serving the community of Atlanta, Georgia for over 30 years. Our clients have great things to say about our service – read our testimonials here.',
  },
  {
    q: 'Will you provide a detailed, free estimate?',
    a: "We offer competitive pricing and free estimates for all of our clients! Call us today at 678-482-9994 for a free quote.",
  },
  {
    q: 'Will you remove all debris from my property?',
    a: "R&R Tree Service is a family-owned business that has been providing quality tree care in Atlanta for over 30 years. We pride ourselves on being a full-service tree company, so you can be assured that we will be on-site from start to finish to complete your job. We do not subcontract any work and own all of our machinery, which allows us to provide you with the best possible service at a competitive price. When we leave your job, we want you to be completely satisfied with our work. We’ll clean up all debris, and if you like, we can turn the shavings into mulch for your home or donate it to someone in the Atlanta community who can use it. We’re always happy to answer any questions you may have about our services, so please don’t hesitate to call us today.",
  },
];

const TRUST_BADGES = [
  { icon: '🏆', label: 'ISA Certified' },
  { icon: '🛡️', label: 'Licensed & Insured' },
  { icon: '👨‍👩‍👧', label: 'Family Owned' },
  { icon: '⭐', label: '39 Yrs Experience' },
  { icon: '🚨', label: '24/7 Emergency' },
];

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function Services() {
  const goto = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>

      {/* ── PAGE HERO ── */}
      <section className="svc-hero" aria-label="Services hero">
        <div className="svc-hero__bg" aria-hidden="true">
          <img
            src="/about-bg.jpg"
            alt="R&R Tree Service professional crew at work"
            loading="eager"
            fetchpriority="high"
          />
          <div className="svc-hero__overlay" />
        </div>
        {/* <div className="svc-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="svc-hero__content">

            {/* Breadcrumb */}
            <motion.div className="svc-hero__breadcrumb"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <a href="/">Home</a>
              <span className="svc-hero__breadcrumb-sep">›</span>
              <span className="svc-hero__breadcrumb-cur">Services</span>
            </motion.div>

            <motion.div className="svc-hero__eyebrow"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="svc-hero__eyebrow-line" />
              Full-Service Tree Care · North Georgia
            </motion.div>

            <motion.h1 className="svc-hero__title"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}>
              R&amp;R Tree Service Atlanta |<br />
              Tree Trimming, Removal,{' '}
              <span className="svc-hero__title-red">Stump Grinding &amp; More</span>
            </motion.h1>

            <motion.p className="svc-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              R&amp;R Tree Service in Atlanta, GA offers professional tree trimming, tree removal,
              stump grinding, land clearing, firewood &amp; mulch delivery, retention pond
              maintenance, and crane tree services.
            </motion.p>

            <motion.div className="svc-hero__ctas"
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}>
              <motion.a
                href="#contact"
                className="btn btn-red"
                onClick={e => { e.preventDefault(); goto('#contact'); }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Get a Free Quote →
              </motion.a>
              <motion.a
                href="tel:678-482-9994"
                className="btn btn-outline-white"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR (reuses homepage stats-bar styles) ── */}
      <section>
        <div className="stats-bar">
          <div className="container">
            <motion.div className="stats-bar__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              {[
                ['39+', 'Years of Experience'],
                ['8', 'Service Types'],
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

      {/* ── QUICK STRIP (reuses homepage strip styles) ── */}
      <section>
        <div className="strip">
          <div className="container">
            <motion.div className="strip__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true }}>
              {QUICK_STRIPS.map(s => (
                <motion.a key={s.label} href="#services-list" className="strip__item"
                  variants={fadeUp}
                  onClick={e => { e.preventDefault(); goto('#services-list'); }}>
                  <div className="strip__icon">{s.icon}</div>
                  <span className="strip__label">{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <InView className="svc-intro" id="services-intro">
        <div className="container">
          <motion.h2 className="svc-intro__title" variants={fadeUp}>
            R&amp;R Tree Service – Professional Tree &amp;{' '}
            <span>Land Services in Atlanta, GA</span>
          </motion.h2>
          <span className="red-bar red-bar--center" />
          <motion.p className="svc-intro__desc" variants={fadeUp}>
            R&amp;R Tree Service provides top-quality tree care and land management for residential
            and commercial properties throughout <strong>Atlanta, GA</strong>. Our certified arborists
            and experienced crews specialize in a wide range of services, ensuring safety, efficiency,
            and exceptional results for every project.
          </motion.p>
        </div>
      </InView>

      {/* ── SERVICE DETAIL CARDS ── */}
      <InView className="svc-cards-section" id="services-list">
        <div className="container">
          <motion.div className="svc-cards-grid" variants={stagger}>
            {SERVICES.map((svc) => (
              <motion.article
                key={svc.id}
                className={`svc-detail-card ${svc.wide ? 'svc-detail-card--wide' : ''}`}
                variants={fadeUp}
                id={svc.id}
                aria-label={svc.title}
              >
                {/* Image */}
                <div className="svc-detail-card__img-wrap">
                  <img
                    className="svc-detail-card__img"
                    src={svc.img}
                    alt={svc.title}
                    loading="lazy"
                  />
                  <div className="svc-detail-card__img-overlay" />
                  {svc.badge && (
                    <span className="svc-detail-card__img-badge">{svc.badge}</span>
                  )}
                  
                </div>

                {/* Body */}
                <div className="svc-detail-card__body">
                  <h3 className="svc-detail-card__title">{svc.title}</h3>
                  <p className="svc-detail-card__desc">{svc.desc}</p>

                  <ul className="svc-detail-card__list" aria-label={`${svc.title} highlights`}>
                    {svc.bullets.map((b) => (
                      <li key={b} className="svc-detail-card__list-item">
                        <span className="svc-detail-card__list-dot" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {svc.footer && (
                    <p style={{ fontSize: '0.83rem', color: 'var(--gray-text)', fontStyle: 'italic', lineHeight: '1.6' }}>
                      {svc.footer}
                    </p>
                  )}

                  <div className="svc-detail-card__footer">
                    <span className="svc-detail-card__tag">{svc.tag}</span>
                    <motion.a
                      href={svc.link}
                      className="svc-detail-card__btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}>
                      Learn More →
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── PROCESS SECTION ── */}
      <InView className="svc-process" id="our-process">
        <div className="container">
          <motion.div className="svc-process__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}
              style={{ color: 'var(--red-light)' }}>
              How It Works
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white"
              variants={fadeUp}>
              Our Simple 4-Step Process
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp}
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
              From first call to final clean-up — we make professional tree care easy and stress-free.
            </motion.p>
          </motion.div>

          <motion.div className="svc-process__steps" variants={stagger}>
            {PROCESS_STEPS.map((step) => (
              <motion.div key={step.num} className="svc-process__step" variants={fadeUp}>
                <div className="svc-process__step-num">
                  {step.num}
                </div>
                <h3 className="svc-process__step-title">{step.title}</h3>
                <p className="svc-process__step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── WHY CHOOSE US + FAQ ── */}
      <InView className="svc-why" id="why-choose-us">
        <div className="container">
          <div className="svc-why__grid">

            {/* Left — Why points */}
            <div className="svc-why__left">
              <motion.span className="eyebrow" variants={fadeUp}>Why Choose Us</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Why Choose R&amp;R Tree Service in Atlanta, GA?
              </motion.h2>
              <span className="red-bar" />

              <motion.div className="svc-why__points" variants={stagger}>
                {WHY_POINTS.map((p) => (
                  <motion.div key={p.title} className="svc-why__point" variants={fadeUp}>
                    <div>
                      <div className="svc-why__point-title">{p.title}</div>
                      <div className="svc-why__point-desc">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="svc-why__ctas" variants={fadeUp}>
                <motion.a href="#contact" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-black"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Call Us Today
                </motion.a>
              </motion.div>
            </div>

            {/* Right — FAQ */}
            <motion.div className="svc-why__faq" variants={fadeUp} custom={0.2}>
              <span className="svc-why__faq-heading">Frequently Asked Questions</span>
              <div className="faq-wrap">
                {FAQS.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </InView>

      {/* ── CTA BANNER ── */}
      <section>
        <div className="svc-cta" id="contact">
          <div className="container">
            <motion.div className="svc-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="svc-cta__heading" variants={fadeUp}>
                  Ready to Get Started?<br />Call for a Free Quote Today.
                </motion.h2>
                <motion.p className="svc-cta__sub" variants={fadeUp}>
                  Licensed · Insured · ISA Certified · Serving North Georgia Since 1986
                </motion.p>
              </div>
              <motion.div className="svc-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a
                  href="mailto:sally@randrtreeservice.com"
                  className="btn btn-outline-white"
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