"use client";

import { useCart } from "@/context/CartContext";
import { ScrollLink } from "@/components/ScrollLink";

export function FloatingOrderButton() {
  const { count } = useCart();
  const hasItems = count > 0;

  return (
    <ScrollLink
      href="#menu"
      aria-label={hasItems ? `Ver mi pedido, ${count} productos` : "Hacer pedido por WhatsApp"}
      className="btn-lift fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_-8px_rgba(0,0,0,0.6)] sm:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L4 29l7.94-1.706A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.63 28 15S22.63 3 16.004 3Zm0 21.7c-1.94 0-3.75-.55-5.29-1.5l-.38-.23-4.71 1.01 1-4.6-.25-.38A9.66 9.66 0 0 1 5.3 15c0-5.35 4.36-9.7 9.7-9.7 5.35 0 9.7 4.35 9.7 9.7 0 5.35-4.35 9.7-9.7 9.7Zm5.32-7.27c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.82 1.17 3.01.14.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.33Z" />
      </svg>

      {hasItems && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-hanaya-red px-1 text-[10px] font-bold text-white ring-2 ring-hanaya-navy-deep">
          {count}
        </span>
      )}
    </ScrollLink>
  );
}
