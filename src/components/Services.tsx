import React from "react";
import Title from "./Title";
import { serviceData } from "../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full container px-[12%] pt-10 pb-56 mx-auto scroll-mt-52"
    >
      <Title
        description="I build fast, responsive, and user-friendly websites, ensuring top-notch performance and seamless functionality."
        subHeading="What I Offer"
        title="My Services"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 rounded-lg px-8 py-12  hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 dark:hover:bg-darkHover dark:hover:shadow-white"
            key={index}
          >
            <Image src={item.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {item.description}
            </p>
            <Link
              href={item.link}
              className="flex items-center gap-2 text-sm mt-5"
            ></Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
