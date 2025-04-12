import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative min-h-screen mt-16 overflow-hidden bg-white flex items-center justify-center">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://www.eurospine.org/fileadmin/_processed_/5/5/csm_EUROSPINE-JSSR_travelling_fellowship_programme_2025TYPO_3_-_Hero_Image_216_62f38b6a1f.png')] bg-cover bg-center opacity-25 z-0 w-full"></div>

      {/* White Overlay with blur for softness */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 "
        >
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-500 text-transparent bg-clip-text mt-1">
              Medical & Health Care
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-cyan-300 to-white text-transparent bg-clip-text mt-1">
              Services
            </h2>
          </div>

          <p className="text-xl text-gray-800">
            Get top-notch healthcare solutions tailored to your needs. Your health is our mission—book your appointment now.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Glassy Read More Button */}
            <button className="relative overflow-hidden bg-gradient-to-r from-cyan-400 to-cyan-300 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 group hover:brightness-110">
              <span className="relative z-10">Read More</span>
              <span className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 blur-md transition duration-700 transform group-hover:translate-x-full translate-x-[-100%] rotate-12"></span>
            </button>

            {/* Watch Now Button */}
            <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition">
              <PlayCircle className="w-6 h-6" />
              Watch Now
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://medserg.com/wp-content/uploads/2022/05/cs.png"
            className="w-full max-w-md md:max-w-3xl object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
