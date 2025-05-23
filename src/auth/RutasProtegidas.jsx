import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

function RutaProtegidas({ children }) {
  const { isAutorizado } = useContext(CarritoContext);
  if (!isAutorizado) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default RutaProtegidas;
