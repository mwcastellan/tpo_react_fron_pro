import React from "react";
import ProductoAdm from "./ProductoAdm";
import { useState } from "react";

/* Lista de Productos Administrar */
const ProductosListaAdm = ({ productos }) => {
  const [filtro, setFiltro] = useState("");
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  const [mostrarInput, setMostrarInput] = useState(false);
  return (
    <>
      <section className="ProductList_Filtro">
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
      </section>

      <section className="Productos list-group-item list-group-item-action flex-column align-items-start">
        {productosFiltrados.map((producto) => (
          <ProductoAdm key={producto.id} producto={producto} />
        ))}
      </section>
    </>
  );
};

export default ProductosListaAdm;
