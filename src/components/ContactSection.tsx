
import React from 'react';
import { Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-rose-100/80 via-pink-50/70 to-red-50/60 relative">
      {/* Contact section specific background with stronger colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-200/25 via-pink-100/35 to-red-100/30"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-rose-300/25 via-pink-300/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-pink-300/20 via-rose-300/15 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#FFA300]">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">We're here to help you with any questions</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <Button 
              className="h-auto p-6 bg-white/90 hover:bg-white/95 backdrop-blur-xl border border-white/50 text-gray-700 hover:text-[#FFA300] rounded-2xl group shadow-lg"
              variant="outline"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-sm opacity-70">Quick support via chat</p>
                </div>
              </div>
            </Button>

            {/* Phone */}
            <Button 
              className="h-auto p-6 bg-white/90 hover:bg-white/95 backdrop-blur-xl border border-white/50 text-gray-700 hover:text-[#FFA300] rounded-2xl group shadow-lg"
              variant="outline"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#FFA300] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-sm opacity-70">+1 (555) 123-4567</p>
                </div>
              </div>
            </Button>
          </div>

          {/* Social Media */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Follow Us</h3>
            
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                className="bg-white/90 hover:bg-white/95 backdrop-blur-xl border border-white/50 hover:border-blue-500 rounded-full shadow-lg"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="bg-white/90 hover:bg-white/95 backdrop-blur-xl border border-white/50 hover:border-pink-500 rounded-full shadow-lg"
              >
                <Instagram className="h-5 w-5 text-pink-600" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
