import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PersonalizedLearning = () => {
    const successData = 
        [
            { title: "Beginner’s Path", description: "Start with the basics and build a strong foundation." },
            { title: "Intermediate Track", description: "Enhance your skills with real-world projects." },
            { title: "Advanced Level", description: "Master your field with expert-level content." },
          ]

  return (
    <div className="bg-gray-100 py-16 mt-10 font-bodyFont">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-teal-600 mb-8">
        Your Personalized Learning Journey
      </h2>
      <p className="mb-12 text-gray-600">
        Choose a learning path tailored to your goals and interests!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {
        successData.map((journey, index) => (

          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.7 }}
            className="bg-white text-black p-6 shadow-lg rounded-full border border-teal-700">
            <h3 className="text-xl font-bold font-headingFont">{journey.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{journey.description}</p>
            <Link to="/services"><button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
              Explore Path</button></Link>
          </motion.div>

        ))}
      </div>
    </div>
  </div>
  );
};

export default PersonalizedLearning;







