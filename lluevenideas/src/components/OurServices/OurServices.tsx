'use client';
import { useEffect, useState } from "react";
import OurServicesLarge from "./OurServicesLarge";
import OurServicesSmall from "./OurServicesSmall";
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

  return isMobile ? <OurServicesSmall /> : <OurServicesLarge />;
};

export default ProjectSection;