import { dataService } from "@/utils/data.services";
import { IServices } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

const OurServicesSection = () => {
  return (
    <section
      id="services"
      className="flex flex-col bg-white text-black w-full min-h-screen px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-left font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl my-12">
        Nuestros Servicios
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-black to-white mb-8"></div>

      <div className="flex flex-wrap justify-center items-start gap-8">
        {dataService && dataService.map((item: IServices, index) => (
          <div key={index} className="w-full sm:w-[250px] flex flex-col items-center mb-8">
            <div
              className="p-4 rounded-lg relative group w-full sm:w-[250px] h-[250px] flex flex-col justify-end
              transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: item.bg }}
            >
              <div className="absolute inset-0 flex items-center justify-center
               opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-visible"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="rounded-md relative"
                />
                <Link className="rounded-md relative p-4 font-bold mt-4"
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

export default OurServicesSection;
