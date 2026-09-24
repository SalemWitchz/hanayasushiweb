import { Reveal } from "@/components/Reveal";
import { WaveTexture } from "@/components/motifs/WaveTexture";
import { SakuraBranch } from "@/components/motifs/SakuraBranch";
import { ScrollLink } from "@/components/ScrollLink";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-hanaya-navy-deep">
      <WaveTexture className="pointer-events-none absolute inset-0 h-full w-full text-hanaya-cream/[0.05]" />
      <div className="mesh-glow mesh-glow--hero" />
      <div className="hero-grain absolute inset-0" />

      <SakuraBranch className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rotate-180 text-hanaya-azure/20 sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-hanaya-azure">
            花谷 · Hanaya Sushi
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-hanaya-cream sm:text-5xl">
            ¿Se te antojó? <em className="text-hanaya-azure not-italic">Arma tu charola.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-hanaya-cream/70">
            Elige del menú, deja tus datos y cerramos el pedido por WhatsApp
            en un par de mensajes.
          </p>
          <ScrollLink
            href="#menu"
            className="btn-lift mt-8 inline-block rounded-full bg-hanaya-azure px-8 py-3.5 text-sm font-bold tracking-wide text-hanaya-navy-deep shadow-[0_18px_40px_-12px_rgba(79,166,224,0.55)] hover:bg-hanaya-azure-dark"
          >
            Ver el menú completo
          </ScrollLink>
        </Reveal>
      </div>
    </section>
  );
}
