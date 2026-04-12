import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-brand-indigo/10 selection:text-brand-indigo overflow-x-hidden">
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
