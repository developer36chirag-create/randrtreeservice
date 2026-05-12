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
    title: 'Crown Thinning',
    desc: 'Maximizing health and light. We expertly remove excess branches, letting air and sunshine reach your tree\'s interior for stronger growth and disease resistance.',
    img: '/Crown-Thinning.jpg',
  },
  {
    num: '02',
    title: 'Crown Raising',
    desc: 'Safety and clearance in one. Need more space under your large trees? We\'ll skillfully raise the canopy to protect buildings, power lines, and create the clearance you need.',
    img: '/Crown-Raising.jpg',
  },
  {
    num: '03',
    title: 'Deadwood Removal',
    desc: 'Protecting your property and peace of mind. Dead or diseased branches are a hazard. We eliminate them for a safer, more beautiful landscape.',
    img: '/Deadwood-Removal.jpg',
  },
  {
    num: '04',
    title: 'Shaping & Pruning',
    desc: 'Revealing your tree\'s natural beauty. Our careful pruning encourages healthy growth while enhancing your tree\'s shape and overall aesthetic appeal.',
    img: '/Shaping-Pruning.jpg',
  },
  {
    num: '05',
    title: 'Vista Pruning',
    desc: 'Transforming your view. We\'ll selectively remove branches to open up a stunning view you\'ll enjoy for years to come.',
    img: '/Vista-Pruning.jpg',
  },
  {
    num: '06',
    title: 'Emergency Trimming',
    desc: 'Available 24/7 for storm damage, fallen branches, and urgent hazards. We respond fast to protect your property when it matters most.',
    img: '/Emergency-Trimming.jpg',
  },
];

const WHY_POINTS = [
  {
    title: 'Healthier Trees, Stronger Roots',
    desc: 'Trimming removes diseased branches, letting your trees focus energy on healthy growth. It also reduces stress, making them less vulnerable to pests and storms.',
  },
  {
    title: 'Reduced Hazards',
    desc: 'Dead branches are accidents waiting to happen. Proactive trimming protects your home, cars, and loved ones from unexpected damage.',
  },
  {
    title: 'Light = Life',
    desc: "Expert pruning opens up the canopy, letting vital sunlight and air reach your tree's interior — boosting its health and resilience.",
  },
  {
    title: 'Property Value Boost',
    desc: "Well-maintained trees add thousands to your home's value. Think of trimming as a smart investment that pays off at resale.",
  },
  {
    title: 'Enjoyment Without Worry',
    desc: 'Relax knowing your trees are safe and beautiful — a source of pride, not potential problems.',
  },
];

const SIGNS = [
  {
    title: 'Overgrown & Tangled Branches',
    desc: 'Branches that touch, rub, or cross create perfect hiding spots for pests and diseases. They also block sunlight, hindering healthy growth.',
  },
  {
    title: 'Dead or Dying Limbs',
    desc: "These aren't just unattractive — they're a major safety hazard, especially during storms. Don't wait for them to fall on their own!",
  },
  {
    title: 'Broken Branches',
    desc: 'Like open wounds, broken branches invite disease and insects, weakening your tree from the inside out.',
  },
  {
    title: 'Discolored or Spotty Leaves',
    desc: 'These can signal disease or nutrient deficiencies that proper trimming and care can help address before it spreads.',
  },
  {
    title: 'Slow or Stunted Growth',
    desc: "If your tree seems to have 'stalled', trimming can revitalize it, encouraging strong, healthy new branches.",
  },
  {
    title: 'Leaning or Unbalanced',
    desc: 'If your tree seems off-kilter, it could be a sign of structural weakness. Expert trimming can often correct this, preventing potential danger.',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Understanding Your Needs',
    desc: "It all starts with a free consultation. We'll listen carefully to your concerns, assess your trees, and answer all your questions.",
  },
  {
    num: '02',
    title: 'Your Customized Plan',
    desc: "Our certified arborists don't use a cookie-cutter approach. They'll create a detailed trimming plan designed specifically for your trees' health and your goals.",
  },
  {
    num: '03',
    title: 'Safety-First Execution',
    desc: "Our experienced crew arrives with the latest tools and a deep understanding of safe trimming practices. We'll protect your property and work efficiently.",
  },
  {
    num: '04',
    title: 'Spotless Cleanup',
    desc: "We don't just trim your trees, we restore your yard. Our thorough cleanup leaves no trace behind — except beautifully cared-for trees.",
  },
];

