// Gallery.jsx | R&R Tree Service
// Project Gallery — Atlanta, GA
// Design: #D92227 red + #000000 black
// Features: filterable bento grid, keyboard-accessible lightbox, featured projects

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Gallery.css';

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
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
   GALLERY DATA
   All images: Unsplash high-quality tree / arborist photos
   Organised by category matching R&R's actual services
   ════════════════════════════════════════ */
   
   const GALLERY_ITEMS = [
       
       
    {
        id: 1, tag: 'clearing', size: 'normal',
        img: '/gallery1.webp',
        title: 'Residential Clearing', loc: 'Flowery Branch, GA',
        caption: 'Selective land clearing preserving desired trees while opening the property.',
    },
    {
        id: 2, tag: 'crane', size: 'normal',
        img: '/gallery2.webp',
        title: 'Professional Grapple Crane Service', loc: 'Grayson, GA',
        caption: 'Efficient crane and grapple systems for safe debris and log handling.',
    },
    
  {
    id: 3, tag: 'removal', size: 'normal',
    img: '/gallery3.webp',
    title: 'Heavy Log Removal Service', loc: 'Suwanee, GA',
    caption: "Specialized grapple equipment safely removes large tree sections and debris.",
  },
  
  {
    id: 4, tag: 'trimming', size: 'normal',
    img: '/gallery4.webp',
    title: 'Tree Trimming & Cleanup', loc: 'Buford, GA HQ',
    caption: "Improving tree health and property appearance with expert trimming services.",
  },
  
  {
    id: 5, tag: 'removal', size: 'normal',
    img: '/gallery5.webp',
    title: 'High-Reach Tree Cutting', loc: 'Alpharetta, GA',
    caption: 'Professional climbers and crane operators safely remove difficult tree sections.',
  },
  {
    id: 6, tag: 'crane', size: 'normal',
    img: '/gallery6.webp',
    title: 'Crane-Assisted Tree Removal', loc: 'Buford, GA',
    caption: 'Crane-assisted removals provide safe solutions for large tree projects.',
  },
  
  {
    id: 7, tag: 'removal', size: 'normal',
    img: '/gallery7.webp',
    title: 'Tree Removal Team at Work', loc: 'Snellville, GA',
    caption: 'Our crew safely handles tree removal projects of all sizes.',
  },
  {
    id: 8, tag: 'team', size: 'normal',
    img: '/gallery8.webp',
    title: 'Aerial Lift Ready for Service', loc: 'Lawrenceville, GA',
    caption: 'Precision equipment prepared for safe tree trimming and removal work.',
  },
  
  {
    id: 9, tag: 'team', size: 'normal',
    img: '/gallery9.webp',
    title: 'Commercial Wood Chipper', loc: 'Decatur, GA',
    caption: 'Powerful wood chippers help process tree debris quickly and cleanly.',
  },
  
  {
    id: 10, tag: 'crane', size: 'normal',
    img: '/gallery10.webp',
    title: 'Bucket Truck Service', loc: 'Lilburn, GA',
    caption: 'Our bucket trucks help complete high-reach tree projects safely and efficiently.',
  },
  {
    id: 11, tag: 'team', size: 'normal',
    img: '/gallery11.webp',
    title: 'Heavy Equipment Transport', loc: 'Gainesville, GA',
    caption: 'Reliable transport of professional equipment to every job site.',
  },
  
  {
    id: 12, tag: 'crane', size: 'normal',
    img: '/gallery12.webp',
    title: 'Crane Service Operations', loc: 'Norcross, GA',
    caption: 'Heavy-duty crane services for safe removal of large and hazardous trees.',
  },
  {
    id: 13, tag: 'removal', size: 'normal',
    img: '/gallery13.webp',
    title: 'Safe Tree Removal Process', loc: 'Suwanee, GA',
    caption: 'Carefully removing large trees while protecting nearby structures and landscapes.',
  },
  {
    id: 14, tag: 'team', size: 'normal',
    img: '/gallery14.webp',
    title: 'Professional Tree Lift Setup', loc: 'Cumming, GA',
    caption: 'Specialized aerial lifts allow precise and safe tree trimming operations.',
  },
  {
    id: 15, tag: 'team', size: 'normal',
    img: '/gallery15.webp',
    title: 'Advanced Lift Equipment', loc: 'Roswell, GA',
    caption: 'Modern lift equipment helps us safely reach difficult tree locations.',
  },
  {
    id: 16, tag: 'clearing', size: 'normal',
    img: '/gallery16.webp',
    title: 'Property Cleanup & Clearing', loc: 'Duluth, GA',
    caption: 'Clearing debris and overgrowth to improve the appearance and safety of your property.',
  },
  {
    id: 17, tag: 'team', size: 'normal',
    img: '/gallery17.webp',
    title: 'Skilled Tree Service Crew', loc: 'Buford, GA',
    caption: 'Our experienced team uses specialized equipment for safe and efficient tree care.',
  },
  {
    id: 18, tag: 'stump', size: 'normal',
    img: '/gallery18.webp',
    title: 'Expert Stump Grinding Service', loc: 'Stone Mountain, GA',
    caption: 'Removing unwanted stumps quickly to restore clean and usable outdoor spaces.',
  },
  {
    id: 19, tag: 'clearing', size: 'normal',
    img: '/gallery19.webp',
    title: 'Residential Land Clearing Project', loc: 'Lawrenceville, GA',
    caption: 'Preparing residential properties with professional grading and land clearing services.',
  },
        {
    id: 20, tag: 'removal', size: 'normal',
    img: '/gallery20.webp',
    title: 'Professional Tree Service Equipment', loc: 'Alpharetta, GA',
    caption: 'Our advanced trucks and wood chippers are ready for safe and efficient tree service projects.',
  },
  {
    id: 21, tag: 'clearing', size: 'normal',
    img: '/gallery21.webp',
    title: 'Forestry Mulching Equipment in Action', loc: 'Alpharetta, GA',
    caption: 'Professional land clearing equipment efficiently removes brush and overgrowth from wooded areas.',
  },
  
  {
    id: 22, tag: 'clearing', size: 'normal',
    img: '/gallery22.webp',
    title: 'Cleared Property Access Area', loc: 'Alpharetta, GA',
    caption: 'Creating safer and cleaner access paths with expert land clearing services.',
  },
  {
    id: 23, tag: 'clearing', size: 'normal',
    img: '/gallery23.webp',
    title: 'Woodland Clearing Project', loc: 'Alpharetta, GA',
    caption: 'Removing dense vegetation and debris to prepare land for future use.',
  },
  {
    id: 24, tag: 'clearing', size: 'normal',
    img: '/gallery24.webp',
    title: 'Large-Scale Land Clearing Service', loc: 'Alpharetta, GA',
    caption: 'Professional clearing solutions for residential and commercial properties.',
  },
  {
    id: 25, tag: 'removal', size: 'normal',
    img: '/gallery25.webp',
    title: 'Heavy Log Removal Operations', loc: 'Alpharetta, GA',
    caption: 'Safely transporting large tree sections during professional removal projects.',
  },
  {
    id: 26, tag: 'team', size: 'normal',
    img: '/gallery26.webp',
    title: 'Advanced Aerial Lift Equipment', loc: 'Alpharetta, GA',
    caption: 'Specialized lift systems provide safe access for tree trimming and removal work.',
  },
  {
    id: 27, tag: 'removal', size: 'normal',
    img: '/gallery27.webp',
    title: 'Precision Tree Removal Service', loc: 'Alpharetta, GA',
    caption: 'Expert operators safely remove hazardous trees using advanced lift equipment.',
  },
  {
    id: 28, tag: 'team', size: 'normal',
    img: '/gallery28.webp',
    title: 'Professional Lift Setup on Site', loc: 'Alpharetta, GA',
    caption: 'Reliable aerial lift equipment prepared for safe and efficient tree service work.',
  },
  {
    id: 29, tag: 'removal', size: 'normal',
    img: '/gallery29.webp',
    title: 'Elevated Tree Cutting Operations', loc: 'Alpharetta, GA',
    caption: 'Safe high-reach tree removal performed by experienced professionals.',
  },
  {
    id: 30, tag: 'team', size: 'normal',
    img: '/gallery30.webp',
    title: 'Tree Service Fleet & Equipment', loc: 'Alpharetta, GA',
    caption: 'Our fully equipped fleet is ready to handle projects of every size.',
  },
  {
    id: 31, tag: 'team', size: 'normal',
    img: '/gallery31.webp',
    title: 'Company Service Vehicle', loc: 'Alpharetta, GA',
    caption: 'Reliable service vehicles help our crews respond quickly to every project.',
  },
  // ── Tree Trimming
  
  // ── Crane Service
  
  // ── Stump Grinding
  
  // ── Team & Equipment
  
  // ── Land Clearing
];

