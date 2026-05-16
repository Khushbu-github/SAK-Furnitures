import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4 items-center">
      {/* Phone Button */}
      <motion.a
        href="tel:9845578585"
        id="float-phone-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-gradient-to-br from-brand-deep-teal to-brand-dark-navy rounded-full flex items-center justify-center shadow-xl shadow-brand-deep-teal/40 group"
        aria-label="Call us"
      >
        <FaPhone className="text-white text-xl" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-brand-dark-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Call: 9845578585
        </span>
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full border-2 border-brand-soft-teal animate-ping opacity-30" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919845578585"
        id="float-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/50 group"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp className="text-white text-2xl" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-brand-dark-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          WhatsApp Us
        </span>
        {/* Green glow ring */}
        <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-40" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
