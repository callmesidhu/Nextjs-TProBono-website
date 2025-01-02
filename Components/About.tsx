"use client";
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="flex justify-center h-full flex-col p-10">
      <h2 className="mx-2 lg:mx-16 text-2xl lg:text-3xl">Who are we?</h2>
      <p className="mx-3 lg:mx-10">
        Driven by a desire to transform society through innovative technology
        solutions, T PRO BONO is a dynamic non-profit company associated with CET&apos;s
        Technology Business Incubator (TBI). The creative minds of CET students, who
        are committed to using their abilities to have a significant influence on the
        community, are the sole leaders of our organization.
      </p>
      <hr className="w-[90%] h-1 mx-auto my-8 bg-gray-100 border-0 rounded" />
    </div>
  );
};

export default About;
