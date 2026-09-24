"use client";

import { useCart } from "@/context/CartContext";

export function WhatsAppSubmitButton({ className }: { className?: string }) {
  const { canSubmit, whatsappLink } = useCart();

  return (
    <a
      href={whatsappLink ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      aria-disabled={!canSubmit}
      className={`btn-lift flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-sm font-bold ${
        canSubmit
          ? "bg-green-600 text-white hover:bg-green-500"
          : "cursor-not-allowed bg-white/5 text-white/30"
      } ${className ?? ""}`}
      onClick={(e) => {
        if (!canSubmit) e.preventDefault();
      }}
    >
      Enviar pedido por WhatsApp
    </a>
  );
}
