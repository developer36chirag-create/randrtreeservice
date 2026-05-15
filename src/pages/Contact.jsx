// Contact.jsx | R&R Tree Service
// Contact Page — Free Tree Removal Quotes in North Georgia
// Exact content from: https://randrtreeservice.com/contact-us/
// Design: #D92227 red + #000000 black

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Contact.css';

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

/* ════════════════════════════════════════
   DATA
   ════════════════════════════════════════ */

const SERVICE_AREAS = [
  'Alpharetta','Atlanta','Avondale Estates','Buford','Cumming','Decatur',
  'Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville',
  'Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee',
];

const TRUST_BADGES = [
//   { icon: '🏆', label: 'ISA Certified' },
  { icon: '🛡️', label: 'Licensed & Insured' },
  { icon: '👨‍👩‍👧', label: 'Family Owned' },
  { icon: '⭐', label: '40 Yrs Experience' },
  { icon: '🚨', label: '24/7 Emergency' },
];

const WHY_ITEMS = [
//   'ISA Board-Certified Arborist on Staff',
  'Fully Licensed, Bonded & Insured',
  'No Subcontracting — Our Own Crew',
  'Free Estimates, No Obligation',
  'Complete Cleanup Included',
  '24/7 Emergency Response',
];

const SERVICES_LIST = [
  'Tree Trimming & Pruning',
  'Tree Removal',
  'Land Clearing',
  'Stump Grinding',
  'Crane Tree Service',
  'Firewood Delivery',
  'Mulch Delivery',
  'Retention Pond Maintenance',
  'Emergency Storm Cleanup',
  'Other / Not Sure',
];

