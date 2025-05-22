import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* Producto por ID */
const ProductoID = ({ productos }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);
  return (
    <article className="Producto card mb-3 list-group-item list-group-item-action flex-column align-items-start">
      <h5 className="card-header">{producto.nombre}</h5>
      <div className="card-body">
        <h6 className="card-title">Articulo: {producto.id}</h6>
        <h6 className="card-title">Categoria: {producto.categoria}</h6>
        <h6 className="card-title">Precio: ${producto.precio}</h6>
        <h6 className="card-title">Disponible: {producto.disponible}</h6>
        <img src={producto.imagen} width="25%" height="25%" />
        <h6 className="card-title">Descripcion1: {producto.descripcion1}</h6>
        <h6 className="card-title">Descripcion2: {producto.descripcion2}</h6>
      </div>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Volver
      </button>
    </article>
  );
};
export default ProductoID;
