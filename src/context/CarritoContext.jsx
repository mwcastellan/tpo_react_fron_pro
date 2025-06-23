import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  /* API para Galeria de productos */
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

  /* Filtrar productos en la visualizacion */
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  /* const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) );*/
  /* Por Nombre y/o Categoria */
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) &&
      producto.categoria.toLowerCase().includes(filtroCategoria.toLowerCase())
  );
  const [mostrarInputNombre, setMostrarInputNombre] = useState(false);
  const [mostrarInputCategoria, setMostrarInputCategoria] = useState(false);

  /* Adicioinar al Carrito */
  const handleAddToCarrito = (producto) => {
    const productoExist = carrito.find((item) => item.id === producto.id);
    if (productoExist) {
      toast.success(
        `El producto ${producto.nombre} se ha actualizado en el carrito`
      );
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
      toast.success(`El producto ${producto.nombre} se ha agregado al carrito`);
      setCarrito([...carrito, producto]);
    }
  };
  /* Eliminar del Carrito */
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
  /* Confirmar al Carrito */
  const confirmCarrito = () => {
    /* Para futura version */
    /* Validar stock productos */
    /* Confirmar la Compra     */
    /* etc, etc                */
    toast.info(`Muchas gracias por su compra`);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        productos,
        filtroNombre,
        setFiltroNombre,
        filtroCategoria,
        setFiltroCategoria,
        mostrarInputNombre,
        mostrarInputCategoria,
        setMostrarInputNombre,
        setMostrarInputCategoria,
        productosFiltrados,
        cargandoProductos,
        error,
        handleAddToCarrito,
        handleDeleteFromCarrito,
        isCarritoOpen,
        setCarritoOpen,
        confirmCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
