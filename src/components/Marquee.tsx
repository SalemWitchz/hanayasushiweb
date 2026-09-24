const ITEMS = [
  "Charolas de sushi",
  "Rollos al momento",
  "Ramen de mariscos",
  "Alitas & boneless",
  "Pedido por WhatsApp",
  "14ª poniente, Tuxtla Gutiérrez",
];

export function Marquee() {
  return (
    <div className="marquee border-y border-hanaya-gold/15 bg-hanaya-navy py-4">
      <div className="marquee-track">
        {[0, 1].map((rep) => (
          <div key={rep} aria-hidden={rep === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-3 font-display text-sm text-hanaya-gold/80 sm:text-base"
              >
                {item}
                <span aria-hidden="true" className="text-hanaya-cream/25">
                  ・
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