/* ── Main form component ── */
function QuoteForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    service: '', message: '',
    consentTransactional: false, consentMarketing: false,
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const ch = k => e => setForm(f => ({
    ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
  }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.phone.trim())     e.phone     = 'Phone number is required';
    if (!form.email.trim())     e.email     = 'Email is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 900)); // simulate
    setSent(true);
    setSubmitting(false);
  };

  if (sent) return (
    <div className="ct-success">
      <motion.div className="ct-success__icon"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
        ✅
      </motion.div>
      <motion.h3 className="ct-success__title"
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        Message Sent!
      </motion.h3>
      <motion.p className="ct-success__text"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}>
        Thank you for contacting R&amp;R Tree Service. We'll be in touch within 24 hours.
        For urgent needs, call us directly at{' '}
        <a href="tel:678-482-9994" style={{ color: 'var(--red)', fontWeight: 700 }}>678-482-9994</a>.
      </motion.p>
      <motion.a href="/" className="btn btn-red"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
        Back to Home
      </motion.a>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name row */}
      <div className="ct-form-row">
        <div className="ct-field-group">
          <label className="ct-label" htmlFor="ct-first">First Name</label>
          <input
            id="ct-first" type="text" className="ct-input"
            placeholder="First Name" value={form.firstName} onChange={ch('firstName')}
            style={errors.firstName ? { borderColor: 'var(--red)' } : {}}
          />
          {errors.firstName && (
            <span style={{ fontSize: '0.72rem', color: 'var(--red)' }}>{errors.firstName}</span>
          )}
        </div>
        <div className="ct-field-group">
          <label className="ct-label" htmlFor="ct-last">Last Name</label>
          <input id="ct-last" type="text" className="ct-input" placeholder="Last Name" value={form.lastName} onChange={ch('lastName')} />
        </div>
      </div>

      {/* Phone */}
      <div className="ct-field-group">
        <label className="ct-label" htmlFor="ct-phone">Phone *</label>
        <input
          id="ct-phone" type="tel" className="ct-input"
          placeholder="(678) 000-0000" required value={form.phone} onChange={ch('phone')}
          style={errors.phone ? { borderColor: 'var(--red)' } : {}}
        />
        {errors.phone && <span style={{ fontSize: '0.72rem', color: 'var(--red)' }}>{errors.phone}</span>}
      </div>

      {/* Email */}
      <div className="ct-field-group">
        <label className="ct-label" htmlFor="ct-email">Email *</label>
        <input
          id="ct-email" type="email" className="ct-input"
          placeholder="Email" required value={form.email} onChange={ch('email')}
          style={errors.email ? { borderColor: 'var(--red)' } : {}}
        />
        {errors.email && <span style={{ fontSize: '0.72rem', color: 'var(--red)' }}>{errors.email}</span>}
      </div>

      {/* Service */}
      <div className="ct-field-group">
        <label className="ct-label" htmlFor="ct-service">Service Needed</label>
        <select id="ct-service" className="ct-select" value={form.service} onChange={ch('service')}>
          <option value="">Select a service…</option>
          {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Message */}
      <div className="ct-field-group">
        <label className="ct-label" htmlFor="ct-msg">Message</label>
        <textarea
          id="ct-msg" className="ct-textarea"
          placeholder="Tell us about your tree project, property location, urgency…"
          value={form.message} onChange={ch('message')}
        />
      </div>

      {/* Consent checkboxes — exact from live site */}
      <div className="ct-consent">
        <div className="ct-consent-item">
          <input
            id="ct-consent-1" type="checkbox" className="ct-consent-check"
            checked={form.consentTransactional} onChange={ch('consentTransactional')}
          />
          <label htmlFor="ct-consent-1" className="ct-consent-text">
            By checking this box, I consent to receive transactional messages related to my account,
            orders, or services I have requested. These messages may include appointment reminders,
            order confirmations, and account notifications among others. Message frequency may vary.
            Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.
          </label>
        </div>
        <div className="ct-consent-item">
          <input
            id="ct-consent-2" type="checkbox" className="ct-consent-check"
            checked={form.consentMarketing} onChange={ch('consentMarketing')}
          />
          <label htmlFor="ct-consent-2" className="ct-consent-text">
            By checking this box, I consent to receive marketing and promotional messages, including
            special offers, discounts, new product updates among others. Message frequency may vary.
            Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.
          </label>
        </div>
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        className="btn btn-red ct-submit"
        disabled={submitting}
        whileHover={!submitting ? { scale: 1.02 } : {}}
        whileTap={!submitting ? { scale: 0.98 } : {}}>
        {submitting ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
            Sending…
          </span>
        ) : 'Submit'}
      </motion.button>

      <div className="ct-form-legal">
        <div className="ct-form-legal-links">
          <a href="/privacy-policy" className="ct-form-legal-link">Privacy Policy</a>
          <span style={{ color: 'var(--gray-mid)', fontSize: '0.72rem' }}>|</span>
          <a href="/terms-and-conditions" className="ct-form-legal-link">Terms &amp; Conditions</a>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */
