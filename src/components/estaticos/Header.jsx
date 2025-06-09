import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Carrito from "../Carrito";
import Logo from "../../assets/react.svg";
import { CarritoContext } from "../../context/CarritoContext";
import { FaCartShopping } from "react-icons/fa6";

/* Header */
const Header = () => {
  const { setCarritoOpen, isCarritoOpen, carrito } = useContext(CarritoContext);

  const calCntCarrito = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg cabNavbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="row">
              <div className="col">
                
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="link Healink" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link Healink" to="/productos">
                  Galeria de Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link Healink" to="/adoptame">
                  Adoptame
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link Healink" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link Healink" to="/administrar">
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
              </li>
              <li className="nav-item">
                <p>[{calCntCarrito()}]</p>
              </li>
              <Carrito />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
