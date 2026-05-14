// About.jsx | R&R Tree Service
// About R&R Tree Service — Family-Owned Tree Experts in Buford, GA Since 1986
// Exact content from: https://randrtreeservice.com/about-us/
// Design system: #D92227 red + #000000 black

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './About.css';

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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
function ContactForm() {
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
        We'll be in touch within 24 hours. For urgent needs call{' '}
        <a href="tel:678-482-9994" style={{ color: 'var(--red-light)' }}>678-482-9994</a>.
      </p>
    </motion.div>
  );

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} noValidate>
      <h3 className="form-title">Contact Us</h3>
      <p className="form-sub">We can't wait to make your property dreams a reality!</p>
      <div className="form-group">
        <label className="form-label" htmlFor="ab-name">Name *</label>
        <input id="ab-name" type="text" className="form-input" placeholder="Your name" required value={form.name} onChange={ch('name')} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="ab-email">Email *</label>
          <input id="ab-email" type="email" className="form-input" placeholder="you@example.com" required value={form.email} onChange={ch('email')} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="ab-phone">Phone</label>
          <input id="ab-phone" type="tel" className="form-input" placeholder="(678) 000-0000" value={form.phone} onChange={ch('phone')} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="ab-msg">Tell us about your tree project *</label>
        <textarea id="ab-msg" className="form-textarea" placeholder="Describe your project, tree size, urgency…" required value={form.message} onChange={ch('message')} />
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

const HERO_SERVICES = [
  { icon: '✂️', name: 'Tree Trimming & Removal', sub: 'Safe & Efficient' },
  { icon: '🌿', name: 'Land Clearing', sub: 'Thorough, Licensed, & Insured' },
  { icon: '🏗️', name: 'Crane Rental Services', sub: 'Tackle hard-to-reach trees' },
  { icon: '🪵', name: 'Kiln-Dried Firewood & Mulch', sub: 'Upcycled by-products for your home' },
  { icon: '🚨', name: '24-Hour Emergency Service', sub: '24/7 assistance after severe storms' },
];

const DIFFERENTIATORS = [
  // {
  //   title: 'ISA Board-Certified Arborists',
  //   desc: 'Our team includes ISA-certified arborists who bring deep scientific knowledge to every job — ensuring your trees receive expert care that goes beyond surface-level trimming.',
  // },
  {
    title: 'Family-Owned & Operated',
    desc: "R&R was founded on a single principle: exceptional service beyond the minimum requirement. As a family business, we treat your property exactly as we'd treat our own.",
  },
  {
    title: 'Zero Subcontracting',
    desc: "We never hire third parties. Every job is performed by our own trained, certified crew — from the foreman to the groundsmen. You get consistent, accountable quality every time.",
  },
  {
    title: 'Licensed, Bonded & Insured',
    desc: 'Youre fully protected. We carry comprehensive liability insurance and all required licenses so that every project — large or small — gives you complete peace of mind.',
  },
  {
    title: 'Community-Rooted Since 1986',
    desc: 'Weve been serving the Buford area for over 40 years. Our roots run deep in North Georgia communities, and our reputation is built on decades of trust and satisfied neighbors.',
  },
  {
    title: 'Unparalleled Customer Service',
    desc: 'From the first call to the final cleanup, we prioritize your experience. Our skilled foremen, groundsmen, and office staff are dedicated to exceeding your expectations every time.',
  },
];

const VALUES = [
  {
    title: 'Safety First, Always',
    desc: 'Every job begins with a comprehensive safety assessment. Our crew is trained to strict industry protocols, protecting you, your property, and our team.',
  },
  {
    title: 'Honest, Transparent Communication',
    desc: 'No surprises. We provide detailed, upfront quotes and keep you informed throughout the project — from assessment to final cleanup.',
  },
  {
    title: 'Complete Job, Complete Cleanup',
    desc: "We're a full-service company from start to finish. We clean up all debris and can convert wood shavings into mulch for your landscape.",
  },
  {
    title: 'Respect for Your Landscape',
    desc: "We take extraordinary care to minimize impact on your lawn, garden, and surrounding structures. We treat your property as if it were our own.",
  },
];

