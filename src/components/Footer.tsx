
import React from 'react';
export const Footer = () => {
  return <footer className="backdrop-blur-xl bg-gradient-to-br from-slate-100/80 via-gray-50/70 to-white/60 border-t-2 border-white/40 py-20 font-anek-bangla relative">
      {/* Footer specific background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-200/30 via-white/40 to-gray-200/20"></div>
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-slate-300/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-br from-gray-300/20 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Enhanced Logo & Description */}
          <div className="md:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
              <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="p-3 bg-[#FFA300]/10 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FFA300] to-[#FF8C00] rounded-lg"></div>
                </div>
                Opshop <span className="text-[#FFA300]">BD</span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  আপনার বিশ্বস্ত গ্যাজেট এবং ডিজিটাল এক্সেসরিজের জন্য নির্ভরযোগ্য পার্টনার।
                </p>
                
                <div className="bg-gradient-to-r from-[#FFA300]/10 to-[#FF8C00]/5 rounded-xl p-4 border border-[#FFA300]/20">
                  <p className="font-bold text-[#FFA300] text-xl">
                    সহজ Shopping। সুখী Life।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 h-fit">
            <h4 className="font-bold text-gray-900 mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">Home</a></li>
              <li><a href="#products" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">Products</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">About</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 h-fit">
            <h4 className="font-bold text-gray-900 mb-6 text-xl">তথ্য</h4>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">Privacy Policy</a></li>
              <li><a href="#delivery" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">Delivery Info</a></li>
              <li><a href="#returns" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">Returns</a></li>
              <li><a href="#terms" className="text-gray-700 hover:text-[#FFA300] transition-colors text-lg font-medium hover:translate-x-1 transform duration-200 block">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom with Credits */}
        <div className="border-t-2 border-white/40 mt-16 pt-8 space-y-4">
          <div className="text-center">
            <p className="text-gray-700 text-lg font-medium">
              © {new Date().getFullYear()} Opshop BD. All rights reserved.
            </p>
          </div>
          
          {/* Developer Credit */}
          <div className="text-center">
            <p className="text-gray-600">
              Design & Developed by{' '}
              <a href="https://wa.me/8801881591312" target="_blank" rel="noopener noreferrer" className="text-[#FFA300] hover:text-[#FF8C00] font-semibold transition-colors duration-300 hover:underline">
                Ahasanul Haque Khairul
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
