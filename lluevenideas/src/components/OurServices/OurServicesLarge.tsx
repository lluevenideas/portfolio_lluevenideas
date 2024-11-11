'use client';
import { dataService } from "@/utils/data.services";
import { IServices } from "@/utils/interfaces";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurServicesLarge = () => {
  const view = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: view.current,
        start: "top 10%",
        end: "+=50",
        scrub: 1,
      }
    });

    // Animación de entrada para todas las tarjetas
    cardsRef.current.forEach((card, index) => {
      if (card) {
        tl.fromTo(card, {
          xPercent: index % 2 === 0 ? -150 : 150,
          rotation: index % 2 === 0 ? -10 : 10,
          opacity: 0
        }, {
          xPercent: 0,
          rotation: 0,
          opacity: 1,
          duration: 8,
          ease: "back.out(1.7)"
        }, index * 0.1); 
      }
    });

    // Timeline para la animación de salida
    const exitTL = gsap.timeline({
      scrollTrigger: {
        trigger: view.current,
        start: "bottom 80%",
        end: '+=100',
        scrub: 1,
      }
    });

   

    return () => {
      tl.kill();
      exitTL.kill();
    };
  }, { dependencies: [], scope: view, revertOnUpdate: true });

  return (
    <section
      ref={view}
      id="services"
      className="flex flex-col bg-white text-black w-full min-h-screen px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-left font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl my-12">
        Nuestros Servicios
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-black to-white mb-8"></div>

      <div className="flex flex-wrap justify-center items-start mt-6 gap-8">
        {dataService && dataService.map((item: IServices, index) => (
          <div
            key={index}
            className="w-full sm:w-[250px] flex flex-col items-center mb-8"
            ref={(el: HTMLDivElement | null) => {
              if (el !== null) {
                cardsRef.current[index] = el;
              }
            }}
          >
            <div
              className="p-4 rounded-lg relative group w-full sm:w-[250px] h-[250px] flex flex-col justify-end
              transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: item.bg }}
            >
              <div className="absolute inset-0 flex items-center justify-center
               opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-visible"
              >
                <Image
                  style={{
                    width: 'auto', 
                    height: 'auto', 
                  }}
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="rounded-md top-[-100px] relative"
                />
                <Link className="rounded-md top-[-170px] relative p-4 bold"
                  style={{ backgroundColor: item.bg_bottom }} href={"#contact"}>
                  Más Info
                </Link>
              </div>
              <div className="font-bold text-xl text-center mb-4">{item.title}</div>
            </div>
            <div className="text-center mt-4 w-full sm:w-[250px] h-[100px] overflow-hidden">
              <p className="overflow-hidden text-ellipsis">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesLarge;
