
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#FFA300]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Easy Shop.
            <br />
            <span className="text-[#FFA300]">Happy Life.</span>
          </h1>
          
          {/* Subtext with Emojis */}
          <div className="text-xl md:text-2xl text-gray-600 mb-12 space-y-2">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <span className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                💯 Original Products
              </span>
              <span className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                👏 Budget Friendly
              </span>
              <span className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                🚚 Fast Delivery
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-[#FFA300] hover:bg-[#FF8C00] text-white px-8 py-4 text-lg rounded-full group transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Floating Abstract Elements */}
      <div className="absolute top-40 left-1/4 w-2 h-2 bg-[#FFA300] rounded-full animate-pulse"></div>
      <div className="absolute top-60 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-orange-300/50 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};
