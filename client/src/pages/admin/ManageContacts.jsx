import { useEffect, useState } from 'react';
import { FiMail, FiTrash2, FiEye, FiEyeOff } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import AdminLayout from './AdminLayout';
import { getContacts, markContactRead, deleteContact } from '../../utils/api';

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = () => {
    getContacts()
      .then((res) => setContacts(res.data || []))
      .catch(() => toast.error('Failed to load messages'))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchContacts(); }, []);

  const handleMarkRead = async (id, isRead) => {
    try {
      await markContactRead(id);
      setContacts((prev) => prev.map((c) => c._id === id ? { ...c, is_read: !isRead } : c));
    } catch {
      toast.error('Failed to update');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    try {
      await deleteContact(id);
      toast.success('Deleted');
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch {
      toast.error('Delete failed');
    }
  };

  const unread = contacts.filter((c) => !c.is_read).length;

  return (
    <AdminLayout>
      <Toaster position="top-right" />
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-white">Messages</h1>
          <p className="text-white/40 text-sm mt-1">
            {unread > 0 ? `${unread} unread message${unread > 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>
        {unread > 0 && (
          <span className="bg-red-500/20 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-sm font-medium">
            {unread} New
          </span>
        )}
      </div>

      <div className="bg-brand-dark-navy border border-white/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex justify-center py-16"><div className="w-10 h-10 border-4 border-brand-soft-teal border-t-transparent rounded-full animate-spin" /></div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-16">
            <FiMail size={40} className="text-white/20 mx-auto mb-3" />
            <p className="text-white/30">No messages yet</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {contacts.map((msg) => (
              <div key={msg._id} className={`p-5 flex items-start gap-4 hover:bg-white/5 transition-colors ${!msg.is_read ? 'border-l-2 border-brand-soft-teal' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${msg.is_read ? 'bg-white/5 text-white/30' : 'bg-brand-deep-teal/30 text-brand-soft-teal'}`}>
                  {msg.name?.[0]?.toUpperCase() || 'U'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-white font-semibold text-sm">{msg.name}</p>
                    {!msg.is_read && <span className="text-xs bg-brand-soft-teal/20 text-brand-soft-teal px-2 py-0.5 rounded-full">New</span>}
                  </div>
                  <p className="text-brand-soft-teal text-xs mb-2">{msg.phone}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{msg.message}</p>
                  <p className="text-white/20 text-xs mt-2">{new Date(msg.created_at).toLocaleString('en-IN')}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => handleMarkRead(msg._id, msg.is_read)}
                    title={msg.is_read ? 'Mark unread' : 'Mark read'}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-deep-teal/30 text-white/40 hover:text-brand-soft-teal flex items-center justify-center transition-all">
                    {msg.is_read ? <FiEyeOff size={14} /> : <FiEye size={14} />}
                  </button>
                  <button onClick={() => handleDelete(msg._id)}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-400 flex items-center justify-center transition-all">
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ManageContacts;
