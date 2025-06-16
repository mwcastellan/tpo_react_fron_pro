import React, { useState, useContext, useEffect } from "react";
import ProductoAdm from "./ProductoAdm";
import ProductoAdmFormAdd from "./ProductoAdmFormAdd";
import { AdministrarContext } from "../context/AdministrarContext";
import { BotonGeneral } from "./estaticos/Estilos";

/* Lista de Productos Administrar */
const ProductosListaAdm = () => {
  const {
    filtroNombre,
    setFiltroNombre,
    productosFiltrados,
    mostrarInputNombre,
    setMostrarInputNombre,
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
              <BotonGeneral onClick={() => setOpenAdd(true)}>
                Agregar Producto
              </BotonGeneral>
              {openAdd && <ProductoAdmFormAdd />}
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
