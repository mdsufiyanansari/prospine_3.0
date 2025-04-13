import React, { useEffect, useRef, useState } from "react";
import {
  PhoneCall,
  Quote,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BiShieldPlus } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Kenneth Fong",
    role: "Patient",
    title: "Best Treatment",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    image:
      "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Danial Frankie",
    role: "Patient",
    title: "Outstanding Results",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    image:
      "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Rihana Roy",
    role: "Patient",
    title: "Superior Treatment",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    image:
      "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Kenneth Fong",
    role: "Patient",
    title: "Exceptional Care",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    image:
      "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740",
  },
];

const cards = [
  {
    image: "https://thumbs.dreamstime.com/b/happy-old-man-29332682.jpg",
    title: "Superior Treatment",
    description:
      "Superior treatment for spine care involves advanced diagnostics, personalized therapy, and minimally invasive procedures. Expert spine doctors ensure effective pain relief, improved mobility, and long-term spinal health using the latest medical technology and compassionate patient care.",
    name: "Danial Frankie",
    role: "Patient",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8I4uDHwndX7YQLHOHg03RjXeddsuFw-wmbQ&s",
    title: "Exceptional Care",
    description:
      "Exceptional care for spine health combines cutting-edge technology with a patient-centered approach. Our dedicated team of specialists provides comprehensive evaluations, tailored treatment plans, and ongoing support to ensure optimal recovery and well-being.",
    name: "Rihana Roy",
    role: "Patient",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JLPSde0IJnscb7wfdXF5tytPSCptdX5jOQ&s",
    title: "Outstanding Results",
    description:
      "Outstanding results in spine care are achieved through a multidisciplinary approach, utilizing advanced imaging techniques, minimally invasive surgeries, and personalized rehabilitation programs. Our commitment to excellence ensures patients experience significant pain relief and improved quality of life.",
    name: "John Doe",
    role: "Patient",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/portrait-senior-woman-blue-shirt-260nw-553639795.jpg",
    title: "Best Treatment",
    description:
      "Best treatment for spine issues includes a thorough diagnosis, personalized care plans, and access to the latest medical advancements. Our expert team focuses on non-invasive therapies, surgical options when necessary, and ongoing support to ensure optimal recovery and long-term spinal health.",
    name: "Kenneth Fong",
    role: "Patient",
  },
];

const TestimonialHeader = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timeout = setTimeout(() => {
      container.scrollTo({
        left: currentIndex * container.offsetWidth,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <>
      {/* Banner */}
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
        <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4 z-20 font-extrabold">
          <Facebook className="bg-blue-800 text-white rounded-full p-1 w-7 h-7 cursor-pointer" />
          <Twitter className="bg-blue-500 text-white rounded-full p-1 w-7 h-7 cursor-pointer" />
          <Linkedin className="bg-blue-950 text-white rounded-full p-1 w-7 h-7 cursor-pointer" />
          <Mail className="bg-white text-red-500 rounded-full p-1 w-7 h-7 cursor-pointer" />
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="bg-gradient-to-br from-cyan-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto h-[600px] p-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl hover:bg-cyan-50 transition-all duration-300 overflow-hidden">
              <Quote className="absolute text-white p-2 bg-cyan-400 rounded-full group-hover:scale-110 transition-all duration-300 right-[-6px] bottom-[-6px] z-10" size={80} />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 p-6">
                <div className="flex-shrink-0 text-center w-40 h-40">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-2xl border-2 border-white shadow-lg" />
                  <h3 className="text-gray-800 font-bold text-xl mt-2">{t.name}</h3>
                  <p className="text-cyan-600 font-semibold">{t.role}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h4>
                  <p className="text-gray-700 mb-4 text-lg">{t.text}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-3xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Video Testimonial Slider */}
      <div className="w-full h-screen flex justify-center mt-8 relative">
        <div ref={containerRef} className="w-[80%] overflow-hidden relative flex scroll-smooth">
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full h-[60%] flex bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="w-1/2 h-full">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-center space-y-8 bg-gray-100 relative overflow-hidden">
                <Quote className="absolute text-[250px] h-40 w-40 text-cyan-200 opacity-50 right-10 bottom-[-40px] transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
                <div className="flex gap-2 mb-3 z-10">
                  <BiShieldPlus className="text-red-500 text-2xl mt-1" />
                  <div className="space-y-4">
                    <h1 className="text-cyan-300 text-xl font-bold">Testimonials</h1>
                    <h1 className="text-5xl text-gray-950 font-extrabold">Video Testimonials</h1>
                  </div>
                </div>
                <h2 className="text-2xl ml-10 font-bold mb-2 flex items-center gap-2 z-10">
                  <FaQuoteLeft className="w-14 h-14 text-white bg-cyan-400 p-3 rounded-full" />
                  {card.title}
                </h2>
                <p className="text-gray-600 ml-10 text-xl z-10">{card.description}</p>

                {/* ✅ Updated ID Section */}
                <div className="mt-6 ml-10 w-[90%] flex items-center gap-4 p-4 rounded-2xl ">
                  <div className="w-20 h-20 rounded-full overflow-hidden  shadow-md">
                    <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-blue-900">{card.name}</h3>
                    <p className="text-cyan-600 font-medium">{card.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute bottom-10 right-10 md:bottom-96 md:right-60 flex gap-4 z-10">
          <button onClick={handlePrev} className="bg-transparent hover:bg-cyan-500 duration-1000 p-3 text-black rounded-md " aria-label="Previous Slide">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={handleNext} className="bg-transparent hover:bg-cyan-500 p-3 text-black duration-1000 rounded-md " aria-label="Next Slide">
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialHeader;
