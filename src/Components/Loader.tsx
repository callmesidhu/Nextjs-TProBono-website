import React from "react";
import './Loader.css';
import Image from "next/image";

const Loader: React.FC = () => {
  return (
    <div className="splash-screen p-5 pl-10">
    <Image 
  src="/images/logo.png" 
  alt="TProBono Logo" 
  width={150} 
  height={150} 
/>
      <div className="spinner" />
    </div>
  );
};

export default Loader;
