import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import { loginAdmin } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginAdmin(form);
      login(res.data.access_token, res.data.admin);
      toast.success('Welcome back!');
      navigate('/admin/gallery');
    } catch {
      toast.error('Invalid credentials. Access denied.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#0A1626' }}>
      <Toaster position="top-right" />

      {/* Background blobs — pointer-events-none so they don't block */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(11,143,139,0.15)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(26,167,161,0.08)' }} />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl p-10 shadow-2xl border"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.1)' }}>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="SAK Logo" className="h-24 w-auto object-contain" />
          </div>

          <h1 className="text-2xl font-bold text-white text-center mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Admin Portal
          </h1>
          <p className="text-center text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            SAK Furniture &amp; Interiors
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Username
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2" size={18}
                  style={{ color: 'rgba(255,255,255,0.3)' }} />
                <input
                  id="admin-username"
                  type="text"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  placeholder="Enter username"
                  required
                  className="w-full rounded-xl px-4 py-3.5 pl-11 outline-none text-sm text-white transition-all"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    placeholder: 'rgba(255,255,255,0.2)',
                  }}
                  onFocus={e => e.target.style.borderColor = '#1AA7A1'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2" size={18}
                  style={{ color: 'rgba(255,255,255,0.3)' }} />
                <input
                  id="admin-password"
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter password"
                  required
                  className="w-full rounded-xl px-4 py-3.5 pl-11 pr-12 outline-none text-sm text-white transition-all"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  onFocus={e => e.target.style.borderColor = '#1AA7A1'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              id="admin-login-btn"
              type="submit"
              disabled={loading}
              className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
              style={{ backgroundColor: '#0B8F8B' }}
              onMouseEnter={e => { if (!loading) e.target.style.backgroundColor = '#1AA7A1'; }}
              onMouseLeave={e => { if (!loading) e.target.style.backgroundColor = '#0B8F8B'; }}
            >
              {loading
                ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Restricted access — authorized personnel only
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
