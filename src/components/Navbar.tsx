import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Phone, Plus, ShoppingBag, Eye } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection for sticky background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode initialization & toggle
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 h-16 flex items-center' 
          : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center'
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2.5 group" id="brand-logo">
            <div className="w-10 h-10 rounded-lg bg-[#0A8F6A] flex items-center justify-center text-white font-bold text-xl shadow-sm transition-transform duration-300">
              LM
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                Lal Medical
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold mt-0.5">
                Trusted Healthcare Partner
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8" id="desktop-nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive
                      ? 'text-[#0A8F6A] dark:text-emerald-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A8F6A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Utilities (Dark Mode, Order, Menu) */}
          <div className="flex items-center gap-3">
            
            {/* Quick Consultation Badge on Desktop */}
            <a 
              href="tel:09798875991" 
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-150/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#0A8F6A]" />
              <span>09798875991</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle theme mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA Order Button */}
            <button
              onClick={onOrderClick}
              className="hidden md:inline-flex items-center bg-[#0A8F6A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Order via WhatsApp
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-slate-100 dark:border-slate-800 ${
          isOpen 
            ? 'max-h-screen opacity-100 bg-white dark:bg-slate-900 border-t mt-3 py-4' 
            : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
        }`}
        id="mobile-nav-panel"
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm font-semibold p-3 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-[#0A8F6A]/10 text-[#0A8F6A]'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="grid grid-cols-1 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a 
              href="tel:09798875991" 
              className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#0A8F6A]" />
              <span>Call 09798875991</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOrderClick();
              }}
              className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl bg-[#0A8F6A] text-white text-sm font-bold"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
