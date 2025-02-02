"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Link from "next/link";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}) => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current!.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current!.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-11/12 -z-10 translate-y-[100%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <Link
          href="#top"
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
        >
          {/* <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          /> */}
          D V
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 py-3 font-ovo ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:bg-transparent"
          }`}
        >
          <li>
            <Link href="#top">Home</Link>
          </li>
          <li>
            <Link href="#about">About Me</Link>
          </li>
          {/* <li>
            <Link href="#services">Services</Link>
          </li> */}
          <li>
            <Link href="#work">My Work</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon"
              className="w-6"
            />
          </button>

          <Link
            href={
              "http://wa.me/62881037954608?text=Hi%20Pande%20Deva,%20I%20want%20to%20hire%20you!"
            }
            target="_blank"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-ovo dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </Link>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>

        {/* mobile menu sidebar*/}
        <ul
          ref={sideMenuRef}
          className="font-ovo flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <Link onClick={closeMenu} href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="#about">
              About Me
            </Link>
          </li>
          {/* <li>
            <Link onClick={closeMenu} href="#services">
              Services
            </Link>
          </li> */}
          <li>
            <Link onClick={closeMenu} href="#work">
              My Work
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="#contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
