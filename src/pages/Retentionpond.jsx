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
    title: 'Clean Water, Healthy Ecosystem',
    desc: 'Regular maintenance removes debris and pollutants, promoting a balanced aquatic ecosystem with thriving plant and animal life.',
  },
  {
    title: 'Flood Prevention, Property Protection',
    desc: 'Properly maintained retention ponds effectively manage stormwater runoff, protecting your property and surrounding areas from costly flood damage.',
  },
  {
    title: 'Enhanced Beauty, Increased Value',
    desc: "A well-maintained pond is a beautiful asset, enhancing your property’s curb appeal and increasing its overall value.",
  },
  {
    title: 'Compliance Confidence, Peace of Mind',
    desc: "Expert maintenance ensures your pond meets environmental regulations, avoiding potential fines and legal complications.",
  },
  {
    title: 'Long-Term Savings, Sustainable Solution',
    desc: "Preventative maintenance protects your investment, avoiding costly repairs and ensuring the long-term health and functionality of your pond.",
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
    desc: 'One of our experienced crew members will visit your property to evaluate the tree(s) in question, discuss your concerns, and outline potential solutions. We’ll provide a clear explanation of the recommended work and answer all of your questions.',
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
  { title: 'experienced team of crew members', desc: 'Our crew members demonstrate their extensive knowledge of tree biology, care, and safe practices, which means better solutions for your trees and property.' },
  { title: 'Years of Experience', desc: 'Our crew isn’t just trained, they’re seasoned. We have a proven track record of handling complex tree removals throughout the North Georgia area, navigating tight spaces, and protecting delicate landscapes.' },
  { title: 'Safety is Our Priority', desc: 'We strictly adhere to industry standards and prioritize safety protocols at every stage. Our team is equipped with top-quality gear and undergoes ongoing training to ensure the well-being of everyone on your property.' },
  { title: 'North Georgia Focused', desc: "We understand the unique tree species, regulations, and challenges of working in the North Georgia area. This local knowledge means smooth project execution and compliance with city ordinances." },
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
    text: "I highly recommend R&R. Randy came out to look at our 200 year old red oak. He recommended a great arborist to check the health of the tree before coming up with a solid plan on pruning. He and the arborist conferred  and came up with a plan to prune the tree with the benefit of our house as well as the beautiful old tree in mind. Randy’s brother Pat ran a very professional and skilled crew on the day of trimming. The tree looks amazing and we feel better about it being close to our house. Their clean up was spectacular and they left us some choice logs for our fire pit.  Randy, Pat, and the men they have in there crew exceeded any expectations we had. We had two other quotes from two other companies, both had plans of needlessly hacking more off than was safe for the tree and R&R beat them both in price. R&R’s knowledge, service and affordability is second to none.",
    name: 'Caleb S.',
    loc: 'North Georgia',
  },
  {
    text: "5 stars for R & R Tree Service. This 2-man crew had amazing skills, not only climbing my 80’ tree with dexterity, but skills with saws, ropes, teamwork and backing heavy equipment up my steep curvy driveway first try. They dropped the tree down in steps and took measures to lower heavy branches with ropes and make logs fall flat to avoid creating divots in the yard. They took no breaks, stuck with it till the job was done and cleaned up afterward. The stump grinder came a couple days later. That, too, was a nifty piece of equipment. It looked like a small tank but completely operated by remote control.   Beginning to end, my experience with R&R has been favorable. Tree removal is not cheap, but their quote was very reasonable. Sally in the office was super nice and responsive to my calls and emails. Great job all around. Thanks!",
    name: 'H.H.',
    loc: 'North Georgia',
  },
];

