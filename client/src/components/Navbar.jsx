import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiLock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const textColor = 'text-brand-charcoal';
  const navBg = 'bg-white/50 backdrop-blur-xl shadow-lg shadow-brand-deep-teal/10';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 h-20`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src={logo}
              alt="SAK Furniture & Interiors"
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 h-16`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group whitespace-nowrap ${textColor} ${
                  isActive(link.path) ? 'font-semibold' : ''
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-deep-teal rounded-full transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919845578585"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-brand-deep-teal hover:bg-brand-soft-teal text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-deep-teal/40 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Us
            </a>

            {/* Admin icon */}
            <Link
              to="/admin/login"
              title="Admin Login"
              className="p-2 rounded-lg transition-colors duration-200 text-brand-charcoal/40 hover:text-brand-deep-teal hover:bg-brand-deep-teal/10"
            >
              <FiLock size={18} />
            </Link>

            <button
              id="mobile-menu-toggle"
              className="md:hidden p-2 rounded-lg transition-colors duration-300 text-brand-charcoal hover:bg-brand-light-gray"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-brand-light-gray shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'bg-brand-deep-teal/10 text-brand-deep-teal font-semibold'
                      : 'text-brand-charcoal hover:bg-brand-deep-teal/10 hover:text-brand-deep-teal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/919845578585"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-deep-teal text-white font-semibold py-3 rounded-xl mt-2"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
