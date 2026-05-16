import Layout from '../components/Layout';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
          <span className="text-brand-soft-teal text-sm font-semibold tracking-widest uppercase">Talk To Us</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mt-4 mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to transform your space? Reach out for a free consultation today.
          </p>
        </motion.div>
      </div>

      <Contact />
    </Layout>
  );
}
