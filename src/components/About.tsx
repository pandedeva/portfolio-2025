import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "../../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full container px-[12%] py-10 mx-auto scroll-mt-20"
      id="about"
    >
      <Title subHeading="Introduction" title="About Me" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.profile_about_deva}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="mb-10 max-w-2xl font-ovo">
            Hi, I’m Made Pande Deva Anugrah Wijaya. I am 24 years old and have a
            background in Information Systems from ITB STIKOM Bali. I am
            passionate about coding and continuously learning new technologies.
            I have strong computer skills and experience in coding, debugging,
            and fixing bugs on websites. Additionally, I am a proactive and
            hardworking individual who can work both independently and as part
            of a team.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map((item, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? item.iconDark : item.icon}
                  alt={item.title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description}
                </p>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description2}
                </p>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description3}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 font-ovo dark:text-white/80"
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-x-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
              >
                <Image src={item} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
