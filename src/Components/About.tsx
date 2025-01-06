"use client";
import React, { useRef } from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';  

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 1, 
  });

  return (
    <div id="about" className="flex justify-center h-full flex-col p-10">
      <motion.h2
        ref={ref}  // Reference to the element
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mx-2 lg:mx-16 text-2xl lg:text-3xl"
      >
        Who are we?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="mx-3 lg:mx-10"
      >
        Driven by a desire to transform society through innovative technological
        solutions, T PRO BONO is a dynamic non-profit organization company associated with CET&apos;s
        Technology Business Incubator (TBI). The creative minds of CET students, who
        are committed to using their abilities to have a significant influence on the
        community, are the sole leaders of our organization.
      </motion.p>

      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: inView ? "90%" : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-[90%] h-1 mx-auto my-8 bg-gray-100 border-0 rounded"
      />
    </div>
  );
};

export default About;
