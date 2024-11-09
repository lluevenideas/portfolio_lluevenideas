import Link from "next/link";

const FooterSection = () => {
  return (
    <div className="h-auto bg-black flex justify-center items-center py-8">
      <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 h-full space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0">
          <Link
            className="bg-no-repeat w-64 h-10"
            style={{ 
              backgroundImage: "url('/Lluevenideas.svg')",
              
            }} 
              href={"#home"}>
            </Link>
          <p className="text-white mt-2">Diseñadores y desarrolladores web.</p>
        </div>

        <div className="flex flex-col justify-end items-center w-full lg:w-auto my-4 lg:my-0">
          <div className="w-full lg:w-[35rem] h-px bg-white"></div>
          <p className="text-white mt-4 text-center lg:text-left">
            (C) 2024 - LluevenIdeas Tecnologías - Todos los derechos reservados
          </p>
        </div>

        <div className="flex flex-col lg:flex-row text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-12">
          <div className="my-2 lg:my-0">
            <h4 className="text-white">
              <Link href="#services">Servicios</Link>
            </h4>
            <h4 className="text-white">
              <Link href="#projects">Proyectos</Link>
            </h4>
            <h4 className="text-white">
              <Link href="#about">Nosotros</Link>
            </h4>
            <h4 className="text-white">
              <Link href="#contact">Contacto</Link>
            </h4>
          </div>

          <div className="my-2 lg:my-0">
            <h4 className="text-white">
              <Link href="#home">Instagram</Link>
            </h4>
            <h4 className="text-white">
              <Link href="#home">LinkedIn</Link>
            </h4>
            <h4 className="text-white">
              <Link href="#home">WhatsApp</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
