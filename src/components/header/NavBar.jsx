import React from "react";
import { FaBagShopping } from "react-icons/fa6";

import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={styles.navBar}>
      <h2>Horizon Hub</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <FaBagShopping className={styles.cartLogo} />
          </li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
