import React from "react";
import Title from "../../Title/Title";
import {
  arrowRight,
  building,
  check,
  friend,
  globe,
  money,
} from "@/app/utils/Icons";
import Button from "../../Buttons/Button";

function AboutSection() {
  return (
    <section className="pt-[5rem] pb-16 mq-sections">
      <Title title="WHO WE ARE" label="Our Story" />
      <div className="mt-[5rem] grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl">
            Only one network of agents represents the longest standing
            tastemaker in the world.
          </h1>
          <p className="py-8 text-gray-300">
            In the spirit of innovation, an exceptional luxury real estate
            company bearing the ENKAY'S name was launched in 1976. Beyond the
            beautiful properties and the personal touch of our agents, only one
            brand can deliver a lifestyle that caters to you. With a network of
            homes for sale worldwide, our website lets you search property
            listings globally, and includes a large inventory of luxury homes
            for sale, including houses, condos, townhomes, villas, and more.
          </p>
          <ul className="flex flex-col gap-4 text-gray-200">
            <li className="flex text-[1.25rem] items-center gap-3 font-bold">
              <span className="w-8 h-8 flex items-center justify-center  border-2 border-colour-3 rounded-md ">
                {building}
              </span>
              <span className="text-emerald-500 text-4xl">1,110</span>
              <span> OFFICES WORLDWIDE</span>
            </li>

            <li className="flex text-[1.25rem] items-center gap-3 font-bold">
              <span className="w-8 h-8 flex items-center justify-center border-2 border-colour-3 rounded-md">
                {globe}
              </span>
              <span className="text-emerald-500 text-4xl">83</span>
              <span> COUNTRIES & TERRITORIES</span>
            </li>

            <li className="flex text-[1.25rem] items-center gap-3 font-bold">
              <span className="w-8 h-8 flex items-center justify-center border-2 border-colour-3 rounded-md">
                {friend}
              </span>
              <span className="text-emerald-500 text-4xl">26,400</span>
              <span> SALES ASSOCIATES</span>
            </li>

            <li className="flex text-[1.25rem] items-center gap-3 font-bold">
              <span className="w-8 h-8 flex items-center justify-center  border-2 border-colour-3 rounded-md ">
                {money}
              </span>
              <span className="text-emerald-500 text-4xl">143 Billion</span>
              <span> ANNUAL SALES (USD)</span>
            </li>
          </ul>
          <div className="mt-8">
            <Button label="SEE DETAILS" icon={arrowRight} />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default AboutSection;
