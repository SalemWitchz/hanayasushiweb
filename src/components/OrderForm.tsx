"use client";

import { useCart } from "@/context/CartContext";
import type { PaymentMethod } from "@/types/order";

export function OrderForm() {
  const { order, setOrder } = useCart();

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
          Nombre
        </span>
        <input
          type="text"
          value={order.name}
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-hanaya-navy-deep px-3 py-2.5 text-sm text-hanaya-cream placeholder:text-white/25 focus:border-hanaya-gold/60 focus:outline-none focus:ring-1 focus:ring-hanaya-gold/40"
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
          Dirección con referencias
        </span>
        <textarea
          value={order.address}
          onChange={(e) => setOrder({ ...order, address: e.target.value })}
          rows={2}
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-hanaya-navy-deep px-3 py-2.5 text-sm text-hanaya-cream placeholder:text-white/25 focus:border-hanaya-gold/60 focus:outline-none focus:ring-1 focus:ring-hanaya-gold/40"
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
          Número de teléfono
        </span>
        <input
          type="tel"
          value={order.phone}
          onChange={(e) => setOrder({ ...order, phone: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-hanaya-navy-deep px-3 py-2.5 text-sm text-hanaya-cream placeholder:text-white/25 focus:border-hanaya-gold/60 focus:outline-none focus:ring-1 focus:ring-hanaya-gold/40"
        />
      </label>
      <div>
        <span className="text-xs font-semibold uppercase tracking-wide text-white/45">
          Forma de pago
        </span>
        <div className="mt-1.5 flex gap-2 rounded-lg border border-white/10 bg-hanaya-navy-deep p-1">
          {(["efectivo", "transferencia"] as PaymentMethod[]).map((method) => (
            <button
              key={method}
              onClick={() => setOrder({ ...order, paymentMethod: method })}
              className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold capitalize transition-colors ${
                order.paymentMethod === method
                  ? "bg-hanaya-gold text-hanaya-navy-deep"
                  : "text-white/60 hover:text-white/85"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
