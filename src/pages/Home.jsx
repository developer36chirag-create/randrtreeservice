// Home.jsx | R&R Tree Service — #D92227 + #000000 only
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Home.css';

const fadeUp = { hidden: { opacity:0, y:30 }, visible: { opacity:1, y:0, transition:{ duration:0.6, ease:[0.25,0.46,0.45,0.94] } } };
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.1, delayChildren:0.05 } } };

function InView({ children, className='', id='' }) {
  const ref = useRef(null);
  const vis = useInView(ref, { once:true, margin:'-80px' });
  return (
    <motion.section id={id} ref={ref} className={className}
      variants={stagger} initial="hidden" animate={vis ? 'visible' : 'hidden'}>
      {children}
    </motion.section>
  );
}

const STRIPS = [
  { icon:'✂️', label:'Tree Trimming' },
  { icon:'🪓', label:'Tree Removal' },
  { icon:'🏗️', label:'Crane Service' },
  { icon:'🪨', label:'Stump Grinding' },
  { icon:'🚨', label:'24/7 Emergency' },
];

const SERVICES = [
  { title:'Tree Trimming',    desc:'Improve tree health, promote growth, and enhance the beauty of your landscape with our precise trimming techniques.',              img:'/Tree-Trimming.jpg',  layout:'short',  badge:null },
  { title:'Tree Removal',     desc:'Protect your property from hazardous trees, enhance curb appeal, and prevent potential damage.',                                  img:'/Tree-Removal.jpg', layout:'wide',  badge:'Most Popular' },
  { title:'Land Clearing',   desc:'land clearingPrepare your property for construction, landscaping, or other projects with our efficient land clearing services.',                                 img:'/Land-Clearing.jpg', layout:'wide', badge:null },
  { title:'Stump Grinding',desc:'Reclaim your yard space and eliminate tripping hazards with our thorough stump removal services.',           img:'/Stump-Grinding.jpg', layout:'short', badge:'Specialty' },
  { title:'Firewood Delivery',    desc:'Enjoy hassle-free delivery and the cozy comfort of a crackling fire.',               img:'/Firewood-Delivery.jpg', layout:'short',  badge:null },
  { title:'Mulch Delivery',desc:'Improve soil health, suppress weeds, and beautify your garden beds with ease.',                               img:'/Mulch-Delivery.jpg', layout:'wide',  badge:null },
  { title:'Retention Pond Maintenance',   desc:'We ensure proper drainage, prevent erosion, and keep your pond functioning optimally.',                                          img:'/Retention-Pond-Maintenance.jpg', layout:'wide', badge:null },
  { title:'Crane Tree Service', desc:'When a tree is too large or dangerous to be removed traditionally, our skilled operators and specialized cranes provide the perfect solution.',                        img:'/Crane-Tree-Service.jpg', layout:'short',  badge:null },
];

const ABOUT_FEATURES = [
  { icon:'🏆', title:'ISA Board-Certified',    desc:'Arborist on staff for expert tree care' },
  { icon:'🛡️', title:'Licensed & Insured',     desc:'Fully bonded for your complete safety' },
  { icon:'🚫', title:'No Subcontracting',      desc:'Our own crew from start to finish' },
  { icon:'🌳', title:'GAA Member',             desc:'Georgia Association of Arborists member' },
];

