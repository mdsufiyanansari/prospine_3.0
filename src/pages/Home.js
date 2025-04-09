import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="max-w-4xl mx-auto h-full flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 h-full p-1 order-2 md:order-1 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-blue-600 mb-4">Medical & Health Care Services</h1>
          <p className="text-lg text-gray-700 mb-6">Your health is our top priority. Schedule an appointment with us today.</p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Read More
            </button>
            <button className="flex items-center text-blue-600 hover:text-blue-700 transition duration-300">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
              </svg>
              Watch Now
            </button>
          </div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 h-screen p-1 order-1 md:order-2 bg-green-500 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-chiropractor-clipart-doctor-with-a-spinal-skeleton-cartoon-vector-png-image_11071920.png" alt="Doctor" className="w-full rounded-lg shadow-md" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 