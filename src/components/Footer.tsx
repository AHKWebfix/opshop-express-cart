
import React from 'react';

export const Footer = () => {
  return (
    <footer className="backdrop-blur-xl bg-white/20 border-t border-white/30 py-12 font-anek-bangla">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-[#FFA300] to-gray-900 bg-clip-text text-transparent mb-4">
              Opshop <span className="text-[#FFA300]">BD</span>
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              আপনার বিশ্বস্ত গ্যাজেট এবং ডিজিটাল এক্সেসরিজের জন্য নির্ভরযোগ্য পার্টনার।
              <br />
              Your trusted partner for original gadgets and digital accessories.
              <br />
              <span className="font-semibold text-[#FFA300]">সহজ কেনাকাটা। সুখী জীবন। | Easy Shop. Happy Life.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">দ্রুত লিংক | Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-[#FFA300] transition-colors">হোম | Home</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-[#FFA300] transition-colors">পণ্য | Products</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-[#FFA300] transition-colors">সম্পর্কে | About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#FFA300] transition-colors">যোগাযোগ | Contact</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">তথ্য | Information</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-600 hover:text-[#FFA300] transition-colors">গোপনীয়তা নীতি | Privacy Policy</a></li>
              <li><a href="#delivery" className="text-gray-600 hover:text-[#FFA300] transition-colors">ডেলিভারি তথ্য | Delivery Info</a></li>
              <li><a href="#returns" className="text-gray-600 hover:text-[#FFA300] transition-colors">ফেরত | Returns</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-[#FFA300] transition-colors">সেবার শর্তাবলী | Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Opshop BD. সকল অধিকার সংরক্ষিত | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
