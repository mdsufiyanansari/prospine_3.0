import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const conditions = [
  'Disc Prolapse', 'Herniated Disc', 'Degenerative Disc', 'Retrolisthesis', 'Facet Joint Syndrome',
  'Spinal Canal Stenosis', 'Sciatica', 'Scoliosis', 'Brachial Neuralgia', 'Stiff Neck & Back Pain',
  'Muscle Strain', 'Radiculopathy', 'Thecal Compression', 'Whiplash Injury', 'Spondylolisthesis',
];

const therapies = [
  {
    title: "Robotic Spinal Decompression Therapy",
    description:
      "Used for herniated discs, sciatica, and chronic pain. A non-invasive approach for long-term relief.",
  },
  {
    title: "Combination Therapy (Ultrasound + Therapeutic Currents)",
    description:
      "Combines ultrasound with therapeutic currents for deep tissue healing and pain relief.",
  },
  {
    title: "Shock Wave Therapy",
    description:
      "Breaks down scar tissue and regenerates damaged tissues for improved mobility and healing.",
  },
  {
    title: "LASER Therapy",
    description:
      "Stimulates cell repair, enhances nerve healing, and reduces inflammation for faster recovery.",
  },
  {
    title: "Dual Frequency Ultrasound Therapy",
    description:
      "Targets deep tissues for effective pain relief, reducing muscle spasms and inflammation.",
  },
  {
    title: "Interferential Therapy (IFT) & Advanced TENS Therapy",
    description:
      "Neuromuscular re-education and pain management using electrical stimulation techniques.",
  },
  {
    title: "Short Wave Diathermy with Disc Electrode",
    description:
      "Uses electromagnetic waves to relieve chronic pain and improve circulation.",
  },
  {
    title: "Harness System with Dual Motor and Treadmill",
    description:
      "Assists with postural correction and spinal rehabilitation through controlled movement therapy.",
  },
];

const Spinalcare = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust when to trigger based on how much of the element is in view
  });

  return (
    <>
      <section className="bg-gradient-to-tr from-cyan-200 to-cyan-100 to-cyan-50 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with scroll effect */}
          <motion.h2
            className="text-3xl md:text-4xl text-blue-900 font-bold text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={ref}
          >
            Comprehensive Non-Surgical Spinal Care
          </motion.h2>

          <motion.p
            className="text-center text-lg mb-10 text-black/20 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Consult with our specialist for all your health needs. Benefit from expert guidance and compassionate care.
          </motion.p>

          {/* Therapy Cards with scroll effect */}
          <div className="grid md:grid-cols-2 gap-6">
            {therapies.map((therapy, index) => (
              <motion.div
                key={index}
                className="bg-white cursor-pointer text-black p-6 rounded-2xl transition hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                ref={ref}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{therapy.title}</h3>
                <p className="text-sm font-medium">{therapy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Spinalcare;
