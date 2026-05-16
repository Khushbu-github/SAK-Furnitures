import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut, FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';

const AdminLayout = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-[#0B8F8B]/10 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img src={logo} alt="SAK Logo" className="h-16 w-auto object-contain" />
          <span className="text-brand-charcoal font-black tracking-widest uppercase text-sm border-l border-[#0B8F8B]/20 pl-4 hidden sm:block">Portfolio Manager</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-red-500 hover:bg-red-50 transition-all duration-200 uppercase tracking-wider"
          >
            <FiLogOut size={14} /> Sign Out
          </button>
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-deep-teal text-white hover:bg-brand-soft-teal transition-all duration-200 uppercase tracking-wider shadow-md"
          >
            <FiArrowLeft size={14} /> Back to Website
          </Link>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-10 overflow-auto max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
