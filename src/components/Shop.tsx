"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { ScrollLink } from "@/components/ScrollLink";
import { OrderForm } from "@/components/OrderForm";
import { WhatsAppSubmitButton } from "@/components/WhatsAppSubmitButton";

export function Shop() {
  const { cart, addToCart, changeQuantity, total } = useCart();
  const [activeCategory, setActiveCategory] = useState(menu[0]?.id ?? "");
  const sectionRefs = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveCategory(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -65% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-hanaya-gold">
          El menú completo
        </p>
        <h2 className="mt-2 max-w-lg font-display text-3xl leading-tight text-hanaya-cream sm:text-4xl">
          Cada categoría, lista para armar tu charola.
        </h2>
      </div>

      <nav
        aria-label="Categorías del menú"
        className="sticky top-[65px] z-40 border-b border-white/5 bg-hanaya-navy/95 backdrop-blur-md sm:top-[73px]"
      >
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menu.map((category) => (
            <ScrollLink
              key={category.id}
              href={`#${category.id}`}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all ${
                activeCategory === category.id
                  ? "bg-hanaya-gold text-hanaya-navy-deep shadow-[0_6px_18px_-4px_rgba(198,154,62,0.6)]"
                  : "bg-white/5 text-white/55 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              {category.title}
            </ScrollLink>
          ))}
        </div>
      </nav>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-[1fr_340px]">
        <div className="space-y-16">
          {menu.map((category, ci) => (
            <section
              key={category.id}
              id={category.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(category.id, el);
                else sectionRefs.current.delete(category.id);
              }}
              className="relative scroll-mt-32"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 right-0 select-none font-display text-7xl text-hanaya-cream/[0.035] sm:text-8xl"
              >
                {String(ci + 1).padStart(2, "0")}
              </span>

              <div className="relative flex items-baseline justify-between gap-4 border-b border-hanaya-gold/25 pb-3">
                <h2 className="font-display text-2xl text-hanaya-cream sm:text-3xl">
                  {category.title}
                </h2>
              </div>
              {category.note && (
                <p className="relative mt-3 text-xs leading-relaxed text-hanaya-cream/45">
                  {category.note}
                </p>
              )}

              <div className="relative -mx-4 mt-5">
                <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {category.products.map((product) => (
                    <li
                      key={product.name}
                      className="group flex w-[240px] shrink-0 snap-start flex-col rounded-2xl border border-white/8 bg-hanaya-navy-card/60 p-4 transition-all hover:border-hanaya-gold/35 hover:bg-hanaya-navy-card sm:w-[270px]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base leading-snug text-hanaya-cream transition-colors group-hover:text-hanaya-gold sm:text-lg">
                          {product.name}
                        </h3>
                        <button
                          onClick={() => addToCart(category.id, product.name, product.price)}
                          aria-label={`Agregar ${product.name}`}
                          className="btn-lift flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hanaya-gold/40 text-hanaya-gold transition-all hover:scale-110 hover:border-hanaya-gold hover:bg-hanaya-gold hover:text-hanaya-navy-deep"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                      </div>
                      {product.description && (
                        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-hanaya-cream/55">
                          {product.description}
                        </p>
                      )}
                      <span className="mt-3 font-display text-lg text-hanaya-gold">
                        ${product.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <aside className="h-fit space-y-6 lg:sticky lg:top-40">
          <div className="rounded-2xl border border-hanaya-gold/20 bg-hanaya-navy-card p-5 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)]">
            <h3 className="font-display text-xl text-hanaya-cream">Tu pedido</h3>
            {cart.length === 0 ? (
              <p className="mt-3 text-sm text-white/50">Aún no has agregado productos.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {cart.map((item) => (
                  <li
                    key={`${item.categoryId}-${item.name}`}
                    className="flex items-center justify-between gap-2 text-sm"
                  >
                    <span className="flex-1 text-hanaya-cream/85">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changeQuantity(item.name, item.categoryId, -1)}
                        aria-label={`Quitar uno de ${item.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-hanaya-gold/50 hover:text-hanaya-gold"
                      >
                        −
                      </button>
                      <span className="w-4 text-center text-hanaya-cream">{item.quantity}</span>
                      <button
                        onClick={() => changeQuantity(item.name, item.categoryId, 1)}
                        aria-label={`Agregar uno más de ${item.name}`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-hanaya-gold/50 hover:text-hanaya-gold"
                      >
                        +
                      </button>
                    </div>
                    <span className="w-14 text-right font-display text-hanaya-gold">
                      ${item.price * item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-hanaya-cream/70">
                Total
              </span>
              <span className="font-display text-2xl text-hanaya-gold">${total}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-hanaya-navy-card p-5">
            <h3 className="font-display text-xl text-hanaya-cream">
              Datos para tu pedido
            </h3>
            <div className="mt-4">
              <OrderForm />
            </div>

            <WhatsAppSubmitButton className="mt-5" />
          </div>
        </aside>
      </div>
    </div>
  );
}
