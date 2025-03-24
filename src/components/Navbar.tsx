
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
import { useI18n } from '@/context/i18nContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { href: "#features", label: t("resources") },
    { href: "#pricing", label: t("pricing") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#faq", label: t("faq") }
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-4',
        {
          'bg-white/90 backdrop-blur-md shadow-sm': scrolled,
          'bg-transparent': !scrolled
        }
      )}
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-mesatech-blue to-mesatech-blue-dark bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-mesatech-blue rounded-md"
            aria-label="ComandaTop - Página inicial"
          >
            Comanda<span className="text-mesatech-orange">Top</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {navigationLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-700 hover:text-mesatech-blue transition-colors focus:outline-none focus:ring-2 focus:ring-mesatech-blue rounded-md px-2 py-1"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            className="hidden md:inline-flex bg-mesatech-blue hover:bg-mesatech-blue-dark text-white px-4 py-2 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-mesatech-blue focus:ring-offset-2"
            aria-label={t("login")}
          >
            {t("login")}
          </button>
          
          {/* Mobile Menu */}
          {isMobile && (
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <button 
                  className="md:hidden text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-mesatech-blue"
                  aria-label="Abrir menu de navegação"
                  aria-expanded={isOpen}
                >
                  <Menu className="w-6 h-6" aria-hidden="true" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-mesatech-blue to-mesatech-blue-dark bg-clip-text text-transparent">
                    Comanda<span className="text-mesatech-orange">Top</span>
                  </span>
                  <DrawerClose asChild>
                    <button 
                      className="rounded-full p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-mesatech-blue"
                      aria-label="Fechar menu de navegação"
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </DrawerClose>
                </div>

                <div className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-lg border-b border-gray-100 text-gray-700 hover:text-mesatech-blue transition-colors focus:outline-none focus:ring-2 focus:ring-mesatech-blue rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <button 
                    className="w-full mt-4 bg-mesatech-blue hover:bg-mesatech-blue-dark text-white px-4 py-3 rounded-lg transition-colors shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-mesatech-blue focus:ring-offset-2"
                    aria-label={t("login")}
                  >
                    {t("login")}
                  </button>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
