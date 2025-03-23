
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { href: "#features", label: "Recursos" },
    { href: "#pricing", label: "Preços" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" }
  ];

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
            Comanda<span className="text-mesatech-orange">Top</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-700 hover:text-mesatech-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div>
          <button className="hidden md:inline-flex bg-mesatech-blue hover:bg-mesatech-blue-dark text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
            Entrar
          </button>
          
          {/* Mobile Menu */}
          {isMobile ? (
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <button className="md:hidden text-gray-700 p-1 rounded-md focus:outline-none">
                  <Menu className="w-6 h-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-mesatech-blue to-mesatech-blue-dark bg-clip-text text-transparent">
                    Comanda<span className="text-mesatech-orange">Top</span>
                  </span>
                  <DrawerClose asChild>
                    <button className="rounded-sm text-gray-500 hover:text-gray-700">
                      <X className="h-6 w-6" />
                    </button>
                  </DrawerClose>
                </div>

                <div className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 text-lg border-b border-gray-100 text-gray-700 hover:text-mesatech-blue transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <button className="w-full mt-4 bg-mesatech-blue hover:bg-mesatech-blue-dark text-white px-4 py-3 rounded-lg transition-colors shadow-sm text-center">
                    Entrar
                  </button>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <button className="md:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
