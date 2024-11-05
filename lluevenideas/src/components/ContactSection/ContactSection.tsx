const ContactSection = () => {
  return <div
  className="flex flex-col bg-white text-black w-full min-h-screen items-center px-8 py-16"
      style={{
        backgroundImage: `url('/contact.jpg')`,
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}>
        <div className="w-[90%] h-full flex flex-col items-start z-10 ">
          <h1 className="text-7xl text-start font-extrabold mb-4">¿Cómo podemos ayudarte?</h1>
          <div className="w-full h-[2px] bg-gradient-to-r from-black to-white mb-8"></div>
          <div className="flex w-full h-full justify-center items-center">
            <div className="relative w-72 h-96 overflow-hidden flex items-start justify-center z-0">
              <p className="absolute font-extrabold text-3xl text-left w-60 h-40">Estoy interesado en:</p>
            </div>
            <div className="flex flex-col relative w-72 h-96 overflow-hidden flex items-center justify-center z-0">
              <form >
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Mensaje"/>
                <button>Enviar</button>
              </form>
            </div>
          </div>
        </div>





  </div>;
};

export default ContactSection;
