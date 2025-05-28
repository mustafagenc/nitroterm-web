"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "./logo";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 backdrop-blur-xs">
      <nav className="container mx-auto py-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="group relative text-slate-100 hover:text-white transition-colors hover:bg-white/10 px-3 py-2 rounded-t-md font-semibold text-shadow-xs"
            >
              ✨ Features
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
            <a
              href="#installation"
              className="group relative text-slate-100 hover:text-white transition-colors hover:bg-white/10 px-3 py-2 rounded-t-md font-semibold text-shadow-xs"
            >
              🛠️ Installation
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
            <a
              href="#usage"
              className="group relative text-slate-100 hover:text-white transition-colors hover:bg-white/10 px-3 py-2 rounded-t-md font-semibold text-shadow-xs"
            >
              🚀 Usage
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-1 pt-4">
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative text-slate-100 hover:text-white transition-colors hover:bg-white/10 px-4 py-3 rounded-md font-semibold"
              >
                ✨ Features
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
              <a
                href="#installation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative text-slate-100 hover:text-white transition-colors hover:bg-white/10 px-4 py-3 rounded-md font-semibold"
              >
                🛠️ Installation
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
              <a
                href="#usage"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative text-slate-100 hover:text-white transition-colors hover:bg-white/10 px-4 py-3 rounded-md font-semibold"
              >
                🚀 Usage
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
