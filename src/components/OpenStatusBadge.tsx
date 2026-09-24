"use client";

import { useEffect, useState } from "react";

// Martes a sábado: 2:00 pm – 10:00 pm · Domingo y lunes: 1:00 pm – 8:30 pm
function scheduleFor(day: number) {
  if (day >= 2 && day <= 6) return { open: 14 * 60, close: 22 * 60 };
  return { open: 13 * 60, close: 20 * 60 + 30 };
}

function formatMinutes(totalMinutes: number) {
  const h24 = Math.floor(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;
  const period = h24 >= 12 ? "pm" : "am";
  const h12 = h24 % 12 || 12;
  return m === 0 ? `${h12}:00 ${period}` : `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function getStatus(now: Date) {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = scheduleFor(day);

  if (minutes >= today.open && minutes < today.close) {
    return { open: true, label: `Cierra a las ${formatMinutes(today.close)}` };
  }
  if (minutes < today.open) {
    return { open: false, label: `Abre a las ${formatMinutes(today.open)}` };
  }
  const tomorrow = scheduleFor((day + 1) % 7);
  return { open: false, label: `Abre mañana a las ${formatMinutes(tomorrow.open)}` };
}

export function OpenStatusBadge() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => setStatus(getStatus(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (status === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${
        status.open
          ? "border-emerald-400/35 text-emerald-300"
          : "border-hanaya-cream/20 text-hanaya-cream/50"
      }`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${status.open ? "bg-emerald-400" : "bg-hanaya-cream/40"}`} />
      {status.open ? "Abierto ahora" : "Cerrado ahora"}
      <span aria-hidden="true" className="opacity-50">
        ·
      </span>
      {status.label}
    </span>
  );
}
