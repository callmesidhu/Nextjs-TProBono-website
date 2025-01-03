"use client";
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="p-8 text-white flex flex-col ">
      <h2 className="text-3xl font-bold mb-6 mx-6">Our Key Objectives:</h2>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="vbg w-full max-w-4xl min-h-36 h-auto text-white flex items-center justify-center transform -skew-x-12 border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow">
          <h1 className="text-xl lg:text-2xl text-center px-4">
            Utilize technological innovation to address societal challenges, improve public welfare, and offer solutions that enhance the quality of life.
          </h1>
        </div>
        <div className="vbg w-full max-w-4xl min-h-36 h-auto text-white flex items-center justify-center transform -skew-x-12 border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow">
          <h1 className="text-xl lg:text-2xl text-center px-4">
            Develop projects that directly contribute to the betterment of underserved communities, focusing on health, education, and other public sectors.
          </h1>
        </div>
        <div className="vbg w-full max-w-4xl min-h-36 h-auto text-white flex items-center justify-center transform -skew-x-12 border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow">
          <h1 className="text-xl lg:text-2xl text-center px-4">
            Engage the brightest minds from CET to lead real-world tech projects that have meaningful societal impacts.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
