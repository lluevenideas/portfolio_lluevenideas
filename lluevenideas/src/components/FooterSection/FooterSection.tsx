const FooterSection = () => {
  return (
    <div
      className="footer"
      style={{
        height: "12rem",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="contenedor"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "90%",
          height: "100%",
        }}
      >
        <div className="marca">
          <div
            className="logo"
            style={{
              backgroundImage: `url('/lluevenideas..png')`,
              backgroundRepeat: "no-repeat",
              width: "16.5rem",
              height: "2.5rem",
            }}
          ></div>
          <p
            style={{
              color: "#ffffff",
            }}
          >
            Diseñadores y desarrolladores web.
          </p>
        </div>

        <div
          className="copyright"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "70%",
          }}
        >
          <div
            className="separador"
            style={{
              width: "35rem",
              height: "1px",
              backgroundColor: "#FFFFFF",
            }}
          ></div>
          <div className="derechos">
            <p
              style={{
                color: "#FFFFFF",
                marginTop: "1.2rem",
              }}
            >
              (C) 2024 - LluevenIdeas Tecnologías - Todos los derechos
              reservados
            </p>
          </div>
        </div>
        <div
          className="site-map"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            className="secciones"
            style={{
              margin: "0 2.4rem",
            }}
          >
            <h4
              style={{
                color: "#FFFFFF",
              }}
            >
              <a href="#">Servicios</a>
            </h4>
            <h4
              style={{
                color: "#FFFFFF",
              }}
            >
              <a href="#">Nosotros</a>
            </h4>
            <h4
              style={{
                color: "#FFFFFF",
              }}
            >
              <a href="#">Contacto</a>
            </h4>
          </div>
          <div
            className="redes"
            style={{
              margin: "0 2.4rem",
            }}
          >
            <h4
              style={{
                color: "#FFFFFF",
              }}
            >
              <a href="#">Instagram</a>
            </h4>
            <h4
              style={{
                color: "#FFFFFF",
              }}
            >
              <a href="#">LinkedIn</a>
            </h4>
            <h4
              style={{
                color: "#FFFFFF",
              }}
            >
              <a href="#">WhatsApp</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
