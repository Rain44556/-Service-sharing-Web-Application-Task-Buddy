import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const aboutData = [
    {
      title: "Easy Service Search",
      description:
        "Quickly find the right service providers based on your needs.",
    },
    {
      title: "Seamless Booking & Transactions",
      description: "Book, purchase, and manage services effortlessly.",
    },
    {
      title: "Flexible Service Management",
      description: "Easily add, or remove services anytime.",
    },
    {
      title: "Status Updates.",
      description:
        "Stay informed by tracking the status of your booked services.",
    },
  ];
  return (
    <section className="dark:text-gray-200 py-12 px-6 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold dark:text-[#FFC107] mb-4">
          About Us
        </h2>
        <p className="text-lg mb-6">
          Welcome to{" "}
          <span className="font-semibold dark:text-[#FFC107]">Task Buddy</span>{" "}
          – your ultimate service-sharing platform! Our mission is to make
          finding and offering services effortless by connecting people in a
          seamless and efficient way.
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              className="shadow-md dark:border-[rgb(14,87,101)] dark:bg-[#16324F] p-6 rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold dark:text-[#00C0FF] text-gray-800">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
