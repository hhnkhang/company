import Title from "@/app/Components/Title/Title";
import portfolios from "@/app/utils/portfolios";
import { div } from "framer-motion/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/app/Components/Sections/FooterSection/FooterSection";
interface Props {
  params: {
    id: string;
  };
}
function page({ params }: Props) {
  const { id } = params;
  const portfolio = portfolios.find((portfolio) => portfolio.link === id);
  const imagesLength = portfolio?.details?.images?.length || 0;

  if (!portfolio) {
    return (
      <div className="text-4xl font-bold text-center mt-20">
        Portfolio not found
      </div>
    );
  }

  return (
    <section className="py-[5rem] mq-sections ">
      <div className="flex flex-col gap-8">
        <Title title={portfolio.title} label={portfolio.category} />
        <div className="mt-[5rem] flex justify-center">
          <Image
            src={portfolio.previewImage}
            alt={portfolio.title}
            className="rounded-md object-center"
          />
        </div>

        <div className="mt-[5rem]">
          <p className="uppercase text-gray-300 font-medium ">
            {portfolio.date}
          </p>
          <p className="text-5xl text-gray-200 font-bold ">
            {portfolio.subtitle}
          </p>

          <div className="py-6 grid grid-cols-1 md:grid-cols-[320px_1fr] border-b-2">
            <div>
              <h3>PROPERTY TYPE</h3>
              <p className="text-gray-300">{portfolio.property_type}</p>
            </div>
            <div className="mt-8 md:pl-16 md:border-l-2">
              <h3>PROPERTY DETAILS</h3>
              <div className="mt-2 md:mt-8 flex flex-col gap-4">
                {portfolio.details.paragraphs.map((detail, index) => (
                  <p key={index} className="text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-[320px_1fr] border-b-2">
              <div>
                <h3>PROPERTY LOCATION</h3>
                <ul className="text-gray-300 list-disc list-inside ">
                  {portfolio.locations?.map((location, index) => (
                    <div key={index}>{location}</div>
                  ))}
                </ul>
              </div>
              <div className="md:pl-16 md:border-l-2">
                <h3>PROPERTY FEATURE</h3>
                <ul className="mt-8 flex flex-col gap-4">
                  {portfolio.details.bulletPoints.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-emerald-500 font-semibold uppercase">
                        {bullet.label}
                      </span>{" "}
                      <span className="text-gray-300">{bullet.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Grid layout for images */}
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              {portfolio.details.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={portfolio.title}
                    className="rounded-md object-cover w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </section>
  );
}

export default page;
