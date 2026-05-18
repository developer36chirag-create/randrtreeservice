// Testimonials.jsx | R&R Tree Service
// Customer Reviews — All 6 verbatim from https://randrtreeservice.com/testimonials/
// Design: #D92227 red + #000000 black

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

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

/* ── Contact form ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const ch = k => e => setForm({ ...form, [k]: e.target.value });
  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      style={{ textAlign: 'center', padding: 'var(--sp-2xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-md)' }}>
      <div style={{ fontSize: '3rem' }}>✅</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--white)' }}>Thank You!</h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>
        We'll be in touch within 24 hours. Urgent? Call <a href="tel:678-482-9994" style={{ color: 'var(--red-light)' }}>678-482-9994</a>.
      </p>
    </motion.div>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} noValidate>
      <h3 className="form-title">Contact Us</h3>
      <p className="form-sub">We can't wait to make your property dreams a reality!</p>
      <div className="form-group">
        <label className="form-label" htmlFor="tm-name">Name *</label>
        <input id="tm-name" type="text" className="form-input" placeholder="Your name" required value={form.name} onChange={ch('name')} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="tm-email">Email *</label>
          <input id="tm-email" type="email" className="form-input" placeholder="you@example.com" required value={form.email} onChange={ch('email')} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="tm-phone">Phone</label>
          <input id="tm-phone" type="tel" className="form-input" placeholder="(678) 000-0000" value={form.phone} onChange={ch('phone')} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="tm-msg">Project details</label>
        <textarea id="tm-msg" className="form-textarea" placeholder="Tell us about your tree project…" value={form.message} onChange={ch('message')} />
      </div>
      <motion.button type="submit" className="btn btn-red form-submit"
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        Send Message →
      </motion.button>
      <p className="form-note">No spam, ever. We respond within 24 hours.</p>
    </form>
  );
}

/* ════════════════════════════════════════
   DATA — All 6 reviews verbatim from live site
   ════════════════════════════════════════ */

const FEATURED_REVIEW = {
  text: "R & R tree services has been a mainstay with the Agnes Scott College community for well over 20 years. Their prompt service and attention to detail are second to none! Whether it is a seasonal request or an emergency they have always responded with the attitude that no job is too great for them to handle.",
  name: 'Tim B.',
  title: 'Director of Facilities, Agnes Scott College',
  loc: 'North Georgia',
  service: 'Commercial Tree Care',
  img: '/testimonials-1.jpg',
};

const ALL_REVIEWS = [
  {
    id: 1,
    text: "R & R tree services has been a mainstay with the Agnes Scott College community for well over 20 years. Their prompt service and attention to detail are second to none! Whether it is a seasonal request or an emergency they have always responded with the attitude that no job is too great for them to handle.",
    name: 'Tim B.',
    role: 'Director of Facilities, Agnes Scott College',
    loc: 'North Georgia',
    service: 'Commercial',
    tag: 'commercial',
    tall: false,
  },
  {
    id: 2,
    text: "Because our home sits on a wooded five acre lot, I am constantly in need of tree care. For the past eight years, R and R Tree Service has meticulously tended to our landscape needs. From pine tree removal to diagnosing damaged or diseased trees, I fully and completely trust this honest and hard working crew. Showing up on time and prepared to work is important to me. Follow up and clean up is equally important and they do both with attention to detail that is unsurpassed. They know my lot. They watch for any potential issues. They make recommendations. They are experienced. They follow through. They estimate fairly and give competitive prices. What more could I ask? It's reassuring to know they will 'take care of business' and it's one less hassle for this homeowner to trust the folks at R and R.",
    name: 'Lawanna B. St Clair',
    role: null,
    loc: 'Lilburn, Georgia 30047',
    service: 'Tree Removal & Diagnosis',
    tag: 'removal',
    tall: true,
  },
  {
    id: 3,
    text: "Andy Nix and the folks at R&R Tree Service are great. They are people of high integrity and did an excellent job at a reasonable price in removing ten large pine trees from my property. They took the greatest of care while removing the trees as there is considerable risk to house and property any time a big task such as this is undertaken. They also did a good job of cleanup and removal of debris after the job was over. I would definitely use them again myself and recommend them to anyone needing this type of service.",
    name: 'Patty M.',
    role: null,
    loc: 'Nash Estates, Stone Mountain, GA',
    service: 'Large Tree Removal',
    tag: 'removal',
    tall: false,
  },
  {
    id: 4,
    text: "It was such a pleasure dealing with R&R Tree Service during my recent tree removal project. The work was done exactly on time and per the estimate. It is so nice to deal with people that start work on time, respect property and do what they say they will.",
    name: 'Susan H.',
    role: null,
    loc: 'Lawrenceville, GA',
    service: 'Tree Removal',
    tag: 'removal',
    tall: false,
  },
  {
    id: 5,
    text: "We have used R and R Tree Service since we moved to the North Georgia area over 16 years ago. They are professional, dependable, and do an excellent job of cutting trees and cleaning up before leaving. In addition, they offer a crane service which we find to be a definite advantage in that there is never any damage to surrounding trees and other plantings. We recommend them often to friends and neighbors. We are very particular in selecting vendors and we can sincerely recommend them without reservation. They are competitively priced, are honest and a pleasure to work with!",
    name: 'John and Carol H.',
    role: null,
    loc: 'Alpharetta, GA',
    service: 'Crane Tree Service',
    tag: 'crane',
    tall: false,
  },
  {
    id: 6,
    text: "R&R recently removed more than a dozen trees from our heavily wooded lot, including a number of dangerous poplars that required considerable care in removing. The team showed up on time and did an incredibly safe and thorough job. We were relieved to have the work done and to have it done in such a professional manner. We would not hesitate to call them back or refer their services to anyone we know. Thanks so much for a job well done!",
    name: 'Michael & Jennifer L.',
    role: null,
    loc: 'Lawrenceville, GA',
    service: 'Tree Removal',
    tag: 'removal',
    tall: false,
  },
];

