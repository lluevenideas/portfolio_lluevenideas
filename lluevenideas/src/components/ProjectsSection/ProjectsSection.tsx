"use client";
import React, { useState } from "react";

const projects = [
  {
    title: "ZPMC SPARES",

    tags: ["Página web", "Diseño UX/UI"],
    imageUrl: "/project1.jpg",
  },
  {
    title: "PERCUBATERISTAS ONLINE",
    tags: ["Página web", "Diseño UX/UI"],
    imageUrl: "/project2.jpg",
  },
  {
    title: "Shop E-commerce",
    tags: ["E-Commerce", "Diseño UX/UI", "SEO integrado"],
    imageUrl: "/project3.jpg",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex-col bg-black text-white w-full h-[100vh] content-center justify-center items-center">
      <div className="w-full h-full justify-center content-center items-center">
        <h1 className="text-left font-extrabold text-7xl pl-16 py-8">
          Descubre nuestros últimos proyectos
        </h1>
        <div className="w-auto mx-16 h-[2px] bg-gradient-to-r from-black to-white"></div>

        <div className="flex sm:h-[80%] justify-center items-center mt-8 ">
          <div className="relative w-full h-[65%] flex justify-center items-cemter overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-in-out transform gap-10  ml-16 "
              style={{ transform: `translateX(-${currentIndex * 35}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 "
                  style={{ width: "auto", height: "100%" }}
                >
                  <div className=" h-full">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-auto h-[75%] object-cover"
                    />
                    <div className=" flex flex-row-reverse justify-between pl-3">
                      <h2 className="text-2xl text-right font-bold mt-4 text-blue-500 ">
                        {project.title}
                      </h2>
                      <div className="mt-4 flex flex-col  gap-2 ">
                        {project.tags.map((tag, tagIndex) => (
                          <p
                            key={tagIndex}
                            className="border-[1px] border-blue-600  text-white text-xs font-semibold py-1 px-3 rounded-full"
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute text-7xl left-0 w-16 h-full bg-black  hover:bg-blue-950"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute text-7xl right-0 w-16 h-full bg-black  hover:bg-blue-950"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
