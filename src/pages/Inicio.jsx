import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import carrusel1 from "../assets/carrusel1.png";

/* Inicio */ 
const Inicio = ({ carrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} carrito={carrito} />
      <div className="Inicio-container-grid">
        <main className="Inicio-main">
          <div className="imagenCarrusel">
            <img className="img-carrusel1" src={carrusel1} />
          </div>
        </main>
        <aside className="Inicio-aside">
          <article>
            <h3>Nosotros</h3>
            <p>
              Más que una clínica veterinaria, Veterinaria Clase 25022 es una
              familia dedicada a brindar atención integral a sus mascotas. Con
              años de experiencia y un profundo amor por los animales, nuestro
              equipo se compromete a ofrecer servicios veterinarios de
              vanguardia en un ambiente cálido y acogedor.
            </p>
            <h3>Nuestra Misión</h3>
            <p>
              Nuestra misión es brindar atención veterinaria de excelencia a las
              mascotas de nuestra comunidad, promoviendo su salud y bienestar a
              través de servicios preventivos, curativos y de educación.
            </p>
            <h3>Nuestra Visión</h3>
            <p>
              Aspiramos a ser la clínica veterinaria líder en nuestra comunidad,
              reconocida por la excelencia en nuestros servicios, el compromiso
              con el bienestar animal y la construcción de relaciones sólidas
              con nuestros clientes.
            </p>
          </article>
        </aside>

        <div className="Inicio-ubicacion">
          <div className="Inicio-parrafo">
            <h3>Ubicación</h3>
            <p>
              <i className="fa-solid fa-location-dot"></i>
              Nos encontramos en el hermoso barrio de Almagro de la Ciudad
              Autónoma de Buenos Aires.
            </p>
          </div>
        </div>
        <div className="Inicio-mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.337016595504!2d-58.42875065!3d-34.620992550000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca58c45e009d%3A0x3224fded462a5d2c!2sAv.%20Hip%C3%B3lito%20Yrigoyen%203737%2C%20C1178%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1746200337183!5m2!1ses-419!2sar"
            width="70%"
            height="70%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inicio;