const FILTER_TABS = [
  { key: 'all',      label: 'All Projects', emoji: '📂' },
  { key: 'removal',  label: 'Tree Removal',  emoji: '🪓' },
  { key: 'trimming', label: 'Trimming',       emoji: '✂️' },
  { key: 'crane',    label: 'Crane Service',  emoji: '🏗️' },
  { key: 'stump',    label: 'Stump Grinding', emoji: '🪨' },
  { key: 'clearing', label: 'Land Clearing',  emoji: '🌿' },
  { key: 'team',     label: 'Team & Equipment', emoji: '👷' },
];


/* ── Grid size CSS class map ── */
const SIZE_CLASSES = {
  normal: 'gl-item',
  wide:   'gl-item gl-item--wide',
  tall:   'gl-item gl-item--tall',
  large:  'gl-item gl-item--large',
};

/* ════════════════════════════════════════
   LIGHTBOX COMPONENT
   ════════════════════════════════════════ */
function Lightbox({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const item = items[current];

  const prev = useCallback(() => setCurrent(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      <motion.div
        className="gl-lightbox"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        role="dialog" aria-modal="true" aria-label="Image lightbox">
        <div className="gl-lightbox__inner" onClick={e => e.stopPropagation()}>

          <div className="gl-lightbox__counter">
            <span>{current + 1}</span> / {items.length}
          </div>

          <button className="gl-lightbox__close" onClick={onClose} aria-label="Close lightbox">✕</button>

          <button className="gl-lightbox__nav gl-lightbox__nav--prev" onClick={prev} aria-label="Previous image">‹</button>

          <AnimatePresence mode="wait">
            <motion.img
              key={item.id}
              className="gl-lightbox__img"
              src={item.img.replace(/w=\d+/, 'w=1200')}
              alt={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              draggable={false}
            />
          </AnimatePresence>

          <button className="gl-lightbox__nav gl-lightbox__nav--next" onClick={next} aria-label="Next image">›</button>

          <div className="gl-lightbox__meta">
            <div className="gl-lightbox__meta-title">{item.title}</div>
            <div className="gl-lightbox__meta-sub">📍 {item.loc} · {item.caption}</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ════════════════════════════════════════
   GALLERY CARD
   ════════════════════════════════════════ */
function GalleryCard({ item, onOpen }) {
  const tagLabel = FILTER_TABS.find(f => f.key === item.tag)?.label || item.tag;
  return (
    <motion.div
      className={SIZE_CLASSES[item.size] || 'gl-item'}
      variants={fadeUp}
      layout>
      <div
        className="gl-card"
        onClick={() => onOpen(item.id)}
        role="button"
        tabIndex={0}
        aria-label={`View ${item.title}`}
        onKeyDown={e => e.key === 'Enter' && onOpen(item.id)}>
        <img
          className="gl-card__img"
          src={item.img}
          alt={item.title}
          loading="lazy"
        />
        <div className="gl-card__overlay" />
        <span className="gl-card__tag">{tagLabel}</span>
        <span className="gl-card__expand" aria-hidden="true">⤢</span>
        <div className="gl-card__caption">
          <div className="gl-card__caption-title">{item.title}</div>
          <div className="gl-card__caption-loc">📍 {item.loc}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════ */
export default function Gallery() {
  const goto = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.tag === activeFilter);

  const openLightbox = useCallback((id) => {
    const idx = filtered.findIndex(i => i.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  /* Count per category */
  const countFor = (key) => key === 'all'
    ? GALLERY_ITEMS.length
    : GALLERY_ITEMS.filter(i => i.tag === key).length;

  return (
    <main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}

      {/* ── HERO ── */}
      <section className="gl-hero" aria-label="Gallery hero">
        <div className="gl-hero__bg" aria-hidden="true">
          <img
            src="/gallery-bg.jpg"
            alt="R&R Tree Service projects in Atlanta, GA"
            loading="eager" fetchpriority="high"
          />
          <div className="gl-hero__overlay" />
        </div>
        {/* <div className="gl-hero__red-strip" aria-hidden="true" /> */}

        <div className="container">
          <div className="gl-hero__content">
            <motion.div className="gl-hero__breadcrumb"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <a href="/">Home</a>
              <span className="gl-hero__breadcrumb-sep">›</span>
              <span className="gl-hero__breadcrumb-cur">Gallery</span>
            </motion.div>

            <motion.div className="gl-hero__eyebrow"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="gl-hero__eyebrow-line" />
              Our Work · North Georgia · Since 1986
            </motion.div>

            <motion.h1 className="gl-hero__title"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}>
              R&amp;R Tree Care Services
              <span> Gallery in North Georgia</span>
            </motion.h1>

            <motion.p className="gl-hero__subtitle"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}>
              Check out R&amp;R Tree Service's
              recent projects! From complex crane removals to precision trimming, every project
              reflects our commitment to quality, safety, and complete cleanup.
            </motion.p>

            <motion.div className="gl-hero__ctas"
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}>
              <motion.a href="#gl-grid" className="btn btn-red"
                onClick={e => { e.preventDefault(); goto('#gl-grid'); }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                View Projects ↓
              </motion.a>
              <motion.a href="tel:678-482-9994" className="btn btn-outline-white"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <img alt="" className='phone-icon' src="/phone-call.png" /> Get a Free Quote
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
              {[['20+','Gallery Projects'],['40','Years of Service'],['24/7','Emergency Ready']].map(([n, l]) => (
                <motion.div key={l} className="stats-bar__item" variants={fadeUp}>
                  <span className="stats-bar__num">{n}</span>
                  <span className="stats-bar__lbl">{l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTER CONTROLS ── */}
      <div className="gl-controls" id="gl-grid">
        <div className="container">
          <div className="gl-controls__inner">
            <div className="gl-filters" role="group" aria-label="Filter gallery by category">
              {FILTER_TABS.map(tab => (
                <motion.button
                  key={tab.key}
                  className={`gl-filter-btn ${activeFilter === tab.key ? 'gl-filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(tab.key)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  aria-pressed={activeFilter === tab.key}>
                   {tab.label}
                  <span className="gl-filter-btn__count">{countFor(tab.key)}</span>
                </motion.button>
              ))}
            </div>
            <div className="gl-controls__meta">
              Showing <span>{filtered.length}</span> of {GALLERY_ITEMS.length} projects
            </div>
          </div>
        </div>
      </div>

      {/* ── BENTO GALLERY GRID ── */}
      <section className="gl-grid-section" aria-label="Project gallery">
        <div className="container">
          <motion.div className="gl-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map(item => (
                <GalleryCard key={item.id} item={item} onOpen={openLightbox} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: 'var(--sp-4xl)', color: 'rgba(255,255,255,0.4)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--sp-md)' }}>📷</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                No projects in this category yet
              </div>
            </motion.div>
          )}
        </div>
      </section>

      
      {/* ── SERVICES STRIP ── */}
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

      {/* ── FINAL CTA ── */}
      <section>
        <div className="gl-cta">
          <div className="container">
            <motion.div className="gl-cta__inner"
              variants={stagger} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <div>
                <motion.h2 className="gl-cta__heading" variants={fadeUp}>
                  Ready for Your Own<br />Success Story?
                </motion.h2>
                <motion.p className="gl-cta__sub" variants={fadeUp}>
                  Licensed · Insured · Free Estimates · Serving North Georgia Since 1986
                </motion.p>
              </div>
              <motion.div className="gl-cta__btns" variants={fadeUp}>
                <motion.a href="tel:678-482-9994" className="btn btn-black"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <img alt="" className='phone-icon' src="/phone-call.png" /> 678-482-9994
                </motion.a>
                <motion.a href="/contact" className="btn btn-outline-white"
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