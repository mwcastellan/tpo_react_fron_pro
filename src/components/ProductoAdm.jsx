import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import imagenerr from "../assets/404-error-3060993_1280.webp";
import { AdministrarContext } from "../context/AdministrarContext";
import ProductoAdmFormUpd from "./ProductoAdmFormUpd";
import ProductoAdmFormDlt from "./ProductoAdmFormDlt";

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
        margin: "10px 10px",
        padding: "1rem",
        border: "1px solid #eee",
        borderRadius: "15px",
        boxShadow: "0 2px 8px  #6f42c1",
        background: "#fff",
      }}
    >
      <div className="Producto_header">
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
          <img src={imagenerr} width="15%" height="15%" />
        )}
        <div className="card-title row">
          <button
            className="col BtnBoton"
            onClick={() => {
              setOpenUpd(true);
              setSeleccionado(producto);
            }}
          >
            Modificar
          </button>
          <button
            className="col BtnBoton"
            onClick={() => {
              setOpenDlt(true);
              setSeleccionado(producto);
            }}
          >
            Eliminar
          </button>
        </div>
        {openUpd && <ProductoAdmFormUpd seleccionado={seleccionado} />}
        {openDlt && <ProductoAdmFormDlt seleccionado={seleccionado} />}
        <Link className="" to={`/productos/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default ProductoAdm;
