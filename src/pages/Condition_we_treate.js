import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const conditions = [
  {
    title: "Disc Prolapse",
    description:
      "A slipped or bulging disc that causes nerve compression, leading to pain and discomfort.",
    image: "https://drvaidji.com/cdn/shop/articles/3_tn-27.jpg?v=1697609036",
  },
  {
    title: "Degenerative Disc",
    description:
      "Age-related wear and tear of spinal discs, leading to reduced flexibility and chronic pain.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPj2p1i4oK1_aHe-5JZWl4wqm1v9X4HLmeQ&s",
  },
  {
    title: "Facet Joint Syndrome",
    description:
      "Arthritis-like condition affecting the small joints in the spine, causing inflammation and discomfort.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUYIoYxHpgUL13F4Q5G49hXM3XseaYZMQww&s",
  },
  {
    title: "Sciatica",
    description:
      "Pain radiating along the sciatic nerve due to nerve compression, commonly from a herniated disc.",
    image: "https://www.socalhip.com/wp-content/uploads/2021/10/Sciatica-Hip-Pain-Causes-Treatment.jpg",
  },
  {
    title: "Brachial Neuralgia",
    description:
      "Nerve pain in the neck, shoulder, and arms caused by compression or inflammation of spinal nerves.",
    image: "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/brachial-plexus-injuries/brachialplexusshoulderteaser.jpg?h=320&iar=0&w=560&hash=8CD1C24F69C9B8EC6A8F7C1AAA9A0E2E",
  },
  {
    title: "Muscular Strain",
    description:
      "Overuse or sudden movement causing muscle tears, leading to pain and stiffness.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2UaiSTWtg2NT6eXzm6AgU3m0II3pIndp1g&s",
  },
  {
    title: "Thoracic Compression",
    description:
      "Pressure on the thoracic spinal cord causing radiating symptoms and pain.",
    image: "https://www.anssiwellness.com/wp-content/uploads/2024/02/Spinal-Canal-Stenosis.png",
  },
  {
    title: "Neuroinfections",
    description:
      "Infections that affect the nerves and spinal structures, such as Lyme disease and meningitis.",
    image: "https://drrohitgupta.co.in/wp-content/uploads/2020/06/NEUROINFECTIONS.jpg",
  },
  {
    title: "Rheumatoid Arthritis",
    description:
      "A condition where your immune system mistakenly attacks your joints, causing inflammation and pain.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/47/ds00020_im02689_r7_rheumatoidarthritisthu_jpg.jpg",
  },
  {
    title: "Spinal Canal Stenosis",
    description:
      "Narrowing of the spinal canal putting pressure on spinal nerves, causing numbness, or weakness.",
    image: "https://www.anssiwellness.com/wp-content/uploads/2024/02/Spinal-Canal-Stenosis.png",
  },
  {
    title: "Scoliosis",
    description:
      "Abnormal lateral curvature of the spine that can cause pain and posture-related issues.",
    image: "https://txhospitals.in/wp-content/uploads/2023/06/adult-scoliosis-600x400-1.jpg",
  },
  {
    title: "Stiff Neck & Back Pain",
    description:
      "Muscle tension or strain causing localized pain and restricted movement.",
    image: "https://centenoschultz.com/wp-content/uploads/location-of-neck-stiffness.png",
  },
  {
    title: "Back Degeneracy",
    description:
      "General wear and tear of the spinal tissues leading to pain, numbness, or reduced mobility.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh06vJIK9ObpqmRoUrnOJoBMztnoNdNNdAiA&s",
  },
  {
    title: "Whiplash Injury",
    description:
      "Neck injury caused by sudden movement, often due to car accidents.",
    image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2182263.jpg",
  },
  {
    title: "Spondylolisthesis",
    description:
      "Forward displacement of a vertebra, usually causing instability and lower back pain.",
    image: "https://irp-cdn.multiscreensite.com/71e80065/dms3rep/multi/Spondylolisthesis.jpg",
  },
];

export default function ConditionsWeTreat() {
  const [selected, setSelected] = useState(null);

  const getFullDescription = (title) => {
    switch (title) {
      case "Disc Prolapse":
        return "A Disc Prolapse occurs when the cushioning disc between the spinal bones slips out of place or ruptures, often leading to nerve compression. This results in sharp or radiating pain, numbness, or tingling sensations. Non-surgical methods like spinal decompression, posture correction, and physiotherapy help relieve symptoms effectively.";
      case "Degenerative Disc":
        return "Degenerative Disc Disease is a natural result of aging, where the discs between the vertebrae lose hydration and flexibility. This can lead to chronic back pain, stiffness, and limited mobility. Conservative treatments aim to restore spinal movement and reduce discomfort using physiotherapy, spinal alignment, and core strengthening.";
      case "Sciatica":
        return "Sciatica refers to pain along the sciatic nerve, which runs from your lower back through your hips and down each leg. This condition is often triggered by herniated discs or spinal stenosis compressing the nerve. Non-surgical care includes targeted exercises, spinal adjustments, and decompression therapies to alleviate pressure and reduce inflammation.";
      case "Scoliosis":
        return "Scoliosis causes a sideways curvature of the spine, commonly developing during growth spurts. It can lead to uneven shoulders, back pain, and posture-related challenges. We offer personalized spinal rehabilitation programs and posture correction strategies to manage scoliosis non-invasively.";
      case "Whiplash Injury":
        return "Whiplash is a soft tissue neck injury caused by sudden, forceful movement of the head, commonly seen in car accidents. Symptoms include neck stiffness, headaches, and limited motion. Early intervention using manual therapy, soft tissue mobilization, and neck strengthening exercises aids in recovery.";
      default:
        return "This condition affects spinal or nerve function and can significantly impact daily life. Our expert team uses advanced, non-invasive methods to reduce pain, restore mobility, and improve overall spinal health — without surgery.";
    }
  };

  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-cyan-600 drop-shadow-lg">
          Conditions We Treat
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
          Expert non-surgical treatments for spine, nerve, and muscular issues.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {conditions.map((cond, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-cyan-200 p-6 hover:shadow-cyan-200 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-2xl mb-5">
              <img
                src={cond.image}
                alt={cond.title}
                className="w-full h-48 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center gap-3 mb-3 text-cyan-600 text-xl font-semibold">
              <FaHeartbeat className="text-2xl" />
              <h3>{cond.title}</h3>
            </div>
            <p className="text-gray-700 text-sm line-clamp-3">
              {cond.description}
            </p>
            <button
              onClick={() => setSelected(cond)}
              className="mt-4 w-full py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition duration-200 text-base font-semibold"
            >
              More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white p-6 flex items-center gap-3">
                <FaHeartbeat className="text-3xl" />
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setSelected(null)}
                  className="ml-auto text-white text-3xl hover:text-red-200 transition"
                >
                  <IoClose />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-300 scrollbar-track-cyan-100">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-56 object-cover rounded-xl mb-6 shadow-md"
                />
                <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                  <p>{getFullDescription(selected.title)}</p>
                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelected(null)}
                      className="mt-6 w-4/5 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition duration-200 text-base font-semibold"
                    >
                      OK
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
