import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";
import { ButtonBlack, ButtonWhite } from "./ButtonSection";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 container">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Image
          src={assets.profile_deva}
          alt="profile"
          className="rounded-full w-32"
        />
      </motion.div>

      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
      >
        Hi! I`m Pande Deva{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        className=" text-3xl sm:text-6xl lg:text-[66px] font-ovo"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
      >
        Frontend Web Developer based in Indonesia
      </motion.h1>
      <motion.p
        className="mx-auto font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
        }}
      >
        Frontend Web Developer from Indonesia, focused on building responsive
        and user-friendly websites.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <ButtonBlack
          description="Contact Me"
          link="http://wa.me/62881037954608?text=Hi%20Pande%20Deva,%20I%20want%20to%20hire%20you!"
        />

        <ButtonWhite description="My Resume" />
      </div>
    </div>
  );
};

export default Header;
