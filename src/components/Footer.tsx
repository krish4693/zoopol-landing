import { Link } from 'react-router-dom';
import logoImage from "figma:asset/517df0d5670810621a7e0624844181007d0f402d.png";

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={logoImage}
                alt="Zoopol"
                className="h-6 md:h-7"
              />
            </Link>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-slate-500 text-sm md:text-base text-center">
            <div className="flex flex-col text-center md:text-left gap-1">
              <span>Zoopol is owned and operated by Ocean Point Private Limited.</span>
              <span>© 2026 Ocean Point Private Limited. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center font-medium">
              <Link
                to="/about"
                className="hover:text-brand-indigo transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/privacy-policy"
                className="hover:text-brand-indigo transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-brand-indigo transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/refund-policy"
                className="hover:text-brand-indigo transition-colors"
              >
                Refund & Cancellation
              </Link>
              <Link
                to="/contact"
                className="hover:text-brand-indigo transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}