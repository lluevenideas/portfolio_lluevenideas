import { IAbout } from "@/utils/interfaces";
import AboutCard from "./AboutCard";
import { AboutArray } from "@/utils/AboutArray";
const AboutUsSection = () => {
  return (
    <div className="flex-col bg-white text-black w-full h-[100vh] content-center justify-center items-center ">
      <div className="w-full h-full justify-center content-center items-center ">
        <h1 className="text-left font-extrabold text-7xl pl-16">
          Nuestros servicios
        </h1>
        <div className="flex sm:h-[80%] justify-center items-center ">
          {AboutArray?.map((item: IAbout) => (
            <AboutCard itemData={item} key={Math.random()}></AboutCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
