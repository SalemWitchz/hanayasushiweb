import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ValueProps } from "@/components/ValueProps";
import { PromoBanner } from "@/components/PromoBanner";
import { Shop } from "@/components/Shop";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingOrderButton } from "@/components/FloatingOrderButton";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <Marquee />
      <ValueProps />
      <div id="menu">
        <PromoBanner />
        <Shop />
      </div>
      <FinalCTA />
      <Footer />
      <FloatingOrderButton />
    </div>
  );
}
