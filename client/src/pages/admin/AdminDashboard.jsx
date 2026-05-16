import { useEffect, useState } from 'react';
import { FiImage, FiMail, FiTrendingUp, FiEye } from 'react-icons/fi';
import AdminLayout from './AdminLayout';
import { getDashboardStats } from '../../utils/api';

const StatCard = ({ icon, label, value, color }) => (
  <div className={`bg-brand-dark-navy border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:border-white/20 transition-all duration-300 group`}>
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color} transition-transform duration-300 group-hover:scale-110`}>
      {icon}
    </div>
    <div>
      <p className="text-white/40 text-sm font-medium">{label}</p>
      <p className="text-white text-3xl font-bold font-heading mt-1">{value ?? '—'}</p>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getDashboardStats()
      .then((res) => setStats(res.data))
      .catch(() => setStats({ gallery_count: 0, contact_count: 0, unread_count: 0 }));
  }, []);

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-white/40 text-sm mt-1">Welcome back, SAK Admin</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <StatCard
          icon={<FiImage size={24} className="text-brand-soft-teal" />}
          label="Gallery Items"
          value={stats?.gallery_count}
          color="bg-brand-deep-teal/20"
        />
        <StatCard
          icon={<FiMail size={24} className="text-brand-warm-yellow" />}
          label="Total Messages"
          value={stats?.contact_count}
          color="bg-brand-warm-yellow/20"
        />
        <StatCard
          icon={<FiEye size={24} className="text-red-400" />}
          label="Unread Messages"
          value={stats?.unread_count}
          color="bg-red-500/20"
        />
      </div>

      {/* Quick actions */}
      <div className="bg-brand-dark-navy border border-white/10 rounded-2xl p-6">
        <h2 className="font-heading text-lg font-bold text-white mb-5">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/admin/gallery"
            className="flex items-center gap-3 p-4 bg-brand-deep-teal/10 hover:bg-brand-deep-teal/20 border border-brand-deep-teal/20 rounded-xl text-brand-soft-teal font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5">
            <FiImage size={18} /> Manage Gallery
          </a>
          <a href="/admin/contacts"
            className="flex items-center gap-3 p-4 bg-brand-warm-yellow/10 hover:bg-brand-warm-yellow/20 border border-brand-warm-yellow/20 rounded-xl text-brand-warm-yellow font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5">
            <FiMail size={18} /> View Messages
          </a>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
