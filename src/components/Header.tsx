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
    { name: "Terminal", href: "#console" },
    { name: "Architecture", href: "#architecture" },
    { name: "API Explorer", href: "#api-explorer" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono 
        ${isScrolled ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-900/60 py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Cpu className="w-5 h-5 text-cyber-cyan group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-sm text-white tracking-tight">
            omerhabib<span className="text-cyber-cyan">.io</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-3.5 py-1.5 bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/30 hover:border-cyber-cyan/60 rounded text-cyber-cyan transition-all text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> QUERY_API()
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white p-1 cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950/95 border-b border-gray-900 py-4 px-6 flex flex-col gap-4 text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-cyber-cyan py-1 font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-2.5 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan rounded text-center text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5"
          >
            <Mail className="w-4 h-4" /> QUERY_API()
          </a>
        </div>
      )}
    </header>
  );
}
