import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logoImage from 'figma:asset/517df0d5670810621a7e0624844181007d0f402d.png';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
      <header className="flex justify-between items-center py-3 px-6 md:px-8 bg-[#0A0F1C]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-7xl mx-auto transition-all duration-300 hover:border-white/20 hover:bg-[#0A0F1C]/80">
        <div className="flex items-center shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Zoopol" className="h-6 md:h-8" />
          </Link>
        </div>

        {isHomePage && (
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-6 lg:px-8 border-l border-r border-white/10 mx-4 lg:mx-6">
            <a href="#home" className="text-sm text-white/70 hover:text-white font-medium transition-colors whitespace-nowrap">Find Work</a>
            <a href="#features" className="text-sm text-white/70 hover:text-white font-medium transition-colors whitespace-nowrap">Post Job</a>
            <a href="#how-it-works" className="text-white/90 hover:text-[#156BFC] transition-colors">How it works</a>
          <Link to="/about" className="text-sm text-white/70 hover:text-white font-medium transition-colors whitespace-nowrap">About Us</Link>
            <a href="#faq" className="text-sm text-white/70 hover:text-white font-medium transition-colors whitespace-nowrap">Benefits</a>
          </nav>
        )}

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <Button variant="ghost" className="hidden sm:flex text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium rounded-full transition-colors">
            Log In
          </Button>
          <Button className="rounded-full px-5 md:px-7 py-2 bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:-translate-y-0.5">
            Sign Up
          </Button>
        </div>
      </header>
    </div>
  );
}
