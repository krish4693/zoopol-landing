import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logoImage from 'figma:asset/517df0d5670810621a7e0624844181007d0f402d.png';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
      <header className="flex justify-between items-center py-3 px-6 md:px-8 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-sm max-w-7xl mx-auto transition-all duration-300 hover:border-gray-300 hover:bg-white">
        <div className="flex items-center shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Zoopol" className="h-6 md:h-8" />
          </Link>
        </div>

        {isHomePage && (
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-6 lg:px-8 border-l border-r border-gray-200 mx-4 lg:mx-6">
            <a href="#home" className="text-sm text-slate-600 hover:text-brand-indigo font-medium transition-colors whitespace-nowrap">Find Work</a>
            <a href="#features" className="text-sm text-slate-600 hover:text-brand-indigo font-medium transition-colors whitespace-nowrap">Post Job</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-brand-indigo transition-colors font-medium">How it works</a>
          <Link to="/about" className="text-sm text-slate-600 hover:text-brand-indigo font-medium transition-colors whitespace-nowrap">About Us</Link>
            <a href="#faq" className="text-sm text-slate-600 hover:text-brand-indigo font-medium transition-colors whitespace-nowrap">Benefits</a>
          </nav>
        )}

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <Button variant="ghost" className="hidden sm:flex text-slate-600 hover:text-brand-indigo hover:bg-gray-100/50 text-sm font-medium rounded-full transition-colors">
            Log In
          </Button>
          <Button className="rounded-full px-5 md:px-7 py-2 bg-brand-indigo hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
            Sign Up
          </Button>
        </div>
      </header>
    </div>
  );
}
