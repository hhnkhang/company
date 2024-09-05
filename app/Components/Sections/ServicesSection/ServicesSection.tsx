import React from "react";
import Title from "../../Title/Title";
import { services } from "@/app/utils/utils";
import { check } from "@/app/utils/Icons";

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
              <div className="bg-2 self-start w-[5rem] h-[5rem] flex justify-center items-center rounded-xl border border-colour-3 shadow-sm">
                <span className="text-2xl text-gray-200">{services.icon}</span>
              </div>
              <div>
                <h3 className="py-6 font-semibold text-2xl">
                  {services.title}
                </h3>

                {/* LIST */}
                <ul className="pt-6 flex flex-col gap-3">
                  {services.bulletPoints.map((point, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        {check}
                        <span>{point}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <span
                className="absolute top-0 left-0 bg-2 text-3xl font-semibold p-2 rounded-tr-[30px] rounded-bl-[30px] 
                    translate-x-[-50%] translate-y-[-50%]"
              >
                {index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
