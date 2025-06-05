import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import carrusel1 from "../assets/carrusel1.png";

/* Inicio */
const Inicio = () => {
  return (
    <>
      <Header />
      <div className="container Inicio-container-grid">
        <main className="Inicio-main card border-secondary mb-3">
          <div className="imagenCarrusel">
            <img className="img-carrusel1" src={carrusel1} />
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
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inicio;
