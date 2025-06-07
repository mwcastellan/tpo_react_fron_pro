import React, { useState, useContext, useEffect } from "react";
import { AdministrarContext } from "../context/AdministrarContext";
function ProductoAdmFormUpd({ seleccionado }) {
  const { updProducto, setOpenUpd, errores, checkProducto, setActProducto } =
    useContext(AdministrarContext);
  const [producto, setProducto] = useState(seleccionado);

  const handleSubmitUpd = (e) => {
    setActProducto(false);
    e.preventDefault();
    if (!checkProducto(producto)) {
      return;
    }
    updProducto(producto);
    setOpenUpd(false);
    setActProducto(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  return (
    <div className="cart-drawer open">
      <h2>Modificar productos</h2>
      <article className="card border-secondary" style={{ maxWidth: "23rem" }}>
        <form onSubmit={handleSubmitUpd} className="p-4 border rounded shadow">
          <fieldset>
            <div className="card-body">
              <label className="form-label">Articulo: {producto.id}</label>
              <br />
              <label className="form-label">Nombre: </label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                value={producto.nombre}
                onChange={handleChange}
                required
              />
              {errores.nombre && (
                <p style={{ color: "red" }}>{errores.nombre}</p>
              )}

              <label className="form-label">Precio:</label>
              <input
                className="form-control"
                type="number"
                name="precio"
                value={producto.precio}
                onChange={handleChange}
                required
                min="0"
              />
              {errores.precio && (
                <p style={{ color: "red" }}>{errores.precio}</p>
              )}

              <label className="form-label">Disponible:</label>
              <input
                className="form-control"
                type="number"
                name="disponible"
                value={producto.disponible}
                onChange={handleChange}
                required
                min="0"
              />
              {errores.disponible && (
                <p style={{ color: "red" }}>{errores.disponible}</p>
              )}

              <label className="form-label">Imagen:</label>
              <input
                className="form-control"
                type="text"
                name="imagen"
                value={producto.imagen}
                onChange={handleChange}
                required
              />
              {errores.imagen && (
                <p style={{ color: "red" }}>{errores.imagen}</p>
              )}

              <label className="form-label">Cantidad:</label>
              <input
                className="form-control"
                type="number"
                name="cantidad"
                value={producto.cantidad}
                onChange={handleChange}
                required
                min="0"
              />
              {errores.cantidad && (
                <p style={{ color: "red" }}>{errores.cantidad}</p>
              )}

              <label className="form-label">Descripción1:</label>
              <input
                className="form-control"
                type="text"
                name="descripcion1"
                value={producto.descripcion1}
                onChange={handleChange}
                required
              />
              {errores.descripcion1 && (
                <p style={{ color: "red" }}>{errores.descripcion1}</p>
              )}

              <label className="form-label">Descripción2:</label>
              <input
                className="form-control"
                type="text"
                name="descripcion2"
                value={producto.descripcion2}
                onChange={handleChange}
                required
              />
              {errores.descripcion2 && (
                <p style={{ color: "red" }}>{errores.descripcion2}</p>
              )}

              <label className="form-label">Categoría:</label>
              <input
                className="form-control"
                type="text"
                name="categoria"
                value={producto.categoria}
                onChange={handleChange}
                required
              />
              {errores.categoria && (
                <p style={{ color: "red" }}>{errores.categoria}</p>
              )}

              <button className="btn btn-secondary" type="submit">
                Modificar
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setOpenUpd(false);
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

export default ProductoAdmFormUpd;
