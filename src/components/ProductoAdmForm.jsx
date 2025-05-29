import React, { useState } from "react";
function ProductoAdmForm({ onAgregar, setOpen }) {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "0",
    disponible: "0",
    imagen: "",
    cantidad: "0",
    descripcion1: "",
    descripcion2: "",
    categoria: "",
  });

  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!producto.precio || producto.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser mayor a 0.";
    }
    if (!producto.disponible || producto.disponible <= 0) {
      nuevosErrores.disponible = "El disponible debe ser mayor a 0.";
    }
    if (!producto.imagen.trim()) {
      nuevosErrores.imagen = "Informe imagen URL.";
    }
    if (!producto.descripcion1.trim() || producto.descripcion1.length < 10) {
      nuevosErrores.descripcion1 =
        "La descripción1 debe tener al menos 10 caracteres.";
    }
    if (!producto.descripcion2.trim() || producto.descripcion2.length < 10) {
      nuevosErrores.descripcion2 =
        "La descripción2 debe tener al menos 10 caracteres.";
    }
    if (!producto.categoria.trim() || producto.categoria.length < 10) {
      nuevosErrores.categoria =
        "La categoría debe tener al menos 10 caracteres.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    onAgregar(producto); // Llamada a la función para agregar el producto
    setProducto({
      nombre: "",
      precio: 0,
      disponible: 0,
      imagen: "",
      cantidad: 0,
      descripcion1: "",
      descripcion2: "",
      categoria: "",
    }); // Limpiar el formulario
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <article
          className="card border-secondary"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-body">
            <label className="form-label">Nombre: </label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              required
            />
            {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}

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
            {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}

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
            {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}

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
              Agregar
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </article>
      </fieldset>
    </form>
  );
}

export default ProductoAdmForm;
