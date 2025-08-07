
import React from 'react';
import { ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingBasketProps {
  itemCount: number;
  onClick: () => void;
}

export const FloatingBasket: React.FC<FloatingBasketProps> = ({ itemCount, onClick }) => {
  if (itemCount === 0) return null;

  return (
    <Button
      onClick={onClick}
      className="fixed right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-40 bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    >
      <div className="relative">
        <ShoppingBasket className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center min-w-[1.25rem] md:min-w-[1.5rem]">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </div>
    </Button>
  );
};
