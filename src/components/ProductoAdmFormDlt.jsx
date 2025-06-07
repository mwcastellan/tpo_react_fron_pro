import React, { useState, useContext, useEffect } from "react";
import { AdministrarContext } from "../context/AdministrarContext";
function ProductoAdmFormDlt({ seleccionado }) {
  const [producto, setProducto] = useState(seleccionado);
  const { dltProducto, setOpenDlt, setActProducto } =
    useContext(AdministrarContext);

  const handleSubmitDlt = (e) => {
    setActProducto(false);
    e.preventDefault();
    dltProducto(producto);
    alert("Producto eliminado: " + producto.id + " - " + producto.nombre);
    setOpenDlt(false);
    setActProducto(true);
  };

  return (
    <div className="cart-drawer open">
      <h2>Eliminar productos</h2>
      <article className="card border-secondary" style={{ maxWidth: "23rem" }}>
        <form onSubmit={handleSubmitDlt} className="p-4 border rounded shadow">
          <fieldset>
            <h5 className="card-header">{producto.nombre}</h5>
            <div className="card-body">
              <h6 className="card-title">Articulo: {producto.id}</h6>
              <h6 className="card-title">Categoria: {producto.categoria}</h6>
              <h6 className="card-title">Precio: ${producto.precio}</h6>
              <button className="btn btn-secondary" type="submit">
                Eliminar
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setOpenDlt(false);
                  setActProducto(false);
                }}
              >
                Cerrar
              </button>
            </div>
          </fieldset>
        </form>
      </article>
    </div>
  );
}

export default ProductoAdmFormDlt;
