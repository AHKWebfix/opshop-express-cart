
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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Op<span className="text-[#FFA300]">shop</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-[#FFA300] transition-colors">
            Home
          </a>
          
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-[#FFA300] transition-colors"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              Categories <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 min-w-48 py-2">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`#${category.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:text-[#FFA300] hover:bg-orange-50/50 transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a href="#what-we-offer" className="text-gray-700 hover:text-[#FFA300] transition-colors">
            What We Offer
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#FFA300] transition-colors">
            Contact
          </a>
          <a href="#about" className="text-gray-700 hover:text-[#FFA300] transition-colors">
            About
          </a>
        </nav>

        {/* Desktop Basket */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onBasketClick}
          className="hidden md:flex hover:bg-orange-50"
        >
          <ShoppingBasket className="h-5 w-5 text-[#FFA300]" />
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-[#FFA300] transition-colors">
              Home
            </a>
            <div>
              <span className="block text-gray-700 font-medium mb-2">Categories</span>
              <div className="pl-4 space-y-2">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`#${category.toLowerCase()}`}
                    className="block text-gray-600 hover:text-[#FFA300] transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
            <a href="#what-we-offer" className="block text-gray-700 hover:text-[#FFA300] transition-colors">
              What We Offer
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-[#FFA300] transition-colors">
              Contact
            </a>
            <a href="#about" className="block text-gray-700 hover:text-[#FFA300] transition-colors">
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
