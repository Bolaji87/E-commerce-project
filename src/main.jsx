import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { CartProvider } from "./Hooks/contexts/CartContext.jsx";
import { ProductsProvider } from "./Hooks/contexts/ProductsContext.jsx";
import { UserProvider } from "./Hooks/contexts/UserContext.jsx";
import { AuthProvider } from "./Hooks/contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
