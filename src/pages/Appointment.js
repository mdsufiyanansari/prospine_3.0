import React from "react";
import bgImage from "../Images/appointmentbg.png";
import sideImage from "../Images/doctors.png";
import bg1 from "../Images/bg1-1.webp";

import { motion } from "framer-motion";
import { FaUserMd, FaHeartbeat, FaShieldAlt, FaStar } from "react-icons/fa";

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

          {/* Appointment Form Section */}
          <div className="flex items-start gap-4">
            {/* Side Vertical Badge */}
            {/* <div className="bg-[#031B4E] text-white px-7 py-7 rounded-lg rotate-[-90deg] font-semibold transform origin-left translate-y-20">
              CONSULTING FREE
            </div> */}

            {/* Form Container */}
            <div className="bg-white p-16 rounded-[30px] w-2xl mx-auto shadow-2xl mt-10 text-lg">
              {/* Title */}
              <h2 className="text-3xl font-bold text-[#031B4E] mb-1">
                Book An <span className="text-cyan-500">Appointment</span>
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                We will send you a confirmation within 24 hours.
              </p>

              {/* Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#031B4E] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#031B4E] mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#031B4E] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#031B4E] mb-2">
                      Select Service
                    </label>
                    <select className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-gray-500 py-1">
                      <option value="">Select Service</option>
                      <option value="consulting">Consulting</option>
                      <option value="therapy">Therapy</option>
                      <option value="training">Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#031B4E] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 resize-none py-1"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-full transition duration-300"
                  >
                    Submit →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
              {/*Experience Section */}
        <div className="relative bg-center bg-cover bg-no-repeat py-16 px-4 md:px-20" style={{ backgroundImage: `url(${bg1})` }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          
          {/* Top Section */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
            {/* Left Images */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <div className="relative">
                <img
                  src="/doctor1.jpg"
                  alt="Doctor 1"
                  className="rounded-xl w-[250px] h-[280px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                  <div className="text-cyan-600 font-bold text-2xl">📊</div>
                </div>
              </div>

              <img
                src="/doctor2.jpg"
                alt="Doctor 2"
                className="rounded-xl w-[250px] h-[280px] object-cover"
              />
            </div>

            {/* Experience Circle */}
            <div className="relative w-[200px] h-[200px] flex items-center justify-center rounded-full border-4 border-white text-center">
              <div>
                <div className="text-4xl font-bold">18+</div>
                <div className="text-cyan-400 font-semibold">YEARS</div>
                <div className="text-sm mt-1">EXPERIENCED</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/20">
                Experienced Years Experienced Years
              </div>
            </div>

            {/* Right Text Section */}
            <div className="max-w-xl">
              <h3 className="text-cyan-400 font-semibold text-sm mb-2">
                WHY CHOOSE US
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Why Choose Us For Your <br /> Health Care Needs
              </h2>

              {/* Feature Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0A2C5C] p-6 rounded-xl">
                  <FaUserMd className="text-cyan-400 text-2xl mb-2" />
                  <h4 className="font-bold mb-1">More Experience</h4>
                  <p className="text-sm text-white/80">
                    We offer a range of health services to meet all your needs.
                  </p>
                </div>

                <div className="bg-[#0A2C5C] p-6 rounded-xl">
                  <FaHeartbeat className="text-cyan-400 text-2xl mb-2" />
                  <h4 className="font-bold mb-1">Seamless care</h4>
                  <p className="text-sm text-white/80">
                    We offer a range of health services to meet all your needs.
                  </p>
                </div>

                <div className="bg-[#0A2C5C] p-6 rounded-xl">
                  <FaShieldAlt className="text-cyan-400 text-2xl mb-2" />
                  <h4 className="font-bold mb-1">The right answers?</h4>
                  <p className="text-sm text-white/80">
                    We offer a range of health services to meet all your needs.
                  </p>
                </div>

                <div className="bg-[#0A2C5C] p-6 rounded-xl">
                  <FaStar className="text-cyan-400 text-2xl mb-2" />
                  <h4 className="font-bold mb-1">Unparalleled expertise</h4>
                  <p className="text-sm text-white/80">
                    We offer a range of health services to meet all your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
