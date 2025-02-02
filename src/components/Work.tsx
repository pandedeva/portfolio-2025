import React from "react";
import Title from "./Title";
import { assets, workData } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full container px-[5%] py-10 mx-auto scroll-mt-20"
      id="work"
    >
      <Title
        subHeading="My Portfolio"
        title="My latest work"
        description="Here are some of my recent projects, showcasing my expertise in web development, design, and performance optimization."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 my-10 gap-5 md:grid-cols-2 lg:grid-cols-4 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <Link href={project.link} target="_blank">
              <div className="bg-white w-full rounded-md absolute bottom-0 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300">
                <div>
                  <h2 className="font-semibold text-sm">{project.title}</h2>
                  <p className="text-xs text-gray-700">{project.description}</p>
                </div>

                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-300 transition-all">
                  <Image
                    src={assets.send_icon}
                    alt="send-icon"
                    className="w-5"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      {/* 
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href={"/"}
        className="w-max flex items-center gap-2 justify-center text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lightHover duration-300 dark:text-white dark:hover:bg-darkHover dark:border-white"
      >
        Show more{" "}
        <Image
          src={isDarkMode ? assets.right_arrow : assets.right_arrow_bold}
          alt="right-arrow-bold"
          className="w-4"
        />
      </motion.a> */}
    </motion.div>
  );
};

export default Work;
