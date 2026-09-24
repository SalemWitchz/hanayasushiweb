"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { OrderForm } from "@/components/OrderForm";
import { WhatsAppSubmitButton } from "@/components/WhatsAppSubmitButton";

export function OrderModal({ onClose }: { onClose: () => void }) {
  const { cart, total } = useCart();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-4">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-hanaya-navy-deep/80 backdrop-blur-sm"
      />

      <div className="relative flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl border border-hanaya-gold/20 bg-hanaya-navy-card shadow-[0_-20px_60px_rgba(0,0,0,0.5)] sm:max-h-[85vh] sm:rounded-3xl sm:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="font-display text-xl text-hanaya-cream">Tu pedido</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-8 w-8 items-center justify-center rounded-full text-hanaya-cream/60 transition-colors hover:bg-white/10 hover:text-hanaya-cream"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={`${item.categoryId}-${item.name}`}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <span className="text-hanaya-cream/85">
                  {item.quantity}× {item.name}
                </span>
                <span className="font-display text-hanaya-gold">
                  ${item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-hanaya-cream/70">
              Total
            </span>
            <span className="font-display text-xl text-hanaya-gold">${total}</span>
          </div>

          <button
            onClick={onClose}
            className="mt-2 text-xs font-semibold text-hanaya-azure hover:underline"
          >
            + Seguir agregando productos
          </button>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/45">
              Ahora, tus datos
            </p>
            <div className="mt-3">
              <OrderForm />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-4">
          <WhatsAppSubmitButton />
        </div>
      </div>
    </div>
  );
}
