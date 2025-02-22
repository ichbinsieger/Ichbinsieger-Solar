import  { useState } from "react";
import project1 from "../assets/1kva.jpg";
import project2 from "../assets/levi.jpg";
import project3 from "../assets/men.jpg";
import project4 from "../assets/roof.jpg";
import project5 from "../assets/inverter.jpg";
import project6 from "../assets/2kv2.jpg";

function Projects() {
  const [hoverId, setHoverId] = useState<number | null>(null);

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
      name: "Project Suru",
      description: "3kva/24v Solar Inverter System",
    },
    {
      id: 4,
      image: project4,
      name: "Panel works",
      description: "5kva/48v Solar Inverter System",
    },
    {
      id: 5,
      image: project5,
      name: "Project Spa",
      description: "5kva/48v Solar Power System",
    },
    {
      id: 6,
      image: project6,
      name: "Project Lili",
      description: "2kva/24v Inverter System",
    },
  ];

  return (
    <div id="projects">
      <div className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
        <p className="text-center font-semibold py-5 pb-8 text-3xl md:text-4xl lg:text-5xl text-[#0065A4] mb-8">
          Some Of Our Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300 bg-black"
              onClick={() => setHoverId(project.id)}
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

        {hoverId && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setHoverId(null)}
            />
            <div className="relative z-30 bg-white rounded-lg shadow-2xl p-6 w-11/12 md:w-3/4 lg:w-1/2 h-[70vh] overflow-auto">
              <img
                src={projects.find((p) => p.id === hoverId)!.image}
                alt={projects.find((p) => p.id === hoverId)!.name}
                className="w-full h-[50vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#0065A4]">
                  {projects.find((p) => p.id === hoverId)!.name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projects.find((p) => p.id === hoverId)!.description}
                </p>
                <button
                  className="mt-6 bg-[#0065A4] text-white px-6 py-2 rounded-lg hover:bg-[#005080] transition-colors duration-300"
                  onClick={() => setHoverId(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;