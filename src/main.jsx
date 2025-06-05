import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { AutorizarProvider } from "./context/AutorizarContext.jsx";
import { AdministrarProvider } from "./context/AdministrarContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

/* Main */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CarritoProvider>
        <AutorizarProvider>
          <AdministrarProvider>
            <App />
          </AdministrarProvider>
        </AutorizarProvider>
      </CarritoProvider>
    </Router>
  </StrictMode>
);
