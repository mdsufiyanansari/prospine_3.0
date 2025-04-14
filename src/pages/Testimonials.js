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

      {/* Video Testimonial Slider */}
      <div className="w-full h-[750px]  flex justify-center  relative px-4 center">
      <div ref={containerRef} className="w-full py-2 md:w-[80%] overflow-hidden relative h-[85%] flex scroll-smooth">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row flex-shrink-0 w-full bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-[250px] md:h-auto">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start space-y-8 bg-gray-100 relative text-center md:text-left">
              <Quote className="absolute text-[250px] h-40 w-40 text-cyan-200 opacity-50 right-10 bottom-[-40px] transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
              <div className="flex gap-2 mb-3 z-10 justify-center md:justify-start">
                <BiShieldPlus className="text-red-500 text-2xl mt-1" />
                <div className="space-y-4">
                  <h1 className="text-cyan-300 text-xl font-bold">Testimonials</h1>
                  <h1 className="text-3xl md:text-5xl text-gray-950 font-extrabold">Video Testimonials</h1>
                </div>
              </div>
              <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2 z-10">
                <FaQuoteLeft className="w-14 h-14 text-white bg-cyan-400 p-3 rounded-full" />
                {card.title}
              </h2>
              <p className="text-gray-600 text-lg z-10 px-4 md:px-0">{card.description}</p>

              {/* Person Info */}
              <div className="w-full flex justify-center md:justify-start">
                <div className="mt-6 flex items-center gap-4 p-4 rounded-2xl">
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
                    <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h3 className="text-xl font-bold text-blue-900">{card.name}</h3>
                    <p className="text-cyan-600 font-medium">{card.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-[100px] right-6 md:bottom-60 md:right-60 flex gap-4 z-10">
        <button onClick={handlePrev} className="bg-transparent hover:bg-cyan-500 duration-1000 p-3 text-black rounded-md">
          <ChevronLeft className="w-10 h-10" />
        </button>
        <button onClick={handleNext} className="bg-transparent hover:bg-cyan-500 p-3 text-black duration-1000 rounded-md">
          <ChevronRight className="w-10 h-10" />
        </button>
      </div>
    </div>

    {/* Real Patients Section */}
    <div className="h-[700px] w-full p-1  relative center">
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
    <div className="w-full lg:w-1/2 h-1/2 lg:h-full center tracking-wider  px-4 text-center lg:text-left flex items-center justify-center">
      <h1 className="text-lg md:text-xl text-cyan-400 font-semibold">
        Testimonials <br />
        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          Real Patients, Real Stories. <br /> And our achievements
        </span>
      </h1>
    </div>
  </div>
</div>

    </>
  );
};

export default TestimonialHeader; 