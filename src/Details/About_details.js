import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-gray-100 to-white">
      <motion.div
        className="bg-white p-8 rounded-3xl shadow-xl max-w-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-cyan-500 leading-tight mb-4">
            About Details
          </h2>
          <p className="text-gray-600 font-semibold text-base mb-6">
            Pro Spine is a pioneering initiative in India dedicated to providing
            advanced, non-surgical interventions for spinal conditions.
            Combining cutting-edge technology with expert manual therapy
            techniques, Pro Spine aims to revolutionize the way spinal disorders
            are treated, emphasizing effective, non-invasive solutions. Our
            mission is to enhance patients' quality of life by offering
            evidence-based, non-surgical approaches to spinal care. At Pro
            Spine, we are committed to delivering exceptional care that
            integrates technology, expertise, and compassion.
          </p>

          {/* OK Button */}
          <button
            onClick={() => navigate(-1)} // This will navigate back to the previous page
            className="bg-cyan-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            OK
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutDetailsPage;
