"use client";
import React from "react";
import './Intro.css';
import Image from 'next/image';

const Intro = () => {
  return (
    <div id="intro" className="flex items-center justify-center w-full h-full text-center flex-col ">
      <Image 
  src="/Images/logo.png" 
  alt="TProBono Logo" 
  width={350} 
  height={350} 
/>
      <h1 className="text-4xl lg:text-[70px] sm:text-4xl font-bold text-white intro-font">
        <u>T Pro Bono</u>
      </h1>
      <h2 className="lg:mt-4 mt-1 text-lg text-white intro-font">Technology for public good</h2>
    </div>
  );
};

export default Intro;
