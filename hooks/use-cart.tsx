import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

interface CartProps {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("Produto já está no carrinho");
        }

        set({ items: [...get().items, data] });
        toast.success("Produto adicionado ao carrinho");
      },
      removeItem: (id: string) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });
        toast.success("Produto removido do carrinho");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Todos os produtos foram removidos do carrinho");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
