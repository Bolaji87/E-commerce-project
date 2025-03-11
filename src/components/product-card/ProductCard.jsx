import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Hooks/contexts/CartContext";

function ProductCard({
  product,
  image,
  title,
  description,
  category,
  price,
  id,
}) {
  const { setCartItems } = useCart();

  function handleAddToCart() {
    setCartItems((prevState) => {
      return {
        totalAmount: prevState.totalAmount + price,
        numberOfItems: prevState.numberOfItems + 1,
        cartItems: [
          ...prevState.cartItems,
          {
            id: id,
            title: title,
            description: description,
            price: price,
            image: image,
          },
        ],
      };
    });
  }
  return (
    <>
      <div className="product-card">
        <li>
          <p>{category}</p>
          <img className="product-image" src={image} alt={title} />
          <span id="product-price"> $ {price}</span>
          <p className="product-title">{title}</p>
          <span
            className="add-to-cart-span"
            role="button"
            onClick={handleAddToCart}
          >
            Add to cart
          </span>
        </li>
      </div>
    </>
  );
}

export default ProductCard;
