import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Carrito from "../Carrito";
import Logo from "../../assets/react.svg";
import { CarritoContext } from "../../context/CarritoContext";
import { FaCartShopping } from "react-icons/fa6";

/* Header */
const Header = () => {
  const { setCarritoOpen } = useContext(CarritoContext);

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
                    width: "100%",
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
                <NavLink className="link Header-link" to="/productos">
                  Galeria de Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link Header-link" to="/adoptame">
                  Adoptame
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link Header-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link Header-link" to="/administrar">
                  Administrar
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="cart-btn-cart"
                  onClick={() => setCarritoOpen(true)}
                >
                  <FaCartShopping />
                </button>
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
