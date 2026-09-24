import type { CartItem } from "@/types/order";
import type { OrderDetails } from "@/types/order";

export const HANAYA_WHATSAPP_NUMBER = "5219611120608";

export function buildWhatsAppMessage(items: CartItem[], order: OrderDetails) {
  const lines: string[] = [];
  lines.push("Pedido Hanaya Sushi");
  lines.push("");
  for (const item of items) {
    lines.push(`x${item.quantity} ${item.name} — $${item.price * item.quantity}`);
  }
  lines.push("");
  lines.push(`Total: $${items.reduce((sum, i) => sum + i.price * i.quantity, 0)}`);
  lines.push("");
  lines.push(`Nombre: ${order.name}`);
  lines.push(`Dirección con referencias: ${order.address}`);
  lines.push(`Teléfono: ${order.phone}`);
  lines.push(`Forma de pago: ${order.paymentMethod === "efectivo" ? "Efectivo" : "Transferencia"}`);

  return encodeURIComponent(lines.join("\n"));
}

export function buildWhatsAppLink(items: CartItem[], order: OrderDetails) {
  const message = buildWhatsAppMessage(items, order);
  return `https://wa.me/${HANAYA_WHATSAPP_NUMBER}?text=${message}`;
}
