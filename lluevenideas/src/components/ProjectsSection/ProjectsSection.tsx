'use client';
import { useEffect, useState } from "react";
import ProjectSectionLarge from "./ProjectSectionLarge";
import ProjectSectionSmall from "./ProjectSectionSmall";

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    
    // Verificar la consulta de medios inicial
    const checkMediaQuery = (mediaQuery: MediaQueryList) => {
      setIsMobile(mediaQuery.matches);
    };
    
    // Manejar cambios en la consulta de medios
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    // Verificar la consulta de medios en el primer renderizado
    checkMediaQuery(mediaQuery);
    
    // Añadir listener para cambios en el tamaño de pantalla
    mediaQuery.addEventListener('change', handleMediaChange);
    
    // Limpiar el listener al desmontar el componente
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return isMobile ? <ProjectSectionSmall /> : <ProjectSectionLarge />;
};

export default ProjectSection;