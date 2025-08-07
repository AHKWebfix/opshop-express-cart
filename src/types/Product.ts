
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'smartphone' | 'laptop' | 'accessories' | 'components';
}
