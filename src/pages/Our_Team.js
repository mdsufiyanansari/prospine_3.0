import React from "react";
import { Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TeamHeader = () => {
  const doctors = [
    {
      name: "Dr. Sneha Roy",
      title: "Spine Specialist",
    },
    {
      name: "Dr. Aryan Sharma",
      title: "Orthopedic Consultant",
    },
    {
      name: "Dr. Nisha Verma",
      title: "Pain Management Expert",
    },
    {
      name: "Dr. Rahul Menon",
      title: "Neuro-Spine Surgeon",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center mt-12 bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.spine-nj.com/wp-content/uploads/2022/01/Spine-specialist-team-discussing-1024x598.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-60"></div>

        {/* Emergency Text */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 rotate-[-90deg] text-white font-semibold tracking-widest text-sm">
          24/7 EMERGENCY SERVICE
        </div>

        {/* Social Icons */}
        <div className="fixed right-3 top-1/3 space-y-4 text-white z-20">
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg font-semibold text-white"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="text-cyan-400 px-1">&gt;&gt;</span>
            <span className="text-cyan-400"> Team</span>
          </motion.p>
        </div>

        {/* Call Button */}
        <div className="absolute top-[65vh] right-4 sm:right-10 lg:right-20 mb-4">
          <div className="flex items-center text-base sm:text-xl lg:text-2xl bg-cyan-400 rounded-full shadow-lg py-2 sm:py-4 border-4 sm:border-8 px-4 sm:px-6 space-x-2 sm:space-x-4">
            <div className="bg-white text-cyan-400 p-2 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-white font-semibold">+1 123 456 7890</span>
          </div>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-wrap justify-center items-center mt-8 gap-6 py-7 px-4">
        {doctors.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-auto w-full sm:w-[45%] lg:w-[22%] bg-transparent flex flex-col items-center group"
          >
            <div className="relative w-full h-[380px] overflow-hidden rounded-xl group">
              <img
                src="https://png.pngtree.com/png-clipart/20240406/original/pngtree-beautiful-female-doctor-photo-png-image_14764634.png"
                alt="Doctor"
                className="h-full w-full object-cover"
              />

              {/* ICON WRAPPER */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 sm:gap-10 w-56 sm:w-64 h-16 sm:h-20 bg-cyan-400 text-black font-bold text-xl sm:text-2xl rounded-full items-center justify-center opacity-0 group-hover:opacity-100 z-10 pointer-events-auto transition-opacity duration-300"
              >
                <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                <FaTwitter className="hover:text-sky-400 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
                <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              </motion.div>
            </div>

            <p className="mt-2 text-xl sm:text-2xl font-bold text-blue-950 text-center">
              {doc.name}
              {doc.title && (
                <span className="block text-base sm:text-lg font-semibold text-cyan-400">
                  {doc.title}
                </span>
              )}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Team Details */}
      <div className="h-auto py-8 px-4 flex flex-col items-center gap-6 border-t-2 border-cyan-400">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-950 text-center">
          Our Team
        </h1>
        <p className="text-base sm:text-lg font-semibold text-center text-black max-w-2xl">
          Our expert specialists provide advanced, non-surgical spinal care
          with a patient-first approach. Dedicated to your well-being, we
          ensure personalized treatment for lasting relief.
        </p>

        {[{ name: "Arun Kumar", quote: "Pro Spine's strength lies in the unity of our team..." },
          { name: "Mahender Naidu Crureez", quote: "Together, we go further. At Pro Spine..." },
          { name: "Ranjan Kumar", quote: "Pro Spine's success is built on the strength of our collaborative spirit..." },
          { name: "Dr. Pranav Kumar - Consultant Physical Therapist", quote: "Great things happen when we work together..." }
        ].map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="w-full md:w-[90%] lg:w-[40%] flex flex-col sm:flex-row items-center border-b-2 border-cyan-400 rounded-b-xl p-4 gap-4"
          >
            <div className="w-full sm:w-[30%] h-52 sm:h-full">
              <img
                src="https://t4.ftcdn.net/jpg/06/02/25/57/360_F_602255772_9u1hkJnD9tAyqnrL89XYtbM9RykuDxnf.jpg"
                alt=""
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="w-full sm:w-[70%]">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-950">
                {member.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-black">
                {member.quote}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default TeamHeader;
