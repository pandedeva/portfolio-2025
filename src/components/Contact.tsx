"use client";

import React, { useState } from "react";
import Title from "./Title";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    // ! COBA PAKE ALERT NANTI!
    setResult("Sending....");
    const formData = new FormData(e.target);

    const apiKey = process.env.NEXT_PUBLIC_EMAIL_KEY ?? "";

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");

      alert(result);
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full container px-[12%] py-10 mx-auto bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] scroll-mt-20 dark:bg-none"
      id="contact"
    >
      <Title
        subHeading="Connect with me"
        title="Get In Touch"
        description="If you have any questions, want to discuss something, or collaborate, feel free to reach out. I'm here to help and share insights with you!"
      />

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={handleSubmitForm}
        action=""
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        {/* <p className="mt-4">{result}</p> */}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
