import { Link } from "@tanstack/react-router";
import { useState } from "react";
import LanguageToggle from "./ui/LanguageToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[var(--color-neon-green)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop menu */}
          <div className="flex items-center">
            <Link
              to="/"
              className="font-calsans  text-xl font-bold text-[var(--color-charcoal)] hover:opacity-80 transition-opacity"
            >
              Web Bauhaus
            </Link>
          </div>

          {/* Desktop menu items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[var(--color-charcoal)] hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-opacity"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-[var(--color-charcoal)] hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-opacity"
            >
              Contact
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-charcoal)] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-neon-green)]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300 ease-in-out bg-[var(--color-neon-green)]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-charcoal)] hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-charcoal)] hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="px-3 py-2">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
