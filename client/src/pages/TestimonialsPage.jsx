import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export default function TestimonialsPage() {
  return (
    <Layout>
      {/* Page Hero Banner */}
      <div className="pt-20 bg-gradient-to-br from-brand-dark-navy to-brand-deep-teal">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 py-16 text-center"
        >
          <span className="text-brand-soft-teal text-sm font-semibold tracking-widest uppercase">Client Stories</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mt-4 mb-4">
            Testimonials
          </h1>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <FiStar key={i} className="text-brand-warm-yellow fill-brand-warm-yellow" size={22} />)}
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Hear from our 500+ happy clients across Bangalore.
          </p>
        </motion.div>
      </div>

      <Testimonials />
    </Layout>
  );
}
