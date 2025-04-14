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
import { motion } from "framer-motion";

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      left: currentIndex * container.offsetWidth,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
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
        <div className="absolute  bottom-[-32px] right-2 md:right-10 md:bottom-[-45px] bg-cyan-400 border-8 border-white rounded-full flex w-60 md:w-80 md:h-24 items-center px-6 py-3 md:px-4 md:py-4 shadow-xl z-30">
  <div className="bg-white p-3 md:p-2 rounded-full text-white mr-3">
    <PhoneCall className="w-5 h-5 md:w-6 md:h-6 animate-bounce text-black" />
  </div>
  <span className="text-white font-bold text-sm md:text-2xl">+1 123 456 7890</span>
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
  <div className="max-w-7xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
    {testimonials.map((t, i) => (
      <div
        key={i}
        className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl hover:bg-cyan-50 transition-all duration-300 overflow-hidden"
      >
        <Quote
          className="absolute text-white p-2 bg-cyan-400 rounded-full group-hover:scale-110 transition-all duration-300 right-[-6px] bottom-[-6px] z-10"
          size={80}
        />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-center gap-6 p-6 text-center md:text-left">
          {/* Image and Name */}
          <div className="flex flex-col items-center w-full md:w-40 h-auto">
            <img
              src={t.image}
              alt={t.name}
              className="w-32 h-32 object-cover rounded-2xl border-2 border-white shadow-lg"
            />
            <h3 className="text-gray-800 font-bold text-xl mt-2">{t.name}</h3>
            <p className="text-cyan-600 font-semibold">{t.role}</p>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h4>
            <p className="text-gray-700 text-lg">{t.text}</p>
          </div>
        </div>

        {/* Hover Background */}
        <div className="absolute inset-0 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-3xl" />
      </div>
    ))}
  </div>
</div>

   

    {/* Real Patients Section */}
    <div className="h-[1500px] md:h-[700px] w-full p-1  relative center">
  <img
    src="https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg"
    alt="background"
    className="object-cover h-full w-full bg-no-repeat"
  />

  <div className=" bottom-0 justify-around h-full w-[95%] flex flex-col lg:flex-row absolute">
    {/* Left - Doctor + Animation */}
    <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative flex items-center justify-center  overflow-hidden">
      {/* Orbit Rings */}
      <div className="orbit-ring bottom-16 left-[150px] absolute z-0">
        <div className="orbit-dot"></div>
        <div className="orbit-dot-third"></div>
      </div>

      <div className="orbit-ring-reverse top-20 right-20 lg:right-52 absolute z-0">
        <div className="orbit-dot-large"></div>
        <div className="orbit-dot-third"></div>
      </div>

      {/* Doctor Image */}
      <img
        src="https://static.wixstatic.com/media/62aad1_37f3ef2a7f114a3d9b36c84ec9dde792~mv2.png/v1/crop/x_0,y_0,w_2703,h_3023/fill/w_560,h_626,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Doctor%20banner%20image.png"
        alt="doctor"
        className="h-full z-10 relative object-contain"
      />

      {/* Animated Stat */}
      <motion.div
        className="flex bottom-20 left-10 md:left-28 items-center absolute z-50 bg-white shadow-md rounded-full px-4 py-2 space-x-3 w-fit"
        animate={{
          x: [0, -10, 10, -10, 0],
          y: [0, -5, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="flex -space-x-3">
          {["./images/girl.avif", "./images/girl.avif", "./images/girl.avif", "./images/girl.avif"].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="user"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div className="text-sm">
          <div className="text-cyan-600 font-bold text-base">10.2k</div>
          <div className="text-gray-500 font-medium">Patient recovers</div>
        </div>
      </motion.div>
    </div>

    {/* Right - Text Section */}
    <div className="w-full lg:w-1/2 h-1/2 lg:h-full center tracking-wider px-4 text-center lg:text-left flex-col items-center justify-center">
  <h1 className="text-lg mt-20  md:text-xl text-cyan-400 font-semibold">
    <div className="flex gap-1">
      <BiShieldPlus className="text-red-500 font-extrabold mt-1" />
      Testimonials <br />
    </div>
    <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
      Real Patients, Real Stories. <br /> And our achievements
    </span>
  </h1>

  {/* Card slide section */}
  <div className="w-full h-[65%] flex items-center justify-center relative p-4 md:p-8">
    {/* Left Arrow */}
    <button
      onClick={handlePrev}
      className="absolute left-2  md:left-4 z-20 bg-white/30 hover:bg-cyan-500 transition-all duration-500 p-2 rounded-full shadow-md backdrop-blur-sm"
    >
      <ChevronLeft className="w-6 h-6 md:w-8  md:h-8 text-gray-800" />
    </button>

    {/* Card Container */}
    <div
      ref={containerRef}
      className="w-full md:w-[90%] h-full  overflow-hidden relative flex scroll-smooth  md:flex"
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row flex-shrink-0 w-full rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-500"
          style={{ height: '100%' }}
        >
          {/* Left - Image Section */}
          <div className="w-full md:w-1/2 h-[40%] md:h-full relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover  object-center"
            />
            <Quote className="absolute text-[250px] text-white opacity-10 right-4 bottom-[-40px] z-0 pointer-events-none" />
          </div>

          {/* Right - Text Section */}
          <div className="w-full md:w-1/2 h-full p-4 md:p-6 flex flex-col justify-center relative space-y-3 text-center md:text-left bg-white text-black text-xl font-semibold backdrop-blur-sm overflow-y-auto">
            <h3 className="text-lg md:text-2xl font-bold flex items-center text-cyan-400 gap-3 justify-center md:justify-start">
              <FaQuoteLeft className="w-8 h-8 text-white bg-cyan-400 p-2 rounded-full" />
              {card.title}
            </h3>
            <p className="text-gray-700 text-xs md:text-sm px-2 md:px-0">{card.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      onClick={handleNext}
      className="absolute right-2 md:right-4 z-20 bg-white/30 hover:bg-cyan-500 transition-all duration-500 p-2 rounded-full shadow-md backdrop-blur-sm"
    >
      <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
    </button>
  </div>
</div>



  </div>
</div>

    </>
  );
};

export default TestimonialHeader; 