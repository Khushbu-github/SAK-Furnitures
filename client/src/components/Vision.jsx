import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BsGem } from 'react-icons/bs';

const visionCards = [
  {
    icon: <HiOutlineLightBulb size={40} />,
    title: 'Concept Design',
    items: ['2D Floor Plans', 'Realistic 3D Renders', 'Mood Board Creation', 'Design Consultation'],
    color: 'from-brand-warm-yellow/20 to-amber-50',
    iconBg: 'bg-brand-warm-yellow/15',
    iconColor: 'text-brand-warm-yellow',
  },
  {
    icon: <MdOutlineSpaceDashboard size={40} />,
    title: 'Space Optimization',
    items: ['Smart Layouts', 'Maximum Functionality', 'Ergonomic Planning', 'Storage Solutions'],
    color: 'from-brand-deep-teal/15 to-cyan-50',
    iconBg: 'bg-brand-deep-teal/15',
    iconColor: 'text-brand-deep-teal',
  },
  {
    icon: <BsGem size={40} />,
    title: 'Material Selection',
    items: ['Premium Finishes', 'Fabric & Color Palette', 'Sustainable Materials', 'Texture Curation'],
    color: 'from-brand-plant-green/15 to-emerald-50',
    iconBg: 'bg-brand-plant-green/15',
    iconColor: 'text-brand-plant-green',
  },
];

const Vision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vision" ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">Our Strategy</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4 mb-6">
            Vision & <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-brand-charcoal/60 text-lg max-w-2xl mx-auto">
            Every project begins with a vision. Our structured approach ensures your space is both beautiful and functional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative bg-gradient-to-br ${card.color} rounded-3xl p-8 border border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 group overflow-hidden`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-6 ${card.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                {card.icon}
              </div>

              <h3 className="font-heading text-2xl font-bold text-brand-dark-navy mb-5">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brand-charcoal/70 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-deep-teal rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
