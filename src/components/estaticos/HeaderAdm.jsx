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
      <nav className="navbar navbar-expand-lg Navbar_cab">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="row">
              <div className="col">
                <img
                  src={Logo}
                 style={{
                    width: "90%",
                    maxHeight: "10px",
                    objectFit:"none",
                  }}
                />
              </div>
              <div className="col">
                <p>Veterinaria Pro - Curso React Frontend</p>
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
                <NavLink className="link Header-link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  className="link  Header-link"
                  onClick={() => {
                    setIsAutorizado(false);
                    localStorage.removeItem("autorizadoToken");
                  }}
                >
                  Cerrar Sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link Header-link">
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
