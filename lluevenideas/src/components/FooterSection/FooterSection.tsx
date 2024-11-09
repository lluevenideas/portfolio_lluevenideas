import Link from "next/link";

const FooterSection = () => {
  return (
    <div className="h-48 bg-black flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 h-full">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0">
          <div
            className="bg-no-repeat w-64 h-10"
            style={{ backgroundImage: "url('/lluevenideas.svg')" }}
          ></div>
          <p className="text-white mt-2">Diseñadores y desarrolladores web.</p>
        </div>

        <div className="flex flex-col justify-end items-center h-3/4 my-4 lg:my-0">
          <div className="w-full lg:w-[35rem] h-px bg-white"></div>
          <p className="text-white mt-4">
            (C) 2024 - LluevenIdeas Tecnologías - Todos los derechos reservados
          </p>
        </div>

        <div className="flex flex-col lg:flex-row text-center lg:text-left">
          <div className="my-2 lg:my-0 lg:mx-6">
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

          <div className="my-2 lg:my-0 lg:mx-6">
            <h4 className="text-white">
              <Link href="#about">Instagram</Link>
            </h4>
            <h4 className="text-white">
              <Link href="#about">LinkedIn</Link>
            </h4>
            <h4 className="text-white">
              <Link href="#about">WhatsApp</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
