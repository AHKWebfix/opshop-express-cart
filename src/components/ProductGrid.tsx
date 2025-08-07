
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '../types/Product';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';
import { toast } from '@/hooks/use-toast';

interface ProductGridProps {
  onAddToBasket: (product: Product) => void;
}

// All product images
const allProductImages = [
  'https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg',
  'https://adminapi.applegadgetsbd.com/storage/media/large/MacBook-Air-M2-13.6-inch-8256GB-space-gray-6746.jpg',
  'https://www.tct.com.bd/wp-content/uploads/2022/04/MWP22_720x-600x600.jpg',
  'https://gadgetbd.com/wp-content/uploads/2024/01/Samsung-S24-Ultra-Titanium-Grey.jpg',
  'https://adminapi.applegadgetsbd.com/storage/media/large/Dell-XPS-13-Plus-9320-a-6750.jpg',
  'https://img.drz.lazcdn.com/static/bd/p/584abc3e8733dfad817521bbe7253ef0.jpg_720x720q80.jpg_.jpg',
  'https://smartbd.com/wp-content/uploads/2024/09/GeForce-RTX%E2%84%A2-4070-SUPER-GAMING-OC-12G.jpg',
  'https://www.startech.com.bd/image/cache/catalog/keyboard/havit/gamenote-kb893l/gamenote-kb893l-01-500x500.webp'
];

const mockProducts: Product[] = [
  { id: '1', name: 'iPhone 15 Pro', price: 109890, image: allProductImages[0], category: 'smartphone', images: allProductImages },
  { id: '2', name: 'MacBook Air M2', price: 142890, image: allProductImages[1], category: 'laptop', images: allProductImages },
  { id: '3', name: 'AirPods Pro', price: 27390, image: allProductImages[2], category: 'accessories', images: allProductImages },
  { id: '4', name: 'Samsung Galaxy S24', price: 98890, image: allProductImages[3], category: 'smartphone', images: allProductImages },
  { id: '5', name: 'Dell XPS 13', price: 131890, image: allProductImages[4], category: 'laptop', images: allProductImages },
  { id: '6', name: 'Wireless Mouse', price: 8690, image: allProductImages[5], category: 'accessories', images: allProductImages },
  { id: '7', name: 'RTX 4070 Graphics Card', price: 65890, image: allProductImages[6], category: 'components', images: allProductImages },
  { id: '8', name: 'Gaming Keyboard', price: 17490, image: allProductImages[7], category: 'accessories', images: allProductImages },
];

export const ProductGrid: React.FC<ProductGridProps> = ({ onAddToBasket }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const filteredProducts = mockProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleQuickViewAddToCart = (product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      onAddToBasket(product);
    }
    toast({
      title: "ঝুড়িতে যোগ করা হয়েছে",
      description: `${product.name} (${quantity}টি) আপনার ঝুড়িতে যোগ করা হয়েছে`,
    });
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'smartphone', label: 'Smartphone' },
    { value: 'laptop', label: 'Laptop' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'components', label: 'Components' },
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
              Our <span className="text-[#FFA300] relative">
                Products
              </span>
            </h2>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFA300]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FF8C00]/10 rounded-full blur-xl"></div>
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our premium collection of cutting-edge technology and accessories, 
            carefully curated for the modern lifestyle
          </p>
        </div>

        {/* Mobile Dropdown Filter */}
        <div className="block md:hidden mb-8">
          <div className="flex flex-col gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full h-14 bg-white/95 backdrop-blur-sm border-3 border-[#FFA300]/60 hover:border-[#FFA300]/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl font-bold text-lg text-gray-800">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl bg-white z-50">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="rounded-lg font-semibold text-base py-3">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full h-14 bg-white/95 backdrop-blur-sm border-3 border-[#FFA300]/60 hover:border-[#FFA300]/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl font-bold text-lg text-gray-800">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl bg-white z-50">
                <SelectItem value="name" className="rounded-lg font-semibold text-base py-3">Price</SelectItem>
                <SelectItem value="price-low" className="rounded-lg font-semibold text-base py-3">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="rounded-lg font-semibold text-base py-3">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          <div className="relative">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-56 h-12 sm:h-14 bg-white/95 backdrop-blur-sm border-3 border-[#FFA300]/60 hover:border-[#FFA300]/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl font-bold text-base sm:text-lg text-gray-800">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl bg-white z-50">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="rounded-lg font-semibold text-base">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-56 h-12 sm:h-14 bg-white/95 backdrop-blur-sm border-3 border-[#FFA300]/60 hover:border-[#FFA300]/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl font-bold text-base sm:text-lg text-gray-800">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl bg-white z-50">
                <SelectItem value="name" className="rounded-lg font-semibold text-base">Price</SelectItem>
                <SelectItem value="price-low" className="rounded-lg font-semibold text-base">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="rounded-lg font-semibold text-base">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Enhanced Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToBasket={onAddToBasket}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFA300]/10 to-[#FF8C00]/10 rounded-full border border-[#FFA300]/20">
            <div className="w-2 h-2 bg-[#FFA300] rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">More products coming soon</span>
            <div className="w-2 h-2 bg-[#FF8C00] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          onAddToBasket={handleQuickViewAddToCart}
        />
      </div>
    </section>
  );
};
