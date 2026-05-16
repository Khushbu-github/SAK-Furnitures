import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiTarget, FiZap, FiAward } from 'react-icons/fi';

const features = [
  {
    icon: <FiTarget size={36} />,
    title: 'Precision',
    desc: 'Every millimeter matters. Our craftsmen work with surgical precision to deliver flawless results in every project.',
    stat: '100%',
    statLabel: 'Accuracy Rate',
  },
  {
    icon: <FiZap size={36} />,
    title: 'Convenience',
    desc: 'One team, one call. We manage vendors, logistics, and timelines — you just watch your vision come to life.',
    stat: '30+',
    statLabel: 'Years Experience',
  },
  {
    icon: <FiAward size={36} />,
    title: 'Compliance',
    desc: 'All our work meets building codes, safety standards, and quality benchmarks — GST compliant and fully documented.',
    stat: '500+',
    statLabel: 'Happy Clients',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-choose-us" ref={ref} className="py-24 px-4 bg-brand-dark-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-soft-teal text-sm font-semibold tracking-widest uppercase">Our Edge</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Why Choose <span className="bg-gradient-to-r from-brand-soft-teal to-brand-warm-yellow bg-clip-text text-transparent">SAK</span>?
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Three pillars that define our commitment to excellence and set us apart from the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Gradient border wrapper */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-deep-teal to-brand-soft-teal opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-0.5 -m-0.5" />

              <div className="relative glass-dark rounded-3xl p-8 border border-white/10 group-hover:border-transparent transition-all duration-400 hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-deep-teal/20 group-hover:bg-brand-deep-teal/40 rounded-2xl flex items-center justify-center text-brand-soft-teal mb-6 transition-all duration-300 group-hover:scale-110">
                  {f.icon}
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{f.desc}</p>

                {/* Stat */}
                <div className="border-t border-white/10 pt-5">
                  <span className="font-heading text-3xl font-black text-brand-soft-teal">{f.stat}</span>
                  <span className="text-white/40 text-sm ml-2">{f.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
