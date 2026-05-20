import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiAward, FiUsers, FiHome, FiStar } from 'react-icons/fi';

import kitchenImg  from '../assets/kitchen1.jpeg';
import bedroomImg  from '../assets/bedroom.jpeg';
import livingImg   from '../assets/livingroom.jpeg';
import dividerImg  from '../assets/DecorativeRoomDivider1.jpeg';

const stats = [
  { value: '30+', label: 'Years Experience', icon: <FiAward size={22} /> },
  { value: '500+', label: 'Happy Clients',   icon: <FiUsers size={22} /> },
  { value: '1000+', label: 'Projects Done',  icon: <FiHome size={22} /> },
  { value: '4.9★', label: 'Client Rating',   icon: <FiStar size={22} /> },
];

const spaces = [
  { img: kitchenImg,  title: 'Modular Kitchens',   desc: 'Intelligently engineered layouts featuring premium, durable materials and sleek, contemporary finishes to create a culinary workspace you will genuinely love spending time in.' },
  { img: bedroomImg,  title: 'Bedroom Interiors',  desc: 'Serene, deeply personalized retreats complete with bespoke customized wardrobes, atmospheric mood lighting, and refined architectural detailing for ultimate relaxation.' },
  { img: livingImg,   title: 'Living Rooms',        desc: 'Visually impressive and deeply inviting living spaces that strike the perfect balance between luxurious comfort and sophisticated style — the true heart of every home we design.' },
  { img: dividerImg,  title: 'Room Dividers',       desc: 'Exquisitely crafted decorative room dividers and architectural partitions that elegantly establish privacy and spatial definition without sacrificing the flow of natural light.' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      {/* ── Main Split Section ── */}
      <section id="about" ref={ref} className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-deep-teal/20">
                <img src={kitchenImg} alt="SAK Modular Kitchen" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-4 bg-brand-deep-teal text-white rounded-2xl px-6 py-4 shadow-xl"
              >
                <p className="font-heading text-3xl font-bold">30+</p>
                <p className="text-brand-soft-teal text-xs uppercase tracking-widest mt-0.5">Years of Excellence</p>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-8 lg:pt-0"
            >
              <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">Our Story</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4 mb-6 leading-tight">
                Crafting Premium<br />
                <span className="text-gradient">Interior Experiences</span>
              </h2>
              <p className="text-brand-charcoal/70 text-base leading-relaxed mb-5">
                Founded in Bangalore, SAK Furniture & Interiors has spent over three decades turning ordinary spaces into extraordinary homes. We combine artisanal craftsmanship with modern design sensibility to deliver interiors that are timeless, functional, and deeply personal.
              </p>
              <p className="text-brand-charcoal/70 text-base leading-relaxed mb-8">
                From modular kitchens to full-home interior fit-outs, our team of skilled designers and craftsmen work closely with every client to understand their vision — and bring it to life with precision, quality, and care.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-10">
                {['GSTIN Registered — 29AOAPM1437R1ZG', 'ISO-compliant quality processes', '1-year post-handover support warranty', 'In-house design, supply & execution team'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-brand-charcoal/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-deep-teal flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-brand-deep-teal hover:bg-brand-soft-teal text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-deep-teal/40 hover:-translate-y-0.5">
                Get a Free Consultation
              </Link>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-gradient-to-br from-brand-deep-teal/8 to-brand-soft-teal/5 border border-brand-deep-teal/15 rounded-2xl p-6 text-center group hover:border-brand-deep-teal/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-brand-deep-teal flex justify-center mb-3">{s.icon}</div>
                <p className="font-heading text-3xl font-bold text-brand-dark-navy">{s.value}</p>
                <p className="text-brand-charcoal/55 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spaces We Design ── */}
      <section className="py-20 px-4 bg-[#f7fafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">What We Design</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4 mb-4">
              Spaces We <span className="text-gradient">Specialise In</span>
            </h2>
            <p className="text-brand-charcoal/60 max-w-xl mx-auto">
              Every room in your home deserves thoughtful design. Here's where we excel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {spaces.map((space, i) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-deep-teal/20 transition-all duration-400 hover:-translate-y-1"
              >
                <img
                  src={space.img}
                  alt={space.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/85 via-brand-dark-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{space.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{space.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
