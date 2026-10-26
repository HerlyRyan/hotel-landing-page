import React, { useState, useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Dining", href: "#dining" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Deteksi event scroll untuk mengubah tampilan navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className={`text-xl md:text-2xl font-serif tracking-widest uppercase font-semibold transition-colors duration-300 ${
            isScrolled ? "text-slate-900" : "text-white"
          }`}
        >
          Webyansh
        </a>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-slate-700 hover:text-slate-950"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTON (Book Now) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#book"
            className={`text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200 font-medium rounded-none ${
              isScrolled
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "bg-white text-slate-900 hover:bg-gray-100"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON (HAMBURGER) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden focus:outline-none p-2 transition-colors duration-300 ${
            isScrolled ? "text-slate-900" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            /* Icon Close / X */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Icon Hamburger */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 px-6 py-6 transition-all shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-slate-800 hover:text-black font-medium py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="#book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-xs uppercase tracking-widest px-5 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors font-medium"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
