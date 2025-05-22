import React, { useState } from "react";
import { Link } from "react-router-dom";

/* Producto */
const Producto = ({ producto, addToCart }) => {
  const [cantidad, setCantidad] = useState(1);
  const increase = () =>
    setCantidad((prev) => (prev < producto.disponible ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <article className="Producto card mb-3 list-group-item list-group-item-action flex-column align-items-start">
      <h5 className="card-header">{producto.nombre}</h5>
      <div className="card-body">
        <h6 className="card-title">Articulo: {producto.id}</h6>
        <h6 className="card-title">Categoria: {producto.categoria}</h6>
        <h6 className="card-title">Precio: ${producto.precio}</h6>
        <h6 className="card-title">Disponible: {producto.disponible}</h6>
        <img src={producto.imagen} width="50%" height="50%" />
      </div>
      <div
        className="card-footer text-muted"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          marginBottom: "2px",
        }}
      >
        <button
          className="btn btn-primary px-2 py-0 rounded"
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
        <span>{cantidad}</span>
        <button
          className="btn btn-primary px-2 py-0 rounded"
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

      <button
        className="btn btn-secondary"
        onClick={() => addToCart({ ...producto, cantidad: cantidad })}
      >
        Agregar
      </button>
      <Link to={`/productos/${producto.id}`}> Más detalle</Link>
    </article>
  );
};

export default Producto;
