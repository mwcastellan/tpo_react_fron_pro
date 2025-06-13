import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* Variables y Procedimiento globales para Autorizar */
export const AutorizarContext = createContext();

export const AutorizarProvider = ({ children }) => {
  /* Autorizado a ingresar a Administrar */
  const [isAutorizado, setIsAutorizado] = useState(false);
  /* Usuario Autenticado */
  const [usuario, setUsuario] = useState("");
  /* Validacion Login */
  /* Mail */
  const [email, setEmail] = useState("");
  /* Contraseña */
  const [password, setPassword] = useState("");
  /* Error */
  const [errors, setErrors] = useState({});
  /* Navigate */
  const navigate = useNavigate();

  /* Token */
  const token = `fake-token-${usuario}`;

  useEffect(() => {
    if (isAutorizado) {
      setIsAutorizado(true);
      navigate("/Administrar");
    }
  }, []);

  /* Validad Ingreso */
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
      setErrors({ email: "" });
      if (!foundUsuario) {
        setErrors({ email: "Las credenciales son inválidas" });
      } else {
        /* Solamente rolo admin */
        if (foundUsuario.role === "admin") {
          setIsAutorizado(true);
          setUsuario(foundUsuario.email);
          localStorage.setItem("autorizadoToken", token);
          navigate("/Administrar");
        } else {
          setIsAutorizado(false);
          setUsuario("");
          localStorage.removeItem("autorizadoToken");
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

  const cloSession = () => {
    setIsAutorizado(false);
    localStorage.removeItem("autorizadoToken");
  };

  return (
    <AutorizarContext.Provider
      value={{
        isAutorizado,
        setIsAutorizado,
        usuario,
        setUsuario,
        email,
        setEmail,
        password,
        setPassword,
        errors,
        setErrors,
        handleEnviar,
        cloSession,
      }}
    >
      {children}
    </AutorizarContext.Provider>
  );
};

export const useAutorizar = () => useContext(AutorizarContext);
