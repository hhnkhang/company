import Image from "next/image";
import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection/>
    </main>
  );
}
