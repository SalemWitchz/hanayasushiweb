import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { SakuraBranch } from "@/components/motifs/SakuraBranch";

const PILLARS = [
  {
    n: "01",
    title: "Confianza de barrio",
    body: "Llevamos años tomando pedidos por WhatsApp y Facebook en la 14ª poniente. Ahora ese mismo trato pasa a un catálogo en línea, sin perder el contacto directo.",
  },
  {
    n: "02",
    title: "Frescura al momento",
    body: "Cada charola y rollo se arma cuando llega tu pedido, no antes. Lo que ves en el menú es lo que se prepara para ti.",
  },
  {
    n: "03",
    title: "Reparto responsable",
    body: "Trabajamos con mandaditos de la zona en lugar de una flota propia: menos coordinación innecesaria, más movimiento para gente que ya conoce el rumbo.",
  },
];

export function ValueProps() {
  return (
    <section
      className="relative isolate overflow-hidden bg-hanaya-navy-dark"
      aria-labelledby="valores-heading"
    >
      <div className="mesh-glow mesh-glow--subtle" />
      <SakuraBranch className="pointer-events-none absolute -left-14 -top-14 h-52 w-52 -scale-x-100 text-hanaya-cream/[0.05] sm:h-64 sm:w-64" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-hanaya-gold">
                Por qué Hanaya
              </p>
              <h2
                id="valores-heading"
                className="mt-3 max-w-xl scroll-mt-24 font-display text-3xl leading-tight text-hanaya-cream sm:text-4xl md:text-5xl"
              >
                Comida japonesa con <em className="text-hanaya-gold not-italic">cuidado de negocio de barrio</em>.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-hanaya-cream/55">
              Nada de cadena impersonal: seguimos siendo el mismo negocio de
              la 14ª poniente — ven a comer al local o pide para que te lo
              llevemos, como prefieras.
            </p>
          </div>
        </Reveal>

        <div className="relative -mx-4 mt-14">
          <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PILLARS.map((pillar, i) => (
              <li key={pillar.title} className="w-[280px] shrink-0 snap-start sm:w-[320px]">
                <Reveal delay={i * 120}>
                  <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-hanaya-cream/10 bg-hanaya-navy-card p-6 transition-colors hover:border-hanaya-gold/40">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 -top-6 font-display text-8xl text-hanaya-cream/[0.04] transition-colors group-hover:text-hanaya-gold/[0.08]"
                    >
                      {pillar.n}
                    </span>

                    <h3 className="relative mt-2 font-display text-lg text-hanaya-cream">
                      {pillar.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-hanaya-cream/60">
                      {pillar.body}
                    </p>

                    <span className="relative mt-5 block h-px w-10 bg-gradient-to-r from-hanaya-gold to-transparent transition-all duration-500 group-hover:w-16" />
                  </TiltCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
