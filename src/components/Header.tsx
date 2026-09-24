"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#valores-heading", label: "Nosotros" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-hanaya-navy-deep/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <a href="#top" className="leading-none">
          <span className="text-2xl font-black tracking-wide">
            HANA
            <span className="text-hanaya-red">Y</span>A
          </span>
          <div className="text-xs tracking-[0.3em] text-white/70">SUSHI</div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/75 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-hanaya-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            className="btn-lift rounded-full bg-hanaya-gold px-5 py-2 text-xs font-bold uppercase tracking-wide text-hanaya-navy-deep hover:bg-hanaya-gold-dark"
          >
            Pedir ahora
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Abrir menú de navegación"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-hanaya-navy-deep px-4 py-4 sm:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-white/80 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-full bg-hanaya-gold px-4 py-2.5 text-center text-sm font-bold text-hanaya-navy-deep"
          >
            Pedir ahora
          </a>

          <div className="mt-5 space-y-4 border-t border-white/10 pt-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hanaya-gold">
                ¿Cómo pedir?
              </p>
              <ol className="mt-2 list-inside list-decimal space-y-1.5 text-sm text-white/70">
                <li>Explora el menú por categorías.</li>
                <li>Agrega tus platillos con el botón +.</li>
                <li>Revisa tu pedido y llena tus datos.</li>
                <li>Envía tu pedido por WhatsApp y lo confirmamos contigo.</li>
              </ol>
              <p className="mt-2 text-sm text-white/55">
                También puedes pasar directo al local — no solo hacemos
                entregas a domicilio.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hanaya-gold">
                Horario
              </p>
              <p className="mt-1.5 text-sm text-white/70">
                Martes a sábado: 2:00 pm – 10:00 pm
              </p>
              <p className="text-sm text-white/70">
                Domingo y lunes: 1:00 pm – 8:30 pm
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
