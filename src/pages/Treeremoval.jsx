// TreeTrimming.jsx | R&R Tree Service
// Tree Trimming & Pruning in Atlanta, GA
// Exact content from: https://randrtreeservice.com/tree-trimming-in-atlanta/
// Design system: #D92227 red + #000000 black

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './TreeTrimming.css';

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
    desc: 'Our certified arborists identify trees with structural weaknesses or disease, offering expert assessments and safe solutions. From proactive pruning to full removal, we’ll protect your safety and property.',
    img: '/Hazardous-Tree-Assessment-and-Removal.webp',
  },
];

const WHY_POINTS = [
  {
    title: 'Safe Handling of Dangerous Trees',
    desc: 'Diseased, storm-damaged, or leaning trees pose a significant risk. We have the expertise to assess and remove these hazards without injury or damage to your home, powerlines, or neighboring properties.',
  },
  {
    title: 'Protecting Your Investment',
    desc: 'Overgrown roots, falling branches, and unstable trees can cause costly problems. Proactive removal protects your home’s foundation, landscaping, and overall value.',
  },
  {
    title: 'Navigating Atlanta’s Rules',
    desc: "Tree removal in Atlanta often requires permits and adherence to regulations. We’ll handle all administrative steps, ensuring a smooth and legal process.",
  },
  {
    title: 'Specialized Equipment and Expertise',
    desc: "Felling trees safely takes the right gear and honed techniques. Our team uses professional-grade tools and follows best practices, minimizing the impact on your landscape and surrounding areas.",
  },
];

const SIGNS = [
  {
    title: 'Pre-Work Assessment',
    desc: "Before starting any job, we thoroughly assess the tree, surrounding area, and potential hazards like power lines or nearby structures.",
  },
  {
    title: 'Protective Equipment and Gear',
    desc: "Our crew always utilizes personal protective equipment (PPE) including hard hats, eye and ear protection, safety harnesses, and cut-resistant clothing.",
  },
  {
    title: 'Controlled Work Zones',
    desc: "We establish clear work zones and use signage to keep bystanders at a safe distance during tree removal operations.",
  },
  {
    title: 'Insurance Coverage',
    desc: "We carry comprehensive liability and workers’ compensation insurance. This protects you and our team in the unlikely event of an accident.",
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Initial On-Site Assessment and Consultation',
    desc: 'One of our experienced arborists will visit your property to evaluate the tree(s) in question, discuss your concerns, and outline potential solutions. We’ll provide a clear explanation of the recommended work and answer all of your questions.',
  },
  {
    num: '02',
    title: 'Customized Tree Removal Plans to Suit Client Needs',
    desc: "We don’t believe in a one-size-fits-all approach. Our plans consider factors like tree size, location, accessibility, and your specific goals for the space. We’ll work with you to create a solution that aligns with your needs and budget.",
  },
  {
    num: '03',
    title: 'Safe and Controlled Tree Removal Techniques',
    desc: 'Our team employs industry-leading safety practices and precise techniques to remove trees in a controlled manner. We’ll protect surrounding structures, landscaping, and minimize disruption to your property.',
  },
  {
    num: '04',
    title: 'Thorough Cleanup and Debris Removal, including Stump Grinding',
    desc: 'We don’t leave a mess behind! After the tree is removed, we’ll meticulously clean up branches, wood chips, and any other debris. If desired, our stump grinding services can create a level surface, ready for replanting or new landscaping features.',
  },
];

const ARBORIST_POINTS = [
  { title: 'Certified Arborists', desc: 'Our arborists demonstrate their extensive knowledge of tree biology, care, and safe practices, which means better solutions for your trees and property.' },
  { title: 'Years of Experience', desc: 'Our crew isn’t just trained, they’re seasoned. We have a proven track record of handling complex tree removals throughout the Atlanta area, navigating tight spaces, and protecting delicate landscapes.' },
  { title: 'Safety is Our Priority', desc: 'We strictly adhere to industry standards and prioritize safety protocols at every stage. Our team is equipped with top-quality gear and undergoes ongoing training to ensure the well-being of everyone on your property.' },
  { title: 'Atlanta Focused', desc: "We understand the unique tree species, regulations, and challenges of working in the Atlanta area. This local knowledge means smooth project execution and compliance with city ordinances." },
];

