import Image from "next/image";
import Gota from "../../../public/hero/gota-agua.svg";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[--primary-color]
     flex flex-col items-center justify-center p-4 text-black ">
      <div className="text-center flex items-end">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[170px] xl:text-[170px]
         logo-font ">
          LLue<span className="logo-font-ven">ven</span>ideas
        </h1>
        <div className="sm:my-0 sm:mt-5">
          <div className="relative w-2 h-4 sm:w-8 sm:h-10 md:w-12 md:h-14 
          lg:w-16 lg:h-20 xl:w-20 xl:h-24 sm:mb-2.5 md:mb-2">
            <Image src={Gota} alt="Imagen de una gota de agua" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
