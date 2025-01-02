"use client";
import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [popup, setPopup] = useState<{ visible: boolean; title: string; message: string }>({
    visible: false,
    title: "",
    message: "",
  });

  const showPopup = (title: string, message: string) => {
    setPopup({ visible: true, title, message });
  };

  const closePopup = () => {
    setPopup({ visible: false, title: "", message: "" });
  };

  return (
    <section id="projects" className="flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div
          className="w-64 h-auto flex items-center justify-center border-2 rounded-lg vbg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          onClick={() =>
            showPopup(
              "Smart Drinking Waters at CET",
              "Smart Water is an innovative initiative aimed at revolutionizing water management through real-time monitoring, leak detection, and optimized distribution, making it an essential step toward sustainability and resource efficiency. The system leverages data-driven insights to track water usage patterns across the campus, providing instant alerts for unusual consumption or potential leaks. This ensures not only significant water conservation but also cost savings by minimizing wastage. Users can conveniently access these features through a centralized mobile app, which enables remote control, comprehensive reporting, and timely decision-making. A critical aspect of the initiative addresses the often-overlooked issue of water filter maintenance. Neglected filters tend to clog with contaminants, leading to the growth of harmful bacteria, reduced filtration efficiency, and potential health risks. Additionally, clogged filters can strain connected appliances, shortening their lifespan and increasing energy consumption. To combat these challenges, the Smart Water system integrates a real-time filter monitoring feature that tracks filter performance and water quality. It also provides automated maintenance reminders, ensuring filters are replaced or cleaned promptly, thereby preserving water purity and optimizing appliance efficiency. By combining advanced monitoring, proactive maintenance, and data-backed insights, Smart Water offers a seamless, sustainable solution to water management that promotes better health, efficiency, and environmental stewardship."
            )
          }
        >
          <h1>
            <u>Smart Drinking Waters at CET</u>
          </h1>
        </div>
        <div
          className="w-64 h-auto flex items-center justify-center border-2 rounded-lg vbg shadow-md hover:shadow-lg hover:scale-105 transition-transform "
          onClick={() =>
            showPopup(
              "Innovation Mentorship Programme",
             "The flagship event of T PRO BONO is a pioneering mentorship program designed to bridge the gap between theoretical knowledge and practical application for school students. This initiative selects a group of talented students and pairs them with mentors from CET, who guide them in developing projects inspired by everyday concepts. Through interactive project workshops, participants engage in brainstorming, designing, and problem-solving activities, enabling them to transform simple ideas into innovative solutions. This hands-on approach fosters the technological growth of the school students while simultaneously enhancing the mentorship and leadership skills of CET students, creating a mutually beneficial platform. By immersing participants in real-world problem-solving, the program equips school students with the skills and confidence needed to tackle complex challenges. The mentorship sessions introduce them to a structured way of identifying and addressing real-life issues, helping them develop critical thinking and innovative mindsets. With guidance from experienced mentors, students gain exposure to tools, techniques, and methodologies that empower them to conceptualize and implement practical solutions, instilling a sense of accomplishment and curiosity to explore more. This initiative serves as a stepping stone to building a technically adept generation capable of addressing future challenges with creativity and confidence. By fostering a culture of knowledge-sharing and collaboration, T PRO BONO not only promotes the development of technical expertise but also inspires participants to think beyond conventional boundaries and embrace innovation. This mentorship program, therefore, acts as a catalyst for nurturing the leaders and problem-solvers of tomorrow, encouraging them to use their skills for meaningful societal impact."
            )
          }
        >
          <h1>
            <u>Innovation Mentorship Programme</u>
          </h1>
        </div>
        <div
          className="w-64 h-auto min-h-28 flex items-center justify-center border-2 rounded-lg vbg shadow-md hover:shadow-lg hover:scale-105 transition-transform "
          onClick={() =>
            showPopup(
              "T-PADANAMURI",
              "The flagship event of T PRO BONO is a mentorship program that bridges the gap between theoretical learning and practical application for school students. A select group of students will be guided by CET mentors to develop innovative projects inspired by everyday concepts. These projects, executed through interactive workshops, provide hands-on experience in brainstorming, designing, and solving real-world challenges. The program not only fosters the technological growth of school students but also enhances the leadership and mentoring skills of CET participants, making it a mutually beneficial initiative. By exposing students to real-world problem-solving, the program serves as a foundation for building a technically proficient and innovative generation. Participants gain essential skills such as critical thinking, creativity, and structured problem-solving, which empower them to tackle future challenges confidently. This initiative inspires students to think beyond the classroom, equipping them with tools and knowledge to create impactful solutions for society. T PRO BONO’s mentorship program is, therefore, a stepping stone toward shaping capable, forward-thinking individuals who are ready to make meaningful contributions to the world. These projects highlight T PRO BONO’s commitment to leveraging student-led initiatives for societal good. By combining innovation with a focus on education and sustainability, these projects will create a lasting impact in communities and serve as a model for future endeavours."
            )
          }
        >
          <h1>
            <u>T-PADANAMURI</u>
          </h1>
        </div>
      </div>

      <hr className="w-[90%] h-1 mx-auto my-8 bg-gray-100 border-0 rounded"></hr>

      {/* Popup Modal */}
      {popup.visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white text-black p-4 rounded-lg shadow-lg w-[90%] lg:w-[50%] relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className=" top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">{popup.title}</h2>
            <p>{popup.message}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
