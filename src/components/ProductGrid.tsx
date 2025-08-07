
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
  { id: '5', name: 'Dell XPS 13', price: 131890, image: 'https://m.media-amazon.com/images/I/710EGJBdIML._AC_SL1500_.jpg', category: 'laptop' },
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
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#FFA300]">Products</span>
          </h2>
          <p className="text-gray-600 text-lg">Discover our range of premium gadgets and accessories</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 bg-white/80 backdrop-blur-sm">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="smartphone">Smartphone</SelectItem>
              <SelectItem value="laptop">Laptop</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="components">Components</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48 bg-white/80 backdrop-blur-sm">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToBasket={onAddToBasket}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
