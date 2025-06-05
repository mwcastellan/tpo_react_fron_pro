import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AutorizarContext } from "../context/AutorizarContext";

function RutaProtegidas({ children }) {
  const { isAutorizado } = useContext(AutorizarContext);
  if (!isAutorizado) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default RutaProtegidas;
