
import React from 'react';

export const Footer = () => {
  return (
    <footer className="backdrop-blur-xl bg-gradient-to-br from-gray-100/60 via-white/40 to-slate-100/50 border-t border-white/30 py-16 font-anek-bangla relative">
      {/* Footer specific background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 via-white/30 to-slate-200/15"></div>
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-300/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-br from-slate-300/15 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Opshop <span className="text-[#FFA300]">BD</span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              আপনার বিশ্বস্ত গ্যাজেট এবং ডিজিটাল এক্সেসরিজের জন্য নির্ভরযোগ্য পার্টনার।
              <br /><br />
              Your trusted partner for original gadgets and digital accessories.
            </p>
            <p className="font-semibold text-[#FFA300] text-xl">
              সহজ Shopping। সুখী Life।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">Home</a></li>
              <li><a href="#products" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">Products</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">About</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-xl">তথ্য</h4>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">Privacy Policy</a></li>
              <li><a href="#delivery" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">Delivery Info</a></li>
              <li><a href="#returns" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">Returns</a></li>
              <li><a href="#terms" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/40 mt-16 pt-10 text-center">
          <p className="text-gray-700 text-lg">
            © {new Date().getFullYear()} Opshop BD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
