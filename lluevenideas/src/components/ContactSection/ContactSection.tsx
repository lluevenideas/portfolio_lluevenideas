import Link from "next/link";

const ContactSection = () => {
  return (
    <div
      id="contacto"
      className="flex flex-col bg-white text-black w-full min-h-screen items-center px-8 py-16"
      style={{
        backgroundImage: `url('/contact.jpg')`,
        backgroundPosition: "bottom left",
        backgroundPositionX: "70px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="w-[90%] h-full flex flex-col items-start z-10 ">
        <h1 className="text-7xl text-start font-extrabold mb-4">
          ¿Cómo podemos ayudarte?
        </h1>
        <div className="w-full h-[2px] bg-gradient-to-r from-black to-white mb-8"></div>
        <div className="flex w-full h-[70vh] justify-center items-center border-[1px] border-black rounded-xl p-4 ">
          <div className="relative w-1/2 h-full overflow-hidden flex flex-col items-start justify-center  ">
            <p className="font-extrabold text-3xl text-left w-full py-10 ">
              Si estás interesado en:
            </p>

            <div className="flex flex-wrap w-full h-full gap-5 mb-8 justify-center ">
              {[
                "Página Web",
                "Ofrecer servicios",
                "Vender productos",
                "Aplicación",
                "Invitación digital",
                "Otro",
              ].map((item, index) => (
                <button
                  key={index}
                  className="p-2 w-1/3 h-16  bg-white border-[4px] border-blue-500 text-black font-bold text-2xl rounded-2xl hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-1/2 h-full  items-center justify-center gap-16   ">
            <p className="font-extrabold text-7xl text-center w-[80%] leading-relaxed  ">
              ¡Comunícate con nosotros!
            </p>
            <Link
              href={"mailto:lluevenideas@gmail.com"}
              target="_blank"
              className="p-2 w-[70%] h-1/6 text-center content-center  bg-blue-500 border-[2px] border-black text-white font-bold text-2xl rounded-full hover:bg-blue-600 hover:text-white transition duration-300 shadow-2xl"
            >
              Consultar presupuesto!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
