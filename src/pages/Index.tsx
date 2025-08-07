
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProductGrid } from '../components/ProductGrid';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { BasketDrawer } from '../components/BasketDrawer';
import { FloatingBasket } from '../components/FloatingBasket';
import { Product } from '../types/Product';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basketItems, setBasketItems] = useState<(Product & { quantity: number })[]>([]);

  const addToBasket = (product: Product) => {
    setBasketItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    toast({
      title: "Added to basket",
      description: `${product.name} has been added to your basket`,
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setBasketItems(prev => prev.filter(item => item.id !== id));
    } else {
      setBasketItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const totalItems = basketItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 font-anek-bangla">
      {/* Enhanced layered background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/40 via-transparent to-orange-50/20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,163,0,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header onBasketClick={() => setIsBasketOpen(true)} />
        <HeroSection />
        <ProductGrid onAddToBasket={addToBasket} />
        <WhyChooseUs />
        <AboutSection />
        <ContactSection />
        <Footer />
        
        <FloatingBasket 
          itemCount={totalItems}
          onClick={() => setIsBasketOpen(true)}
        />
        
        <BasketDrawer
          isOpen={isBasketOpen}
          onClose={() => setIsBasketOpen(false)}
          items={basketItems}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
};

export default Index;
