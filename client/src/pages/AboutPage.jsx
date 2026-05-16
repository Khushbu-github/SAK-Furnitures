import Layout from '../components/Layout';
import About from '../components/About';
import Services from '../components/Services';
import ProjectManagement from '../components/ProjectManagement';
import SupportWarranty from '../components/SupportWarranty';
import Vision from '../components/Vision';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
          <span className="text-brand-soft-teal text-sm font-semibold tracking-widest uppercase">Who We Are & What We Do</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mt-4 mb-4">
            About Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            30+ years of premium craftsmanship — from vision to flawless execution.
          </p>
        </motion.div>
      </div>

      {/* About Story + Stats */}
      <About />

      {/* Vision & Strategy */}
      <Vision />

      {/* Our Services */}
      <Services />

      {/* Project Management */}
      <ProjectManagement />

      {/* Support & Warranty */}
      <SupportWarranty />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </Layout>
  );
}
