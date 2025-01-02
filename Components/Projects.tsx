"use client";
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="w-64 h-36 flex items-center justify-center border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow">
          Project 1
        </div>
        <div className="w-64 h-36 flex items-center justify-center border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow">
          Project 2
        </div>
        <div className="w-64 h-36 flex items-center justify-center border-2 rounded-lg vbg shadow-md hover:shadow-lg transition-shadow">
          Project 3
        </div>
      </div>
      <hr className="w-[90%] h-1 mx-auto my-8 bg-gray-100 border-0 rounded "></hr>
    </section>
  );
};

export default Projects;
