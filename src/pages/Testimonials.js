import React from "react";
import { PhoneCall, Quote, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Kenneth Fong",
    role: "Patient",
    title: "Best Treatment",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    image: "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Danial Frankie",
    role: "Patient",
    title: "Outstanding Results",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    image: "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Rihana Roy",
    role: "Patient",
    title: "Superior Treatment",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    image: "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Kenneth Fong",
    role: "Patient",
    title: "Exceptional Care",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    image: "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
];

const TestimonialHeader = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/188148240/photo/doctor-with-spine-model-talking-to-smiling-couple.jpg?s=612x612&w=0&k=20&c=JR1SY-AO-5SG_81ApfYcCB-vh0-Lo6RIOc7s5kToExM=')",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/80 z-10" />
        <div className="relative z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Testimonial</h1>
          <div className="mt-2 text-lg text-cyan-200">
            <Link to="/" className="text-white hover:underline">Home</Link>{" "}
            <span className="mx-1">➤</span> <span>Testimonial</span>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] text-white font-bold tracking-wider text-xs md:text-xl">
          24/7 EMERGENCY SERVICE
        </div>

        <div className="absolute bottom-[-32px] right-72 bg-cyan-400 border-8 border-white rounded-full flex items-center px-6 py-3 shadow-xl z-30">
          <div className="bg-white p-3 rounded-full text-white mr-3">
            <PhoneCall className="w-5 h-5 animate-bounce text-black" />
          </div>
          <span className="text-white font-bold text-xl">+1 123 456 7890</span>
        </div>

        {/* Social Icons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4 z-20 font-extrabold">
          <Facebook className="bg-blue-800 text-white rounded-full p-1 w-7 h-7 cursor-pointer" />
          <Twitter className="bg-blue-500 text-white rounded-full p-1 w-7 h-7 cursor-pointer" />
          <Linkedin className="bg-blue-950 text-white rounded-full p-1 w-7 h-7 cursor-pointer" />
          <Mail className="bg-white text-red-500 rounded-full p-1 w-7 h-7 cursor-pointer" />
        </div>
      </div>

      {/* Testimonial Cards Section */}
      <div className="bg-gradient-to-br from-cyan-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl hover:bg-cyan-50 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative Quote Icon */}
              <Quote
                className="absolute text-white p-2 bg-cyan-400 rounded-full group-hover:scale-110 transition-all duration-300 right-[-6px] bottom-[-6px] z-10"
                size={80}
              />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Image */}
                <div className="flex-shrink-0 bg-cyan-200 rounded-tr-2xl text-center w-40 h-full">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-2xl border-2 border-white shadow-lg"
                  />
                  <h3 className="text-gray-800 font-bold text-xl">{t.name}</h3>
                  <p className="text-cyan-600 font-semibold">{t.role}</p>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {t.title}
                  </h4>
                  <p className="text-gray-700 mb-4 text-lg">{t.text}</p>
                </div>
              </div>

              {/* Hover Background */}
              <div className="absolute inset-0 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialHeader;
