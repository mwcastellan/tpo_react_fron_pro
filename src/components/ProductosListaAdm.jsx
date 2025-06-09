import React, { useState, useContext, useEffect } from "react";
import ProductoAdm from "./ProductoAdm";
import ProductoAdmFormAdd from "./ProductoAdmFormAdd";
import { AdministrarContext } from "../context/AdministrarContext";

/* Lista de Productos Administrar */
const ProductosListaAdm = () => {
  const {
    filtro,
    setFiltro,
    productosFiltrados,
    mostrarInput,
    setMostrarInput,
    setOpenAdd,
    openAdd,
  } = useContext(AdministrarContext);

  return (
    <>
      <section className="lstProducto_Filtro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Administración de productos:</h4>
            </div>
            <div className="col">
              <button
                className="btnBoton"
                onClick={() => setOpenAdd(true)}
              >
                Agregar Producto
              </button>
              {openAdd && <ProductoAdmFormAdd />}
            </div>

            <div className="col">
              <button
                className="accordion-button collapsed"
                onClick={() => setMostrarInput(!mostrarInput)}
              >
                {mostrarInput ? "Filtrar por Nombre ▲" : "Filtrar por Nombre ▼"}
              </button>
              {mostrarInput && (
                <section>
                  <input
                    type="text"
                    className="form-control"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
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
            <ProductoAdm key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductosListaAdm;
