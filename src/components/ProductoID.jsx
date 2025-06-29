import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import Header from "./estaticos/Header";
import Footer from "./estaticos/Footer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import loading from "../assets/loading.gif";
import imagenerr from "../assets/404-error-3060993_1280.webp";
import { BotonGeneral } from "./estaticos/Estilos";

/* Producto por ID */
const ProductoID = () => {
  const { productos } = useContext(CarritoContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);

  return (
    <>
      <Header />
      {producto ? (
        <article
          className="card border-dark"
          style={{
            maxWidth: "600px",
            margin: "10px 10px",
            padding: "0rem",
            border: "1px solid #eee",
            borderRadius: "15px",
            boxShadow: "0 2px 8px  #6f42c1",
            background: "#fff",
          }}
        >
          <div className="heaProducto">
            <h5>{producto.nombre}</h5>
          </div>
          <div className="card-body">
            <h6 className="card-title">Articulo: {producto.id}</h6>
            <h6 className="card-title">Categoria: {producto.categoria}</h6>
            <h6 className="card-title">Precio: ${producto.precio}</h6>
            <h6 className="card-title">Disponible: {producto.disponible}</h6>
            {producto.imagen1 ? (
              <div>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block imgProducto"
                      src={producto.imagen1}
                      onError={(e) => {
                        e.target.src = imagenerr;
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block  imgProducto"
                      src={producto.imagen2}
                      onError={(e) => {
                        e.target.src = imagenerr;
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block imgProducto"
                      src={producto.imagen3}
                      onError={(e) => {
                        e.target.src = imagenerr;
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block imgProducto"
                      src={producto.imagen4}
                      onError={(e) => {
                        e.target.src = imagenerr;
                      }}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            ) : (
              <img src={imagenerr} width="25%" height="25%" />
            )}
            <h6 className="card-title">
              Descripcion1: {producto.descripcion1}
            </h6>
            <h6 className="card-title">
              Descripcion2: {producto.descripcion2}
            </h6>

            <BotonGeneral onClick={() => navigate(-1)}>Volver</BotonGeneral>
          </div>
        </article>
      ) : (
        <img src={loading} alt="loading" />
      )}
      <Footer />
    </>
  );
};
export default ProductoID;
