const ConocenosSection = () => {
  return (
    <div
      id="about"
      className="flex flex-col bg-white text-black w-full min-h-screen items-center px-8 py-16"
      style={{
        backgroundImage: `url('/conocenos.jpg')`,
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="w-[90%] h-full flex flex-col items-start z-10 ">
        <h1 className="lg:text-7xl text-start font-extrabold mb-4 text-4xl">Conócenos</h1>
        <div className="w-full h-[2px] bg-gradient-to-r from-white to-black mb-8"></div>
        <div className="flex w-full justify-end items-center">
          <div className="leading-relaxed mb-8 w-\[90\%\] sm:w-10/12 ml-1" 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}>
            <p className="mb-4 lg:text-4xl text-2xl">
              Somos un equipo de desarrolladores y diseñadores web, dinámicos e
              innovadores.
            </p>
            <p className="lg:text-4xl text-2xl">
              Nos dedicamos a ayudar a las empresas a prosperar en el mundo
              digital. Con nuestra pasión por la creatividad y la tecnología,
              impulsamos a nuestros clientes a alcanzar sus objetivos a través
              de soluciones de vanguardia y un servicio personalizado.
            </p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-black to-white mb-8"></div>

        <div className="flex w-full justify-center sm:justify-end" >
          <p className="text-blue-400 text-xl font-semibold mt-4 sm:text-right text-center sm:w-2/6 w-4/5">
            Diseñamos, desarrollamos y desplegamos sitios y aplicaciones web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConocenosSection;
