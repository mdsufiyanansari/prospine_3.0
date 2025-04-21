import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#0c1b3a] text-white pt-20 px-4 md:px-20 font-sans overflow-hidden relative border-t border-white/10">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-transparent to-cyan-500 opacity-20" />

      {/* Top Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white/90">
          Revolutionizing Non-Surgical Spinal Care
        </h2>
        <div className="h-[2px] w-32 bg-cyan-500 mx-auto mt-4 rounded-full opacity-70" />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-end gap-5 mb-14">
        {[<FaFacebookF />, <IoMdClose />, <FaLinkedinIn />, <FiMail />].map((Icon, i) => (
          <span
            key={i}
            className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer text-xl hover:scale-110 transform shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30"
          >
            {Icon}
          </span>
        ))}
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-sm text-white/90">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider text-cyan-400">About Us</h3>
          <ul className="space-y-2">
            {["Vision", "Awards & Affiliations", "Testimonials", "Contact Us", "Locations"].map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`} className="hover:text-cyan-400 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Conditions */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider text-cyan-400">Conditions We Treat</h3>
          <ul className="space-y-2">
            {[
              "Herniated Disc",
              "Spondylolisthesis",
              "Degenerative Disc",
              "Brachial Neuralgia",
              "Disc Prolapse",
              "Retrolisthesis",
              "Scoliosis",
              "Facet Joint Syndrome",
              "Thecal Compression"
            ].map((item, i) => (
              <li key={i}>
                <Link to="/condition_we_treate" className="hover:text-cyan-400 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/condition_we_treate" className="text-cyan-400 font-medium hover:underline">See All →</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider text-cyan-400">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "› Why Pro Spine", href: "#why" },
              { label: "› Portfolio", href: "#portfolio" },
              { label: "› Events", href: "#events" },
              { label: "› Career", href: "#career" },
              { label: "› Manipal Physiotherapy", href: "#manipal" }
            ].map(({ label, href }, i) => (
              <li key={i}>
                <a href={href} className="hover:text-cyan-400 transition duration-300">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wider text-cyan-400">Contact</h3>
          <div className="space-y-5 text-white/90">
            <div className="flex items-start gap-3">
              <FiPhoneCall className="text-cyan-400 mt-1" />
              <div>
                <p>Call Us</p>
                <p className="text-white font-medium">+91 12345 678 98</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LuClock3 className="text-cyan-400 mt-1" />
              <div>
                <p>Opening Time</p>
                <p className="text-white font-medium">Mon - Sat: 7:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-6 py-8 md:flex md:items-center md:justify-between mb-14 shadow-xl shadow-cyan-500/5">
        <div className="relative w-full md:w-[50%]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 py-3 pr-10 focus:outline-none focus:border-cyan-400 transition duration-300"
          />
          <FiMail className="absolute right-3 top-3 text-white/50 pointer-events-none" />
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 mt-5 md:mt-0 md:ml-6 px-6 py-2 text-sm font-semibold rounded-full hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg">
          Subscribe Now
        </button>
      </div>

      {/* Bottom */}
      <div className="text-center text-white/70 text-sm pb-10 tracking-wide">
        <p>
          © 2025 <span className="text-cyan-400 font-semibold">ProSpine</span>. All rights reserved.
        </p>
        <div className="space-x-6 mt-2">
          <a href="#terms" className="hover:text-white transition duration-300">Terms & Conditions</a>
          <a href="#privacy" className="hover:text-white transition duration-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
