import React from "react";
import project1 from "../assets/1kva.jpg"; // Replace with your actual image paths
import project2 from "../assets/levi.jpg"; // Example placeholder
import project3 from "../assets/men.jpg"; // Example placeholder
import project4 from "../assets/roof.jpg"; // Example placeholder
import project5 from "../assets/inverter.jpg"; // Example placeholder
import project6 from "../assets/2kv2.jpg"; // Example placeholder
import { div } from "framer-motion/client";

function Projects() {
  // Example project data
  const projects = [
    {
      id: 1,
      image: project1,
      name: "Project Simple",
      description: "1kva/12v Inverter System",
    },
    {
      id: 2,
      image: project2,
      name: "Project Levi",
      description: "3.5kva/48v Inverter System",
    },
    {
      id: 3,
      image: project3,
      name: "Project SPA",
      description: "5kva/48v Solar Inverter System",
    },
    {
      id: 4,
      image: project4,
      name: "Project EcoPower",
      description: "3kva/36v Solar Inverter System",
    },
    {
      id: 5,
      image: project5,
      name: "Project Sunlight",
      description: "8kva/72v Solar Power System",
    },
    {
      id: 6,
      image: project6,
      name: "Project BrightFuture",
      description: "15kva/120v Hybrid Inverter System",
    },
  ];

  return (
        <div>
             <div className="bg-gray-100 py-16 px-4  md:px-8 lg:px-16">
                
      <p className="text-center font-semibold py-5 pb-8 text-3xl md:text-4xl lg:text-5xl text-[#0065A4] mb-8">
        Some Of Our Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
            </div>


        </div>
  );
}

export default Projects;