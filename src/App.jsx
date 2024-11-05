import { useRef, useState } from "react";

import NavBar from "./components/header/NavBar";
import { appRoute } from "./route";
import { Route, Routes } from "react-router-dom";
import { ProductsProvider } from "./Hooks/contexts/ProductsContext";

function App() {
  // const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch(`${BASE_URL}/products`);
  //       if (!res.ok)
  //         throw new Error("something went wrong with fetching products");

  //       const data = await res.json();
  //       setProducts(data);
  //       console.log(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  function handleCartItems(product) {
    setCartItems((curProducts) => [...curProducts, product]);
  }

  return (
    <>
      <ProductsProvider>
        <NavBar cartItems={cartItems} />
        <Routes>
          {appRoute.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              element={<route.component onCartItems={handleCartItems} />}
            />
          ))}
        </Routes>
      </ProductsProvider>
    </>
  );
}

export default App;
