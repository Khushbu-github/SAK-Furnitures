import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rajeev Sharma',
    role: 'Homeowner, Bangalore',
    review: 'SAK Furniture transformed our home completely. The attention to detail and quality of work is exceptional. We couldn\'t be happier with the result!',
    rating: 5,
    initials: 'RS',
  },
  {
    name: 'Priya Nair',
    role: 'Restaurant Owner',
    review: 'They handled our entire restaurant interior from concept to delivery. Professional, timely, and the outcome was stunning. Highly recommended!',
    rating: 5,
    initials: 'PN',
  },
  {
    name: 'Anil Kumar',
    role: 'Office Developer',
    review: 'Outstanding quality of work on our commercial office space. SAK\'s team was highly professional and the project was delivered ahead of schedule.',
    rating: 5,
    initials: 'AK',
  },
  {
    name: 'Sunita Reddy',
    role: 'Villa Owner, Whitefield',
    review: 'The wooden work and ceiling designs they did for our villa are simply breathtaking. Every guest compliments the interior. Worth every rupee!',
    rating: 5,
    initials: 'SR',
  },
  {
    name: 'Mohammed Salim',
    role: 'Retail Shop Owner',
    review: 'From glass work to electrical lighting design — SAK handled everything perfectly. My shop looks premium and customers love it.',
    rating: 5,
    initials: 'MS',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="py-24 px-4 bg-gradient-to-br from-brand-light-gray/50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">Client Stories</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-brand-dark-navy/10 border border-brand-light-gray relative overflow-hidden"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-brand-deep-teal/10 text-8xl absolute top-6 left-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <FiStar key={i} className="text-brand-warm-yellow fill-brand-warm-yellow" size={20} />
                ))}
              </div>

              <p className="text-brand-charcoal text-xl md:text-2xl leading-relaxed font-light italic mb-8 relative z-10">
                "{testimonials[current].review}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-deep-teal to-brand-soft-teal flex items-center justify-center text-white font-bold font-heading">
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="font-heading font-bold text-brand-dark-navy">{testimonials[current].name}</p>
                  <p className="text-brand-charcoal/50 text-sm">{testimonials[current].role}</p>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-deep-teal to-brand-soft-teal" />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-brand-light-gray hover:border-brand-deep-teal hover:text-brand-deep-teal text-brand-charcoal flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-brand-deep-teal/20"
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2.5 bg-brand-deep-teal' : 'w-2.5 h-2.5 bg-brand-light-gray hover:bg-brand-soft-teal/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-brand-light-gray hover:border-brand-deep-teal hover:text-brand-deep-teal text-brand-charcoal flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-brand-deep-teal/20"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