const FAQS = [
  { q:'What services do you offer?', a:'We offer the following tree services and landscaping services in Atlanta, Georgia: Tree Trimming, Tree Removal, Land Cleaning, Stump Grinding, Firewood, Mulch Delivery, Retention Pond Maintenance' },
  { q:'What areas of Atlanta, Georgia do you serve?', a:"Alpharetta, Atlanta, Avondale Estates, Buford, Cumming, Decatur, Duluth, Flowery Branch, Gainesville, Grayson, Lawrenceville, Lilburn, Norcross, Roswell, Snellville, Stone Mountain, Sugar Hill and Suwanee." },
  { q:'What safety protocols do the crews adhere to?', a:'We develop, implement, and enforce a comprehensive health and safety program that includes written rules and safe work procedures for all tasks. We also provide safety training and instructions to employees that address the hazards associated with the tree work they perform. This includes ensuring the proper use and maintenance of all safety equipment, personal protection equipment, machinery, and tools. Additionally, our team conducts an initial job site inspection and performs daily hazard assessments before the start of each workday to identify all existing hazards and other potentially dangerous conditions.' },
  { q:'Can you provide references and/or previous customer reviews?', a:'R&R Tree Service has been serving the community of Atlanta, Georgia for over 30 years. Our clients have great things to say about our service – read our testimonials here.' },
  { q:'Will you provide a detailed, free estimate?', a:'We offer competitive pricing and free estimates for all of our clients! Call us today at 678-482-9994 for a free quote.' },
  { q:'Will you remove all debris from my property?', a:'R&R Tree Service is a family-owned business that has been providing quality tree care in Atlanta for over 30 years. We pride ourselves on being a full-service tree company, so you can be assured that we will be on-site from start to finish to complete your job. We do not subcontract any work and own all of our machinery, which allows us to provide you with the best possible service at a competitive price. When we leave your job, we want you to be completely satisfied with our work. We’ll clean up all debris, and if you like, we can turn the shavings into mulch for your home or donate it to someone in the Atlanta community who can use it. We’re always happy to answer any questions you may have about our services, so please don’t hesitate to call us today.' },
];

const TESTIMONIALS = [
    { text:"Because our home sits on a wooded five acre lot, I am constantly in need of tree care. For the past eight years, R and R Tree Service has meticulously tended to our landscape needs. From pine tree removal to diagnosing damaged or diseased trees, I fully and completely trust this honest and hard working crew. Showing up on time and prepared to work is important to me. Follow up and clean up is equally important and they do both with attention to detail that is unsurpassed. They know my lot. They watch for any potential issues. They make recommendations. They are experienced. They follow through. They estimate fairly and give competitive prices. What more could I ask? It’s reassuring to know they will ‘take care of business’ and it’s one less hassle for this homeowner to trust the folks at R and R.", name:'Lawanna B. St Clair', loc:'Lilburn, Georgia 30047', wide:true },
  { text:"R&R recently removed more than a dozen trees from our heavily wooded lot, including a number of dangerous poplars that required considerable care in removing. The team showed up on time and did an incredibly safe and thorough job. We were relieved to have the work done and to have it done in such a professional manner. We would not hesitate to call them back or refer their services to anyone we know. Thanks so much for a job well done!", name:'Michael & Jennifer L.', loc:'Lawrenceville, GA', wide:false },
  { text:"Within 24-hours of being contacted, Randy and his team gave me a quote and then removed two mature trees (Oak and Maple) which were uprooted during Hurricane Helene.  They arrived at the crack of dawn, addressed this very threatening situation where the trees were on top of wires and over the sidewalk and street, and finished before lunch.  They did all this without disturbing the surrounding mature plantings.  True pros.  I highly recommend them.", name:'Jane B.', loc:'Georgia', wide:false },
  { text:"We have used R and R Tree Service since we moved to the Atlanta area over 16 years ago. They are professional, dependable, and do an excellent job of cutting trees and cleaning up before leaving. In addition, they offer a crane service which we find to be a definite advantage in that there is never any damage to surrounding trees and other plantings. We recommend them often to friends and neighbors. We are very particular in selecting vendors and we can sincerely recommend them without reservation. They are competitively priced, are honest and a pleasure to work with!", name:'John and Carol H.', loc:'Alpharetta, GA', wide:true },
];