const CERTIFICATIONS = [
  // { icon: '✓', label: 'ISA Board-Certified Arborist' },
  { icon: '✓', label: 'Licensed & Bonded' },
  { icon: '✓', label: 'Fully Insured' },
  // { icon: '✓', label: 'GA Assoc. of Arborists' },
  { icon: '✓', label: 'Tree Care Industry Assoc.' },
  { icon: '✓', label: 'No Subcontracting' },
];

const COMMITMENT_STEPS = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We start with a detailed on-site assessment. Our experienced team of crew members listens to your goals, evaluates your trees, and answers all your questions.',
  },
  {
    num: '02',
    title: 'Honest, Detailed Quote',
    desc: 'You receive a clear, itemized estimate with no hidden fees — just straightforward pricing and a plan tailored to your specific needs.',
  },
  {
    num: '03',
    title: 'Expert Execution',
    desc: 'Our own crew arrives with the right equipment. We follow strict safety protocols, protect your property, and work efficiently.',
  },
  {
    num: '04',
    title: 'Spotless Cleanup & Follow-Up',
    desc: "We don't leave until your yard is immaculate. All debris is removed, and we follow up to ensure your complete satisfaction.",
  },
];

const REVIEWS = [
  {
    text: 'For the past eight years, R and R Tree Service has meticulously tended to our landscape needs. From pine tree removal to diagnosing damaged or diseased trees, I fully and completely trust this honest and hard working crew. They estimate fairly and give competitive prices. It\'s reassuring to know they will "take care of business".',
    name: 'Lawanna B. St Clair',
    loc: 'Lilburn, Georgia',
    wide: true,
  },
  {
    text: 'We have used R and R Tree Service since we moved to the North Georgia area over 16 years ago. They are professional, dependable, and do an excellent job. Their crane service is a definite advantage — there is never any damage to surrounding trees. We recommend them often to friends and neighbors.',
    name: 'John & Carol H.',
    loc: 'Alpharetta, GA',
    wide: false,
  },
  {
    text: 'Within 24-hours of being contacted, Randy and his team gave me a quote and removed two mature trees uprooted during Hurricane Helene. They arrived at the crack of dawn, addressed this very threatening situation, and finished before lunch. True pros.',
    name: 'Jane B.',
    loc: 'Georgia',
    wide: false,
  },
];

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */
export default function About() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>

      {/* ── HERO ── */}
      <section className="ab-hero" aria-label="About R&R Tree Service">
        <div className="ab-hero__bg" aria-hidden="true">
          <img
            src="/about-bg-2.jpg"
            alt="R&R Tree Service professional crew in North Georgia"
            loading="eager" fetchpriority="high"
          />
          <div className="ab-hero__overlay" />
        </div>
        {/* <div className="ab-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="ab-hero__grid">

            {/* Left */}
            <div>
              <motion.div className="ab-hero__breadcrumb"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <a href="/">Home</a>
                <span className="ab-hero__breadcrumb-sep">›</span>
                <span className="ab-hero__breadcrumb-cur">About Us</span>
              </motion.div>

              <motion.div className="ab-hero__eyebrow"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <span className="ab-hero__eyebrow-line" />
                Family-Owned · Buford, GA · Est. 1986
              </motion.div>

              <motion.h1 className="ab-hero__title"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35 }}>
                About R&amp;R
                <span>Tree Service</span>
              </motion.h1>

              <motion.p className="ab-hero__subtitle"
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}>
                R&amp;R Tree Service sets a higher standard for tree removal and trimming in
                North Georgia — delivering expert, family-owned tree care for over 40 years.
              </motion.p>

              <motion.div className="ab-hero__ctas"
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}>
                <motion.a href="#ab-contact" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#ab-contact'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote →
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Call Us Today
                </motion.a>
              </motion.div>

              <motion.div className="ab-hero__trust"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                {['Licensed & Insured', '40 Years Experience', 'Family Owned'].map(t => (
                  <div key={t} className="ab-hero__trust-item">
                    <span className="ab-hero__trust-dot">✓</span>{t}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — what we do card */}
            {/* <motion.div className="ab-hero__card"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}>
              <div className="ab-hero__card-head">
                <div className="ab-hero__card-head-title">What We Do</div>
                <div className="ab-hero__card-head-sub">Full-service tree care for North Georgia</div>
              </div>
              <div className="ab-hero__card-body">
                {HERO_SERVICES.map((s, i) => (
                  <div key={s.name}>
                    <a href="/services" className="ab-hero__card-item">
                      <div className="ab-hero__card-icon">{s.icon}</div>
                      <div>
                        <div className="ab-hero__card-service-name">{s.name}</div>
                        <div className="ab-hero__card-service-sub">{s.sub}</div>
                      </div>
                    </a>
                    {i < HERO_SERVICES.length - 1 && <div className="ab-hero__card-divider" />}
                  </div>
                ))}
              </div>
            </motion.div> */}

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
              {[
                ['1986', 'Est. in Buford, GA'],
                ['40', 'Years of Service'],
                ['100%', 'Owner Operated'],
                ['24/7', 'Emergency Ready'],
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

      {/* ── SERVICES ICON STRIP ── */}
      <section>
        <div className="strip">
          <div className="container">
            <motion.div className="strip__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true }}>
              {[
                { icon: '✂️', label: 'Tree Trimming' },
                { icon: '🪓', label: 'Tree Removal' },
                { icon: '🏗️', label: 'Crane Service' },
                { icon: '🪨', label: 'Stump Grinding' },
                { icon: '🌿', label: 'Land Clearing' },
              ].map(s => (
                <motion.a key={s.label} href="/services" className="strip__item" variants={fadeUp}>
                  <div className="strip__icon">{s.icon}</div>
                  <span className="strip__label">{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <InView className="ab-story" id="ab-story">
        <div className="container">
          <div className="ab-story__grid">

            {/* Images */}
            <motion.div className="ab-story__images" variants={fadeUp}>
              <div className="ab-story__img-main">
                <img
                  src="/Tree-Removal-Process.jpg"
                  alt="R&R Tree Service arborist at work" loading="lazy"
                />
              </div>
              <div className="ab-story__img-sec">
                <img
                  src="/about-image.jpg"
                  alt="Beautiful Georgia trees" loading="lazy"
                />
              </div>
              <div className="ab-story__year-badge">
                <span className="ab-story__year-num">40</span>
                <span className="ab-story__year-lbl">Years of<br />Service</span>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Our Story</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Why Choose R&amp;R Tree Service?
              </motion.h2>
              <span className="red-bar" />

              <motion.div className="ab-story__text" variants={stagger}>
                <motion.p variants={fadeUp}>
                  Thanks for taking the time to learn about R&amp;R Tree Service — we're glad you're here!
                  We know you've got a lot of options when it comes to tree care services, so here's why
                  our team is a cut above.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Our company was founded on the practice of providing exceptional service that is beyond
                  the minimum requirement. R&amp;R is a <strong>family-owned and-operated business</strong>{' '}
                  that has been serving the <strong>North Georgia area</strong> since 1986.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We take pride in our work and go to great lengths to provide each client with an
                  unparalleled customer service experience. We treat your property like it is our own,
                  and we have surrounded ourselves with an expert team of <strong>skilled, certified,
                  and knowledgeable</strong> foremen, groundsmen, and office staff.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We'd love the opportunity to serve you and provide for your{' '}
                  <strong>tree care needs</strong>.
                </motion.p>
              </motion.div>

              <motion.div className="ab-story__ctas" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Call Us Today
                </motion.a>
                <motion.a href="#ab-contact" className="btn btn-outline-black"
                  onClick={e => { e.preventDefault(); goto('#ab-contact'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Get a Free Quote
                </motion.a>
              </motion.div>
            </div>

          </div>
        </div>
      </InView>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <InView className="ab-diff" id="ab-diff">
        <div className="container">
          <motion.div className="ab-diff__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}
              style={{ color: 'var(--red-light)' }}>
              What Sets Us Apart
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white"
              variants={fadeUp}>
              The R&amp;R Tree Service Difference
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp}
              style={{ color: 'rgba(255,255,255,0.52)', fontSize: '1rem', lineHeight: '1.75' }}>
              We don't just remove trees — we build lasting relationships with our clients,
              backed by decades of experience, genuine expertise, and a commitment to your satisfaction.
            </motion.p>
          </motion.div>

          <motion.div className="ab-diff__grid" variants={stagger}>
            {DIFFERENTIATORS.map(d => (
              <motion.div key={d.title} className="ab-diff-card" variants={fadeUp}>
                {/* <div className="ab-diff-card__icon">{d.icon}</div> */}
                <h3 className="ab-diff-card__title">{d.title}</h3>
                <p className="ab-diff-card__desc">{d.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InView>
      

      {/* ── CORE VALUES + CERTIFICATIONS ── */}
      <InView className="ab-values" id="ab-values">
        <div className="container">
          <div className="ab-values__grid">

            {/* Values list */}
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Our Core Values</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                How We Treat Every Client &amp; Every Property
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp}
                style={{ color: 'var(--gray-text)', lineHeight: '1.8', fontSize: '1rem', marginBottom: 'var(--sp-md)' }}>
                Our values aren't posted on a wall — they're demonstrated on every job site,
                in every quote, and in every conversation with our clients.
              </motion.p>

              <motion.div className="ab-values__list" variants={stagger}>
                {VALUES.map(v => (
                  <motion.div key={v.title} className="ab-values__item" variants={fadeUp}>
                    {/* <div className="ab-values__item-icon">{v.icon}</div> */}
                    <div>
                      <div className="ab-values__item-title">{v.title}</div>
                      <div className="ab-values__item-desc">{v.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right — image + certifications */}
            <motion.div className="ab-values__right" variants={fadeUp} custom={0.2}>
              <div className="ab-values__img-wrap">
                <img
                  src="/about-image2.jpg"
                  alt="R&R Tree Service crew working" loading="lazy"
                />
                <div className="ab-values__img-overlay" />
                <div className="ab-values__img-label">
                  Expert Crew · Every Single Job
                </div>
              </div>

              <motion.div variants={stagger}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--black)', marginBottom: 'var(--sp-md)', paddingBottom: '10px', borderBottom: '2px solid var(--red)', display: 'inline-block' }}>
                  Our Credentials
                </h3>
                <div className="ab-values__certs">
                  {CERTIFICATIONS.map(c => (
                    <motion.span key={c.label} className="ab-values__cert" variants={fadeUp}>
                      <span className="ab-values__cert-icon">{c.icon}</span>
                      {c.label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </InView>

      {/* ── TESTIMONIALS ── */}
      <InView className="ab-reviews" id="ab-reviews">
        <div className="container">
          <motion.div className="ab-reviews__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}
              style={{ color: 'var(--red-light)' }}>
              Client Reviews
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white"
              variants={fadeUp}>
              What Our Clients Say
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp}
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
              Over 40 years of 5-star service — hear directly from North Georgia homeowners.
            </motion.p>
          </motion.div>

          <motion.div className="ab-reviews__grid" variants={stagger}>
            {REVIEWS.map(r => (
              <motion.div
                key={r.name}
                className={`ab-review-card ${r.wide ? 'ab-review-card--wide' : ''}`}
                variants={fadeUp}>
                <div className="ab-review-card__quote-mark">"</div>
                <div className="ab-review-card__stars">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <blockquote className="ab-review-card__text">"{r.text}"</blockquote>
                <div className="ab-review-card__author">
                  <div className="ab-review-card__avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="ab-review-card__name">{r.name}</div>
                    <div className="ab-review-card__loc">📍 {r.loc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div style={{ textAlign: 'center', marginTop: 'var(--sp-2xl)' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <a href="/testimonials" className="btn btn-outline-white">
              Read All Reviews →
            </a>
          </motion.div>
        </div>
      </InView>

      {/* ── OUR COMMITMENT / PROCESS ── */}
      <InView className="ab-commit" id="ab-commit">
        <div className="container">
          <div className="ab-commit__grid">
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Our Promise</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Our Commitment to You
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp}
                style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-sm)' }}>
                Every R&amp;R Tree Service project follows the same four-step commitment to excellence.
                From your first call to the final cleanup, you experience the R&amp;R standard.
              </motion.p>

              <motion.div className="ab-commit__steps" variants={stagger}>
                {COMMITMENT_STEPS.map(s => (
                  <motion.div key={s.num} className="ab-commit__step" variants={fadeUp}>
                    <div className="ab-commit__step-num">{s.num}</div>
                    <div>
                      <div className="ab-commit__step-title">{s.title}</div>
                      <div className="ab-commit__step-desc">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div style={{ display: 'flex', gap: 'var(--sp-sm)', flexWrap: 'wrap', marginTop: 'var(--sp-xl)' }} variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Get Your Free Consultation
                </motion.a>
              </motion.div>
            </div>

            <motion.div className="ab-commit__right-img"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img
                src="/tree-removal-Benefits1.jpg"
                alt="R&R Tree Service professional crew" loading="lazy"
              />
              <div className="ab-commit__right-overlay" />
              <div className="ab-commit__right-label">
                <span>Serving North Georgia Since 1986</span>
              </div>
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── CONTACT SECTION ── */}
      <InView className="ab-contact" id="ab-contact">
        <div className="container">
          <div className="ab-contact__grid">

            {/* Left info */}
            <div>
              <motion.span className="eyebrow" variants={fadeUp}
                style={{ color: 'var(--red-light)' }}>
                Reach Out
              </motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white"
                variants={fadeUp}>
                We Can't Wait to Make Your Property Dreams a Reality
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="ab-contact__desc" variants={fadeUp}>
                Ready to experience the R&amp;R Tree Service difference? Reach out today for your
                free, no-obligation estimate. We respond to every inquiry within 24 hours.
              </motion.p>

              <motion.div className="ab-contact__info-list" variants={stagger}>
                {[
                  { img:'/location-pin.png', label: 'Address', val: '1381 Buford Highway, Buford, GA 30518', href: null },
                  { img:'/mail.png', label: 'Email', val: 'sally@randrtreeservice.com', href: 'mailto:sally@randrtreeservice.com' },
                  { img:'/phone-call.png', label: 'Phone', val: '678-482-9994', href: 'tel:678-482-9994' },
                  { img:'/printer.png', label: 'Fax', val: '678-482-9996', href: 'tel:678-482-9996' },
                ].map(c => (
                  <motion.a
                    key={c.label}
                    href={c.href || '#'}
                    className="ab-contact__info-row"
                    variants={fadeUp}
                    style={!c.href ? { cursor: 'default', pointerEvents: 'none' } : {}}
                    onClick={c.href ? undefined : e => e.preventDefault()}>
                    <div className="ab-contact__info-icon">
                        <img src={c.img} alt={c.label} />
                    </div>
                    <div>
                      <div className="ab-contact__info-label">{c.label}</div>
                      <div className="ab-contact__info-value">{c.val}</div>
                    </div>
                  </motion.a>
                ))}

                {/* Facebook */}
                <motion.a
                  href="https://www.facebook.com/R-R-Tree-Service-136691577377"
                  target="_blank" rel="noopener noreferrer"
                  className="ab-contact__info-row" variants={fadeUp}>
                  <div className="ab-contact__info-icon">f</div>
                  <div>
                    <div className="ab-contact__info-label">Follow Us</div>
                    <div className="ab-contact__info-value">Facebook — R&R Tree Service</div>
                  </div>
                </motion.a>
              </motion.div>
            </div>

            {/* Contact form */}
            <motion.div className="ab-contact__form-box"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </InView>

      {/* ── FINAL CTA ── */}
      <section>
        <div className="ab-cta">
          <div className="container">
            <motion.div className="ab-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="ab-cta__heading" variants={fadeUp}>
                  Ready to Work With<br />North Georgia's Best?
                </motion.h2>
                <motion.p className="ab-cta__sub" variants={fadeUp}>
                  Family-Owned · Licensed &amp; Insured · Free Estimates · Since 1986
                </motion.p>
              </div>
              <motion.div className="ab-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a href="#ab-contact" className="btn btn-outline-white"
                  onClick={e => { e.preventDefault(); goto('#ab-contact'); }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}