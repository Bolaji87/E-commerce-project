import React from "react";
import { GiAmpleDress } from "react-icons/gi";
import "./navbar.css";

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
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">about</a>
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
