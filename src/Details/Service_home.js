import React from 'react';
import { RiServiceFill } from 'react-icons/ri';
import {
  Bot,
  Waves,
  Sparkles,
  Radiation,
  ScanLine,
  SignalHigh,
  Power,
  Accessibility,
  Activity,
} from 'lucide-react'; // You were missing this import

const treatments = [
  {
    title: "Non-Invasive Robotic Spinal Decompression",
    desc: "Reduces pressure on spinal discs and nerves with AI-controlled robotic precision.",
    icon: <Bot className="w-6 h-6 text-white" />,
  },
  {
    title: "Combination Therapy (Ultrasound + Currents)",
    desc: "Reduces pain and inflammation while enhancing tissue healing and circulation.",
    icon: <Waves className="w-6 h-6 text-white" />,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/XN/CM/FL/141043912/chattanooga-combination-therapy.jpg"
  },
  {
    title: "Shock Wave Therapy",
    desc: "Breaks down scar tissue and promotes regeneration for pain relief.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWP4YwWxzjjWy-4E_dzhpVdIciJiTPdC7GA&s"
  },
  {
    title: "LASER Therapy",
    desc: "Stimulates cell repair for chronic pain, disc degeneration, and nerve healing.",
    icon: <Radiation className="w-6 h-6 text-white" />,
    image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2641021.jpg"
  },
  {
    title: "Dual Frequency Ultrasound Therapy",
    desc: "Deep tissue penetration that effectively reduces inflammation.",
    icon: <ScanLine className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Ms6CTWbSe5G9e9qbwhskjvjZkP9xasK95Q&s"
  },
  {
    title: "IFT & Advanced TENS Therapy",
    desc: "Provides deep pain relief while stimulating muscle function.",
    icon: <SignalHigh className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9Fj8T1WJ0hHf2UFN7YQGHwUkWwv3A5TikA&s"
  },
  {
    title: "Short Wave Diathermy",
    desc: "Effective for arthritis, joint pain, and muscle stiffness.",
    icon: <Power className="w-6 h-6 text-white" />,
    image: "https://goodhandspt.com/wp-content/uploads/2023/03/SWD.png"
  },
  {
    title: "Harness System with Treadmill",
    desc: "Supports spinal rehabilitation and posture correction.",
    icon: <Accessibility className="w-6 h-6 text-white" />,
    image: "https://www.hpcosmos.com/sites/default/files/styles/produktbild/public/uploads/images/pluto_robowalk_arm_support/20170228_cos30026_h-p-cosmos_pluto_med_sh_mw_re_as_web_01.jpg?itok=x8AtZAMd"
  },
  {
    title: "Spinal Decompression Therapy",
    desc: "Provides targeted relief by reducing pressure on discs and nerves.",
    icon: <Activity className="w-6 h-6 text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrY60TXSCZd_bf4pDw5CUQBhBphyObbE3iw&s"
  },
];

const Service_home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-cyan-50 to-cyan-200 to-cyan-50 border-t-2 py-12 px-4">
        <h1 className="text-xl font-bold text-cyan-500 text-center py-2 flex center gap-2 ">
          <RiServiceFill className='text-red-600' />Our Services
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-12 ">
          Start Feeling Your Best
          <br />Explore Our Wellness Services
        </h1>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[47%] lg:w-[30%] bg-white rounded-xl p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-gradient-to-tr from-cyan-200 to-cyan-100 p-2 rounded-full">
                  {item.icon}
                </div>
                <h2 className="text-lg font-bold text-cyan-950">{item.title}</h2>
              </div>

              <div className="rounded-lg overflow-hidden h-40 w-full mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service_home;
