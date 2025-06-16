import React, { useState, useContext, useEffect } from "react";
import Producto from "./Producto";
import { CarritoContext } from "../context/CarritoContext";

/* Lista de Productos */
const ProductosLista = () => {
  const {
    productos,
    productosFiltrados,
    filtroNombre,
    setFiltroNombre,
    filtroCategoria,
    setFiltroCategoria,
    mostrarInputNombre,
    mostrarInputCategoria,
    setMostrarInputNombre,
    setMostrarInputCategoria,
  } = useContext(CarritoContext);

  /* Paginacion */
  const productosPorPagina = 8;
  const [currentPagina, setCurrentPagina] = useState(1);
  /* Si cambia productosFiltrados, resetea la paginación cuando cambian los productos*/
  useEffect(() => {
    setCurrentPagina(1);
  }, [productosFiltrados]);
  /* Variables de paginación que se recalculan automáticamente con los cambios en productos o paginaActual */
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const indexOfLastProducto = currentPagina * productosPorPagina;
  const indexOfFirstProducto = indexOfLastProducto - productosPorPagina;
  const currentProductos = productosFiltrados.slice(
    indexOfFirstProducto,
    indexOfLastProducto
  );

  const cambiarPagina = (direccion) => {
    if (direccion === "prev" && currentPagina > 1) {
      setCurrentPagina(currentPagina - 1);
    }
    if (direccion === "next" && currentPagina < totalPaginas) {
      setCurrentPagina(currentPagina + 1);
    }
  };

  return (
    <>
      <section className="lstProducto_Filtro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Galería de nuestros productos:</h4>
            </div>

            <div className="col">
              <button
                className="accordion-button collapsed"
                onClick={() => setMostrarInputNombre(!mostrarInputNombre)}
              >
                {mostrarInputNombre
                  ? "Filtrar por Nombre ▲"
                  : "Filtrar por Nombre ▼"}
              </button>
              {mostrarInputNombre && (
                <section>
                  <input
                    type="text"
                    className="form-control"
                    value={filtroNombre}
                    onChange={(e) => setFiltroNombre(e.target.value)}
                  />
                </section>
              )}
            </div>

            <div className="col">
              <button
                className="accordion-button collapsed"
                onClick={() => setMostrarInputCategoria(!mostrarInputCategoria)}
              >
                {mostrarInputCategoria
                  ? "Filtrar por Categoria ▲"
                  : "Filtrar por Categoria ▼"}
              </button>
              {mostrarInputCategoria && (
                <section>
                  <input
                    type="text"
                    className="form-control"
                    value={filtroCategoria}
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                  />
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="list-group container">
        <div className="lstProducto">
          {currentProductos.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <section>
        <nav className="mt-3 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outline-primary px-2 py-0 rounded"
            onClick={() => cambiarPagina("prev")}
            disabled={currentPagina === 1}
          >
            −
          </button>
          <span className="fw-bold">
            Página {currentPagina} de {totalPaginas}
          </span>
          <button
            className="btn btn-outline-primary px-2 py-0 rounded"
            onClick={() => cambiarPagina("next")}
            disabled={currentPagina === totalPaginas}
          >
            +
          </button>
        </nav>
      </section>

      <section className="list-group">
        <div
          className="row"
          style={{
            margin: "20px 20px",
            padding: "0rem",
          }}
        >
          <article className="col-sm">
            <i className="fa-solid fa-truck fa-2x"></i>
            <h5>Envío gratis</h5>
            <p>En compras mayores a $22000</p>
          </article>

          <article className="col-sm">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
            <h5>Beneficios</h5>
            <p>En todas tus compras</p>
          </article>

          <article className="col-sm">
            <i className="fa-regular fa-credit-card fa-2x"></i>
            <h5>Todos los medios de pago</h5>
            <p>Tarjetas de crédito, débito o efectivo</p>
          </article>

          <article className="col-sm">
            <i className="fa-solid fa-location-dot fa-2x"></i>
            <h5>Retiro en tienda</h5>
            <p>Beneficios y regalos exclusivos</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductosLista;
