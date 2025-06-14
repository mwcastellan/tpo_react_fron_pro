import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import imagenerr from "../assets/404-error-3060993_1280.webp";
import styled from "styled-components";

const BotonGral = styled.button`
  background-color: rgb(188, 149, 224);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: blueviolet;
  }
`;

/* Producto */
const Producto = ({ producto }) => {
  const { handleAddToCarrito } = useContext(CarritoContext);
  const [cantidad, setCantidad] = useState(1);
  const increase = () =>
    setCantidad((prev) => (prev < producto.disponible ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <article
      className="card border-dark"
      style={{
        maxWidth: "600px",
        margin: "5px 5px",
        padding: "0.rem",
        border: "1px solid #eee",
        borderRadius: "15px",
        boxShadow: "0 2px 8px  #6f42c1",
        background: "#fff",
      }}
    >
      <div className="heaProducto">
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
            style={{
              width: "50%",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "0.5rem",
            }}
            onError={(e) => {
              e.target.src = imagenerr;
            }}
          />
        ) : (
          <img src={imagenerr} width="100%" height="100%" />
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
            className="btn btn-outline-primary px-2 py-0 rounded"
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
            className="btn btn-outline-primary px-2 py-0 rounded"
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
        <div className="card-title row">
          <BotonGral
            className="col btnBoton"
            onClick={() => {
              handleAddToCarrito({ ...producto, cantidad: cantidad });
            }}
            aria-label="Agregar al carrito"
          >
            🛒 Agregar
          </BotonGral>
          <BotonGral className="col btnBoton">
            <Link className="" to={`/productos/${producto.id}`}>
              Ver más
            </Link>
          </BotonGral>
        </div>
      </div>
    </article>
  );
};

export default Producto;
