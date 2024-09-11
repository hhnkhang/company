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
import Image from "next/image";
import { aboutStats } from "@/app/utils/utils";

function AboutSection() {
  return (
    <section className="relative pb-16 mq-sections">
      <Title title="Who we are" label="Our Story" />
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
        <div className="relative p-5">
          <div className="relative">
            <Image
              src="/images/us.png"
              alt="about us"
              width={600}
              height={400}
              className="w-full rotate-6 rounded-lg hover:rotate-0 transition-all duration-500 ease-in-out"
            />

            <div className="absolute top-0 left-0 w-full h-full -rotate-3  bg-blue-200 z-[-1] rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-orange-300 z-[-1] rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full rotate-3 bg-emerald-300 z-[-2] rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 py-[6rem] grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 border-t-2">
        {aboutStats.map((stat, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 md:gap-4 items-center justify-center text-center"
            >
              <h1
                className={`text-6xl font-extrabold text-emerald-400 ${stat.ff}`}
              >
                {stat.count}
              </h1>
              <p className="text-gray-200 text-2xl">{stat.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutSection;
