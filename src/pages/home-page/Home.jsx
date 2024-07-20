import React from "react";
import NavBar from "../../components/header/NavBar";
import Hero from "../../components/hero/Hero.jsx";
import Category from "../../components/category-card/Category.jsx";

import "./home.css";
function Home() {
  return (
    <>
      <div className="home-page">
        <NavBar />
        <Hero />
      </div>
      <div className="cat-cont">
        <hr />
        <Category />
        <Category />
        <Category />
      </div>
    </>
  );
}

export default Home;
