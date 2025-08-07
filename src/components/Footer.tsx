
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Op<span className="text-[#FFA300]">shop</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Your trusted partner for original gadgets and digital accessories. 
              Easy Shop. Happy Life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-[#FFA300] transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-[#FFA300] transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-[#FFA300] transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#FFA300] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-600 hover:text-[#FFA300] transition-colors">Privacy Policy</a></li>
              <li><a href="#delivery" className="text-gray-600 hover:text-[#FFA300] transition-colors">Delivery Info</a></li>
              <li><a href="#returns" className="text-gray-600 hover:text-[#FFA300] transition-colors">Returns</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-[#FFA300] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Opshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
