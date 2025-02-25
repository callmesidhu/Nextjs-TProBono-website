"use client";
import React, { useState, useEffect } from "react";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Intro from "@/Components/Intro";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Loader from "@/Components/Loader";



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading?(<Loader/>):(
    <div className="App flex-col flex pb-4">
      <section className="lgbg1">
      <Navbar />
      <Intro />
      <About />
      </section>
      <Projects />
      <section className="lgbg2">
      <Services />
      <hr className="w-[90%] h-1 mx-auto my-8 bg-gray-100 border-0 rounded "></hr>
      <Contact />
      <hr className="w-[90%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded "></hr>
      <p className='text-center text-sm mb-4 my-2'>© TProbono (CET) &nbsp; 2025</p>
      </section>
    </div>
  );
}
