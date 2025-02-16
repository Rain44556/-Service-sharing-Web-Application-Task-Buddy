import React from "react";
import { motion } from "framer-motion";
import about from "../assets/images/about.jpg"

const AboutUs = () => {

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 p-8">

      <motion.div
        className="relative md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={about}
          alt="About Us"
          className="w-full max-w-md rounded-lg shadow-lg"
        />

        <motion.div
          className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-300 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-4 -right-4 w-20 h-20 bg-[rgb(14,87,101)] rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        ></motion.div>
      </motion.div>

 
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold italic">
          <span className="text-teal-800 dark:text-white">EASY </span>
          <span className="text-yellow-500">LEARN</span>
        </h2>
        <h1 className="text-4xl font-bold mt-2">
          Best Education Platform <br /> For Learning
        </h1>
        <p className="dark:text-yellow-200 mt-4 text-teal-800 text-justify text-lg">
          We provide the best learning experience with expert tutors, interactive
          sessions, and hands-on projects. Our platform is designed to help learners
          achieve their goals efficiently and effectively.
        </p>

      </motion.div>
    </div>
  );
};

export default AboutUs;




