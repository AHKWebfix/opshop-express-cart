
import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50/25 via-white/60 to-emerald-50/30 relative">
      {/* About section specific background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-white/40 to-green-100/15"></div>
      <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-to-br from-green-200/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-16 w-60 h-60 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            About <span className="text-[#FFA300]">Opshop</span>
          </h2>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Opshop, we believe that technology should be accessible to everyone. Our mission is to provide 
              high-quality, original gadgets and digital accessories at budget-friendly prices, making the latest 
              technology available to all.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From smartphones and laptops to accessories and computer components, we curate only the finest 
              products from trusted brands. Every item in our collection undergoes strict quality checks to 
              ensure you receive nothing but authentic, premium products.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With fast delivery and exceptional customer service, we're committed to making your shopping 
              experience as smooth and enjoyable as possible. Because at Opshop, we don't just sell gadgets – 
              we help you live a happier, more connected life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
