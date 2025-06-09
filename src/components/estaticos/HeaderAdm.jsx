import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AutorizarContext } from "../../context/AutorizarContext";
import Logo from "../../assets/react.svg";
/* HeaderAdm */
const HeaderAdm = () => {
  const { isAutorizado, setIsAutorizado, usuario } =
    useContext(AutorizarContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg cabNavbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="row">
              <div className="col">
                <img
                  src={Logo}
                  style={{
                    width: "100%",
                    maxHeight: "50px",
                  }}
                />
              </div>
              <div className="col">
                <h3>Veterinaria Pro - Curso React Frontend</h3>
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="link Healink" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  className="link  Healink"
                  onClick={() => {
                    setIsAutorizado(false);
                    localStorage.removeItem("autorizadoToken");
                  }}
                >
                  Cerrar Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link Healink">
                  {isAutorizado
                    ? "Bienvenido usuario autenticado: " + usuario
                    : ""}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default HeaderAdm;
