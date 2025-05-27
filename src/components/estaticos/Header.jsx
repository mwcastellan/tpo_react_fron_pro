import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Carrito from "../Carrito";
import Logo from "../../assets/react.svg";
import { CarritoContext } from "../../context/CarritoContext";

/* Header */
const Header = () => {
  const { setCarritoOpen } = useContext(CarritoContext);

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
                <Link to="/productos" className="nav-link">
                  Galeria de Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adoptame" className="nav-link">
                  Adoptame
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/administrar" className="nav-link">
                  Administrar
                </Link>
              </li>
              <li className="nav-item nav-link">
                <button
                  className="btnCart fa-solid fa-cart-shopping fa-1x"
                  onClick={() => setCarritoOpen(true)}
                ></button>
                <Carrito />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
