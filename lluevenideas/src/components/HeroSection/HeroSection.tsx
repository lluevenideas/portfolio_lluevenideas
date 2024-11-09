'use client';
import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import lluevenIdeas from "../../../public/hero/llueven_ideas.json";

const HeroPrueba = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationInstance: AnimationItem | null = null;

    if (containerRef.current) {
      animationInstance = lottie.loadAnimation({
        container: containerRef.current,
        animationData: lluevenIdeas,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });

      animationInstance.setSpeed(0.5);
    }

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  return (
    <div id="home" className="boxes-container w-full min-h-screen bg-black flex flex-col 
    items-center justify-center p-4 text-black relative"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div className="text-center flex items-end relative">
        <div
          ref={containerRef}
        />
      </div>
    </div>
  );
};

export default HeroPrueba;