const AREAS = ['Buford','Alpharetta','Atlanta','Avondale Estates','Cumming','Decatur','Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville','Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee'];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        <span className={`faq-arrow ${open?'faq-arrow--open':''}`}>▼</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="faq-body"
            initial={{ height:0, opacity:0 }}
            animate={{ height:'auto', opacity:1 }}
            exit={{ height:0, opacity:0 }}
            transition={{ duration:0.25 }}
            style={{ overflow:'hidden' }}>
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', message:'' });
  const [sent, setSent] = useState(false);
  const ch = k => e => setForm({ ...form, [k]: e.target.value });
  if (sent) return (
    <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
      style={{ textAlign:'center', padding:'var(--sp-3xl)', display:'flex', flexDirection:'column', alignItems:'center', gap:'var(--sp-md)' }}>
      <div style={{ fontSize:'3rem' }}>✅</div>
      <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.4rem', textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--white)' }}>Thank You!</h3>
      <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.9rem' }}>
        We'll be in touch within 24 hours. Urgent? Call <a href="tel:678-482-9994" style={{ color:'var(--red-light)' }}>678-482-9994</a>.
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
        <label className="form-label" htmlFor="f-svc">Service Needed</label>
        <select id="f-svc" className="form-select" value={form.service} onChange={ch('service')}>
          <option value="">Select a service…</option>
          {['Tree Trimming','Tree Removal','Land Clearing','Stump Grinding','Crane Tree Service','Firewood Delivery','Mulch Delivery','Retention Pond Maintenance','Emergency Service','Other / Not Sure'].map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="f-msg">Project Details</label>
        <textarea id="f-msg" className="form-textarea" placeholder="Describe the trees, location, any urgency…" value={form.message} onChange={ch('message')} />
      </div>
      <motion.button type="submit" className="btn btn-red form-submit"
        whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}>
        Request My Free Quote →
      </motion.button>
      <p className="form-note">By submitting you agree to be contacted by R&R Tree Service. No spam, ever.</p>
    </form>
  );
}

