
import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-green-50/25 via-white/60 to-emerald-50/30 relative overflow-hidden">
      {/* About section specific background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-white/40 to-green-100/15"></div>
      <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-to-br from-green-200/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-16 w-60 h-60 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            <span className="text-[#FFA300]">Opshop</span> সম্পর্কে
          </h2>
          
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/60 p-6 md:p-8 lg:p-12 shadow-lg">
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
              Opshop-এ আমরা বিশ্বাস করি যে প্রযুক্তি সবার কাছে পৌঁছানো উচিত। আমাদের লক্ষ্য হলো 
              উচ্চ মানের, অরিজিনাল গ্যাজেট এবং ডিজিটাল অ্যাক্সেসরিজ বাজেট-বান্ধব দামে সরবরাহ করা, 
              যাতে সর্বশেষ প্রযুক্তি সবার নাগালে থাকে।
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
              স্মার্টফোন এবং ল্যাপটপ থেকে শুরু করে অ্যাক্সেসরিজ এবং কম্পিউটার কম্পোনেন্ট পর্যন্ত, 
              আমরা শুধুমাত্র বিশ্বস্ত ব্র্যান্ডের সেরা প্রোডাক্টগুলি নির্বাচন করি। আমাদের সংগ্রহের 
              প্রতিটি আইটেম কঠোর মান নিয়ন্ত্রণের মধ্য দিয়ে যায় যাতে আপনি শুধুমাত্র প্রকৃত, 
              প্রিমিয়াম পণ্য পান।
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">
              দ্রুত ডেলিভারি এবং ব্যতিক্রমী গ্রাহক সেবার সাথে, আমরা আপনার কেনাকাটার অভিজ্ঞতা 
              যতটা সম্ভব মসৃণ এবং আনন্দদায়ক করতে প্রতিশ্রুতিবদ্ধ। কারণ Opshop-এ, আমরা শুধু 
              গ্যাজেট বিক্রি করি না – আমরা আপনাকে একটি সুখী, আরও সংযুক্ত জীবনযাপন করতে সাহায্য করি।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
