
import React from 'react';
import { Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50/40 to-white">
      <div className="container mx-auto px-4">
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
              className="h-auto p-6 bg-white/70 hover:bg-white backdrop-blur-sm border border-white/20 text-gray-700 hover:text-[#FFA300] rounded-2xl group"
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
              className="h-auto p-6 bg-white/70 hover:bg-white backdrop-blur-sm border border-white/20 text-gray-700 hover:text-[#FFA300] rounded-2xl group"
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
                className="bg-white/70 hover:bg-white backdrop-blur-sm border border-white/20 hover:border-blue-500 rounded-full"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="bg-white/70 hover:bg-white backdrop-blur-sm border border-white/20 hover:border-pink-500 rounded-full"
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
