"use client";
import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when the element comes into view
    threshold: 0.3,  // Trigger animation when 40% of the element is in view
  });

  return (
    <section id="services" className="p-8 text-white flex flex-col ">
      <h2 className="text-3xl font-bold mb-6 mx-6">Our Key Objectives:</h2>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <motion.div
          ref={ref}
          className="vbg w-full max-w-4xl min-h-36 h-auto text-white flex items-center justify-center transform -skew-x-12 border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, x: -100 }} // Start from left and hidden
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Slide in when in view
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl lg:text-2xl text-center px-4">
            Utilize technological innovation to address societal challenges, improve public welfare, and offer solutions that enhance the quality of life.
          </h1>
        </motion.div>

        <motion.div
          ref={ref}
          className="vbg w-full max-w-4xl min-h-36 h-auto text-white flex items-center justify-center transform -skew-x-12 border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, x: -100 }} // Start from left and hidden
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Slide in when in view
          transition={{ duration: 0.5, delay: 0.3 }} // Delay to make it slide one by one
        >
          <h1 className="text-xl lg:text-2xl text-center px-4">
            Develop projects that directly contribute to the betterment of underserved communities, focusing on health, education, and other public sectors.
          </h1>
        </motion.div>

        <motion.div
          ref={ref}
          className="vbg  w-full max-w-4xl min-h-36 h-auto text-white flex items-center justify-center transform -skew-x-12 border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, x: -100 }} // Start from left and hidden
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Slide in when in view
          transition={{ duration: 0.5, delay: 0.6 }} // Delay to make it slide one by one
        >
          <h1 className="text-xl lg:text-2xl text-center px-4">
            Engage the brightest minds from CET to lead real-world tech projects that have meaningful societal impacts.
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
