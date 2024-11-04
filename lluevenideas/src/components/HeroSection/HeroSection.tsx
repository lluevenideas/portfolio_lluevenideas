import Image from "next/image";
import Gota from "../../../public/hero/gota-agua.svg";

const HeroSection = () => {
  return (
    <div className="w-full h-min-screen bg-[--primary-color]">
      <div className="logo-font ">
        LLev <span className="logo-font-ven">ven</span> ideas
        <Image src={Gota} alt={"Imágen de una gota de agua"} />
      </div>
    </div>
  )
};

export default HeroSection;
