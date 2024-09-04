"use client";
import React from "react";
import Image from "next/image";
import { navLinks } from "@/app/utils/utils";
import Link from "next/link";
import { arrowRight, email, phone, search } from "@/app/utils/Icons";
import { motion } from "framer-motion";

function HeroSection() {
  const arr = Array(4).fill(0);
  const [navOpen, setNavOpen] = React.useState(false);

  const navX = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };
  return (
    <section className="relative h-full w-full">
      <div className="absolute w-full h-[100vh] top-0 flex justify-evenly z-[-1]">
        {arr.map((_, i) => {
          return (
            <div key={i} className="relative w-[0.5px] h-full bg-2">
              <span className="absolute bottom-0 w-2 h-2 bg-gray-500 left-0 translate-x-[-50%] rounded-full"></span>
            </div>
          );
        })}
      </div>

      <nav
        className="px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadow-none flex justify-between bg-3
      border-b border-colour-1 mq-sections items-center"
      >
        <div className="flex items-center gap-2 py-5 lg:py-0">
          <Image src="/images/logo1.png" alt="logo" width={100} height={100} />
          <h1> ENKAY'S</h1>
        </div>
        <ul className="hidden lg:flex items-center gap-9 text-white font-medium">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.url} className="p-4">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="hidden lg:inline-block py-6 px-10 text-2xl text-gray-400 border-x border-colour1 hover:bg-2 transition-all duration-200 ease-in-out">
          {search}
        </button>
        {/* nemu for small scr */}
        <div
          className="lg:hidden  flex flex-col gap-1 cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className="w-8 h-1 bg-emerald-500 rounded-md"></div>
          <div className="w-8 h-1  bg-emerald-500  rounded-md"></div>
          <div className="w-8 h-1  bg-emerald-500  rounded-md"></div>
        </div>
      </nav>
      <div className="mt-[7rem]  md:mt-[7rem] px-[18rem] mq-sections">
        <div className="gradient-green mb-4 py-2 rounded-tl-[20px] rounded-br-[20px] border border-colour-1 ">
          <p className="font-medium text-white">
            ENKAY'S - Your trusted Real Estate partner
          </p>
        </div>
        <h1 className="text-3xl md:text-6xl">
          Find the perfect home for sale in your area
        </h1>
        <div className="mt-6 flex flex-col gap-10 lg:flex-row">
          <Image
            className="rounded-lg mt-4 object-cover"
            src="/images/house1.jpg"
            alt="house1"
            width={700}
            height={800}
          />
          <div className="lg:mt-12 flex flex-col justify-between  text-gray-300">
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="text-white text-2xl font-semibold">
                Re-inventing the Art of Real Estate
              </h3>
              <p>
                ENKAY'S Real Estate Group is #1 in the Santa Barbara MLS for
                transactions with over $1 Billion in sales. For nearly two
                decades ENKAY'S has been the top-producing real estate team in
                Montecito and the greater Santa Barbara region
              </p>
              <div className=" relative cta-button self-start">
                <Link href="/services" className="flex items-center gap-4">
                  <span>Explore more </span>
                  {arrowRight}
                  <span className="blob "></span>
                </Link>
              </div>
            </div>
            <Link
              href="/services"
              className="hidden mouse-animation lg:flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                src="/images/long_down.svg"
                alt="arrow"
                width={10}
                height={10}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* nav for smaller scr */}

      {navOpen && (
        <motion.div
          className="px-8 fixed z-50 flex flex-col gap-8 left-0 top-0 w-[18rem] h-[100vh] bg-2 lg:hidden 
        "
          initial="hidden"
          animate={navOpen ? "visible" : "hidden"}
          transition={{ duration: 0.3 }}
          variants={navX}
        >
          <div className="flex items-center gap-2 py-5 lg:py-0">
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={100}
              height={100}
            />
            <h1> ENKAY'S</h1>
          </div>
          <nav className="bg-4 px-4 py-4 rounded-md">
            <ul className="flex flex-col gap-4 text-white font-medium">
              {navLinks.map((link, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className="inline-block w-full hover:text-emerald-500 transition-all duration-300 ease-in-out"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-white font-medium">
              {phone}0383349001
            </p>
            <p className="flex items-center gap-2 text-white font-medium break-all">
              {email}nguyenkhang.hhnkhang@gmail.com
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default HeroSection;
