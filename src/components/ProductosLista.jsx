import React from "react";
import Producto from "./Producto";
import { useState } from "react";

/* Lista de Productos */
const ProductosLista = ({ productos, agregarCarrito }) => {
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
          {mostrarInput ? "Filtrar por Nombre ▲" :  "Filtrar por Nombre ▼"}
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
          <Producto
            key={producto.id}
            producto={producto}
            addToCart={agregarCarrito}
          />
        ))}
      </section>

      <section className="Productos_Notas_containerGrid">
        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-truck fa-2x"></i>
          <h5>Envío gratis</h5>
          <p>En compras mayores a $22000</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
          <h5>Beneficios</h5>
          <p>En todas tus compras</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-regular fa-credit-card fa-2x"></i>
          <h5>Todos los medios de pago</h5>
          <p>Tarjetas de crédito, débito o efectivo</p>
        </article>

        <article className="Productos_Nota_containerGridItem">
          <i className="fa-solid fa-location-dot fa-2x"></i>
          <h5>Retiro en tienda</h5>
          <p>Beneficios y regalos exclusivos</p>
        </article>
      </section>
    </>
  );
};

export default ProductosLista;
