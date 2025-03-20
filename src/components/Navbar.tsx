
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4',
        {
          'bg-white/80 backdrop-blur-md shadow-sm': scrolled,
          'bg-transparent': !scrolled
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-mesatech-blue to-mesatech-blue-dark bg-clip-text text-transparent">
            Mesa<span className="text-mesatech-orange">Tech</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-mesatech-blue transition-colors">
            Recursos
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-mesatech-blue transition-colors">
            Preços
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-mesatech-blue transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-gray-700 hover:text-mesatech-blue transition-colors">
            FAQ
          </a>
        </div>
        
        <div>
          <button className="hidden md:inline-flex bg-mesatech-blue hover:bg-mesatech-blue-dark text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
            Entrar
          </button>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
