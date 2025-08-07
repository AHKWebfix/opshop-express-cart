
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';

interface FloatingBasketProps {
  itemCount: number;
  onClick: () => void;
}

export const FloatingBasket: React.FC<FloatingBasketProps> = ({ itemCount, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 bg-[#FFA300] hover:bg-[#FF8C00] text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
    >
      <div className="relative">
        <ShoppingBasket className="h-7 w-7" />
        {itemCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {itemCount > 9 ? '9+' : itemCount}
          </div>
        )}
      </div>
    </Button>
  );
};
