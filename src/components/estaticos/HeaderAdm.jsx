import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/react.svg";
/* HeaderAdm */
const HeaderAdm = () => {
  const { isAutorizado, setIsAutorizado, usuario } = useContext(CarritoContext);
  const navigate = useNavigate();
  return (
    <header className="Header bg-primary">
      <h2>Veterinaria Pro - Curso React Frontend - Clase 25022</h2>

      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <img src={Logo} />
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link ms-auto"
                  onClick={() => setIsAutorizado(!isAutorizado)}
                >
                  {isAutorizado ? "Cerrar Sesión" : "Iniciar Sesión"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
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
