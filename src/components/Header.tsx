
import React, { useState } from 'react';
import { Menu, X, ShoppingBasket, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onBasketClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBasketClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = ['Smartphone', 'Laptop', 'Accessories', 'Computer Components'];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 font-anek-bangla">
      <div className="backdrop-blur-xl bg-gradient-to-r from-white/20 via-white/30 to-white/20 border border-white/30 rounded-3xl shadow-2xl shadow-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-[#FFA300] to-gray-900 bg-clip-text text-transparent">
              Opshop <span className="text-[#FFA300]">BD</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
              হোম | Home
            </a>
            
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-[#FFA300] transition-colors font-medium"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                ক্যাটাগরি | Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 backdrop-blur-xl bg-white/25 border border-white/30 rounded-2xl shadow-xl min-w-48 py-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase()}`}
                      className="block px-4 py-2 text-gray-700 hover:text-[#FFA300] hover:bg-white/20 transition-colors font-medium"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#what-we-offer" className="text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
              সেবা | What We Offer
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
              যোগাযোগ | Contact
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
              সম্পর্কে | About
            </a>
          </nav>

          {/* Desktop Basket */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onBasketClick}
            className="hidden md:flex hover:bg-white/20 backdrop-blur-sm rounded-full"
          >
            <ShoppingBasket className="h-5 w-5 text-[#FFA300]" />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:bg-white/20 backdrop-blur-sm rounded-full"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-white/20 border-t border-white/30 rounded-b-3xl">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
                হোম | Home
              </a>
              <div>
                <span className="block text-gray-700 font-semibold mb-2">ক্যাটাগরি | Categories</span>
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase()}`}
                      className="block text-gray-600 hover:text-[#FFA300] transition-colors font-medium"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#what-we-offer" className="block text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
                সেবা | What We Offer
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
                যোগাযোগ | Contact
              </a>
              <a href="#about" className="block text-gray-700 hover:text-[#FFA300] transition-colors font-medium">
                সম্পর্কে | About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
