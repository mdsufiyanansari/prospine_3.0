import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom'; // ✅ Fixed: No duplicate
import { Mail, PhoneCall, MapPin } from 'lucide-react';
import pandaAnimation from '../assets/panda.json'; // ✅ Correct import

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const Appointment_home = () => {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.phone) newErrors.phone = 'Phone number is required.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setMessage('Thanks! We will contact you soon.');
      setForm({ name: '', phone: '' });
    }
  };

  return (
    <>
      {/* Intro Section */}
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
          {[
            {
              icon: <Mail className="text-cyan-500 mr-4" size={26} />,
              text: "prospine33@gmail.com",
              href: "mailto:prospine33@gmail.com"
            },
            {
              icon: <PhoneCall className="text-cyan-500 mr-4" size={26} />,
              text: "+91-800-242-1212",
              href: "tel:+918002421212"
            },
            {
              icon: <MapPin className="text-cyan-500 mr-4" size={26} />,
              text: "SVN Road, Adampur, Bhagalpur",
              href: "https://www.google.com/maps?q=SVN+Road,+Adampur,+Bhagalpur"
            }
          ].map((item, i) => (
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

        {/* Appointment Form */}
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
                style={{ height: "100px", width: "100px", marginBottom: "-15px" }}
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

export default Appointment_home;