// Additional mini reviews for the visual section
const MINI_REVIEWS = [
  {
    text: "Within 24-hours of being contacted, Randy and his team gave me a quote and removed two mature trees uprooted during Hurricane Helene. Arrived at the crack of dawn and finished before lunch. True professionals.",
    name: 'Jane B.',
    loc: 'Georgia',
    stars: 5,
  },
  {
    text: "R&R removed more than a dozen trees from our heavily wooded lot. 5 stars for their skills, teamwork, and cleanup. Their quote was very reasonable and Sally in the office was super nice and responsive.",
    name: 'H.H.',
    loc: 'North Georgia',
    stars: 5,
  },
];

const FILTER_TABS = [
  { key: 'all', label: 'All Reviews' },
  { key: 'removal', label: 'Tree Removal' },
  { key: 'crane', label: 'Crane Service' },
  { key: 'commercial', label: 'Commercial' },
];

const RATING_CATEGORIES = [
  { label: 'Professionalism', count: '6 reviews' },
  { label: 'Quality of Work', count: '6 reviews' },
  { label: 'Punctuality', count: '6 reviews' },
  { label: 'Value for Money', count: '6 reviews' },
];

const AREAS = ['Alpharetta','Atlanta','Avondale Estates','Buford','Cumming','Decatur','Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville','Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee'];

/* ── Review Card Component ── */
function ReviewCard({ review }) {
  return (
    <motion.article
      className={`tm-card ${review.tall ? 'tm-card--tall' : ''}`}
      variants={fadeUp}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45 }}>
      <div className="tm-card__quote-icon" aria-hidden="true">"</div>
      <div className="tm-card__stars" aria-label="5 stars">
        {'★★★★★'.split('').map((s, i) => <span key={i} className="tm-card__star">{s}</span>)}
      </div>
      {review.service && (
        <span className="tm-card__service-badge">✓ {review.service}</span>
      )}
      <blockquote className="tm-card__text">"{review.text}"</blockquote>
      <div className="tm-card__author">
        <div className="tm-card__avatar" aria-hidden="true">{review.name.charAt(0)}</div>
        <div>
          <div className="tm-card__name">{review.name}</div>
          {review.role && <div className="tm-card__role">{review.role}</div>}
          <div className="tm-card__loc">📍 {review.loc}</div>
        </div>
      </div>
    </motion.article>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */
