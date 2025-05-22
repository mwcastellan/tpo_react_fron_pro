import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductosLista from "../components/ProductosLista";
import loading from "../assets/loading.gif";

/* Galeria de Productos */
const GaleriaDeProductos = ({
  carrito,
  productos,
  cargando,
  agregarCarrito,
  borrarProducto,
}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} carrito={carrito} />
      {cargando ? (
        <img src={loading} alt="loading" />
      ) : (
        <ProductosLista agregarCarrito={agregarCarrito} productos={productos} />
      )}

      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
