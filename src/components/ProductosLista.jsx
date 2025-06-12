import React, { useState, useContext } from "react";
import Producto from "./Producto";
import { CarritoContext } from "../context/CarritoContext";

/* Lista de Productos */
const ProductosLista = () => {
  const {
    productos,
    productosFiltrados,
    filtroNombre,
    setFiltroNombre,
    filtroCategoria,
    setFiltroCategoria,
    mostrarInputNombre,
    mostrarInputCategoria,
    setMostrarInputNombre,
    setMostrarInputCategoria,
  } = useContext(CarritoContext);
  return (
    <>
      <section className="lstProducto_Filtro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Galería de nuestros productos:</h4>
            </div>

            <div className="col">
              <button
                className="accordion-button collapsed"
                onClick={() => setMostrarInputNombre(!mostrarInputNombre)}
              >
                {mostrarInputNombre
                  ? "Filtrar por Nombre ▲"
                  : "Filtrar por Nombre ▼"}
              </button>
              {mostrarInputNombre && (
                <section>
                  <input
                    type="text"
                    className="form-control"
                    value={filtroNombre}
                    onChange={(e) => setFiltroNombre(e.target.value)}
                  />
                </section>
              )}
            </div>

            <div className="col">
              <button
                className="accordion-button collapsed"
                onClick={() => setMostrarInputCategoria(!mostrarInputCategoria)}
              >
                {mostrarInputCategoria
                  ? "Filtrar por Categoria ▲"
                  : "Filtrar por Categoria ▼"}
              </button>
              {mostrarInputCategoria && (
                <section>
                  <input
                    type="text"
                    className="form-control"
                    value={filtroCategoria}
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                  />
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="list-group container">
        <div className="lstProducto">
          {productosFiltrados.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <section className="list-group">
        <div
          className="row"
          style={{
            margin: "10px 10px",
            padding: "0rem",
          }}
        >
          <article className="col-sm">
            <i className="fa-solid fa-truck fa-2x"></i>
            <h5>Envío gratis</h5>
            <p>En compras mayores a $22000</p>
          </article>

          <article className="col-sm">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
            <h5>Beneficios</h5>
            <p>En todas tus compras</p>
          </article>

          <article className="col-sm">
            <i className="fa-regular fa-credit-card fa-2x"></i>
            <h5>Todos los medios de pago</h5>
            <p>Tarjetas de crédito, débito o efectivo</p>
          </article>

          <article className="col-sm">
            <i className="fa-solid fa-location-dot fa-2x"></i>
            <h5>Retiro en tienda</h5>
            <p>Beneficios y regalos exclusivos</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductosLista;
