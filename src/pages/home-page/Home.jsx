import React from "react";
// import NavBar from "../../components/header/NavBar";
import Hero from "../../components/hero/Hero.jsx";
import Category from "../../components/category-card/Category.jsx";
import Footer from "../../components/footer/Footer.jsx";
import men from "../../assets/category-image/men-cloth-1.jpg";
import women from "../../assets/category-image/women-cloth-1.jpg";

import styles from "./Home.module.css";
import { useProducts } from "../../Hooks/contexts/ProductsContext.jsx";
function Home() {
  const { categoryRef } = useProducts();

  return (
    <div className={styles.homePage}>
      <Hero />
    </div>
  );
}

export default Home;
