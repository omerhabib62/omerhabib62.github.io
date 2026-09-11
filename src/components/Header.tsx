"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, GitFork, Menu, X, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Playground", href: "#playground" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono 
        ${isScrolled || isMobileMenuOpen ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm" : "bg-transparent py-5"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Cpu className="w-5 h-5 text-pl-purple group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-sm text-pl-purple tracking-tight">
            Omer Bin <span className="text-pl-magenta">Habib</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 hover:text-pl-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-3.5 py-1.5 bg-pl-purple hover:bg-slate-800 text-white rounded transition-all text-xs font-bold shadow-sm flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Contact
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-pl-purple p-1 cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-gray-200 py-4 px-6 flex flex-col gap-4 text-sm shadow-lg">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 hover:text-pl-purple py-1 font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2.5 bg-pl-purple text-white rounded text-center text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5"
          >
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      )}
    </header>
  );
}
