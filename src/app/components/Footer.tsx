import { Smartphone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/logo.png';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Smartphone className="w-7 h-7 text-blue-500" /> */}
              <a href="/"><img src={logo} alt="iRepair Logo" className="h-8 w-auto" /></a>
              <a href="/"><span className="text-xl font-semibold text-white">iRepair</span></a>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for professional Apple device repair services.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">
                  iPhone Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">
                  iPad Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">
                  MacBook Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">
                  Screen Replacement
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#why-us" className="hover:text-blue-500 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-500 transition-colors">
                  Repair Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Warranty Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Jl. Batu Bolong</li>
              <li>Canggu, Bali 80361</li>
              <li>
                <a href="https://wa.me/6282227565452" className="hover:text-blue-500 transition-colors">
                  0822-2756-5452
                </a>
              </li>
              {/* <li>
                <a href="mailto:info@irepair.com" className="hover:text-blue-500 transition-colors">
                  info@irepair.com
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 iRepair. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
