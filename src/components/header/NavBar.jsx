import React from "react";
import { GiAmpleDress } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

const NavBar = ({ cartItems }) => {
  return (
    <>
      <div id="navbar">
        <Logo />
        <NavLinks />
        <Theme cartItems={cartItems} />
      </div>
    </>
  );
};

function Logo() {
  const navigate = useNavigate();
  const style = { cursor: "pointer" };
  return (
    <div className="logo">
      <GiAmpleDress className="horizon-icon" />
      <h1 onClick={() => navigate("/")} role="button" style={style}>
        Horizon unisex hub
      </h1>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="nav-links">
      <ul>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
      </ul>
    </div>
  );
}

function Theme({ cartItems }) {
  return (
    <div className="theme">
      <ul>
        <li>
          <Link className="to-cart" to="/to-cart">
            <span className="cart-state" style={{ fontSize: "12px" }}>
              {cartItems ? cartItems.length : ""}
            </span>
            <FiShoppingCart />
          </Link>
        </li>
        <li>
          <a href="#">login</a>
        </li>
        <li>
          <a href="#">X</a>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
