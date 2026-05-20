import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { MdCarpenter, MdGridView, MdElectricalServices, MdBuild, MdOutlineWindow } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';
import bedroomImg from '../assets/bedroom.jpeg';
import livingImg from '../assets/livingroom.jpeg';
import kitchen1Img from '../assets/kitchen1.jpeg';
import kitchen2Img from '../assets/kitchen2.jpeg';
import kitchen3Img from '../assets/kitchen3.jpeg';
import divider1Img from '../assets/DecorativeRoomDivider1.jpeg';
import divider2Img from '../assets/DecorativeRoomDivider2.jpeg';

const services = [
  { icon: <MdCarpenter size={34} />, title: 'Interior Wood Works',            desc: 'Custom-crafted woodwork and furniture with premium materials and fine finishes.' },
  { icon: <MdGridView size={34} />,  title: 'POP Ceiling Designs',            desc: 'Elegant pop ceilings, false ceilings, and decorative patterns.' },
  { icon: <MdElectricalServices size={34} />, title: 'Electric Light Design', desc: 'Interior light design and smart electrical solutions that enhance ambience.' },
  { icon: <MdBuild size={34} />,     title: 'MS & SS Welding Work',           desc: 'Precision metal fabrication for structural and decorative needs.' },
  { icon: <FaStore size={34} />,     title: 'Commercial & Residences Interiors',           desc: 'Full-scale interior solutions for commercial spaces, offices, and residential homes.' },
  { icon: <MdOutlineWindow size={34} />, title: 'Glass Work',                 desc: 'Modern glass partitions, railings, doors, and decorative glass panels.' },
];

const rooms = [
  { id: 'living', name: 'LIVING ROOM', img: livingImg },
  { id: 'kitchen1', name: 'KITCHEN', img: kitchen1Img },
  { id: 'bedroom', name: 'BEDROOM', img: bedroomImg },
  { id: 'divider1', name: 'ROOM DIVIDER', img: divider1Img },
  { id: 'kitchen2', name: 'MODULAR KITCHEN', img: kitchen2Img },
  { id: 'divider2', name: 'DECORATIVE', img: divider2Img },
  { id: 'kitchen3', name: 'INTERIORS', img: kitchen3Img },
];

// Alternating feature rows
const features = [
  {
    img: kitchen1Img,
    tag: 'Modular Kitchens',
    title: 'Kitchens Built for\nReal Living',
    desc: 'Transform your culinary space into the heart of your home. We meticulously design smart, beautifully crafted modular kitchens that perfectly balance ergonomic workflow, intelligent storage solutions, and breathtaking aesthetics. Every cabinet, premium countertop, and high-quality fitting is hand-selected to withstand decades of daily use while maintaining its elegant appeal.',
    points: ['Bespoke modular & semi-modular layouts', 'Premium scratch-resistant laminate & acrylic finishes', 'Intelligent space-saving storage mechanisms', 'Custom-designed kitchen islands & breakfast counters'],
    id: 'kitchen',
    reverse: false,
  },
  {
    img: bedroomImg,
    tag: 'Bedroom Interiors',
    title: 'Bedrooms Designed\nfor Deep Rest',
    desc: 'Escape into a private sanctuary crafted just for you. From bespoke floor-to-ceiling wardrobe designs to perfectly calibrated ambient lighting, we curate bedrooms that feel like a luxurious, serene retreat. Every texture and hue is personalized to induce relaxation, built with the finest, ethically sourced materials for a truly restful atmosphere.',
    points: ['Customized floor-to-ceiling sliding wardrobes', 'Atmospheric mood & functional task lighting', 'Handcrafted custom headboards & wall panelling', 'Seamlessly integrated study & dressing zones'],
    id: 'bedroom',
    reverse: true,
  },
  {
    img: divider1Img,
    tag: 'Room Dividers',
    title: 'Elegant Room Dividers\n& Partitions',
    desc: 'Redefine your open-plan living spaces with our exquisite custom decorative room dividers. We specialize in designing architectural partitions that elegantly introduce privacy and define distinct zones without ever sacrificing the flow of natural light. It is the perfect blend of artistic statement and functional separation.',
    points: ['Precision CNC-cut customized geometric designs', 'Premium solid wood, metal & fluted glass partitions', 'Intelligent spatial optimization and zoning', 'Seamless blend of modern and traditional patterns'],
    id: 'divider',
    reverse: false,
  },
  {
    img: livingImg,
    tag: 'Living Rooms',
    title: 'Living Rooms That\nMake an Impression',
    desc: 'Your living room sets the tone for your entire home. We conceive and create living spaces that are as luxuriously comfortable as they are visually spectacular. From grand feature walls to intimate seating arrangements, we design environments that invite connection, celebrate your personal style, and leave a lasting impression on every guest.',
    points: ['Striking feature walls & integrated TV panels', 'Ergonomic seating & bespoke upholstery planning', 'Architectural false ceilings with warm cove lighting', 'Curated decor & premium soft furnishing guidance'],
    id: 'living',
    reverse: true,
  },
];

