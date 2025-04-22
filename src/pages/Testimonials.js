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
      "Superior treatment for spine care involves advanced diagnostics, personalized therapy, and minimally invasive procedures...",
    name: "Danial Frankie",
    role: "Patient",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8I4uDHwndX7YQLHOHg03RjXeddsuFw-wmbQ&s",
    title: "Exceptional Care",
    description:
      "Exceptional care for spine health combines cutting-edge technology with a patient-centered approach...",
    name: "Rihana Roy",
    role: "Patient",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JLPSde0IJnscb7wfdXF5tytPSCptdX5jOQ&s",
    title: "Outstanding Results",
    description:
      "Outstanding results in spine care are achieved through a multidisciplinary approach...",
    name: "John Doe",
    role: "Patient",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/portrait-senior-woman-blue-shirt-260nw-553639795.jpg",
    title: "Best Treatment",
    description:
      "Best treatment for spine issues includes a thorough diagnosis, personalized care plans...",
    name: "Kenneth Fong",
    role: "Patient",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviqqbA9R4g-bPNHccMNP1mqMspjPWSAR3uQ&s')",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/80 z-10" />
        <motion.div
          className="relative z-20 text-white text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">Testimonial</h1>
          <div className="mt-2 text-lg text-cyan-200">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>{" "}
            <span className="mx-1">➤</span> <span>Testimonial</span>
          </div>
        </motion.div>
      </div>

      {/* Testimonial Cards Section */}
      <div className="bg-gradient-to-br from-cyan-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl hover:bg-cyan-50 transition-all duration-300 overflow-hidden"
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Quote className="absolute text-white p-2 bg-cyan-400 rounded-full group-hover:scale-110 transition-all duration-300 right-[-6px] bottom-[-6px] z-10" size={80} />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 p-6 text-center md:text-left">
                <div className="flex flex-col items-center w-full md:w-40">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-32 h-32 object-cover rounded-2xl border-2 border-white shadow-lg"
                  />
                  <h3 className="text-gray-800 font-bold text-xl mt-2">{t.name}</h3>
                  <p className="text-cyan-600 font-semibold">{t.role}</p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h4>
                  <p className="text-gray-700 text-lg">{t.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Real Patients Section */}
      <div className="h-[1500px] md:h-[700px]  w-full p-1 relative center">
        <img
          src="https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg"
          alt="background"
          className="object-cover h-full w-full bg-no-repeat"
        />
        <div className=" bottom-0 justify-around h-full w-[95%] flex flex-col lg:flex-row absolute">
          <motion.div
            className="w-full lg:w-1/2 h-1/2 lg:h-full relative flex items-center justify-center overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="orbit-ring bottom-16 left-[150px] absolute z-0">
              <div className="orbit-dot"></div>
              <div className="orbit-dot-third"></div>
            </div>
            <div className="orbit-ring-reverse top-20 right-20 lg:right-52 absolute z-0">
              <div className="orbit-dot-large"></div>
              <div className="orbit-dot-third"></div>
            </div>
            <img
              src="https://spine-surgeon.org/wp-content/themes/twentyseventeen/img/DOCTORA.png"
              alt="doctor"
              className="h-full z-10 relative object-contain"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 h-1/2 lg:h-full center tracking-wider px-4 text-center lg:text-left flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-lg mt-20 md:text-xl text-cyan-400 font-semibold">
              <div className="flex gap-1">
                <BiShieldPlus className="text-red-500 font-extrabold mt-1" />
                Testimonials
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Real Patients, Real Stories. <br /> And our achievements
              </span>
            </h1>

            <div className="w-full h-[65%] flex items-center justify-center relative p-4 md:p-8">
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-20 bg-white/30 hover:bg-cyan-500 transition-all duration-500 p-2 rounded-full shadow-md backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
              </button>

              <div
                ref={containerRef}
                className="w-full md:w-[90%] h-full overflow-hidden relative flex scroll-smooth md:flex"
              >
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row flex-shrink-0 w-full rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-500"
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ height: "100%" }}
                  >
                    <div className="w-full md:w-1/2 h-[40%] md:h-full relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <Quote className="absolute text-[250px] text-white opacity-10 right-4 bottom-[-40px] z-0 pointer-events-none" />
                    </div>
                    <div className="w-full md:w-1/2 h-full p-4 md:p-6 flex flex-col justify-center relative space-y-3 text-center md:text-left bg-white text-black text-xl font-semibold backdrop-blur-sm overflow-y-auto">
                      <h3 className="text-lg md:text-2xl font-bold flex items-center text-cyan-400 gap-3 justify-center md:justify-start">
                        <FaQuoteLeft className="w-8 h-8 text-white bg-cyan-400 p-2 rounded-full" />
                        {card.title}
                      </h3>
                      <p className="text-gray-700 text-xs md:text-sm px-2 md:px-0">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-20 bg-white/30 hover:bg-cyan-500 transition-all duration-500 p-2 rounded-full shadow-md backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
              </button>
            </div>
          </motion.div>
        </div>

          {/* Gallery Section */}

          

      </div>

    </>
  );
};

export default TestimonialHeader;
