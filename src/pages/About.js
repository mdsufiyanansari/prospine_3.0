import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiShieldCheck } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";
import { Heart, BadgeCheck, ShieldCheck, ThumbsUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion"; // ✅ Framer Motion import

const AboutUsBanner = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Banner */}
      <div className="relative w-full h-[90vh]">
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

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-5 text-white text-lg z-10">
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
            About Us
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
            <span>About Us</span>
          </motion.div>
        </div>

        <div className="absolute top-[94%] right-6 bg-cyan-500 rounded-full shadow-xl px-6 py-4 border-8 border-white flex items-center space-x-3 text-cyan-600 text-lg font-semibold z-10">
          <div className="bg-white p-3 rounded-full text-cyan-500 text-xl">
            <FaPhoneAlt />
          </div>
          <span className="text-white text-2xl font-semibold">+1 123 456 7890</span>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-center gap-10">
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

        {/* Right text */}
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
            Bachelor in Physical Therapy: MMAHE, MANIPAL Master in Physical Therapy (Orthopaedics): Master in Business Administration: Human Resources Certified Health Promotion: NHFW, Govt. of India Certified Manipulation Therapist: MTFI (2004) Certified Fitness Instructor: IAFT (2015) Certified Pelvic Floor Rehab Therapist: RSHSR (2024)
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

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-[#0d1e38] text-white py-16 px-4 md:px-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left side (Experience image + circle) */}
          <div className="relative space-y-6">
            <div className="flex gap-4 center">
              <div className="bg-white rounded-xl overflow-hidden shadow-md w-80 h-96">
                <img
                  src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg"
                  alt="Doctor talking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-xl mt-72 md:block hidden overflow-hidden shadow-md w-64 h-80">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgzVrVu2OWZ-9r69kACMkZkdJwjJwTy8yMQ&s"
                  alt="Doctor team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Rotating text and counter */}
            <div className="absolute md:top-[-40px] md:right-2 right-[-48px] border-gray-500  border-2 rounded-full transform -translate-x-1/3">
              <div className="relative center md:w-72 md:h-72  h-28 w-28 ">
                {/* SVG Text Circle */}
                <svg
                  className="absolute  top-0 left-0 w-full text-white font-semibold h-full"
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
                    <textPath href="#circlePath" startOffset="0" textLength="535">
                      EXPERIENCED YEARS • EXPERIENCED YEARS • EXPERIENCED YEARS •
                    </textPath>
                  </text>
                </svg>
                <div
                  ref={ref}
                  className="md:w-56 md:h-56 h-20 w-20 rounded-full border-2 border-gray-500 text-center flex items-center justify-center"
                >
                  <p className="md:text-7xl md:font-extrabold text-sm font-semibold text-gray-500">
                    {inView && <CountUp end={21} duration={2} />}+
                    <br />
                    <span className="md:text-2xl text-sm text-cyan-400">YEAR</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Why choose us) */}
          <div>
            <p className="text-cyan-400 font-medium flex items-center gap-2 uppercase text-sm mb-2">
              <ShieldCheck size={18} />
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Why Choose Us For Your <br /> Health Care Needs
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: <BadgeCheck className="text-cyan-400" size={28} />,
                  title: "Our Vision",
                  link: "/details/vision",
                },
                {
                  icon: <Heart className="text-cyan-400" size={28} />,
                  title: "Our Mission",
                  link: "/details/mission",
                },
                {
                  icon: <ShieldCheck className="text-cyan-400" size={28} />,
                  title: "Pro Spine - Story",
                  link: "/details/story",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-[#123054] p-5 rounded-xl cursor-default shadow hover:shadow-lg   transition"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 + i * 0.2 }}
                >
                  <div className="flex items-center  justify-between">
                    {item.icon}
                    <span className="text-4xl  text-white/10 font-bold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">
                    We offer a range of health services to meet all your needs.
                  </p>
                  <Link
                    to={item.link}
                    className="inline-block mt-3 cursor-pointer hover:scale-125 ease-in-out duration-500   text-cyan-400 text-sm font-medium hover:underline"
                  >
                    Details →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUsBanner;
