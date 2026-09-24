"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { CartItem, OrderDetails } from "@/types/order";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type CartContextValue = {
  cart: CartItem[];
  addToCart: (categoryId: string, name: string, price: number) => void;
  changeQuantity: (name: string, categoryId: string, delta: number) => void;
  total: number;
  count: number;
  order: OrderDetails;
  setOrder: (order: OrderDetails) => void;
  canSubmit: boolean;
  whatsappLink: string | null;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [order, setOrder] = useState<OrderDetails>({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "efectivo",
  });

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

  const canSubmit =
    cart.length > 0 && order.name.trim() !== "" && order.address.trim() !== "" && order.phone.trim() !== "";

  const whatsappLink = canSubmit ? buildWhatsAppLink(cart, order) : null;

  const value = useMemo(
    () => ({ cart, addToCart, changeQuantity, total, count, order, setOrder, canSubmit, whatsappLink }),
    [cart, total, count, order, canSubmit, whatsappLink]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
