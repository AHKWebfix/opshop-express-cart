
import React from 'react';
import { CheckCircle, DollarSign, Truck } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: '100% Original Product',
      description: 'Guaranteed authentic products from official brands',
    },
    {
      icon: DollarSign,
      title: 'Budget Friendly',
      description: 'Competitive prices with the best value for money',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep',
    },
  ];

  return (
    <section id="what-we-offer" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-white/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#FFA300]">Opshop</span>?
          </h2>
          <p className="text-gray-600 text-lg">Experience the difference with our premium service</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFA300]/10 rounded-full mb-6 group-hover:bg-[#FFA300]/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-[#FFA300]" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
