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


const WHY_POINTS = [
  {
    title: 'Complete Stump Elimination',
    desc: 'We grind stumps below ground level 4-7 inches below grade, eliminating the eyesore and safety hazard.',
  },
  {
    title: 'Root Removal',
    desc: 'We address the root system to prevent regrowth and make the most of your land.',
  },
  {
    title: 'Post-Grinding Cleanup',
    desc: "We leave your property clean and tidy, ready for landscaping or development.",
  },
  {
    title: 'Soil Conditioning',
    desc: "We can prepare the ground for new plantings or sod installation.",
  },
];

const SIGNS = [
  {
    title: 'Prepare Land for Development or Landscaping',
    desc: "Remove obstacles and create a blank canvas for your vision.",
  },
  {
    title: 'Enhance Aesthetic Appeal and Safety',
    desc: "Eliminate tripping hazards and improve the look of your property.",
  },
  {
    title: 'Ensure Compliance with Local Regulations and Permits in Buford',
    desc: "Avoid fines and legal issues by trusting professionals who understand local ordinances.",
  },
  {
    title: 'Utilize Proper Equipment and Techniques to Minimize Environmental Impact',
    desc: "Our state-of-the-art stump grinder equipment is efficient and eco-friendly. Stumps are removed correctly to ensure safety and compliance.",
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Initial Site Assessment and Consultation',
    desc: 'We evaluate the size, number, and location of stumps to develop a personalized plan. Additionally, we consider the ease of access to the stumps, as better accessibility can significantly reduce the time required for the grinding process.',
  },
  {
    num: '02',
    title: 'Customized Stump Grinding Plans to Suit Your Needs',
    desc: "We tailor our approach to your specific needs and budget, ensuring that no job is too big or small and each is handled with care and expertise.",
  },
  {
    num: '03',
    title: 'Efficient Grinding Techniques',
    desc: 'Our experienced crew uses the latest techniques for safe and efficient tree stump removal. They perform grinding tasks professionally, ensuring high standards of safety and efficiency.',
  },
  {
    num: '04',
    title: 'Cleanup and Debris Removal',
    desc: 'We haul away the wood chips or leave them for your use as mulch. Additionally, our cleanup process ensures that your yard is left clean and ready for future use, enhancing both its appearance and functionality.',
  },
];

const ARBORIST_POINTS = [
  { title: 'Local Expertise', desc: 'We understand the unique challenges and regulations of stump removal in the Buford area.' },
  { title: 'Proven Track Record', desc: 'Our satisfied customers attest to our commitment to quality and service. As a locally owned business, R&R Tree & Landscaping has built a strong reputation in the stump grinding industry and the Buford, GA community.' },
  { title: 'Licensed and Insured', desc: 'We are fully licensed and insured for your peace of mind.' },
  { title: 'Competitive Pricing', desc: "We offer fair and transparent pricing with no hidden fees." },
];

const EQUIPMENT_POINTS = [
  { title: 'Specialized Gear', desc: 'From cranes and bucket trucks for reaching tall trees to precision rigging and cutting tools, we have the right equipment for every situation. This allows us to tackle complex removals safely and effectively.' },
  { title: 'Eco-Friendly Practices', desc: 'Whenever possible, we prioritize eco-friendly disposal methods for removed trees. This may include wood chipping for mulch, repurposing lumber, or donating firewood to local organizations.' },
  { title: 'Minimizing Our Footprint', desc: 'Our equipment is regularly maintained to ensure optimal fuel efficiency and reduce emissions. We also implement strategies to minimize ground disturbance during tree removal projects.' },
];

const PRICING_POINTS = [
  { icon: '/exam.png', title: 'Get Your Free Estimate Online', desc: 'Visit our “Contact Us” page and share a few details about your project. We’ll promptly contact you to schedule a convenient on-site assessment.' },
  { icon: '/phone-call.png', title: 'Speak with an Expert', desc: 'Prefer a personal touch? Call us at 678-482-9994 to discuss your needs and schedule a consultation..' },
];

const REVIEWS = [
  {
    text: "We have used R&R Tree company twice in the past couple of years to remove trees from our property. They have done a fantastic job from start to finish. Communication throughout the entire process was very good and the tree removal process was quick. Their crew did an amazing job with the cleanup. Thank you!",
    name: 'William C.',
    loc: 'North Georgia',
  },
];

const FAQS = [
  { q: 'What is stump grinding service?', a: 'Stump grinding service is the process of using a machine to grind a tree stump and roots into small pieces.' },
  { q: 'How long does it take to grind a stump?', a: 'The time it takes to grind a stump depends on its size and location. However, most stumps can be ground in a few hours.' },
  { q: 'Is stump grinding service safe?', a: 'Yes, stump grinding service is safe when done by a professional. We take all necessary safety precautions to ensure that the surrounding area is clear and safe during the grinding process.' },
  { q: 'Can I remove a stump myself?', a: 'We do not recommend removing a stump yourself, as it can be dangerous and time-consuming. It is best to leave the job to a professional stump grinding service like R&R Tree Service in North Georgia.' },
  { q: 'How much does stump grinding service cost in North Georgia?', a: 'The cost of stump grinding service in North Georgia varies depending on the size and location of the stump. Contact us for a free estimate on our stump grinding service in North Georgia. Contact us today at R&R Tree Service in North Georgia to schedule your stump grinding service and remove any unwanted tree stumps from your property. We are committed to providing you with the highest quality service and satisfaction.' },
  { q: 'Can stump grinding affect the soil composition or pH levels?', a: 'Stump grinding involves breaking down the stump into wood chips, which are often left in the hole. Over time, these wood chips can alter the soil’s composition, affecting pH levels and nutrient availability. It’s essential to consider potential impacts on soil quality when opting for stump grinding.' },
  { q: 'Does stump grinding attract certain insects or pests?', a: 'The decomposition process of the wood chips left behind after stump grinding can attract specific insects and pests. Understanding which insects might be drawn to the area post-grinding can help in taking preventive measures if necessary.' },
    { q: 'Are there regulations or environmental considerations regarding stump grinding residue?', a: 'With R&R Tree Service, you can be confident that your trees are in good hands. We’re committed to providing expert tree trimming services in North Georgia that enhance the health, safety, and beauty of your property. Additionally, R&R Tree Service complies with all Georgia regulations regarding stump grinding residue. Contact us today for a free quote!' },

];

