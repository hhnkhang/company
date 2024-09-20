import Image from "next/image";
import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";
import ScrollingText from "./Components/ScrollingText/ScrollingText";
import PortfolioSection from "./Components/Sections/PortfolioSection/PortfolioSection";
import FaqSection from "./Components/FaqSection/FaqSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <div className="py-10 border-y-2">
        <ScrollingText direction="left" />
        <ScrollingText />
      </div>
      <PortfolioSection />
      <FaqSection />
    </main>
  );
}
