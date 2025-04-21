import React from 'react';
import { Star } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'PATIENT',
    review:
      "I had been suffering from chronic back pain for years, and nothing seemed to help. After visiting Prospine Clinic, I finally found relief! The Doctor is incredibly knowledgeable, and their approach is both professional and compassionate.",
  },
  {
    name: 'Ananya Verma',
    role: 'PATIENT',
    review:
      "The best clinic for spinal care! The staff is friendly, and the treatment was highly effective. My posture has improved significantly, and I feel more active than ever. Highly recommend Prospine Clinic!",
  },
  {
    name: 'Vikram Singh',
    role: 'PATIENT',
    review:
      "I had a slipped disc issue that was affecting my daily life. The treatment I received here was excellent, and within a few weeks, I noticed a remarkable improvement. Thanks to the entire team for their dedicated care!",
  },
  {
    name: 'Neha Agarwal',
    role: 'PATIENT',
    review:
      "I was hesitant about physiotherapy at first, but Prospine Clinic completely changed my perception. The customized exercises and therapy sessions have made a world of difference. I'm pain-free now!",
  },
];

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#D9F1F1] via-[#F4EEFC] to-[#D3D3F5] py-24 px-6 sm:px-12 lg:px-24 rounded-[40px] mx-4 my-16 shadow-xl overflow-hidden">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-20">
        What Our Patients Are Saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {testimonials.map((testimonial, idx) => (
          <FadeInWhenVisible key={idx} delay={idx * 0.15}>
            <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-[0_4px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_50px_rgba(0,0,0,0.1)] transform hover:-translate-y-1 transition duration-300">
              <div className="flex text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="currentColor" className="drop-shadow" />
                  ))}
              </div>
              <p className="text-[0.9rem] text-gray-700 mb-5 leading-relaxed tracking-wide italic">
                "{testimonial.review}"
              </p>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
                <p className="text-cyan-600 font-medium text-xs tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>

      <div className="mt-16 text-center">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-cyan-700 transition duration-300 shadow-lg hover:shadow-xl"
        >
          Explore More Testimonials
        </motion.button>
      </div>

      {/* Glowing background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl top-0 -left-20 animate-pulse" />
        <div className="absolute w-52 h-52 bg-purple-300/30 rounded-full blur-2xl bottom-0 -right-10 animate-ping" />
      </div>
    </section>
  );
};

export default Testimonials;
