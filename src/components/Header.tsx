
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onBasketClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBasketClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Smartphone', href: '#smartphone' },
    { name: 'Laptop', href: '#laptop' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Computer Components', href: '#computer-components' }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8801815913212', '_blank');
  };

  return (
    <header className="fixed top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 lg:top-6 lg:left-6 lg:right-6 z-50 font-anek-bangla">
      <div className={`backdrop-blur-2xl border border-white/40 rounded-full shadow-2xl transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 shadow-white/20' 
          : 'bg-white/95 shadow-white/15 border-white/50'
      }`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Opshop <span className="text-[#FFA300]">BD</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-lg">
              Home
            </a>
            
            <div className="relative">
              <button
                className="flex items-center text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-lg"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                ক্যাটাগরি <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-3 backdrop-blur-2xl bg-[#FFA300]/95 border border-white/30 rounded-2xl shadow-xl min-w-48 py-3 z-50">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block px-5 py-3 text-white hover:text-gray-200 hover:bg-white/20 transition-colors font-medium"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#what-we-offer" className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-lg">
              সেবা
            </a>
            <a href="#contact" className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-lg">
              যোগাযোগ
            </a>
            <a href="#about" className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-lg">
              About
            </a>
          </nav>

          {/* Right Side - WhatsApp Button */}
          <div className="flex items-center">
            <Button
              onClick={handleWhatsAppClick}
              className="hidden md:flex bg-green-500 hover:bg-green-600 text-white rounded-full px-4 md:px-6 py-2 md:py-3 font-semibold transition-all duration-300 items-center gap-2"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>

            {/* Mobile WhatsApp & Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                onClick={handleWhatsAppClick}
                size="icon"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-white/30 backdrop-blur-sm rounded-full w-10 h-10"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Tablet Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hidden md:flex lg:hidden hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 ml-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden backdrop-blur-2xl bg-white/95 border-t border-white/30 rounded-b-3xl mt-2">
            <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4">
              <a 
                href="#home" 
                className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              
              <div>
                <span className="block text-gray-800 font-semibold mb-2 md:mb-3 text-lg">ক্যাটাগরি</span>
                <div className="pl-4 space-y-2 md:space-y-3">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block text-gray-700 hover:text-[#FFA300] transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <a 
                href="#what-we-offer" 
                className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                সেবা
              </a>
              <a 
                href="#contact" 
                className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                যোগাযোগ
              </a>
              <a 
                href="#about" 
                className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
