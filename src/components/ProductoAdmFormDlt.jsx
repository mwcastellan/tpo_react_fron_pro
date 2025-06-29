import React, { useState, useContext, useEffect } from "react";
import { AdministrarContext } from "../context/AdministrarContext";
import { BotonGeneral } from "./estaticos/Estilos";
function ProductoAdmFormDlt({ seleccionado }) {
  const [producto, setProducto] = useState(seleccionado);
  const { dltProducto, setOpenDlt, setActProducto } =
    useContext(AdministrarContext);

  useEffect(() => {
    setProducto(seleccionado);
  }, [seleccionado]);

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
      <div className="heaProducto">
        <h5>Eliminar productos</h5>
      </div>
      <article
        style={{
          maxWidth: "600px",
          margin: "10px 10px",
          padding: "0.5rem",
          border: "1px solid #eee",
          borderRadius: "15px",
          boxShadow: "0 2px 8px  #6f42c1",
          background: "#fff",
        }}
      >
        <form onSubmit={handleSubmitDlt} className="p-4 border rounded shadow">
          <div className="heaProducto">
            <h5>{producto.nombre}</h5>
          </div>
          <div className="card-body">
            <h6 className="card-title">Articulo: {producto.id}</h6>
            <h6 className="card-title">Categoria: {producto.categoria}</h6>
            <h6 className="card-title">Precio: ${producto.precio}</h6>
            <h6 className="card-title">Disponible: {producto.disponible}</h6>
            <div className="card-title row">
              <BotonGeneral className="col" type="submit">
                Eliminar
              </BotonGeneral>
              <BotonGeneral
                className="col"
                onClick={() => {
                  setOpenDlt(false);
                  setActProducto(false);
                }}
              >
                Cerrar
              </BotonGeneral>
            </div>
          </div>
        </form>
      </article>
    </div>
  );
}

export default ProductoAdmFormDlt;
