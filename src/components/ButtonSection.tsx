"use client";

import React from "react";
import { motion } from "motion/react";
import { assets } from "../../assets/assets";
import Image from "next/image";

export const ButtonWhite = ({ description }: { description: string }) => {
  return (
    <>
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        href={"/resume-deva-new.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white"
      >
        {description}
        <Image src={assets.download_icon} alt="" className="w-4" />
      </motion.a>
    </>
  );
};

export const ButtonBlack = ({
  description,
  link,
}: {
  description: string;
  link: string;
}) => {
  return (
    <>
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white dark:bg-transparent"
      >
        {description}
        <Image src={assets.right_arrow_white} alt="" className="w-4" />
      </motion.a>
    </>
  );
};
