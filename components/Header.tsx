import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'AI Barista', href: '#ai-barista' },
  { label: 'Menu', href: '#menu' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-4 px-4 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className={`
          relative flex items-center justify-between px-6 py-3 transition-all duration-500 w-full max-w-5xl
          ${isScrolled 
            ? 'bg-dark-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/20' 
            : 'bg-transparent border-transparent'
          }
        `}>
          <a href="#" className="flex items-center space-x-2 group relative z-10">
            <div className="bg-gradient-to-br from-coffee-500 to-coffee-700 p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-coffee-500/20">
              <Coffee className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">
              Brew<span className="text-coffee-400">Byte</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 mr-4 backdrop-blur-sm">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button 
               onClick={() => document.getElementById('ai-barista')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-5 py-2.5 bg-coffee-600 hover:bg-coffee-500 text-white rounded-full text-sm font-medium transition-all overflow-hidden shadow-lg shadow-coffee-600/20"
            >
              <span className="relative z-10">Connect AI</span>
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-400 to-coffee-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-3xl transition-opacity duration-300 md:hidden flex items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-2xl font-display font-medium text-white hover:text-coffee-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('ai-barista')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="text-lg font-medium text-coffee-400 hover:text-coffee-300"
          >
            Connect AI Interface
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;