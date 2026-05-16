import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHome, FiHeart, FiShield } from 'react-icons/fi';

const trustCards = [
  {
    icon: <FiHome size={32} />,
    title: 'Move-in Ready Delivery',
    desc: 'We deliver fully finished spaces — clean, installed, and ready to live in from day one. Zero hassle handover.',
    accent: 'border-brand-warm-yellow/40 hover:border-brand-warm-yellow',
    iconBg: 'bg-brand-warm-yellow/15 text-brand-warm-yellow',
  },
  {
    icon: <FiHeart size={32} />,
    title: 'Long-Term Aftercare',
    desc: 'Our relationship doesn\'t end at handover. We provide ongoing support and maintenance for all our projects.',
    accent: 'border-brand-deep-teal/40 hover:border-brand-deep-teal',
    iconBg: 'bg-brand-deep-teal/15 text-brand-deep-teal',
  },
  {
    icon: <FiShield size={32} />,
    title: 'Warranty Support',
    desc: 'All our work comes with a comprehensive warranty covering materials and workmanship for complete peace of mind.',
    accent: 'border-brand-plant-green/40 hover:border-brand-plant-green',
    iconBg: 'bg-brand-plant-green/15 text-brand-plant-green',
  },
];

const SupportWarranty = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="support" ref={ref} className="py-24 px-4 bg-gradient-to-br from-brand-light-gray/60 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">Our Promise</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4 mb-6">
            Support & <span className="text-gradient">Warranty</span>
          </h2>
          <p className="text-brand-charcoal/60 text-lg max-w-2xl mx-auto">
            We stand behind every project with comprehensive support and warranty programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`bg-white rounded-3xl p-8 border-2 ${card.accent} shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {card.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-dark-navy mb-4">{card.title}</h3>
              <p className="text-brand-charcoal/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportWarranty;
