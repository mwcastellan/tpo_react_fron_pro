import React from "react";
import { Navigate } from "react-router-dom";

function RutaProtegidas({
  isAutorizado,
  setIsAutorizado,
  children,
}) {
  if (!isAutorizado) {
    return (
      <Navigate
        to="/login"
        isAutorizado={isAutorizado}
        setIsAutorizado = {setIsAutorizado}
        replace
      />
    );
  }
  return children;
}
export default RutaProtegidas;
