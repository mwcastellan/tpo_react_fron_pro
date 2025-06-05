import React, { useState, useContext } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductosLista from "../components/ProductosLista";
import loading from "../assets/loading.gif";
import { CarritoContext } from "../context/CarritoContext";

/* Galeria de Productos */
const GaleriaDeProductos = () => {
  const { cargandoProductos } = useContext(CarritoContext);
  return (
    <>
      <Header />
      <main>
        {cargandoProductos ? (
          <img src={loading} alt="loading" />
        ) : (
          <ProductosLista />
        )}
      </main>
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