const ARBORIST_POINTS = [
  { title: 'Preserving Tree Health', desc: 'Our arborists identify potential problems early, recommending proactive solutions to prevent disease, decay, and structural weaknesses.' },
  { title: 'Promoting Safety', desc: 'Trees add beauty, but they also need to be safe. We expertly assess potential risks and eliminate hazards to protect your property and family.' },
  { title: 'Enhancing Aesthetics', desc: 'We know how to carefully shape and prune trees to bring out their natural beauty and complement your landscape design.' },
  { title: 'Increasing Property Value', desc: "Well-maintained trees boost your home's curb appeal and overall value — a real return on investment." },
  { title: 'Exceptional Service', desc: 'From initial consultation to final cleanup, we prioritize excellent customer service, ensuring a positive experience every time.' },
];

const EQUIPMENT_POINTS = [
  { title: 'State-of-the-Art Equipment', desc: 'We invest in the latest tree trimming tools and machinery, ensuring efficiency, precision, and minimal impact on your landscape. Specialized saws, climbing gear, and safety harnesses.' },
  { title: 'Rigorous Safety Protocols', desc: 'Our crew undergoes extensive safety training and adheres to strict industry standards. Every job begins with a safety assessment and continuous monitoring throughout.' },
  { title: 'Protection for Your Property', desc: 'We take precautions to minimize any potential damage to your lawn, structures, and surrounding landscape during every project.' },
  { title: 'Fully Insured', desc: 'We carry comprehensive liability insurance, giving you complete peace of mind knowing you and your property are always protected.' },
];

const PRICING_POINTS = [
  { icon: '/money.png', title: 'Competitive Rates', desc: 'We work hard to keep our prices fair while delivering top-notch results.' },
  { icon: '/quote.png', title: 'Zero-Obligation Estimates', desc: 'Discover the true cost of your tree care with absolutely no strings attached.' },
  { icon: '/magnifying-glass.png', title: 'Price Transparency', desc: 'Get a detailed breakdown so you understand exactly what you\'re paying for — no surprises.' },
];

const REVIEWS = [
  {
    text: "I highly recommend R&R. Randy came out to look at our 200 year old red oak. He recommended a great arborist to check the health of the tree before coming up with a solid plan on pruning. He and the arborist conferred and came up with a plan to prune the tree with the benefit of our house as well as the beautiful old tree in mind. Randy's brother Pat ran a very professional and skilled crew on the day of trimming. The tree looks amazing and we feel better about it being close to our house. Their clean up was spectacular and they left us some choice logs for our fire pit. R&R's knowledge, service and affordability is second to none.",
    name: 'Caleb S.',
    loc: 'Atlanta, GA',
  },
  {
    text: "5 stars for R & R Tree Service. This 2-man crew had amazing skills, not only climbing my 80' tree with dexterity, but skills with saws, ropes, teamwork and backing heavy equipment up my steep curvy driveway first try. They dropped the tree down in steps and took measures to lower heavy branches with ropes to avoid creating divots in the yard. They took no breaks, stuck with it till the job was done and cleaned up afterward. Beginning to end, my experience with R&R has been favorable. Tree removal is not cheap, but their quote was very reasonable. Sally in the office was super nice and responsive to my calls and emails. Great job all around!",
    name: 'H.H.',
    loc: 'North Georgia',
  },
];

