import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

/* Producto */
const Producto = ({ producto }) => {
  const { handleAddToCarrito } = useContext(CarritoContext);
  const [cantidad, setCantidad] = useState(1);
  const increase = () =>
    setCantidad((prev) => (prev < producto.disponible ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <article className="card mb-2 list-group-item-action flex-column align-items-start">
      <h5 className="card-header">{producto.nombre}</h5>
      <div className="card-body">
        <h6 className="card-title">Articulo: {producto.id}</h6>
        <h6 className="card-title">Categoria: {producto.categoria}</h6>
        <h6 className="card-title">Precio: ${producto.precio}</h6>
        <h6 className="card-title">Disponible: {producto.disponible}</h6>
        <img src={producto.imagen} width="50%" height="50%" />

        <div
          className="card-title text-muted"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            marginBottom: "2px",
          }}
        >
          <button
            className="btn btn-outline-warning px-2 py-0 rounded"
            onClick={decrease}
            style={{
              border: "none",
              padding: "4px 8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            -
          </button>
          <h6>{cantidad}</h6>
          <button
            className="btn btn-outline-warning px-2 py-0 rounded"
            onClick={increase}
            style={{
              border: "none",
              padding: "4px 8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        <ul className="navbar-nav me-auto Nav-Ul">
          <li>
            <button
              className="btn btn-secondary"
              onClick={() =>
                handleAddToCarrito({ ...producto, cantidad: cantidad })
              }
            >
              Agregar
            </button>
          </li>
          <li>
            <Link
              className="btn btn-outline-info"
              to={`/productos/${producto.id}`}
            >
              Más información
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Producto;
