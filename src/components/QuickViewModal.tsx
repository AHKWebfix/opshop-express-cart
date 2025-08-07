
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';
import { Product } from '../types/Product';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToBasket: (product: Product, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToBasket,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToBasket(product, quantity);
    onClose();
    setQuantity(1);
  };

  const productImages = [product.image]; // For now using single image, can be expanded

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto font-anek-bangla">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-0 top-0 h-8 w-8 rounded-full hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-gray-900 pr-10">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border-3 border-[#FFA300]/30">
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                />
              </div>
            </div>
            
            {/* Additional images would go here in a horizontal scroll */}
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((img, index) => (
                <div key={index} className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-xl border-2 border-gray-200 overflow-hidden">
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#FFA300]">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-500 font-medium">BDT</span>
                </div>
              </div>

              {/* Product Description */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">বিবরণ</h3>
                <p className="text-gray-700 leading-relaxed">
                  এটি একটি প্রিমিয়াম মানের প্রোডাক্ট যা আধুনিক প্রযুক্তি এবং উন্নত ফিচারের সাথে আসে। 
                  দীর্ঘস্থায়ী এবং নির্ভরযোগ্য পারফরম্যান্সের জন্য এটি বিশেষভাবে ডিজাইন করা হয়েছে।
                </p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">পরিমাণ</label>
                <div className="flex items-center space-x-3 bg-white rounded-xl p-3 border-2 border-gray-300 w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-800"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  
                  <span className="w-12 text-center font-bold text-xl text-gray-900">
                    {quantity}
                  </span>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-800"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                ঝুড়িতে যোগ করুন • ৳{(product.price * quantity).toLocaleString()}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
