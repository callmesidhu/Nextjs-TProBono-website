"use client";
import React from "react";
import './Intro.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div id="intro" className="flex items-center justify-center w-full h-full text-center flex-col ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image 
          src="/images/logo.png" 
          alt="TProBono Logo" 
          width={350} 
          height={350} 
        />
      </motion.div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-4xl lg:text-[70px] sm:text-4xl font-bold text-white intro-font"
      >
        <u>T Pro Bono</u>
      </motion.h1>

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="lg:mt-4 mt-1 text-lg text-white intro-font"
      >
        Technology for public good
      </motion.h2>
    </div>
  );
};

export default Intro;
