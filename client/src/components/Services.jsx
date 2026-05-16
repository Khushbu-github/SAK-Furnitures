import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MdCarpenter, MdGridView, MdElectricalServices, MdBuild, MdOutlineWindow } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';

const services = [
  {
    icon: <MdCarpenter size={36} />,
    title: 'Interior Wood Works',
    desc: 'Custom-crafted woodwork and furniture designing with premium materials and fine finishes.',
    color: 'from-brand-wood-brown/20 to-brand-warm-yellow/10',
    border: 'border-brand-wood-brown/30',
    iconColor: 'text-brand-wood-brown',
  },
  {
    icon: <MdGridView size={36} />,
    title: 'POP Work',
    desc: 'Elegant ceiling designs including pop ceilings, false ceilings, and decorative patterns.',
    color: 'from-brand-deep-teal/20 to-brand-soft-teal/10',
    border: 'border-brand-deep-teal/30',
    iconColor: 'text-brand-deep-teal',
  },
  {
    icon: <MdElectricalServices size={36} />,
    title: 'Electric Work',
    desc: 'Interior light design and smart electrical solutions that enhance ambience and mood.',
    color: 'from-brand-warm-yellow/20 to-yellow-100/30',
    border: 'border-brand-warm-yellow/30',
    iconColor: 'text-brand-warm-yellow',
  },
  {
    icon: <MdBuild size={36} />,
    title: 'MS & SS Welding Work',
    desc: 'Precision metal fabrication in mild steel and stainless steel for structural and decorative needs.',
    color: 'from-brand-charcoal/10 to-gray-100/50',
    border: 'border-brand-charcoal/20',
    iconColor: 'text-brand-charcoal',
  },
  {
    icon: <FaStore size={36} />,
    title: 'Commercial & Residences Interiors',
    desc: 'Full-scale interior solutions for commercial spaces, offices, and residential homes.',
    color: 'from-brand-plant-green/20 to-green-100/30',
    border: 'border-brand-plant-green/30',
    iconColor: 'text-brand-plant-green',
  },
  {
    icon: <MdOutlineWindow size={36} />,
    title: 'Glass Work',
    desc: 'Modern glass installations including partitions, railings, doors, and decorative glass panels.',
    color: 'from-cyan-100/40 to-brand-soft-teal/10',
    border: 'border-brand-soft-teal/30',
    iconColor: 'text-brand-soft-teal',
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-24 px-4 bg-brand-light-gray/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-brand-charcoal/60 text-lg max-w-2xl mx-auto">
            From concept to completion, we deliver end-to-end interior solutions that blend artistry with functionality.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-white rounded-2xl p-8 border ${s.border} hover:border-brand-deep-teal/60 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-deep-teal/15 overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

              <div className="relative z-10">
                <div className={`${s.iconColor} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-dark-navy mb-3">{s.title}</h3>
                <p className="text-brand-charcoal/60 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Glow border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-deep-teal to-brand-soft-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
