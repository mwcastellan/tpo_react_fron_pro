import React from "react";
import { Navigate } from "react-router-dom";

function RutaProtegidas({
  isAutorizado,
  children,
}) {
  if (!isAutorizado) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }
  return children;
}
export default RutaProtegidas;
