import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addCount: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount + 1 }
          : item
      ),
    })),

  decreaseCount: (id) =>
    set((state) => {
      const item = state.cart.find((a) => a.id === id);

      if (!item) return state;

      if (item.amount > 0) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, amount: cartItem.amount - 1 }
              : cartItem
          ),
        };
      }

      alert("상품이 더 이상 없습니다.");
      return state;
    }),

  addItem: (newItem) =>
    set((state) => {
      const exists = state.cart.some((item) => item.id === newItem.id);

      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, newItem],
      };
    }),

  deleteItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  sortName: () =>
    set((state) => ({
      cart: [...state.cart].sort((a, b) =>
        a.item > b.item ? 1 : -1
      ),
    })),
}));
