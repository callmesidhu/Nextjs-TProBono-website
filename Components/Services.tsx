import React from 'react';

const Services = () => {
  return (
    <section id="services" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
      <p className="text-center text-lg mb-8">These are the services I offer.</p>
      <div className="flex flex-col items-center space-y-8">
        <div className="w-64 h-20 bg-orange-700 text-white flex items-center justify-center transform -skew-x-12">
          <span className="transform skew-x-12">Service 1</span>
        </div>
        <div className="w-64 h-20 bg-orange-700 text-white flex items-center justify-center transform -skew-x-12">
          <span className="transform skew-x-12">Service 2</span>
        </div>
        <div className="w-64 h-20 bg-orange-600 text-white flex items-center justify-center transform -skew-x-12">
          <span className="transform skew-x-12">Service 3</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
