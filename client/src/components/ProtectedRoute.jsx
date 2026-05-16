import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark-navy">
        <div className="w-12 h-12 border-4 border-brand-soft-teal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return admin ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
