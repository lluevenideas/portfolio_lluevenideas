'use client';
import Image from "next/image";
import Gota from "../../../public/hero/gota-agua.svg";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const HeroPrueba = () => {
  const waterAnimation = require("../../../public/hero/animation-img/AnimationI.json");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        animationData: waterAnimation,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }

    return () => {
      if (containerRef.current) {
        lottie.destroy();
      }
    };
  }, [waterAnimation]);

  return (
    <div className="boxes-container w-full min-h-screen bg-[--primary-color] flex flex-col 
    items-center justify-center p-4 text-black relative"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

      <div className="text-center flex items-end relative">
        <h1 className="text-shadow text-4xl sm:text-6xl md:text-8xl 
        lg:text-[160px] xl:text-[160px] logo-font">
          LLue<span className="logo-font-ven">ven</span>
          {/* Animación Lottie directamente dentro de HeroPrueba */}
          <div
            ref={containerRef}
            style={{
              width: "80px",  // Ajusta el tamaño según lo necesites
              height: "100px", // Ajusta el tamaño según lo necesites
              position: "absolute",
              bottom: "20%",  // Alinea en la parte inferior de la palabra
              left: "45%",
              marginLeft: "90px",
              transform: "translateX(-50%)",  // Centra la animación
            }}
          />
          <span className="text-transparent text-shadow-none ml-1 mr-1">i</span>deas
        </h1>

        <div className="sm:my-0 sm:mt-5 cursor-pointer relative w-2 h-4 sm:w-8 
        sm:h-10 md:w-12 md:h-14 lg:w-16 lg:h-20 xl:w-20 xl:h-24 sm:mb-2.5 md:mb-2">
          <Image src={Gota} alt="Imagen de una gota de agua" fill className="gota-animation" />
        </div>
      </div>

    </div>
  );
};

export default HeroPrueba;