export default function Contact() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>

      {/* ── HERO ── */}
      <section className="ct-hero" aria-label="Contact R&R Tree Service">
        <div className="ct-hero__bg" aria-hidden="true">
          <img
            src="/contact-bg.jpg"
            alt="R&R Tree Service professional crew at work"
            loading="eager" fetchpriority="high"
          />
          <div className="ct-hero__overlay" />
        </div>
        {/* <div className="ct-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="ct-hero__grid">

            {/* Left — page heading */}
            <div>
              <motion.div className="ct-hero__breadcrumb"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <a href="/">Home</a>
                <span className="ct-hero__breadcrumb-sep">›</span>
                <span className="ct-hero__breadcrumb-cur">Contact Us</span>
              </motion.div>

              <motion.div className="ct-hero__eyebrow"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <span className="ct-hero__eyebrow-line" />
                Free Estimates · Same-Day Response
              </motion.div>

              <motion.h1 className="ct-hero__title"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35 }}>
                Contact R&amp;R Tree Service
                <span>and Landscaping</span>
              </motion.h1>

              <motion.p className="ct-hero__subtitle"
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}>
                Connect with our certified professionals for all of your tree removal, trimming,
                stump grinding, mulching, retention pond maintenance needs, and more.
              </motion.p>

              <motion.div className="ct-hero__ctas"
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}>
                <motion.a href="#ct-form" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#ct-form'); }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Request a Free Quote →
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Call: 678-482-9994
                </motion.a>
              </motion.div>
            </div>

            

          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS STRIP ──
      <section>
        <div className="ct-strip">
          <div className="container">
            <motion.div className="ct-strip__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              {[
                { icon: '📞', lbl: 'Phone', val: '678-482-9994', sub: 'Call for free estimate', href: 'tel:678-482-9994' },
                { icon: '📠', lbl: 'Fax', val: '678-482-9996', sub: 'Documents & paperwork', href: 'tel:678-482-9996' },
                { icon: '✉', lbl: 'Email', val: 'sally@randrtreeservice.com', sub: 'Typically responds same day', href: 'mailto:sally@randrtreeservice.com' },
                { icon: '📍', lbl: 'Office', val: '1381 Buford Hwy, Buford GA', sub: 'Buford, GA 30518', href: null },
              ].map(c => (
                <motion.a key={c.lbl} href={c.href || '#'} className="ct-strip__item" variants={fadeUp}
                  style={!c.href ? { cursor: 'default', pointerEvents: 'none' } : {}}
                  onClick={c.href ? undefined : e => e.preventDefault()}>
                  <div className="ct-strip__icon">{c.icon}</div>
                  <div>
                    <div className="ct-strip__label">{c.lbl}</div>
                    <div className="ct-strip__value">{c.val}</div>
                    <div className="ct-strip__sub">{c.sub}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ── MAIN FORM + SIDEBAR ── */}
      <InView className="ct-main" id="ct-form">
        <div className="container">
          <div className="ct-main__grid">

            {/* Form box */}
            <motion.div className="ct-form-box" variants={fadeUp}>
              <div className="ct-form-box__head">
                <h2 className="ct-form-box__title">Request A Quote</h2>
                <p className="ct-form-box__sub">
                  Fill out the form below and we'll get back to you within 24 hours with a free,
                  no-obligation estimate.
                </p>
              </div>
              <div className="ct-form-divider" style={{ margin: '0 var(--sp-2xl)' }} />
              <div className="ct-form-box__body">
                <QuoteForm />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div className="ct-sidebar" variants={stagger}>

              {/* Phone card */}
              <motion.div className="ct-phone-card" variants={fadeUp}>
                <div className="ct-phone-card__head">
                  <div className="ct-phone-card__head-title">Prefer to Call?</div>
                  <div className="ct-phone-card__head-sub">Same-day response · Free estimates</div>
                </div>
                <div className="ct-phone-card__body">
                  <a href="tel:678-482-9994" className="ct-phone-btn">
                    <div className="ct-phone-btn__icon"><img alt="" className='phone-icon' src="/phone-call.png" /></div>
                    <div>
                      <div className="ct-phone-btn__lbl">Call Us Directly</div>
                      <div className="ct-phone-btn__num">678-482-9994</div>
                    </div>
                  </a>
                  <div className="ct-phone-card__divider" />
                  <a href="tel:678-482-9996" className="ct-phone-card__row">
                    <span><img alt="" className='phone-icon' src="/printer.png" /></span><span>Fax: 678-482-9996</span>
                  </a>
                  <a href="mailto:sally@randrtreeservice.com" className="ct-phone-card__row">
                    <span><img alt="" className='phone-icon' src="/mail.png" /></span><span>sally@randrtreeservice.com</span>
                  </a>
                  <div className="ct-phone-card__divider" />
                  <div className="ct-phone-card__row" style={{ cursor: 'default' }}>
                    <span><img alt="" className='phone-icon' src="/location-pin.png" /></span><span>1381 Buford Hwy, Buford GA 30518</span>
                  </div>
                </div>
              </motion.div>

              {/* Hours card */}
              <motion.div className="ct-hours-card" variants={fadeUp}>
                <div className="ct-hours-card__head">
                  <div className="ct-hours-card__head-title">Office Hours</div>
                </div>
                <div className="ct-hours-card__body">
                  {[
                    { day: 'Monday',    time: '8:00am – 4:30pm', open: true },
                    { day: 'Tuesday',   time: '8:00am – 4:30pm', open: true },
                    { day: 'Wednesday', time: '8:00am – 4:30pm', open: true },
                    { day: 'Thursday',  time: '8:00am – 4:30pm', open: true },
                    { day: 'Friday',    time: '8:00am – 4:30pm', open: true },
                    { day: 'Saturday',  time: 'Closed', open: false },
                    { day: 'Sunday',    time: 'Closed', open: false },
                  ].map(h => (
                    <div key={h.day}
                      className={`ct-hours-row ${!h.open ? 'ct-hours-row--closed' : ''}`}>
                      <span className="ct-hours-row__day">{h.day}</span>
                      <span className="ct-hours-row__time">{h.time}</span>
                    </div>
                  ))}
                  <div className="ct-hours-emergency">
                    <span className="ct-hours-emergency__icon">🚨</span>
                    <div>
                      <div className="ct-hours-emergency__text">24/7 Emergency Service</div>
                      <div className="ct-hours-emergency__sub">Storm damage? We respond anytime.</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why choose card */}
              <motion.div className="ct-why-card" variants={fadeUp}>
                <div className="ct-why-card__title">
                  We Can't Wait to Make Your Property Dreams a Reality!
                </div>
                <div className="ct-why-card__list">
                  {WHY_ITEMS.map(item => (
                    <div key={item} className="ct-why-card__item">
                      <span className="ct-why-card__check">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </InView>

      {/* ── EMERGENCY BANNER ── */}
      <section>
        <div className="ct-emergency">
          <div className="container">
            <div className="ct-emergency__inner">
              <div className="ct-emergency__left">
                <div className="ct-emergency__pulse">🚨</div>
                <div>
                  <div className="ct-emergency__title">24-Hour Emergency Tree Service</div>
                  <div className="ct-emergency__sub">
                    Storm damage? Fallen tree? We respond 24/7 across North Georgia.
                    Don't wait — call now.
                  </div>
                </div>
              </div>
              <motion.a href="tel:678-482-9994" className="btn btn-red"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                Call Now: 678-482-9994
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS + MAP ── */}
      <InView className="ct-areas" id="ct-areas">
        <div className="container">
          <motion.div className="ct-areas__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Our Service Areas</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Our Service Areas
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p className="ct-areas__desc" variants={fadeUp}>
              We proudly serve homeowners and businesses in the following communities:
            </motion.p>
          </motion.div>

          <motion.div className="ct-areas__tags"
            variants={stagger} initial="hidden"
            whileInView="visible" viewport={{ once: true }}>
            {SERVICE_AREAS.map(a => (
              <motion.span key={a} className="ct-areas__tag" variants={fadeUp}>
                <span className="ct-areas__tag-dot" />{a}
              </motion.span>
            ))}
          </motion.div>

          {/* Google Map embed */}
          <motion.div className="ct-map-wrap"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <div className="ct-map-overlay-label">📍 R&R Tree Service HQ · Buford, GA</div>
            <iframe
              title="R&R Tree Service Location — 1381 Buford Highway, Buford, GA 30518"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.9!2d-84.0149!3d34.1195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a6a0a0000001%3A0x1!2s1381+Buford+Hwy+NE%2C+Buford%2C+GA+30518!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing R&R Tree Service office location in Buford, Georgia"
            />
          </motion.div>
        </div>
      </InView>

      {/* ── TRUST BADGES ── */}
      <section>
        <div className="ct-trust">
          <div className="container">
            <motion.div className="ct-trust__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true }}>
              {TRUST_BADGES.map(b => (
                <motion.div key={b.label} className="ct-trust__item" variants={fadeUp}>
                  <span className="ct-trust__icon">{b.icon}</span>
                  <span className="ct-trust__label">{b.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section>
        <div className="ct-cta">
          <div className="container">
            <motion.div className="ct-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="ct-cta__heading" variants={fadeUp}>
                  Ready to Get Started?<br />Call or Send a Message Today.
                </motion.h2>
                <motion.p className="ct-cta__sub" variants={fadeUp}>
                  Licensed · Insured · Free Estimates · Serving North Georgia Since 1986
                </motion.p>
              </div>
              <motion.div className="ct-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a href="#ct-form" className="btn btn-outline-white"
                  onClick={e => { e.preventDefault(); goto('#ct-form'); }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  Request Free Quote
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}