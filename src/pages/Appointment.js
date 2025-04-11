import React from "react";
import bgImage from "../Images/appointmentbg.png";
import sideImage from "../Images/doctors.png";
import { motion } from "framer-motion";

const Appointment = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div
        className="relative bg-blue-900 text-white py-40 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold">Appointment</h1>
          <p className="mt-2 text-lg">
            <span className="text-cyan-500 font-semibold">Home</span>
            &gt;&gt; Appointment
          </p>
        </div>

        {/* 📞 Call Card Section */}
        <motion.div
          className="absolute right-64 bottom-[-50px] z-30 cursor-pointer hover:border-red-500"
          whileHover={{
            scale: 1.1,
            opacity: 0.9,
          }}
          transition={{ duration: 0.4, ease: "circInOut" }}
        >
          <div className="flex items-center bg-white px-4 py-4 rounded-full">
            <div className="flex items-center bg-cyan-500 text-white px-7 py-3 rounded-full shadow-lg">
              {/* Icon */}
              <div className="bg-white text-cyan-500 p-4 rounded-3xl mr-3 shadow-md">
                
                <i className="fas fa-phone fa-shake fa-2x"></i>
                
              </div>

              {/* Phone Number */}
              <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                +91 88779 11266
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://clinicmaster.wprdx.com/medical/wp-content/uploads/2024/08/bg5.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Doctors Image */}
          <div className="flex-1">
            <img src={sideImage} alt="Doctors" className="w-full" />
          </div>

          {/* Appointment Form */}
          <div className="flex-1 bg-white shadow-xl rounded-lg p-8 ">
            <h2 className="text-2xl font-bold mb-2">
              Book An <span className="text-cyan-500">Appointment</span>
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              We will send you a confirmation within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded w-full"
                />
                <select className="p-3 border border-gray-300 rounded w-full">
                  <option>Select Service</option>
                  <option>Consultation</option>
                  <option>Therapy</option>
                  <option>Diagnosis</option>
                </select>
              </div>
              <textarea
                placeholder="Message"
                className="p-3 border border-gray-300 rounded w-full h-28 resize-none"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded w-full"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
