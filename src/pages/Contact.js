import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <div className="max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-700 font-medium">Address</h3>
              <p className="text-gray-600">123 Medical Center Drive, Suite 100</p>
              <p className="text-gray-600">Healthcare City, HC 12345</p>
            </div>
            <div>
              <h3 className="text-gray-700 font-medium">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-gray-700 font-medium">Email</h3>
              <p className="text-gray-600">info@prospine.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 