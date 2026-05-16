import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMaximize2, FiArrowRight, FiCheck } from 'react-icons/fi';
import { MdCarpenter, MdGridView, MdElectricalServices, MdBuild, MdOutlineWindow } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import bedroomImg from '../assets/bedroom.png';
import diningImg from '../assets/diningroom.png';
import kitchenImg from '../assets/kitchen.png';
import livingImg from '../assets/livingroom.png';

const g = (n) => new URL(`../assets/gallery/${n}.jpeg`, import.meta.url).href;

const roomGalleries = {
  kitchen:  { name: 'Modular Kitchens',  images: [g(1),g(2),g(3),g(4),g(5),g(6)] },
  bedroom:  { name: 'Bedroom Designs',   images: [g(7),g(8),g(9),g(10),g(11),g(12)] },
  living:   { name: 'Living Rooms',      images: [g(13),g(14),g(15),g(16),g(17),g(18)] },
  dining:   { name: 'Dining Areas',      images: [g(19),g(20),g(21),g(22),g(23)] },
};

const services = [
  { icon: <MdCarpenter size={34} />, title: 'Interior Wood Works',            desc: 'Custom-crafted woodwork and furniture with premium materials and fine finishes.' },
  { icon: <MdGridView size={34} />,  title: 'POP Ceiling Designs',            desc: 'Elegant pop ceilings, false ceilings, and decorative patterns.' },
  { icon: <MdElectricalServices size={34} />, title: 'Electric Light Design', desc: 'Interior light design and smart electrical solutions that enhance ambience.' },
  { icon: <MdBuild size={34} />,     title: 'MS & SS Welding Work',           desc: 'Precision metal fabrication for structural and decorative needs.' },
  { icon: <FaStore size={34} />,     title: 'Commercial Interiors',           desc: 'Full-scale solutions for restaurants, offices, and retail spaces.' },
  { icon: <MdOutlineWindow size={34} />, title: 'Glass Work',                 desc: 'Modern glass partitions, railings, doors, and decorative glass panels.' },
];

const rooms = [
  { id: 'kitchen', name: 'KITCHEN',  img: kitchenImg },
  { id: 'bedroom', name: 'BEDROOM',  img: bedroomImg },
  { id: 'living',  name: 'LIVING',   img: livingImg  },
  { id: 'dining',  name: 'DINING',   img: diningImg  },
];

// Alternating feature rows
const features = [
  {
    img: kitchenImg,
    tag: 'Modular Kitchens',
    title: 'Kitchens Built for\nReal Living',
    desc: 'We design smart, beautiful modular kitchens that balance workflow, storage, and aesthetics. Every cabinet, countertop, and fitting is chosen to last decades.',
    points: ['Modular & semi-modular layouts', 'Premium laminate & acrylic finishes', 'Smart storage solutions', 'Custom island & breakfast counter'],
    id: 'kitchen',
    reverse: false,
  },
  {
    img: bedroomImg,
    tag: 'Bedroom Interiors',
    title: 'Bedrooms Designed\nfor Deep Rest',
    desc: 'From wardrobe design to ambient lighting — we craft bedrooms that feel like a private retreat. Serene, personalised, and built with the finest materials.',
    points: ['Floor-to-ceiling wardrobes', 'Mood & task lighting design', 'Custom headboard & panelling', 'Integrated study & dressing zones'],
    id: 'bedroom',
    reverse: true,
  },
  {
    img: diningImg,
    tag: 'Dining Spaces',
    title: 'Dining Rooms That\nBring People Together',
    desc: 'A dining room should feel both grand and welcoming. We design spaces that set the perfect mood for family meals, celebrations, and everyday moments.',
    points: ['Statement lighting fixtures', 'Custom dining furniture', 'Crockery unit & buffet design', 'Acoustic & comfort planning'],
    id: 'dining',
    reverse: false,
  },
  {
    img: livingImg,
    tag: 'Living Rooms',
    title: 'Living Rooms That\nMake an Impression',
    desc: 'Your living room is the heart of your home. We create living spaces that are as comfortable as they are visually stunning — spaces you are proud to show.',
    points: ['Feature wall & TV panel design', 'Seating & upholstery planning', 'False ceiling with cove lighting', 'Decor & soft furnishing guidance'],
    id: 'living',
    reverse: true,
  },
];

