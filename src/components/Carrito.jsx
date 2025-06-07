import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { RiCloseLargeFill } from "react-icons/ri";
import { GoTrash } from "react-icons/go";

/* Carrito de Compras */
const Carrito = () => {
  const { carrito, isCarritoOpen, setCarritoOpen, handleDeleteFromCarrito } =
    useContext(CarritoContext);

  return (
    <div className={`cart-drawer ${isCarritoOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h5>Carrito de Compras</h5>

        <button
          className="cart-btn-close"
          onClick={() => setCarritoOpen(false)}
        >
          <RiCloseLargeFill color="black" />
        </button>
      </div>
      <div className="cart-content">
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <section>
            <ul className="cart-content">
              {carrito.map((item, index) => (
                <li className="" key={index} style={{ fontSize: "80%" }}>
                  <article className="card">
                    <ul>
                      <li style={{ listStyle: "none" }}>
                        <span className="cart-cab">
                          <img src={item.imagen} width="15%" height="15%" />
                          {item.nombre}
                        </span>
                        <span>
                          <p>
                            Precio ${item.precio} - Cantidad {item.cantidad}
                          </p>
                        </span>
                        <span>
                          <p>
                            Total ${item.cantidad * item.precio}
                            <button
                              className="cart-btn-trash"
                              onClick={() => handleDeleteFromCarrito(item)}
                            >
                              <GoTrash color="black" />
                            </button>
                          </p>
                        </span>
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
