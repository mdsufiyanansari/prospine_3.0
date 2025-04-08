import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Spine Consultation</h2>
          <p className="text-gray-600">Expert consultation for spine-related issues.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Therapy</h2>
          <p className="text-gray-600">Specialized physical therapy programs.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Surgical Procedures</h2>
          <p className="text-gray-600">Advanced spine surgery techniques.</p>
        </div>
      </div>
    </div>
  );
};

export default Services; 