import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, fetchCategoryProducts } from "../../utils";

const productsContext = createContext();

function ProductsProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  function handleFilterProducts(productCategory = null) {
    if (productCategory) {
      const filterProducts = allProducts.filter(
        (product) => product.category === productCategory
      );
      setProducts(filterProducts);
    } else {
      setProducts(allProducts);
    }
  }
  return (
    <productsContext.Provider
      value={{
        allProducts,
        setAllProducts,
        products,
        setProducts,
        onFilterProducts: handleFilterProducts,
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
