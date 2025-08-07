
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Minus, Plus, Trash2 } from 'lucide-react';
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
      <SheetContent className="w-full sm:max-w-lg bg-white/95 backdrop-blur-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            Shopping <span className="text-[#FFA300]">Basket</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Items List */}
          <div className="flex-1 overflow-y-auto space-y-4 my-6">
            {items.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                Your basket is empty
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="bg-white/60 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-[#FFA300] font-bold">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        className="h-8 w-8 text-red-500 hover:text-red-700"
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
            <div className="space-y-4 border-t pt-6">
              <div className="space-y-4">
                {/* Delivery Area */}
                <Select value={deliveryArea} onValueChange={setDeliveryArea}>
                  <SelectTrigger>
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
                />
                
                <Input
                  placeholder="Phone number"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                />
                
                <Input
                  placeholder="Delivery address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                />
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span>${deliveryArea ? deliveryFee : 0}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-[#FFA300]">${deliveryArea ? finalTotal : total}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <Button
                onClick={handleConfirmOrder}
                className="w-full bg-[#FFA300] hover:bg-[#FF8C00] text-white py-3 text-lg rounded-xl"
              >
                Confirm Order
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
