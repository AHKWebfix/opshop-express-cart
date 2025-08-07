
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToBasket: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToBasket }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-white/40 p-6 hover:shadow-2xl hover:bg-white/95 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFA300]/5 via-transparent to-[#FF8C00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Premium badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#FFA300] to-[#FF8C00] text-white text-xs font-bold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Star className="h-3 w-3 fill-current" />
          <span>Premium</span>
        </div>
      </div>

      {/* Product Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 overflow-hidden border-3 border-[#FFA300]/30 hover:border-[#FFA300]/60 transition-all duration-300 shadow-inner">
        <div className="absolute inset-2 bg-white rounded-xl overflow-hidden shadow-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
      
      {/* Product Info */}
      <div className="relative space-y-4 z-10">
        <h3 className="font-bold text-gray-900 text-lg line-clamp-2 min-h-[3.5rem] group-hover:text-gray-800 transition-colors leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#FFA300] group-hover:text-[#FF8C00] transition-colors">
              ৳{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 font-medium">BDT</span>
          </div>
          
          <Button
            onClick={() => onAddToBasket(product)}
            className="bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white rounded-2xl p-4 group/btn shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 relative overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
            <ShoppingCart className="h-5 w-5 group-hover/btn:scale-125 transition-transform duration-300 relative z-10" />
          </Button>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#FFA300]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};
