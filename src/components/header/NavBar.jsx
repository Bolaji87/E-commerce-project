import React from "react";
import { GiAmpleDress } from "react-icons/gi";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <Logo />
      <NavLinks />
      <Theme />
    </div>
  );
};

function Logo() {
  return (
    <div className="logo">
      <GiAmpleDress className="horizon-icon" />
      <h1>Horizon unisex hub</h1>
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
          <a href="#">Shop</a>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
      </ul>
    </div>
  );
}

function Theme() {
  return (
    <div className="theme">
      <ul>
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
