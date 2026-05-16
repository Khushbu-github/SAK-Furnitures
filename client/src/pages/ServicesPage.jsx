import Layout from '../components/Layout';
import Services from '../components/Services';
import ProjectManagement from '../components/ProjectManagement';
import SupportWarranty from '../components/SupportWarranty';
import { motion } from 'framer-motion';

export default function ServicesPage() {
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
          <span className="text-brand-soft-teal text-sm font-semibold tracking-widest uppercase">What We Offer</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mt-4 mb-4">
            Our Services
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From wood works to glass installations — complete interior solutions under one roof.
          </p>
        </motion.div>
      </div>

      <Services />
      <ProjectManagement />
      <SupportWarranty />
    </Layout>
  );
}
