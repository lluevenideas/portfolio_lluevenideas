'use client';
import Image from "next/image";
import Gota from "../../../public/hero/gota-agua.svg";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const HeroPrueba = () => {
  const lluevenIdeas = require("../../../public/hero/animation-img/lluevenIdeas_bg_black.json")

  const containerRef = useRef<HTMLDivElement>(null);
  const containerRefCloud =  useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationInstance: lottie.AnimationItem | undefined;

    if (containerRef.current) {
      animationInstance = lottie.loadAnimation({
        container: containerRef.current,
        animationData: lluevenIdeas,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
      
      // Ajustar la velocidad de la animación
      animationInstance.setSpeed(0.5); // Cambia 0.5 al valor que desees para ajustar la velocidad
    }

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [lluevenIdeas]);

  return (
    <div className="boxes-container w-full min-h-screen bg-black flex flex-col 
    items-center justify-center p-4 text-black relative"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div ref={containerRefCloud}></div>
      <div className="text-center flex items-end relative">
     
          <div
            ref={containerRef}
            className=""
          />
         

        {/* <div className="sm:my-0 sm:mt-5 cursor-pointer relative w-2 h-4 sm:w-8 
        sm:h-10 md:w-12 md:h-14 lg:w-16 lg:h-20 xl:w-20 xl:h-24 sm:mb-2.5 md:mb-2">
          <Image src={Gota} alt="Imagen de una gota de agua" fill className="gota-animation" />
        </div> */}
      </div>

    </div>
  );
};

export default HeroPrueba;
