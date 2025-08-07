
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Minus, Plus, Trash2, ShoppingBag, Package } from 'lucide-react';
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
      <SheetContent className="w-full sm:max-w-lg md:max-w-xl bg-white border-l border-gray-300 overflow-y-auto font-anek-bangla">
        <SheetHeader className="pb-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <SheetTitle className="text-2xl font-bold flex items-center gap-3 text-gray-900">
            <div className="p-3 bg-[#FFA300]/20 rounded-xl">
              <ShoppingBag className="h-6 w-6 text-[#FFA300]" />
            </div>
            <span className="font-anek-bangla">Shopping ঝুড়ি</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col pt-6 space-y-6">
          {/* Items List */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="p-6 bg-gray-50 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Package className="h-12 w-12 text-gray-400" />
                </div>
                <p className="text-gray-700 text-xl font-bold font-anek-bangla mb-2">আপনার ঝুড়ি খালি</p>
                <p className="text-gray-500 text-lg font-anek-bangla">প্রোডাক্ট যোগ করে শুরু করুন</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl bg-white border-2 border-gray-300"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-lg leading-tight mb-2 font-anek-bangla">{item.name}</h4>
                      <p className="text-[#FFA300] font-bold text-xl font-anek-bangla">৳{convertToBDT(item.price).toLocaleString()}</p>
                      <p className="text-gray-800 text-lg font-semibold font-anek-bangla">মোট: <span className="text-gray-900 font-bold">৳{(convertToBDT(item.price) * item.quantity).toLocaleString()}</span></p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex items-center space-x-2 bg-white rounded-xl p-2 border-2 border-gray-300">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-800"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-10 text-center font-bold text-xl text-gray-900 font-anek-bangla">{item.quantity}</span>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-800"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        className="h-8 w-8 rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
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
            <div className="space-y-6 border-t-2 border-gray-200 pt-6">
              <div className="space-y-5">
                <h3 className="font-bold text-2xl text-gray-900 font-anek-bangla">অর্ডারের তথ্য</h3>
                
                {/* Delivery Area */}
                <div className="space-y-2">
                  <label className="block text-lg font-bold text-gray-900 font-anek-bangla">ডেলিভারি এলাকা</label>
                  <Select value={deliveryArea} onValueChange={setDeliveryArea}>
                    <SelectTrigger className="bg-white border-2 border-gray-300 rounded-xl h-14 text-lg font-semibold focus:border-[#FFA300] focus:ring-[#FFA300] font-anek-bangla">
                      <SelectValue placeholder="ডেলিভারি এলাকা নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="font-anek-bangla">
                      <SelectItem value="inside-dhaka" className="text-lg font-semibold">ঢাকার ভিতরে (৳৬০)</SelectItem>
                      <SelectItem value="outside-dhaka" className="text-lg font-semibold">ঢাকার বাইরে (৳১২০)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Customer Info */}
                <div className="space-y-2">
                  <label className="block text-lg font-bold text-gray-900 font-anek-bangla">আপনার নাম</label>
                  <Input
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="bg-white border-2 border-gray-300 rounded-xl h-14 text-lg font-semibold focus:border-[#FFA300] focus:ring-[#FFA300] placeholder:text-gray-500 font-anek-bangla"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-lg font-bold text-gray-900 font-anek-bangla">মোবাইল নম্বর</label>
                  <Input
                    placeholder="আপনার মোবাইল নম্বর লিখুন"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="bg-white border-2 border-gray-300 rounded-xl h-14 text-lg font-semibold focus:border-[#FFA300] focus:ring-[#FFA300] placeholder:text-gray-500 font-anek-bangla"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-lg font-bold text-gray-900 font-anek-bangla">ডেলিভারি ঠিকানা</label>
                  <Input
                    placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="bg-white border-2 border-gray-300 rounded-xl h-14 text-lg font-semibold focus:border-[#FFA300] focus:ring-[#FFA300] placeholder:text-gray-500 font-anek-bangla"
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 text-xl font-anek-bangla">অর্ডার সারসংক্ষেপ</h4>
                <div className="flex justify-between text-gray-800 text-lg font-anek-bangla">
                  <span className="font-semibold">সাবটোটাল ({items.length} আইটেম):</span>
                  <span className="font-bold">৳{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-800 text-lg font-anek-bangla">
                  <span className="font-semibold">ডেলিভারি চার্জ:</span>
                  <span className="font-bold">৳{deliveryArea ? deliveryFee : 0}</span>
                </div>
                <div className="flex justify-between font-bold text-2xl border-t-2 border-gray-300 pt-4 font-anek-bangla">
                  <span className="text-gray-900">মোট:</span>
                  <span className="text-[#FFA300]">৳{(deliveryArea ? finalTotal : total).toLocaleString()}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <Button
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white py-5 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-anek-bangla"
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
