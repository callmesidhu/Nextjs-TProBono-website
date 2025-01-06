"use client";
import React, { useState } from "react";
import "./Projects.css";
import Image from "next/image";
import clsx from "clsx"; // Import clsx
import "animate.css"; // Import animate.css for animations
import { motion } from "framer-motion"; // Import framer-motion for sliding animation

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
        {/* Project 1 */}
        <motion.div
          className={clsx(
            "w-64 flex-col p-3 h-auto min-h-24 flex items-center justify-center border-2 rounded-lg vbg shadow-md",
            "hover:shadow-lg hover:scale-105 transition-transform",
            "animate__animated animate__fadeIn"
          )}
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          onClick={() =>
            showPopup(
              "Smart Drinking Waters at CET",
              "Smart Water is an innovative initiative aimed at revolutionizing water management through real-time monitoring, leak detection, and optimized distribution, making it an essential step toward sustainability and resource efficiency. The system leverages data-driven insights to track water usage patterns across the campus, providing instant alerts for unusual consumption or potential leaks. This ensures not only significant water conservation but also cost savings by minimizing wastage. Users can conveniently access these features through a centralized mobile app, which enables remote control, comprehensive reporting, and timely decision-making. A critical aspect of the initiative addresses the often-overlooked issue of water filter maintenance. Neglected filters tend to clog with contaminants, leading to the growth of harmful bacteria, reduced filtration efficiency, and potential health risks. Additionally, clogged filters can strain connected appliances, shortening their lifespan and increasing energy consumption. To combat these challenges, the Smart Water system integrates a real-time filter monitoring feature that tracks filter performance and water quality. It also provides automated maintenance reminders, ensuring filters are replaced or cleaned promptly, thereby preserving water purity and optimizing appliance efficiency. By combining advanced monitoring, proactive maintenance, and data-backed insights, Smart Water offers a seamless, sustainable solution to water management that promotes better health, efficiency, and environmental stewardship."

            )
          }
        >
          <h1 className="my-2">
            <u>Smart Drinking Waters at CET</u>
          </h1>
          <Image
            src="/Images/p1.jpg"
            alt="Smart Water"
            width={300}
            height={400}
            className="rounded-2xl m-4"
          />
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className={clsx(
            "w-64 flex-col p-3 h-auto min-h-24 flex items-center justify-center border-2 rounded-lg vbg shadow-md",
            "hover:shadow-lg hover:scale-105 transition-transform",
            "animate__animated animate__fadeIn"
          )}
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.4 }} 
          transition={{ duration: 0.5 }}
          onClick={() =>
            showPopup(
              "Innovation Mentorship Programme",
              "The flagship event of T PRO BONO is a pioneering mentorship program designed to bridge the gap between theoretical knowledge and practical application for school students. This initiative selects a group of talented students and pairs them with mentors from CET, who guide them in developing projects inspired by everyday concepts. Through interactive project workshops, participants engage in brainstorming, designing, and problem-solving activities, enabling them to transform simple ideas into innovative solutions. This hands-on approach fosters the technological growth of the school students while simultaneously enhancing the mentorship and leadership skills of CET students, creating a mutually beneficial platform. By immersing participants in real-world problem-solving, the program equips school students with the skills and confidence needed to tackle complex challenges. The mentorship sessions introduce them to a structured way of identifying and addressing real-life issues, helping them develop critical thinking and innovative mindsets. With guidance from experienced mentors, students gain exposure to tools, techniques, and methodologies that empower them to conceptualize and implement practical solutions, instilling a sense of accomplishment and curiosity to explore more. This initiative serves as a stepping stone to building a technically adept generation capable of addressing future challenges with creativity and confidence. By fostering a culture of knowledge-sharing and collaboration, T PRO BONO not only promotes the development of technical expertise but also inspires participants to think beyond conventional boundaries and embrace innovation. This mentorship program, therefore, acts as a catalyst for nurturing the leaders and problem-solvers of tomorrow, encouraging them to use their skills for meaningful societal impact."
            )
          }
        >
          <h1 className="my-2">
            <u>Innovation Mentorship Programme</u>
          </h1>
          <Image
            src="/Images/p2.jpg"
            alt="Innovation Mentorship"
            width={300}
            height={400}
            className="rounded-2xl m-4"
          />
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className={clsx(
            "w-64 flex-col p-3 h-auto min-h-24 flex items-center justify-center border-2 rounded-lg vbg shadow-md",
            "hover:shadow-lg hover:scale-105 transition-transform",
            "animate__animated animate__fadeIn"
          )}
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.4 }} 
          transition={{ duration: 0.5}} 
          onClick={() =>
            showPopup(
              "T-PADANAMURI",
              "The T PADANAMURI project is an innovative initiative aimed at bridging the educational divide in tribal settlements by constructing smart study rooms in Vithura, a town in Nedumangad Taluk of Thiruvananthapuram. Despite Kerala’s reputation for high literacy, Vithura lags behind with a literacy rate of 88.64%, highlighting the need for targeted intervention, especially among the Scheduled Tribe (18.17%) and Scheduled Caste (12.37%) communities. The project focuses on equipping tribal hamlets like Thachrukala, Kallankudi, and Chembankunnu with advanced learning facilities that integrate virtual hands-on learning, energy-efficient solar and wind power systems, and reliable internet connectivity through VSAT or boosters. With mentorship provided by CET students, the initiative aims to ignite curiosity in STEM fields and inspire aspirations for higher education. The project also emphasizes cost-effective construction techniques and local workforce involvement, promoting community participation and sustainability. By addressing educational inequities and fostering holistic development, T PADANAMURI seeks to empower tribal students to overcome challenges and build a future rich with opportunities."
            )
          }
        >
          <h1 className="my-2">
            <u>T-PADANAMURI</u>
          </h1>
          <Image
            src="/Images/p3.jpg"
            alt="T-PADANAMURI"
            width={300}
            height={400}
            className="rounded-2xl m-4"
          />
        </motion.div>
      </div>

      <hr className="w-[90%] h-1 mx-auto my-8 bg-gray-100 border-0 rounded"></hr>

      {/* Popup Modal */}
      {popup.visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-black text-white p-4 rounded-lg shadow-lg w-[90%] lg:w-[50%] relative max-h-[80vh] overflow-y-auto">
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
