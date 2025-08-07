
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToBasket(product, quantity);
    onClose();
    setQuantity(1);
    setCurrentImageIndex(0);
  };

  const productImages = product.images || [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] mx-auto max-h-[95vh] overflow-y-auto font-anek-bangla p-0 rounded-3xl">
        <DialogHeader className="relative p-4 md:p-6 border-b border-gray-200">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 h-10 w-10 rounded-full hover:bg-gray-100 z-10"
          >
            <X className="h-5 w-5" />
          </Button>
          <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 pr-12 text-left">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border-4 border-[#FFA300]">
              <div className="absolute inset-3 bg-white rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
              
              {/* Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-10 w-10 shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-10 w-10 shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}

              {/* Image Counter */}
              {productImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {productImages.length}
                </div>
              )}
            </div>
            
            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl border-3 overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'border-[#FFA300] shadow-lg' 
                        : 'border-gray-200 hover:border-[#FFA300]/60'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-full object-contain p-1 bg-white" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="space-y-2 mb-4 md:mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-[#FFA300]">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <span className="text-base md:text-lg text-gray-500 font-medium">BDT</span>
                </div>
              </div>

              {/* Product Description */}
              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 md:mb-3">বিবরণ</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  এটি একটি প্রিমিয়াম মানের প্রোডাক্ট যা আধুনিক প্রযুক্তি এবং উন্নত ফিচারের সাথে আসে। 
                  দীর্ঘস্থায়ী এবং নির্ভরযোগ্য পারফরম্যান্সের জন্য এটি বিশেষভাবে ডিজাইন করা হয়েছে।
                </p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div>
                <label className="block text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">পরিমাণ</label>
                <div className="flex items-center space-x-3 bg-white rounded-xl p-3 border-2 border-gray-300 w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-800"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  
                  <span className="w-12 text-center font-bold text-lg md:text-xl text-gray-900">
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
                className="w-full bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white py-3 md:py-4 text-base md:text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                ঝুড়িতে যোগ করুন • ৳{(product.price * quantity).toLocaleString()}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
