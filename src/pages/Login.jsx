import React, { useState, useContext } from "react";
import HeaderAdm from "../components/estaticos/HeaderAdm";
import { useAutorizar } from "../context/AutorizarContext";
import FooterAdm from "../components/estaticos/FooterAdm";
import { BotonGeneral } from "../components/estaticos/Estilos";

/* Login */
const Login = () => {
  const { email, setEmail, password, setPassword, errors, handleEnviar } =
    useAutorizar();
  return (
    <>
      <HeaderAdm />
      <section className="lstProducto_Filtro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Administrar Productos</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <section style={{ maxWidth: "60rem" }}>
          <form onSubmit={handleEnviar} className="p-4 border rounded shadow">
            <label className="form-label mt-4">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className="form-text text-muted">
              {errors.email && <div>{errors.email}</div>}
            </small>

            <label className="form-label mt-4">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className="form-text text-muted">
              {errors.password && <div>{errors.password}</div>}
            </small>
            <br />
            <BotonGeneral type="submit" className="col">
              Enviar
            </BotonGeneral>
          </form>
        </section>
      </section>
      <FooterAdm />
    </>
  );
};

export default Login;
