import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
