import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  addProduct: (product: CartItem) => void;

  removeProduct: (id: number) => void;

  clearCart: () => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({

  cart: [],

  addProduct: (product) =>
    set((state) => {

      const exists = state.cart.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, product],
      };
    }),

  removeProduct: (id) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== id
      ),
    })),

  clearCart: () =>
    set({
      cart: [],
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
}));
