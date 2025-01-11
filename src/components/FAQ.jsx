import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  const dataFAQ = [
    {
      que: "What services does Task Buddy offer?",
      ans: "Task Buddy offers a range of educational skills and management services to help users achieve their learning goals and organize their tasks efficiently.",
    },
    {
      que: "How do I book a service?",
      ans: "Simply click on the 'Book Now' button on the desired service, fill in the form with the required information, and submit it to confirm your booking.",
    },
    {
      que: "Is there a refund policy for purchased services?",
      ans: "Yes, Task Buddy offers a refund policy under specific conditions. Please refer to our terms and conditions page for detailed information.",
    },
    {
      que: "Can I customize a service plan?",
      ans: "Absolutely! When booking a service, you can include special instructions to request a customized plan tailored to your needs.",
    },
    {
      que: "How do I contact customer support?",
      ans: "You can reach our customer support team by emailing support@taskbuddy.com.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 font-bodyFont dark:bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-teal-800 mb-6 font-headingFont  dark:text-yellow-300"
        >Frequently Asked Questions</motion.h2>

        <div className="space-y-4">
          {dataFAQ.map((faq, idx) => (

            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800 font-headingFont">
                  {faq.que}
                </h3>
                <span className="text-gray-600">
                  {selected === idx ? "-" : "+"}
                </span>
              </div>


              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: selected === idx ? "auto" : 0,
                  opacity: selected === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 mt-2">{faq.ans}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
