import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./product.css";

// const URL = "https://fake-shop-api.p.rapidapi.com/products";
const URL = "https://fakestoreapi.com/products";
function Product() {
  const [products, setProducts] = useState([]);

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
  return (
    <div className="products">
      <ul>
        {products.length > 0 ? (
          products.map(
            (product) =>
              product.category !== "jewelery" &&
              product.category !== "electronics" && (
                <ProductCard product={product} key={product.id} />
              )
          )
        ) : (
          <Loadin />
        )}
      </ul>
    </div>
  );
}

function Loadin() {
  return <h1 className="load">please wait Loading products ...</h1>;
}
export default Product;
