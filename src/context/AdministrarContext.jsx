import { createContext, useState, useEffect } from "react";
/* Variables y Procedimiento globales para Administrar los Productos */
export const AdministrarContext = createContext();

export const AdministrarProvider = ({ children }) => {
  /* Productos - viene de URL Json */
  const [productos, setProductos] = useState([]);
  /* Cargando - Señal de carga de productos */
  /*const [loadProductos, setLoadProductos] = useState(true);*/
  /* Errores */
  const [errores, setErrores] = useState({});

  /* Producto seleccionado */
  const [seleccionado, setSeleccionado] = useState(null);
  /* Flags producto actualizado */
  const [actproducto, setActProducto] = useState(true);
  /* Flags Formularios abiertos - Add-Upd-Dlt */
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpd, setOpenUpd] = useState(false);
  const [openDlt, setOpenDlt] = useState(false);

  /* URL de productos */
  const ApiURL =
    "https://681823705a4b07b9d1ce05b2.mockapi.io/tpo-react-fron/productos";

  /* Carga Productos desde URL */
  useEffect(() => {
    fetch(ApiURL)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setErrores(true);
      });
  }, []);

  /* Filtrar productos en la visualizacion */
  const [filtroNombre, setFiltroNombre] = useState("");
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
  );
  const [mostrarInputNombre, setMostrarInputNombre] = useState(false);

  /* Cargar Productos eventual */
  const loadProductos = async () => {
    try {
      const res = await fetch(ApiURL);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.log("Error al cargar productos ", error);
    }
  };

  /* Alta Producto */
  const addProducto = async (producto) => {
    try {
      const respuesta = await fetch(ApiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }
      const data = await respuesta.json();
      loadProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Eliminar Producto */
  const dltProducto = async (producto) => {
    try {
      const respuesta = await fetch(ApiURL + "/" + producto.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok)
        throw Error("Error al actualizar el producto" + producto);
      const data = await respuesta.json();
      loadProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Modificar Producto */
  const updProducto = async (producto) => {
    try {
      const respuesta = await fetch(ApiURL + "/" + producto.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok)
        throw Error("Error al actualizar el producto" + producto);
      const data = await respuesta.json();
      loadProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Validar Producto */
  const checkProducto = (producto) => {
    const nuevosErrores = {};
    if (!producto.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!producto.precio || producto.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser mayor a 0.";
    }
    if (!producto.disponible || producto.disponible <= 0) {
      nuevosErrores.disponible = "El disponible debe ser mayor a 0.";
    }
    if (!producto.imagen.trim()) {
      nuevosErrores.imagen = "Informe imagen URL.";
    }
    if (!producto.descripcion1.trim() || producto.descripcion1.length < 10) {
      nuevosErrores.descripcion1 =
        "La descripción1 debe tener al menos 10 caracteres.";
    }
    if (!producto.descripcion2.trim() || producto.descripcion2.length < 10) {
      nuevosErrores.descripcion2 =
        "La descripción2 debe tener al menos 10 caracteres.";
    }
    if (!producto.categoria.trim() || producto.categoria.length < 5) {
      nuevosErrores.categoria =
        "La categoría debe tener al menos 5 caracteres.";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  return (
    <AdministrarContext.Provider
      value={{
        productos,
        setProductos,
        seleccionado,
        setSeleccionado,
        filtroNombre,
        setFiltroNombre,
        productosFiltrados,
        mostrarInputNombre,
        setMostrarInputNombre,
        addProducto,
        updProducto,
        dltProducto,
        openAdd,
        openUpd,
        openDlt,
        setOpenAdd,
        setOpenUpd,
        setOpenDlt,
        errores,
        checkProducto,
        actproducto,
        setActProducto,
      }}
    >
      {children}
    </AdministrarContext.Provider>
  );
};
