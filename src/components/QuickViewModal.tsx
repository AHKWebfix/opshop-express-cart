
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

  // Limit to maximum 5 images
  const productImages = (product.images || [product.image]).slice(0, 5);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] sm:w-[85vw] md:w-[75vw] mx-auto max-h-[85vh] overflow-y-auto font-anek-bangla p-0 rounded-2xl shadow-2xl">
        <DialogHeader className="relative p-3 md:p-4 border-b border-gray-200">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 h-8 w-8 rounded-full hover:bg-gray-100 z-10"
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-base md:text-lg font-bold text-gray-900 pr-10 text-left">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 p-3 md:p-4">
          {/* Product Images */}
          <div className="space-y-2">
            {/* Main Image */}
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border-2 border-[#FFA300]">
              <div className="absolute inset-2 bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
              
              {/* Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-7 w-7 shadow-md"
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full h-7 w-7 shadow-md"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </>
              )}

              {/* Image Counter */}
              {productImages.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                  {currentImageIndex + 1} / {productImages.length}
                </div>
              )}
            </div>
            
            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className="flex gap-1 overflow-x-auto pb-1">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'border-[#FFA300] shadow-md' 
                        : 'border-gray-200 hover:border-[#FFA300]/60'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-full object-contain p-0.5 bg-white" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-3">
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>
              
              <div className="space-y-1 mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-2xl font-bold text-[#FFA300]">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">BDT</span>
                </div>
              </div>

              {/* Product Description */}
              <div className="bg-gray-50 rounded-xl p-3 mb-3">
                <h3 className="font-bold text-sm md:text-base text-gray-900 mb-2">বিবরণ</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  এটি একটি প্রিমিয়াম মানের প্রোডাক্ট যা আধুনিক প্রযুক্তি এবং উন্নত ফিচারের সাথে আসে। 
                  দীর্ঘস্থায়ী এবং নির্ভরযোগ্য পারফরম্যান্সের জন্য এটি বিশেষভাবে ডিজাইন করা হয়েছে।
                </p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <div>
                <label className="block text-sm md:text-base font-bold text-gray-900 mb-2">পরিমাণ</label>
                <div className="flex items-center space-x-2 bg-white rounded-lg p-2 border-2 border-gray-300 w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-6 w-6 rounded-md hover:bg-gray-100 text-gray-800"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  
                  <span className="w-8 text-center font-bold text-base text-gray-900">
                    {quantity}
                  </span>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-6 w-6 rounded-md hover:bg-gray-100 text-gray-800"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-[#FFA300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7A00] text-white py-2 md:py-2.5 text-sm md:text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                ঝুড়িতে যোগ করুন • ৳{(product.price * quantity).toLocaleString()}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
