import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logoImage from 'figma:asset/517df0d5670810621a7e0624844181007d0f402d.png';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="flex justify-between items-center mb-8 md:mb-12 sticky top-0 z-50 py-4 px-4 lg:px-8 bg-black/40 backdrop-blur-md border-b border-white/5 rounded-b-2xl">
      <div className="flex items-center">
        <Link to="/">
          <img src={logoImage} alt="Zoopol" className="h-7 md:h-8 lg:h-10" />
        </Link>
      </div>

      {isHomePage && (
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#home" className="text-white/80 hover:text-[#00E5FF] font-medium transition-colors">Find Work</a>
          <a href="#features" className="text-white/80 hover:text-[#00E5FF] font-medium transition-colors">Post Job</a>
          <a href="#how-it-works" className="text-white/80 hover:text-[#00E5FF] font-medium transition-colors">About Us</a>
          <a href="#faq" className="text-white/80 hover:text-[#00E5FF] font-medium transition-colors">Benefits</a>
        </nav>
      )}

      <div className="flex items-center gap-3 md:gap-4">
        <Button variant="ghost" className="hidden sm:flex text-white hover:text-[#00E5FF] hover:bg-white/5 text-sm md:text-base font-medium rounded-full">
          Log In
        </Button>
        <Button className="rounded-full px-5 md:px-7 py-3 md:py-5 bg-[#00E5FF] hover:bg-[#00B4CC] text-black font-bold text-sm md:text-base shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all hover:scale-105">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
