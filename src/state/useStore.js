import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: { name: "유비", age: 20 },

  changeName: () =>
    set((state) => ({
      user: { ...state.user, name: "관우" },
    })),

  increase: (amount) =>
    set((state) => ({
      user: { ...state.user, age: state.user.age + amount },
    })),
}));
