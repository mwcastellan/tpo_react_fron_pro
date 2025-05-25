import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdm from "../components/estaticos/HeaderAdm";
import Footer from "../components/estaticos/Footer";
import ProductosListaAdm from "../components/ProductosListaAdm";
import { CarritoContext } from "../context/CarritoContext";

/* Administrar */
const Administrar = () => {
  const { isAutorizado, setIsAutorizado, usuario } = useContext(CarritoContext);
  const ira = useNavigate();
  return (
    <>
      <HeaderAdm />
      <ul className="nav nav-tabs text-end " role="tablist">
        <li className="nav-item" role="presentation">
          <p>Bienvenido, usuario autenticado {usuario}</p>
        </li>
        <li className="nav-item" role="presentation">
          <button className="btn btn-secondary" onClick={() => ira("/")}>
            Inicio
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setIsAutorizado(!isAutorizado)}
          >
            {isAutorizado ? "Cerrar Sesión" : "Iniciar Sesión"}
          </button>
        </li>
      </ul>
      <section>
        <button className="btn btn-secondary">Alta de Productos</button>
        <ProductosListaAdm />
      </section>
    </>
  );
};
export default Administrar;
