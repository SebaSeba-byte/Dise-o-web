export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  gallery: string[];
  featured: boolean;
  stock: number;
  rating: number;
}
