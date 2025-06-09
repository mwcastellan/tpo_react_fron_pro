import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
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
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<GaleriaDeProductos />} />
      <Route path="/productos/:id" element={<ProductoID />} />
      <Route
        path="/administrar"
        element={
          <RutaProtegida>
            <Administrar />
          </RutaProtegida>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/adoptame" element={<Adoptame />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
