"use client";

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Intro from "@/Components/Intro";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";


export default function Home() {
  return (
    <div className="App flex-col flex pb-4">
      <section className="lgbg">
      <Navbar />
      <Intro />
      <About />
      </section>
      <Projects />

    </div>
  );
}
