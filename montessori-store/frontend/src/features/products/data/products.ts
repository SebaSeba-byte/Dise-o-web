import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Torre Montessori",
    price: 580,
    category: "Montessori",
    image: "/images/products/torre.jpg",
    description: "Torre de aprendizaje fabricada en madera.",
    featured: true,
  },
  {
    id: 2,
    name: "Cama Montessori",
    price: 1350,
    category: "Dormitorio",
    image: "/images/products/cama.jpg",
    description: "Diseño personalizado.",
    featured: true,
  },
  {
    id: 3,
    name: "Biblioteca Infantil",
    price: 890,
    category: "Mobiliario",
    image: "/images/products/biblioteca.jpg",
    description: "Biblioteca Montessori.",
    featured: true,
  },
];
