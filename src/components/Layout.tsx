import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-500 flex flex-col justify-between">
      <ScrollToTop />
      {!isHomePage && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
