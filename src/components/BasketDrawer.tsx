
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types/Product';
import { toast } from '@/hooks/use-toast';

interface BasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: (Product & { quantity: number })[];
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const BasketDrawer: React.FC<BasketDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
}) => {
  const [deliveryArea, setDeliveryArea] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });

  // Convert USD to BDT (approximate rate: 1 USD = 110 BDT)
  const convertToBDT = (usdPrice: number) => Math.round(usdPrice * 110);

  const total = items.reduce((sum, item) => sum + convertToBDT(item.price) * item.quantity, 0);
  const deliveryFee = deliveryArea === 'inside-dhaka' ? 60 : 120;
  const finalTotal = total + deliveryFee;

  const handleConfirmOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address || !deliveryArea) {
      toast({
        title: "তথ্য অনুপস্থিত",
        description: "দয়া করে সব তথ্য পূরণ করুন",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "অর্ডার নিশ্চিত!",
      description: "আপনার অর্ডারটি সফলভাবে দেওয়া হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।",
    });
    
    onClose();
    setCustomerInfo({ name: '', phone: '', address: '' });
    setDeliveryArea('');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg md:max-w-xl bg-gradient-to-b from-white via-gray-50/50 to-white border-l border-gray-200/50 overflow-y-auto">
        <SheetHeader className="pb-4 md:pb-6 border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-xl z-10">
          <SheetTitle className="text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3 text-gray-900">
            <div className="p-2 bg-[#FFA300]/15 rounded-full">
              <ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-[#FFA300]" />
            </div>
            Shopping <span className="text-[#FFA300]">ঝুড়ি</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col pt-4 md:pt-6 space-y-4 md:space-y-6">
          {/* Items List */}
          <div className="space-y-3 md:space-y-4 max-h-80 md:max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center py-12 md:py-16">
                <div className="p-4 bg-gray-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <ShoppingBag className="h-10 w-10 text-gray-400" />
                </div>
                <p className="text-gray-600 text-xl font-semibold">আপনার ঝুড়ি খালি</p>
                <p className="text-gray-500 text-base mt-2">প্রোডাক্ট যোগ করে শুরু করুন</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg bg-gray-100 border border-gray-200"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-base md:text-lg leading-tight mb-1">{item.name}</h4>
                      <p className="text-[#FFA300] font-bold text-lg md:text-xl">৳{convertToBDT(item.price).toLocaleString()}</p>
                      <p className="text-gray-700 text-sm md:text-base font-semibold">মোট: <span className="text-gray-900">৳{(convertToBDT(item.price) * item.quantity).toLocaleString()}</span></p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 rounded-full hover:bg-gray-200 text-gray-700"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-bold text-lg text-gray-900">{item.quantity}</span>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-full hover:bg-gray-200 text-gray-700"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        className="h-8 w-8 rounded-full text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Form */}
          {items.length > 0 && (
            <div className="space-y-4 md:space-y-6 border-t border-gray-200 pt-4 md:pt-6">
              <div className="space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">অর্ডারের তথ্য</h3>
                
                {/* Delivery Area */}
                <div className="space-y-2">
                  <label className="block text-base font-semibold text-gray-900">ডেলিভারি এলাকা</label>
                  <Select value={deliveryArea} onValueChange={setDeliveryArea}>
                    <SelectTrigger className="bg-white border-2 border-gray-300 rounded-lg h-12 text-base font-medium focus:border-[#FFA300] focus:ring-[#FFA300]">
                      <SelectValue placeholder="ডেলিভারি এলাকা নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inside-dhaka">ঢাকার ভিতরে (৳৬০)</SelectItem>
                      <SelectItem value="outside-dhaka">ঢাকার বাইরে (৳১২০)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Customer Info */}
                <div className="space-y-2">
                  <label className="block text-base font-semibold text-gray-900">আপনার নাম</label>
                  <Input
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="bg-white border-2 border-gray-300 rounded-lg h-12 text-base font-medium focus:border-[#FFA300] focus:ring-[#FFA300] placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-base font-semibold text-gray-900">মোবাইল নম্বর</label>
                  <Input
                    placeholder="আপনার মোবাইল নম্বর লিখুন"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="bg-white border-2 border-gray-300 rounded-lg h-12 text-base font-medium focus:border-[#FFA300] focus:ring-[#FFA300] placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-base font-semibold text-gray-900">ডেলিভারি ঠিকানা</label>
                  <Input
                    placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="bg-white border-2 border-gray-300 rounded-lg h-12 text-base font-medium focus:border-[#FFA300] focus:ring-[#FFA300] placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-3 border border-gray-200">
                <h4 className="font-bold text-gray-900 text-lg mb-4">অর্ডার সারসংক্ষেপ</h4>
                <div className="flex justify-between text-gray-800 text-base">
                  <span className="font-medium">সাবটোটাল ({items.length} আইটেম):</span>
                  <span className="font-bold">৳{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-800 text-base">
                  <span className="font-medium">ডেলিভারি চার্জ:</span>
                  <span className="font-bold">৳{deliveryArea ? deliveryFee : 0}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t border-gray-300 pt-3">
                  <span className="text-gray-900">মোট:</span>
                  <span className="text-[#FFA300]">৳{(deliveryArea ? finalTotal : total).toLocaleString()}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <Button
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                অর্ডার নিশ্চিত করুন • ৳{(deliveryArea ? finalTotal : total).toLocaleString()}
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
