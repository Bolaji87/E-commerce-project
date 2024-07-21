import React from "react";
import NavBar from "../../components/header/NavBar";
import Hero from "../../components/hero/Hero.jsx";
import Category from "../../components/category-card/Category.jsx";
import men from "../../assets/category-image/men-cloth-1.jpg";
import women from "../../assets/category-image/women-cloth-1.jpg";

import "./home.css";
function Home() {
  return (
    <>
      <div className="home-page">
        <NavBar />
        <Hero />
      </div>

      <div className="home-cat">
        <hr />
        <h1 id="cat-h1">Categories</h1>
        <div className="cat-cont">
          <Category image={women} title={"Women's clothes"} />
          <Category image={men} title={"Men's clothes"} />
        </div>
      </div>
    </>
  );
}

export default Home;
