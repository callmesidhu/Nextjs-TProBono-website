import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Intro from "@/Components/Intro";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";

export default function Home() {
  return (
    <div className="App flex-col flex-1">
      <Navbar />
      <section>
        <div className="h-screen flex items-center justify-center flex-col">
          <Intro />
        
        <Projects />
        <Services />
        <About />
        <Contact />
        </div>
      </section>
    </div>
  );
}
