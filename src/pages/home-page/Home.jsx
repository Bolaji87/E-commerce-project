import React from "react";
// import NavBar from "../../components/header/NavBar";
import Hero from "../../components/hero/Hero.jsx";
import Category from "../../components/category-card/Category.jsx";
import Footer from "../../components/footer/Footer.jsx";
import men from "../../assets/category-image/men-cloth-1.jpg";
import women from "../../assets/category-image/women-cloth-1.jpg";

import "./home.css";
import { useProducts } from "../../Hooks/contexts/ProductsContext.jsx";
function Home() {
  const { categoryRef } = useProducts();

  return (
    <>
      <div className="home-page">
        <Hero />

        <div className="home-cat">
          <hr />
          <h1 id="cat-h1">Categories</h1>
          <div className="cat-cont" ref={categoryRef}>
            <Category image={women} title={"Women's clothing"} />
            <Category image={men} title={"Men's clothing"}  />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
