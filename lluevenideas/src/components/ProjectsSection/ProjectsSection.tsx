'use client';
import { useEffect, useState } from "react";
import ProjectSectionLarge from "./ProjectSectionLarge";
import ProjectSectionSmall from "./ProjectSectionSmall";

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <ProjectSectionSmall /> : <ProjectSectionLarge />;
};

export default ProjectSection;