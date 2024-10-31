import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./product.css";
import { fetchProducts } from "../../utils";
import { ALLOEWD_CATEGORIES } from "../../route";

// const URL = "https://fake-shop-api.p.rapidapi.com/products";

function Product({ onCartItems }) {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      const res = await fetchProducts();
      setProducts(res);
      setAllProducts(res);
    }
    getProducts().catch((e) => console.error("we have an error", e));
  }, []);

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
    <div className="products-cont">
      <div className="select-category">
        <span onClick={() => handleFilterProducts()}>All</span>
        <span onClick={() => handleFilterProducts(ALLOEWD_CATEGORIES.WOMENS)}>
          Women's
        </span>
        <span onClick={() => handleFilterProducts(ALLOEWD_CATEGORIES.MENS)}>
          Men's
        </span>
      </div>
      <div className="products">
        <ul>
          {products.length > 0 ? (
            products.map(
              (product) =>
                product.category !== "jewelery" &&
                product.category !== "electronics" && (
                  <ProductCard
                    product={product}
                    key={product.id}
                    onCartItems={onCartItems}
                  />
                )
            )
          ) : (
            <Loadin />
          )}
        </ul>
      </div>
    </div>
  );
}

function Loadin() {
  return <h1 className="load">Loading products please wait ...</h1>;
}
export default Product;
