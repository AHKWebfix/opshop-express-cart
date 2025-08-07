
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

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryArea === 'inside-dhaka' ? 50 : 100;
  const finalTotal = total + deliveryFee;

  const handleConfirmOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address || !deliveryArea) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order Confirmed!",
      description: "Your order has been placed successfully. We'll contact you soon.",
    });
    
    onClose();
    // Reset form
    setCustomerInfo({ name: '', phone: '', address: '' });
    setDeliveryArea('');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-xl border-l border-white/30">
        <SheetHeader className="pb-6 border-b border-white/20">
          <SheetTitle className="text-2xl font-bold flex items-center gap-3">
            <div className="p-2 bg-[#FFA300]/10 rounded-full">
              <ShoppingBag className="h-6 w-6 text-[#FFA300]" />
            </div>
            Shopping <span className="text-[#FFA300]">Basket</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {/* Items List */}
          <div className="flex-1 overflow-y-auto space-y-4 max-h-96">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="p-4 bg-gray-100/50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <ShoppingBag className="h-10 w-10 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">Your basket is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl bg-gray-100 shadow-sm"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-lg leading-tight">{item.name}</h4>
                      <p className="text-[#FFA300] font-bold text-xl">${item.price}</p>
                      <p className="text-gray-600 text-sm">Total: <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span></p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex items-center space-x-2 bg-gray-50/80 rounded-full p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 rounded-full hover:bg-white/80"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-full hover:bg-white/80"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        className="h-8 w-8 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Form */}
          {items.length > 0 && (
            <div className="space-y-6 border-t border-white/20 pt-6 mt-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-900">Order Details</h3>
                
                {/* Delivery Area */}
                <Select value={deliveryArea} onValueChange={setDeliveryArea}>
                  <SelectTrigger className="bg-white/80 border-white/30 rounded-xl h-12">
                    <SelectValue placeholder="Select delivery area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inside-dhaka">Inside Dhaka ($50)</SelectItem>
                    <SelectItem value="outside-dhaka">Outside Dhaka ($100)</SelectItem>
                  </SelectContent>
                </Select>

                {/* Customer Info */}
                <Input
                  placeholder="Your name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  className="bg-white/80 border-white/30 rounded-xl h-12"
                />
                
                <Input
                  placeholder="Phone number"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  className="bg-white/80 border-white/30 rounded-xl h-12"
                />
                
                <Input
                  placeholder="Delivery address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  className="bg-white/80 border-white/30 rounded-xl h-12"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-6 space-y-3 border border-white/30">
                <h4 className="font-semibold text-gray-900 text-lg mb-4">Order Summary</h4>
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({items.length} items):</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee:</span>
                  <span className="font-semibold">${deliveryArea ? deliveryFee : 0}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t border-white/30 pt-3">
                  <span>Total:</span>
                  <span className="text-[#FFA300]">${deliveryArea ? finalTotal.toFixed(2) : total.toFixed(2)}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <Button
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Confirm Order • ${deliveryArea ? finalTotal.toFixed(2) : total.toFixed(2)}
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