export default function Home() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior:'smooth' });

  return (
    <main id="home">

      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero__bg" aria-hidden="true">
          <img src="/home-banner.webp"
               alt="Professional tree service" loading="eager" fetchpriority="high" />
          <div className="hero__overlay" />
        </div>
        {/* <div className="hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="hero__grid">

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
                <span className="hero__title-red">Atlanta, GA</span>
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
                <motion.a href="#contact" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Get a Free Quote →
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
              </motion.div>

              <motion.div className="hero__trust"
                initial={{ opacity:0 }} animate={{ opacity:1 }}
                transition={{ duration:0.6, delay:0.8 }}>
                {['ISA Certified Arborist','Licensed & Insured','39+ Yrs Experience','Free Estimates'].map(t => (
                  <div key={t} className="hero__trust-item">
                    <span className="hero__trust-dot">✓</span>{t}
                  </div>
                ))}
              </motion.div>
            </div>

            

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

      {/* ── SERVICE ICON STRIP ── */}
      <section>
        <div className="strip">
          <div className="container">
            <motion.div className="strip__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once:true }}>
              {STRIPS.map(s => (
                <motion.a key={s.label} href="#services" className="strip__item"
                  variants={fadeUp}
                  onClick={e => { e.preventDefault(); goto('#services'); }}>
                  <div className="strip__icon">{s.icon}</div>
                  <span className="strip__label">{s.label}</span>
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
                <img src="/About-1.jpg"
                     alt="Arborist at work" loading="lazy" />
              </div>
              <div className="about__img-sec">
                <img src="/About-2.jpg"
                     alt="Georgia trees" loading="lazy" />
              </div>
              <div className="about__badge">
                <span className="about__badge-num">39</span>
                <span className="about__badge-lbl">Years of<br />Service</span>
              </div>
            </motion.div>

            <div>
              <motion.span className="eyebrow" variants={fadeUp}>About R&R Tree Service</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Atlanta's Trusted Tree Care Experts Since 1986
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp} style={{ color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'var(--sp-sm)' }}>
                R&amp;R Tree Service has been a cornerstone of quality tree services for over three decades.
                We're more than just a tree service — we're your neighbors, dedicated to preserving the
                beauty and safety of your property.
              </motion.p>
              <motion.p variants={fadeUp} style={{ color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'var(--sp-md)' }}>
                We do not subcontract any work, own all our machinery, and have our own ISA board-certified
                arborist on staff. Every job is handled by our trained crew from start to complete cleanup.
              </motion.p>
              <motion.div className="about__features" variants={stagger}>
                {ABOUT_FEATURES.map(f => (
                  <motion.div key={f.title} className="about__feat" variants={fadeUp}>
                    <span className="about__feat-icon">{f.icon}</span>
                    <div>
                      <div className="about__feat-title">{f.title}</div>
                      <div className="about__feat-desc">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="about__ctas" variants={fadeUp}>
                <motion.a
  href="tel:678-482-9994"
  className="btn btn-red"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
>
  <img alt="" className='phone-icon' src="/phone-call.png" />
  Call For a Free Quote
</motion.a>
                <motion.a href="#contact" className="btn btn-outline-black"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Request Estimate
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </InView>

      {/* ── SERVICES ── */}
      <InView className="services-section" id="services">
        <div className="container">
          <motion.div className="services-section__hdr" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>What We Do</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>Our Services</motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p className="services-section__desc" variants={fadeUp}>
              R&amp;R Tree Service offers licensed, bonded, and insured tree removal, trimming,
              stump grinding, mulching, and more across North Atlanta and surrounding areas.
            </motion.p>
          </motion.div>
          <motion.div className="services-grid" variants={stagger}>
            {SERVICES.map(s => (
              <motion.article key={s.title} variants={fadeUp}
                className={`svc-card svc-card--${s.layout}`}>
                <img className="svc-card__img" src={s.img} alt={s.title} loading="lazy" />
                <div className="svc-card__overlay" />
                {s.badge && <span className="svc-card__badge">{s.badge}</span>}
                <div className="svc-card__content">
                  {/* <span className="svc-card__icon">{s.icon}</span> */}
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__desc">{s.desc}</p>
                  <span className="svc-card__learn">Learn More →</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── EMERGENCY ── */}
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
              <motion.a href="tel:678-482-9994" className="btn btn-black"
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
                <motion.a href="#contact" className="btn btn-red"
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
              <span className="red-bar" />
              <div className="trust__text">
                <motion.p variants={fadeUp}>
                  When it comes to the trees on your property, R&amp;R is the name to trust. We are proud
                  to be a locally owned and operated Atlanta tree service, committed to serving our
                  community with the highest level of professionalism and care.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We do not subcontract any work — we have our own ISA board-certified arborist on staff
                  and are also members of the Georgia Association of Arborists and the Tree Care Industry's
                  Association.
                </motion.p>
              </div>
              <motion.div className="trust__pills" variants={stagger}>
                {['ISA Board-Certified Arborist','Georgia Assoc. of Arborists','Tree Care Industry Assoc.','Fully Licensed & Bonded','No Subcontracting','Free Estimates','Full Clean-Up Included','24/7 Emergency Service'].map(p => (
                  <motion.span key={p} className="trust__pill" variants={fadeUp}>
                    <span className="trust__pill-check">✓</span>{p}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div style={{ display:'flex', gap:'var(--sp-sm)', flexWrap:'wrap' }} variants={fadeUp}>
                <motion.a href="#contact" className="btn btn-red"
                  onClick={e => { e.preventDefault(); goto('#contact'); }}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Get a Free Quote
                </motion.a>
                <motion.a href="tel:678-482-9994" className="btn btn-outline-black"
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}>
                  Call Us Today
                </motion.a>
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.2rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em', color:'var(--black)', marginBottom:'var(--sp-md)' }}>
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
          <motion.div className="testimonials__hdr" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp} style={{ color:'var(--red-light)' }}>
              Client Reviews
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
              What Our Clients Say
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp} style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.95rem' }}>
              Over 39 years of exceptional service — hear directly from North Georgia homeowners.
            </motion.p>
          </motion.div>
          <motion.div className="testimonials__grid" variants={stagger}>
            {TESTIMONIALS.map(t => (
              <motion.div key={t.name} className={`tcard ${t.wide?'tcard--wide':''}`} variants={fadeUp}>
                <div className="tcard__quote">"</div>
                <div className="tcard__stars">{'★★★★★'.split('').map((s,i)=><span key={i}>{s}</span>)}</div>
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
              <img src="/Home-Coverage.jpg"
                   alt="North Georgia" loading="lazy" />
              <div className="areas__visual-overlay" />
              <div className="areas__visual-label">Serving North Atlanta &amp; All Surrounding Communities</div>
            </motion.div>
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Coverage</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Service Areas in Atlanta, Georgia
              </motion.h2>
              <span className="red-bar" />
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
              <motion.a href="#contact" className="btn btn-red"
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
      <InView className="contact-sec" id="contact">
        <div className="container">
          <div className="contact__grid">
            <div>
              <motion.span className="eyebrow" variants={fadeUp} style={{ color:'var(--red-light)' }}>Get In Touch</motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
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

    </main>
  );
}