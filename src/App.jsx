import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Inicio from "./pages/Inicio";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Adoptame from "./pages/Adoptame";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import ProductoID from "./components/ProductoID";
import Login from "./pages/Login";
import Administrar from "./pages/Administrar";
import RutaProtegida from "./auth/RutasProtegidas";

/* APP */
function App() {
  /* Carrito de compras */
  const [carrito, setCarrito] = useState([]);
  /* Productos - viene de URL Json */
  const [productos, setProductos] = useState([]);
  /* Cargando - Señal de carga de productos */
  const [cargando, setCargando] = useState(true);
  /* Error - Errores */
  const [error, setError] = useState(false);
  /* isCartOpen - Señal carrito abierto */
  /* const [isCartOpen, setIsCartOpen] = useState(false); */
  /* Autorizado a ingresar a Administrar */
  const [isAutorizado, setIsAutorizado] = useState(false);

  useEffect(() => {
    fetch(
      "https://681823705a4b07b9d1ce05b2.mockapi.io/tpo-react-fron/productos"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  const handleAddToCart = (producto) => {
    const productoExist = carrito.find((item) => item.id === producto.id);

    if (productoExist) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad:
                  producto.cantidad < producto.disponible
                    ? producto.cantidad
                    : producto.cantidad,
              }
            : item
        )
      );
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const handleDeleteFromCart = (producto) => {
    setCarrito((preVCart) => {
      return preVCart
        .map((item) => {
          if (item.id === producto.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Inicio borrarProducto={handleDeleteFromCart} carrito={carrito} />
          }
        />
        <Route
          path="/productos"
          element={
            <GaleriaDeProductos
              borrarProducto={handleDeleteFromCart}
              agregarCarrito={handleAddToCart}
              carrito={carrito}
              productos={productos}
              cargando={cargando}
            />
          }
        />
        <Route
          path="/adoptame"
          element={
            <Adoptame borrarProducto={handleDeleteFromCart} carrito={carrito} />
          }
        />
        <Route
          path="/contacto"
          element={
            <Contacto borrarProducto={handleDeleteFromCart} carrito={carrito} />
          }
        />
        <Route
          path="*"
          element={
            <NotFound borrarProducto={handleDeleteFromCart} carrito={carrito} />
          }
        />
        <Route
          path="/productos/:id"
          element={<ProductoID productos={productos} />}
        />
        <Route
          path="/login"
          element={
            <Login
              isAutorizado={isAutorizado}
              setIsAutorizado={setIsAutorizado}
            />
          }
        />
        <Route
          path="/administrar"
          element={
            <RutaProtegida
              isAutorizado={isAutorizado}
              setIsAutorizado={setIsAutorizado}
            >
              <Administrar
                isAutorizado={isAutorizado}
                setIsAutorizado={setIsAutorizado}
                productos={productos}
              />
            </RutaProtegida>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
