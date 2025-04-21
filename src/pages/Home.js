import React, { useState } from "react";
import { Phone, Mail, PhoneCall, MapPin } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { MdVideoCall } from 'react-icons/md';
import { FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import { RiServiceFill } from "react-icons/ri";
import { HiShieldCheck } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup'; 
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
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import pandaAnimation from "../assets/panda.json"; 
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const conditions = [
  'Disc Prolapse', 'Herniated Disc', 'Degenerative Disc', 'Retrolisthesis', 'Facet Joint Syndrome',
  'Spinal Canal Stenosis', 'Sciatica', 'Scoliosis', 'Brachial Neuralgia', 'Stiff Neck & Back Pain',
  'Muscle Strain', 'Radiculopathy', 'Thecal Compression', 'Whiplash Injury', 'Spondylolisthesis',
];

const therapies = [
  {
    title: "Robotic Spinal Decompression Therapy",
    description:
      "Used for herniated discs, sciatica, and chronic pain. A non-invasive approach for long-term relief.",
  },
  {
    title: "Combination Therapy (Ultrasound + Therapeutic Currents)",
    description:
      "Combines ultrasound with therapeutic currents for deep tissue healing and pain relief.",
  },
  {
    title: "Shock Wave Therapy",
    description:
      "Breaks down scar tissue and regenerates damaged tissues for improved mobility and healing.",
  },
  {
    title: "LASER Therapy",
    description:
      "Stimulates cell repair, enhances nerve healing, and reduces inflammation for faster recovery.",
  },
  {
    title: "Dual Frequency Ultrasound Therapy",
    description:
      "Targets deep tissues for effective pain relief, reducing muscle spasms and inflammation.",
  },
  {
    title: "Interferential Therapy (IFT) & Advanced TENS Therapy",
    description:
      "Neuromuscular re-education and pain management using electrical stimulation techniques.",
  },
  {
    title: "Short Wave Diathermy with Disc Electrode",
    description:
      "Uses electromagnetic waves to relieve chronic pain and improve circulation.",
  },
  {
    title: "Harness System with Dual Motor and Treadmill",
    description:
      "Assists with postural correction and spinal rehabilitation through controlled movement therapy.",
  },
];


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

const stats = [
  { value: 5, label: 'Happy Patients', suffix: 'K' },
  { value: 76, label: 'Specialists' },
  { value: 18, label: 'Surgeons' },
  { value: 24, label: 'Winning Awards' },
];



const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage("");
      return;
    }

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          name: form.name,
          phone: form.phone,
        },
        "your_public_key"
      )
      .then(
        () => {
          setMessage("Form submitted successfully!");
          setForm({ name: "", phone: "" });
          setErrors({});
        },
        () => {
          setMessage("Something went wrong. Try again later.");
        }
      );
  };

  return (
    <>
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
            className="space-y-6"
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
              {/* Read More Button */}
              <Link to="/about">
                <button className="relative overflow-hidden bg-gradient-to-r from-cyan-400 to-cyan-300 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 group hover:brightness-110">
                  <span className="relative z-10">Read More</span>
                  <span className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 blur-md transition duration-700 transform group-hover:translate-x-full translate-x-[-100%] rotate-12"></span>
                </button>
              </Link>

              {/* Watch Now Button */}
              <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition">
                <PlayCircle className="w-6 h-6" />
                Watch Now
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="https://medserg.com/wp-content/uploads/2022/05/cs.png"
              className="w-full max-w-md md:max-w-3xl object-contain"
              alt="Medical Banner"
            />
          </motion.div>
        </div>
      </div>

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

      {/* ////////////counter section///////// */}
     <section
  ref={ref}
  className="relative py-20 bg-white/30 backdrop-blur-md overflow-hidden"
  style={{
    backgroundImage: `url('https://www.transparenttextures.com/patterns/hexellence.png')`,
    backgroundSize: 'contain',
  }}
>
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative  rounded-2xl p-8  overflow-hidden"
      >
        {/* Watermark Number */}
        <h3 className="absolute inset-0 flex items-center justify-center text-9xl font-extrabold text-gray-600 opacity-30 pointer-events-none select-none z-0">
          {inView && (
            <CountUp
              start={0}
              end={stat.value}
              duration={2}
              suffix={stat.suffix || ''}
            />
          )}
        </h3>

        {/* Label Text in Foreground */}
        <div className="relative z-10 bg-white/30  mt-5">
          <p className="text-lg font-semibold text-black  uppercase tracking-wider mb-2">
            {stat.label}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

  
      {/* ///////////////our services//////////// */}
      <div className="min-h-screen bg-gradient-to-tr from-cyan-50 to-cyan-200 to-cyan-50  border-t-2 py-12 px-4">
        <h1 className="text-xl font-bold text-cyan-500 text-center py-2 flex center gap-2 "><RiServiceFill className='text-red-600' />Our Services</h1>
      <h1 className="text-3xl md:text-5xl  font-bold text-center text-blue-900 mb-12 ">
      Start Feeling Your Best
 <br />Explore Our Wellness Services
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

{/* //////////request and appointment section//////////// */}
  {/* CTA Section with Panda */}
      <motion.div
        {...fadeInUp}
        className="h-fit mt-10 px-4 space-y-6 py-10 flex flex-col items-center text-center"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 shadow-md shadow-cyan-400">
          Reach Out to Start Your Journey to Better Health
        </h1>
        <p className="text-base sm:text-lg font-semibold text-black max-w-3xl shadow-md shadow-cyan-400">
          We’re here to help! Give us a call, or share your number, and we’ll get in touch with you.
        </p>
        <motion.div className="flex flex-col items-center space-y-2">
          <Player
            autoplay
            loop
            src={pandaAnimation}
            style={{ height: "150px", width: "150px", marginBottom: "-15px" }}
          />
          <Link to="/appointment">
          <button className="bg-cyan-500 py-4 px-6 text-lg sm:text-xl text-white font-bold tracking-wider rounded-full hover:scale-95 transition-all duration-300 shadow-md shadow-cyan-400">
            Appointment
          </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        {...fadeInUp}
        className="border-t-8 border-blue-950 min-h-screen p-6 flex flex-col items-center"
      >
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-cyan-500 mt-12 mb-4 tracking-wide"
        >
          Reach Out to Start Your Journey to Better Health
        </motion.h2>
        <p className="text-center text-black/90 mb-12 text-base sm:text-lg max-w-xl">
          Have any doubts? Feel free to contact us
        </p>

        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mb-16 px-4">
          {[{
            icon: <Mail className="text-cyan-500 mr-4" size={26} />,
            text: "prospine33@gmail.com",
            href: "mailto:prospine33@gmail.com"
          }, {
            icon: <PhoneCall className="text-cyan-500 mr-4" size={26} />,
            text: "+91-800-242-1212",
            href: "tel:+918002421212"
          }, {
            icon: <MapPin className="text-cyan-500 mr-4" size={26} />,
            text: "SVN Road, Adampur, Bhagalpur",
            href: "https://www.google.com/maps?q=SVN+Road,+Adampur,+Bhagalpur"
          }].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-white rounded-2xl shadow-xl border border-cyan-300 p-6 w-full transition-all duration-300"
            >
              {item.icon}
              <span className="text-cyan-700 font-semibold text-base sm:text-lg">{item.text}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-2xl border-t-4 border-cyan-400"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-4 text-cyan-600">
            Request an Appointment
          </h3>
          <p className="text-center text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">
            Enter your details and we will get back to you shortly. Or call{" "}
            <span className="text-orange-500 font-semibold">+918002421212</span> between 8 am to 8 pm.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium text-gray-800">Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-5 py-3 rounded-xl text-gray-800 bg-white border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-800">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-5 py-3 rounded-xl text-gray-800 bg-white border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="flex flex-col items-center space-y-2">
              <Player
                autoplay
                loop
                src={pandaAnimation}
                style={{ height: "100px", width: "100px" , marginBottom: "-15px"}} 
              />
              <button
                type="submit"
                className="bg-cyan-500 text-white text-lg sm:text-xl font-semibold px-10 py-4 rounded-full hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </form>

          {message && (
            <p className="text-center text-sm mt-6 text-cyan-600 font-medium">{message}</p>
          )}
        </motion.div>
      </motion.div>

      {/* //////////////////////spinalcare section////////////// */}
      <section className="bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50  py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-bold text-center mb-4">
          Comprehensive Non-Surgical Spinal Care
        </h2>
        <p className="text-center text-lg mb-10 text-black/20 font-medium">
          Consult with our specialist for all your health needs. Benefit from expert guidance and compassionate care.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {therapies.map((therapy, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer text-black  p-6 rounded-2xl transition hover:scale-105"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-2">{therapy.title}</h3>
              <p className="text-sm font-medium">{therapy.description}</p>
            </div> 
          ))}
        </div>
      </div>
    </section>

    {/* ///////////////////condition we treat ///////////////// */}
    <section className=" py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-10">
          Conditions We Treat
        </h2>

        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 md:p-10 text-black shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6 md:gap-x-12 text-base md:text-lg font-medium">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="hover:text-gray-500 ease-in-out duration-500 cursor-pointer transition-colors duration-200"
              >
                {condition}
              </div>
            ))}
          </div>

          <div className="mt-10  text-center">
            <Link to="/condition_we_treate"
              className="text-white bg-cyan-500 py-4 px-8 rounded-full hover:shadow-xl shadow-cyan-400 ease-in-out duration-500 text-sm md:text-xl font-bold transition-all hover:text-gray-500 underline underline-offset-4"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
 

    </>
  );
};

export default Home;
