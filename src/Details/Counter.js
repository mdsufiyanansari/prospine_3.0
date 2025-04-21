import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const stats = [
  { value: 5, label: 'Happy Patients', suffix: 'K' },
  { value: 76, label: 'Specialists' },
  { value: 18, label: 'Surgeons' },
  { value: 24, label: 'Winning Awards' },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <section
        ref={ref}
        className="relative py-20 bg-white/30 backdrop-blur-md overflow-hidden"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/hexellence.png')`,
          backgroundSize: 'contain',
        }}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-8 overflow-hidden"
            >
              {/* Watermark Number */}
              <h3 className="absolute inset-0 flex items-center justify-center text-9xl font-extrabold text-gray-600 opacity-30 pointer-events-none select-none z-0">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix || ''}
                  />
                )}
              </h3>

              {/* Label Text in Foreground */}
              <div className="relative z-10 bg-white/30 mt-5">
                <p className="text-lg font-semibold text-black uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Counter;
