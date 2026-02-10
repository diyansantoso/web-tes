import { Smartphone, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Import logo
import logo from '../../assets/logo.png';
import React from 'react';
import { Link } from 'react-router-dom'; // Pastikan sudah install react-router-dom

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <Wrench className="w-7 h-7 text-blue-600" /> */}
            <a href="/"><img src={logo} alt="iRepair Logo" className="w-8 h-8"/></a>
            <a href="/"><span className="text-xl font-semibold text-gray-900">iRepair</span></a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition-colors">
              Why Us
            </a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">
              Process
            </a>
            <a href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Book Repair
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <a
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#process"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#contact"
              className="block mx-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Repair
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
