// HeroSection.tsx
'use client';
import { useState } from "react";
import Image from "next/image";
import Gota from "../../../public/hero/gota-agua.svg";

const HeroSection: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const handleClickImage = () => {
    setShowAnimation((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-[--primary-color] flex flex-col 
    items-center justify-center p-4 text-black relative">
      <div className="text-center flex items-end">
        <h1 className="text-shadow text-4xl sm:text-6xl md:text-8xl 
        lg:text-[170px] xl:text-[170px] logo-font">
          LLue<span className="logo-font-ven">ven</span>ideas
        </h1>
        <div className="sm:my-0 sm:mt-5 cursor-pointer relative w-2 h-4 sm:w-8 
        sm:h-10 md:w-12 md:h-14 lg:w-16 lg:h-20 xl:w-20 xl:h-24 sm:mb-2.5 md:mb-2"
          onClick={handleClickImage}>
          <Image src={Gota} alt="Imagen de una gota de agua" fill className="gota-animation" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
