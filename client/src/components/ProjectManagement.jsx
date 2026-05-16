import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheckCircle, FiTruck, FiStar } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: <FiCheckCircle size={28} />,
    title: 'End-to-End Execution',
    desc: 'We handle everything from initial design consultation to final installation — a single point of accountability throughout your project.',
  },
  {
    number: '02',
    icon: <FiTruck size={28} />,
    title: 'Sourcing & Logistics',
    desc: 'Premium materials are sourced directly from trusted vendors, ensuring the best quality at the right price with seamless delivery.',
  },
  {
    number: '03',
    icon: <FiStar size={28} />,
    title: 'Quality Control',
    desc: 'Every detail is inspected and approved through our rigorous quality framework before handover to ensure perfection.',
  },
];

const ProjectManagement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="project-management" ref={ref} className="py-24 px-4 bg-brand-dark-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-soft-teal text-sm font-semibold tracking-widest uppercase">How We Work</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Project <span className="bg-gradient-to-r from-brand-soft-teal to-brand-warm-yellow bg-clip-text text-transparent">Management</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Our proven process ensures every project is delivered on time, within budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-deep-teal via-brand-soft-teal to-brand-warm-yellow -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="glass-dark rounded-3xl p-8 border border-white/10 hover:border-brand-soft-teal/40 transition-all duration-400 hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-heading font-black text-brand-soft-teal/20 leading-none">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-brand-deep-teal/30 rounded-xl flex items-center justify-center text-brand-soft-teal group-hover:bg-brand-deep-teal transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
