import React, { useState, useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import imagenerr from "../assets/404-error-3060993_1280.webp";
import { AdministrarContext } from "../context/AdministrarContext";
import ProductoAdmFormUpd from "./ProductoAdmFormUpd";
import ProductoAdmFormDlt from "./ProductoAdmFormDlt";
import { BotonGeneral } from "./estaticos/Estilos";

/* ProductoAdm */
const ProductoAdm = ({ producto }) => {
  const {
    seleccionado,
    setSeleccionado,
    openUpd,
    openDlt,
    setOpenUpd,
    setOpenDlt,
  } = useContext(AdministrarContext);

  return (
    <article
      className="card border-dark"
      style={{
        maxWidth: "600px",
        margin: "5px 5px",
        padding: "1rem",
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
        <h6 className="card-title">Cantidad: {producto.cantidad}</h6>
        <h6 className="card-title">Descripción 1: {producto.descripcion1}</h6>
        <h6 className="card-title">Descripción 2: {producto.descripcion2}</h6>
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
        <div className="card-title row">
          <BotonGeneral
            className="col"
            onClick={() => {
              setOpenUpd(true);
              setSeleccionado(producto);
            }}
          >
            Modificar
          </BotonGeneral>
          <BotonGeneral
            className="col"
            onClick={() => {
              setOpenDlt(true);
              setSeleccionado(producto);
            }}
          >
            Eliminar
          </BotonGeneral>
          <BotonGeneral className="col">
            <Link className="" to={`/productos/${producto.id}`}>
              Ver más
            </Link>
          </BotonGeneral>
        </div>
        {openUpd && <ProductoAdmFormUpd seleccionado={seleccionado} />}
        {openDlt && <ProductoAdmFormDlt seleccionado={seleccionado} />}
      </div>
    </article>
  );
};

export default ProductoAdm;
