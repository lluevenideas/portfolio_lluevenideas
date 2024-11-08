import React from 'react';
import data_projects from '../../utils/data.project';
import Link from 'next/link';

const ProjectSectionSmall = () => {
  return (
    <section id='projects' className="bg-black px-4 py-8">
      <div className="text-left font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl my-12">
        Descubre nuestros últimos proyectos
      </div>
      <div className="w-full mx-auto h-[2px] bg-gradient-to-r from-white to-black mb-8"></div>
      <div className=" flex flex-col items-center gap-8">
        {data_projects && data_projects.map((project, index) => (
          <div key={index} className="mb-8 w-full max-w-lg flex flex-col items-center">
            <Link href={project.link} target="_blank">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="image w-full h-auto max-h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="flex flex-col justify-between mt-4 w-full px-4">
              <Link href={project.link} target="_blank" className="text-2xl text-center font-bold mt-4 text-[--primary-color]">
                {project.title}
              </Link>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="border-[1px] border-[--primary-color] text-white text-xs font-semibold py-1 px-3 rounded-full">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSectionSmall;
