// Home.jsx | R&R Tree Service
// Olive green + orange palette. Stitch-inspired layout with bold full-bleed sections.
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Home.css';

/* ── Animation helpers ── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25,0.46,0.45,0.94] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

function InView({ children, className = '', id = '' }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section id={id} ref={ref} className={className}
      variants={stagger} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
      {children}
    </motion.section>
  );
}

/* ── Data ── */
const STRIPS = [
  { icon: '✂️', label: 'Tree Trimming', href: '#services' },
  { icon: '🪓', label: 'Tree Removal', href: '#services' },
  { icon: '🏗️', label: 'Crane Service', href: '#services' },
  { icon: '🪨', label: 'Stump Grinding', href: '#services' },
  { icon: '🚨', label: '24/7 Emergency', href: '#contact' },
];

const SERVICES = [
  { icon: '✂️', title: 'Tree Trimming', desc: 'Improve health, promote growth, and enhance landscape beauty with precise ISA-standard trimming.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80', layout: 'tall', badge: null },
  { icon: '🪓', title: 'Tree Removal', desc: 'Safe, efficient removal of hazardous or unwanted trees with full cleanup included.', img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=900&q=80', layout: 'wide', badge: 'Most Popular' },
  { icon: '🪨', title: 'Stump Grinding', desc: 'Reclaim your yard space and eliminate tripping hazards with our thorough stump removal services.', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80', layout: 'short', badge: null },
  { icon: '🏗️', title: 'Crane Tree Service', desc: 'Specialized crane equipment for trees too large or dangerous to remove conventionally.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80', layout: 'short', badge: 'Specialty' },
  { icon: '🌿', title: 'Land Clearing', desc: 'Prepare your property for construction or landscaping with our efficient clearing services.', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80', layout: 'wide', badge: null },
  { icon: '🪵', title: 'Firewood Delivery', desc: 'Kiln-dried firewood delivered right to your door for hassle-free cozy comfort.', img: 'https://images.unsplash.com/photo-1464194175478-5b79c83a6e4f?w=700&q=80', layout: 'tall', badge: null },
  { icon: '🌊', title: 'Mulch Delivery', desc: 'Improve soil health, suppress weeds, and beautify garden beds with quality mulch.', img: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=700&q=80', layout: 'short', badge: null },
  { icon: '💧', title: 'Retention Pond Maintenance', desc: 'Ensure proper drainage, prevent erosion and keep your pond functioning optimally year-round.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80', layout: 'wide', badge: null },
];

const ABOUT_FEATURES = [
  { icon: '🏆', title: 'ISA Board-Certified', desc: 'Arborist on staff for expert tree care' },
  { icon: '🛡️', title: 'Licensed & Insured', desc: 'Fully bonded for your complete safety' },
  { icon: '🚫', title: 'No Subcontracting', desc: 'Our own crew from start to finish' },
  { icon: '🌳', title: 'GAA Member', desc: 'Georgia Association of Arborists member' },
];

const FAQS = [
  { q: 'What services do you offer?', a: 'We offer tree trimming, tree removal, land clearing, stump grinding, firewood delivery, mulch delivery, retention pond maintenance, and crane tree service throughout North Atlanta and surrounding areas.' },
  { q: 'Do you remove all debris after the job?', a: "Yes — we're a full-service company, on-site from start to finish. We clean up all debris, and can turn shavings into mulch for your home or donate to someone in the community who can use it." },
  { q: 'What safety protocols do you follow?', a: 'We have a comprehensive safety program with written procedures, daily safety training, proper PPE, equipment safety policies, and daily hazard assessments before starting each workday.' },
  { q: 'Will you provide a free estimate?', a: 'Absolutely. We offer competitive pricing and free estimates for all clients. Call 678-482-9994 or fill out our contact form today.' },
];

const TESTIMONIALS = [
  { text: "For the past eight years, R and R Tree Service has meticulously tended to our landscape needs. From pine tree removal to diagnosing damaged or diseased trees, I fully and completely trust this honest and hard working crew. They estimate fairly and give competitive prices. It's reassuring to know they will 'take care of business'.", name: 'Lawanna B. St Clair', loc: 'Lilburn, Georgia', wide: true },
  { text: "We have used R and R Tree Service since we moved to the Atlanta area over 16 years ago. They are professional, dependable, and do an excellent job. Their crane service is a definite advantage — there is never any damage to surrounding trees.", name: 'John and Carol H.', loc: 'Alpharetta, GA', wide: false },
  { text: "R&R recently removed more than a dozen trees from our heavily wooded lot. The team showed up on time and did an incredibly safe and thorough job. We would not hesitate to call them back.", name: 'Michael & Jennifer L.', loc: 'Lawrenceville, GA', wide: false },
  { text: "Within 24-hours of being contacted, Randy and his team gave me a quote and removed two mature trees uprooted during Hurricane Helene. They arrived at the crack of dawn, addressed this very threatening situation, and finished before lunch. True pros.", name: 'Jane B.', loc: 'Georgia', wide: false },
];

const AREAS = ['Buford','Alpharetta','Atlanta','Avondale Estates','Cumming','Decatur','Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville','Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee'];

/* ── FAQ item ── */
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
            transition={{ duration: 0.28 }}
            style={{ overflow: 'hidden' }}>
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Contact form ── */
function ContactForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', message:'' });
  const [sent, setSent] = useState(false);
  const ch = k => e => setForm({ ...form, [k]: e.target.value });
  if (sent) return (
    <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
      style={{ textAlign:'center', padding:'var(--sp-3xl)', display:'flex', flexDirection:'column', alignItems:'center', gap:'var(--sp-md)' }}>
      <div style={{ fontSize:'3rem' }}>✅</div>
      <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.4rem', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--white)' }}>
        Thank You!
      </h3>
      <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.9rem' }}>
        We'll be in touch within 24 hours. For urgent needs call{' '}
        <a href="tel:678-482-9994" style={{ color:'var(--orange-light)' }}>678-482-9994</a>.
      </p>
    </motion.div>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} noValidate>
      <h3 className="form-title">Get Your Free Quote</h3>
      <p className="form-sub">We'll respond within 24 hours · No obligation</p>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="f-name">Full Name *</label>
          <input id="f-name" type="text" className="form-input" placeholder="John Smith" required value={form.name} onChange={ch('name')} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="f-phone">Phone *</label>
          <input id="f-phone" type="tel" className="form-input" placeholder="(678) 000-0000" required value={form.phone} onChange={ch('phone')} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="f-email">Email</label>
        <input id="f-email" type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={ch('email')} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="f-service">Service Needed</label>
        <select id="f-service" className="form-select" value={form.service} onChange={ch('service')}>
          <option value="">Select a service…</option>
          <option>Tree Trimming</option>
          <option>Tree Removal</option>
          <option>Land Clearing</option>
          <option>Stump Grinding</option>
          <option>Crane Tree Service</option>
          <option>Firewood Delivery</option>
          <option>Mulch Delivery</option>
          <option>Retention Pond Maintenance</option>
          <option>Emergency Service</option>
          <option>Other / Not Sure</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="f-msg">Project Details</label>
        <textarea id="f-msg" className="form-textarea" placeholder="Describe the trees, location, any urgency…" value={form.message} onChange={ch('message')} />
      </div>
      <motion.button type="submit" className="btn btn-orange form-submit"
        whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}>
        Request My Free Quote →
      </motion.button>
      <p className="form-note">By submitting you agree to be contacted by R&R Tree Service. No spam, ever.</p>
    </form>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function Home() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main id="home">

      {/* ── HERO ── */}
      <section className="hero" id="hero" aria-label="Hero">
        <div className="hero__bg" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=85"
               alt="Professional tree service work" loading="eager" fetchpriority="high" />
          <div className="hero__overlay" />
        </div>

        <div className="container">
          <div className="hero__grid">

            {/* Left */}
            <div>
              <motion.div className="hero__eyebrow"
                initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                transition={{ duration:0.6, delay:0.2 }}>
                <span className="hero__eyebrow-line" />
                Buford, GA · Serving North Georgia Since 1986
              </motion.div>

              <motion.h1 className="hero__title"
                initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.75, delay:0.35 }}>
                Tree Removal &amp;<br />Trimming in
                <span>Atlanta, GA</span>
              </motion.h1>

              <motion.p className="hero__subtitle"
                initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.65, delay:0.5 }}>
                R&amp;R Tree Service offers professional tree removal, trimming, stump grinding,
                mulching, and more. Licensed, bonded &amp; insured for your complete safety.
              </motion.p>

              <motion.div className="hero__ctas"
                initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:0.65 }}>
                <motion.a href="#contact" className="btn btn-orange"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Get a Free Quote →
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  📞 678-482-9994
                </motion.a>
              </motion.div>

              <motion.div className="hero__trust"
                initial={{ opacity:0 }} animate={{ opacity:1 }}
                transition={{ duration:0.6, delay:0.8 }}>
                {['ISA Certified Arborist','Licensed & Insured','39+ Yrs Experience','Free Estimates'].map(t => (
                  <div key={t} className="hero__trust-item">
                    <span className="hero__trust-check">✓</span>
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right card */}
            <motion.div className="hero__card"
              initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
              transition={{ duration:0.75, delay:0.5 }}>
              <div className="hero__card-head">
                <div className="hero__card-head-title">Get In Touch</div>
                <div className="hero__card-head-sub">Available 24/7 for emergency service</div>
              </div>
              <div className="hero__card-body">
                <a href="tel:678-482-9994" className="hero__card-phone">
                  <div className="hero__card-phone-icon">📞</div>
                  <div>
                    <div className="hero__card-phone-label">Call Us Directly</div>
                    <div className="hero__card-phone-num">678-482-9994</div>
                  </div>
                </a>
                <div className="hero__card-divider" />
                <a href="mailto:sally@randrtreeservice.com" className="hero__card-email">
                  <span>✉</span><span>sally@randrtreeservice.com</span>
                </a>
                <div className="hero__card-divider" />
                <div className="hero__card-addr">
                  <span>📍</span>
                  <span>1381 Buford Highway, Buford, GA 30518</span>
                </div>
                <motion.a href="#contact" className="btn btn-orange hero__card-cta"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}>
                  Request Free Estimate
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="hero__scroll" onClick={() => goto('#stats')} aria-hidden="true">
          <span className="hero__scroll-label">Scroll</span>
          <span className="hero__scroll-arrow">▼</span>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section id="stats">
        <div className="stats-bar">
          <div className="container">
            <motion.div className="stats-bar__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once:true, margin:'-60px' }}>
              {[['39+','Years of Experience'],['5,000+','Trees Removed'],['100%','Owner Operated'],['24/7','Emergency Service']].map(([n,l]) => (
                <motion.div key={l} className="stats-bar__item" variants={fadeUp}>
                  <span className="stats-bar__num">{n}</span>
                  <span className="stats-bar__lbl">{l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section>
        <div className="services-strip">
          <div className="container">
            <motion.div className="services-strip__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once:true }}>
              {STRIPS.map(s => (
                <motion.a key={s.label} href={s.href} className="services-strip__item"
                  variants={fadeUp}
                  onClick={e => { e.preventDefault(); goto(s.href); }}>
                  <div className="services-strip__icon" aria-hidden="true">{s.icon}</div>
                  <span className="services-strip__label">{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <InView className="about" id="about">
        <div className="container">
          <div className="about__grid">

            <motion.div className="about__images" variants={fadeUp}>
              <div className="about__img-main">
                <img src="https://images.unsplash.com/photo-1609429019995-8c40f49535a5?w=700&q=80"
                     alt="Arborist trimming trees" loading="lazy" />
              </div>
              <div className="about__img-secondary">
                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80"
                     alt="Georgia trees" loading="lazy" />
              </div>
              <div className="about__years-badge">
                <span className="about__years-num">39</span>
                <span className="about__years-lbl">Years of<br />Service</span>
              </div>
            </motion.div>

            <div>
              <motion.span className="eyebrow" variants={fadeUp}>About R&R Tree Service</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Atlanta's Trusted Tree Care Experts Since 1986
              </motion.h2>
              <span className="orange-bar" />

              <motion.p variants={fadeUp}
                style={{ color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'var(--sp-sm)' }}>
                R&amp;R Tree Service has been a cornerstone of quality tree services for over three decades.
                We're more than just a tree service — we're your neighbors, dedicated to preserving the
                beauty and safety of your property.
              </motion.p>
              <motion.p variants={fadeUp}
                style={{ color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'var(--sp-md)' }}>
                We do not subcontract any work, own all our machinery, and have our own ISA board-certified
                arborist on staff. Every job is handled by our trained crew from start to complete cleanup.
              </motion.p>

              <motion.div className="about__features" variants={stagger}>
                {ABOUT_FEATURES.map(f => (
                  <motion.div key={f.title} className="about__feature" variants={fadeUp}>
                    <span className="about__feature-icon">{f.icon}</span>
                    <div>
                      <div className="about__feature-title">{f.title}</div>
                      <div className="about__feature-desc">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="about__ctas" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-orange"
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  📞 Call For a Free Quote
                </motion.a>
                <motion.a href="#contact" className="btn btn-outline-green"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Request Estimate
                </motion.a>
              </motion.div>
            </div>

          </div>
        </div>
      </InView>

      {/* ── SERVICES GRID ── */}
      <InView className="services-section" id="services">
        <div className="container">
          <motion.div className="services-section__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>What We Do</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>Our Services</motion.h2>
            <span className="orange-bar orange-bar--center" />
            <motion.p className="services-section__desc" variants={fadeUp}>
              R&amp;R Tree Service offers licensed, bonded, and insured tree removal, trimming,
              stump grinding, mulching, and more across North Atlanta and surrounding areas.
            </motion.p>
          </motion.div>

          <motion.div className="services-grid" variants={stagger}>
            {SERVICES.map(s => (
              <motion.article key={s.title} variants={fadeUp}
                className={`service-card ${s.layout === 'tall' ? 'service-card--tall' : s.layout === 'wide' ? 'service-card--wide' : 'service-card--short'}`}>
                <img className="service-card__img" src={s.img} alt={s.title} loading="lazy" />
                <div className="service-card__overlay" />
                {s.badge && <span className="service-card__badge">{s.badge}</span>}
                <div className="service-card__content">
                  <span className="service-card__icon">{s.icon}</span>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <span className="service-card__learn">Learn More →</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── EMERGENCY BANNER ── */}
      <section>
        <div className="emergency">
          <div className="container">
            <div className="emergency__inner">
              <div className="emergency__left">
                <div className="emergency__pulse">🚨</div>
                <div>
                  <div className="emergency__title">24-Hour Emergency Tree Service</div>
                  <div className="emergency__sub">Storm damage? Fallen tree? We respond 24/7 across North Georgia.</div>
                </div>
              </div>
              <motion.a href="tel:678-482-9994" className="btn btn-green"
                whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}>
                Call Now: 678-482-9994
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section>
        <div className="cta-strip">
          <div className="cta-strip__bg"><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=60" alt="" loading="lazy" /></div>
          <div className="cta-strip__overlay" />
          <div className="container">
            <motion.div className="cta-strip__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once:true, margin:'-80px' }}>
              <div>
                <motion.h2 className="cta-strip__heading" variants={fadeUp}>
                  Serving <span>North Atlanta</span> &amp;<br />Surrounding Areas
                </motion.h2>
                <motion.p className="cta-strip__sub" variants={fadeUp}>
                  Alpharetta · Buford · Cumming · Duluth · Gainesville · Lawrenceville · Roswell · Suwanee and more
                </motion.p>
              </div>
              <motion.div className="cta-strip__btns" variants={fadeUp}>
                <motion.a href="#contact" className="btn btn-orange"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}>
                  Get a Free Quote
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                  whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}>
                  Call Us Today
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST / WHY US ── */}
      <InView className="trust" id="why-us">
        <div className="container">
          <div className="trust__grid">
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Why Choose Us</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Quality Tree Services You Can Trust
              </motion.h2>
              <span className="orange-bar" />

              <div className="trust__text-block">
                <motion.p variants={fadeUp}>
                  When it comes to the trees on your property, R&amp;R is the name to trust. We are proud to be
                  a locally owned and operated Atlanta tree service, committed to serving our community with the
                  highest level of professionalism and care.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We do not subcontract any work — we have our own ISA board-certified arborist on staff and are
                  members of the Georgia Association of Arborists and the Tree Care Industry's Association.
                </motion.p>
              </div>

              <motion.div className="trust__pills" variants={stagger}>
                {['ISA Board-Certified Arborist','Georgia Association of Arborists','Tree Care Industry Association','Fully Licensed & Bonded','No Subcontracting','Free Estimates','Full Clean-Up Included','24/7 Emergency Service'].map(p => (
                  <motion.span key={p} className="trust__pill" variants={fadeUp}>
                    <span className="trust__pill-check">✓</span>{p}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div style={{ display:'flex', gap:'var(--sp-sm)', flexWrap:'wrap' }} variants={fadeUp}>
                <motion.a href="#contact" className="btn btn-orange"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Get a Free Quote
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-green"
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Call Us Today
                </motion.a>
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.25rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em', color:'var(--green-dark)', marginBottom:'var(--sp-md)' }}>
                Frequently Asked Questions
              </h3>
              <div className="faq-wrap">
                {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
              </div>
            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── TESTIMONIALS ── */}
      <InView className="testimonials" id="testimonials">
        <div className="container">
          <motion.div className="testimonials__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp} style={{ color:'var(--orange-light)' }}>
              Client Reviews
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
              What Our Clients Say
            </motion.h2>
            <span className="orange-bar orange-bar--center" />
            <motion.p variants={fadeUp} style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.95rem' }}>
              Over 39 years of exceptional service — hear directly from North Georgia homeowners.
            </motion.p>
          </motion.div>

          <motion.div className="testimonials__grid" variants={stagger}>
            {TESTIMONIALS.map(t => (
              <motion.div key={t.name} className={`tcard ${t.wide ? 'tcard--wide' : ''}`} variants={fadeUp}>
                <div className="tcard__quote">"</div>
                <div className="tcard__stars">{'★★★★★'.split('').map((s,i) => <span key={i}>{s}</span>)}</div>
                <blockquote className="tcard__text">"{t.text}"</blockquote>
                <div className="tcard__author">
                  <div className="tcard__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="tcard__name">{t.name}</div>
                    <div className="tcard__loc">📍 {t.loc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── AREAS ── */}
      <InView className="areas" id="areas">
        <div className="container">
          <div className="areas__grid">
            <motion.div className="areas__visual" variants={fadeUp}>
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80"
                   alt="North Georgia landscape" loading="lazy" />
              <div className="areas__visual-overlay" />
              <div className="areas__visual-label">Serving North Atlanta &amp; All Surrounding Communities</div>
            </motion.div>

            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Coverage</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Service Areas in Atlanta, Georgia
              </motion.h2>
              <span className="orange-bar" />
              <motion.p className="areas__text" variants={fadeUp}>
                R&amp;R Tree Service proudly serves homeowners and businesses across North Atlanta
                and surrounding Georgia communities. Wherever you are, we bring expert tree care right to you.
              </motion.p>
              <motion.div className="areas__tags" variants={stagger}>
                {AREAS.map(a => (
                  <motion.span key={a} className="areas__tag" variants={fadeUp}>
                    <span className="areas__tag-dot" />{a}
                  </motion.span>
                ))}
              </motion.div>
              <motion.a href="#contact" className="btn btn-orange"
                onClick={e => { e.preventDefault(); goto('#contact'); }}
                whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                variants={fadeUp}>
                Check If We Serve Your Area →
              </motion.a>
            </div>
          </div>
        </div>
      </InView>

      {/* ── CONTACT ── */}
      <InView className="contact-section" id="contact">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info">
              <motion.span className="eyebrow" variants={fadeUp} style={{ color:'var(--orange-light)' }}>
                Get In Touch
              </motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
                We Can't Wait to Make Your Property Dreams a Reality
              </motion.h2>
              <span className="orange-bar" />
              <motion.p className="contact__desc" variants={fadeUp}>
                Whether you need an emergency tree removal or a routine trimming, R&amp;R Tree Service
                is ready to help. Contact us today for a free, no-obligation estimate.
              </motion.p>
              <motion.div className="contact__cards" variants={stagger}>
                {[
                  { icon:'📞', label:'Phone', val:'678-482-9994', href:'tel:678-482-9994' },
                  { icon:'📠', label:'Fax', val:'678-482-9996', href:'tel:678-482-9996' },
                  { icon:'✉', label:'Email', val:'sally@randrtreeservice.com', href:'mailto:sally@randrtreeservice.com' },
                  { icon:'📍', label:'Address', val:'1381 Buford Hwy, Buford GA 30518', href:null },
                ].map(c => (
                  <motion.a key={c.label} href={c.href || '#'} className="contact__card" variants={fadeUp}
                    style={!c.href ? { cursor:'default', pointerEvents:'none' } : {}}>
                    <div className="contact__card-icon">{c.icon}</div>
                    <div>
                      <div className="contact__card-label">{c.label}</div>
                      <div className="contact__card-value">{c.val}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div className="contact__form-box" variants={fadeUp} custom={0.2}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </InView>

    </main>
  );
}