import logoImage from "figma:asset/517df0d5670810621a7e0624844181007d0f402d.png";

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <div>
            <img
              src={logoImage}
              alt="Zoopol"
              className="h-6 md:h-7"
            />
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-gray-400 text-sm md:text-base text-center">
            <span>© 2025 Zoopol. All rights reserved.</span>
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}