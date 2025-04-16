import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Testimonials from './pages/Testimonials';
import Condition_we_treate from './pages/Condition_we_treate';
import About_details from './Details/About_details';
import DetailsPage from './Details/DetailsPage';
// import Custome_cursor from './cursor/Custome_cursor';


function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* <Custome_cursor /> */}
        
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/condition_we_treate" element={<Condition_we_treate />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about_details" element={<About_details />} />
            <Route path="/details/:topic" element={<DetailsPage />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
