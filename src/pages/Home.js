import React, { useState } from "react";
import About_home from "../Details/About_home";
import Counter from "../Details/Counter";
import Service_home from "../Details/Service_home";
import Appointment_home from "../Details/Appointment_home";
import Spinalcare from "../Details/Spinalcare";
import Rating_card from "../Details/Rating_card";
import Treat_home from "../Details/Treat_home";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, Phone, Mail, PhoneCall, MapPin } from "lucide-react";
import { MdVideoCall } from "react-icons/md";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
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
    <About_home/>

      {/*counter section*/}
     <Counter/>

  
      {/* our services */}
   <Service_home/>

{/* request and appointment section */}
  {/* CTA Section with Panda */}
      <motion.div
        {...fadeInUp}
        className="h-fit mt-10 px-4 space-y-6 py-10 flex flex-col items-center text-center"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 shadow-md shadow-cyan-400">
          Reach Out to Start Your Journey to Better Health
        </h1>
        <p className="text-base sm:text-lg font-semibold text-black max-w-3xl shadow-md shadow-cyan-400">
          We're here to help! Give us a call, or share your number, and we'll get in touch with you.
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
      <Appointment_home/>

      {/* spinalcare section */}
   <Spinalcare/>

    {/* condition we treat  */}
  <Treat_home/>

  {/* rating card */}
  <Rating_card/>
 
    </>
  );
};

export default Home;
