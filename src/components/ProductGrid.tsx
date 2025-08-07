
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product } from '../types/Product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onAddToBasket: (product: Product) => void;
}

const mockProducts: Product[] = [
  { id: '1', name: 'iPhone 15 Pro', price: 999, image: '/placeholder.svg', category: 'smartphone' },
  { id: '2', name: 'MacBook Air M2', price: 1299, image: '/placeholder.svg', category: 'laptop' },
  { id: '3', name: 'AirPods Pro', price: 249, image: '/placeholder.svg', category: 'accessories' },
  { id: '4', name: 'Samsung Galaxy S24', price: 899, image: '/placeholder.svg', category: 'smartphone' },
  { id: '5', name: 'Dell XPS 13', price: 1199, image: '/placeholder.svg', category: 'laptop' },
  { id: '6', name: 'Wireless Mouse', price: 79, image: '/placeholder.svg', category: 'accessories' },
  { id: '7', name: 'RTX 4070 Graphics Card', price: 599, image: '/placeholder.svg', category: 'components' },
  { id: '8', name: 'Gaming Keyboard', price: 159, image: '/placeholder.svg', category: 'accessories' },
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
