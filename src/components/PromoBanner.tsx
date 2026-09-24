import { promo } from "@/data/menu";
import { SakuraBranch } from "@/components/motifs/SakuraBranch";

export function PromoBanner() {
  const now = new Date();
  const validTo = new Date(promo.validTo);
  if (now > validTo) return null;

  const daysLeft = Math.max(
    0,
    Math.ceil((validTo.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );

  return (
    <section className="mx-auto mt-10 max-w-5xl px-4">
      <div className="relative isolate overflow-hidden rounded-3xl border border-hanaya-red-deep/40 bg-hanaya-navy-deep p-6 sm:p-9">
        <div className="mesh-glow mesh-glow--ember" />
        <SakuraBranch className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-hanaya-cream/[0.05] sm:h-52 sm:w-52" />

        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-hanaya-red-deep">
              <span className="pulse-dot relative flex h-1.5 w-1.5">
                <span className="relative block h-1.5 w-1.5 rounded-full bg-hanaya-red-deep" />
              </span>
              {promo.title} · vigente {daysLeft} días más
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight text-hanaya-cream sm:text-4xl md:text-5xl">
              {promo.name}
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-hanaya-cream/40">Precio</p>
            <p className="font-display text-4xl text-hanaya-red-deep sm:text-5xl">
              ${promo.price}
            </p>
          </div>
        </div>

        <ul className="relative mt-6 grid gap-x-8 gap-y-2 border-t border-hanaya-cream/10 pt-6 text-sm text-hanaya-cream/65 sm:grid-cols-2">
          {promo.includes.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-1 h-1 w-1 shrink-0 rounded-full bg-hanaya-red-deep" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
