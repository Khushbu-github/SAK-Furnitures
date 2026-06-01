import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { submitContact } from '../utils/api';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields.'); return;
    }
    setSubmitting(true);
    try {
      // 1. Submit to Backend (for admin dashboard)
      await submitContact(form);

      // 2. Prepare WhatsApp message
      const whatsappNumber = '919845578585';
      const text = `*New Inquiry from SAK Website*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Message:* ${form.message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      toast.success("Message sent! Redirecting to WhatsApp...", { duration: 3000 });

      // 3. Reset form and Redirect
      setForm({ name: '', phone: '', message: '' });

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);

    } catch {
      toast.error('Failed to send. Please call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 bg-white">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-deep-teal text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-dark-navy mt-4 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-brand-charcoal/60 text-lg max-w-2xl mx-auto">
            Ready to transform your space? Reach out today for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-brand-dark-navy to-brand-deep-teal rounded-3xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:9845578585" className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-brand-soft-teal/30 transition-colors"><FiPhone size={20} /></div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide">Call Us</p>
                    <p className="font-semibold">9845578585 / 7019806181</p>
                  </div>
                </a>
                <a href="mailto:sakfurniture6666@gmail.com" className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-brand-soft-teal/30 transition-colors"><FiMail size={20} /></div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide">Email</p>
                    <p className="font-semibold text-sm break-all">sakfurniture6666@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/919845578585" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors"><FaWhatsapp size={22} /></div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide">WhatsApp</p>
                    <p className="font-semibold">+91 9845578585</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><FiMapPin size={20} /></div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide">Location</p>
                    <p className="font-semibold">Bangalore, Karnataka</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">GSTIN</p>
                <p className="font-mono font-semibold text-brand-soft-teal tracking-wider">29AOAPM1437R1ZG</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:9845578585" className="flex items-center justify-center gap-2 bg-brand-deep-teal/10 hover:bg-brand-deep-teal hover:text-white text-brand-deep-teal font-semibold py-4 rounded-2xl transition-all duration-300 border border-brand-deep-teal/20">
                <FiPhone /> Call Now
              </a>
              <a href="https://wa.me/919845578585" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-500 hover:text-white text-green-600 font-semibold py-4 rounded-2xl transition-all duration-300 border border-green-200">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl shadow-brand-dark-navy/10 border border-brand-light-gray">
              <h3 className="font-heading text-2xl font-bold text-brand-dark-navy mb-8">Send Us a Message</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Your Name</label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3.5 rounded-xl border border-brand-light-gray focus:border-brand-deep-teal focus:ring-2 focus:ring-brand-deep-teal/20 outline-none transition-all text-sm text-brand-charcoal placeholder-brand-charcoal/30" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Phone Number</label>
                  <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 9876543210" className="w-full px-4 py-3.5 rounded-xl border border-brand-light-gray focus:border-brand-deep-teal focus:ring-2 focus:ring-brand-deep-teal/20 outline-none transition-all text-sm text-brand-charcoal placeholder-brand-charcoal/30" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Message</label>
                  <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3.5 rounded-xl border border-brand-light-gray focus:border-brand-deep-teal focus:ring-2 focus:ring-brand-deep-teal/20 outline-none transition-all text-sm text-brand-charcoal placeholder-brand-charcoal/30 resize-none" />
                </div>
                <button id="contact-submit-btn" type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 bg-brand-deep-teal hover:bg-brand-soft-teal disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-deep-teal/40 hover:-translate-y-0.5">
                  {submitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><FiSend size={18} /> Send Message</>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
