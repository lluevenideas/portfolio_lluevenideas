'use client';
import { useState } from "react";
import emailjs from "emailjs-com";
import CustomAlert from "../CustomAlert/CustomAlert";

const ContactSection = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "LLuevenIdeas",
      message: message,
      subject: selectedOption,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        (response) => {
          console.log("Correo enviado exitosamente", response);
          setAlert({ message: "¡Mensaje enviado correctamente!", type: "success" });
        },
        (error) => {
          console.log("Error al enviar correo", error);
          setAlert({ message: "Ocurrió un error, por favor intenta nuevamente.", type: "error" });
        }
      )
      .finally(() => {
        setSending(false);
        setMessage("");
        setName("");
        setEmail("");
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col bg-white text-black w-full min-h-screen items-center px-4 sm:px-8 py-16"
      style={{
        backgroundImage: `url('/contact.jpg')`,
        backgroundPosition: "bottom left",
        backgroundPositionX: "70px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="flex flex-col items-start z-10 w-full max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-start font-extrabold mb-4">
          ¿Cómo podemos ayudarte?
        </h1>
        <div className="w-full h-[2px] bg-gradient-to-r from-black to-white mb-8"></div>
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[70vh] justify-center items-start border-[1px] border-black rounded-xl p-4 gap-8">
          <div className="relative w-full md:w-1/2 h-auto md:h-4/6 overflow-hidden flex flex-col items-start justify-center">
            <p className="font-extrabold text-xl sm:text-2xl md:text-3xl text-left w-full py-4 sm:py-10">
              Estoy interesado en:
            </p>

            <div className="flex flex-wrap w-full md:w-5/6 h-full gap-2 mb-8 justify-center ">
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
                  onClick={() => handleOptionClick(item)}
                  className={`h-10 sm:h-12 px-2 sm:px-4 bg-white border-[4px] border-[--primary-color] text-black 
                  font-bold text-sm sm:text-lg rounded-2xl hover:bg-[--primary-color] transition duration-300
                  ${selectedOption === item ? "bg-[--secondary-color] border-[--secondary-color] hover:border-[--primary-color]"
                      : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 h-full items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-8">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full sm:w-[80%] p-2 sm:p-4 border-b-2 border-black text-right bg-transparent"
                value={name}
                onChange={handleNameChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                className="w-full sm:w-[80%] p-2 sm:p-4 border-b-2 border-black text-right bg-transparent"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <textarea
                name="message"
                placeholder="Escribe tu mensaje aquí"
                className="w-full sm:w-[80%] p-2 sm:p-4 border-2 border-black border-l-transparent 
                border-r-transparent border-t-transparent rounded-none text-right bg-transparent"
                rows={5}
                value={message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                disabled={sending}
                className="p-2 sm:p-4 w-full sm:w-[70%] text-center bg-[--primary-color] border-[2px] 
                border-black text-black font-bold text-lg sm:text-2xl rounded-full hover:bg-[--tertiary-color] 
                transition duration-300 shadow-custom-button"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </section>
  );
};

export default ContactSection;
