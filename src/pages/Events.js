import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const HeroSection = () => {
  return (
    <>
      <div
        className="relative w-full h-[70vh] bg-cover bg-center mt-12 bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5be1ef7889c1721eb4ad846c/365a3355-a1ae-4552-9748-6489d34bce87/RKS_7543.JPG')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950 opacity-60"></div>

        {/* Emergency Text */}
        <motion.div
          className="absolute top-1/2 left-2 -translate-y-1/2 rotate-[-90deg] text-white font-semibold tracking-widest text-sm hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          24/7 EMERGENCY SERVICE
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="fixed right-3 top-1/3 space-y-4 text-black z-20 hidden sm:flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        </motion.div>

        {/* Center Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center space-y-2 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">Events</h1>
          <p className="text-sm sm:text-lg font-semibold text-white">
            <Link to="/" className="hover:underline">Home</Link>{" "}
            <span className="text-cyan-400 px-1">&gt;&gt;</span>{" "}
            <span className="text-cyan-400">Team</span>
          </p>
        </motion.div>

        {/* Call Button */}
        <motion.div
          className="absolute bottom-[-40px] right-4 sm:right-10 lg:right-20"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <div className="flex items-center text-base sm:text-xl lg:text-2xl bg-cyan-400 rounded-full shadow-lg py-2 sm:py-4 border-4 sm:border-8 px-4 sm:px-6 space-x-2 sm:space-x-4">
            <div className="bg-white text-cyan-400 p-2 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-white font-semibold">+1 123 456 7890</span>
          </div>
        </motion.div>
      </div>

      {/* Events Section */}
      <div className="py-10 px-4 sm:px-10 lg:px-36 flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-500 text-center">
          Our Spine Health Awareness Events
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-semibold text-center text-black">
          Discover Pro Spine's journey through educational and interactive events focused on spine health, wellness,
          and recovery. Explore insights and practical strategies shared in past events, and stay tuned for announcements
          of upcoming ones. Check back frequently to stay updated!
        </p>

        <div className="w-full flex md:mt-8 mt-4 items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">

            {/* Left Card */}
            <motion.div
              className="rounded-xl p-6 flex flex-col md:flex-row justify-between items-start gap-6 border-r-4 border-cyan-400 shadow-lg hover:translate-x-4 ease-in-out duration-500"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-2">Clinic Inside</h2>
                <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                  Journey through educational and interactive events focused on spine health, wellness, and recovery.
                  Explore insights and practical.
                </p>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-cyan-400">
                  Date - <span className="text-black">2025-03-17</span>
                </p>
              </div>
              <img
                src="https://varungroups.com/wp-content/uploads/2023/01/Varun-Groups-Our-Facilities-MODULAR-OT.jpg"
                alt="Clinic Inside"
                className="w-full sm:w-52 h-36 object-cover rounded-md hover:scale-105 ease-in-out duration-500"
              />
            </motion.div>

            {/* Right Card */}
            <motion.div
              className="rounded-xl p-6 flex flex-col md:flex-row justify-between items-start gap-6 border-r-4 border-cyan-500 shadow-lg hover:translate-x-4 ease-in-out duration-500"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-2">Test2</h2>
                <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                  Discover Pro Spine's journey through educational and interactive events focused on spine health,
                  wellness, and recovery. Explore insights and practical strategies shared in past events, and stay
                  tuned for announcements of upcoming ones. Check back frequently to stay updated!
                </p>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-cyan-400">
                  Date - <span className="text-black">2025-03-19</span>
                </p>
              </div>
              <img
                src="https://www.shutterstock.com/image-vector/surgery-room-interior-group-surgeons-260nw-2216019681.jpg"
                alt="Spine Machine"
                className="w-full sm:w-52 h-36 object-contain bg-white rounded-md hover:scale-105 ease-in-out duration-500"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
