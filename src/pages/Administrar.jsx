import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdm from "../components/estaticos/HeaderAdm";
import Footer from "../components/estaticos/Footer";
import ProductosListaAdm from "../components/ProductosListaAdm";

/* Administrar */
const Administrar = ({ isAutorizado, setIsAutorizado, productos }) => {
  const ira = useNavigate();
  return (
    <>
      <HeaderAdm />
      <section>
        <button className="btn btn-secondary" onClick={() => ira("/")}>
          Inicio
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setIsAutorizado(!isAutorizado)}
        >
          {isAutorizado ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
        {isAutorizado && <p>Bienvenido, usuario autenticado!</p>}
        {!isAutorizado && <p>Muchas gracias, hasta luego!</p>}
      </section>
      <section>
        <button className="btn btn-secondary">Alta de Productos</button>
        <ProductosListaAdm productos={productos} />
      </section>
      <Footer />
    </>
  );
};
export default Administrar;
