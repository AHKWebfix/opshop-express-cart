
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden font-anek-bangla">
      {/* Enhanced Glass Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#FFA300]/15 via-white/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-white/20 via-[#FFA300]/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/5 via-[#FFA300]/5 to-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Tagline - Bangla + English */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            সহজ কেনাকাটা।
            <br />
            <span className="text-[#FFA300]">সুখী জীবন।</span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-700">Easy Shop. Happy Life.</span>
          </h1>
          
          {/* Subtext with Emojis - Bangla + English */}
          <div className="text-xl md:text-2xl text-gray-600 mb-12 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <span className="flex items-center backdrop-blur-xl bg-white/30 border border-white/20 rounded-full px-6 py-3 shadow-lg">
                💯 মূল পণ্য | Original Products
              </span>
              <span className="flex items-center backdrop-blur-xl bg-white/30 border border-white/20 rounded-full px-6 py-3 shadow-lg">
                👏 সাশ্রয়ী দাম | Budget Friendly
              </span>
              <span className="flex items-center backdrop-blur-xl bg-white/30 border border-white/20 rounded-full px-6 py-3 shadow-lg">
                🚚 দ্রুত ডেলিভারি | Fast Delivery
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFA300] text-white px-10 py-6 text-lg font-semibold rounded-full group transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#FFA300]/30 backdrop-blur-sm border border-white/20"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            কেনাকাটা শুরু করুন | Start Shopping
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Enhanced Floating Abstract Elements */}
      <div className="absolute top-40 left-1/4 w-3 h-3 bg-gradient-to-r from-[#FFA300] to-white/50 rounded-full animate-pulse shadow-lg"></div>
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-gradient-to-r from-white/60 to-[#FFA300]/60 rounded-full animate-pulse delay-1000 shadow-lg"></div>
      <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-gradient-to-r from-[#FFA300]/40 to-white/40 rounded-full animate-pulse delay-500 shadow-lg"></div>
    </section>
  );
};
