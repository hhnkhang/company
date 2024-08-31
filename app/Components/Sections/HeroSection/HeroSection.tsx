import React from "react";
import Image from "next/image";
import { navLinks } from "@/app/utils/utils";
import Link from "next/link";
import { arrowRight, search } from "@/app/utils/Icons";

function HeroSection() {
  const arr = Array(4).fill(0);
  return (
    <section className="relative h-full w-full">
      <div className="absolute w-full h-[100vh] top-0 flex justify-evenly z-[-1]">
        {arr.map((_, i) => {
          return (
            <div key={i} className="relative w-[0.5px] h-full bg-2">
              <span className="absolute bottom-0 w-2 h-2 bg-orange-200 left-0 translate-x-[-50%] rounded-full"></span>
            </div>
          );
        })}
      </div>

      <nav
        className="px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadow-none flex justify-between bg-3
      border-b border-colour-1"
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
      </nav>
      <div>
        <div>
          <p className="font-medium text-white">Agency</p>
        </div>
        <h1>dasdasdasdasd</h1>
        <div>
          <Image
            className="rounded-lg"
            src="/images/logo1.png"
            alt="logo"
            width={700}
            height={400}
          />
          <div>
            <div>
              <h3 className="text-white text-2xl font-semibold">drive</h3>
              <p>test test test</p>
              <button>
                <span>explore</span>
                {arrowRight}
                <span className="blob">dsdsd</span>
              </button>
            </div>
            <Link
              href="#services"
              className="hidden mouse-animation lg:flex justify-center items-center"
            >
              {/* <Image
                className="rounded-lg"
                src="/images/logo1.png"
                alt="logo"
                width={700}
                height={400}
              /> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
