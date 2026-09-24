import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanaya Sushi | Pedidos en línea",
  description:
    "Menú y pedidos en línea de Hanaya Sushi, 14ª poniente #130, col. Moctezuma, Tuxtla Gutiérrez.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${shipporiMincho.variable} ${zenKaku.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-hanaya-navy text-white">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
