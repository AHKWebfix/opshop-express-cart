
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToBasket: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToBasket }) => {
  return (
    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:shadow-xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 overflow-hidden border-2 border-[#FFA300]/30 hover:border-[#FFA300]/60 transition-colors">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#FFA300]">
            ৳{product.price.toLocaleString()}
          </span>
          
          <Button
            onClick={() => onAddToBasket(product)}
            className="bg-[#FFA300] hover:bg-[#FF8C00] text-white rounded-full p-3 group/btn"
          >
            <ShoppingCart className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};
