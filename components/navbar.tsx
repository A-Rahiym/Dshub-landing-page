"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  "Home",
  "About",
  "Internship",
  "Process",
  "Testimonials",
  "FAQ",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-light-blue transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-16">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Image
              src="/dshub_logo.svg"
              alt="DSHub Logo"
              width={18}
              height={18}
              className="sm:w-6 sm:h-6"
            />
            <span className="text-base sm:text-lg md:text-xl font-black text-white">
              DSHub Intership
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group text-xs sm:text-sm lg:text-base font-medium text-white transition-colors"
              >
                {link}

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="sm:w-6 sm:h-6 text-white" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 sm:pb-4 border-t border-blue-300">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:text-blue-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
