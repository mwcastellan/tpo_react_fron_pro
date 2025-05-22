import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

/* Contacto */
const Contacto = ({ carrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} carrito={carrito} />
      <form className="" action="/" method="POST">
        <fieldset className="ContactoFieldset">
          <legend>Turnos</legend>
          <div>
            <label htmlFor="nombreDueño" className="form-label mt-4">
              Nombre y Apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreDueño"
              name="nombreDueño"
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="nombreMascota" className="form-label mt-4">
              Nombre de la mascota:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreMascota"
              name="nombreMascota"
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="mascotaTipo" className="form-label mt-4">
              Tipo de mascota:
            </label>
            <select name="mascotaTipo" className="form-select" id="mascotaTipo">
              <option>Gato</option>
              <option>Perro</option>
              <option>Canario</option>
              <option>Exótico</option>
            </select>
            <br />
          </div>
          <div>
            <label htmlFor="foto" className="form-label mt-4">
              Suba una foto de su mascota
            </label>
            <input
              type="file"
              className="form-control"
              name="foto"
              id="foto"
              accept="image/*"
            />
            <br />
          </div>
          <div>
            <p>Motivo del Turno:</p>
            <label htmlFor="motivoTurno0" className="form-label mt-4"></label>
            <input
              className="form-check-input"
              id="motivoTurno0"
              type="radio"
              name="motivoTurno"
              value="general"
            />
            Chequeo General
            <label htmlFor="motivoTurno1" className="form-label mt-4"></label>
            <input
              className="form-check-input"
              id="motivoTurno1"
              type="radio"
              name="motivoTurno"
              value="vacuna"
            />
            Vacunas
            <label htmlFor="motivoTurno2" className="form-label mt-4"></label>
            <input
              className="form-check-input"
              id="motivoTurno2"
              type="radio"
              name="motivoTurno"
              value="cirugia"
            />
            Revisión por Cirugía
            <label htmlFor="motivoTurno3" className="form-label mt-4"></label>
            <input
              className="form-check-input"
              id="motivoTurno3"
              type="radio"
              name="motivoTurno"
              value="otros"
            />
            Otros
            <br />
          </div>
          <div>
            <label htmlFor="dia" className="form-label mt-4">
              Día del turno
            </label>
            <input
              type="date"
              className="form-control"
              name="dia"
              id="dia"
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="horario" className="form-label mt-4">
              Horario
            </label>
            <input
              type="time"
              className="form-control"
              name="horario"
              id="horario"
              required
            />
            <br />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>

      <form className="" action="/" method="POST">
        <fieldset className="ContactoFieldset">
          <legend>Contactenos</legend>
          <div>
            <label htmlFor="nombreCompleto" className="form-label mt-4">
              Nombre y Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreCompleto"
              name="nombreCompleto"
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="email" className="form-label mt-4">
              Mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="motivo" className="form-label mt-4">
              Asunto
            </label>
            <input
              type="text"
              className="form-control"
              id="motivo"
              name="motivo"
              required
            />
            <br />
          </div>
          <div>
            <label htmlFor="comentario" className="form-label mt-4">
              Consulta
            </label>
            <textarea
              name="comentario"
              className="form-control"
              id="comentario"
              placeholder="Escriba su comentario..."
              required
            ></textarea>
            <br />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>

      <Footer />
    </>
  );
};

export default Contacto;
