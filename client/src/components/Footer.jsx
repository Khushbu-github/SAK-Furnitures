import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {

  return (
    <footer className="bg-brand-dark-navy text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="SAK Logo" className="h-20 w-auto object-contain mb-4" />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              30+ years of crafting premium interior experiences across Bangalore.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/919845578585" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path}
                    className="text-white/50 hover:text-brand-soft-teal text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Interior Wood Works', 'POP Ceiling Designs', 'Electric Light Design', 'MS & SS Welding', 'Commercial Interiors', 'Glass Work'].map((s) => (
                <li key={s} className="text-white/50 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:9845578585" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                <FiPhone size={15} className="text-brand-soft-teal flex-shrink-0" />
                9845578585
              </a>
              <a href="tel:7019806181" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                <FiPhone size={15} className="text-brand-soft-teal flex-shrink-0" />
                7019806181
              </a>
              <a href="mailto:sakfurniture6666@gmail.com" className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors break-all">
                <FiMail size={15} className="text-brand-soft-teal flex-shrink-0 mt-0.5" />
                sakfurniture6666@gmail.com
              </a>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">GSTIN</p>
                <p className="font-mono text-brand-soft-teal text-sm tracking-wider">29AOAPM1437R1ZG</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} SAK Furniture & Interiors. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Crafted with ❤️ in Bangalore
          </p>
          <Link
            to="/admin/login"
            className="text-white/20 hover:text-brand-soft-teal text-xs transition-colors duration-200"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
