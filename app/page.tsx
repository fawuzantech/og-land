import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  );
}