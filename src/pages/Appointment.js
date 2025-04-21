import React from "react";
import bgImage from "../Images/appointmentbg.png";
import sideImage from "../Images/doctors.png";
import bg1 from "../Images/bg1-1.webp";

import { motion } from "framer-motion";
import { FaUserMd, FaHeartbeat, FaShieldAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Appointment = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative bg-blue-900 text-white py-32 md:py-40 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Appointment
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="mt-2 text-base md:text-lg"
          >
            <span className="text-cyan-500 font-semibold">Home</span>
            &nbsp;&gt;&gt;&nbsp;Appointment
          </motion.p>
        </div>

        {/* 📞 Call Card */}
        <motion.div
          className="absolute right-6 md:right-64 bottom-[-50px] z-30 cursor-pointer"
          whileHover={{ scale: 1.1, opacity: 0.9 }}
          transition={{ duration: 0.4, ease: "circInOut" }}
        >
          <div className="flex items-center bg-white px-4 py-4 rounded-full">
            <div className="flex items-center bg-cyan-500 text-white px-5 md:px-7 py-3 rounded-full shadow-lg">
              <div className="bg-white text-cyan-500 p-3 md:p-4 rounded-3xl mr-3 shadow-md">
                <i className="fas fa-phone fa-shake fa-2x"></i>
              </div>
              <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                +91 88779 11266
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Form + Doctor Section */}
      <div
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://clinicmaster.wprdx.com/medical/wp-content/uploads/2024/08/bg5.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Doctor Image */}
          <motion.div
            className="flex-1 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <img src={sideImage} alt="Doctors" className="w-full" />
          </motion.div>

          {/* Appointment Form */}
          <motion.div
  className="flex items-start gap-4 w-full"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  transition={{ duration: 0.8 }}
>
  <div className="bg-white p-6 md:p-16 rounded-[30px] w-full shadow-2xl text-lg">
    <h2 className="text-2xl md:text-3xl font-bold text-[#031B4E] mb-1">
      Book An <span className="text-cyan-500">Appointment</span>
    </h2>
    <p className="text-gray-500 text-sm mb-8">
      A scheduling representative will reach out within 24 hours to schedule your appointment.
    </p>

    <form className="space-y-6">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Consultation Type*</label>
          <select className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-gray-500 py-1">
            <option value="">Select a type</option>
            <option value="in-person">In-Person</option>
            <option value="online">Online</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Full Name*</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Email</label>
          <input
            type="email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
          />
        </div>
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">WhatsApp Number*</label>
          <input
            type="tel"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Gender</label>
          <select className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-gray-500 py-1">
            <option value="">Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Date of Birth</label>
          <input
            type="date"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Age*</label>
          <input
            type="number"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
          />
        </div>
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Occupation*</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">Select Your Condition</label>
          <select className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-gray-500 py-1">
            <option value="">Neck Pain</option>
            <option value="back-pain">Back Pain</option>
            <option value="sciatica">Sciatica</option>
            <option value="joint-issues">Joint Issues</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#031B4E] mb-2">How Did You Hear About Us?</label>
          <input
            type="text"
            placeholder="e.g., Doctor Referral"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 py-1"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#031B4E] mb-2">Describe Your Condition*</label>
        <textarea
          rows={3}
          className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 resize-none py-1"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm text-[#031B4E] mb-2">Preferred Contact Method*</label>
        <select className="w-full border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-gray-500 py-1">
          <option value="">Select a method</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-1" />
        <p className="text-xs text-gray-600">
          I acknowledge and give my explicit consent to be contacted via SMS and receive emails for various purposes, including marketing. Message and data rates may apply.
        </p>
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
</motion.div>

        </div>

        {/* Experience Section */}
        <div
          className="relative bg-center bg-cover bg-no-repeat  py-16 px-4 md:px-20 mt-16"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-evenly gap-10 text-white">
            {/* Images */}
            <div className="flex gap-6 items-center lg:items-start">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg"
                  alt="Doctor 1"
                  className="rounded-xl w-[250px] md:w-[350px] h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                  <div className="text-cyan-600 font-bold text-4xl">📊</div>
                </div>
              </motion.div>

              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgzVrVu2OWZ-9r69kACMkZkdJwjJwTy8yMQ&s"
                alt="Doctor 2"
                className="rounded-xl h-[250px] md:h-[350px] w-[200px] md:w-[300px] object-cover mt-20 md:mt-80"
              />
            </div>

            {/* Rotating Circle + Counter */}
            <div className="relative left-0 md:left-[-15%]  top-0 md:top-[-20vh] border-gray-500 border-2 rounded-full transform md:-translate-x-1/3">
              <div className="relative center w-28 h-28 md:w-72 md:h-72">
                <svg
                  className="absolute w-full h-full"
                  style={{ animation: "spin 7s linear infinite" }}
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                    />
                  </defs>
                  <text fill="white" fontSize="12" letterSpacing="3">
                    <textPath
                      href="#circlePath"
                      startOffset="0"
                      textLength="535"
                    >
                      EXPERIENCED YEARS • EXPERIENCED YEARS • EXPERIENCED YEARS •
                    </textPath>
                  </text>
                </svg>
                <div
                  ref={ref}
                  className="w-20 h-20 md:w-56 md:h-56 rounded-full border-2 border-gray-500 flex items-center justify-center"
                >
                  <p className="text-sm md:text-7xl font-semibold text-gray-500 text-center">
                    {inView && <CountUp end={21} duration={2} />}+
                    <br />
                    <span className="md:text-2xl text-cyan-400">YEAR</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h3 className="text-cyan-400 font-semibold text-sm mb-2">
              Our Consultation
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Our Consultation Options
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <FaUserMd />,
                    title: "Virtual Consultation",
                    description: "Connect with our doctors online from the comfort of your home.Get expert medical advice through a secure video call.Available between 11:30 AM - 1:00 PM. Book your slot in advance.",
                  },
                  {
                    icon: <FaHeartbeat />,
                    title: "In-Clinic Visit",
                    description: "Schedule an appointment and visit our clinic for personalized care.Availability is subject to open slots. Please check for the next available appointment to secure your spot.",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Home Care Visit",
                    description: "Receive medical attention at your home for added convenience.Best suited for patients who need assistance at home. Book in advance for seamless scheduling.",
                  },
                  {
                    icon: <FaStar />,
                    title: "Unparalleled expertise",
                    description: "   We offer a range of health services to meet all your needs.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#0A2C5C] p-6 rounded-xl"
                  >
                    <div className="text-cyan-400 text-2xl mb-2">
                      {item.icon}
                    </div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