const AREAS = ['Alpharetta','Atlanta','Avondale Estates','Buford','Cumming','Decatur','Duluth','Flowery Branch','Gainesville','Grayson','Lawrenceville','Lilburn','Norcross','Roswell','Snellville','Stone Mountain','Sugar Hill','Suwanee'];

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
            src="/Stump-Grinding-bg.jpg"
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
              <span className="tt-hero__breadcrumb-cur">Stump Grinding</span>
            </motion.div>

            <motion.div className="tt-hero__eyebrow"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="tt-hero__eyebrow-line" />
              License, Insured, and Experience Team
            </motion.div>

            <motion.h1 className="tt-hero__title"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}>
              Stump Grinding & Removal in{' '}
              <span className="tt-hero__title-red">North Georgia</span>
            </motion.h1>

            <motion.p className="tt-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              R&R has been grinding stumps safely & efficiently in the greater North Georgia area for over 30 years.
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
              <motion.span className="eyebrow" variants={fadeUp}>Expert Stump Grinding</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Expert Stump Grinding Services in North Georgia
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Unsightly tree stumps can be more than just an eyesore. They can attract pests, become tripping hazards, and make your property look unkempt.
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                At R&R Tree & Landscaping, we specialize in providing efficient and affordable stump grinding services in Buford, GA. Our professional team is equipped to handle stumps of all sizes, leaving your land smooth, safe, and ready for your next project. We are committed to serving both residential and commercial clients, ensuring reliability and trustworthiness that our clients can depend on.
              </motion.p>
              <motion.div className="tt-intro__ctas" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-red"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> Call for Free Quote
                </motion.a>
              </motion.div>
            </div>

            <motion.div className="tt-intro__img-wrap" variants={fadeUp} custom={0.2}>
              <img
                src="/Expert-Stump-Grinding.jpg"
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
              When it comes to stump grinding, safety matters.{' '}
              <span style={{ color: 'var(--red)' }}>Choose R&R Tree Service in Buford, GA</span>{' '}
              for quality work you can trust.
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
                <img src="/Stump-Grinding-Benefits1.jpg"
                     alt="Tree trimming work" loading="lazy" />
              </div>
              <div className="tt-why__img-sec">
                <img src="/Stump-Grinding-Benefits2.jpg"
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
                Our Stump Grinding and Tree Stump Removal Services Include:
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                Our comprehensive stump grinding and tree stump removal services in North Georgia go beyond just removing the visible stump:
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
                Why Us
              </motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
                Why Choose Professional Stump Grinding in Buford, GA?
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-signs__intro" variants={fadeUp}>
                Investing in professional stump grinding services offers a multitude of benefits for your property:
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
                src="/Stump-Grinding-Safety-Measures.jpg"
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
              Our Stump Grinding Process
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              Our stump grinding process is designed to be thorough, efficient, and tailored to your specific needs. Our team is capable of handling various stump grinding tasks efficiently, ensuring both residential and commercial projects are completed with expertise.
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
                src="/Stump-Grinding-Process.jpg"
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
            <motion.span className="eyebrow" variants={fadeUp}>Our Team</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Experienced Crew
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              At R&R Tree & Landscaping, we believe that experience matters. Our stump grinding crew is comprised of skilled professionals with years of experience in the tree service industry, dedicated to providing high-quality stump grinding services.
            </motion.p>
            <br />
            <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              We adhere to the highest industry standards and safety protocols for every project we undertake. Our commitment to safety not only protects our crew but also safeguards your property and the surrounding environment.
            </motion.p>
          </motion.div>

          <motion.div className="tt-experts__grid" variants={stagger}>
            {/* Arborists — dark */}
            <motion.div className="tt-experts__panel tt-experts__panel--dark" variants={fadeUp}>
              <h3 className="tt-experts__panel-title">Why Choose R&R Tree & Landscaping for Stump Grinding and Tree Stump Removal?</h3>
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
                Transparent Pricing and Free Estimates
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-pricing__desc" variants={fadeUp}>
                <strong style={{ color: 'var(--white)' }}>No Surprises, Just Great Value: Get Your Free Estimate Today</strong>{' '}
                Ready to find out how we can help with your stump grinding needs?
              </motion.p>

              <motion.div className="tt-pricing__points" variants={stagger}>
                {PRICING_POINTS.map(p => (
                  <motion.div key={p.title} className="tt-pricing__point" variants={fadeUp}>
                    <div className="tt-pricing__point-icon">
                        <img src={p.icon} alt={p.title} />
                    </div>
                    <div>
                      <div className="tt-pricing__point-title">{p.title}</div>
                      <div className="tt-pricing__point-desc">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p className="tt-pricing__desc" variants={fadeUp}>
                Your satisfaction is our priority. Let’s work together to enhance your property’s safety and beauty!
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
                src="/Stump-Grinding-Transparent.jpg"
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
              Your Stump Grinding Questions, Answered
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
                  Ready for Expert Stump Grinding<br />in Buford?
                </motion.h2>
                <motion.p className="tt-cta__sub" variants={fadeUp}>
                  Licensed &amp; Insured · Free Estimates · 40 Years Experience
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