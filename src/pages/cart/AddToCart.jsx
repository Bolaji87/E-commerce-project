import React from "react";
import "./add-to-cart.css";
import { useCart } from "../../Hooks/contexts/CartContext";
import { useNavigate } from "react-router-dom";

function AddToCart() {
  return (
    <div className="cart-cont">
      <CartItems />
      <CartSummary />
    </div>
  );
}

function CartItems() {
  const { cartItems } = useCart();
  return (
    <div className="cart-wrapper">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-list-cont" key={item.id}>
            <img className="cart-img" src={item.image} alt={item.title} />
            <div id="cart-text">
              <button className="free-shipping">Free shipping</button>
              <h2 className="cart-item-h2">{item.title}</h2>
              <h3 className="cart-item-h3">${(item.price * 1.2).toFixed(2)}</h3>
              <h1 className="cart-item-h1">${item.price.toFixed(2)}</h1>
              <h4 className="cart-item-h4">
                {item.description.length > 200
                  ? `${item.description.substring(0, 200)}...`
                  : item.description}
              </h4>
            </div>
          </div>
        ))
      ) : (
        <h1>Cart is empty...start adding items to your cart</h1>
      )}
    </div>
  );
}
function CartSummary() {
  const { cartItems, totalAmount, numberOfItems } = useCart();
  const navigate = useNavigate();
  return (
    <>
      {cartItems.length > 0 && (
        <div className="cart-summary-cont">
          <h2>Total : ${totalAmount.toFixed(2)}</h2>
          <h5> Shipping Cost: $0</h5>
          <h5>Total Items: {numberOfItems}</h5>
          <button
            className="cart-summary-btn"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
}
export default AddToCart;
