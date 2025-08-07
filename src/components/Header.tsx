
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
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
    { name: 'Smartphone', href: '#products', filter: 'smartphone' },
    { name: 'Laptop', href: '#products', filter: 'laptop' },
    { name: 'Accessories', href: '#products', filter: 'accessories' },
    { name: 'Computer Components', href: '#products', filter: 'components' }
  ];

  const handleCategoryClick = (href: string, filter?: string) => {
    setIsCategoriesOpen(false);
    setIsMobileMenuOpen(false);
    
    // Scroll to products section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8801881591312', '_blank');
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-2 left-2 right-2 md:top-3 md:left-3 md:right-3 lg:top-4 lg:left-4 lg:right-4 z-50 font-anek-bangla">
      <div className={`backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl transition-all duration-500 ${
        scrolled 
          ? 'bg-white/85 shadow-lg border-gray-200/50 backdrop-blur-3xl' 
          : 'bg-white shadow-white/20 border-white/60'
      }`}>
        <div className="container mx-auto px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-2.5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
              Opshop <span className="text-[#FFA300]">BD</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-base cursor-pointer"
            >
              Home
            </button>
            
            <div className="relative">
              <button
                className="flex items-center text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-base"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                ক্যাটাগরি <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 backdrop-blur-2xl bg-[#FFA300]/95 border border-[#FFA300]/30 rounded-xl shadow-xl min-w-48 py-2 z-50">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryClick(category.href, category.filter)}
                      className="block w-full text-left px-4 py-2.5 text-white hover:text-gray-100 hover:bg-white/20 transition-colors font-medium cursor-pointer"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => handleNavClick('#what-we-offer')}
              className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-base cursor-pointer"
            >
              সেবা
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-base cursor-pointer"
            >
              যোগাযোগ
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="text-gray-900 hover:text-[#FFA300] transition-colors font-semibold text-base cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Right Side - WhatsApp Button */}
          <div className="flex items-center">
            <Button
              onClick={handleWhatsAppClick}
              className="hidden md:flex bg-green-500 hover:bg-green-600 text-white rounded-full px-4 md:px-5 py-2 md:py-2.5 font-semibold transition-all duration-300 items-center gap-2 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>

            {/* Mobile WhatsApp & Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                onClick={handleWhatsAppClick}
                size="icon"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-9 h-9"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-gray-100 rounded-full w-9 h-9"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>

            {/* Tablet Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hidden md:flex lg:hidden hover:bg-gray-100 rounded-full w-10 h-10 ml-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden backdrop-blur-2xl bg-white/95 border-t border-gray-200/30 rounded-b-2xl mt-1">
            <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 space-y-2 md:space-y-3">
              <button 
                onClick={() => handleNavClick('#home')}
                className="block w-full text-left text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-base cursor-pointer"
              >
                Home
              </button>
              
              <div>
                <span className="block text-gray-800 font-semibold mb-2 text-base">ক্যাটাগরি</span>
                <div className="pl-3 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryClick(category.href, category.filter)}
                      className="block w-full text-left text-gray-700 hover:text-[#FFA300] transition-colors font-medium cursor-pointer"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => handleNavClick('#what-we-offer')}
                className="block w-full text-left text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-base cursor-pointer"
              >
                সেবা
              </button>
              <button 
                onClick={() => handleNavClick('#contact')}
                className="block w-full text-left text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-base cursor-pointer"
              >
                যোগাযোগ
              </button>
              <button 
                onClick={() => handleNavClick('#about')}
                className="block w-full text-left text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-base cursor-pointer"
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
