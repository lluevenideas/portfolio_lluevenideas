'use client';
import React, { useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import data_projects from "../../utils/data.project";
import Link from "next/link";
import Image from "next/image";


const ProjectSectionLarge = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  const horizontalSection = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray('.horizontal-panel');
    const ctx = gsap.context(() => {
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          end: "+=3500",
        },
      });
    }, horizontalSection);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" ref={horizontalSection} className="overflow-x-hidden section-container bg-black">
      <div className="text-left text-white ml-16 font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl my-12">
        Descubre nuestros últimos proyectos
      </div>
      <div className="w-fill-available mx-16 h-[2px] bg-gradient-to-r from-white to-black"></div>
      <div className="horizontal-section">
        {data_projects && data_projects.map((project, index) => (
          <div key={index} className="horizontal-panel">
            <div className="h-full">
              <Link href={project.link} target="_blank">
                <Image
                  width={500}
                  height={500}
                  src={project.imageUrl}
                  alt={project.title}
                  className="image transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="flex flex-row-reverse justify-between pl-3">
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-2xl text-right font-bold mt-4 text-[--primary-color]"
                >
                  {project.title}
                </Link>
                <div className="mt-4 flex flex-col gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <p
                      key={tagIndex}
                      className="border-[1px] border-[--primary-color] text-white text-xs font-semibold py-1 px-3 rounded-full"
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
    </section>
  );
};
export default ProjectSectionLarge;