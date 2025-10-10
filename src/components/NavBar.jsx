import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/logo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cream-100 shadow-md fixed top-0 w-full z-50 border-b border-tan-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/">
            <div className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="Untilted Logo"
                className="w-12 h-10 object-contain"
              />
              <span className="text-xl font-bold text-brown-800">
                Untilted Lab Inc.
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation - Hidden on tablet and mobile */}
          <div className="hidden lg:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive 
                    ? "bg-rust-500 text-white" 
                    : "text-brown-700 hover:text-rust-500"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive 
                    ? "bg-rust-500 text-white" 
                    : "text-brown-700 hover:text-rust-500"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive 
                    ? "bg-rust-500 text-white" 
                    : "text-brown-700 hover:text-rust-500"
                }`
              }
            >
              Users
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive 
                    ? "bg-rust-500 text-white" 
                    : "text-brown-700 hover:text-rust-500"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Hamburger Menu Button - Visible on tablet and mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-brown-700 hover:text-rust-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Visible on tablet and mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2 space-y-1 bg-cream-50 rounded-lg mx-2 mb-2">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? "bg-rust-500 text-white"
                    : "text-brown-700 hover:text-rust-500 hover:bg-cream-200"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? "bg-rust-500 text-white"
                    : "text-brown-700 hover:text-rust-500 hover:bg-cream-200"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/users"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? "bg-rust-500 text-white"
                    : "text-brown-700 hover:text-rust-500 hover:bg-cream-200"
                }`
              }
            >
              Users
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? "bg-rust-500 text-white"
                    : "text-brown-700 hover:text-rust-500 hover:bg-cream-200"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
