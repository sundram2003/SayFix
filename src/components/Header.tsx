"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container-custom">
        <nav className="flex items-center justify-center py-4 relative">
          {/* Desktop Nav Links - Left */}
          <div className="hidden md:flex items-center gap-8 absolute left-0">
            <a href="#why-choose" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Why Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Services
            </a>
          </div>

          {/* Logo - Center */}
          <a href="/" className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-gray-900">Say</span>
              <span className="text-primary">fix</span>
            </span>
          </a>

          {/* Desktop Nav Links - Right */}
          <div className="hidden md:flex items-center gap-8 absolute right-0">
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              How it works
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-0 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#why-choose" className="text-gray-700 hover:text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Why Us
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                How it works
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
