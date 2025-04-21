import React from 'react';
import { motion } from 'framer-motion';
import { MdVideoCall } from 'react-icons/md';
import { FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};


const About_home = () => {
  return (
    <>
         {/* About Us Section */}
         <section className="bg-white py-16 border-b px-6 md:px-20 flex flex-col lg:flex-row items-center justify-center gap-10">
        <motion.div
          className="relative w-full h-[500px] max-w-md"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Main Doctor"
            className="rounded-3xl object-cover shadow-xl h-full"
          />
          <div className="hidden lg:flex absolute w-[300px] top-40 h-[300px] -left-48 bg-white shadow-xl rounded-3xl overflow-hidden">
            <div className="w-[10%] text-white text-xl font-bold px-2 bg-blue-950">
              <h1 className="-rotate-90 md:mt-28">SUPPORT</h1>
              <h1 className="-rotate-90 md:mt-6">CALL</h1>
              <h1 className="-rotate-90 md:mt-10">VIDEO</h1>
            </div>
            <div className="p-3 h-full w-[90%]">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Doctor"
                className="h-[90%] w-full rounded-lg object-cover"
              />
              <div className="flex justify-around items-center mt-2">
                <button className="bg-gray-100 p-1 rounded-full text-red-500">
                  <MdVideoCall size={20} />
                </button>
                <button className="bg-gray-100 p-1 rounded-full text-green-500">
                  <FaPhoneAlt size={18} />
                </button>
                <button className="bg-gray-100 p-1 rounded-full text-blue-500">
                  <FaPhoneAlt size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center gap-2 text-cyan-600 font-semibold mb-3">
            <HiShieldCheck size={20} />
            <span>Best Orthopaedics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-950 leading-tight mb-4">
            Meet Dr. Pranav Kumar<br />
            <span className="text-3xl font-semibold text-black">Consultant Physical Therapist</span><br />
            <span className="text-3xl font-semibold text-cyan-500">Spine Rehabilitation Specialist</span>
          </h2>
          <p className="text-gray-600 font-semibold text-base md:text-lg mb-6">
            Bachelor in Physical Therapy: MMAHE, MANIPAL. Master in Physical Therapy (Orthopaedics). MBA: Human Resources. Certified Health Promotion: NHFW, Govt. of India. Certified Manipulation Therapist: MTFI (2004). Certified Fitness Instructor: IAFT (2015). Certified Pelvic Floor Rehab Therapist: RSHSR (2024).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-black font-semibold mb-6">
            {[
              "Research and Development",
              "Advanced Imaging Services",
              "Rehabilitation Services",
              "Comprehensive Specialties",
              "Emergency Services",
              "Intensive Care Units (ICUs)",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-cyan-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/about_details">
              <button className="flex text-xl font-bold items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-full shadow-md hover:bg-cyan-600 transition">
                About us →
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default About_home