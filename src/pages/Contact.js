import React, { useState } from "react";
import { Phone, Mail, PhoneCall, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import pandaAnimation from "../assets/panda.json"; // adjust if needed

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TeamHeader = () => {
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
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center mt-12 bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.spine-nj.com/wp-content/uploads/2022/01/Spine-specialist-team-discussing-1024x598.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-60"></div>

        <div className="absolute top-1/2 left-2 -translate-y-1/2 rotate-[-90deg] text-white font-semibold tracking-widest text-xs sm:text-sm">
          24/7 EMERGENCY SERVICE
        </div>

        <div className="fixed right-3 top-1/3 space-y-4 text-white z-20 hidden sm:block">
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center space-y-2 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg font-semibold text-white"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="text-cyan-400 px-1">&gt;&gt;</span>
            <span className="text-cyan-400"> Contact</span>
          </motion.p>
        </div>

        <div className="absolute top-[65vh] right-4 sm:right-10 lg:right-20 mb-4">
          <div className="flex items-center text-sm sm:text-lg lg:text-2xl bg-cyan-400 rounded-full shadow-lg py-2 sm:py-4 border-4 sm:border-8 px-4 sm:px-6 space-x-2 sm:space-x-4">
            <div className="bg-white text-cyan-400 p-2 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-white font-semibold">+1 123 456 7890</span>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default TeamHeader;
