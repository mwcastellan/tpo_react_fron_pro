import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import imagenerr from "../assets/404-error-3060993_1280.webp";
import { BotonGeneral, BotonSigno } from "./estaticos/Estilos";

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
        {producto.imagen1 ? (
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-50 imgProducto"
                  src={producto.imagen1}
                  onError={(e) => {
                    e.target.src = imagenerr;
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 imgProducto"
                  src={producto.imagen2}
                  onError={(e) => {
                    e.target.src = imagenerr;
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 imgProducto"
                  src={producto.imagen3}
                  onError={(e) => {
                    e.target.src = imagenerr;
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 imgProducto"
                  src={producto.imagen4}
                  onError={(e) => {
                    e.target.src = imagenerr;
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
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
          <BotonSigno onClick={decrease}>-</BotonSigno>
          <h6>{cantidad}</h6>
          <BotonSigno onClick={increase}>+</BotonSigno>
        </div>
        <div className="card-title row">
          <BotonGeneral
            className="col"
            onClick={() => {
              handleAddToCarrito({ ...producto, cantidad: cantidad });
            }}
            aria-label="Agregar al carrito"
          >
            🛒 Agregar
          </BotonGeneral>
          <BotonGeneral className="col">
            <Link className="" to={`/productos/${producto.id}`}>
              Ver más
            </Link>
          </BotonGeneral>
        </div>
      </div>
    </article>
  );
};

export default Producto;
