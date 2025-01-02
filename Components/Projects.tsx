import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="w-64 h-36 flex items-center justify-center border-2 rounded-lg bg shadow-md hover:shadow-lg transition-shadow">
          Project 1
        </div>
        <div className="w-64 h-36 flex items-center justify-center border-2 rounded-lg bg shadow-md hover:shadow-lg transition-shadow">
          Project 2
        </div>
        <div className="w-64 h-36 flex items-center justify-center border-2 rounded-lg bg shadow-md hover:shadow-lg transition-shadow">
          Project 3
        </div>
      </div>
    </section>
  );
};

export default Projects;
