import { useEffect, useState } from "react";
import Home from "./pages/home-page/Home";
import NavBar from "./components/header/NavBar";
import { appRoute } from "./route";
import { Route, Routes } from "react-router-dom";

const URL = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok)
          throw new Error("something went wrong with fetching products");

        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  function handleCartItems(product) {
    setCartItems((curProducts) => [...curProducts, product]);
  }
  return (
    <>
      <NavBar cartItems={cartItems} />
      <Routes>
        {appRoute.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            element={
              <route.component
                onCartItems={handleCartItems}
                products={products}
              />
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
