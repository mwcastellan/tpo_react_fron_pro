import { createContext, useState, useEffect } from "react";
/* Variables y Procedimiento globales para Carrito */
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  /* Carrito de compras */
  const [carrito, setCarrito] = useState([]);
  /* Productos - viene de URL Json */
  const [productos, setProductos] = useState([]);
  /* Cargando - Señal de carga de productos */
  const [cargandoProductos, setCargandoProductos] = useState(true);
  /* Error - Errores */
  const [error, setError] = useState(false);
  /* isCarritoOpen - Señal carrito abierto */
  const [isCarritoOpen, setCarritoOpen] = useState(false);
  /* Autorizado a ingresar a Administrar */
  const [isAutorizado, setIsAutorizado] = useState(false);
  /* Usuario Autenticado */
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    fetch(
      "https://681823705a4b07b9d1ce05b2.mockapi.io/tpo-react-fron/productos"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setCargandoProductos(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setCargandoProductos(false);
        setError(true);
      });
  }, []);

  const handleAddToCarrito = (producto) => {
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

  const handleDeleteFromCarrito = (producto) => {
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
    <CarritoContext.Provider
      value={{
        carrito,
        productos,
        cargandoProductos,
        error,
        handleAddToCarrito,
        handleDeleteFromCarrito,
        isAutorizado,
        setIsAutorizado,
        isCarritoOpen,
        setCarritoOpen,
        usuario,
        setUsuario,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
