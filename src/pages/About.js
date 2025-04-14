import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";

const AboutUsBanner = () => {
  return (
    <>
      <div className="relative w-full h-[90vh] ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
        </div>

        {/* 24/7 Emergency Vertical Text */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left text-white font-semibold text-sm tracking-widest pl-2">
          24/7 EMERGENCY SERVICE
        </div>

        {/* Social Icons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-5 text-white text-lg z-10">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <IoClose className="hover:text-red-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col justify-center items-center  h-full text-cyan-400 text-center">
          <h1 className="text-5xl text-white md:text-6xl font-bold mb-4">About Us</h1>
          <div className="text-sm md:text-base">
            <Link to="/" className="text-white font-semibold hover:underline">
              Home
            </Link>
            <span className="mx-2 text-white font-bold">›</span>
            <span>About Us</span>
          </div>
        </div>

        {/* Call Button */}
        <div className="absolute top-[94%] right-6 bg-cyan-500 rounded-full shadow-xl px-6 py-4 border-8 border-white flex items-center space-x-3 text-cyan-600 text-lg font-semibold z-10">
          <div className="bg-white p-3 rounded-full text-cyan-500 text-xl">
            <FaPhoneAlt />
          </div>
          <span className="text-white text-2xl font-semibold">+1 123 456 7890</span>
        </div>
      </div>

      {/* world class patient section */}
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-center gap-10">
  {/* Left: Doctor image and video call - hidden on mobile */}
  <div className="relative w-full h-[500px] max-w-md ">
    <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
      alt="Main Doctor"
      className="rounded-3xl object-cover shadow-xl h-full"
    />

    {/* Video Call Box */}
 {/* Video Call Box */}
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

  </div>

  {/* Right: Text Content */}
  <div className="flex-1 max-w-2xl">
    <div className="flex items-center gap-2 text-teal-600 font-semibold mb-3">
      <HiShieldCheck size={20} />
      <span>ABOUT US</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0c1e45] leading-tight mb-4">
      World Class Patient <br />
      Facilities Designed For You
    </h2>
    <p className="text-gray-600 text-base md:text-lg mb-6">
      Experience the future of healthcare. Our state-of-the-art facilities are
      equipped with the latest technology, ensuring you receive the world's best
      quality treatment.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#0c1e45] mb-6">
      {[
        "Research and Development",
        "Advanced Imaging Services",
        "Rehabilitation Services",
        "Comprehensive Specialties",
        "Emergency Services",
        "Intensive Care Units (ICUs)",
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <FaCheckCircle className="mt-1 text-teal-600" />
          <span>{item}</span>
        </div>
      ))}
    </div>

    {/* Call to Action Buttons */}
    <div className="flex flex-wrap gap-4 items-center">
      <button className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition">
        Contact Us <FaArrowRight />
      </button>

      <div className="flex items-center gap-3">
        <FaPhoneAlt className="text-teal-500" />
        <div>
          <p className="text-sm text-gray-500">Contact Us</p>
          <p className="text-lg font-semibold text-[#0c1e45]">
            +1 123 456 7890
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default AboutUsBanner;
