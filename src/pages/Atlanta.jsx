// Alpharetta.jsx | R&R Tree Service
// Tree Service in Alpharetta, GA
// Content from: https://randrtreeservice.com/alpharetta/
// Uses reusable CityPage template component

import CityPage from './Citypage';

/* ════════════════════════════════════════
   ALPHARETTA PAGE DATA
   Exact content from live site
   ════════════════════════════════════════ */
const ALPHARETTA_DATA = {
  city: 'Atlanta',
  county: 'United States',
  state: 'GA',

  /* Images — real Unsplash photos, no placeholders */
  heroImg:    '/city-bg.jpg',
  introImg:   '/tree-removal-Benefits1.jpg',
  whyImg:     '/Tree-Removal-Process.jpg',
  processImg: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=700&q=80',

  /* Hero */
  heroTitle: 'Tree Service in',
  heroSubtitle:
    "At R & R Tree Service, we’re proud to deliver expert, affordable tree care to homeowners and businesses throughout Atlanta, GA. With years of experience and a dedication to exceptional service, we help keep your property safe, attractive, and well-maintained. Whether you need tree removal, pruning, stump grinding, or emergency storm cleanup, our skilled team is ready to help.",

  /* Intro section */
  introText1:
    "We understand the diverse tree care needs across Atlanta’s urban and suburban neighborhoods, and we take pride in enhancing the beauty of your landscape while protecting your home or business.",
  introText2:
    'Call us today or contact us online to schedule your free estimate in Atlanta!',

  /* Trusted local expert points */
  localPoints: [
    'Locally owned & operated',
    'Fully licensed & insured for your peace of mind',
    'Competitive, affordable rates',
    'Friendly, professional crew',
    'Emergency service available',
  ],

  /* Service cards */
  services: [
    {
      title: 'Tree Trimming & Pruning',
      desc: 'Regular trimming keeps your trees healthy, improves their appearance, and reduces the risk of falling limbs — especially during storm season. Our certified team members use proper techniques to promote long-term tree health.',
      img: '/Tree-Trimming.jpg',
      badge: null,
      wide: false,
    },
    {
      title: 'Tree Removal',
      desc: 'We safely remove hazardous, dead, or unwanted trees of all sizes, using the right equipment and techniques to prevent damage to your property. From single trees to full lot clearing.',
      img: '/Tree-Removal.jpg',
      badge: 'Most Requested',
      wide: false,
    },
    {
      title: 'Emergency Tree Service',
      desc: "Storm damage? Fallen trees? We're available for fast, reliable emergency response to protect your property and restore safety. Our crew responds 24/7 across Atlanta and surrounding areas.",
      img: '/Emergency-Trimming.jpg',
      badge: '24/7 Available',
      wide: true,
    },
    {
      title: 'Stump Grinding',
      desc: 'After a tree is removed, we can grind down the stump to restore your yard and prevent regrowth or pest infestations. We remove all debris for a clean, finished result.',
      img: '/Stump-Grinding.jpg',
      badge: null,
      wide: false,
    },
    {
      title: 'Crane Rental Services',
      desc: 'For large or hard-to-reach trees, our specialized crane equipment provides the safest solution — protecting your property, fencing, and landscaping during removal.',
      img: '/Crane-Tree-Service.jpg',
      badge: 'Specialty',
      wide: false,
    },
  ],

  /* Neighborhoods */
  neighborhoods: [
    {
      name: 'Buckhead',
      img: '/Buckhead.webp',
    },
    {
      name: 'Midtown',
      img: '/Midtown.webp',
    },
    {
      name: 'Downtown Atlanta',
      img: '/Downtown-Alpharetta.webp',
    },
    {
      name: 'Virginia Highlands',
      img: '/Virginia-Highlands.webp',
    },
    {
      name: 'Grant Park',
      img: '/Grant-Park.webp',
    },
    {
      name: 'West End',
      img: '/West-End.webp',
    },
  ],

  /* Why Choose Us points */
  whyPoints: [
    {
      title: 'Locally Owned & Operated',
      desc: "R&R has been a trusted name in North Georgia since 1986. We're your neighbors, not a franchise — every job matters personally to our family.",
    },
    {
      title: 'Fully Licensed & Insured',
      desc: "Complete liability coverage on every job in Atlanta. Your property and our crew are protected — you'll never face unexpected costs.",
    },
    {
      title: 'Affordable, Competitive Pricing',
      desc: 'We offer free, no-obligation estimates. Our competitive rates reflect our efficiency and equipment ownership — no subcontractor markup.',
    },
    {
      title: 'Friendly, Professional Crew',
      desc: "Our certified team members, foremen, and groundsmen are trained to the highest standards — and always respectful of your property and family.",
    },
    {
      title: 'Emergency Service Available',
      desc: "Storm season is unpredictable. We're on call 24/7 to respond fast to fallen trees, storm damage, and urgent hazards across Atlanta.",
    },
  ],

  /* 4-step process */
  processSteps: [
    { num: '01', icon: '📞', title: 'Free Consultation', desc: 'Call or message us. We visit your Atlanta property, assess the situation, and answer all your questions — no obligation.' },
    { num: '02', icon: '📋', title: 'Detailed Estimate', desc: "You receive a clear, itemized quote with transparent pricing. We explain exactly what work will be done and why — no surprises." },
    { num: '03', icon: '🛠️', title: 'Expert Execution', desc: 'Our own certified crew arrives on time with the right equipment. We protect your property and complete the work safely and efficiently.' },
    { num: '04', icon: '✅', title: 'Complete Cleanup', desc: 'We remove all debris, branches, and wood. Your Atlanta yard is left immaculate. We follow up to confirm your satisfaction.' },
  ],

  /* Testimonials */
  reviews: [
    {
      text: "For the past eight years, R and R Tree Service has meticulously tended to our landscape needs. From pine tree removal to diagnosing damaged or diseased trees, I fully and completely trust this honest and hard working crew. They estimate fairly and give competitive prices. It's reassuring to know they will 'take care of business'.",
      name: 'Lawanna B. St Clair',
      loc: 'Lilburn, Georgia',
      wide: true,
    },
    {
      text: "We have used R and R Tree Service since we moved to the Atlanta area over 16 years ago. They are professional, dependable, and do an excellent job. Their crane service is a definite advantage — there is never any damage to surrounding trees.",
      name: 'John & Carol H.',
      loc: 'Atlanta, GA',
      wide: false,
    },
    {
      text: 'Within 24-hours of being contacted, Randy and his team gave me a quote and removed two mature trees uprooted during Hurricane Helene. Arrived at the crack of dawn and finished before lunch. True professionals.',
      name: 'Jane B.',
      loc: 'North Georgia',
      wide: false,
    },
  ],

  /* Nearby service areas with links */
  nearbyAreas: [
    { name: 'Atlanta', href: 'https://randrtreeservice.com/atlanta/' },
    { name: 'Roswell', href: 'https://randrtreeservice.com/roswell/' },
    { name: 'Cumming', href: 'https://randrtreeservice.com/cumming/' },
    { name: 'Duluth', href: 'https://randrtreeservice.com/duluth/' },
    { name: 'Norcross', href: 'https://randrtreeservice.com/norcross/' },
    { name: 'Sugar Hill', href: 'https://randrtreeservice.com/sugar-hill/' },
    { name: 'Suwanee', href: 'https://randrtreeservice.com/suwanee/' },
    { name: 'Buford', href: 'https://randrtreeservice.com/buford/' },
    { name: 'Lawrenceville', href: 'https://randrtreeservice.com/lawrenceville/' },
  ],
};

/* ── Page component ── */
export default function Alpharetta() {
  return <CityPage data={ALPHARETTA_DATA} />;
}