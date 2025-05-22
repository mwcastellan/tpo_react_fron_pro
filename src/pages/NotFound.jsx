import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const NotFound = ({ carrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} carrito={carrito} />
      <div className="notfound-container alert alert-dismissible alert-primary">
        <div className="notfound-content">
          <h1 className="notfound-title">404</h1>
          <p className="notfound-subtitle">Caramba...</p>
          <p className="notfound-text">No se encuentra la página.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
