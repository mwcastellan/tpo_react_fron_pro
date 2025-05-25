import React, { useState, useContext } from "react";
import HeaderAdm from "../components/estaticos/HeaderAdm";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

/* Login */
const Login = () => {
  const { setIsAutorizado, setUsuario } = useContext(CarritoContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEnviar = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email) validationErrors.email = "Email es requerido";
    if (!password) validationErrors.password = "Password es requerido";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const resp = await fetch(
        "https://681823705a4b07b9d1ce05b2.mockapi.io/tpo-react-fron/usuarios"
      );
      const usuarios = await resp.json();

      const foundUsuario = usuarios.find(
        (usuario) => usuario.email === email && usuario.password === password
      );

      if (!foundUsuario) {
        setErrors({ email: "Las credenciales son inválidas" });
      } else {
        if (foundUsuario.role === "admin") {
          setIsAutorizado(true);
          setUsuario(email);
          navigate("/administrar");
        } else {
          setIsAutorizado(false);
          setUsuario("");
          navigate("/");
        }
      }
    } catch (err) {
      setIsAutorizado(false);
      setUsuario("");
      console.error("Error en el fetch:", err);
      setErrors({
        email: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
      });
    }
  };

  return (
    <>
      <HeaderAdm />
      <section className="container">
        <h4>Administrar Productos</h4>
        <section>
          <form onSubmit={handleEnviar}>
            <fieldset className="ContactoFieldset">
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
              <button type="submit" className="btn btn-secondary">
                Enviar
              </button>
            </fieldset>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
