import React from "react";
import Title from "../../Title/Title";
import { services } from "@/app/utils/utils";

function ServicesSection() {
  return (
    <section className="mt-[4rem] lg:pt-[8rem] pb-[18rem] mq-sections">
      <Title title="Check Out" label="Our Services" />
      <div className="mt-[5rem] grid grid-cols-1 xl:grid-cols-3 gap-6 md:grid-cols-2">
        {services.map((services, index) => {
          return (
            <div
              key={index}
              className="relative p-10 flex-col text-white  border border-colour-3 rounded-xl"
            >
              <div className="bg-2 self-start w-[5rem] h-[5rem] flex justify-center items-center rounded-xl border border-colour-1 shadow-sm">
                <span className="text-2xl text-gray-200">{services.icon}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
