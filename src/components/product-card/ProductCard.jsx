import React from "react";
import "./product-card.css";

function ProductCard({ product, onCartItems }) {
  return (
    <>
      <div className="product-card">
        <li>
          <p>{product.category}</p>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <span id="product-price"> $ {product.price}</span>
          <p className="product-title">{product.title}</p>
          <span
            className="add-to-cart"
            role="button"
            onClick={() => onCartItems(product)}
          >
            <a href="">Add to cart</a>
          </span>
        </li>
      </div>
    </>
  );
}

export default ProductCard;