export default function Home() {
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, roomId: null });

  const openGallery = (roomId) => setLightbox({ open: true, roomId });
  const slides = lightbox.roomId ? roomGalleries[lightbox.roomId].images.map(src => ({ src })) : [];

  return (
    <Layout>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Intro Strip ── */}
      <div className="bg-brand-dark-navy py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            SAK Furniture & Interiors has been transforming homes and commercial spaces across Bangalore for over{' '}
            <span className="text-brand-soft-teal font-semibold">30 years</span>. Every space we touch reflects our passion for quality, detail, and lasting beauty.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
              <span className="text-white/40 text-xs uppercase tracking-widest">GSTIN</span>
              <span className="font-mono text-brand-soft-teal text-sm font-semibold tracking-wider">29AOAPM1437R1ZG</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-xs tracking-wide">GST Registered Business</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
              <span className="text-white/60 text-xs tracking-wide">Bangalore, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature Rows (alternating) ── */}
      <div className="bg-white">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch min-h-[520px] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafa]'}`}
          >
            {/* Image side */}
            <div className="relative w-full lg:w-1/2 overflow-hidden min-h-[320px] lg:min-h-0 group">
              <img
                src={feature.img}
                alt={feature.tag}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/40 to-transparent" />
              <span className="absolute top-6 left-6 bg-brand-deep-teal text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                {feature.tag}
              </span>
            </div>

            {/* Text side */}
            <div className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 lg:px-16 py-14">
              <div className="max-w-lg">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brand-dark-navy leading-tight mb-5 whitespace-pre-line">
                  {feature.title}
                </h2>
                <p className="text-brand-charcoal/60 text-base leading-relaxed mb-8">
                  {feature.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {feature.points.map(p => (
                    <li key={p} className="flex items-center gap-3 text-brand-charcoal/80 text-sm">
                      <span className="w-5 h-5 rounded-full bg-brand-deep-teal/10 flex items-center justify-center flex-shrink-0">
                        <FiCheck size={12} className="text-brand-deep-teal" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Room Categories Interactive Grid ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 border-y bg-white"
        style={{ borderColor: 'rgba(11,143,139,0.12)' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">Browse by Space</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-3 mb-3">
            Explore Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            Click any space to browse real projects from that category.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:block w-full max-w-[1400px] mx-auto">
          <div
            className="relative overflow-hidden group cursor-pointer h-[400px] lg:h-[500px] mb-4 rounded-2xl"
            onMouseEnter={() => setHoveredRoom('living')}
            onMouseLeave={() => setHoveredRoom(null)}
            onClick={() => openGallery('living')}
          >
            <img src={livingImg} alt="LIVING ROOM" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className={`absolute inset-0 transition-all duration-700 ${hoveredRoom === 'living' ? 'bg-brand-deep-teal/25 backdrop-blur-[2px]' : 'bg-brand-dark-navy/30'}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className={`text-5xl lg:text-8xl font-black text-white tracking-[0.3em] transition-all duration-700 ${hoveredRoom === 'living' ? 'scale-110' : 'scale-100 opacity-90'}`}
                style={{ textShadow: '4px 4px 20px rgba(0,0,0,0.5)' }}>LIVING ROOM</h3>
              <div className={`mt-4 flex items-center gap-2 text-brand-soft-teal transition-all duration-500 transform ${hoveredRoom === 'living' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <FiMaximize2 size={16} /><span className="text-[10px] font-black uppercase tracking-[0.3em]">View Gallery</span>
              </div>
            </div>
            {hoveredRoom === 'living' && <div className="absolute inset-6 border border-brand-soft-teal/40 rounded-xl pointer-events-none animate-pulse" />}
          </div>

          <div className="grid grid-cols-3 gap-4 w-full">
            {[{ id:'kitchen', name:'KITCHEN', img:kitchenImg }, { id:'bedroom', name:'BEDROOM', img:bedroomImg }, { id:'dining', name:'DINING', img:diningImg }].map(room => (
              <div key={room.id}
                className="relative overflow-hidden group cursor-pointer h-[350px] lg:h-[450px] rounded-2xl"
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
                onClick={() => openGallery(room.id)}
              >
                <img src={room.img} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className={`absolute inset-0 transition-all duration-700 ${hoveredRoom === room.id ? 'bg-brand-deep-teal/25 backdrop-blur-[2px]' : 'bg-brand-dark-navy/25'}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className={`text-2xl lg:text-4xl font-black text-white tracking-[0.2em] transition-all duration-700 ${hoveredRoom === room.id ? 'scale-110' : 'scale-100 opacity-90'}`}
                    style={{ textShadow: '2px 2px 15px rgba(0,0,0,0.5)' }}>{room.name}</h3>
                  <div className={`mt-2 flex items-center gap-2 text-brand-soft-teal transition-all duration-500 transform ${hoveredRoom === room.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <FiMaximize2 size={12} /><span className="text-[8px] font-black uppercase tracking-[0.2em]">View Gallery</span>
                  </div>
                </div>
                {hoveredRoom === room.id && <div className="absolute inset-4 border border-brand-soft-teal/40 rounded-xl pointer-events-none animate-pulse" />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col w-full gap-4">
          {rooms.map(room => (
            <div key={room.id} className="relative overflow-hidden h-[280px] rounded-2xl cursor-pointer" onClick={() => openGallery(room.id)}>
              <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-dark-navy/35" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-4xl font-black text-white tracking-[0.2em]" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.6)' }}>{room.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-brand-soft-teal">
                  <FiMaximize2 size={14} /><span className="text-[10px] font-black uppercase tracking-[0.2em]">View Gallery</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-brand-deep-teal hover:bg-brand-soft-teal text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-deep-teal/40 hover:-translate-y-0.5">
            View Full Gallery <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── Services Section ── */}
      <div className="py-20 bg-[#f7fafa] border-y" style={{ borderColor: 'rgba(11,143,139,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-brand-deep-teal text-xs font-bold tracking-[0.4em] uppercase mb-4 block">What We Offer</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-dark-navy">Our Services</h2>
            <p className="text-brand-charcoal/60 text-sm md:text-base max-w-xl mx-auto mt-4">
              End-to-end interior design solutions for every space and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group bg-white border border-brand-deep-teal/10 rounded-2xl p-7 hover:border-brand-deep-teal/50 hover:bg-brand-deep-teal/5 hover:shadow-xl transition-all duration-500 cursor-default"
              >
                <div className="text-brand-deep-teal text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-brand-dark-navy font-bold text-sm tracking-wide mb-3 uppercase group-hover:text-brand-deep-teal transition-colors duration-300">{service.title}</h3>
                <p className="text-brand-charcoal/55 text-xs leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <Testimonials />

      <Lightbox open={lightbox.open} close={() => setLightbox({ open: false, roomId: null })} slides={slides} />
    </Layout>
  );
}

