import Image from "next/image";
import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </main>
  );
}
