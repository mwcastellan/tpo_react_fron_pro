import React from "react";
import HeaderAdm from "../components/estaticos/HeaderAdm";
import { useNavigate } from "react-router-dom";

/* Login */
const Login = ({ isAutorizado, setIsAutorizado }) => {
  const ira = useNavigate();
  const autorizar = () => {
    setIsAutorizado(!isAutorizado);
    ira("/administrar");
  };

  return (
    <>
      <HeaderAdm />
      <article className="card mb-3 list-group-item list-group-item-action flex-column align-items-start">
        <h5 className="card-header">Login</h5>
        <div className="card-body">
          <h6 className="card-title">Usuario</h6>
          <h6 className="card-title">Contraseña</h6>
          <br />
          <button className="btn btn-secondary" onClick={() => ira("/")}>
            Inicio
          </button>
          <br /> <br />
          <button className="btn btn-secondary" onClick={autorizar}>
            {isAutorizado ? "Cerrar Sesión" : "Iniciar Sesión"}
          </button>
        </div>
      </article>
    </>
  );
};
export default Login;
