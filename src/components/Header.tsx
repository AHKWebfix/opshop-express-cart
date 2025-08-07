import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBasket, ChevronDown } from 'lucide-react';
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

  const categories = ['Smartphone', 'Laptop', 'Accessories', 'Computer Components'];

  return (
    <header className="fixed top-6 left-6 right-6 z-50 font-anek-bangla">
      <div className={`backdrop-blur-2xl border border-white/30 rounded-full shadow-2xl transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 shadow-white/20' 
          : 'bg-gradient-to-r from-white/20 via-white/30 to-white/20 shadow-white/10'
      }`}>
        <div className="container mx-auto px-8 py-5 flex items-center justify-between">
          {/* Simple Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Opshop <span className="text-[#FFA300]">BD</span>
            </h1>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
              Home
            </a>
            
            <div className="relative">
              <button
                className="flex items-center text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                ক্যাটাগরি <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-3 backdrop-blur-2xl bg-white/90 border border-white/30 rounded-2xl shadow-xl min-w-48 py-3">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase()}`}
                      className="block px-5 py-3 text-gray-800 hover:text-[#FFA300] hover:bg-white/20 transition-colors font-medium"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#what-we-offer" className="text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
              সেবা
            </a>
            <a href="#contact" className="text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
              যোগাযোগ
            </a>
            <a href="#about" className="text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
              About
            </a>
          </nav>

          {/* Right Side - Bigger Basket Button */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBasketClick}
              className="hidden lg:flex hover:bg-white/40 backdrop-blur-sm rounded-full w-16 h-16"
            >
              <ShoppingBasket className="h-8 w-8 text-[#FFA300]" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden backdrop-blur-2xl bg-white/90 border-t border-white/30 rounded-b-3xl mt-2">
            <div className="container mx-auto px-8 py-6 space-y-4">
              <a href="#home" className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
                Home
              </a>
              <div>
                <span className="block text-gray-800 font-semibold mb-3 text-lg">ক্যাটাগরি</span>
                <div className="pl-4 space-y-3">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase()}`}
                      className="block text-gray-700 hover:text-[#FFA300] transition-colors font-medium"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#what-we-offer" className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
                সেবা
              </a>
              <a href="#contact" className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
                যোগাযোগ
              </a>
              <a href="#about" className="block text-gray-800 hover:text-[#FFA300] transition-colors font-medium text-lg">
                About
              </a>
              
              {/* Mobile Basket */}
              <div className="pt-4 border-t border-white/20">
                <Button
                  variant="ghost"
                  onClick={onBasketClick}
                  className="w-full justify-center hover:bg-white/30 backdrop-blur-sm rounded-full py-3"
                >
                  <ShoppingBasket className="h-5 w-5 text-[#FFA300] mr-2" />
                  <span className="text-gray-800 font-medium">Basket</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
