import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { CarritoProvider } from "./context/CarritoContext.jsx";
import { AutorizarProvider } from "./context/AutorizarContext.jsx";
import { AdministrarProvider } from "./context/AdministrarContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";

/* Main */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CarritoProvider>
        <AutorizarProvider>
          <AdministrarProvider>
            <App />
            <ToastContainer />
          </AdministrarProvider>
        </AutorizarProvider>
      </CarritoProvider>
    </Router>
  </StrictMode>
);
