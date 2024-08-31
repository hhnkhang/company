import React from "react";

function HeroSection() {
  return (
    <section className="relative h-full w-full">
      <div className="absolute w-full h-[100vh] top-0 flex justify-evenly z-[-1]">
        <div className="relative w-[0.5px] h-full bg-orange-500"></div>
      </div>
    </section>
  );
}

export default HeroSection;
