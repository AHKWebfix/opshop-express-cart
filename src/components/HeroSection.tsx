
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="pt-40 pb-32 relative overflow-hidden font-anek-bangla bg-gradient-to-br from-orange-50/80 via-amber-50/60 to-yellow-50/80">
      {/* Hero-specific background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-amber-100/40 to-yellow-100/30"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-[#FFA300]/20 via-orange-300/25 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-200/30 via-[#FFA300]/15 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/25 via-[#FFA300]/10 to-amber-200/25 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Tagline with better spacing */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-relaxed">
              সহজ Shopping
            </h1>
            <div className="my-8"></div>
            <h1 className="text-6xl md:text-8xl font-bold text-[#FFA300] leading-relaxed">
              সুখী Life
            </h1>
          </div>
          
          {/* Subtext with Emojis */}
          <div className="text-xl md:text-2xl text-gray-700 mb-16 space-y-8">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <span className="flex items-center backdrop-blur-xl bg-white/40 border border-white/40 rounded-full px-8 py-4 shadow-lg">
                💯 Original Products
              </span>
              <span className="flex items-center backdrop-blur-xl bg-white/40 border border-white/40 rounded-full px-8 py-4 shadow-lg">
                👏 Budget Friendly
              </span>
              <span className="flex items-center backdrop-blur-xl bg-white/40 border border-white/40 rounded-full px-8 py-4 shadow-lg">
                🚚 Fast Delivery
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFA300] text-white px-12 py-7 text-xl font-semibold rounded-full group transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#FFA300]/40 backdrop-blur-sm border border-white/30"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            কেনাকাটা করুন
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Enhanced Floating Abstract Elements */}
      <div className="absolute top-40 left-1/4 w-4 h-4 bg-gradient-to-r from-[#FFA300] to-amber-300 rounded-full animate-pulse shadow-lg"></div>
      <div className="absolute top-60 right-1/3 w-3 h-3 bg-gradient-to-r from-orange-300 to-[#FFA300] rounded-full animate-pulse delay-1000 shadow-lg"></div>
      <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-gradient-to-r from-[#FFA300]/70 to-amber-300/70 rounded-full animate-pulse delay-500 shadow-lg"></div>
    </section>
  );
};