const EQUIPMENT_POINTS = [
  { title: 'Specialized Gear', desc: 'From cranes and bucket trucks for reaching tall trees to precision rigging and cutting tools, we have the right equipment for every situation. This allows us to tackle complex removals safely and effectively.' },
  { title: 'Eco-Friendly Practices', desc: 'Whenever possible, we prioritize eco-friendly disposal methods for removed trees. This may include wood chipping for mulch, repurposing lumber, or donating firewood to local organizations.' },
  { title: 'Minimizing Our Footprint', desc: 'Our equipment is regularly maintained to ensure optimal fuel efficiency and reduce emissions. We also implement strategies to minimize ground disturbance during tree removal projects.' },
];

const PRICING_POINTS = [
  { icon: '/exam.png', title: 'Fill Out Our Online Form', desc: 'Visit our “Contact Us” page and provide a few details about your project. We’ll get back to you promptly to schedule your on-site assessment.' },
  { icon: '/phone-call.png', title: 'Call Us Directly', desc: 'Prefer to speak with someone right away? Give us a call at 678-482-9994' },
];

const REVIEWS = [
  {
    text: "We have used R&R Tree company twice in the past couple of years to remove trees from our property. They have done a fantastic job from start to finish. Communication throughout the entire process was very good and the tree removal process was quick. Their crew did an amazing job with the cleanup. Thank you!",
    name: 'William C.',
    loc: 'Atlanta, GA',
  },
];

