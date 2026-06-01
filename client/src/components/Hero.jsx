import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../assets/Livingroom.png';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="Luxury Interior by SAK Furniture"
          className="w-full h-full object-cover object-center scale-110"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-navy/85 via-brand-dark-navy/60 to-brand-deep-teal/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-brand-deep-teal/30 backdrop-blur-sm border border-brand-soft-teal/40 text-brand-soft-teal text-sm font-medium px-5 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-brand-soft-teal rounded-full animate-pulse" />
          30+ Years of Excellence
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Designing Spaces,
          <br />
          <span className="bg-gradient-to-r from-brand-soft-teal to-brand-warm-yellow bg-clip-text text-transparent">
            Creating Lifestyles.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          30+ Years of Excellence in Furniture & Interior Solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            id="hero-gallery-btn"
            to="/gallery"
            className="px-8 py-4 bg-brand-deep-teal hover:bg-brand-soft-teal text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-deep-teal/50 hover:-translate-y-1 text-base"
          >
            View Gallery
          </Link>
          <Link
            id="hero-contact-btn"
            to="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 text-base"
          >
            Contact Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
