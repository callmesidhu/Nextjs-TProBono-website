"use client";
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section
      id="services"
      className="p-8 text-white"
    >
      <h2 className="text-3xl font-bold mb-6 mx-6">Our Key Services:</h2>
      <div className="flex flex-col justify-center gap-6">
        <div className="vbg w-[80%] h-36 text-white flex items-center justify-center transform -skew-x-12 vbg">
         <h1 className='text-2xl text-center'> Utilize technological innovation to address societal challenges, improve public welfare, and offer solutions that enhance the quality of life.</h1>
        </div>
        <div className="vbg w-[80%] h-36 text-white flex items-center justify-center transform -skew-x-12 vbg">
          <h1 className='text-2xl text-center'>Develop projects that directly contribute to the betterment of underserved communities, focusing on health, education, and other public sectors.</h1>
        </div>
        <div className="vbg w-[80%] h-36 text-white flex items-center justify-center transform -skew-x-12 vbg">
          <h1 className='text-2xl text-center'>Engage the brightest minds from CET to lead real-world tech projects that have meaningful societal impacts.</h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