const FAQS = [
  { q: 'What is a professional tree removal service?', a: 'Professional tree removal service refers to the process of safely and efficiently removing a tree from a property, which may involve cutting down the tree, removing the stump, and disposing of the wood and debris.' },
  { q: 'Why do I need professional tree removal services?', a: 'R&R’s professional tree removal services may be necessary for various reasons, such as to remove dead or diseased trees that pose a safety risk, to clear space for new construction, or to remove trees that have outgrown their location.' },
  { q: 'What is the cost of professional tree removal services in Atlanta?', a: 'The cost of professional tree removal services in Atlanta can vary greatly depending on several factors, such as the size and type of tree, the location, and the difficulty of the removal process. You can request a free quote here.' },
  { q: 'What should I look for in a professional tree removal service', a: 'When choosing a professional tree removal service, it is important to choose a company with certified arborists, insurance, licensing, a positive reputation, and access to appropriate equipment and techniques to remove trees with safety and efficiency. At R&R Tree Service, we ensure that all the necessary requirements are met, and our extensive experience serving the Atlanta community for over 30 years is a testament to our commitment.' },
  { q: 'Can I remove a tree myself?', a: 'While it is possible to remove a tree yourself, it can be a dangerous and challenging task that requires specialized equipment and expertise. If you are unsure about your ability to safely remove a tree, contact R&R’s professional tree removal service experts to ensure the job is done safely and effectively.' },
  { q: 'What tree services do you offer in the Atlanta area?', a: 'We take pride in offering a comprehensive range of tree services tailored to meet the unique needs of our Atlanta clients. Our services include tree removal, where our skilled crews safely and efficiently remove unwanted or hazardous trees, tree pruning to promote healthy growth and maintain aesthetics, tree trimming to shape and groom trees, stump grinding for seamless removal of tree stumps, and much more. With our expertise and state-of-the-art equipment, we can handle tree-related tasks of any scale, ensuring your property looks its best year-round.' },
  { q: 'Is your tree removal service fully insured?', a: 'Yes, as a reputable tree removal company, we prioritize the safety of our team, your property, and our customers. That’s why we are fully insured, providing our clients with peace of mind during tree removal procedures. Our team of experienced arborists takes every precaution to prevent accidents and property damage, and our comprehensive insurance coverage safeguards against unforeseen events. You can trust our services to be professional, efficient, and safe.' },
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
            src="/Crane-Tree-Service.jpg"
            alt="Professional arborist trimming trees in Atlanta"
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
              <span className="tt-hero__breadcrumb-cur">Tree Removal</span>
            </motion.div>

            <motion.div className="tt-hero__eyebrow"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="tt-hero__eyebrow-line" />
              ISA Certified Arborists · North Georgia
            </motion.div>

            <motion.h1 className="tt-hero__title"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}>
              Tree Removal in{' '}
              <span className="tt-hero__title-red">Atlanta, GA</span>
            </motion.h1>

            <motion.p className="tt-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              For safe, expert tree removal in Atlanta, trust R&R. With deep roots in the community, our team understands the unique needs presented by Atlanta’s seasons and provides reliable service to homeowners, businesses, and municipalities.
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
            <motion.div className="stats-bar__grid"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              {[
                ['39+', 'Years Experience'],
                ['ISA', 'Certified Arborists'],
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
              <motion.span className="eyebrow" variants={fadeUp}>Expert tree Removal in Georgia</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Expert tree care to detect hazards early and remove dangerous trees safely.
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                You might need to remove a tree from your property for many reasons. Maybe it’s dead and posing a safety hazard, or perhaps it’s simply in the way of your new home addition.
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Whatever the motive, removing a tree can be daunting. But don’t worry—with the help of R&R, the process can be quick and hassle-free!
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Our certified tree removal experts have the equipment and expertise to safely and efficiently remove the tree without damaging your property. We’ll also dispose of the tree properly, so you won’t have to worry about it ending up in a landfill.
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Our team delivers tree removal services to keep your yard beautiful, healthy, and a source of pride. Our certified arborists will carefully assess your trees and recommend the best course of action, whether it’s:
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
                src="/Expert-tree-Removal.webp"
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
          <motion.div className="tt-services__header" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>What We Offer</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Our Tree Removal Services
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p className="tt-services__desc" variants={fadeUp}>
              Our certified arborists will carefully assess your trees and recommend the best
              approach — whether it's Comprehensive Tree Removal Services, Emergency Tree Removal, Stump Grinding and Removal, Lot Clearing and Brush Removal, or Hazardous Tree Assessment and Removal.
            </motion.p>
          </motion.div>

          <motion.div className="tt-services__grid" variants={stagger}>
            {SERVICE_TYPES.map(svc => (
              <motion.article key={svc.title} className="tt-svc-card" variants={fadeUp}>
                <div className="tt-svc-card__img-wrap">
                  <img className="tt-svc-card__img" src={svc.img} alt={svc.title} loading="lazy" />
                  <div className="tt-svc-card__img-overlay" />
                  <span className="tt-svc-card__num">{svc.num}</span>
                </div>
                <div className="tt-svc-card__body">
                  <h3 className="tt-svc-card__title">{svc.title}</h3>
                  <p className="tt-svc-card__desc">{svc.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Mid-section CTA */}
          <motion.div className="tt-services__cta"
            style={{ marginTop: 'var(--sp-3xl)', textAlign: 'center', padding: 'var(--sp-2xl)', background: 'var(--black)', borderRadius: 'var(--r-lg)', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--red)' }} />
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--white)', marginBottom: 'var(--sp-lg)' }}>
              When it comes to tree removal, safety matters.{' '}
              <span style={{ color: 'var(--red)' }}>Choose R&R tree trimming in Atlanta</span>{' '}
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
                <img src="/tree-removal-Benefits1.jpg"
                     alt="Tree trimming work" loading="lazy" />
              </div>
              <div className="tt-why__img-sec">
                <img src="/tree-removal-Benefits2.webp"
                     alt="Healthy trees" loading="lazy" />
              </div>
              <div className="tt-why__badge">
                <span className="tt-why__badge-num">39+</span>
                <span className="tt-why__badge-lbl">Years of<br />Service</span>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.span className="eyebrow" variants={fadeUp}>Benefits</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Why Choose Professional Tree Removal
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                Tree removal, especially large or complex jobs, isn’t a DIY project. Professional tree services ensure your safety, protect your property, and keep you on the right side of the law.
              </motion.p>
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                Here’s why it’s worth the investment:
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
                Warning Signs
              </motion.span>
              <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
                Safety Measures
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-signs__intro" variants={fadeUp}>
                Safety is non-negotiable in tree removal. We have rigorous safety protocols in place to protect your property, our team members, and anyone in the vicinity of the work site.
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
                src="/tree-removal-Safety-Measures.jpg"
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
              Our Tree Removal Process
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              We understand that tree removal can be a significant decision for your property. Our process is designed to be thorough, communicative, and focused on achieving the results you want, safely and efficiently.
              <br /><br />Here’s what you can expect:
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
                src="/Tree-Removal-Process.jpg"
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

      {/* ── SOCIAL PROOF / REVIEWS ── */}
      <InView className="tt-social-proof" id="tt-reviews">
        <div className="container">
          <motion.div className="tt-reviews-heading" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto var(--sp-3xl)', position: 'relative', zIndex: 1 }}
            variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}
              style={{ color: 'rgba(255,255,255,0.85)' }}>
              Customer Reviews
            </motion.span>
            <motion.h2 className="section-title section-title--lg section-title--white" variants={fadeUp}>
              See What Our Customers Are Saying
            </motion.h2>
            <span className="red-bar red-bar--center" style={{ background: 'rgba(255,255,255,0.4)' }} />
          </motion.div>

          <motion.div className="tt-social-proof__inner" variants={stagger}>
            {REVIEWS.map(r => (
              <motion.div key={r.name} className="tt-review-card" variants={fadeUp}>
                <div className="tt-review-card__stars">{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                <blockquote className="tt-review-card__text">"{r.text}"</blockquote>
                <div className="tt-review-card__author">
                  <div className="tt-review-card__avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="tt-review-card__name">— {r.name}</div>
                    <div className="tt-review-card__loc">📍 {r.loc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </InView>

      {/* ── CERTIFIED ARBORISTS + EQUIPMENT ── */}
      <InView className="tt-experts" id="tt-experts">
        <div className="container">
          <motion.div className="tt-experts-heading" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto var(--sp-3xl)' }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Our Team</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Certified Arborists &amp; Professional Equipment
            </motion.h2>
            <span className="red-bar red-bar--center" />
          </motion.div>

          <motion.div className="tt-experts__grid" variants={stagger}>
            {/* Arborists — dark */}
            <motion.div className="tt-experts__panel tt-experts__panel--dark" variants={fadeUp}>
              <h3 className="tt-experts__panel-title">Certified Arborists and Experienced Crew</h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
                At R&R Tree Service, we don’t just cut down trees – we invest in expertise. Our team is the backbone of our commitment to safe, reliable tree removal services.
              </p>
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
              <h3 className="tt-experts__panel-title">Equipment and Technology</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
                We invest in state-of-the-art equipment to ensure safe, efficient, and environmentally-conscious tree removal services. This translates into faster project completion, minimal impact on your property, and responsible handling of resources.
              </p>
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
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
                Our commitment to modern equipment and sustainable practices shows our respect for both our clients and the environment.
              </p>
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
                Transparent Pricing and Free Estimates
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-pricing__desc" variants={fadeUp}>
                <strong style={{ color: 'var(--white)' }}>No Surprises, Just Great Value: Get Your Free Estimate Today</strong>{' '}
                Ready to find out how we can help with your tree removal needs?
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
                and we can discuss your tree concerns and schedule a consultation.
                <br /><br />

No obligation, just expert advice. Let’s create a safe and beautiful space on your property!
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
                src="/Tree-Removal-Transparent.jpg"
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
              Your Tree Removal Questions, Answered
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
              Service Areas in Atlanta, Georgia
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
                  Ready for Expert Tree Removal<br />in Atlanta?
                </motion.h2>
                <motion.p className="tt-cta__sub" variants={fadeUp}>
                  ISA Certified · Licensed &amp; Insured · Free Estimates · 39+ Years Experience
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