export default function Testimonials() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReviews = activeFilter === 'all'
    ? ALL_REVIEWS
    : ALL_REVIEWS.filter(r => r.tag === activeFilter);

  return (
    <main>

      {/* ── HERO ── */}
      <section className="tm-hero" aria-label="Testimonials hero">
        <div className="tm-hero__bg" aria-hidden="true">
          <img
            src="/testimonials-bg.jpg"
            alt="R&R Tree Service crew at work in North Georgia"
            loading="eager" fetchpriority="high"
          />
          <div className="tm-hero__overlay" />
        </div>
        {/* <div className="tm-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="tm-hero__content">
            <motion.div className="tm-hero__breadcrumb"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <a href="/">Home</a>
              <span className="tm-hero__breadcrumb-sep">›</span>
              <span className="tm-hero__breadcrumb-cur">Testimonials</span>
            </motion.div>

            <motion.div className="tm-hero__eyebrow"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="tm-hero__eyebrow-line" />
              40 Years of 5-Star Service · North Georgia
            </motion.div>

            <motion.h1 className="tm-hero__title"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}>
              Reviews from Our Clients
              <span> in North Georgia</span>
            </motion.h1>

            <motion.p className="tm-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              R&amp;R Tree Service has been serving our North Georgia community for over 40 years. Read
              what North Georgia homeowners and businesses have to say about our work.
            </motion.p>

            <motion.div className="tm-hero__ctas"
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}>
              <motion.a href="#tm-reviews" className="btn btn-red"
                onClick={e => { e.preventDefault(); goto('#tm-reviews'); }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Read All Reviews ↓
              </motion.a>
              <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
              </motion.a>
            </motion.div>

            <motion.div className="tm-hero__rating"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              <div className="tm-hero__stars" aria-label="5 stars">
                {['★','★','★','★','★'].map((s, i) => (
                  <span key={i} className="tm-hero__star">{s}</span>
                ))}
              </div>
              <span className="tm-hero__rating-text">
                5.0 · 6 Verified Client Reviews · 40 Years Serving North Georgia
              </span>
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
              {[['40','Years of Service'],['5★','Client Ratings'],['100%','Owner Operated'],['24/7','Emergency Ready']].map(([n, l]) => (
                <motion.div key={l} className="stats-bar__item" variants={fadeUp}>
                  <span className="stats-bar__num">{n}</span>
                  <span className="stats-bar__lbl">{l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RATING OVERVIEW ── */}
      <section>
        <div className="tm-overview">
          <div className="container">
            <motion.div className="tm-overview__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true }}>
              {RATING_CATEGORIES.map(cat => (
                <motion.div key={cat.label} className="tm-overview__item" variants={fadeUp}>
                  <div className="tm-overview__stars" aria-label="5 stars">
                    {['★','★','★','★','★'].map((s, i) => (
                      <span key={i} className="tm-overview__star">{s}</span>
                    ))}
                  </div>
                  <span className="tm-overview__label">{cat.label}</span>
                  <span className="tm-overview__count">{cat.count}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED REVIEW ── */}
      <InView className="tm-featured" id="tm-featured">
        <div className="container">
          <motion.div className='tm-featured-heading-box' style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto var(--sp-2xl)' }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Featured Review</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              What Our Clients Say
            </motion.h2>
            <span className="red-bar red-bar--center" />
          </motion.div>

          <motion.div className="tm-featured__card" variants={fadeUp} custom={0.2}>
            <div className="tm-featured__img-col">
              <img
                src={FEATURED_REVIEW.img}
                alt="Professional tree service work"
                loading="lazy"
              />
              <div className="tm-featured__img-overlay" />
              <span className="tm-featured__img-badge">⭐ Featured Review</span>
            </div>
            <div className="tm-featured__body">
              <div className="tm-featured__big-quote" aria-hidden="true">"</div>
              <div className="tm-featured__stars" aria-label="5 stars">
                {['★','★','★','★','★'].map((s, i) => (
                  <span key={i} className="tm-featured__star">{s}</span>
                ))}
              </div>
              <blockquote className="tm-featured__text">
                "{FEATURED_REVIEW.text}"
              </blockquote>
              <div className="tm-featured__author">
                <div className="tm-featured__avatar">{FEATURED_REVIEW.name.charAt(0)}</div>
                <div>
                  <div className="tm-featured__author-name">{FEATURED_REVIEW.name}</div>
                  <div className="tm-featured__author-title">{FEATURED_REVIEW.title}</div>
                  <div className="tm-featured__author-loc">📍 {FEATURED_REVIEW.loc}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </InView>

      {/* ── ALL REVIEWS GRID ── */}
      <section className="tm-reviews" id="tm-reviews">
        <div className="container">
          <motion.div className="tm-reviews__header"
            variants={stagger} initial="hidden"
            whileInView="visible" viewport={{ once: true }}>
            <motion.span className="eyebrow" variants={fadeUp}>All Reviews</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Trusted by North Georgia Homeowners
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp}
              style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              Every review below is verbatim from real R&amp;R Tree Service clients across
              Gwinnett, Hall, Fulton, and DeKalb counties.
            </motion.p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div className="tm-filters"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {FILTER_TABS.map(tab => (
              <motion.button
                key={tab.key}
                className={`tm-filter-btn ${activeFilter === tab.key ? 'tm-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(tab.key)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}>
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Reviews grid */}
          <motion.div className="tm-reviews__grid">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      

      {/* ── CONTACT ── */}
            <InView className="contact-sec" id="contact">
              <div className="container">
                <div className="contact__grid">
                  <div>
                    <motion.span className="eyebrow" variants={fadeUp} style={{ color:'var(--red-light)' }}>Get In Touch</motion.span>
                    <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                      We Can't Wait to Make Your Property Dreams a Reality
                    </motion.h2>
                    <span className="red-bar" />
                    <motion.p className="contact__desc" variants={fadeUp}>
                      Whether you need an emergency tree removal or a routine trimming, R&amp;R Tree Service
                      is ready to help. Contact us for a free, no-obligation estimate.
                    </motion.p>
                    <motion.div className="contact__cards" variants={stagger}>
                      {[
                        { img:'/phone-call.png', label:'Phone',   val:'678-482-9994',              href:'tel:678-482-9994' },
                        { img:'/printer.png', label:'Fax',     val:'678-482-9996',              href:'tel:678-482-9996' },
                        { img:'/mail.png', label:'Email',   val:'sally@randrtreeservice.com', href:'mailto:sally@randrtreeservice.com' },
                        { img:'/location-pin.png', label:'Address', val:'1381 Buford Hwy, Buford GA 30518', href:null },
                      ].map(c => (
                        <motion.a key={c.label} href={c.href||'#'} className="contact__card" variants={fadeUp}
                          style={!c.href?{ cursor:'default', pointerEvents:'none' }:{}}
                          onClick={c.href?undefined:e=>e.preventDefault()}>
                          <div className="contact__card-icon">
                            <img src={c.img} alt={c.label} />
                          </div>
                          <div>
                            <div className="contact__card-label">{c.label}</div>
                            <div className="contact__card-value">{c.val}</div>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div className="contact__form-box" variants={fadeUp}>
                    <ContactForm />
                  </motion.div>
                </div>
              </div>
            </InView>
      

      {/* ── SERVICE AREAS ── */}
      <InView className="tm-areas" id="tm-areas">
        <div className="container">
          <motion.div className="tm-areas__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Our Service Areas</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Our Service Areas
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp}
              style={{ color: 'var(--gray-text)', fontSize: '0.95rem', lineHeight: '1.75' }}>
              We proudly serve homeowners and businesses in the following communities:
            </motion.p>
          </motion.div>
          <motion.div className="tm-areas__tags"
            variants={stagger} initial="hidden"
            whileInView="visible" viewport={{ once: true }}>
            {AREAS.map(a => (
              <motion.span key={a} className="tm-areas__tag" variants={fadeUp}>
                <span className="tm-areas__tag-dot" />{a}
              </motion.span>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: 'center' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <a href="/areas" className="btn btn-red">
              View All Service Areas →
            </a>
          </motion.div>
        </div>
      </InView>

      {/* ── FINAL CTA ── */}
      <section>
        <div className="tm-cta">
          <div className="container">
            <motion.div className="tm-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="tm-cta__heading" variants={fadeUp}>
                  Join Thousands of Satisfied<br />North Georgia Homeowners
                </motion.h2>
                <motion.p className="tm-cta__sub" variants={fadeUp}>
                  Licensed · Insured · Free Estimates · Since 1986
                </motion.p>
              </div>
              <motion.div className="tm-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a href="#tm-contact" className="btn btn-outline-white"
                  onClick={e => { e.preventDefault(); goto('#tm-contact'); }}
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