import React from "react";
import "./product-card.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <li>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <p>{product.title}</p>
        <h3>{product.category}</h3>
      </li>
    </div>
  );
}

export default ProductCard;
