"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { CartItem } from "@/types/order";

type CartContextValue = {
  cart: CartItem[];
  addToCart: (categoryId: string, name: string, price: number) => void;
  changeQuantity: (name: string, categoryId: string, delta: number) => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(categoryId: string, name: string, price: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.categoryId === categoryId && i.name === name);
      if (existing) {
        return prev.map((i) => (i === existing ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { categoryId, name, price, quantity: 1 }];
    });
  }

  function changeQuantity(name: string, categoryId: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) =>
          i.categoryId === categoryId && i.name === name
            ? { ...i, quantity: i.quantity + delta }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  }

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );
  const count = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({ cart, addToCart, changeQuantity, total, count }),
    [cart, total, count]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
