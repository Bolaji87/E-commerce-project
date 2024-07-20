import React from "react";
// import myPic from "./images/horizon.jpg";
import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <HeroDisplayText />
      <HeroDisplayImage />
    </div>
  );
}

function HeroDisplayText() {
  return (
    <div className="hero-display-text">
      <p>
        Welcome to Horizon Unisex Hub, welcome to <br />
        our wall of modest fashion where style meets sophistication.
      </p>
      <h1>horizon unisex hub</h1>
      <button>
        <a href="#">shop now</a>
      </button>
    </div>
  );
}
function HeroDisplayImage() {
  return (
    <div className="hero-image">
      <img src="./images/horizon.jpg" alt="brand-picture" />
    </div>
  );
}
export default Hero;
