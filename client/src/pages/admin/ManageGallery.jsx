import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiTrash2 } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import AdminLayout from './AdminLayout';
import { getGalleryItems, uploadGalleryItem, updateGalleryItem, deleteGalleryItem } from '../../utils/api';

const categories = ['All', 'Kitchen', 'Bedroom', 'Living Room', 'Dining Room', 'Commercial', 'Other'];

const ManageGallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const fileRef = useRef();

  const fetchItems = () => {
    getGalleryItems()
      .then((res) => setItems(res.data || []))
      .catch(() => toast.error('Failed to load gallery'))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchItems(); }, []);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) { toast.error('Please select an image'); return; }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('image', file);
      fd.append('category', 'All');
      await uploadGalleryItem(fd);
      toast.success('Image uploaded successfully!');
      setFile(null);
      setPreview(null);
      fetchItems();
    } catch {
      toast.error('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this image?')) return;
    try {
      await deleteGalleryItem(id);
      toast.success('Deleted successfully');
      setItems((prev) => prev.filter((i) => i._id !== id));
    } catch {
      toast.error('Delete failed');
    }
  };



  return (
    <AdminLayout>
      <Toaster position="top-right" />
      <div className="mb-8 text-center">
        <h1 className="font-heading text-3xl font-black text-brand-charcoal uppercase tracking-widest">Portfolio Manager</h1>
        <p className="text-brand-charcoal/60 text-sm mt-2 font-medium">Upload and manage gallery images</p>
      </div>

      {/* Upload Form */}
      <div className="bg-white border border-[#0B8F8B]/10 rounded-3xl p-8 mb-10 shadow-sm text-center">
        <h2 className="font-heading text-lg font-bold text-brand-charcoal mb-6 uppercase tracking-widest">Upload New Image</h2>
        <form onSubmit={handleUpload} className="max-w-2xl mx-auto">
          {/* File Drop */}
          <div
            onClick={() => fileRef.current.click()}
            className="border-2 border-dashed border-[#0B8F8B]/20 hover:border-brand-soft-teal bg-gray-50 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors duration-300 min-h-[250px] mb-6"
          >
            {preview ? (
              <img src={preview} alt="Preview" className="max-h-48 rounded-xl object-contain shadow-md" />
            ) : (
              <>
                <div className="w-16 h-16 bg-[#0B8F8B]/10 text-brand-deep-teal rounded-full flex items-center justify-center mb-2">
                    <FiUpload size={24} />
                </div>
                <p className="text-brand-charcoal/60 text-sm text-center font-medium">Click to select image or drag and drop<br /><span className="text-[10px] font-bold uppercase tracking-widest mt-2 block">JPG, PNG, WebP (Max 5MB)</span></p>
              </>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </div>

          <button type="submit" disabled={uploading || !file}
            className="w-full bg-brand-deep-teal hover:bg-brand-soft-teal disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-md">
            {uploading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><FiUpload size={16} /> Publish Image</>}
          </button>
        </form>
      </div>

      {/* Gallery Grid */}
      <div className="bg-white border border-[#0B8F8B]/10 rounded-3xl p-8 shadow-sm text-center">
        <h2 className="font-heading text-lg font-bold text-brand-charcoal mb-6 uppercase tracking-widest">Uploaded Images ({items.length})</h2>
        {loading ? (
          <div className="flex justify-center py-10"><div className="w-10 h-10 border-4 border-brand-soft-teal border-t-transparent rounded-full animate-spin" /></div>
        ) : items.length === 0 ? (
          <p className="text-brand-charcoal/40 text-center py-10 font-medium">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {items.map((item) => (
              <motion.div key={item._id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="group relative rounded-2xl overflow-hidden border border-[#0B8F8B]/10 hover:border-[#0B8F8B]/40 hover:shadow-xl transition-all duration-300 aspect-square">
                <img src={item.cloudinaryUrl} alt="Gallery item" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button onClick={() => handleDelete(item._id)}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-md transform hover:scale-110">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ManageGallery;

