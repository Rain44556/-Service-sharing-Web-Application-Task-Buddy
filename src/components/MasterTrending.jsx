import { motion } from "framer-motion";
import { GrPersonalComputer } from "react-icons/gr";
import { CgIfDesign } from "react-icons/cg";
import { FcDataProtection } from "react-icons/fc";

const MasterTrending = () => {

    const trending = [
        { name: "Web Development", icon: <GrPersonalComputer />, description: "Build websites from scratch with modern tools." },
        { name: "Graphic Design", icon: <CgIfDesign />, description: "Create stunning visuals with creative tools." },
        { name: "Data Science", icon: <FcDataProtection />, description: "Master data analysis and visualization." },
      ]
  return (
    <section className="font-bodyFont mt-10 px-8 bg-gradient-to-r from-[rgb(14,87,101)] to-[rgb(14,87,100)] text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Master <span className="text-yellow-300">Trending Skills</span>
        </h2>
        <p className="mb-12">
          Learn in-demand skills that shape your future with expert instructors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {
        trending.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
            >
              <p className="text-center text-pink-500 w-10 mx-auto text-4xl">{skill.icon}</p>
              <h3 className="text-xl font-headingFont font-bold mt-4">{skill.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
            </motion.div>
          ))
      }
        </div>
      </div>
    </section>
  );
};

export default MasterTrending

