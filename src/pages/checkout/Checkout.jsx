import React from "react";
import "./checkout.css";
import { useUser } from "../../Hooks/contexts/UserContext";
import { useCart } from "../../Hooks/contexts/CartContext";
function Checkout() {
  const { user } = useUser();
  const { cartItems } = useCart();
  return (
    <div>
      <h1>Checkout</h1>
      {user && cartItems ? (
        <div className="cart-summary-cont">
          {/* <h2>Total : ${totalAmount.toFixed(2)}</h2> */}
          <h5> Shipping Cost: $0</h5>
          {/* <h5>Total Items: {numberOfItems}</h5> */}
          <h5>
            Shipping Address
            <span className="text-purple">
              {user.address.city} {user.address.street}
            </span>
          </h5>
          <h5>
            Biller :{" "}
            <span>
              {user.name.firstname} {user.name.lastname}
            </span>
          </h5>
          <button className="cart-summary-btn">Pay Now</button>
        </div>
      ) : (
        <h1>No Items</h1>
      )}
    </div>
  );
}

export default Checkout;
