
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '../types/Product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onAddToBasket: (product: Product) => void;
}

const mockProducts: Product[] = [
  { id: '1', name: 'iPhone 15 Pro', price: 109890, image: 'https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg', category: 'smartphone' },
  { id: '2', name: 'MacBook Air M2', price: 142890, image: 'https://adminapi.applegadgetsbd.com/storage/media/large/MacBook-Air-M2-13.6-inch-8256GB-space-gray-6746.jpg', category: 'laptop' },
  { id: '3', name: 'AirPods Pro', price: 27390, image: 'https://www.tct.com.bd/wp-content/uploads/2022/04/MWP22_720x-600x600.jpg', category: 'accessories' },
  { id: '4', name: 'Samsung Galaxy S24', price: 98890, image: 'https://gadgetbd.com/wp-content/uploads/2024/01/Samsung-S24-Ultra-Titanium-Grey.jpg', category: 'smartphone' },
  { id: '5', name: 'Dell XPS 13', price: 131890, image: 'https://adminapi.applegadgetsbd.com/storage/media/large/Dell-XPS-13-Plus-9320-a-6750.jpg', category: 'laptop' },
  { id: '6', name: 'Wireless Mouse', price: 8690, image: 'https://img.drz.lazcdn.com/static/bd/p/584abc3e8733dfad817521bbe7253ef0.jpg_720x720q80.jpg_.jpg', category: 'accessories' },
  { id: '7', name: 'RTX 4070 Graphics Card', price: 65890, image: 'https://smartbd.com/wp-content/uploads/2024/09/GeForce-RTX%E2%84%A2-4070-SUPER-GAMING-OC-12G.jpg', category: 'components' },
  { id: '8', name: 'Gaming Keyboard', price: 17490, image: 'https://www.startech.com.bd/image/cache/catalog/keyboard/havit/gamenote-kb893l/gamenote-kb893l-01-500x500.webp', category: 'accessories' },
];

export const ProductGrid: React.FC<ProductGridProps> = ({ onAddToBasket }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredProducts = mockProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
              Our <span className="text-[#FFA300] relative">
                Products
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFA300] to-[#FF8C00] rounded-full"></div>
              </span>
            </h2>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFA300]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FF8C00]/10 rounded-full blur-xl"></div>
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our premium collection of cutting-edge technology and accessories, 
            carefully curated for the modern lifestyle
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFA300] to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          <div className="relative">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-56 h-12 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-[#FFA300]/50 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl">
                <SelectItem value="all" className="rounded-lg">All Categories</SelectItem>
                <SelectItem value="smartphone" className="rounded-lg">Smartphone</SelectItem>
                <SelectItem value="laptop" className="rounded-lg">Laptop</SelectItem>
                <SelectItem value="accessories" className="rounded-lg">Accessories</SelectItem>
                <SelectItem value="components" className="rounded-lg">Components</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-56 h-12 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-[#FFA300]/50 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-gray-200 shadow-xl">
                <SelectItem value="name" className="rounded-lg">Name</SelectItem>
                <SelectItem value="price-low" className="rounded-lg">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="rounded-lg">Price: High to Low</SelectItem>
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
      </div>
    </section>
  );
};
