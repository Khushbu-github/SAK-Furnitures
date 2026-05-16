import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sak_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auth
export const loginAdmin = (data) => api.post('/auth/login', data);
export const getMe = () => api.get('/auth/me');

// Gallery
export const getGalleryItems = () => api.get('/gallery');
export const uploadGalleryItem = (formData) =>
  api.post('/gallery', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const updateGalleryItem = (id, data) => api.put(`/gallery/${id}`, data);
export const deleteGalleryItem = (id) => api.delete(`/gallery/${id}`);

// Contact
export const submitContact = (data) => api.post('/contact', data);
export const getContacts = () => api.get('/contact');
export const markContactRead = (id) => api.put(`/contact/${id}/read`);
export const deleteContact = (id) => api.delete(`/contact/${id}`);

// Dashboard
export const getDashboardStats = () => api.get('/dashboard/stats');

export default api;
