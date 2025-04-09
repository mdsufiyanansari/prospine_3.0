import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/services' },
    { name: 'Conditions We Treat', to: '/about' },
    { name: 'Our Services', to: '/contact' },
    { name: 'Our Team', to: '/contact' },
    { name: 'Testimonials', to: '/contact' },
    { name: 'Events', to: '/contact' },
    { name: 'Why Pro Spine', to: '/contact' },
    { name: 'Career', to: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Framer Motion */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <Link to="/" className="text-4xl font-extrabold text-blue-600  tracking-wide"
             style={{
              textShadow: '2px 2px 4px rgba(255, 2, 2, 0.3)',
            }}>
              ProSpine
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-semibold">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className={`transition ${
                  isActive(item.to) ? 'text-blue-600 font-extrabold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
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

      {/* Mobile Menu with Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-x-auto whitespace-nowrap bg-white/30 backdrop-blur-md border-t border-white/20 shadow-md"
          >
            <div className="flex space-x-4 px-4 py-3 text-sm font-semibold">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className={`px-2 py-1 ${
                    isActive(item.to) ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/appointment"
                className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