const FAQS = [
  { q: 'What is the importance of retention pond maintenance in North Georgia?', a: 'Retention pond maintenance in North Georgia is crucial for various reasons. These ponds help manage stormwater runoff, prevent flooding, and control erosion. Regular maintenance ensures their optimal functionality, compliance with regulations, and the overall health of the environment.' },
  { q: 'How often should retention ponds be inspected and maintained?', a: 'The frequency of retention pond inspections and maintenance can vary based on factors like the size of the pond, local regulations, and weather conditions. Generally, ponds should be inspected at least annually and more frequently after heavy rain events to ensure they are operating effectively.' },
  { q: 'What services does R&R Tree Service offer for retention pond maintenance?', a: 'At R&R Tree Service, we offer a comprehensive range of retention pond maintenance services in North Georgia. Our offerings include debris removal, sediment removal, vegetation management, erosion control, structural repairs, water quality testing, and more. Our experienced team ensures that your pond remains compliant and functional.' },
  { q: 'How does proper retention pond maintenance contribute to environmental conservation?', a: 'Proper retention pond maintenance plays a significant role in environmental conservation. Well-maintained ponds help filter pollutants from stormwater, improve water quality, and create habitats for aquatic life. By managing stormwater runoff effectively, these ponds contribute to the overall health of local ecosystems.' },
  { q: 'What are the potential consequences of neglecting retention pond maintenance?', a: 'Neglecting retention pond maintenance can lead to a range of issues. Accumulated debris, sediment, and vegetation can obstruct water flow, causing flooding and erosion. Additionally, poor water quality can harm aquatic ecosystems and violate environmental regulations, potentially resulting in fines.' },
  { q: 'How does R&R Tree Service ensure compliance with v retention pond regulations?', a: 'R&R Tree Service is well-versed in North Georgia retention pond regulations. Our experienced team stays updated on local ordinances and requirements, ensuring that all maintenance work aligns with these regulations. We conduct thorough inspections, implement necessary repairs, and provide documentation for compliance purposes.' },
  { q: 'What sets R&R Tree Service apart as a reliable choice for retention pond maintenance in North Georgia?', a: 'R&R Tree Service stands out for its commitment to excellence and extensive expertise in retention pond maintenance. With certified experienced team of crew members and a skilled team, we offer a holistic approach to pond care. Our dedication to environmental health, prompt response, and tailored solutions make us a trusted partner for maintaining your retention ponds.' },
  { q: 'Can aquatic vegetation in a retention pond be used for any beneficial purposes?', a: 'Some retention ponds develop aquatic vegetation over time. A less common question may revolve around whether this vegetation can be repurposed for any beneficial use, such as composting, mulching, or even supporting local wildlife. Understanding how to manage and utilize the vegetation in an eco-friendly manner can be an interesting aspect of retention pond maintenance.' },
  { q: 'What role do amphibians and reptiles play in retention pond ecosystems, and how can their presence be enhanced or managed?', a: 'Retention ponds often attract a variety of wildlife, including amphibians and reptiles. Uncommonly asked is how the presence of these creatures affects the overall ecosystem of the pond and whether there are ways to encourage their presence or manage it for ecological balance.' },
  { q: 'Are there innovative technologies or approaches for minimizing sediment buildup in retention ponds?', a: 'While sediment buildup is a common concern in retention pond maintenance, less frequently asked is whether there are innovative technologies or alternative approaches beyond traditional dredging methods. Exploring new technologies or strategies for mitigating sediment accumulation can be an interesting aspect of retention pond management.' },
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
            src="/Retention-Pond-bg.jpg"
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
              <span className="tt-hero__breadcrumb-cur">Retention Pond Maintenance</span>
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
              Retention Pond Maintenance in{' '}
              <span className="tt-hero__title-red">North Georgia</span>
            </motion.h1>

            <motion.p className="tt-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              Keep your retention pond compliant and functioning optimally with R&R’s experts.

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
              <motion.span className="eyebrow" variants={fadeUp}>Discover Why We’re North Georgia Top Choice!</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Need Retention Pond Maintenance?
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Staying in compliance with county regulations is no small task. Navigating through a maze of inspections, codes, and other intricate requirements demands a keen eye for detail.
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Why worry about the possibility of fines when you can place your trust in R&R Tree Service for all your retention pond maintenance needs?
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Our holistic range of services guarantees the seamless functionality of your pond while ensuring it remains well within the boundaries of the law.
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
                src="/Expert-Retention-Pond.jpg"
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
              When it comes to retention pond maintenance, expertise matters.{' '}
              <span style={{ color: 'var(--red)' }}>Choose R&R for quality work you can trust.</span>{' '}
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
                <img src="/Retention-Pond-Benefits1.jpg"
                     alt="Tree trimming work" loading="lazy" />
              </div>
              <div className="tt-why__img-sec">
                <img src="/Retention-Pond-Benefits2.jpg"
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
                Why Retention Pond Maintenance is Important
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                Retention pond maintenance is about more than just aesthetics; it’s an essential practice that protects your property, the environment, and your wallet. Here’s why:
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
      <InView className="tt-experts tt-experts-gray" id="tt-experts ">
        <div className="container">
          <motion.div className="tt-experts-heading" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto var(--sp-3xl)' }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Our Team</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Expertise Matters
            </motion.h2>
            <span className="red-bar red-bar--center" />
          </motion.div>

          <motion.div className="tt-experts__grid" variants={stagger}>
            {/* Arborists — dark */}
            <motion.div className="tt-experts__panel tt-experts__panel--dark" variants={fadeUp} style={{ textAlign: 'center' }}>
              {/* <h3 className="tt-experts__panel-title">Certified Arborists and Experienced Crew</h3> */}
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
                Worried about flooding, erosion, or keeping your retention pond in compliance?
              </p>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
               R&R Tree Service takes the hassle out of pond maintenance. Our experienced team handles everything from inspections and cleaning to erosion control, ensuring your pond is a valuable asset, not a liability.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
               Call us today at 678-482-9994 and let us take care of your pond, so you can enjoy peace of mind.
              </p>
              <motion.a href="tel:678-482-9994" className="btn btn-red"
                style={{ marginTop: 'var(--sp-lg)', alignSelf: 'center' }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Contact Us Today
              </motion.a>
            </motion.div>

            
          </motion.div>
        </div>
      </InView>


      {/* ── FAQ ── */}
      <InView className="tt-faq" id="tt-faq">
        <div className="container">
          <motion.div className="tt-faq-heading" style={{ marginBottom: 'var(--sp-3xl)' }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Knowledge Base</motion.span>
            <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
              Your Retention Pond Maintenance Questions, Answered
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
                  Ready for Expert Retention Pond Maintenance<br />in Buford?
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