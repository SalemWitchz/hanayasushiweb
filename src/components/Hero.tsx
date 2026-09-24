import { WaveDivider } from "@/components/WaveDivider";
import { WaveTexture } from "@/components/motifs/WaveTexture";
import { SakuraBranch } from "@/components/motifs/SakuraBranch";
import { OpenStatusBadge } from "@/components/OpenStatusBadge";
import { ScrollLink } from "@/components/ScrollLink";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hanaya-navy-deep">
      {/* Seigaiha wave texture — the recurring pattern from Hanaya's own promo art */}
      <WaveTexture className="pointer-events-none absolute inset-0 h-full w-full text-hanaya-cream/[0.05]" />

      <div className="mesh-glow mesh-glow--hero" />
      <div className="hero-grain absolute inset-0" />

      {/* Bamboo leaves, bottom-left — echoes the brand's own promo art */}
      <svg
        viewBox="0 0 260 260"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-12 h-56 w-56 text-hanaya-cream/[0.07] sm:h-72 sm:w-72"
      >
        <g fill="currentColor">
          <path d="M20 240 Q 60 150 10 90 Q 90 140 70 220 Q 50 190 20 240Z" />
          <path d="M55 250 Q 100 165 60 100 Q 130 155 100 230 Q 80 200 55 250Z" />
          <path d="M100 255 Q 135 180 105 120 Q 165 170 135 240 Q 118 210 100 255Z" />
        </g>
      </svg>

      {/* Sakura branch motif, top-right — echoes the brand's real promo art */}
      <SakuraBranch className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-hanaya-azure/25 sm:h-80 sm:w-80 md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start px-4 pb-28 pt-24 sm:pt-32 md:pb-36 md:pt-40">
        <OpenStatusBadge />

        <div className="mt-4 flex items-baseline gap-3 text-xs tracking-[0.25em] text-hanaya-azure/90 sm:text-sm sm:tracking-[0.3em]">
          <span
            aria-hidden="true"
            className="shrink-0 font-display text-lg text-hanaya-cream/80"
          >
            花谷
          </span>
          <span>TUXTLA GUTIÉRREZ · 14ª PONIENTE #130</span>
        </div>

        <h1 className="mt-6 font-display text-4xl leading-[1.05] text-hanaya-cream sm:text-5xl md:text-6xl lg:text-7xl">
          Sushi hecho con
          <br />
          <em className="text-hanaya-azure not-italic">calma y cuidado</em>.
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base text-hanaya-cream/75 sm:text-lg">
          Charolas, rollos y ramen preparados al momento en Hanaya Sushi. Ven
          a comer al local, pide para recoger o que te lo llevemos — cerramos
          el pedido por WhatsApp, sin filas ni esperas a ciegas.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ScrollLink
            href="#menu"
            className="btn-lift rounded-full bg-hanaya-azure px-7 py-3 text-sm font-bold tracking-wide text-hanaya-navy-deep shadow-[0_18px_40px_-12px_rgba(79,166,224,0.55)] hover:bg-hanaya-azure-dark"
          >
            Ver el menú
          </ScrollLink>
          <ScrollLink
            href="#menu"
            className="btn-lift rounded-full border border-hanaya-cream/25 px-7 py-3 text-sm font-semibold text-hanaya-cream/90 hover:border-hanaya-azure/60 hover:text-hanaya-azure"
          >
            Armar mi pedido
          </ScrollLink>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-hanaya-cream/10 pt-8 sm:grid-cols-3 sm:gap-10">
          <div>
            <dt className="text-xs uppercase tracking-widest text-hanaya-cream/50">
              Ingredientes
            </dt>
            <dd className="mt-1 font-display text-xl text-hanaya-cream">Frescos, cada día</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-hanaya-cream/50">
              Pedido
            </dt>
            <dd className="mt-1 font-display text-xl text-hanaya-cream">Directo por WhatsApp</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-xs uppercase tracking-widest text-hanaya-cream/50">
              Entrega
            </dt>
            <dd className="mt-1 font-display text-xl text-hanaya-cream">Con mandaditos de confianza</dd>
          </div>
        </dl>
      </div>

      <WaveDivider className="absolute bottom-0 left-0 h-10 w-full text-hanaya-navy sm:h-14" />
    </section>
  );
}
