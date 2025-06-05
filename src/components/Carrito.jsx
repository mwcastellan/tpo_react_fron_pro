import React, {useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

/* Carrito de Compras */
const Carrito = () => {
  const { carrito, isCarritoOpen, setCarritoOpen, handleDeleteFromCarrito } =
    useContext(CarritoContext);

  return (
    <div className={`bg-primary cart-drawer ${isCarritoOpen ? "open" : ""}`}>
      <div className="cart cart-header bg-primary">
        <h2>Carrito de Compras</h2>

        <button
          onClick={() => setCarritoOpen(false)}
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          <i className="far fa-window-close"></i>
        </button>
      </div>
      <div className="cart-content">
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <section>
            <ul className="card-header">
              {carrito.map((item, index) => (
                <li
                  className="card-body d-flex justify-content-between align-items-center"
                  key={index}
                  style={{ fontSize: "85%" }}
                >
                  <article className="card">
                    <ul>
                      <li className="card-header d-flex justify-content-between align-items-center">
                        <img src={item.imagen} width="15%" height="15%" />
                        <b>{item.nombre} </b>
                        <span>Precio ${item.precio}</span>
                        <span>Disponible {item.disponible}</span>
                      </li>
                      <li className="card-body d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary rounded-pill">
                          Cantidad {item.cantidad}
                        </span>
                        <span className="badge bg-secondary rounded-pill">
                          Total ${item.cantidad * item.precio}
                        </span>
                        <button onClick={() => handleDeleteFromCarrito(item)}>
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </li>
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
            <br />
            <button className="btn btn-secondary">Confirmar</button>
          </section>
        )}
      </div>
    </div>
  );
};

export default Carrito;
