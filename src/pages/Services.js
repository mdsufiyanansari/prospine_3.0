import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "lucide-react";
import {
  Bot,
  Waves,
  Sparkles,
  Radiation,
  ScanLine,
  SignalHigh,
  Power,
  Accessibility,
  Activity
} from "lucide-react";

const treatments = [
  {
    title: "Non-Invasive Robotic Spinal Decompression",
    desc: "Reduces pressure on spinal discs and nerves with AI-controlled robotic precision.",
    icon: <Bot className="w-6 h-6 text-white" />,
    image: "https://technomedelectronics.com/assets/img/products/spinal-decompression-therapy/robospine-100/main.jpg"
  },
  {
    title: "Combination Therapy (Ultrasound + Currents)",
    desc: "Reduces pain and inflammation while enhancing tissue healing and circulation.",
    icon: <Waves className="w-6 h-6 text-white" />,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/XN/CM/FL/141043912/chattanooga-combination-therapy.jpg"
  },
  {
    title: "Shock Wave Therapy",
    desc: "Breaks down scar tissue and promotes regeneration for pain relief.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWP4YwWxzjjWy-4E_dzhpVdIciJiTPdC7GA&s"
  },
  {
    title: "LASER Therapy",
    desc: "Stimulates cell repair for chronic pain, disc degeneration, and nerve healing.",
    icon: <Radiation className="w-6 h-6 text-white" />,
    image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2641021.jpg"
  },
  {
    title: "Dual Frequency Ultrasound Therapy",
    desc: "Deep tissue penetration that effectively reduces inflammation.",
    icon: <ScanLine className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Ms6CTWbSe5G9e9qbwhskjvjZkP9xasK95Q&s"
  },
  {
    title: "IFT & Advanced TENS Therapy",
    desc: "Provides deep pain relief while stimulating muscle function.",
    icon: <SignalHigh className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9Fj8T1WJ0hHf2UFN7YQGHwUkWwv3A5TikA&s"
  },
  {
    title: "Short Wave Diathermy",
    desc: "Effective for arthritis, joint pain, and muscle stiffness.",
    icon: <Power className="w-6 h-6 text-white" />,
    image: "https://goodhandspt.com/wp-content/uploads/2023/03/SWD.png"
  },
  {
    title: "Harness System with Treadmill",
    desc: "Supports spinal rehabilitation and posture correction.",
    icon: <Accessibility className="w-6 h-6 text-white" />,
    image: "https://www.hpcosmos.com/sites/default/files/styles/produktbild/public/uploads/images/pluto_robowalk_arm_support/20170228_cos30026_h-p-cosmos_pluto_med_sh_mw_re_as_web_01.jpg?itok=x8AtZAMd"
  },
  {
    title: "Spinal Decompression Therapy",
    desc: "Provides targeted relief by reducing pressure on discs and nerves.",
    icon: <Activity className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrY60TXSCZd_bf4pDw5CUQBhBphyObbE3iw&s"
  },
];




const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <>
    <div className="relative w-full h-[90vh]">
      {/* Banner */}
      <div className="absolute inset-0">
        <img
          src="https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
      </div>

      <div className="absolute left-10 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left text-white font-semibold text-sm tracking-widest pl-2">
        24/7 EMERGENCY SERVICE
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-5 text-black text-lg z-10">
        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
        <IoClose className="hover:text-red-500 cursor-pointer" />
        <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
        <FaInstagram className="hover:text-pink-400 cursor-pointer" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-cyan-400 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="text-5xl text-white md:text-6xl font-bold mb-4"
        >
          Our Services
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.2 }}
          className="text-sm md:text-base"
        >
          <Link to="/" className="text-white font-semibold hover:underline">
            Home
          </Link>
          <span className="mx-2 text-white font-bold">›</span>
          <span>  Our Services</span>
        </motion.div>
      </div>

      <div className="absolute top-[94%] right-6 bg-cyan-500 rounded-full shadow-xl px-6 py-4 border-8 border-white flex items-center space-x-3 text-cyan-600 text-lg font-semibold z-10">
        <div className="bg-white p-3 rounded-full text-cyan-500 text-xl">
          <FaPhoneAlt />
        </div>
        <span className="text-white text-2xl font-semibold">+1 123 456 7890</span>
      </div>
    </div>

    {/* Advanced Non-Surgical Spinal Care section */}
    <section className="  text-black  py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-cyan-500 md:text-4xl font-extrabold mb-6">
          Our Services – Advanced Non-Surgical Spinal Care
        </h2>
        <p className="text-base md:text-lg mb-4">
          At <span className="font-semibold">Pro Spine</span>, we offer a wide range of{" "}
          <span className="font-semibold">non-surgical spinal</span> treatments designed to alleviate pain,
          improve mobility, and enhance overall spinal health. Our approach combines{" "}
          <span className="font-semibold">state-of-the-art robotic therapies</span> with{" "}
          <span className="font-semibold">expert manual techniques</span>, ensuring personalized and effective
          treatment for conditions like{" "}
          <span className="italic">herniated discs, sciatica, chronic pain, and postural issues</span>.
        </p>
        <p className="text-base md:text-lg">
          With a focus on <span className="font-semibold">precision, innovation</span>, and{" "}
          <span className="font-semibold">patient-centered</span> care, our therapies target the root cause of
          spinal discomfort, providing long-term relief and rehabilitation. Explore our advanced treatment
          options below:
        </p>
      </div>
    </section>

   {/* advance tech section  */}
   <div className="min-h-screen bg-gradient-to-tr from-cyan-50 to-cyan-200 to-cyan-50  border-t-2 py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-950 mb-12">
        Advanced Technology Treatments
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {treatments.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[47%] lg:w-[30%] bg-white rounded-xl p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-start gap-4  mb-3">
              <div className="bg-gradient-to-tr from-cyan-200 to-cyan-100  p-2 rounded-full">{item.icon}</div>
              <h2 className="text-lg font-bold text-cyan-950">{item.title}</h2>
            </div>

            <div className="rounded-lg overflow-hidden h-40 w-full mb-4">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ////////manual therapy section ////////// */}
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-cyan-50 p-10 md:p-16">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl md:text-5xl font-extrabold text-center text-cyan-950 mb-12"
        >
          Advanced Manual Therapy Techniques
        </motion.h2>

        {/* Pill-style techniques */}
        <div className="flex cursor-pointer flex-wrap justify-center gap-4 md:gap-6 mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="px-6 py-3 bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Maitland Method
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="px-6 py-3 cursor-pointer bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            McKenzie Method
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="px-6 py-3 cursor-pointer bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Mulligan Concept
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="px-6 py-3 cursor-pointer bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Cyriax Method
          </motion.div>
        </div>

        {/* Circle-style techniques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
            className="aspect-square cursor-pointer flex items-center justify-center text-center bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            Neurodynamic Techniques
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            variants={fadeUp}
            className="aspect-square flex items-center justify-center text-center bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-xl cursor-pointer p-6 hover:scale-105 transition-transform duration-300"
          >
            Myofascial Release
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={7}
            variants={fadeUp}
            className="aspect-square flex items-center justify-center text-center bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-xl cursor-pointer p-6 hover:scale-105 transition-transform duration-300"
          >
            Muscle Energy Techniques
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={8}
            variants={fadeUp}
            className="aspect-square flex items-center justify-center text-center bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 text-cyan-800 text-xl shadow-cyan-100 font-bold rounded-full shadow-xl cursor-pointer p-6 hover:scale-105 transition-transform duration-300"
          >
            Energy Conservation Techniques
          </motion.div>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Services;
