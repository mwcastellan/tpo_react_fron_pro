import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { BotonGeneral } from "./estaticos/Estilos";

/* Carrito de Compras */
const Carrito = () => {
  const {
    carrito,
    isCarritoOpen,
    setCarritoOpen,
    handleDeleteFromCarrito,
    confirmCarrito,
  } = useContext(CarritoContext);

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
                <li key={item.id}>
                  <article
                    className="card border-dark"
                    style={{
                      maxWidth: "250px",
                      margin: "10px 5px",
                      padding: "0.5rem",
                      border: "1px solid #eee",
                      borderRadius: "15px",
                      boxShadow: "0 2px 8px  #6f42c1",
                      background: "#fff",
                    }}
                  >
                    <div className="heaProducto">
                      <h6>{item.nombre}</h6>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">Articulo: {item.id}</h6>
                      <p className="card-title">Precio: ${item.precio}</p>
                      <p className="card-title">
                        Cantidad: {item.cantidad} - Total $
                        {item.cantidad * item.precio}
                      </p>
                      {item.imagen1 ? (
                        <div>
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block imgProducto"
                                src={item.imagen1}
                                onError={(e) => {
                                  e.target.src = imagenerr;
                                }}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block  imgProducto"
                                src={item.imagen2}
                                onError={(e) => {
                                  e.target.src = imagenerr;
                                }}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block imgProducto"
                                src={item.imagen3}
                                onError={(e) => {
                                  e.target.src = imagenerr;
                                }}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block imgProducto"
                                src={item.imagen4}
                                onError={(e) => {
                                  e.target.src = imagenerr;
                                }}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      ) : (
                        <img src={imagenerr} width="100%" height="100%" />
                      )}
                    </div>
                    <button
                      className="cart-btn-trash"
                      onClick={() => handleDeleteFromCarrito(item)}
                    >
                      <FaRegTrashCan color="black" aria-label="Eliminar" />
                    </button>
                  </article>
                </li>
              ))}
            </ul>
            <br />
            <h6>
              <p style={{ color: "blue" }}>
                Total general: $
                {carrito.reduce(
                  (total, item) => total + item.precio * item.cantidad,
                  0
                )}
              </p>
            </h6>
            <BotonGeneral
              aria-label="Confirmar su compra"
              onClick={() => confirmCarrito()}
            >
              Confirmar
            </BotonGeneral>
          </section>
        )}
      </div>
    </div>
  );
};

export default Carrito;
