import React, { useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./product.css";

// const URL = "https://fake-shop-api.p.rapidapi.com/products";

function Product({ products, onCartItems }) {
  return (
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
  );
}

function Loadin() {
  return <h1 className="load">Loading products please wait ...</h1>;
}
export default Product;
