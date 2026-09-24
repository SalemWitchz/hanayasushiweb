import { WaveDivider } from "@/components/WaveDivider";
import { SakuraBranch } from "@/components/motifs/SakuraBranch";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-hanaya-navy-dark pt-10">
      <WaveDivider className="absolute -top-10 left-0 h-10 w-full text-hanaya-navy-dark sm:-top-14 sm:h-14" />
      <SakuraBranch className="pointer-events-none absolute -right-12 -top-6 h-44 w-44 rotate-90 text-hanaya-cream/[0.04] sm:h-56 sm:w-56" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="text-xl font-black tracking-wide text-hanaya-cream">
            HANA<span className="text-hanaya-red">Y</span>A
          </span>
          <div className="text-xs tracking-[0.3em] text-white/50">SUSHI</div>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Calle 14 Poniente #130, entre Cvln. Tapachula y Blvd. Belisario
            Domínguez, col. Moctezuma, Tuxtla Gutiérrez, Chiapas.
          </p>
          <p className="mt-2 text-sm text-white/60">
            Visítanos, pide para recoger o para que te lo llevemos — cerramos
            el pedido por WhatsApp.
          </p>
        </div>

        <div className="text-sm text-white/60">
          <p className="text-xs uppercase tracking-widest text-hanaya-gold">
            Horario
          </p>
          <p className="mt-2">Martes a sábado: 2:00 pm – 10:00 pm</p>
          <p>Domingo y lunes: 1:00 pm – 8:30 pm</p>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Hanaya Sushi. Todos los derechos reservados.
      </div>
    </footer>
  );
}
