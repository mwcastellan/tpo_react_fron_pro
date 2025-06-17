import React from "react";
import {Carousel} from "react-bootstrap"
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import carrusel1 from "../assets/carrusel1.png";
import carrusel2 from "../assets/carrusel2.png";
import carrusel3 from "../assets/carrusel3.png";
import carrusel4 from "../assets/carrusel4.png";
import carrusel5 from "../assets/carrusel5.png";

/* Inicio */
const Inicio = () => {
  return (
    <>
      <Header />
      <div className="container Inicio-container-grid  p-4 border rounded shadow">
        <main className="Inicio-main card border-secondary mb-3">
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carrusel1}
                  alt="Primera imagen"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carrusel2}
                  alt="Segunda imagen"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carrusel3}
                  alt="Tercera imagen"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carrusel4}
                  alt="Cuarta imagen"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carrusel5}
                  alt="Quinta imagen"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </main>
        <aside className="Inicio-aside card border-secondary mb-3">
          <article className="">
            <h4>Nosotros</h4>
            <p>
              Más que una clínica veterinaria, Veterinaria Clase 25022 es una
              familia dedicada a brindar atención integral a sus mascotas. Con
              años de experiencia y un profundo amor por los animales, nuestro
              equipo se compromete a ofrecer servicios veterinarios de
              vanguardia en un ambiente cálido y acogedor.
            </p>
            <h4>Nuestra Misión</h4>
            <p>
              Nuestra misión es brindar atención veterinaria de excelencia a las
              mascotas de nuestra comunidad, promoviendo su salud y bienestar a
              través de servicios preventivos, curativos y de educación.
            </p>
            <h4>Nuestra Visión</h4>
            <p>
              Aspiramos a ser la clínica veterinaria líder en nuestra comunidad,
              reconocida por la excelencia en nuestros servicios, el compromiso
              con el bienestar animal y la construcción de relaciones sólidas
              con nuestros clientes.
            </p>
          </article>
        </aside>

        <div className="Inicio-ubicacion  card border-secondary mb-3">
          <div className="Inicio-parrafo">
            <h4>Ubicación</h4>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <p>
                Nos encontramos en el hermoso barrio de Almagro de la Ciudad
                Autónoma de Buenos Aires.
              </p>
            </div>
          </div>
        </div>
        <div className="Inicio-mapa card border-secondary mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.601435401605!2d-58.42180789019031!3d-34.61423867283767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca58c45e009d%3A0x3224fded462a5d2c!2sAv.%20Hip%C3%B3lito%20Yrigoyen%203737%2C%20C1178%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1749637683966!5m2!1ses!2sar"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inicio;
