import React from "react";
import { Link } from "react-router-dom";

/* ProductoAdm */
const ProductoAdm = ({ producto }) => {
  return (
    <article className="Producto card mb-3 list-group-item list-group-item-action flex-column align-items-start">
      <h5 className="card-header">{producto.nombre}</h5>
      <div className="card-body">
        <h6 className="card-title">Articulo: {producto.id}</h6>
        <h6 className="card-title">Categoria: {producto.categoria}</h6>
        <h6 className="card-title">Precio: ${producto.precio}</h6>
        <h6 className="card-title">Disponible: {producto.disponible}</h6>
        <h6 className="card-title">Cantidad: {producto.cantidad}</h6>
        <h6 className="card-title">Descripción 1: {producto.descripcion1}</h6>
        <h6 className="card-title">Descripción 2: {producto.descripcion2}</h6>
        <img src={producto.imagen} width="50%" height="50%" />
      </div>
      <div className="card-footer text-muted">
        <button className="btn btn-secondary">Modificar</button>
        <button className="btn btn-secondary">Eliminar</button>
      </div>

      <Link to={`/productos/${producto.id}`}> Más detalle</Link>
    </article>
  );
};

export default ProductoAdm;
