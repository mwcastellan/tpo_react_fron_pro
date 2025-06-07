import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import imagenerr from "../assets/404-error-3060993_1280.webp";

/* Producto */
const Producto = ({ producto }) => {
  const { handleAddToCarrito } = useContext(CarritoContext);
  const [cantidad, setCantidad] = useState(1);
  const increase = () =>
    setCantidad((prev) => (prev < producto.disponible ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <article className="card border-dark" style={{ maxWidth: "20rem" }}>
      <div className="Producto_header">
        <h5>{producto.nombre}</h5>
      </div>
      <div className="card-body">
        <h6 className="card-title">Articulo: {producto.id}</h6>
        <h6 className="card-title">Categoria: {producto.categoria}</h6>
        <h6 className="card-title">Precio: ${producto.precio}</h6>
        <h6 className="card-title">Disponible: {producto.disponible}</h6>
        {producto.imagen ? (
          <img
            src={producto.imagen}
            width="20%"
            height="20%"
            onError={(e) => {
              e.target.src = imagenerr;
            }}
          />
        ) : (
          <img src={imagenerr} width="20%" height="20%" />
        )}
        <div
          className="card-title"
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
        <div className="card-title">
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleAddToCarrito({ ...producto, cantidad: cantidad });
            }}
          >
            Agregar
          </button>

          <Link
            className="btn btn-outline-info"
            to={`/productos/${producto.id}`}
          >
            Más información
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Producto;
