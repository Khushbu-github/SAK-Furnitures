import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img_before from '../assets/gallery/5.jpeg';
import img_after from '../assets/gallery/6.jpeg';
import img_before2 from '../assets/gallery/7.jpeg';
import img_after2 from '../assets/gallery/8.jpeg';

const pairs = [
  {
    before: img_before,
    after: img_after,
    label: 'Living Room Transformation',
  },
  {
    before: img_before2,
    after: img_after2,
    label: 'Kitchen Renovation',
  },
];

const BeforeAfter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id="before-after" ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">Transformations</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4 mb-6">
            Before & <span className="text-gradient">After</span>
          </h2>
          <p className="text-brand-charcoal/60 text-lg max-w-2xl mx-auto">
            Drag the slider to witness the remarkable transformations we create for our clients.
          </p>
        </motion.div>

        {/* Selector tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {pairs.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? 'bg-brand-deep-teal text-white shadow-lg shadow-brand-deep-teal/30'
                  : 'bg-brand-light-gray text-brand-charcoal hover:bg-brand-deep-teal/10'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark-navy/20 border border-brand-light-gray"
        >
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={pairs[active].before}
                alt="Before transformation"
                style={{ objectFit: 'cover' }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={pairs[active].after}
                alt="After transformation"
                style={{ objectFit: 'cover' }}
              />
            }
            style={{ height: '480px', width: '100%' }}
          />
        </motion.div>

        <div className="flex justify-center gap-12 mt-6">
          <div className="flex items-center gap-2 text-brand-charcoal/60 text-sm font-medium">
            <span className="w-4 h-4 rounded bg-brand-charcoal/40" /> Before
          </div>
          <div className="flex items-center gap-2 text-brand-charcoal/60 text-sm font-medium">
            <span className="w-4 h-4 rounded bg-brand-deep-teal" /> After
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
