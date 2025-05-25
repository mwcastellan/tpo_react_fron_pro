import React, { useState, useContext } from "react";
import HeaderAdm from "../components/estaticos/HeaderAdm";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

/* Login */
const Login = () => {
  const { isAutorizado, setIsAutorizado } = useContext(CarritoContext);
  const ira = useNavigate();
  const autorizar = () => {
    setIsAutorizado(!isAutorizado);
    ira("/administrar");
  };

  return (
    <>
      <HeaderAdm />
      <section className="container Productos list-group-item list-group-item-action flex-column align-items-start ">
      <article className="Producto card mb-2  list-group-item-action flex-column align-items-start ">
        <h5 className="card-header">Login</h5>
        <div className="card-body">
          <h6 className="card-title">Usuario</h6>
          <h6 className="card-title">Contraseña</h6>
          <br />
          <button className="btn btn-secondary" onClick={() => ira("/")}>
            Inicio
          </button>
          <br /> <br />
          <button className="btn btn-secondary" onClick={autorizar}>
            {isAutorizado ? "Cerrar Sesión" : "Iniciar Sesión"}
          </button>
        </div>
      </article>
      </section>
    </>
  );
};
export default Login;
