import React, { useEffect, useState } from "react";
import { GiAmpleDress } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useProducts } from "../../Hooks/contexts/ProductsContext";

const NavBar = ({ cartItems }) => {
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );
  return (
    <>
      <div id="navbar">
        <Logo />
        <NavLinks />
        <Theme
          cartItems={cartItems}
          isFakeDark={isFakeDark}
          setIsFakeDark={setIsFakeDark}
        />
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
  const { categoryRef } = useProducts();
  const navigate = useNavigate();

  function handleNavigateScroll() {
    navigate("/");
    setTimeout(function () {
      categoryRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
  return (
    <div className="nav-links">
      <ul>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <span onClick={() => handleNavigateScroll()}>Shop</span>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
      </ul>
    </div>
  );
}

function Theme({ cartItems, setIsFakeDark, isFakeDark }) {
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
          <button
            className="btn-fake-dark-mode"
            onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          >
            {isFakeDark ? "☀️" : "🌙"}
          </button>
          {/* <a href="#">X</a> */}
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
