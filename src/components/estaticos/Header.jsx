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
      <nav className="Nav navbar-expand-lg bg-primary">
        <img src={Logo} />
        <ul className="navbar-nav me-auto Nav-Ul">
          <li>
            <Link to="/" className="link nav-item h6 btn btn-success">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" className="link nav-item h6 btn btn-success">
              Galeria de Productos
            </Link>
          </li>
          <li>
            <Link
              to="/adoptame"
              className="link nav-item h6 btn btn btn-success"
            >
              Adoptame
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link nav-item h6 btn btn-success">
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/administrar"
              className="link nav-item h6 btn btn-success"
            >
              Administrar
            </Link>
          </li>
          <li className="link nav-item">
            <button
              className="btnCart fa-solid fa-cart-shopping fa-2x"
              onClick={() => setCarritoOpen(true)}
            ></button>
            <Carrito />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