export default function Home() {
  const [hoveredRoom, setHoveredRoom] = useState(null);

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
            Browse our diverse range of interior spaces.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:block w-full max-w-[1400px] mx-auto">
          <div
            className="relative overflow-hidden group h-[400px] lg:h-[500px] mb-4 rounded-2xl"
            onMouseEnter={() => setHoveredRoom('living')}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <img src={livingImg} alt="LIVING ROOM" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className={`absolute inset-0 transition-all duration-700 ${hoveredRoom === 'living' ? 'bg-brand-deep-teal/25 backdrop-blur-[2px]' : 'bg-brand-dark-navy/30'}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className={`text-5xl lg:text-8xl font-black text-white tracking-[0.3em] transition-all duration-700 ${hoveredRoom === 'living' ? 'scale-110' : 'scale-100 opacity-90'}`}
                style={{ textShadow: '4px 4px 20px rgba(0,0,0,0.5)' }}>LIVING ROOM</h3>
            </div>
            {hoveredRoom === 'living' && <div className="absolute inset-6 border border-brand-soft-teal/40 rounded-xl pointer-events-none animate-pulse" />}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {[
              { id: 'kitchen1', name: 'KITCHEN', img: kitchen1Img },
              { id: 'bedroom', name: 'BEDROOM', img: bedroomImg },
              { id: 'divider1', name: 'ROOM DIVIDER', img: divider1Img },
              { id: 'kitchen2', name: 'MODULAR KITCHEN', img: kitchen2Img },
              { id: 'divider2', name: 'DECORATIVE', img: divider2Img },
              { id: 'kitchen3', name: 'INTERIORS', img: kitchen3Img }
            ].map(room => (
              <div key={room.id}
                className="relative overflow-hidden group h-[350px] lg:h-[450px] rounded-2xl"
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                <img src={room.img} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className={`absolute inset-0 transition-all duration-700 ${hoveredRoom === room.id ? 'bg-brand-deep-teal/25 backdrop-blur-[2px]' : 'bg-brand-dark-navy/25'}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className={`text-2xl lg:text-3xl font-black text-white tracking-[0.2em] transition-all duration-700 text-center px-4 ${hoveredRoom === room.id ? 'scale-110' : 'scale-100 opacity-90'}`}
                    style={{ textShadow: '2px 2px 15px rgba(0,0,0,0.5)' }}>{room.name}</h3>
                </div>
                {hoveredRoom === room.id && <div className="absolute inset-4 border border-brand-soft-teal/40 rounded-xl pointer-events-none animate-pulse" />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col w-full gap-4">
          {rooms.map(room => (
            <div key={room.id} className="relative overflow-hidden h-[280px] rounded-2xl">
              <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-dark-navy/35" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-4xl font-black text-white tracking-[0.2em]" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.6)' }}>{room.name}</h3>
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

      {/* ── Design Process ── */}
      <section className="py-24 bg-white border-y" style={{ borderColor: 'rgba(11,143,139,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-brand-deep-teal text-xs font-bold tracking-[0.4em] uppercase mb-4 block">How We Work</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-dark-navy">Our Design Process</h2>
            <p className="text-brand-charcoal/60 text-sm md:text-base max-w-xl mx-auto mt-4">
              A seamless, transparent journey from your first idea to the final reveal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-brand-deep-teal/20 -z-10 -translate-y-1/2" />
            
            {[
              { step: '01', title: 'Consultation', desc: 'We meet to understand your vision, lifestyle, and budget requirements.' },
              { step: '02', title: 'Design & Planning', desc: 'Our team creates detailed 3D models and precise material specifications.' },
              { step: '03', title: 'Execution', desc: 'Our master craftsmen build and install everything with absolute precision.' },
              { step: '04', title: 'Handover', desc: 'A thorough quality check and final reveal of your stunning new space.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white px-6 py-8 rounded-2xl border border-brand-deep-teal/10 shadow-lg shadow-brand-deep-teal/5 relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-brand-dark-navy text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mb-6 mx-auto group-hover:bg-brand-deep-teal transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-brand-dark-navy font-bold text-lg text-center mb-3">{item.title}</h3>
                <p className="text-brand-charcoal/60 text-sm text-center leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-brand-dark-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-soft-teal text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The SAK Advantage</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                For over three decades, we have built a reputation on uncompromising quality, absolute transparency, and design excellence. When you choose SAK Furniture & Interiors, you are investing in peace of mind.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-deep-teal border-2 border-brand-dark-navy flex items-center justify-center font-bold">30+</div>
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-dark-navy flex items-center justify-center text-brand-dark-navy font-bold">Yrs</div>
                </div>
                <p className="text-sm text-white/80 font-medium">Of Unmatched Industry<br/>Experience in Bangalore</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Premium Quality', desc: 'Only the finest ethically sourced wood, marine ply, and hardware.', delay: 0.2 },
                { title: 'Transparent Pricing', desc: 'No hidden costs. Detailed quotations mapped to your exact budget.', delay: 0.3 },
                { title: 'On-Time Delivery', desc: 'Strict adherence to timelines without compromising on finish.', delay: 0.4 },
                { title: 'In-House Experts', desc: 'From designers to carpenters, our team is entirely in-house.', delay: 0.5 }
              ].map((adv) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: adv.delay }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-3 h-3 bg-brand-soft-teal rounded-full mb-4" />
                  <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Call To Action ── */}
      <section className="py-20 bg-[#f7fafa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-deep-teal to-brand-soft-teal rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-brand-deep-teal/30"
          >
            {/* Background embellishments */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark-navy/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                Book a free consultation with our design experts today and take the first step toward the home of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-white text-brand-deep-teal font-bold rounded-xl hover:bg-brand-dark-navy hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1">
                  Get a Free Quote
                </Link>
                <Link to="/gallery" className="px-8 py-4 bg-transparent border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                  Explore Gallery
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />
    </Layout>
  );
}

