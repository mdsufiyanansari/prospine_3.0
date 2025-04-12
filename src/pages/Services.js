import React from "react";
import { Phone } from "lucide-react";

const services = [
  { title: "Angioplasty", doctors: "32+ Doctors" },
  { title: "Cardiology", doctors: "23+ Doctors" },
  { title: "Dental", doctors: "08+ Doctors" },
  { title: "Endocrinology", doctors: "13+ Doctors", highlighted: true },
  { title: "Eye Care", doctors: "--" },
  { title: "Neurology", doctors: "--" },
  { title: "Orthopedics", doctors: "--" },
  { title: "RMI", doctors: "--" },
];

export default function ServicesPage() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative bg-blue-900 text-white py-16 text-center h-[400px] mt-20">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-2 text-lg">
            <span className="text-blue-300">Home</span> &gt; Services
          </p>
        </div>
        <div className="absolute bottom-6 right-6 z-10">
          <div className="flex items-center gap-2 bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold shadow">
            <Phone size={20} />
            +91 91994 99491
          </div>
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-90 text-sm tracking-widest font-semibold">
          24/7 EMERGENCY SERVICE
        </div>
      </div>

      {/* Services Grid */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md relative transition-transform hover:scale-105 cursor-pointer ${
              service.highlighted ? "bg-cyan-500 text-white" : "bg-white"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <span className="text-sm font-medium">
              • {service.doctors}
            </span>
            <div className="absolute bottom-4 right-4 text-cyan-500">
              <span className="text-2xl">↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
