import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

/* Producto por ID */
const ProductoID = () => {
  const { productos } = useContext(CarritoContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);
  return (
    <article
      className="card border-secondary mb-3"
      style={{ maxWidth: "20rem" }}
    >
      <h5 className="card-header">{producto.nombre}</h5>
      <div className="card-body">
        <h6 className="card-title">Articulo: {producto.id}</h6>
        <h6 className="card-title">Categoria: {producto.categoria}</h6>
        <h6 className="card-title">Precio: ${producto.precio}</h6>
        <h6 className="card-title">Disponible: {producto.disponible}</h6>
        {producto.imagen ? (
          <img
            src={producto.imagen}
            width="30%"
            height="30%"
            onError={(e) => {
              e.target.src =
                "https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png"; // Imagen de respaldo en caso de error
            }}
          />
        ) : (
          <p>Imagen no disponible</p>
        )}
        <h6 className="card-title">Descripcion1: {producto.descripcion1}</h6>
        <h6 className="card-title">Descripcion2: {producto.descripcion2}</h6>

        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </article>
  );
};
export default ProductoID;
