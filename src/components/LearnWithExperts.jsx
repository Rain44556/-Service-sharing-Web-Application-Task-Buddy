import { motion } from "framer-motion";

const LearnWithExperts = () => {
  return (
    <section className="bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)] text-white py-16 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Learn with <span className="text-yellow-300">Experts</span>
        </h2>
        <p className="mb-12">
          Our highly skilled instructors are here to guide you on your educational journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["John Doe", "Sarah Lee", "Mark Smith"].map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
            >
              <img
                src={`https://via.placeholder.com/150?text=${name}`}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">Expert in Mathematics</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnWithExperts;
