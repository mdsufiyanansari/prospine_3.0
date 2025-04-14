import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Conditions We Treat', to: '/condition_we_treate' },
    { name: 'Our Services', to: '/services' },
    { name: 'Our Team', to: '/contact' },
    { name: 'Testimonials', to: '/testimonials' },
    { name: 'Events', to: '/contact' },
    { name: 'Contact', to: '/contact' },
    { name: 'Career', to: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <Link to="/" className="ml-20 text-4xl font-extrabold text-blue-600 tracking-wide"
                style={{ textShadow: '2px 2px 4px rgba(255, 2, 2, 0.3)' }}>
                ProSpine
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 font-semibold">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className={`transition ${isActive(item.to) ? 'text-blue-600 font-extrabold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/appointment" className="bg-cyan-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-cyan-500 transition-all">
                Appointment
              </Link>
              <button onClick={toggleSidebar} className="bg-blue-900 text-white px-3 py-2 rounded-md">
                <FaBars />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none">
                {!isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/30 backdrop-blur-md border-t border-white/20 shadow-md"
            >
              <div className="flex flex-col px-4 py-3 text-sm font-semibold space-y-2">
                {navLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.to}
                    className={`${
                      isActive(item.to) ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/appointment"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sidebar and Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: '70%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[50%] h-full bg-white shadow-lg z-50 px-4 py-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-800">Project Info</h2>
                <button onClick={toggleSidebar} className="text-red-500 text-xl font-bold">X</button>
              </div>
              <div className="text-gray-700 space-y-3">
                <p><strong>Project Name:</strong> ProSpine</p>
                <p><strong>Version:</strong> 1.0</p>
                <p><strong>Technologies:</strong> React, TailwindCSS, Framer Motion</p>
                <p><strong>Author:</strong> Gautam</p>
                <p><strong>Description:</strong> This is a dynamic web app for spine health and treatment information, booking appointments, and viewing services.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
