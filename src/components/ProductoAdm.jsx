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
    <article className="card border-dark" style={{ maxWidth: "20rem" }}>
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
            width="15%"
            height="15%"
            onError={(e) => {
              e.target.src = imagenerr;
            }}
          />
        ) : (
          <img src={imagenerr} width="15%" height="15%" />
        )}
        <div className="">
          <button
            className="btn btn-secondary"
            onClick={() => {
              setOpenUpd(true);
              setSeleccionado(producto);
            }}
          >
            Modificar
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setOpenDlt(true);
              setSeleccionado(producto);
            }}
          >
            Eliminar
          </button>
          {openUpd && <ProductoAdmFormUpd seleccionado={seleccionado} />}
          {openDlt && <ProductoAdmFormDlt seleccionado={seleccionado} />}
        </div>

        <Link className="btn btn-outline-info" to={`/productos/${producto.id}`}>
          Más información
        </Link>
      </div>
    </article>
  );
};

export default ProductoAdm;
