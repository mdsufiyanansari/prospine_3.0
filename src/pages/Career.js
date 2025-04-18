import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Phone } from 'lucide-react'
import { ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: '1. Innovative Work Environment',
    description: `Access the latest technology including Spine 3D™ Analysis, Robotic Spinal Decompression, Shock Wave Therapy, and Dual Frequency Ultrasound Therapy.`,
  },
  {
    title: '2. Professional Growth & Development',
    description: `Continuous learning through Pro Spine Academy with training in advanced techniques like Maitland Mobilization, McKenzie Method, and more.`,
  },
  {
    title: '3. Pro Spine Academy',
    description: `A premier training institute led by Dr. Pranav Kumar, offering hands-on workshops and certifications in spinal rehabilitation and ergonomics.`,
  },
  {
    title: '4. Work with the Best',
    description: `Join a team led by Dr. Pranav Kumar, a renowned Physical Therapist and Ergonomist with over 20 years of experience.`,
  },
  {
    title: '5. Patient-Centric Approach',
    description: `Focus on non-surgical, pain-free spinal care combining technology and manual therapy for optimal patient recovery.`,
  },
  {
    title: '6. Expanding Opportunities',
    description: `Grow with Pro Spine Bangalore and explore diverse roles in physiotherapy, research, and healthcare management.`,
  },
]

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!formData.about.trim()) newErrors.about = 'Tell us something about yourself';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Form submitted successfully!');
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
            Career
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
            <span className="text-cyan-400"> Career</span>
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

      {/* the future section */}
      <div className="min-h-[40vh] mt-10 flex items-center justify-center p-6">
        <div className="max-w-6xl border-t-2 border-cyan-300 rounded-md text-center  p-10 bg-transparent">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-500 mb-6">
            Join the Future of Non-Surgical Spinal Care with Pro Spine
          </h1>
          <p className="text-base sm:text-lg text-black leading-relaxed">
            At <span className="text-red-600 font-semibold">Pro Spine</span>, we are revolutionizing spinal rehabilitation through cutting-edge non-invasive therapies.
            As pioneers in <span className="text-red-600 font-semibold">Non-Invasive Robotic Spinal Decompression Therapy</span>,
            <span className="text-red-600 font-semibold"> Advanced Manual Therapy Techniques</span>, and
            <span className="text-red-600 font-semibold"> Electrotherapy</span>, we offer a dynamic platform for professionals passionate about physiotherapy, ergonomics, and spinal care.
          </p>
        </div>
      </div>

      {/* doctor card section */}
      <section className="min-h-[60vh] py-20 px-4 sm:px-8 lg:px-16 ">
        <div className="max-w-7xl border-t-2 border-cyan-300 mx-auto text-center">
          <h2 className="text-3xl mt-4 sm:text-4xl font-extrabold text-cyan-400 mb-4">
            Why Choose a Career at Pro Spine?
          </h2>
          <p className="text-white text-base sm:text-lg mb-12 max-w-3xl mx-auto">
            Discover how Pro Spine empowers professionals to thrive in a progressive, non-surgical spinal care environment.
          </p>
        </div>

        <div className="grid grid-cols-1 shadow-md rounded-xl p-8 shadow-cyan-200 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-white-900 border border-cyan-400 p-6 rounded-2xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-110 cursor-default"
            >
              <h3 className="text-cyan-400 text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-black text-sm leading-relaxed tracking-wide">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* career path section */}
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-10">
        <div className="border border-cyan-500 rounded-2xl shadow-md shadow-cyan-200 p-10 max-w-6xl w-full center flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-cyan-500 text-center mb-8">
            Career Paths at Pro Spine
          </h2>
          <ul className="space-y-6 text-xl text-gray-800">
            <li className="flex items-start space-x-3">
              <ArrowRight className="mt-1 text-cyan-500" size={20} />
              <p>
                <span className="font-bold  text-black">
                  Physiotherapists & Rehabilitation Specialists
                </span> – Work with cutting-edge spinal care technology.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <ArrowRight className="mt-1 text-cyan-500" size={20} />
              <p>
                <span className="font-bold  text-black">
                  Ergonomists & Workplace Wellness Consultants
                </span> – Prevent and manage work-related musculoskeletal issues.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <ArrowRight className="mt-1 text-cyan-500" size={20} />
              <p>
                <span className="font-bold  text-black">
                  Clinical Trainers & Educators
                </span> – Contribute to skill development through Pro Spine Academy.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <ArrowRight className="mt-1 text-cyan-500" size={20} />
              <p>
                <span className="font-bold  text-black">
                  Healthcare Administrators
                </span> – Manage operations and patient care services.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <ArrowRight className="mt-1 text-cyan-500" size={20} />
              <p>
                <span className="font-bold  text-black">
                  Research & Development Professionals
                </span> – Innovate non-surgical spinal care techniques.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* join us section */}
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-10 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-4">
            Join Us Today!
          </h2>
          <p className="text-center text-gray-700 mb-8 text-lg">
            If you are passionate about transforming spinal care, apply now and be part of <span className="font-semibold text-cyan-400">Pro Spine</span>’s journey!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border ${
                  errors.name ? 'border-red-500' : 'border-cyan-400'
                } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border ${
                  errors.email ? 'border-red-500' : 'border-cyan-400'
                } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border ${
                  errors.phone ? 'border-red-500' : 'border-cyan-400'
                } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <textarea
                name="about"
                rows="4"
                placeholder="Tell us about yourself"
                value={formData.about}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border ${
                  errors.about ? 'border-red-500' : 'border-cyan-400'
                } focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none`}
              />
              {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-cyan-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-500 transition duration-200"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Career