const FAQS = [
  { q: 'What is professional tree trimming?', a: 'Professional tree trimming refers to removing dead, diseased, or overgrown branches from trees to promote their health and improve their appearance.' },
  { q: 'Why is tree trimming important?', a: 'Tree trimming is important to promote the health and growth of trees, reduce the risk of tree damage and property damage caused by falling branches, and maintain the aesthetic appeal of landscapes.' },
  { q: 'What is the cost of professional tree trimming services in Atlanta?', a: 'The cost of professional tree trimming services in Atlanta can vary greatly depending on several factors, such as the size and type of tree, the location, and the extent of the trimming required. You can request a free quote here.' },
  { q: 'What should I look for in a professional tree trimming service?', a: 'When selecting a professional tree trimming service, look for a company that has certified arborists, is insured and licensed, has a good reputation, and uses proper equipment and techniques to trim trees safely and effectively. R&R Tree Service has got you covered in all of these areas, plus we’ve been serving the Atlanta community for over 30 years!' },
  { q: 'How often should I have my trees trimmed by a professional?', a: 'The frequency of professional tree trimming in Atlanta can vary depending on the type of tree, its location, and the amount of growth it experiences. As a general rule, most deciduous trees should be trimmed every 2-3 years and conifers every 5-7 years. However, it’s best to consult with R&R’s professional arborist team to determine the best schedule for your trees.' },
  { q: 'Can tree trimming affect the direction of tree growth?', a: 'Tree trimming can influence the direction of growth by strategically pruning certain branches. By removing specific limbs or encouraging growth in certain areas, arborists can guide the tree’s growth pattern to some extent.' },
  { q: 'How does tree trimming impact tree communication and signaling?', a: 'Trees communicate and share resources through underground networks of fungi called mycorrhizae. Trimming certain branches can disrupt these networks and affect how trees share nutrients and information, potentially altering their overall health and response to environmental changes.' },
  { q: 'Are there optimal times for trimming different species of trees?', a: 'Yes, different tree species have varying optimal trimming times based on their growth patterns and responses to pruning. Understanding the specific species and their growth cycles helps in determining the best time to trim for minimal stress and optimal growth.' },
  { q: 'How often do my trees truly need trimming?', a: 'Every tree has unique needs. Factors like species, age, and overall health all play a role. Here’s a general guideline: Young, fast-growing trees: May need trimming every 2-3 years for healthy development. Mature trees: Typically need trimming every 3-5 years to maintain safety and beauty. Problem trees: Trees with disease or damage might need more frequent attention. Want a personalized assessment? Our certified arborists offer free consultations!' },
  { q: 'Should I tackle tree trimming myself, or call a professional?', a: 'Small, young trees can sometimes be trimmed with basic tools and knowledge. However, for the safety of you and your property, it’s generally best to call professionals for: Large trees: These require specialized equipment and expertise for safe, precise work. Trees near hazards: Branches close to power lines or structures pose risks best handled by trained crews. Peace of mind: Pros ensure your trees get the expert care they deserve.' },
  { q: "Are there any tree trimming regulations I need to worry about?", a: 'It depends on your location. Some cities have ordinances regarding the trimming or removal of trees. To avoid potential fines or complications, it’s wise to: Check your city/HOA website: They often list any tree-related regulations. Call your local officials: They can answer specific questions about your property.' },
    { q: "When's the ideal time for tree trimming?", a: 'For most trees, the dormant season (late fall or winter) is best.  This minimizes stress on the tree. However, there are a few exceptions: Emergency situations: Safety hazards like broken branches need immediate attention, regardless of season. Spring-flowering trees: These often benefit from trimming right after they bloom. Not sure about your trees? Our arborists can recommend the perfect schedule for tree trimming in Atlanta.' },
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
            src="/tree-trimming-bg.jpg"
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
              <span className="tt-hero__breadcrumb-cur">Tree Trimming</span>
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
              Tree Trimming &amp; Pruning in{' '}
              <span className="tt-hero__title-red">Atlanta, GA</span>
            </motion.h1>

            <motion.p className="tt-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              Trees transform your property, offering shade, privacy, beauty, and tranquility.
              To safeguard this investment, they require expert care. That's where the experts
              at R&amp;R Tree Service come in.
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
              <motion.span className="eyebrow" variants={fadeUp}>Expert Tree Trimming Services in Atlanta</motion.span>
              <motion.h2 className="section-title section-title--lg" variants={fadeUp}>
                Healthy, Beautiful Trees Start With R&amp;R
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Your yard offers a peaceful retreat with its lush shade, vibrant foliage, and escape from the
                summer heat. However, overgrown branches can pose <strong>safety risks</strong>, diminish
                property value, and hinder scenic views.
              </motion.p>
              <motion.p className="tt-intro__lead" variants={fadeUp}>
                Our team delivers tree services to keep your trees beautiful, healthy, and a source of pride,
                not worry. Our <strong>certified arborists</strong> will carefully assess your trees and
                recommend the best course of action.
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
                src="/Expert-Tree-Trimming.jpg"
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
              Our Tree Trimming Services
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p className="tt-services__desc" variants={fadeUp}>
              Our certified arborists will carefully assess your trees and recommend the best
              approach — whether it's crown thinning, deadwood removal, shaping, or emergency trimming.
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
              When it comes to tree care, safety matters.{' '}
              <span style={{ color: 'var(--red)' }}>Choose R&amp;R tree trimming in Atlanta</span>{' '}
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
                <img src="/Benefits-Tree-Trimming.jpg"
                     alt="Tree trimming work" loading="lazy" />
              </div>
              <div className="tt-why__img-sec">
                <img src="/Benefits-Tree-Trimming-2.jpg"
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
                Why Tree Trimming Is Important
              </motion.h2>
              <span className="red-bar" />
              <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: 'var(--sp-md)' }}>
                Regular tree trimming isn't just about how your yard looks. It's a powerful investment
                that protects your trees, your property, other plants, and your peace of mind.
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
                Signs Your Trees Need Trimming
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-signs__intro" variants={fadeUp}>
                Are your trees at risk? Spot the signs before it's too late! Your trees work hard to
                enhance your property. Learn to recognize the warning signs that mean it's time for
                professional trimming.
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
                src="/Home-Coverage.jpg"
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
              Our Tree Trimming Process
            </motion.h2>
            <span className="red-bar red-bar--center" />
            <motion.p variants={fadeUp} style={{ color: 'var(--gray-text)', fontSize: '1rem', lineHeight: '1.75' }}>
              Trust our team of tree trimming professionals. Our step-by-step process ensures safety,
              expert care, and total respect for your property.
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
                src="/Our-Tree-Trimming.jpg"
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
              <h3 className="tt-experts__panel-title">Certified Arborists on Your Side</h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
                Our team of certified arborists possesses a deep understanding of tree biology,
                health, and proper maintenance techniques. They are passionate about trees and
                dedicated to exceptional results.
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
              <h3 className="tt-experts__panel-title">Equipment &amp; Safety Measures</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.75', marginBottom: 'var(--sp-md)' }}>
                Tree work requires specialized equipment and a commitment to safety. At R&amp;R Tree
                Service, we take no shortcuts when it comes to protecting our team, your property,
                and the environment.
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
                Transparent Pricing &amp; Free Estimates
              </motion.h2>
              <span className="red-bar" />
              <motion.p className="tt-pricing__desc" variants={fadeUp}>
                <strong style={{ color: 'var(--white)' }}>No Surprises, Just Great Value.</strong>{' '}
                We believe in upfront, honest pricing for our expert tree trimming services.
                Take the guesswork out of tree care — contact us now to schedule your free estimate
                and experience the R&amp;R Tree Service difference.
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
                src="/Trimming-pricing.jpg"
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
              Your Tree Trimming Questions, Answered
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
                  Ready for Expert Tree Trimming<br />in Atlanta?
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