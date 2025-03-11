import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const productsContext = createContext();

function ProductsProvider({ children }) {
  const categoryRef = useRef(null);

  return (
    <productsContext.Provider
      value={{
        categoryRef,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(productsContext);
  if (context === undefined)
    throw new Error("context was used outside of ProductsProvider");
  return context;
}

export { ProductsProvider, useProducts };
