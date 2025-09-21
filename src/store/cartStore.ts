import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalQuantity: 0,

      addToCart: (item) => {
        const { items } = get();
        const existing = items.find((i) => i.id === item.id);

        if (existing) {
          const updated = items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
          set({
            items: updated,
            totalQuantity: get().totalQuantity + item.quantity,
          });
        } else {
          set({
            items: [...items, item],
            totalQuantity: get().totalQuantity + item.quantity,
          });
        }
      },

      removeFromCart: (id) => {
        const { items } = get();
        const removed = items.find((i) => i.id === id);
        const removedQyt = removed ? removed.quantity : 0;
        set({
          items: items.filter((i) => i.id !== id),
          totalQuantity: get().totalQuantity - removedQyt,
        });
      },

      clearCart: () => set({ items: [], totalQuantity: 0 }),
    }),
    {
      name: "cart-storage", 
    }
  )
);
