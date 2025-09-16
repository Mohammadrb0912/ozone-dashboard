import { create } from "zustand";

interface cartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface cartState {
  items: cartItem[];
  totalQuantity: number;
  addToCart: (item: cartItem) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<cartState>((set, get) => ({
  items: [],
  totalQuantity: 0,

  addToCart: (item) => {
    const { items } = get();
    const existing = items.find((i) => i.id === item.id);

    if (existing) {
      const updated = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
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
 
}));
