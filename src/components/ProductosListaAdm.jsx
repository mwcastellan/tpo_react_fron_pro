import React, { useState, useContext } from "react";
import ProductoAdm from "./ProductoAdm";
import ProductoAdmForm from "./ProductoAdmForm";
import { CarritoContext } from "../context/CarritoContext";

/* Lista de Productos Administrar */
const ProductosListaAdm = () => {
  const { productos } = useContext(CarritoContext);
  const [filtro, setFiltro] = useState("");
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  const [mostrarInput, setMostrarInput] = useState(false);
  const [open, setOpen] = useState(false);

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        "https://681823705a4b07b9d1ce05b2.mockapi.io/tpo-react-fron/productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );
      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }
      const data = await respuesta.json();
      alert("Producto agregado correctamente");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="ProductList_Filtro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Administrar los productos:</h4>
            </div>
            <div className="col">
              <button
                className="btn btn-secondary"
                onClick={() => setOpen(true)}
              >
                Agregar un nuevo Producto
              </button>
              {open && <ProductoAdmForm onAgregar={agregarProducto} setOpen={setOpen} />}
            </div>

            <div className="col">
              <button
                className="accordion-button collapsed"
                onClick={() => setMostrarInput(!mostrarInput)}
              >
                {mostrarInput ? "Filtrar por Nombre ▲" : "Filtrar por Nombre ▼"}
              </button>
              {mostrarInput && (
                <section>
                  <input
                    type="text"
                    className="form-control"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                  />
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="list-group container">
        <div className="row">
          {productosFiltrados.map((producto) => (
            <ProductoAdm key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductosListaAdm;
