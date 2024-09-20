import { facebook, instagram, linkedin, messenger, x } from "@/app/utils/Icons";
import { footerNavLinks } from "@/app/utils/utils";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <footer className="relative mt-[5rem] flex md:border-2 mx-6 lg:mx-[4rem] md:mb-14 rounded-2xl">
      <div className="relative mx-0 flex flex-col xl:mx-[14rem] md:mx-8 lg:mx-16 md:flex-row z-50">
        <div className="md:pt-[5rem] pb-16 md:w-[350px] flex flex-col gap-4 pr-8 md:border-r-2 sm:w-full">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={100}
              height={100}
            />
            <h1 className="text-4xl text-white font-bold uppercase">ENKAY'S</h1>
          </div>
          <p>
            {" "}
            ENKAY'S commitment to fair housing laws, standard operating
            procedures, and reasonable accommodations.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              className="bg-2 w-[3rem] h-[3rem] rounded-lg text-gray-300 text-2xl flex items-center justify-center border-2 border-colour-2 shadow-sm cursor-pointer"
            >
              {instagram}
            </a>
            <a
              href="#"
              className="bg-2 w-[3rem] h-[3rem] text-gray-300 text-2xl flex justify-center items-center rounded-lg border-2 border-colour-2 shadow-sm cursor-pointer"
            >
              {facebook}
            </a>
            <a
              href="#"
              className="bg-2 w-[3rem] h-[3rem] text-gray-300 text-2xl flex justify-center items-center rounded-lg border-2 border-colour-2 shadow-sm cursor-pointer"
            >
              {linkedin}
            </a>
            <a
              href="#"
              className="bg-2 w-[3rem] h-[3rem] text-gray-300 text-2xl flex justify-center items-center rounded-lg border-2 border-colour-2 shadow-sm cursor-pointer"
            >
              {messenger}
            </a>
            <a
              href="#"
              className="bg-2 w-[3rem] h-[3rem] text-gray-300 text-2xl flex justify-center items-center rounded-lg border-2 border-colour-2 shadow-sm cursor-pointer"
            >
              {x}
            </a>
          </div>
        </div>
        <div className="md:pt-[5rem] flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          {footerNavLinks.map((navLink, index) => {
            return (
              <div key={index} className="md:pl-14 xl:pl-14 w-full">
                <h2 className="text-2xl text-white font-bold">
                  {navLink.title}
                </h2>
                <ul className="">
                  {navLink.links.map((link, index) => {
                    return (
                      <li key={index} className="mt-2">
                        <Link
                          href={link.name}
                          className="text-gray-300 hover:text-white"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {index === 2 && (
                  <form className="w-full">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full mt-4 p-2 bg-2 text-gray-300 rounded-md"
                    />
                  </form>
                )}
              </div>
            );
          })}

          <div className="mt-14 md:ml-14 py-4 text-gray-300 col-span-full text-center border-t-2">
            <p>
              Copyright &copy; {new Date().getFullYear()}
              <span className="cursor-pointer"> </span> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
