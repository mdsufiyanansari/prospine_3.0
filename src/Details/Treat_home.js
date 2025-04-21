import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Assuming the `conditions` array is defined or imported elsewhere in your app
const conditions = [
  'Disc Prolapse', 'Herniated Disc', 'Degenerative Disc', 'Retrolisthesis', 'Facet Joint Syndrome',
  'Spinal Canal Stenosis', 'Sciatica', 'Scoliosis', 'Brachial Neuralgia', 'Stiff Neck & Back Pain',
  'Muscle Strain', 'Radiculopathy', 'Thecal Compression', 'Whiplash Injury', 'Spondylolisthesis',
];

const treat_home = () => {
  return (
    <>
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-10">
            Conditions We Treat
          </h2>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 md:p-10 text-black shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6 md:gap-x-12 text-base md:text-lg font-medium">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="hover:text-gray-500 ease-in-out duration-500 cursor-pointer transition-colors duration-200"
                >
                  {condition}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/condition_we_treate"
                className="text-white bg-cyan-500 py-4 px-8 rounded-full hover:shadow-xl shadow-cyan-400 ease-in-out duration-500 text-sm md:text-xl font-bold transition-all hover:text-gray-500 "
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default treat_home;
