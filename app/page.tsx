import Hero from "@/components/sections/Hero";
import EquipmentPage from "@/app/equipment/page";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <EquipmentPage/>
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  );
}