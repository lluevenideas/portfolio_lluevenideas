
const AboutUsSection
 = () => {
  return (
    <div
      id="about"
      className="flex flex-col bg-white text-black w-full min-h-screen md:min-h-0 items-center px-8 pt-16"
      style={{
        backgroundImage: `url('/aboutUs/img_section_about.svg')`,
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] flex flex-col items-start z-10 ">
        <h1 className="lg:text-7xl text-start font-extrabold mb-4 text-4xl">Conócenos</h1>
        <div className="w-1/2 h-[2px] bg-gradient-to-r from-black to-white mb-8"></div>
        <div className="flex w-5/6 justify-end items-center mt-12 mb-12">
          <div className="mb-8 w-\[90\%\] sm:w-10/12 ml-1" 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}>
            <p className="mb-4 lg:text-2xl text-xl">
              Somos un equipo de desarrolladores y diseñadores web, dinámicos e
              innovadores.
            </p>
            <p className="lg:text-2xl text-xl">
              Nos dedicamos a ayudar a las empresas a prosperar en el mundo
              digital. Con nuestra pasión por la creatividad y la tecnología,
              impulsamos a nuestros clientes a alcanzar sus objetivos a través
              de soluciones de vanguardia y un servicio personalizado.
            </p>
          </div>
        </div>

        <div className="w-4/6 ml-[35%] h-[2px] bg-gradient-to-r from-white to-black mb-8"></div>

        <div className="flex w-full justify-center sm:justify-end" >
          <p className="text-[--primary-color] text-xl font-semibold mt-4 sm:text-right text-center sm:w-2/6 w-4/5">
            Diseñamos, desarrollamos y desplegamos aplicaciones web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection
;
