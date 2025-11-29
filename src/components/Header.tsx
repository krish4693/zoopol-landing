import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logoImage from 'figma:asset/517df0d5670810621a7e0624844181007d0f402d.png';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="flex justify-between items-center mb-8 md:mb-12">
      <div className="flex items-center">
        <Link to="/">
          <img src={logoImage} alt="Zoopol" className="h-7 md:h-8 lg:h-10" />
        </Link>
      </div>

      {isHomePage && (
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#home" className="text-white/90 hover:text-[#156BFC] transition-colors">Find Work</a>
          <a href="#features" className="text-white/90 hover:text-[#156BFC] transition-colors">Post Job</a>
          <a href="#how-it-works" className="text-white/90 hover:text-[#156BFC] transition-colors">About Us</a>
          <a href="#faq" className="text-white/90 hover:text-[#156BFC] transition-colors">Benefits</a>
        </nav>
      )}

      <div className="flex items-center gap-2 md:gap-3">
        <Button variant="ghost" className="hidden sm:flex text-white hover:text-white hover:bg-white/10 text-sm md:text-base">
          Log In
        </Button>
        <Button className="rounded-full px-4 md:px-6 py-3 md:py-5 bg-[#156BFC] hover:bg-[#1152CC] text-white hover:text-white text-sm md:text-base">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
